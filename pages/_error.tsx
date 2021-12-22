import type { NextPage } from 'next'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { a, useSpring, config } from '@react-spring/web'

const Lottie = dynamic(() => import('@components/react-mini-components/ErrPageLottie'))
import { Container } from '@p-styles/ErrPages'

type Props = {
   statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  const messageSpring = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 300,
    config: { ...config.wobbly }
  })

  const codeSpring = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -10px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 400,
    config: { ...config.wobbly }
  })

  return (
    <Container>
      <a.span className="errorText" style={messageSpring}>
        {statusCode ? 
        `Algo aconteceu... a culpa é nossa provavelmente, não se preocupe<br/>
        Acho que um dos nossos tecnicos derrubaram café no servidor 🤫😅☕ <br/>` 
        : 
        `Estranho... não sei o que aconteceu... Não foi retornado nenhum codigo de erro<br/>
        Mar financeiro deve estar agitado hoje, acho que acabou virando nosso navio 😉<br/>
        Eu sei... pessima piada, nem sentido tem...`}
      </a.span>
      <a.span className="errorCode" style={codeSpring}>
        {statusCode ? statusCode.toString() : `???? 🧐`}
      </a.span> 
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