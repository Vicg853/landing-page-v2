import type { NextPage } from 'next'
import styled from 'styled-components'

import Header from '@layout/header'

const Test = styled.div`
  color: red;
`

import TestHeaderImg from '@p-images/index/test2.jpg'

const Home: NextPage = () => (
  <>
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
