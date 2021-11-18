import { useEffect, useState } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'

import { Theme1, Theme2, GlobalStyle } from "@components/global-style"
import SEO from '../next-seo.config.js'
import persistentState from '@components/persistentState'

//Importing Layout elements
import Nav from '@layout/nav'
import MiniNav from '@layout/mini-nav'

function MyApp({ Component, pageProps }: AppProps) {
   //Theme persistent state
   const [isDarkMode, isDarkModeToggle] = persistentState(false, 'theme')
   const [theme, themeSet] = useState(Theme1)

   //Mini menu state
   const [miniMenu, miniMenuSet] = useState(false)

   //To switch between themes easily
   useEffect(() => {
      isDarkMode ? themeSet(Theme2) : themeSet(Theme1)
   }, [isDarkMode])

   return (
     <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;800&family=Montserrat:wght@100;200;300;400;500;600;800&display=swap" rel="stylesheet" />
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
               content: theme.palette.accent1,
            },
            {
               name: 'msapplication-TileColor',
               content: theme.palette.accent1,
            },
            {
               name: 'msapplication-TileImage',
               content: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/ms-icon-150x150.png',
            },
         ]}
         />
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav isDarkTheme={isDarkMode} setTheme={isDarkModeToggle} 
            miniMenuState={miniMenu} setMiniMenu={miniMenuSet}/>
            <MiniNav active={miniMenu} />
            <Component {...pageProps}/>
         </ThemeProvider>
     </>
   )
}

export default MyApp