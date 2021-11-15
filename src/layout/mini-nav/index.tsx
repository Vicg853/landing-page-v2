
import { config, useSpring, a, useChain, useSpringRef } from '@react-spring/web'
import { useEffect, useState } from 'react'

import CustomLink from './link'
import { Container } from './style'

type MiniNavProps = {
   active: boolean
}

const MiniNav: React.FC<MiniNavProps> = ({active}) => {
   
   
   //* Elements spring animations configs and functions
   
   //? These state and useEffect are used to control the visibility of the mini nav's container
   //? to make it not be displayed after animation is ended and displayed before animation is started
   //? this way preventing css problem where animation does not occur at appearance in cas display is 
   //? set to none and not finishing correctly in the middle of the exit
   //! But anyway, try and fix this issue or find some better substitute in case it is not really fixable
   const [display, setDisplay] = useState(false)
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
            <CustomLink href='/' title="Hey hey" />
            <CustomLink href='/' title="Hey hey" subLinks={[{
               title: 'Sub 1',
               href: '/'
            }]} />
         </div>
      </Container>
   );
}

export default MiniNav