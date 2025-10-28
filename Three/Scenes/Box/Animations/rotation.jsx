import { useFrame } from "@react-three/fiber";
import React from "react";

const BoxRotation = ({ targetRef }) => {
  useFrame(() => {
    if (targetRef.current) {
      targetRef.current.rotation.x += 0.004;
    }
  });

  return null;
};

export { BoxRotation };
