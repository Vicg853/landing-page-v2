import { Suspense, memo } from 'react'
import dynamic from 'next/dynamic'
import { degToRad } from '@components/utils'

//TODO See how can I optimize this libs import 
import { TextureLoader } from 'three'
import { Canvas, useThree, useLoader } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'

import DefaultSceneImg from '@p-images/defaultHeaderBg.jpg'

//TODO Set some time to improve three background scene and performance
//! Also add a model loader component, to prevent issues with next ssr having 
//! this made automatically in only one place

//* Dynamic import content to be loaded just in case is needed 
//* (only load image bg in case it need to fallback on it)
//* (only load default model if it is not a custom scene defined 
const DynamicImageImport = dynamic(() => import('./imageBg'))
const DynamicThreeModelImport = dynamic(() => import('./threeDefaultModel'), {
   ssr: false
})


//*Vary type of model to be imported based on the chosen customModel type chosen
//* -> Ensures that the correct model is imported
export interface CustomModels<T extends ModelType> {
   modelType: T
   customModel: ModelParameterMap[T]
}
type ModelParameterMap = {
   'customModel': THREE.Mesh
   'customScene': THREE.Scene
   'internalSrc': string
   'externalSrc': string
   'default': undefined
}
type ModelType = keyof ModelParameterMap

//*Vary the type of the element to be imported based on customFallbackType option chosen
//* -> Ensures that the correct fallback type is passed 
export interface CustomFallBack<T extends FallbackType> {
   customFallback?: T
   customFallbackType?: FallbackParameterMap[T]
}
type FallbackParameterMap = {
   'component': any
   'image': StaticImageData
}
type FallbackType = keyof FallbackParameterMap


export type ThreeBgProps = CustomModels<ModelType> & CustomFallBack<FallbackType> &  {
   customBackgroundColor?: string
}

const FlexboxScene = () => {
   const imageTexture = useLoader(TextureLoader, DefaultSceneImg.src)
   const { viewport } = useThree()

   return (
      <Flex position={[-viewport.width / 2, viewport.height, 0]}
      size={[viewport.width, viewport.height, 3]} 
      alignItems="center" justifyContent='center'>
         <Box>
            <mesh>
               <meshBasicMaterial attach="material" map={imageTexture} />
               <boxBufferGeometry attach="geometry" args={[viewport.width/2.3, 0.5, viewport.height/2.3]} />
            </mesh>
         </Box>
         <Box centerAnchor>
            <DynamicThreeModelImport rotation={[degToRad(0), degToRad(0), degToRad(90)]} position={[2, 0, 0]} />
         </Box>
      </Flex>
   )
}

const HeaderThreeScene: React.FC<ThreeBgProps> = () => {
   
   return (
      <Canvas 
      frameloop="demand" 
      gl={{ powerPreference: 'high-performance', 
         alpha: true, 
         antialias: true, 
         stencil: false, 
         depth: true 
      }}
      camera={{position: [0, -20, 0], fov: 12}}>
         <ambientLight />
         <pointLight position={[10, 10, 10]} />
         <Suspense fallback={() => {}}>
            <FlexboxScene />
         </Suspense>
      </Canvas>
   )
}

export default memo(HeaderThreeScene)