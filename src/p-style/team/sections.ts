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
      font-size: 2.3rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
   }

   .memberCardsContainer {
      width: 90vw;
      max-width: 1920px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
   }

   .memberCard {
      width: 450px;
      max-width: 100%;
      margin: 10px;
      border-radius: 9px;
      overflow: hidden;
      display: inline-flex;
      justify-content: center;
      align-items: stretch;
      background-color: var(--palette-bgContrast);

      .leftContent {
         position: relative;
         display: flex;
         flex-direction: column;
         width: 90px;
         min-height: 220px;
         overflow: hidden;
         align-items: center;
         justify-content: space-between;
         .memberProfileImg {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            margin-top: 20px;
         }
         .memberName, .memberAge, .memberProfileImg, section {
            position: relative;
            z-index: 2;
         }
         .memberName, .memberAge {
            font-weight: 500;
            font-size: 1rem;
            color: var(--palette-constant-white);
         }
         .memberName {
            ::-webkit-scrollbar{
               display: none;
            }
            height: 1.1rem;
            white-space: nowrap;
            overflow-y: hidden;
            overflow-x: scroll;
            font-family: var(--fonts-secondary); 
         }
         section {
            transform-origin: 0% 50%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            transform: rotate(-90deg) translateY(100%);
         }
         .memberAge {
            font-family: var(--fonts-secondary); 
            display: flex;
         }
         .memberBackgroundImage {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 0;
            overflow: hidden;
            transform: scale(1.2);
         }
         ::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--palette-opaque-accent3);
            backdrop-filter: blur(10px);
            z-index: 1;
            align-self: stretch;
         }
      }

      .centerContent {
         color: var(--palette-textMain);
         width: calc(100% - 100px);
         margin-right: 10px;
         padding: 0.7rem;
         font-weight: 300;
         font-size: 0.855rem;
         border-right: 0.5px solid var(--palette-accent1);
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: flex-end;
         .memberDesc {
            width: 100%;
         }
         .memberInstitution {
            margin-top: 0.5rem;
            font-weight: 400;
         }
      }

      .rightContent {
         width: 20px;
         background-color: var(--palette-bgContrast);
         color: var(--palette-textMain);
         display: flex;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         font-family: var(--fonts-secondary);  
         font-weight: 500;
         font-size: 1rem;
         .memberRole {
            transform: rotate(90deg);
            color: var(--palette-textMain);
            padding-top: 0.7rem;
            padding-left: 0.7rem;
            ::-webkit-scrollbar{
               display: none;
            }
            height: 1.1rem;
            white-space: nowrap;
         }
         .memberFounder {
            transform: translateX(-100%) rotate(90deg) translateY(0.3rem);
            width: max-content;
            position: relative;
            transform-origin: 100% 100%;
            color: var(--palette-accent3);
            padding-top: 0.7rem;
            padding-right: 0.7rem;
         }
      }
   }
`