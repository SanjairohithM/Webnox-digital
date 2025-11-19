"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && item.image && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  backgroundColor: item.bgColor || '#b2e5d4',
                }}
                className="absolute -top-64 left-1/2 z-50 -translate-x-1/2 w-48 h-56 rounded-lg overflow-hidden shadow-2xl">
                {/* Profile Image */}
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* White Text Box Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg px-4 py-3 shadow-lg">
                    <div className="font-bold text-black text-base leading-tight">
                      {item.name}
                    </div>
                    <div className="text-sm text-black mt-1">
                      {item.designation}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {hoveredIndex === item.id && !item.image && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl">
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          {item.image ? (
            <div
              onMouseMove={handleMouseMove}
              className="relative !m-0 h-14 w-14 rounded-full p-1.5 flex items-center justify-center transition duration-500 group-hover:z-30 group-hover:scale-105"
              style={{ backgroundColor: item.bgColor || '#b2e5d4' }}>
              <img
                height={100}
                width={100}
                src={item.image}
                alt={item.name}
                className="h-full w-full rounded-full object-cover object-center" />
            </div>
          ) : (
            <div
              onMouseMove={handleMouseMove}
              className="relative !m-0 h-14 w-14 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105">
              {item.icon}
            </div>
          )}
        </div>
      ))}
    </>
  );
};
