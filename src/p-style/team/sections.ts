import styled from 'styled-components'
   
export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding-top: 7rem;
   padding-bottom: 20px;
   width: 100vw;
   .allSectionsNav {
      display: inline-flex;
   }

   h1 {
      font-family: var(--fonts-secondary);    
      font-size: 1.4rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
      max-width: 80%;
   }

   .memberCardsContainer {
      width: 90vw;
      max-width: 1920px;
      display: grid;
      grid-template-columns: repeat(auto-fill, 450px);
      justify-content: center;
      grid-gap: 20px;
   }
`