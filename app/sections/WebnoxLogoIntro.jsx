"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import WebnoxLogoScene from "@/Three/Scenes/WebnoxLogo";

export default function WebnoxLogoLoader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animation duration: 2s (letter b) + 2s (all meshes) + 2s (approach) + 2s (inside) = 8s
    // Add 1s buffer for smooth transition
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500); // Fade out duration
    }, 8500);

    return () => clearTimeout(timer);
  }, [onComplete]);
  

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        background: 'linear-gradient(135deg, #e8e0ff 0%, #e0f8ff 50%, #ffffff 100%)',
        pointerEvents: isVisible ? 'auto' : 'none'
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
        <Suspense fallback={null}>
          <WebnoxLogoScene />
        </Suspense>
      </Canvas>
    </div>
  );
} 