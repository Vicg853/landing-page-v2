import type { NextPage } from 'next'

import Header from '@layout/header'
import { SEOComp } from '@components/SEO'

const Home: NextPage = () => (
   <>
     <SEOComp 
     robotsFollow={true} />
     
     <Header 
     title="Olá da AlpesCap !" subTitle="Investimos em um futuro melhor!😄" 
     illustrationDisplay={true} optionalButton={{url: '/about', text: 'Saiba mais'}}
      />
   </>
 )
 
 export default Home
 