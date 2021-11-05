import Link from 'next/link'
import styled, { css } from 'styled-components'

type StylesProps = {
   color?: string,
   displayAfter?: boolean,
}


export const LinkText = styled.span<StylesProps>`
   font-family: 'Montserrat Alternates';
   text-decoration: none;
   width: fit-content;
   color: ${props => props.color || props.theme.palete.textWhiteBg};
   font-size: 1.2rem;
   font-weight: 400;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   overflow: hidden;
   transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
   background: transparent;
   border-radius: 6px;
   padding-top: 0.1rem;
   padding-bottom: 0.1rem;
   padding-left: 0.5rem;
   padding-right: 0.5rem;
`

const LinkTextContainer = styled.a`
   display: block;
   perspective: 1000px;
   perspective-origin: 50% 50%;
   cursor: pointer;
   :hover ${LinkText} {
      transform: 
         scale3d(1,1,1) rotateX(10deg) rotateY(-15deg) translate3d(0px,-4px,10px);
      background-color: ${props => props.theme.palete.accent1 + '10'};
      backdrop-filter: blur(10px);
   }
`

type LinkProps = {
   href: string
   name: string
   customStyle?: StylesProps
}



const LinkCustom: React.FC<LinkProps> = ({ href, name, customStyle }) => {
  return (
    <Link href={href} passHref>
      <LinkTextContainer>
         <LinkText {...customStyle}>{name}</LinkText>
      </LinkTextContainer>
    </Link>
  )
}

export default LinkCustom