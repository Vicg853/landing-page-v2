import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import { GlobalStyle, Theme1, Theme2 } from "@components/global-style"
import usePersistentState from '@components/hooks/usePersistentState'
import CssThemeProvider from '@components/css-theme'
import routes from '@routes'

//Importing Layout elements
import Navigation from '@layout/navigation'
import Footer from '@layout/footer'
import CookiesPolicyCard from '@components/react-mini-components/CookiesPolicyCard'
import Alert from '@components/react-mini-components/Alert'


const WithThemeProvider: React.FC = () => {
   const [isDarkMode, isDarkModeToggle] = usePersistentState(false, 'theme')

   return (
      <>
         <CssThemeProvider 
            theme={isDarkMode ? Theme2 : Theme1} 
            defaultTheme={Theme1} CustomGlobalStyle={GlobalStyle} />
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
         </Head>
         <WithThemeProvider />
         <CookiesPolicyCard />
         <Alert />
         <Component {...pageProps} />
         <Footer />
     </>
   )
}

export default MyApp