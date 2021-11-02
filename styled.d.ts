// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
   export interface DefaultTheme {
      palete: {
         background: string,
         backgroundSecondary: string,
         accent1: string,
         accent2: string,
         accent3: string,
         red: string,
         green: string,
      }
   }
   export interface ThemeTyping extends DefaultTheme {}
}