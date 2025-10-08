"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
  onServicesClick,
  onSolutionsClick,
  onResourcesClick
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    (<AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
         className={cn(
           "flex max-w-fit  fixed top-12 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4  items-center justify-center gap-8",
           className
         )}>
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => {
              if (navItem.name === "Services") {
                e.preventDefault()
                onServicesClick && onServicesClick()
              } else if (navItem.name === "Solutions") {
                e.preventDefault()
                onSolutionsClick && onSolutionsClick()
              } else if (navItem.name === "Resources") {
                e.preventDefault()
                onResourcesClick && onResourcesClick()
              }
            }}
             className={cn(
               "text-gray-700 hover:text-[#2acbec] transition-all duration-300 flex items-center gap-2 text-base font-semibold whitespace-nowrap relative group px-3 py-2 rounded-full"
             )}>
             <span className="block sm:hidden">{navItem.icon}</span>
             <span className="hidden sm:block">{navItem.name}</span>
             <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#2acbec] group-hover:w-full transition-all duration-300"></div>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>)
  );
};
