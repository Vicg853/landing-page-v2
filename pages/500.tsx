import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Container } from '@p-styles/ErrPages'
const Lottie = dynamic(() => import('@components/react-mini-components/ErrPageLottie'), {
   suspense: true,
})

const Err500 = () => {
  

   return (
      <Container>
         <span className="errorText">
            Algo aconteceu... a culpa é nossa, não se preocupe<br/>
            Devem ser aqueles guaxinins comendo os cabos do servidor novamente 😅😨 <br/>
         </span>
         <span className="errorCode">
            500
         </span>
         <div className='lottie'>
            <Suspense fallback='...carregando animação'>
               <Lottie errorCode={500} />
            </Suspense>
         </div>
      </Container>
   )
}

export default Err500