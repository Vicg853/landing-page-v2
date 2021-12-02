
import Link from 'next/link'
import styled from 'styled-components'

import OutsideSourceIcon from '@icons/externalLinksIcons8.svg'

export const Container = styled.div`
   width: fit-content;
   height: fit-content;
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: flex-start;
   margin-top: 0.3rem;
   margin-bottom: 0.3rem;
   a{
      color: var(--palette-textMain);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      text-decoration: none;
      padding: 0.1rem;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      border-radius: 0.3rem;
      svg{
         width: 16px !important;
         height: 16px !important;  
         margin-right: 0.3rem;
      }
      :hover{
         background-color: var(--palette-background);
         cursor: pointer;
      }
   }
   span{
      font-size: 0.68rem;
      font-style: italic;
   }
`

//TODO Add option to add a hidden description (appears only when hovering)
//TODO Add alt description

interface ReferenceLinkProps {
   href: string
   title: string
   hideArrow?: boolean
   optionalDescription?: string
   goesOutside?: boolean
}


const ReferenceLinkComponent: React.FC<ReferenceLinkProps> = ({title, hideArrow, href, optionalDescription, goesOutside}) => (
   <Container>
      {goesOutside && <a href={href}><OutsideSourceIcon />{title}</a>}
      {!goesOutside && 
         <Link href={href} passHref>
            {(hideArrow) ? <a>{title}</a> : <a>&#8594; {title}</a>}
         </Link>
      }
      {optionalDescription && <span>{optionalDescription}</span>}
   </Container>
)

export default ReferenceLinkComponent