import { a } from "@react-spring/web"
import styled from "styled-components"

export const Container = styled(a.div)`
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: transparent;
   position: fixed;
   top: 0;
   backdrop-filter: blur(10px);
   z-index: 47;
   overflow-x: hidden;
   overflow-y: scroll;
   padding: 0.4rem;
   background: red;
   @media (min-width: 760px) {
      display: none !important;
   }
`