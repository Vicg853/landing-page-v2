import styled, { css } from "styled-components"

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
   overflow: hidden;
   z-index: 50;
   #logo{
      height: 60%;
      z-index: 51;
   }
   ::before{
      position: absolute;
      display: block;
      content: "";
      width: 0vw;
      height: 0vw;
      border-radius: 50%;
      margin-left: -15vw;
      background: transparent;
      backdrop-filter: blur(10px);
      transition: 0.3s;
   }
   ${props => props.scrolled && css`
      ::before{
         width: 120vw;
         height: 120vw;
      }
   `}
`

export const NavSubSection = styled.section`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   z-index: 51;
`

export const NavColorThemeButton = styled.button`
   background: transparent;
   width: 1.8rem;
   height: 1.8rem;
   margin-left: 0.5rem;
   margin-right: 0.5rem;
   text-decoration-color: unset;
   text-decoration-line: unset;
   border: none;
   background: transparent;
   display: flex;
   cursor: pointer;
   svg {
      width: 1.6rem !important;
      height: 1.6rem !important; 
      transition: unset;
   }
   @media (max-width: 600px), (max-height: 600px) and (orientation: landscape) {
      width: 2.4rem !important;
      height: 2.4rem !important; 
      svg{
         width: 2.1rem !important;
         height: 2.1rem !important; 
      }
   }
`