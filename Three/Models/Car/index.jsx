// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import React, { useEffect, useState } from "react";

// const Car = React.forwardRef((props, ref) => {
//   const car = useGLTF("/models/car/scene.gltf");
//   const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false });
//   const [rotation, setRotation] = useState(0);  

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       switch (event.key) {
//         case "ArrowUp":
//           setMovement((prev) => ({ ...prev, forward: true }));
//           break;
//         case "ArrowDown":
//           setMovement((prev) => ({ ...prev, backward: true }));
//           break;
//         case "ArrowLeft":
//           setMovement((prev) => ({ ...prev, left: true }));
//           break;
//         case "ArrowRight":
//           setMovement((prev) => ({ ...prev, right: true }));
//           break;
//         default:
//           break;
//       }
//     };

//     const handleKeyUp = (event) => {
//       switch (event.key) {
//         case "ArrowUp":
//           setMovement((prev) => ({ ...prev, forward: false }));
//           break;
//         case "ArrowDown":
//           setMovement((prev) => ({ ...prev, backward: false }));
//           break;
//         case "ArrowLeft":
//           setMovement((prev) => ({ ...prev, left: false }));
//           break;
//         case "ArrowRight":
//           setMovement((prev) => ({ ...prev, right: false }));
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   useFrame((state, delta) => {
//     if (car) {
//       let group = car.scene.children[0].children[0].children[0];

//       if (movement.left) {
//         setRotation((prev) => prev + delta * 2);
//       }
//       if (movement.right) {
//         setRotation((prev) => prev - delta * 2);
//       }

//       group.rotation.y = rotation;

//       if (movement.forward) {
//         group.position.x += Math.sin(rotation) * 200;  
//         group.position.z += Math.cos(rotation) * 200;  
//       }
//       if (movement.backward) {
//         group.position.x -= Math.sin(rotation) * 200;  
//         group.position.z -= Math.cos(rotation) * 200; 
//       }

//       group.children[0].rotation.x += delta * 2;
//       group.children[2].rotation.x += delta * 2;
//       group.children[4].rotation.x += delta * 2;
//       group.children[6].rotation.x += delta * 2;
//     }
//   });

//   return (
//     <mesh ref={ref} position={[-2, 0, 0]} scale={[0.005, 0.005, 0.005]}>
//       <axesHelper />
//       <primitive object={car.scene} />
//     </mesh>
//   );
// });

// export default Car;

// useGLTF.preload("/models/car/scene.gltf");
