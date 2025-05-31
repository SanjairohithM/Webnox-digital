import { Environment } from '@react-three/drei'
import React from 'react'

function Sphere({position,scale}) {
  return (
    <mesh position={position} scale={scale}>
        <sphereGeometry args={[.3, 32, 32]} />
        <meshStandardMaterial color="white" />
        <ambientLight intensity={2} />
        <directionalLight position={[0, 5, 0]} intensity={2} />
        <Environment preset="studio" />
    </mesh>
  )
}

export default Sphere