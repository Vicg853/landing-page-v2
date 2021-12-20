import { useState, useEffect } from "react"
import { makeCssThemeVars } from '@components/utils'
import { createGlobalStyle } from "styled-components"
import type { GlobalStyleComponent, DefaultTheme } from "styled-components"

type ThemeProviderProps = {
   theme: Array<any> | Object
   defaultTheme: Array<any> | Object,
   CustomGlobalStyle?: GlobalStyleComponent<cssVarsRootProps, DefaultTheme>
}

export type cssVarsRootProps = {
   cssTheme: string[]
}

const CssRootTheme = createGlobalStyle<cssVarsRootProps>`
   :root {
      ${props => props.cssTheme}
   }
`


/*
* @param {Object | Array} theme 
* Receives an object or an array of objects and creates a provider with the inserted theme
* as CSS values
*/
const CssThemeProvider: React.FC<ThemeProviderProps> = ({ theme, defaultTheme, CustomGlobalStyle }) => {
   
   //* Function to update global theme state values
   

   //* State with theme in css var format
   const [cssTheme, setCssPalette] = useState(() => makeCssThemeVars(defaultTheme, true))
   
   //*Updates css vars state when theme value changes
   useEffect(() => {
      setCssPalette(makeCssThemeVars(theme, true))
   }, [theme])

   //*Actual provider with themeContainer HTML id so values can be latter accessed inside javascript as a function
   //? you can include if you will a custom global style, that 
   if(CustomGlobalStyle) return (
      <CustomGlobalStyle cssTheme={cssTheme} />
   )
   return (
      <CssRootTheme cssTheme={cssTheme} />
   )
}

export default CssThemeProvider