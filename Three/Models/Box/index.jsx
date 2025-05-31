import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React from "react";

const Box = React.forwardRef((props, ref) => {
  const [
    colorMap,
    normalMap,
    roughnessMap,
    aoMap,
    displacementMap
  ] = useLoader(TextureLoader, [
    "/textures/PavingStones083_2K-JPG_Color.jpg",
    "/textures/PavingStones083_2K-JPG_NormalDX.jpg",
    "/textures/PavingStones083_2K-JPG_Roughness.jpg",
    "/textures/PavingStones083_2K-JPG_AmbientOcclusion.jpg",
    "/textures/PavingStones083_2K-JPG_Displacement.jpg",
  ]);

  return (
    <mesh ref={ref} position={[0,1,0]} rotation={[1/Math.PI,0,0]} receiveShadow castShadow>
      <boxGeometry   />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        displacementMap={displacementMap}
        displacementScale={0.0}
      />
    </mesh>
  );
});

export default Box;
