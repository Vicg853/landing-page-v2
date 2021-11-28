import { a } from "@react-spring/web"
import styled from "styled-components"
import { transparentize, cssVar } from 'polished'

type ContainerProps = {
   active: boolean,
}

export const Container = styled(a.div)<ContainerProps>`
   justify-content: center;
   background: transparent;
   position: fixed;
   top: 0;
   backdrop-filter: var(--mods-blur);
   z-index: calc(var(--zIndex-navMaster) - 1);
   overflow-x: hidden;
   overflow-y: scroll;
   padding: 0.4rem;
   background-color: ${transparentize(0.7, cssVar('--palette-accent1', '#8DA0E2') as string)};
   backdrop-filter: var(--mods-blur);
   ::-webkit-scrollbar {
      display: none;
   }
   #content {
      width: 100vw;
      height: fit-content;
      margin-top: 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 0.5rem;
   }
   @media (min-width: 760px) {
      display: none !important;
   }
`