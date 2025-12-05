"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false }
);

export function ViewCanvas({}) {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          zIndex: 1, // Behind your UI
          pointerEvents: "none", // <-- IMPORTANT
        }}
        eventPrefix="client"
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
          position: [0, 0, 5],
        }}
      >
        {/* <Suspense fallback={null}> */}
          <View.Port />
        {/* </Suspense> */}
      </Canvas>
      {/* SEO: Noscript fallback for crawlers */}
      <noscript>
        <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 1, pointerEvents: 'none' }}>
          <p style={{ color: 'transparent', fontSize: '1px' }}>3D Interactive Web Experience - Webnox Digital</p>
        </div>
      </noscript>
      {/* <Loader /> */}
    </>
  );
}
