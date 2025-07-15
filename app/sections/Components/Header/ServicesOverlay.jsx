import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "IT Consulting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
    image: "/images/service7.webp",
    href: "/services"
  },
  {
    title: "AI Automation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
    image: "/images/service6.webp",
    href: "/aiautomation"
  },
  {
    title: "Data Analytics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
    image: "/images/service6.webp",
    href: "/services"
  },
  {
    title: "Next gen marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
    image: "/images/service5.webp",
    href: "/services"
  },
  {
    title: "Emerging Tech",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
    image: "/images/service4.webp",
    href: "/services"
  },
  {
    title: "Out Sourcing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
    image: "/images/service3.webp",
    href: "/outsourcing"
  },
  {
    title: "N8N workflow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
    image: "/images/service2.webp",
    href: "/services"
  },
  {
    title: "customer experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,",
    image: "/images/service1.webp",
    href: "/services"
  }
];

export default function ServicesOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-6xl w-full mx-4 relative" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-gray-700 transition-colors duration-300 z-10" 
          onClick={onClose}
        >
          &times;
        </button>

        {/* Services Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-18">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.href}
              className="group flex items-start gap-4 hover:scale-105 transition-all duration-300"
              onClick={onClose}
            >
              {/* Icon on the left */}
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                />
              </div>
              
              {/* Title and description on the right */}
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