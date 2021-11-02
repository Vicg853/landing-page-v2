import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import styled from 'styled-components'

const Test = styled.div`
  color: red;
`

const Home: NextPage = () => (
  <Test>
    Hello World !
  </Test>
)

export default Home
