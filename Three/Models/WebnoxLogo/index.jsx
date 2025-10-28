"use client";
import React, { useRef, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const WebnoxLogo = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/models/logo.glb')
  const curve003Ref = useRef()
  
  return (
    <group {...props} ref={ref} dispose={null}>
      {/* All meshes - all visible by default */}
      <mesh
        ref={(el) => { if (ref?.current) ref.current.curve = el }}
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.Material}
        visible={true}
      />
      <mesh
        ref={(el) => { if (ref?.current) ref.current.curve001 = el }}
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials.Material}
        visible={true}
      />
      <mesh
        ref={(el) => { if (ref?.current) ref.current.curve002 = el }}
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials.Material}
        visible={true}
      />
      {/* Curve003 - letter "b" - visible */}
      <mesh
        ref={(el) => { 
          curve003Ref.current = el;
          if (ref?.current) ref.current.curve003 = el;
        }}
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials['SVGMat.001']}
        visible={true}
      />
      <mesh
        ref={(el) => { if (ref?.current) ref.current.curve004 = el }}
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials.Material}
        visible={true}
      />
      <mesh
        ref={(el) => { if (ref?.current) ref.current.curve005 = el }}
        castShadow
        receiveShadow
        geometry={nodes.Curve005.geometry}
        material={materials.Material}
        visible={true}
      />
    </group>
  )
})

useGLTF.preload('/models/logo.glb')
export default WebnoxLogo 