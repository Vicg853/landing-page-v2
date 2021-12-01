import {memo} from 'react'
import dynamic from 'next/dynamic'
import type { ThreeBgProps } from './threeBg'
import type { CustomImgBgProps } from './imageBg'

import {
   HeaderContainer,
   HeaderContent
} from './style'

import AlpesLogo from '@images/global/mini.svg'

//* Background components that will be dynamically imported to header based in headers background
const DynamicImageImport = dynamic(() => import('./imageBg'))
const DynamicThreeImport = dynamic(() => import('./threeBg'))

type DefaultProps = {
   title: string
   bgAlt?: string
   subTitle: string
   customMask?: string
   illustrationDisplay: boolean
   CustomIllustration?: any
}

type HeaderProps = DefaultProps & {isCustomThreeBg?: ThreeBgProps, isCustomImgBg?: CustomImgBgProps}

const Header: React.FC<HeaderProps> = ({
   title, subTitle, bgAlt, customMask,
   illustrationDisplay, CustomIllustration, isCustomImgBg, isCustomThreeBg
   }) => {
   return (
      <HeaderContainer>
         {!isCustomThreeBg && (
            <DynamicImageImport
               imgSource={isCustomImgBg?.imgSource}
               bgAlt={bgAlt} 
               customBlurDataURL={isCustomImgBg?.customBlurDataURL}
               customPlaceholder={isCustomImgBg?.customPlaceholder}
               />
         )}
         {isCustomThreeBg && (
            <div id='background'>
               <DynamicThreeImport {...isCustomThreeBg} />
            </div>
         )}
         <HeaderContent customMask={customMask}>
            <h2>{title}</h2>
            <p>{subTitle}</p>
         </HeaderContent>
         {(illustrationDisplay && !CustomIllustration) && <AlpesLogo id='headerIllustration' />}
         {(illustrationDisplay && CustomIllustration) && <CustomIllustration id='headerIllustration' />}
      </HeaderContainer>
   )
}

export default memo(Header)
