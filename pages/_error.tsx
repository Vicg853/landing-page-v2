import type { NextPage } from 'next'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('@components/react-mini-components/ErrPageLottie'), {
  suspense: true,
})
import { Container } from '@p-styles/ErrPages'

type Props = {
   statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <Container>
      <span className="errorText">
        {statusCode ? 
        `Algo aconteceu... a culpa é nossa provavelmente, não se preocupe<br/>
        Acho que um dos nossos tecnicos derrubaram café no servidor 🤫😅☕ <br/>` 
        : 
        `Estranho... não sei o que aconteceu... Não foi retornado nenhum codigo de erro<br/>
        Mar financeiro deve estar agitado hoje, acho que acabou virando nosso navio 😉<br/>
        Eu sei... pessima piada, nem sentido tem...`}
      </span>
      <span className="errorCode">
        {statusCode ? statusCode.toString() : `???? 🧐`}
      </span> 
      <div className='lottie'>
        <Suspense fallback='...carregando animação'>
          <Lottie errorCode={statusCode ? statusCode : 500} />
        </Suspense>
      </div>
    </Container>
  )
 }
 
Error.getInitialProps = ({ res, err }) => {
   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
   return { statusCode }
}
 
export default Error