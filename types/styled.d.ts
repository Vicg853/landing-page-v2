
import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme {
      palette: {
         background: string
         bgContrast: string
         accent1: string
         accent2: string
         accent3: string
         textMain: string
         textInverse: string
      }
      zIndexes: {
         navMaster: number
         navContent: number
         navDropdown: number
         headerMaster: number
         headerContent: number
      }
      mods: {
         blur: string
      },
      fonts: {
         primary: string
         secondary: string
      }
   }
   export interface ThemeTyping extends DefaultTheme {}
}