import styled from "styled-components"

export const NavContainer = styled.nav`
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
   #logo{
      height: 60%;
   }
`

export const NavSubSection = styled.section`
   display: inline-flex;
   justify-content: center;
   align-items: center;
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