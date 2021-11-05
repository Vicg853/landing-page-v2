import Link from 'next/link'
import Image from 'next/image'

import Logo from '@public/images/global/big_whitebg.svg'
import LinkCustom from '@components/link'
import { 
   NavContainer, 
   NavSubSection 
} from './style'

const Nav: React.FC = () => {
   return (
      <>
         <NavContainer>
            <Logo id="logo"/>
            <NavSubSection>
               <LinkCustom href="/" name='Home' customStyle={{displayAfter: true}} />
            </NavSubSection>
         </NavContainer>
      </>
   )
}

export default Nav