import { Player } from "@lottiefiles/react-lottie-player"
import styled from "styled-components"

import LottieFile from '@public/lotties/404-error.json'

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
   


const Err404 = () => {
   return (
      <Container>
         <span className="errorText">
            Uhm.... você tem certeza que está no local correto?  <br/>
            Ou... talvez, você não deveria ter chego até aqui 🧐🤫 estamos te observando... <br/>
            Brincadeira 😉
         </span>
         <span className="errorCode">
            404
         </span>
         <Player className="lottie" src={LottieFile} autoplay loop
         />
      </Container>
   )
}

export default Err404