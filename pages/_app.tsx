import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { GlobalStyle, Theme1, Theme2 } from "@components/global-style"
import SEO from '../next-seo.config.js'
import usePersistentState from '@components/hooks/usePersistentState'
import CssThemeProvider from '@components/CssThemeProvider'
import routes from '@routes'

//Importing Layout elements
import Navigation from '@layout/navigation'
import Footer from '@layout/footer'
import CookiesPolicyCard from '@components/react-mini-components/CookiesPolicyCard'

const WithThemeProvider: React.FC = ({ children }) => {
   const [isDarkMode, isDarkModeToggle] = usePersistentState(false, 'theme')

   return (
      <>
         <CssThemeProvider 
            theme={isDarkMode ? Theme2 : Theme1} 
            defaultTheme={Theme1} CustomGlobalStyle={GlobalStyle} />
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
         <Navigation routes={routes} isDarkTheme={isDarkMode} toggleDarkTheme={isDarkModeToggle} />
      </>
   )
}

function MyApp({ Component, pageProps }: AppProps) {

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
         <WithThemeProvider />
         <Component {...pageProps} />
         <CookiesPolicyCard />
         <Footer />
     </>
   )
}

export default MyApp