
import { Canvas } from '@react-three/fiber'
import {} from '@react-three/drei'
import {} from '@react-spring/three'

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
   'default': false
}
type ModelType = keyof ModelParameterMap

export type  ThreeBackgroundProps = CustomModels<ModelType> & {
   customBackgroundColor?: string
}

const HeaderThreeScene: React.FC<ThreeBackgroundProps> = () => {
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
      