import { ThemeTyping, createGlobalStyle } from 'styled-components'

import { toFlatPropertyMap } from '@components/utils'

const zIndexes = {
   navMaster: 50,
   navContent: 51,
   navDropdown: 52,
   headerMaster: 20,
   headerContent: 21,
}

const mods = {
   blur: 'blur(1rem)',
}

const fonts = {
   primary: '"Montserrat", sans-serif',
   secondary: '"Montserrat Alternates", sans-serif',
}

//TODO Improve both mode palettes
//! Caution, also look for components that don't follow palete rules and fix them
// ! (or add add new item to palete to support them) (also check logos and add their version for it)
export const Theme1: ThemeTyping = {
   palette: {
      background: '#FFFFFF',
      bgContrast: '#f5f5f5',
      accent1: '#1E1D45',
      accent2: '#3A54B4',
      accent3: '#8DA0E2',
      textMain: '#1E1D45',
      textInverse: '#FFFFFF'
   },
   zIndexes: {...zIndexes},
   mods: {...mods},
   fonts: {...fonts}
}

export const Theme2: ThemeTyping = {
   palette: {
      background: '#000000',
      bgContrast: '#363636',
      accent1: '#1E1D45',
      accent2: '#3A54B4',
      accent3: '#8DA0E2',
      textMain: '#FFFFFF',
      textInverse: '#1E1D45'
   },
   zIndexes: {...zIndexes},
   mods: {...mods},
   fonts: {...fonts}
}

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0px;
      padding: 0px;
      text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      text-decoration-line: none;
      outline: none;
      font-family: var(--fonts-primary);
      box-sizing: border-box; 
      background-repeat: no-repeat;
      transition-property: color, background, background-color;
      transition-duration: 0.5s;
   }
   html{
      width: 100vw;
      overflow-x: hidden;
   }
   #themeContainer{
      background-color: var(--palette-background);
   }
   @media (prefers-reduced-motion: reduce) {
      transition: none;
   }
`


export const makeCssThemeVars = (jsTheme: Object, namespace: string): Object  => {
   const flattenedObject = toFlatPropertyMap(jsTheme)
   return Object.entries(flattenedObject).reduce(
      (cssTheme, [key, value]) => ({
         ...cssTheme,
         [`--${namespace}-${key}`]: value
      }), {}
   )
}