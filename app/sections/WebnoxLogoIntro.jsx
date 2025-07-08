"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import WebnoxLogoScene from "@/Three/Scenes/WebnoxLogo";

export default function WebnoxLogoLoader({ onComplete }) {

  useEffect(() => {
    // Animation duration: 2.5s (letter b) + 2.5s (zoom) + 2.5s (enter) = 7.5s
    const timer = setTimeout(() => {
      onComplete(); // Immediate completion - no fade
    }, 6500); // Updated timing for slower animation

    return () => clearTimeout(timer);
  }, [onComplete]);
  

  return (
    <div 
      className="fixed inset-0 z-50"
      style={{ 
        background: 'linear-gradient(135deg, #e8e0ff 0%, #e0f8ff 50%, #ffffff 100%)',
      }}
      
    >
      {/* 3D Canvas with WebnoxLogo */}
      <Canvas
        camera={{
          fov: 75,
          position: [0, 0, 50],
        }}
        style={{ width: "100%", height: "100%" }}
        scale={2}
      >
        {/* <Suspense fallback={null}> */}
          <WebnoxLogoScene />
        {/* </Suspense> */}
      </Canvas>
    </div>
  );
} 