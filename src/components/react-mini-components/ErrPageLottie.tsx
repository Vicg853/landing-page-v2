//import Lottie from "lottie-react"
import { useEffect, useState } from "react"

import Err500Lottie from '@public/lotties/500-error.json'
import Err404Lottie from '@public/lotties/404-error.json'

type Props = {
   errorCode: 404 | 500 | number
}

const Lottie: React.FC<Props> = ({errorCode}) => {
   const [lottieComp, setLottie] = useState<JSX.Element | null>(null)

    useEffect(() => {
      async function LoadLottie() {
         const options = {
            animationData: errorCode === 404 ? Err404Lottie : Err500Lottie,
            loop: true,
            autoplay: true,
            className: 'Lottie',
         }
   
         await import('lottie-react').then(({ default: Lottie }) => {
            setLottie(<Lottie 
               animationData={options.animationData} 
               loop={options.loop}
               autoplay={options.autoplay}
               className={options.className}
            />)
         })
      }

      LoadLottie()
   }, [errorCode])

   return lottieComp
}

export default Lottie