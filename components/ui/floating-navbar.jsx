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
           "flex fixed top-8 z-[5000] items-center justify-between",
           className
         )}
         style={{
           width: "calc(100% - 2rem)",
           maxWidth: "1600px",
           left: "50%",
         }}
        >
        <div 
          className="flex items-center justify-between w-full py-1.5 px-4 md:px-6 lg:px-10 rounded-full"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Logo Section - Left */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 -my-3">
            <Link href="/" className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
              <Image
                src={logo || "/placeholder.svg"}
                alt="Logo"
                width={200}
                height={200}
                className="object-contain drop-shadow-lg w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </Link>
          </div>

          {/* Menu Items - Center */}
          <div className="flex items-center gap-3 md:gap-5 lg:gap-8 flex-1 justify-center">
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
                  "text-gray-700 hover:text-[#2acbec] transition-all duration-300 flex items-center gap-2 text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap relative group px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 rounded-full"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#2acbec] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Let's Talk Button - Right */}
          <div className="flex-shrink-0 ml-2 md:ml-3 lg:ml-4">
            <Link href="/contact-us">
              <button
                className="bg-[#2acbec] hover:bg-[#25b8d8] text-white font-semibold px-4 md:px-6 lg:px-8 py-1.5 md:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs md:text-sm lg:text-base cursor-pointer whitespace-nowrap"
                style={{
                  boxShadow: "0 4px 12px rgba(42, 203, 236, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>)
  );
};
