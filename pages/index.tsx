import type { NextPage } from 'next'
import styled from 'styled-components'

import Header from '@layout/header'
import { SEOComp } from '@components/SEO'

const Test = styled.div`
  color: red;
`

const Home: NextPage = () => (
  <>
    <SEOComp robotsFollow={true} />
    <Header 
    title="Hello World from AlpesCap !" subTitle="Nós somos a Alpes Capital, olá!!👋😉" 
    illustrationDisplay={true} optionalButton={{url: '/about', text: 'Saiba mais'}}
     />
    <Test>
      Hello World !
      <div style={{width: '100vw', height: '300vh'}} />
    </Test>
  </>
)

export default Home
