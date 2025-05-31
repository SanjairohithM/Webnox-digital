import Car from "@/Three/Models/Car";
import Car2 from "@/Three/Models/Car2";
import { Environment, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

function CarIdelScene() {
  const carRef = useRef(null);
  const { camera } = useThree();

  camera.position.set(-1, 1, 4);

  useEffect(() => {
    if (carRef.current) {
      carRef.current.position.set(0, 0, 0);
      carRef.current.scale.set(0.003, 0.003, 0.003);
    }
  }, [carRef]);

  return (
    <>
      <Environment preset="city" blur={0.5} far={5} />
      <Car ref={carRef} />
      {/* <Car2 ref={carRef}/> */}
    </>
  );
}

export { CarIdelScene };
