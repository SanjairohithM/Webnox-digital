"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import WebnoxLogoScene from "@/Three/Scenes/WebnoxLogo";

export default function WebnoxLogoLoader({ onComplete }) {

  useEffect(() => {
    // Animation duration: 2s (zoom) + 2s (enter) = 4s
    const timer = setTimeout(() => {
      onComplete(); // Immediate completion - no fade
    }, 4000); // Updated timing for faster animation

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
      {/* SEO: Noscript fallback for crawlers */}
      <noscript>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: '#2acbec', fontWeight: 'bold' }}>Webnox Digital</h1>
          <p style={{ fontSize: '1rem', color: '#666', marginTop: '1rem' }}>Transforming Ideas into Intelligent Solutions</p>
        </div>
      </noscript>
    </div>
  );
} 