import { a } from '@react-spring/web'
import styled from 'styled-components'

//* Link big container
export const LinkContainer = styled.div`
   width: min-content;
   height: min-content;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   overflow: visible;
   position: relative;
   margin: 0.3rem;
`

//* Main link component style

export type StylesProps = {
   color?: string
}


export const LinkText = styled.span<StylesProps>`
   position: relative;
   font-family: var(--fonts-secondary);
   text-decoration: none;
   width: fit-content;
   color: var(--palette-textMain);
   font-size: 1.15rem;
   font-weight: 400;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   overflow: visible;
   transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
   background: transparent;
   border-radius: 6px;
   padding-top: 0.1rem;
   padding-bottom: 0.1rem;
   padding-left: 0.5rem;
   padding-right: 0.5rem;
   :after, :before {
      content: '';
      background: grey;
      position: absolute;
   }
   :after {
      width: 100%;
      height: 20px;
      left: 10px;
      bottom: 0;
      transform: translateY(100%) rotateX(90deg);
   }
   :before {
      width: 20px;
      height: 100%;
      right: 0;
      transform: translateX(100%) rotateY(90deg);
      top: 10px;
   }
`

export const LinkTextContainer = styled.a`
   display: block;
   perspective: 2000px;
   perspective-origin: 50% 50%;
   cursor: pointer;
   z-index: calc(var(--zIndex-navDropdown) + 1);
   :hover ${LinkText} {
      transform: 
         scale3d(1,1,1) rotateX(17deg) rotateY(-12deg) translate3d(-2px,-2px,11px);
      background-color: var(--palette-accent1);
      box-shadow: 0.5px 0.5px var(--palette-accent1),
         1px 1px var(--palette-accent1),
         1.5px 1.5px var(--palette-accent1),
         2px 2px var(--palette-accent1),
         2.5px 2.5px var(--palette-accent1),
         3px 3px var(--palette-accent1),
         3.5px 3.5px var(--palette-accent1);
      backdrop-filter: opacity(0.1);
      color: white;
      
      text-shadow: 0px 3px 2px rgba(150, 150, 150, 1);
   }
`

//* Subitems style (menu that opens for pages that have multiple subdirectories)

export const SubLinksContainer = styled(a.div)`
   position: absolute;
   padding-top: 2.3rem;
   top: 0;
   left: 0;
   z-index: var(--zIndex-navDropdown);
   min-width: 160px;
   max-width: 98vw !important;
   .content{
      min-width: 160px;
      max-width: 98vw !important;
      width: fit-content;   
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      background: var(--palette-background);
      border-radius: 0.4rem;
      box-shadow: 0px 4px 16px rgb(46 41 51 / 4%), 
      0px 8px 24px rgb(71 63 79 / 5%);
      backdrop-filter: var(--mods-blur);
      padding: 0.5rem;
   }
   transition: translateX 0s;
   right: 0;
`

export const SubLinkItem = styled.a`
   display: block;
   border-radius: 0.3rem;
   background: transparent;
   padding: 0.5rem;
   padding-left: 0.8rem;
   padding-right: 0.8rem;
   text-decoration: none;
   color: var(--palette-textMain);
   margin-top: 0.2rem;
   margin-bottom: 0.2rem;
   :hover {
      background: var(--palette-bgContrast);
      cursor: pointer;
   }
`