import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

const Car2 = React.forwardRef((props, ref) => {
  const car = useGLTF("/models/car2/scene.gltf");

  console.log(car.scene.children[0].children[0].children[0]);

  // useFrame((state, delta) => {
  //   if (car) {
  //     let t = state.clock.getElapsedTime();

  //     let group = car.scene.children[0].children[0].children[0];
  //     group.children[29].rotation.x = t * 2;
  //     group.children[30].rotation.x = t * 2;
  //     group.children[33].rotation.x = t * 2;
  //     group.children[34].rotation.x = t * 2;
  //     group.children[37].rotation.x = t * 2;
  //     group.children[38].rotation.x = t * 2;
  //     group.children[40].rotation.x = t * 2;
  //     group.children[41].rotation.x = t * 2;

  //   }
  // });

  return (
    <mesh ref={ref} position={[2, 0, 0]} scale={[100, 100, 100]}>
      <axesHelper />
      <primitive object={car.scene} />
    </mesh>
  );
});

export default Car2;

useGLTF.preload("/models/car2/scene.gltf");
