import { useThree } from "@react-three/fiber";
import React from "react";

function Camera() {
  const { camera } = useThree();

  camera.position.set(-1, 1, 4);

  return null;
}

export default Camera;
