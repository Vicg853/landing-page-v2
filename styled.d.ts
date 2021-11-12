// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
   export interface DefaultTheme {
      palete: {
         background: string,
         bgContrast: string,
         accent1: string,
         accent2: string,
         accent3: string,
         textMain: string
         textInverse: string
      }
   }
   export interface ThemeTyping extends DefaultTheme {}
}