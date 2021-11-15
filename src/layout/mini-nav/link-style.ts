import styled from "styled-components"

//* Main links style

export const CustomLinkContainer = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   flex-direction: column;
   width: 100%;
   height: fit-content;
   background-color: ${props => props.theme.palete.accent3 + '50'};
   border-radius: 0.35rem;
   overflow: hidden;
   margin-top: 0.3rem;
   margin-bottom: 0.3rem;
`

type CustomLinkProps = {
   hasSubLink?: boolean
}

export const CustomLinkStyle = styled.div<CustomLinkProps>`
   display: inline-flex;
   align-items: stretch;
   justify-content: flex-start;
   width: 100%;
   height: fit-content;
   background-color: ${props => props.theme.palete.background};
   padding-top: ${props => !props.hasSubLink ? '0.42rem' : '0rem'};
   padding-bottom: ${props => !props.hasSubLink ? '0.42rem' : '0rem'};
   border-radius: 0.35rem;
   #clickable-text {
      display: inline-flex;
      align-items: center;
      flex-grow: 1;
      padding-left: 0.8rem;
      text-decoration: none;
      color: ${props => props.theme.palete.textMain};
      svg {
         margin-right: 0.5rem;
         width: 1rem;
         height: 1rem;
      }
   }
`

export const SubLinkToggle = styled.sub`
   display: inline-flex;
   align-items: center;
   padding: 0.4rem;
   background-color: ${props => props.theme.palete.accent3};
   color: ${props => props.theme.palete.textInverse};
   width: fit-content;
   padding-right: 0.5rem;
   margin: 0.2rem;
   border-radius: 0.35rem;
   font-size: 0.8rem;
   svg {
      margin-left: 0.5rem;
      width: .9rem;
      height: .9rem;
   }
`

//* All about sublinks 

export const SubLinkContainer = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   flex-direction: column;
   width: 100%;
   height: fit-content;
`
