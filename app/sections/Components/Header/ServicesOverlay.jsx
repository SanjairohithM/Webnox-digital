import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "IT Consulting",
    description: "Empowering your digital growth with tailored IT strategies, systems integration, and scalable solutions. ",
    image: "/images/service7.webp",
    href: "/IT-consulting"
  },
  {
    title: "AI Automation",
    description: "Streamline operations and improve decision-making with advanced AI workflows . ",
    image: "/images/service6.webp",
    href: "/AI-automation"
  },
  {
    title: "Data Analytics",
    description: "Unlock actionable insights using predictive analytics, business intelligence dashboards",
    image: "/images/data analytics.png",
    href: "/Data-analytics"
  },
  {
    title: "Next gen marketing",
    description: "Leverage AI-powered targeting, automation, and omnichannel strategies to elevate customer engagement .",
    image: "/images/service5.webp",
    href: "/Next-gen-marketing"
  },
  {
    title: "Emerging Tech",
    description: "Web3, blockchain, AR/VR, and IoT for real-world impact.",
    image: "/images/service4.webp",
    href: "/Emerging-tech"
  },
  {
    title: "Out Sourcing",
    description: "Flexible, cost-effective outsourcing for dev, support, and ops.",
    image: "/images/service3.webp",
    href: "/outsourcing"
  },
  {
    title: "N8N workflow",
    description: "No-code automation with N8N for seamless integrations.",
    image: "/images/service2.webp",
    href: "/N8N-automation-workflow"
  },
  {
    title: "customer experience",
    description: "AI-powered, personalized user experiences to boost loyalty.",
    image: "/images/service1.webp",
    href: "/customer-experience"
  }
];

export default function ServicesOverlay({ onClose }) {
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

        {/* Mobile: compact tiles (icon + title only) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {services.map((service, idx) => (
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

        {/* Tablet/Desktop: detailed list with descriptions */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
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