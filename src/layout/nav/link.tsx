import { useState } from 'react'
import Link from 'next/link'
import { config, useSpring } from '@react-spring/web'
import { useTheme } from 'styled-components'

import type { StylesProps } from './link-style'
import { 
   LinkContainer, 
   LinkText, 
   LinkTextContainer,
   SubLinksContainer,
   SubLinkItem
} from './link-style'


type LinkProps = {
   href: string
   name: string
   customStyle?: StylesProps
   subLinks?: Array<{
      title: string,
      href: string,
   }>
}

//TODO Improve animation and style
//TODO Fix
//! Issue where sub menus overflow screen 

const LinkCustom: React.FC<LinkProps> = ({ href, name, customStyle, subLinks }) => {
   const [isOpen, setIsOpen] = useState(false)

   const subMenuSpring = useSpring({
      transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -2rem, 0)',
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      config: { ...config.stiff },
   })

   return (
      <LinkContainer>
         <Link href={href} passHref>
            <LinkTextContainer
            onMouseOut={() => setIsOpen(false)}
            onMouseOver={() => setIsOpen(true)}>
               <LinkText {...customStyle}>{name}</LinkText>
            </LinkTextContainer>
         </Link>
         {subLinks && (
            <SubLinksContainer 
            //@ts-ignore: Good and old error of invalid CSS property but in fact it's a valid property
            style={subMenuSpring} 
            onMouseOut={() => setIsOpen(false)}
            onMouseOver={() => setIsOpen(true)}>
               <div className='content'>
               {subLinks.map((subLink, index) => (
                  <Link href={`${href}${subLink.href}`} passHref key={index}>
                     <SubLinkItem key={index}>{subLink.title}</SubLinkItem>
                  </Link>
               ))}
               </div>
            </SubLinksContainer>
         )}
      </LinkContainer>

   )
}

export default LinkCustom