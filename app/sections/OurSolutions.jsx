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
    image: "/images/BRANDING.png",
    href: "/branding-agency"
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    description: "From MVPs to enterprise systems — we engineer scalable, high-performance software that drives innovation and business growth.",
    image: "/images/Software Development.png",
    href: "/software-development"
  },
  {
    title: "DIGITAL MARKETING",
    description: "Reach, engage, and convert. Our data-driven marketing campaigns put your brand in front of the right audience at the right time.",
    image: "/images/Digital Marketing.png",
    href: "/next-gen-marketing"
  },
  {
    title: "IOS & ANDROID APP DEVELOPMENT",
    description: "We design and develop mobile apps that are fast, user-friendly, and built to grow with your business. From intuitive UI/UX to powerful backend systems, our apps deliver seamless experiences across Android, iOS, and hybrid platforms.",
    image: "/images/ECommerce Store Development.png",
    href: "/app-development-services"
  },
  {
    title: "CUSTOM WEB SOLUTIONS",
    description: "Pixel-perfect, performance-first websites built using the latest tech — designed to impress and built to scale.",
    image: "/images/Web Development.png",
    href: "/custom-web-solutions"
  },
  {
    title: "DATA & ANALYSIS",
    description: "Make every decision count. We help you turn raw data into real-time insights that drive smarter strategies and better outcomes.",
    image: "/images/DATA & ANALYSIS.png",
    href: "/data-analytics"
  },
  {
    title: "UI UX DESIGN",
    description: "Designs that delight. Experiences that retain. We create intuitive, engaging interfaces that users love.",
    image: "/images/ui ux design.png",
    href: "/ui-ux-design-services"
  },
  {
    title: "IT SUPPORT",
    description: "Stay online, always. Our proactive support keeps your systems running smoothly and securely, 24/7.",
    image: "/images/IT SUPPORT.png",
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
      className="w-full min-h-screen bg-[#e0f8ff] py-24"
    >
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-24">
          <h2 className="text-6xl font-[600] bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent tracking-wide">
            OUR SOLUTIONS
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 px-6">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              ref={el => cardsRef.current[index] = el}
              className="flex items-start gap-8 group cursor-pointer hover:opacity-90 transition-opacity duration-300"
            >
              <div className="w-[140px] h-[140px] relative flex-shrink-0 transition-all duration-300 group-hover:scale-105">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#2acbec] transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
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
