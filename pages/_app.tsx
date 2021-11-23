import { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider, ThemeTyping } from 'styled-components'
import { DefaultSeo } from 'next-seo'

import { Theme1, Theme2, GlobalStyle, makeCssThemeVars } from "@components/global-style"
import SEO from '../next-seo.config.js'
import usePersistentState from '@components/usePersistentState'
import routes from '@routes'

//Importing Layout elements
import Nav from '@layout/nav'
import MiniNav from '@layout/mini-nav'

function MyApp({ Component, pageProps }: AppProps) {
   //Theme persistent state
   const [isDarkMode, isDarkModeToggle] = usePersistentState(false, 'theme')

   const cssTheme = useMemo(() => makeCssThemeVars(isDarkMode ? Theme2.palette : Theme1.palette, 'palette'), [isDarkMode])
   const cssZIndex = makeCssThemeVars(Theme1.zIndexes, 'zIndex')
   const cssMods = makeCssThemeVars(Theme1.mods, 'mods')
   const cssFonts = makeCssThemeVars(Theme1.fonts, 'fonts')

   //Mini menu state
   const [miniMenu, miniMenuSet] = useState(false)

   return (
     <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <base href={process.env.NEXT_PUBLIC_SITE_URL} target="_blank"></base>
            <script type="application/ld+json">
            {`
               {
                  "@context": "${process.env.NEXT_PUBLIC_SITE_URL}",
                  "@type": "ONG",
                  "url": "${process.env.NEXT_PUBLIC_SITE_URL}",
                  "name": "Alpes Capital",
                  "contactPoint": {
                     "@type": "ContactPoint",
                     "email": "alpes.capital@gmail.com",
                     "contactType": "direct"
                  }
               }
            `}
            </script>
         </Head>
         <DefaultSeo 
         titleTemplate='%s | AlpesCap'
         {...SEO}
         additionalMetaTags={[
            {
               name: 'viewport',
               content: 'width=device-width, initial-scale=1.0',
            },
            {
               name: 'theme-color',
               content: isDarkMode ? Theme2.palette.accent1 : Theme1.palette.accent1,
            },
            {
               name: 'msapplication-TileColor',
               content: isDarkMode ? Theme2.palette.accent1 : Theme1.palette.accent1,
            },
            {
               name: 'msapplication-TileImage',
               content: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/ms-icon-150x150.png',
            },
         ]}
         />
         {/*//TODO Remove this when css variables are supported */}
         
         <div id="themeContainer" style={{
            ...cssTheme, ...cssZIndex, ...cssMods, ...cssFonts}}>
            <GlobalStyle />
            <Nav routes={routes} isDarkTheme={isDarkMode} setTheme={isDarkModeToggle} 
            miniMenuState={miniMenu} setMiniMenu={miniMenuSet}/>
            {/* //TODO Check why all page components reloads when mini menu is opened */}
            <MiniNav routes={routes} active={miniMenu} />
            <Component {...pageProps}/>
         </div>
         
     </>
   )
}

export default MyApp