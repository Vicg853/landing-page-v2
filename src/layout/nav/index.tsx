import type { Dispatch, SetStateAction } from 'react'

import { useEffect, useState } from 'react'
import { a, useSpring, config } from '@react-spring/web'
import { useTheme } from 'styled-components'

import Logo from '@public/images/global/big_whitebg.svg'
import LogoMini from '@public/images/global/mini.svg'
import LinkCustom from './link'
import { 
   NavContainer, 
   NavSubSection,
   NavColorThemeButton,
   NavMiniMenuButton
} from './style'

type NavProps = {
   isDarkTheme: boolean,
   setTheme: Dispatch<SetStateAction<boolean>>,
   miniMenuState: boolean,
   setMiniMenu: Dispatch<SetStateAction<boolean>>
}

//TODO think about and how to add more dynamic sublinks for some pages
//TODO Improve svgs resolution and style 
//TODO Improve performance and overall code quality/impact in website performance
//TODO Look out for the spring values props typing conflicting with css props typing issue and fix it

const Nav: React.FC<NavProps> = ({isDarkTheme, setTheme, miniMenuState, setMiniMenu}) => {
   const theme = useTheme()

   //**** React-spring animation's configs 

   // Color theme button react-spring's animation props array 
   const animPropsColorThemeBTN = {
      dark: {
         rCTBtn: 9,
         transformCTBtn: "rotate(40deg)",
         cxCTBtn: 12,
         cyCTBtn: 4,
         opacityCTBtn: 0
      },
      light: {
         rCTBtn: 5,
         transformCTBtn: "rotate(90deg)",
         cxCTBtn: 30,
         cyCTBtn: 0,
         opacityCTBtn: 1
      },
      springConfig: { ...config.wobbly }
   };

   //Color theme button spring animation values 
   const { rCTBtn, transformCTBtn, cxCTBtn, cyCTBtn, opacityCTBtn } = animPropsColorThemeBTN[isDarkTheme? 'dark' : 'light']
   const svgSpring = useSpring({
      transform: transformCTBtn,
      config: animPropsColorThemeBTN.springConfig
   })
   const moonSpring = useSpring({
      r: rCTBtn,
      config: animPropsColorThemeBTN.springConfig
   })
   const maskSpring = useSpring({
      cx: cxCTBtn, cy: cyCTBtn,
      config: animPropsColorThemeBTN.springConfig
   })
   const groupSpring = useSpring({
      opacity: opacityCTBtn,
      config: animPropsColorThemeBTN.springConfig
   })

   //----
   //Burger button react-spring's animation props array 
   const animPropsBurgerBTN = {
      open: {
         yBurgBtn: -90,
         transformBurgBtn: 45,
      },
      close: {
         yBurgBtn: 0,
         transformBurgBtn: 0,
      },
      springConfig: {...config.default}
   }

   //Menu button spring animation values 
   const { yBurgBtn, transformBurgBtn } = animPropsBurgerBTN[miniMenuState? 'open' : 'close']
   const topSpringBurgBtn = useSpring({
      transform: `translateY(${-yBurgBtn}%)`,
      config: animPropsBurgerBTN.springConfig
   })
   const mid1SpringBurgBtn = useSpring({
      transform: `rotate(${-transformBurgBtn}deg)`,
      config: animPropsBurgerBTN.springConfig
   })
   const mid2SpringBurgBtn = useSpring({
      transform: `rotate(${transformBurgBtn}deg)`,
      config: animPropsBurgerBTN.springConfig
   })
   const botSpringBurgBtn = useSpring({
      transform: `translateY(${yBurgBtn}%)`,
      config: animPropsBurgerBTN.springConfig
   })

   //Checking if scrolled value from top has reached a certain limit
   //to be able to turn on the nav's background on the page
   const [reachedScrollVal, reachedScrollValSet] = useState(false)

   const windowCheck = typeof window !== "undefined"  
      ? window : false

   useEffect(() => {
      if(!windowCheck) return
      function onScroll() {
         //Checking if has scrolled pass limit 
         if(window.scrollY > (window.innerHeight/2)) reachedScrollValSet(true)
         else reachedScrollValSet(false)
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, [])

   return (
      <>
         <NavContainer scrolled={reachedScrollVal} miniMenuState={miniMenuState}>
            <div id="background" />
            <Logo id="logo"/>
            <LogoMini id="logo-mini"/>
            <NavSubSection>

               {/* Start of modifiable content (nav links, may change in case new pages are added or something) */}

               <LinkCustom href="/" name='Home' customStyle={{displayAfter: true}} />
               <LinkCustom href="/about" name='Sobre' customStyle={{displayAfter: true}} />
               <LinkCustom href="/team" name='Time' customStyle={{displayAfter: true}}
               subLinks={[
                  { name: 'Gestão', href: '/management' },
                  { name: 'Conselho', href: '/council' }
               ]} />
               <LinkCustom href="/ong" name='ONGs' customStyle={{displayAfter: true}} 
               subLinks={[
                  { name: 'Arrastão', href: '/management' },
               ]} />
               <LinkCustom href="/donate" name='Doar' customStyle={{displayAfter: true}} />
               <LinkCustom href="/report" name='Relatorios' customStyle={{displayAfter: true}} />
               <LinkCustom href="/contact" name='Contato' customStyle={{displayAfter: true}} />
               <LinkCustom href="/blog" name='Blog' customStyle={{displayAfter: true}} />

               {/* End of modifiable content */}
               {/* Static content (this shouldn't be changed, as it has any relation with the links above: just menu and theme buttons) */}

               <NavMiniMenuButton 
               onClick={() => setMiniMenu(val => !val)}
               aria-label={`${miniMenuState ? `Close` : `Open`} mini page's menu`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" >
                     {/*// @ts-ignore: False error due to original css props not understanding spring values */}
                     <a.rect y="9" x="5" width="90" height="6" rx="4" style={{...topSpringBurgBtn}} fill={theme.palete.textMain} />
                     {/*// @ts-ignore: False error due to original css props not understanding spring values */}
                     <a.rect y="37" x="5" width="90" height="6" rx="4" style={{...mid1SpringBurgBtn, transformOrigin: "center"}} fill={theme.palete.textMain} />
                     {/*// @ts-ignore: False error due to original css props not understanding spring values */}
                     <a.rect y="37" x="5" width="90" height="6" rx="4" style={{...mid2SpringBurgBtn, transformOrigin: "center"}} fill={theme.palete.textMain} />
                     {/*// @ts-ignore: False error due to original css props not understanding spring values */}
                     <a.rect y="65" x="5" width="90" height="6" rx="4" style={{...botSpringBurgBtn}} fill={theme.palete.textMain} />
                  </svg>
               </NavMiniMenuButton>
               <NavColorThemeButton 
                  onClick={() => setTheme(val => !val)} 
                  aria-label={`Set color theme to ${!isDarkTheme? `dark.` : `light.`}`}>
                  <a.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={svgSpring}>
                     <mask id="moon-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        {/*// @ts-ignore: False error due to original css props not understanding spring values */}
                        <a.circle style={maskSpring} r="7" fill="black" />
                     </mask>
                     {/*// @ts-ignore: False error due to original css props not understanding spring values */}
                     <a.circle style={moonSpring} cx="12" cy="12" 
                        fill={theme.palete.textMain} mask="url(#moon-mask)" />
                     <a.g stroke={theme.palete.textMain} style={groupSpring}>
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                     </a.g>
                  </a.svg>
               </NavColorThemeButton>
            </NavSubSection>
         </NavContainer>
      </>
   )
}

export default Nav