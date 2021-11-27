import Image from 'next/image'
import styled from 'styled-components'

interface ComponentProps {
   iconUrl: string,
   alt?: string,
   text: string,
   url: string,
}

export const Container = styled.a`
   width: fit-content;
   min-width: 4rem;
   height: 1.8rem;
   display: inline-flex;
   justify-content: flex-start;
   align-items: center; 
   border-radius: 0.36rem;
   padding-left: 0.7rem;
   padding-right: 0.7rem;
   background-color: var(--palette-background);
   backdrop-filter: blur(10px);
   margin: 0.3rem;
   title {
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--palette-textMain);
      text-decoration: none;
      margin-left: 0.6rem; 
   }
   img{
      width: 1.25rem !important;
      height: 1.25rem !important;
   }
`

//TODO Add option to import internal resources
//? Maybe this is useful to do it: https://nextjs.org/docs/advanced-features/dynamic-import

const SocialCard: React.FC<ComponentProps> = ({iconUrl, text, url, alt}, ...props) => {
   return (
      <>
         <Container href={url} {...props}>
            <Image width="1.4rem" height="1.4rem" src={iconUrl}
               alt={alt ? `Ilustração de card social para ${alt}.` : 
               'Ilustração de card social para visitar uma de nossas redes!'} 
            />
            <title>{text}</title>
         </Container>
      </> 
   )
}

export default SocialCard