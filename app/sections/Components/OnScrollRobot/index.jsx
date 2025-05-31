import { MainRobo } from '@/Three/Models/MainRobo'
import { Environment, OrbitControls, View } from '@react-three/drei'
import React from 'react'

const OnScrollRobot = React.forwardRef((props, ref) => {
    return (
      <div
        ref={ref}
        className="absolute  z-100 clip-target w-[192px] h-[68px] bg-gradient-to-b from-[#3FD7F1] to-[#1B80D5] overflow-hidden"
        style={{
          clipPath: "inset(0% 30% 0% 30%)", // start with sides clipped
          transition: "clip-path 0.3s ease-out", // for smoother fallback
        }}
      >
        <View className="w-full h-full">
          <MainRobo />
          <ambientLight intensity={1} />
          <Environment preset="city" />
        </View>
      </div>
    );
  });
  
  

export default OnScrollRobot