"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "BRANDING",
    description: "Build a brand that speaks before you do. We craft visual identities that are bold, memorable, and strategically aligned with your business goals.",
    image: "/images/BRANDING.webp",
    href: "/branding-agency"
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    description: "From MVPs to enterprise systems — we engineer scalable, high-performance software that drives innovation and business growth.",
    image: "/images/Software Development.webp",
    href: "/software-development"
  },
  {
    title: "DIGITAL MARKETING",
    description: "Reach, engage, and convert. Our data-driven marketing campaigns put your brand in front of the right audience at the right time.",
    image: "/images/Digital Marketing.webp",
    href: "/next-gen-marketing"
  },
  {
    title: "IOS & ANDROID APP DEVELOPMENT",
    description: "We design and develop mobile apps that are fast, user-friendly, and built to grow with your business. From intuitive UI/UX to powerful backend systems, our apps deliver seamless experiences across Android, iOS, and hybrid platforms.",
    image: "/images/ECommerce Store Development.webp",
    href: "/app-development-services"
  },
  {
    title: "CUSTOM WEB SOLUTIONS",
    description: "Pixel-perfect, performance-first websites built using the latest tech — designed to impress and built to scale.",
    image: "/images/Web Development.webp",
    href: "/custom-web-solutions"
  },
  {
    title: "DATA & ANALYSIS",
    description: "Make every decision count. We help you turn raw data into real-time insights that drive smarter strategies and better outcomes.",
    image: "/images/dataana.webp",
    href: "/data-analytics"
  },
  {
    title: "UI UX DESIGN",
    description: "Designs that delight. Experiences that retain. We create intuitive, engaging interfaces that users love.",
    image: "/images/ui ux design.webp",
    href: "/ui-ux-design-services"
  },
  {
    title: "IT SUPPORT",
    description: "Stay online, always. Our proactive support keeps your systems running smoothly and securely, 24/7.",
    image: "/images/IT SUPPORT.webp",
    href: "/it-consulting"
  },
  {
    title: "WEB-BASED 3D VISUALIZATION",
    description: "We bring your brand to life with immersive 3D websites that wow users and boost engagement instantly.",
    image: "/images/3dimagesolution.webp",
    href: "/3d-web-design-services"
  }
];

function OurSolutions() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Cards stagger animation
    gsap.fromTo(cardsRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: {
          each: 0.15,
          grid: [3, 3],
          from: "start"
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top+=100",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-br from-[#e0f8ff] via-[#f0f9ff] to-[#e8e0ff] py-12 md:py-24 relative overflow-hidden"
    >
      {/* Animated background circles for mobile */}
      <div className="absolute top-10 left-5 w-32 h-32 bg-[#2ACBEC]/10 rounded-full blur-3xl animate-pulse md:hidden"></div>
      <div className="absolute bottom-20 right-5 w-40 h-40 bg-[#6149CD]/10 rounded-full blur-3xl animate-pulse md:hidden" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-24">
          <h2 className="text-3xl md:text-6xl font-[600] bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent tracking-wide">
            OUR SOLUTIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] mx-auto mt-4 rounded-full md:hidden"></div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-16 gap-y-6 md:gap-y-24 px-2 md:px-6">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              ref={el => cardsRef.current[index] = el}
              className="flex items-start gap-4 md:gap-8 group cursor-pointer transition-all duration-300 
                         bg-white/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none 
                         p-4 md:p-0 rounded-2xl md:rounded-none 
                         hover:bg-white/80 md:hover:bg-transparent 
                         hover:shadow-lg md:hover:shadow-none 
                         hover:scale-[1.02] md:hover:scale-100
                         active:scale-[0.98] md:active:scale-100
                         border border-white/40 md:border-0"
            >
              <div className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] relative flex-shrink-0 transition-all duration-300 
                            group-hover:scale-110 md:group-hover:scale-105
                            group-hover:rotate-3 md:group-hover:rotate-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ACBEC]/20 to-[#6149CD]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden"></div>
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={140}
                  height={140}
                  style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
                  className="object-contain relative z-10"
                />
              </div>
              <div className="flex-1 pt-2 md:pt-6">
                <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 
                             group-hover:text-[#2acbec] transition-colors duration-300
                             group-hover:translate-x-1 md:group-hover:translate-x-0 
                             transition-transform">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed 
                            group-hover:text-gray-700 transition-colors duration-300">
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

export default OurSolutions;
