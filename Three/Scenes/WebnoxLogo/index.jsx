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

    // Wait for mesh references to be ready
    const checkRefsAndAnimate = () => {
      if (!logoRef.current?.curve || !logoRef.current?.curve001 || 
          !logoRef.current?.curve002 || !logoRef.current?.curve004 || 
          !logoRef.current?.curve005) {
        setTimeout(checkRefsAndAnimate, 100);
        return;
      }

      // GSAP Timeline for staged animation
      const tl = gsap.timeline();

      // Stage 1: Show only Curve003 (letter "b") for 2 seconds
      tl.to({}, { duration: 2 }) // Wait 2 seconds
      
      // Stage 2: Show all other meshes
      .call(() => {
        if (logoRef.current?.curve) logoRef.current.curve.visible = true;
        if (logoRef.current?.curve001) logoRef.current.curve001.visible = true;
        if (logoRef.current?.curve002) logoRef.current.curve002.visible = true;
        if (logoRef.current?.curve004) logoRef.current.curve004.visible = true;
        if (logoRef.current?.curve005) logoRef.current.curve005.visible = true;
      })
      
      // Stage 3: Zoom into the "b" letter immediately
      .to(camera.position, {
        z: 1,   // Get close to the model
        duration: 2,
        ease: "power2.inOut"
      })
      
      // Enter the "b" and stop at the entrance
      .to(camera.position, {
        z: 0.2, // Just enter the model - stop at entrance
        duration: 2,
        ease: "power2.inOut"
      });

      return tl;
    };

    const timeline = checkRefsAndAnimate();

    return () => {
      if (timeline) timeline.kill();
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
