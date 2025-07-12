import { WebnoxLogo } from "@/Three/Models/WebnoxLogo";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const WebnoxLogoScene = () => {
  const { camera } = useThree();
  const controlsRef = useRef();
  const logoRef = useRef();

  // Set initial camera position
  camera.position.set(0, 0, 50);

  useEffect(() => {
    if (!logoRef.current) return;

    // GSAP Timeline for camera animation only
    const tl = gsap.timeline();

    // Zoom into the logo
    tl.to(camera.position, {
      z: 1,   // Get close to the model
      duration: 2, // Faster zoom
      ease: "power2.inOut"
    })
    
    // Enter the logo 
    .to(camera.position, {
      z: 0.2, // Just enter the model
      duration: 2, // Faster entry
      ease: "power2.inOut"
    })
    
    // Animation complete
    .call(() => {
      console.log("Logo animation complete");
    });

    return () => {
      if (tl) tl.kill();
    };
  }, [camera]);

  return (
    <>
      {/* Basic lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* The WebnoxLogo component */}
      <WebnoxLogo 
        ref={logoRef}
        scale={[200, 200, 200]} 
        position={[-5.85, -0.9, 1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      
      {/* Camera controls for interaction */}
      <OrbitControls 
        ref={controlsRef}
        enablePan={true}
        enableZoom={false}
        enableRotate={true}
        panSpeed={0.8}
        rotateSpeed={0.5}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </>
  );
};

export { WebnoxLogoScene };
export default WebnoxLogoScene;
