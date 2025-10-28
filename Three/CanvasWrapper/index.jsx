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
  );
}

export default CanvasWrapper;
