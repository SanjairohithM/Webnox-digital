import React from "react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "Branding",
    description: " Crafting meaningful brand stories and visuals that connect with your audience and leave a lasting impact.",
    image: "/images/solution2.webp",
    href: "/branding-agency"
  },
  {
    title: "Software Developement",
    description: " We build custom software that fits your business needs, boosting efficiency, scale, and user experience.",
    image: "/images/solution1.webp",
    href: "/software-development"
  },
  {
    title: "Digital Transformation",
    description: " We help modernize your business using smart digital tools that improve workflow and growth potential.",
    image: "/images/solution9.webp",
    href: "/digital-transformation-services"
  },
  {
    title: "Online Store Solutions",
    description: " Launch seamless, secure online stores that deliver exceptional shopping experiences and drive sales.",
    image: "/images/solution8.webp",
    href: "/e-commerce-services"
  },
  {
    title: "iOS & Android App Development",
    description: " Creating high-performing mobile apps that users love, for both iOS and Android platforms, made simple.",
    image: "/images/solution7.webp",
    href: "/app-development-services"
  },
  {
    title: "Custom Web Solutions",
    description: " Creating high-performing custom websites that users love, for both iOS and Android platforms, made simple.",
    image: "/images/solution8.webp",
    href: "/custom-web-solutions"
  },

  {
    title: "UI/UX",
    description: " Designing smooth, intuitive, and user-first digital experiences that turn visitors into loyal customers.",
    image: "/images/solution6.webp",
    href: "/ui-ux-design-services"
  },

  {
    title: "Clouds & devOps",
    description: " Optimizing performance, speed, and reliability with expert DevOps practices and cloud architecture.",
    image: "/images/solution4.webp",
    href: "/cloud-devops-services"
  },
  {
    title: "3D websites",
    description: " We bring your brand to life with immersive 3D websites that wow users and boost engagement instantly.",
    image: "/images/solution3.webp",
    href: "/3d-web-design-services"
  },

];

export default function SolutionsOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex font-sans items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-[90vw] w-full md:max-w-7xl xl:max-w-[1200px] mx-auto relative" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-gray-700 transition-colors duration-300 z-10" 
          onClick={onClose}
        >
          &times;
        </button>

        {/* Mobile: compact tiles (icon + title only) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {solutions.map((solution, idx) => (
            <Link
              key={idx}
              href={solution.href}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4 hover:bg-gray-100 active:scale-[0.98] transition-all duration-200"
              onClick={onClose}
            >
              <Image
                src={solution.image}
                alt={solution.title}
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-center text-sm font-semibold text-gray-800 group-hover:text-[#2acbec] line-clamp-2">
                {solution.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Tablet/Desktop: detailed list with descriptions */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <Link 
              key={idx} 
              href={solution.href}
              className="group flex items-start gap-4 hover:scale-[1.02] transition-all duration-300"
              onClick={onClose}
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <Image 
                  src={solution.image} 
                  alt={solution.title} 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-[#2acbec] transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 