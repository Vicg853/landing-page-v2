import styled from "styled-components"
import { LinkContainer, LinkText } from './link-style'

type NavProps = {
   scrolled: boolean,
}

export const NavContainer = styled.nav<NavProps>`
   position: fixed;
   top: 0;
   width: 100vw;
   height: 6rem;
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 5vw;
   padding-right: 5vw;
   background: transparent;
   overflow: visible;
   z-index: 50;
   #logo, #logo-mini{
      height: 50%;
      z-index: 51;
      width: min-content;
      min-width: fit-content;
      display: none;
   }
   #logo-mini{
      height: 70% !important;
      display: none;
   }
   #background {
      position: absolute;
      margin-left: -5vw;
      width: 100%;
      height: 100%;
      overflow: hidden;
   }
   #background ::before{
      display: block;
      content: "";
      width: ${props => props.scrolled ? "120vw" : "0"};
      height: ${props => props.scrolled ? "120vw" : "0"};
      border-radius: 50%;
      margin-left: -10vw;
      margin-top: -60vw;
      background: transparent;
      backdrop-filter: blur(10px);
      transition: 0.7s;
   }
   @media (min-width: 1200px) {
      #logo{ display: block; }
      #logo-mini{ display: none; }
   }
   @media (max-width: 1200px) {
      #logo{ display: none; }
      #logo-mini{ display: block; }
      ${LinkContainer} {
         margin: 0.01rem;
      }
      ${LinkText} {
         font-size: 1rem;
      }
   }
   @media (max-width: 760px) {
      #logo{ display: none; }
      #logo-mini{ display: block; }
      ${LinkContainer} {
         display: none !important;
      }
   }
`

export const NavSubSection = styled.section`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   z-index: 51;
`

//Nav buttons style: mini menu button and theme change

export const NavColorThemeButton = styled.button`
   width: 2.1rem;
   height: 2.1rem;
   margin-left: 0.2rem;
   margin-right: 0.2rem;
   text-decoration-color: none;
   text-decoration-line: none;
   border: none;
   background: ${props => props.theme.palete.bgContrast};
   backdrop-filter: blur(10px);
   border-radius: 0.25rem;
   display: flex;
   cursor: pointer;
   justify-content: center;
   align-items: center;
   svg {
      width: 1.6rem !important;
      height: 1.6rem !important; 
      transition: unset;
   }
`

export const NavMiniMenuButton = styled(NavColorThemeButton)`
   @media (min-width: 760px) {
      display: none;
   }
`
