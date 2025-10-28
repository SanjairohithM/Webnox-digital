"use client"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function MisssionRobot(props) {
  const { nodes, materials } = useGLTF('/models/MisssionRobot.glb')
  const group = useRef()
  // Accept targetRotation as prop (default to current rotation)
  const targetRotation = props.targetRotation || [0, -Math.PI/2+0.8, 0]

  useFrame(() => {
    if (group.current) {
      // Smoothly interpolate rotation toward targetRotation
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotation[0], 0.1)
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation[1], 0.1)
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetRotation[2], 0.1)
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="mesh_0"
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
}

useGLTF.preload('/models/MisssionRobot.glb')
