// import original module declarations
import 'styled-components';

//TODO Pass z-index as theme variables to prevent non intentional component overlapping from happening 
//* And obviously update z-index css variables to it
//* also add blur to theme

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