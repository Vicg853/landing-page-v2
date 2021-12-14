import { useLottie } from "lottie-react"

import Err500Lottie from '@public/lotties/500-error.json'
import Err404Lottie from '@public/lotties/404-error.json'

type Props = {
   errorCode: 404 | 500 | number
}

const Lottie: React.FC<Props> = ({errorCode}) => {
   const options = {
      animationData: errorCode === 404 ? Err404Lottie : Err500Lottie,
      loop: true,
      autoplay: true,
      className: 'lottie',
   }

   const { View } = useLottie(options)
   return View
}

export default Lottie