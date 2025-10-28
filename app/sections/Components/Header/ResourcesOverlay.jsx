import React from "react";
import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    title: "Blogs",
    description: "Empowering your digital growth with tailored IT strategies, systems integration, and scalable solutions. ",
    image: "/images/service7.webp",
    href: "/blogs"
  },
  {
    title: "Case Studies",
    description: "Real-world examples of how we've transformed businesses with AI and automation.",
    image: "/images/service6.webp",
    href: "/case-studies"
  }
];

export default function ResourcesOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center font-sans" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-[90vw] w-full md:max-w-2xl xl:max-w-3xl mx-auto relative" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-gray-700 transition-colors duration-300 z-10" 
          onClick={onClose}
        >
          &times;
        </button>

        {/* Mobile: compact tiles (icon + title only) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {resources.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4 hover:bg-gray-100 active:scale-[0.98] transition-all duration-200"
              onClick={onClose}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-center text-sm font-semibold text-gray-800 group-hover:text-[#2acbec] line-clamp-2">
                {service.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Tablet/Desktop: two column layout with descriptions */}
        <div className="hidden md:grid grid-cols-2 gap-6">
            {resources.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group flex items-start gap-4 hover:scale-[1.02] transition-all duration-300"
              onClick={onClose}
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-[#2acbec] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 