import type { NextPage } from 'next'
import styled from 'styled-components'

const Test = styled.div`
  color: red;
`

const Home: NextPage = () => (
  <Test>
    Hello World !
    <div style={{width: '100vw', height: '300vh'}} />
  </Test>
)

export default Home
