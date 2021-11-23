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
      //TODO Fix this issue
      //! Weird issue where Next/img component has an internal size different than the
      //! requested one
      width: 100% !important;
      height: 100% !important;
      transform: scale(1.1);
      position: absolute;
      top: 0; right: 0; left: 0; bottom: 0;
   }
   #HeaderLogo {
      z-index: var(--zIndex-headerContent);
      opacity: 0.8;
      transform: rotateX(-5deg) rotateY(-30deg) rotateZ(0deg) scaleZ(3);
      margin-right: 10vw; 
      
   }
   #HeaderLogo * {
      backdrop-filter: var(--mods-blur);
   }
`

export const HeaderContent = styled.div.attrs({
   padding: "10vw"
})`
   left: 0;
   width: 55vw;
   height: 100%;
   z-index: var(--zIndex-headerContent);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
   padding-left: ${props => props.padding};
   padding-right: ${props => props.padding};
   color: #fff;
   background: linear-gradient(145deg, rgba(30,29,69,0.870886025308561) 8%, rgba(141,160,226,0.45071795808167014) 50%, rgba(58,84,180,0.2294294426755077) 77%);
   backdrop-filter: var(--mods-blur);
   h2{
      font-size: 3rem;
   }
`
