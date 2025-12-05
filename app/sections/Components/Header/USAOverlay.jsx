import React from "react";
import Image from "next/image";
import Link from "next/link";

const usaPages = [
  {
    title: "3D Website Development USA",
    description: "Cutting-edge 3D website development services for US businesses. Immersive web experiences and modern web solutions.",
    image: "/images/solution3.webp",
    href: "/3d-website-development-usa"
  },
  {
    title: "Branding Services USA",
    description: "Crafting meaningful brand stories and visuals for US businesses that connect with your audience.",
    image: "/images/solution2.webp",
    href: "/branding-services-usa"
  },
  {
    title: "Digital Transformation USA",
    description: "Modernize your US business using smart digital tools that improve workflow and growth potential.",
    image: "/images/solution9.webp",
    href: "/digital-transformation-services-usa"
  },
  {
    title: "Enterprise Web Solutions USA",
    description: "Comprehensive enterprise web solutions tailored for US businesses to scale and succeed.",
    image: "/images/solution1.webp",
    href: "/enterprise-web-solutions-usa"
  }
];

export default function USAOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center font-sans" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-[90vw] w-full md:max-w-7xl xl:max-w-[1200px] mx-auto relative" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-gray-700 transition-colors duration-300 z-10" 
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
          USA Services
        </h2>

        {/* Mobile: compact tiles (icon + title only) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {usaPages.map((page, idx) => (
            <Link
              key={idx}
              href={page.href}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4 hover:bg-gray-100 active:scale-[0.98] transition-all duration-200"
              onClick={onClose}
            >
              <Image
                src={page.image}
                alt={page.title}
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-center text-sm font-semibold text-gray-800 group-hover:text-[#2acbec] line-clamp-2">
                {page.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Tablet/Desktop: detailed list with descriptions */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-2 gap-8">
          {usaPages.map((page, idx) => (
            <Link
              key={idx}
              href={page.href}
              className="group flex items-start gap-4 hover:scale-[1.02] transition-all duration-300"
              onClick={onClose}
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <Image
                  src={page.image}
                  alt={page.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-[#2acbec] transition-colors duration-300">
                  {page.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {page.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

