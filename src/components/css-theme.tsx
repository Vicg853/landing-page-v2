import { useState, useEffect } from "react"
import { makeCssThemeVars } from '@components/utils'
import { createGlobalStyle } from "styled-components"
import type { GlobalStyleComponent, DefaultTheme } from "styled-components"
import { createGlobalState } from 'react-hooks-global-state'

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

//* Global theme definitions so theme can be accessed via js vars globally
//* if needed
const { useGlobalState: useThemeState } = createGlobalState({cssTheme: {}})
const useTheme = () => {
   const themeJsVals = useThemeState('cssTheme')[0]
   return themeJsVals as ThemeProviderProps['theme']
}

/*
* @param {Object | Array} theme 
* Receives an object or an array of objects and creates a provider with the inserted theme
* as CSS values
*/
const CssThemeProvider: React.FC<ThemeProviderProps> = ({ theme, defaultTheme, CustomGlobalStyle }) => {
   
   //* Function to update global theme state values
   const setTheme = useThemeState('cssTheme')[1]

   //* State with theme in css var format
   const [cssTheme, setCssPalette] = useState(() => {
      setTheme(theme)
      return makeCssThemeVars(defaultTheme, true)
   })
   
   //*Updates css vars state when theme value changes
   useEffect(() => {
      setCssPalette(makeCssThemeVars(theme, true))
      setTheme(theme)
   }, [theme, setTheme])

   //*Actual provider with themeContainer HTML id so values can be latter accessed inside javascript as a function
   //? you can include if you will a custom global style, that 
   if(CustomGlobalStyle) return (
      <CustomGlobalStyle cssTheme={cssTheme} />
   )
   return (
      <CssRootTheme cssTheme={cssTheme} />
   )
}

export {
   useTheme,
}

export default CssThemeProvider