import { ThemeTyping, createGlobalStyle } from 'styled-components'

export const Theme1: ThemeTyping = {
   palete: {
      background: '#FFFFFF',
      bgContrast: '#f5f5f5',
      accent1: '#1E1D45',
      accent2: '#3A54B4',
      accent3: '#8DA0E2',
      textWhiteBg: '#1E1D45',
      textBlackBg: '#FFFFFF'
   }
}

//TODO Improve dark mode palete
//! Caution, also look for components that don't follow palete rules and fix them
// ! (or add add new item to palete to support them) (also check logos and add their version for it)
export const Theme2: ThemeTyping = {
   palete: {
      background: '#000000',
      bgContrast: '#1a1a1a',
      accent1: '#1E1D45',
      accent2: '#3A54B4',
      accent3: '#8DA0E2',
      textWhiteBg: '#FFFFFF',
      textBlackBg: '#1E1D45'
   }
}

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0px;
      padding: 0px;
      -webkit-font-smoothing: antialiased !important;
      text-rendering: optimizeLegibility !important;
      text-decoration-line: none;
      outline: none;
      font-family: "Montserrat";
      box-sizing: border-box; 
      background-repeat: no-repeat;
      transition-property: color, background, background-color;
      transition-duration: 0.5s;
   }
   html{
      width: 100vw;
      overflow-x: hidden;
      background-color: ${props => props.theme.palete.background};
   }
   @media (prefers-reduced-motion: reduce) {
      transition: none;
   }
`