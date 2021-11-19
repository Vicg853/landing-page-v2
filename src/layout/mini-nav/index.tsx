
import { config, useSpring, useChain, useSpringRef, useTrail } from '@react-spring/web'
import { useState } from 'react'

import type {PropsCombined as RouteProps} from '@routes'

import CustomLink from './link'
import { Container } from './style'

type MiniNavProps = {
   active: boolean
   routes: RouteProps
}

//TODO Finish intro and outro animations for mini-nav

const MiniNav: React.FC<MiniNavProps> = ({active, routes}) => {
   
   //* Control which of the subLinks menus are open
   //? If there aren't any subLinks, then... well, this will be useless, so check out to make
   //? this state's inclusion conditional
   const [subLinkOpenI, setSubLinkOpenI] = useState<string|false>(false)
   
   //* Elements spring animations configs and functions
   
   const ContainerSpring = useSpring({
      width: active ? '100vw' : '0%',
      height: active ? '100vh' : '0',
      left: active ? '0%' : '100vw',
      shouldDisplay: active ? 1 : 0,
      borderBottomLeftRadius: active ? '0' : '150%',
      config: { ...config.wobbly, duration: 200 },
   })

   
   const linksTrail = useTrail(routes.length, {
      opacity: active ? 1 : 0,
      x: active ? 0 : 10,
      from: { opacity: 0, x: 20 },
      config: { ...config.slow },
   })

   return (
      <Container active={active} 
      style={{...ContainerSpring, 
         display: ContainerSpring
            .shouldDisplay
            .to((shouldDisplay) => shouldDisplay === 0 ? 'none' : 'initial')
         }}>
         <div id="content">
            {routes.map((route, i) => {
               if(route.navSubLinks && route.navSubLinks.length > 0) {
                  return (
                     <CustomLink
                        key={i}
                        href={route.path}
                        title={route.name}
                        subLinks={route.navSubLinks}
                        openState={(subLinkOpenI && subLinkOpenI === (route.path + '-' + i).toString())? true : false}
                        openMenu={() => setSubLinkOpenI(val => val === (route.path + '-' + i).toString() ? 
                           false : (route.path + '-' + i).toString())}
                     />
                  )
               } else {
                  return (
                     <CustomLink
                        key={i}
                        href={route.path}
                        title={route.name}
                     />
                  )
               }
            })}
         </div>
      </Container>
   );
}

export default MiniNav