import dynamic from 'next/dynamic'
import type { ThreeBackgroundProps } from './threeBg'

import {
   HeaderContainer,
   HeaderContent
} from './style'

import TestImage from '@p-images/index/test.jpg'
import AlpesLogo from '@images/global/mini.svg'

//* Background components that will be dynamically imported to header based in headers background
const DynamicImageImport = dynamic(() => import('next/image'))
const DynamicThreeImport = dynamic(() => import('./threeBg'))

type DefaultProps = {
   title: string,
   subTitle: string,
   customMask?: boolean,
   illustrationDisplay: boolean,
   customIllustration?: any
}

type ImageBackgroundProps = {
   
}

type OptionalProps = {isThreeBg: ThreeBackgroundProps} | {isImgBg: ImageBackgroundProps} | {}

type HeaderProps = DefaultProps & OptionalProps

const Header: React.FC<HeaderProps> = () => {
   return (
      <HeaderContainer>
         <DynamicImageImport 
         id="background"
         src={TestImage} 
         alt="background"
         layout='fill'
         objectFit="none"
         placeholder="blur"
         quality={100} />
         <HeaderContent>
            <h2>Hello World from AlpesCap !</h2>
            <p>Nós somos a Alpes Capital, olá!!👋😉</p>
         </HeaderContent>
         <AlpesLogo  id='HeaderLogo' />
      </HeaderContainer>
   )
}

export default Header
