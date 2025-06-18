import { Canvas, useThree } from "@react-three/fiber"
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier"
import { useTexture } from "@react-three/drei"
import { useMemo, useRef, useState, useEffect, useCallback } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import * as THREE from "three"

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
  const { camera } = useThree()
  const [isDragging, setIsDragging] = useState(false)
  const dragPlaneRef = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0))
  const offsetRef = useRef(new THREE.Vector3())
  const spherePositionRef = useRef(new THREE.Vector3())

  // Reset sphere when shouldReset changes
  useEffect(() => {
    if (rigidBodyRef.current && shouldReset) {
      rigidBodyRef.current.setTranslation({ 
        x: initialPosition[0], 
        y: initialPosition[1], 
        z: initialPosition[2] 
      })
      rigidBodyRef.current.setLinvel({ x: 0, y: 0, z: 0 })
      rigidBodyRef.current.setAngvel({ x: 0, y: 0, z: 0 })
      setIsDragging(false)
    }
  }, [shouldReset, initialPosition])

  // Add velocity limiting effect
  useEffect(() => {
    if (!rigidBodyRef.current || !isActive) return

    const checkVelocity = () => {
      if (!rigidBodyRef.current) return
      
      const vel = rigidBodyRef.current.linvel()
      const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z)
      
      if (speed > 30) {  // Max speed limit
        const scale = 30 / speed
        rigidBodyRef.current.setLinvel({
          x: vel.x * scale,
          y: vel.y * scale,
          z: vel.z * scale
        })
      }
    }

    const intervalId = setInterval(checkVelocity, 16)  // Check ~60 times per second
    return () => clearInterval(intervalId)
  }, [isActive])

  const handlePointerDown = useCallback((e) => {
    e.stopPropagation()
    if (!isActive) return // Only allow interaction when physics is active
    
    // Get current sphere position
    const position = rigidBodyRef.current.translation()
    spherePositionRef.current.set(position.x, position.y, position.z)
    
    // Create drag plane at sphere's height
    dragPlaneRef.current.setFromNormalAndCoplanarPoint(
      new THREE.Vector3(0, 1, 0),
      spherePositionRef.current
    )
    
    // Calculate mouse offset from sphere center
    const mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    )
    
    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(mouse, camera)
    const intersection = new THREE.Vector3()
    raycaster.ray.intersectPlane(dragPlaneRef.current, intersection)
    offsetRef.current.copy(spherePositionRef.current).sub(intersection)
    
    setIsDragging(true)
    document.body.style.cursor = "grabbing"
    rigidBodyRef.current.setBodyType("kinematicPosition")
  }, [camera, isActive])

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return
    
    // Calculate new position
    const mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    )
    
    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(mouse, camera)
    const intersection = new THREE.Vector3()
    raycaster.ray.intersectPlane(dragPlaneRef.current, intersection)
    
    // Apply offset correction
    const newPosition = intersection.add(offsetRef.current)
    
    // Clamp position within bounds
    const boxWidth = 90
    const boxHeight = 40
    const boxDepth = 10
    const clampedX = Math.max(-boxWidth/2 + SPHERE_RADIUS, Math.min(boxWidth/2 - SPHERE_RADIUS, newPosition.x))
    const clampedY = Math.max(-boxHeight/2 + SPHERE_RADIUS, Math.min(boxHeight/2 - SPHERE_RADIUS, newPosition.y))
    const clampedZ = Math.max(-boxDepth/2 + SPHERE_RADIUS, Math.min(boxDepth/2 - SPHERE_RADIUS, newPosition.z))
    
    rigidBodyRef.current.setTranslation({
      x: clampedX,
      y: clampedY,
      z: clampedZ
    })
  }, [isDragging, camera])

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return
    
    setIsDragging(false)
    document.body.style.cursor = "default"
    
    if (rigidBodyRef.current) {
      rigidBodyRef.current.setBodyType("dynamic")
    }
  }, [isDragging])

  // Handle drag events
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove)
      window.addEventListener("pointerup", handlePointerUp)
    }
    
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [isDragging, handlePointerMove, handlePointerUp])

  const handleClick = useCallback(() => {
    if (isDragging || !isActive) return
    
    if (rigidBodyRef.current) {
      const randomX = (Math.random() - 0.5) * 5  // Reduced force
      rigidBodyRef.current.applyImpulse({ x: randomX, y: 15, z: 0 }, true)  // Reduced upward force
      rigidBodyRef.current.applyTorqueImpulse({ x: randomX, y: 0, z: randomX })
    }
  }, [isActive, isDragging])

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="ball"
      restitution={0.5}  // Reduced bounciness
      friction={0.8}     // Increased friction
      position={initialPosition}
      angularDamping={0.9}  // Increased angular damping
      linearDamping={0.5}   // Increased linear damping
      mass={1}              // Added explicit mass
      type={isActive ? "dynamic" : "fixed"}
      ccd={true}           // Enable continuous collision detection
    >
      <mesh 
        castShadow 
        receiveShadow 
        onClick={handleClick}
        onPointerDown={handlePointerDown}
        onPointerOver={() => isActive && (document.body.style.cursor = "grab")}
        onPointerOut={() => !isDragging && (document.body.style.cursor = "default")}
        userData={{ type: "sphere" }}
      >
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
    const safeHeight = 60
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
  const wallColor = "#4ecdc4"
  const wallOpacity = 0.2

  return (
    <>
      {/* Floor */}
      <RigidBody type="fixed" restitution={0.3} friction={1}>
        <CuboidCollider
          args={[boxWidth / 2, wallThickness / 2, boxDepth / 2]}
          position={[0, -boxHeight / 2 - wallThickness / 2, 0]}
          sensor={false}
        />
        <mesh position={[0, -boxHeight / 2 - wallThickness / 2, 0]} receiveShadow>
          <boxGeometry args={[boxWidth, wallThickness, boxDepth]} />
          <meshStandardMaterial color={wallColor} transparent opacity={wallOpacity} />
        </mesh>
      </RigidBody>

      {/* Walls */}
      <RigidBody type="fixed" restitution={0.3} friction={1}>
        {/* Left Wall */}
        <CuboidCollider
          args={[wallThickness / 2, boxHeight / 2 + wallThickness, boxDepth / 2]}
          position={[-boxWidth / 2 - wallThickness / 2, 0, 0]}
          sensor={false}
        />
        <mesh position={[-boxWidth / 2 - wallThickness / 2, 0, 0]} receiveShadow>
          <boxGeometry args={[wallThickness, boxHeight + wallThickness * 2, boxDepth]} />
          <meshStandardMaterial color={wallColor} transparent opacity={wallOpacity} />
        </mesh>

        {/* Right Wall */}
        <CuboidCollider
          args={[wallThickness / 2, boxHeight / 2 + wallThickness, boxDepth / 2]}
          position={[boxWidth / 2 + wallThickness / 2, 0, 0]}
          sensor={false}
        />
        <mesh position={[boxWidth / 2 + wallThickness / 2, 0, 0]} receiveShadow>
          <boxGeometry args={[wallThickness, boxHeight + wallThickness * 2, boxDepth]} />
          <meshStandardMaterial color={wallColor} transparent opacity={wallOpacity} />
        </mesh>

        {/* Back Wall */}
        <CuboidCollider
          args={[boxWidth / 2, boxHeight / 2 + wallThickness, wallThickness / 2]}
          position={[0, 0, -boxDepth / 2 - wallThickness / 2]}
          sensor={false}
        />
        <mesh position={[0, 0, -boxDepth / 2 - wallThickness / 2]} receiveShadow>
          <boxGeometry args={[boxWidth, boxHeight + wallThickness * 2, wallThickness]} />
          <meshStandardMaterial color={wallColor} transparent opacity={wallOpacity} />
        </mesh>

        {/* Front Wall */}
        <CuboidCollider
          args={[boxWidth / 2, boxHeight / 2 + wallThickness, wallThickness / 2]}
          position={[0, 0, boxDepth / 2 + wallThickness / 2]}
          sensor={false}
        />
        <mesh position={[0, 0, boxDepth / 2 + wallThickness / 2]} receiveShadow>
          <boxGeometry args={[boxWidth, boxHeight + wallThickness * 2, wallThickness]} />
          <meshStandardMaterial color={wallColor} transparent opacity={wallOpacity} />
        </mesh>
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
      start: "top 80%",
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
    <div ref={containerRef} style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Canvas
        shadows
        camera={{ position: [0, 10, 60], fov: 45 }}
        style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
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
        <Physics gravity={[0, -20, 0]} maxStabilizationIterations={10} maxVelocityIterations={10}>
          <Spheres isActive={isActive} shouldReset={shouldReset} />
          <BoundingBox />
        </Physics>
      </Canvas>
    </div>
  )
} 