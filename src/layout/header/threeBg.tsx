
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import {} from '@react-three/drei'
import {} from '@react-spring/three'

const DynamicImageImport = dynamic(() => import('./imageBg'))

//TODO Add a three model import type value ++ how to include or not a property 
export interface CustomModels<T extends ModelType> {
   modelType: T
   customModel: ModelParameterMap[T]
}
type ModelParameterMap = {
   'customModel': any
   'customScene': any
   'internalSrc': string
   'externalSrc': string
   'default': undefined
}
type ModelType = keyof ModelParameterMap

//*Type variation in function of scene fallback type
//* -> Ensures that the correct fallback type is passed 
export interface CustomFallBack<T extends FallbackType> {
   customFallback?: T
   customFallbackType?: FallbackParameterMap[T]
}
type FallbackParameterMap = {
   'component': any
   'image': any
}
type FallbackType = keyof FallbackParameterMap


export type ThreeBgProps = CustomModels<ModelType> & CustomFallBack<FallbackType> &  {
   customBackgroundColor?: string
}

const HeaderThreeScene: React.FC<ThreeBgProps> = () => {
   return (
      <Canvas>
         <ambientLight />
         <pointLight position={[10, 10, 10]} />
         <mesh>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color="hotpink" />
         </mesh>
      </Canvas>
   )
}

export default HeaderThreeScene
      