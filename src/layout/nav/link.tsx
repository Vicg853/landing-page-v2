import Link from 'next/link'
import styled from 'styled-components'

import type { StylesProps } from './link-style'
import { LinkText, LinkTextContainer } from './link-style'


type LinkProps = {
   href: string
   name: string
   customStyle?: StylesProps
   subLinks?: Array<{
      name: string,
      href: string,
   }>
}

//TODO Improve animation and style ++ add subitems to the link

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