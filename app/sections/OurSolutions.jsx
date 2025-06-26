"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "BRANDING",
    description: "Build a brand that speaks before you do. We craft visual identities that are bold, memorable, and strategically aligned with your business goals.",
    image: "/images/BRANDING.png"
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    description: "From MVPs to enterprise systems — we engineer scalable, high-performance software that drives innovation and business growth.",
    image: "/images/Software Development.png"
  },
  {
    title: "DIGITAL MARKETING",
    description: "Reach, engage, and convert. Our data-driven marketing campaigns put your brand in front of the right audience at the right time.",
    image: "/images/Digital Marketing.png"
  },
  {
    title: "App Development",
    description: "We design and develop mobile apps that are fast, user-friendly, and built to grow with your business. From intuitive UI/UX to powerful backend systems, our apps deliver seamless experiences across Android, iOS, and hybrid platforms.",
    image: "/images/ECommerce Store Development.png"
  },
  {
    title: "WEB DEVELOPMENT",
    description: "Pixel-perfect, performance-first websites built using the latest tech — designed to impress and built to scale.",
    image: "/images/Web Development.png"
  },
  {
    title: "DATA & ANALYSIS",
    description: "Make every decision count. We help you turn raw data into real-time insights that drive smarter strategies and better outcomes.",
    image: "/images/DATA & ANALYSIS.png"
  },
  {
    title: "UI UX DESIGN",
    description: "Designs that delight. Experiences that retain. We create intuitive, engaging interfaces that users love.",
    image: "/images/ui ux design.png"
  },
  {
    title: "IT SUPPORT",
    description: "Stay online, always. Our proactive support keeps your systems running smoothly and securely, 24/7.",
    image: "/images/IT SUPPORT.png"
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
      className="w-full min-h-screen bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white py-24"
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
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="flex items-start gap-8 group"
            >
              <div className="w-[140px] h-[140px] relative flex-shrink-0 transition-all duration-300">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>
              <div className="flex-1 pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurSolutions;
