import usePersistentState from "@components/usePersistentState"
import styled from "styled-components"

import ReferenceLink from "@components/react-mini-components/ReferenceLink"

const Container = styled.div`
   display: none;
   flex-direction: column;
   align-items: stretch;
   justify-content: center;
   position: fixed;
   bottom: 3rem;
   right: 3rem;
   width: fit-content;
   max-width: 600px;
   height: fit-content;
   border-radius: 0.6rem;
   overflow: hidden;
   color: var(--palette-textMain);
   :before{
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--palette-bgContrast);
      backdrop-filter: var(--mods-blur);
      opacity: 0.9;
      z-index: var(--zIndex-cookiesPolicyCard) !important;
   }
   z-index: var(--zIndex-cookiesPolicyCard);
   sub{
      font-size: 0.8rem;
      font-weight: 600;
   }
   * {
      z-index: calc(var(--zIndex-cookiesPolicyCard) + 1);
   }
   sub{
      padding: 0.9rem;
   }
   button{
      width: fit-content;
      height: fit-content;
      background: var(--palette-accent2);
      justify-content: center;
      padding: 0.55rem 1.5rem;
      color: white;
      font-size: 0.8rem;
      font-weight: 400;
      font-family: var(--fons-secondary);
      border: none;
      border-radius: 0.3rem;
      transition: background 0.3s ease-in-out;
      cursor: pointer;
      :hover {
         background: linear-gradient(120deg, var(--palette-accent2) 37%, var(--palette-opaque-accent2) 100%);
      }
   }
   &[data-should-display='true'] {
      display: flex !important;
   }
`

const CookiesCard = () => {
   const [userAgreement, setUseAgreement] = usePersistentState(false, "user-cookies-agreed")

   return (
      <Container data-should-display={(!userAgreement).toString()}>
         <sub>
            Ao usar essa pagina você concorda com a nossa politica de privacidade/coleta de dados {"("}os chamados: cookies{")"}. <br/>
            Resumidamente os cookies coletados são somente dados sobre funcionamento/performance da pagina,<br/> e não são/serão usados para comercialização de modo algum.<br/>
            {"("}Além de serem totalmente anonimos{")"}
         </sub>
         <sub>
            Para mais detalhes clique aqui: <br/> 
            <ReferenceLink href="/site-and-cookies" title='Politica de Cookies'  />
         </sub>
         <sub>
            <button onClick={() => setUseAgreement(true)}>Concordo e entendi</button>
         </sub>
      </Container>
   )
}

export default CookiesCard