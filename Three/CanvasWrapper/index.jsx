import { Canvas } from "@react-three/fiber";
import React from "react";
import {
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
  OrbitControls,
} from "@react-three/drei";
import BasicHelpers from "../Helpers/BasicHelpers";
import Lights from "../Lights";

function CanvasWrapper({ children }) {
  return (
    <>
      <Canvas
        // camera={{ position: [0, 0, 4], fov: 60 }}
        className="w-full h-full bg-white"
        shadows
      >
        {/* <Lights/> */}
        {/* <BasicHelpers /> */}
        <GizmoHelper>
          <GizmoViewport />
        </GizmoHelper>
        {children}
      </Canvas>
      {/* SEO: Noscript fallback for crawlers */}
      <noscript>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white' }}>
          <p style={{ color: 'transparent', fontSize: '1px' }}>3D Interactive Web Experience - Webnox Digital</p>
        </div>
      </noscript>
    </>
  );
}

export default CanvasWrapper;
