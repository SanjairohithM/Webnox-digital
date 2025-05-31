import Box from "@/Three/Models/Box";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";  
import { BoxRotation } from "./Animations";
import Ground from "@/Three/Models/ground";
import DirectionalLight from "@/Three/Lights/DirectionalLight";

const BoxRotationScene = () => {
  const ref = useRef(null);

  const {camera}=useThree()


    camera.position.set(-1,1,4)

  return (
    <>
      <Box ref={ref} />
      <BoxRotation targetRef={ref} />
    </>
  );
};

export { BoxRotationScene };
