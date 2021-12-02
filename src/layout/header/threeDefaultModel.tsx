import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import Default3DLogo from '@public/models/logo3D.glb'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshPhysicalMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
   const group = useRef<THREE.Group>()
   const { nodes, materials } = useGLTF(Default3DLogo) as GLTFResult
   return (
     <group ref={group} {...props} dispose={null} >
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Cube.geometry}
         material={materials.Material}
         position={[0, 0, 0]}
         scale={[0.05, 1, 1]}
         userData={{ name: 'Cube' }}
       />
     </group>
   )
}
 
useGLTF.preload(Default3DLogo)