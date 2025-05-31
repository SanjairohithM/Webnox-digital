import { Canvas } from "@react-three/fiber"
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier"
import { useTexture } from "@react-three/drei"
import { useMemo, useRef, useState, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SPHERE_COUNT = 90
const SPHERE_RADIUS = 1.7

const logoTextureUrls = [
  "/ShpereTextures/Group-14.png",
  "/ShpereTextures/Group-13.png",
  "/ShpereTextures/Group-12.png",
  "/ShpereTextures/Group-11.png",
  "/ShpereTextures/Group-10.png",
  "/ShpereTextures/Group-9.png",
  "/ShpereTextures/Group-8.png",
  "/ShpereTextures/Group-7.png",
  "/ShpereTextures/Group-6.png",
  "/ShpereTextures/Group-5.png",
  "/ShpereTextures/Group-4.png",
  "/ShpereTextures/Group-3.png",
  "/ShpereTextures/Group-2.png",
  "/ShpereTextures/Group-1.png",
  "/ShpereTextures/Group.png",
]

function Sphere({ initialPosition, texture, isActive, shouldReset }) {
  const rigidBodyRef = useRef(null)

  useEffect(() => {
    if (rigidBodyRef.current && shouldReset) {
      rigidBodyRef.current.setTranslation({ 
        x: initialPosition[0], 
        y: initialPosition[1], 
        z: initialPosition[2] 
      })
      rigidBodyRef.current.setLinvel({ x: 0, y: 0, z: 0 })
      rigidBodyRef.current.setAngvel({ x: 0, y: 0, z: 0 })
    }
  }, [shouldReset, initialPosition])

  const handleClick = () => {
    if (rigidBodyRef.current) {
      const randomX = (Math.random() - 0.5) * 10
      rigidBodyRef.current.applyImpulse({ x: randomX, y: 25, z: 0 }, true)
      rigidBodyRef.current.applyTorqueImpulse({ x: randomX, y: 0, z: randomX })
    }
  }

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="ball"
      restitution={0.7}
      friction={0.5}
      position={initialPosition}
      angularDamping={0.8}
      linearDamping={0.2}
      type={isActive ? "dynamic" : "fixed"}
    >
      <mesh castShadow receiveShadow onClick={handleClick} userData={{ type: "sphere" }}>
        <sphereGeometry args={[SPHERE_RADIUS, 32, 32]} />
        <meshStandardMaterial
          color="white"
          map={texture}
          roughness={0.5}
          metalness={0.1}
        />
      </mesh>
    </RigidBody>
  )
}

function Spheres({ isActive, shouldReset }) {
  const textures = useTexture(logoTextureUrls)

  const sphereData = useMemo(() => {
    const safeWidth = 80
    const safeHeight = 15
    const safeDepth = 6

    return Array.from({ length: SPHERE_COUNT }).map((_, i) => ({
      id: i,
      initialPosition: [
        (Math.random() - 0.5) * safeWidth,
        safeHeight + Math.floor(i / 10) * 2,
        (Math.random() - 0.5) * safeDepth,
      ],
      texture: textures[i % textures.length],
    }))
  }, [textures])

  return (
    <>
      {sphereData.map((data) => (
        <Sphere 
          key={data.id} 
          initialPosition={data.initialPosition} 
          texture={data.texture}
          isActive={isActive}
          shouldReset={shouldReset}
        />
      ))}
    </>
  )
}

function BoundingBox() {
  const wallThickness = 0.5
  const boxWidth = 90
  const boxHeight = 40
  const boxDepth = 10

  return (
    <>
      <RigidBody type="fixed" restitution={0.5} friction={0.8}>
        <CuboidCollider
          args={[boxWidth / 2, wallThickness / 2, boxDepth / 2]}
          position={[0, -boxHeight / 2 - wallThickness / 2, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" restitution={0.3} friction={0.8}>
        <CuboidCollider
          args={[wallThickness / 2, boxHeight / 2 + wallThickness, boxDepth / 2]}
          position={[-boxWidth / 2 - wallThickness / 2, 0, 0]}
        />
        <CuboidCollider
          args={[wallThickness / 2, boxHeight / 2 + wallThickness, boxDepth / 2]}
          position={[boxWidth / 2 + wallThickness / 2, 0, 0]}
        />
        <CuboidCollider
          args={[boxWidth / 2, boxHeight / 2 + wallThickness, wallThickness / 2]}
          position={[0, 0, -boxDepth / 2 - wallThickness / 2]}
        />
        <CuboidCollider
          args={[boxWidth / 2, boxHeight / 2 + wallThickness, wallThickness / 2]}
          position={[0, 0, boxDepth / 2 + wallThickness / 2]}
        />
      </RigidBody>
    </>
  )
}

export default function PhysicsSpheres() {
  const [isActive, setIsActive] = useState(false)
  const [shouldReset, setShouldReset] = useState(false)
  const containerRef = useRef(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        setIsActive(true)
        setShouldReset(false)
      },
      onLeave: () => {
        setIsActive(false)
        setShouldReset(true)
      },
      onEnterBack: () => {
        setIsActive(true)
        setShouldReset(false)
      },
      onLeaveBack: () => {
        setIsActive(false)
        setShouldReset(true)
      },
    })
  }, [])

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh" }}>
      <Canvas
        shadows
        camera={{ position: [0, 10, 60], fov: 40 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[20, 30, 25]}
          intensity={1.8}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={100}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
        />
        <Physics gravity={[0, -20, 0]}>
          <Spheres isActive={isActive} shouldReset={shouldReset} />
          <BoundingBox />
        </Physics>
      </Canvas>
    </div>
  )
} 