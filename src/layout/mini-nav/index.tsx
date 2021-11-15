
import { config, useSpring, a, useChain, useSpringRef } from '@react-spring/web'
import { useEffect, useState } from 'react'

import CustomLink from './link'
import { Container } from './style'

type MiniNavProps = {
   active: boolean
}

const MiniNav: React.FC<MiniNavProps> = ({active}) => {
   
   //* Control which of the subLinks menus are open
   //? If there aren't any subLinks, then... well, this will be useless, so check out to make
   //? this state's inclusion conditional
   const [subLinkOpenI, setSubLinkOpenI] = useState<string|false>(false)
   
   //* Elements spring animations configs and functions
   
   //? These state and useEffect are used to control the visibility of the mini nav's container
   //? to make it not be displayed after animation is ended and displayed before animation is started
   //? this way preventing css problem where animation does not occur at appearance in cas display is 
   //? set to none and not finishing correctly in the middle of the exit
   //! But anyway, try and fix this issue or find some better substitute in case it is not really fixable
   const [display, setDisplay] = useState<boolean>(false)
   useEffect(() => { 
      if (active) setDisplay(true) 
   }, [active])
   //---
   const ContainerSpring = useSpring({
      width: active ? '100vw' : '0%',
      height: active ? '100vh' : '0',
      left: active ? '0%' : '100vw',
      display: active ? 'block' : 'none',
      borderBottomLeftRadius: active ? '0' : '150%',
      config: { ...config.wobbly, duration: 200 },
      onRest: () => setDisplay(active)
   })

   return (
      <Container active={active} 
      style={{...ContainerSpring, display: display ? 'flex' : 'none'}}>
         <div id="content">
            <CustomLink href='/' title="Home" />
            <CustomLink href="/team" title='Time'
            openState={(subLinkOpenI && subLinkOpenI === 'team')? true : false} 
            openMenu={() => setSubLinkOpenI(val => val === 'team' ? false : 'team')}
            subLinks={[
               { title: 'Gestão', href: '/management' },
               { title: 'Conselho', href: '/council' }
            ]} />
            <CustomLink href="/ong" title='ONGs'
            openState={(subLinkOpenI && subLinkOpenI === 'ong')? true : false}
            openMenu={() => setSubLinkOpenI(val => val === 'ong' ? false : 'ong')}
            subLinks={[
               { title: 'Arrastão', href: '/management' },
            ]} />
         </div>
      </Container>
   );
}

export default MiniNav