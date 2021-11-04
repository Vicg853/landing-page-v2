import { ThemeTyping, createGlobalStyle } from 'styled-components'

export const Theme1: ThemeTyping = {
   palete: {
      background: '#FFFFFF',
      bgContrast: '#EBEBFF',
      accent1: '#1E1D45',
      accent2: '#3A54B4',
      accent3: '#8DA0E2',
      textWhiteBg: '#1E1D45',
      textBlackBg: '#FFFFFF'
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
      font-family: "JetBrains Mono";
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