import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { SpringValues } from '@react-spring/web'
import { config, useSpring } from '@react-spring/web'

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


const LinkCustom: React.FC<LinkProps> = ({ href, name, customStyle, subLinks }) => {
   const [isOpen, setIsOpen] = useState(false)
   const [offsetState, offsetStateSet] = useState<number>(0)

   const containerRef = useRef<HTMLDivElement>(null)
   const subContainerRef = useRef<HTMLDivElement>(null)

   const subMenuSpring = useSpring({
      transform: isOpen ? 
         'translateY(0)' : 
         'translateY(-2rem)',
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      config: { ...config.stiff },
   }) as SpringValues<{ opacity: number; visibility: "visible" | "hidden"; transform: string }>

   let windowInnerWidth = typeof window !== 'undefined' 
      ? window.innerWidth : 0

   //TODO Improve performance
   useEffect(() => {
      if(!window || !containerRef.current || !isOpen) return

      //? As the subLinks menu is inside a parent component which width is lower than it's width
      //? we must first get the subLinks ref's width and then in the line underneath we then get
      //? the parent's left offset as the following will be relative to the window meanwhile the subLinks
      //? component is relative to the parent (that should be 0)
      let componentWidth = subContainerRef.current ? subContainerRef.current.offsetWidth : 0
      let offsetLeft = containerRef.current ? containerRef.current.offsetLeft : 0

      let windowPaddingLeft = (windowInnerWidth * 0.02)
      let windowWithPaddingRight = windowInnerWidth - (windowInnerWidth * 0.02)
      //? Checking now if the component overflows the screen 
      if(offsetLeft + componentWidth 
         > windowWithPaddingRight) offsetStateSet(windowWithPaddingRight - (offsetLeft + componentWidth))
      else if(offsetLeft < windowPaddingLeft) offsetStateSet(-(windowPaddingLeft - offsetLeft))
      else offsetStateSet(0)
   }, [windowInnerWidth])

   return (
      <LinkContainer ref={containerRef}>
         <Link href={href} passHref>
            <LinkTextContainer
            onMouseOut={() => setIsOpen(false)}
            onMouseOver={() => setIsOpen(true)}>
               <LinkText {...customStyle}>{name}</LinkText>
            </LinkTextContainer>
         </Link>
         {subLinks && (
            <SubLinksContainer 
            ref={subContainerRef}
            style={{...subMenuSpring, translateX: offsetState.toString() + 'px'}}
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