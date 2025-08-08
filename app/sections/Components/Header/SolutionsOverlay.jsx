import React from "react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "Branding",
    description: " Crafting meaningful brand stories and visuals that connect with your audience and leave a lasting impact.",
    image: "/images/solution2.webp",
    href: "/branding"
  },
  {
    title: "Software Developement",
    description: " We build custom software that fits your business needs, boosting efficiency, scale, and user experience.",
    image: "/images/solution1.webp",
    href: "/software"
  },
  {
    title: "Digital Transformation",
    description: " We help modernize your business using smart digital tools that improve workflow and growth potential.",
    image: "/images/solution9.webp",
    href: "/digitaltransformation"
  },
  {
    title: "Ecommerce Development",
    description: " Launch seamless, secure online stores that deliver exceptional shopping experiences and drive sales.",
    image: "/images/solution8.webp",
    href: "/ecommerce"
  },
  {
    title: "Mobile App Development",
    description: " Creating high-performing mobile apps that users love, for both iOS and Android platforms, made simple.",
    image: "/images/solution7.webp",
    href: "/mobileapp"
  },
  {
    title: "UI/UX",
    description: " Designing smooth, intuitive, and user-first digital experiences that turn visitors into loyal customers.",
    image: "/images/solution6.webp",
    href: "/uiux"
  },
  {
    title: "SAAS Products",
    description: " We develop scalable, cloud-based SaaS solutions that solve real problems and grow with your users.,",
    image: "/images/solution5.webp",
    href: "/saas"
  },
  {
    title: "Clouds & devOps",
    description: " Optimizing performance, speed, and reliability with expert DevOps practices and cloud architecture.",
    image: "/images/solution4.webp",
    href: "/cloud"
  },
  {
    title: "3D websites",
    description: " We bring your brand to life with immersive 3D websites that wow users and boost engagement instantly.",
    image: "/images/solution3.webp",
    href: "/3d"
  },

];

export default function SolutionsOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex font-sans items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-6xl w-full mx-4 relative" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-gray-700 transition-colors duration-300 z-10" 
          onClick={onClose}
        >
          &times;
        </button>

        {/* Solutions Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-18">
          {solutions.map((solution, idx) => (
            <Link 
              key={idx} 
              href={solution.href}
              className="group flex items-start gap-4 hover:scale-105 transition-all duration-300"
              onClick={onClose}
            >
              {/* Icon on the left */}
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <Image 
                  src={solution.image} 
                  alt={solution.title} 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                />
              </div>
              
              {/* Title and description on the right */}
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