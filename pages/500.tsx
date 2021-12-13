import { Player } from "@lottiefiles/react-lottie-player"
import styled from "styled-components"

import LottieFile from '@public/lotties/500-error.json'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
   width: 90vw;
   margin-left: 5vw;
   margin-right: 5vw;
   .errorText {
      font-size: 1rem;
      margin-top: 4rem;
      margin-bottom: 2rem;
      font-family: 'Montserrat Alternates';
      font-weight: 500;
      color: var(--palette-textMain);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
   }
   .errorCode {
      font-family: 'Montserrat Alternates';
      font-weight: 600;
      font-size: 5rem;
      color: var(--palette-textMain);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
   }      
   .lottie {
      width: 400px;
      height: 400px;
      margin-bottom: 5rem;
   }
`
   


const Err500 = () => {
   return (
      <Container>
         <span className="errorText">
            Algo aconteceu... a culpa é nossa, não se preocupe<br/>
            Devem ser aqueles guaxinins comendo os cabos do servidor novamente 😅😨 <br/>
         </span>
         <span className="errorCode">
            500
         </span>
         <Player className="lottie" src={LottieFile} autoplay loop
         />
      </Container>
   )
}

export default Err500