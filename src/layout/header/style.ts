import styled from "styled-components"

export const HeaderContainer = styled.header`
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   width: 100vw;
   height: 102vh;
   z-index: var(--zIndex-headerMaster);
   perspective: 1000px;
   #background {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0; right: 0; left: 0; bottom: 0;
   }
   #headerIllustration {
      z-index: var(--zIndex-headerContent);
      opacity: 0.8;
      transform: rotateX(-5deg) rotateY(-30deg) rotateZ(0deg) scaleZ(3);
      margin-right: 10vw; 
      
   }
   #headerIllustration * {
      backdrop-filter: var(--mods-blur);
   }
`

type HeaderContentCssProps = {
   customMask?: string
}

export const HeaderContent = styled.div<HeaderContentCssProps>`
   left: 0;
   width: 55vw;
   height: 100%;
   z-index: var(--zIndex-headerContent);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
   padding-left: 10vw;
   padding-right: 10vw;
   color: #fff;
   background: ${props => props.customMask ? props.customMask : 
   "linear-gradient(145deg, rgba(30,29,69,0.870886025308561) 8%, rgba(141,160,226,0.45071795808167014) 50%, rgba(58,84,180,0.2294294426755077) 77%)"};
   backdrop-filter: var(--mods-blur);
   h2{
      font-size: 3rem;
   }
`
