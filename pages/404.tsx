import { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { Container } from '@p-styles/ErrPages'
import { a, useSpring, config } from '@react-spring/web'
const Lottie = dynamic(() => import('@components/react-mini-components/ErrPageLottie'), {
   ssr: false
})

const Err404 = () => {
   const messageSpring = useSpring({
      from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
      opacity: 1, transform: 'translate3d(0, 0, 0)',
      delay: 300,
      config: { ...config.wobbly }
    })
  
   const codeSpring = useSpring({
     from: { opacity: 0, transform: 'translate3d(0, -10px, 0)' },
     opacity: 1, transform: 'translate3d(0, 0, 0)',
     delay: 400,
     config: { ...config.wobbly }
   })
   
   return (
      <Container>
         <a.span className="errorText" style={messageSpring}>
            Uhm.... você tem certeza que está no local correto?  <br/>
            Ou... talvez, você não deveria ter chego até aqui 🧐🤫 estamos te observando... <br/>
            Brincadeira 😉
         </a.span>
         <a.span className="errorCode" style={codeSpring}>
            404
         </a.span>
         <div className='lottie'>
            <Suspense fallback='...carregando animação'>
               <Lottie errorCode={404} />
            </Suspense>
         </div>
      </Container>
   )
}

export default Err404