import { useEffect, useState } from 'react'
import { a, useSpring } from '@react-spring/web'
import { useTheme } from 'styled-components'

import Logo from '@public/images/global/big_whitebg.svg'
import LinkCustom from './link'
import { 
   NavContainer, 
   NavSubSection,
   NavColorThemeButton
} from './style'

type NavProps = {
   isDarkTheme: boolean,
   setTheme: Function,
   miniMenuState: boolean,
   setMiniMenu: Function
}

//TODO think about and how to add more dynamic sublinks for some pages

const Nav: React.FC<NavProps> = ({isDarkTheme, setTheme}) => {
   const theme = useTheme()

   //Color theme change button's react spring animation config 
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
      springConfig: { mass: 4, tension: 250, friction: 40 }
   };

   //React-spring animation values and tweaks for the colorTheme button
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
         <NavContainer scrolled={reachedScrollVal}>
            <div id="background" />
            <Logo id="logo"/>
            <NavSubSection>
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
               <NavColorThemeButton 
                  onClick={() => setTheme(!isDarkTheme)}  style={{marginLeft: "1.5rem"}} 
                  aria-label={"Set color mode to " + (!isDarkTheme? "dark" : "light")}>
                  <a.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={svgSpring}>
                     <mask id="moon-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        {/*// @ts-ignore: False error due missing css svg typing props  */}
                        <a.circle style={maskSpring} r="7" fill="black" />
                     </mask>
                     {/*// @ts-ignore: False error due missing css svg typing props  */}
                     <a.circle style={moonSpring} cx="12" cy="12" fill={theme.palete.accent1} mask="url(#moon-mask)" />
                     <a.g stroke={theme.palete.accent1} style={groupSpring}>
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