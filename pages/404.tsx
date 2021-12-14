import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Container } from '@p-styles/ErrPages'
const Lottie = dynamic(() => import('@components/react-mini-components/ErrPageLottie'), {
   suspense: true,
})

const Err404 = () => {
   return (
      <Container>
         <span className="errorText">
            Uhm.... você tem certeza que está no local correto?  <br/>
            Ou... talvez, você não deveria ter chego até aqui 🧐🤫 estamos te observando... <br/>
            Brincadeira 😉
         </span>
         <span className="errorCode">
            404
         </span>
         <div className='lottie'>
            <Suspense fallback='...carregando animação'>
               <Lottie errorCode={404} />
            </Suspense>
         </div>
      </Container>
   )
}

export default Err404