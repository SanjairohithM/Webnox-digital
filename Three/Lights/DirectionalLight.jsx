import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const DirectionalLight = () => {
  const ref = useRef(null);

  useHelper(ref, DirectionalLightHelper, 5, "hotpink");

  return (
    <>
      <directionalLight
        ref={ref}
        castShadow
        position={[5, 5, 2]}
        intensity={3}
        
      />
    </>
  );
};

export default DirectionalLight;
