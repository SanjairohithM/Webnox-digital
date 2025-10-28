"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import WebnoxLogoScene from "@/Three/Scenes/WebnoxLogo";

export default function Demo() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white">
      <div className="absolute top-4 left-4 z-10 text-white">
       
      </div>
      
      <Canvas
        camera={{
          fov: 75,
          position: [0, 0, 30],
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
