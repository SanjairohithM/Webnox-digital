"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


export const FloatingNav = ({
  navItems,
  className,
  onServicesClick,
  onSolutionsClick,
  onResourcesClick,
  logo = "/logo/normallogo.png"
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
      {/* Floating Menu Items - Top Center - Only Menu Items */}
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
          x: "-50%",
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          x: "-50%",
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-12 z-[5000] transition-all duration-300",
          className
        )}
        style={{
          left: "50%",
        }}
      >
        <div 
          className="flex items-center gap-8 py-4 px-8 rounded-full"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
          }}
        >
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
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#2acbec] group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>)
  );
};
