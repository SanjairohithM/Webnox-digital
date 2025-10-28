import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

function Ground() {
  const [colorMap, normalMap, roughnessMap, aoMap, displacementMap] = useLoader(
    TextureLoader,
    [
      "/textures/PavingStones083_2K-JPG_Color.jpg",
      "/textures/PavingStones083_2K-JPG_NormalDX.jpg",
      "/textures/PavingStones083_2K-JPG_Roughness.jpg",
      "/textures/PavingStones083_2K-JPG_AmbientOcclusion.jpg",
      "/textures/PavingStones083_2K-JPG_Displacement.jpg",
    ]
  );

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}

      receiveShadow
      castShadow
    >
      <planeGeometry args={[20, 20]} />
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
}

export default Ground;
