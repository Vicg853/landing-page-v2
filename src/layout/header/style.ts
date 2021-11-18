import styled from "styled-components"

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   position: relative;
   height: 102vh;
   z-index: 18;
   #background {
      //TODO Fix this issue
      //! Weird issue where Next/img component has an internal size different than the
      //! requested one
      width: 100vw !important;
      height: 100vh !important;
      transform: scale(1.1);
   }
   :after{
      z-index: 19;
      content: "";
      display: block;
      width: 54vw;
      height: 100%;
      position: absolute;
      left: 0;
      background: linear-gradient(145deg, rgba(30,29,69,0.870886025308561) 8%, rgba(141,160,226,0.45071795808167014) 50%, rgba(58,84,180,0.2294294426755077) 77%);
      backdrop-filter: blur(1rem);
   }
`

export const HeaderContent = styled.div.attrs({
   paddingLeft: "10vw"
})`
   position: absolute;
   left: 0;
   width: 50vw;
   height: fit-content;
   z-index: 20;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
   padding-left: ${props => props.paddingLeft};
   color: #fff;
   h2{
      font-size: 3rem;
   }
`
