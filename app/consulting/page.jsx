"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import FAQSection from "../components/FAQSection";
import TickerSection from "../components/TickerSection";



if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}



// Hero Section Component
const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const icon1Ref = useRef(null)
  const icon2Ref = useRef(null)
  const icon3Ref = useRef(null)
  const icon4Ref = useRef(null)
  const icon5Ref = useRef(null)
  const icon6Ref = useRef(null)
  const icon7Ref = useRef(null)
  const icon8Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 40 })
      gsap.set([icon1Ref.current, icon2Ref.current, icon3Ref.current, icon4Ref.current, icon5Ref.current, icon6Ref.current, icon7Ref.current, icon8Ref.current], { 
        opacity: 0, 
        scale: 0,
        x: 0,
        y: 0
      })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
        .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(icon1Ref.current, { 
          opacity: 1, 
          scale: 1, 
          x: "calc(17rem - 50%)", 
          y: "calc(9rem - 50%)", 
          duration: 1.2, 
          ease: "power2.out" 
        }, "-=0.2")
        .to(icon2Ref.current, { 
          opacity: 1, 
          scale: 1, 
          x: "calc(1rem - 50%)", 
          y: "calc(15rem - 50%)", 
          duration: 1.2, 
          ease: "power2.out" 
        }, "-=1.0")
        .to(icon3Ref.current, { 
          opacity: 1, 
          scale: 1, 
          x: "calc(17rem - 50%)", 
          y: "calc(10rem - 50%)", 
          duration: 1.2, 
          ease: "power2.out" 
        }, "-=1.0")
        .to(icon4Ref.current, { 
          opacity: 1, 
          scale: 1, 
          x: "calc(17rem - 50%)", 
          y: "calc(7rem - 50%)", 
          duration: 1.2, 
          ease: "power2.out" 
        }, "-=1.0")
        .to(icon5Ref.current, { 
          opacity: 1, 
          scale: 1, 
          x: "calc(1rem - 50%)", 
          y: "calc(15rem - 50%)", 
          duration: 1.2, 
          ease: "power2.out" 
        }, "-=1.0")
        .to(icon6Ref.current, { 
          opacity: 1, 
          scale: 1, 
          x: "calc(32rem - 50%)", 
          y: "calc(5rem - 50%)", 
          duration: 1.2, 
          ease: "power2.out" 
        }, "-=1.0")
        .to(icon7Ref.current, { 
          opacity: 1, 
          scale: 1, 
          x: "calc(9.5rem - 50%)", 
          y: "calc(5rem - 50%)", 
          duration: 1.2, 
          ease: "power2.out" 
        }, "-=1.0")
        .to(icon8Ref.current, { 
          opacity: 1, 
          scale: 1, 
          x: "calc(1rem - 50%)", 
          y: "calc(5rem - 50%)", 
          duration: 1.2, 
          ease: "power2.out" 
        }, "-=1.0")
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative flex flex-col items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full bg-white overflow-hidden">
      {/* Floating Icons */}
      <div ref={icon1Ref} className="absolute top-36 left-68 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Image src="/images/consult1.png" alt="Consulting Icon 1" width={32} height={32} className="w-8 h-8" />
      </div>
      
      <div ref={icon2Ref} className="absolute top-60 left-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Image src="/images/consult2.png" alt="Consulting Icon 2" width={28} height={28} className="w-7 h-7" />
      </div>
      
      <div ref={icon3Ref} className="absolute bottom-20 left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Image src="/images/consult3.png" alt="Consulting Icon 3" width={32} height={32} className="w-8 h-8" />
      </div>
      <div ref={icon4Ref} className="absolute bottom-40 left-68 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Image src="/images/consult5.png" alt="Consulting Icon 3" width={32} height={32} className="w-8 h-8" />
      </div>
      
      <div ref={icon5Ref} className="absolute top-28 right-68 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Image src="/images/consult4.png" alt="Consulting Icon 4" width={32} height={32} className="w-8 h-8" />
      </div>
      
      <div ref={icon6Ref} className="absolute top-1/3 right-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Image src="/images/consult5.png" alt="Consulting Icon 5" width={28} height={28} className="w-7 h-7" />
      </div>
      
      <div ref={icon7Ref} className="absolute bottom-20 right-128 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Image src="/images/consult6.png" alt="Consulting Icon 6" width={32} height={32} className="w-8 h-8" />
      </div>
      <div ref={icon8Ref} className="absolute bottom-20 right-38 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Image src="/images/consult2.png" alt="Consulting Icon 6" width={32} height={32} className="w-8 h-8" />
      </div>

      <div className="w-full flex flex-col items-center justify-center text-center px-4 relative z-10">
        <h1 ref={titleRef} className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-gray-600 mb-4 leading-tight">
          Accelerate Growth with<br />
          <span className="font-sans font-bold">
            AI Expert-Led <span className="bg-gradient-to-r from-[#6107AF] to-[#00B9FF] bg-clip-text text-transparent">Digital Consulting</span>
          </span>
        </h1>
        <p
          ref={descRef}
          className="text-gray-600 text-base md:text-lg max-w-2xl font-sans leading-relaxed text-center mx-auto tracking-wide mb-8"
        >
          We align technology, people, and processes to future-proof your business.
        </p>
        <button
          ref={buttonRef}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-md transition-colors duration-300"
        >
          Know More
        </button>
      </div>
    </section>
  )
}

// Animated Text Section Component
const AnimatedTextSection = () => {
  const sectionRef = useRef(null)

  const brands = [
    { name: "Point", logo: "/images/consultlogo1.png" },
    { name: "Interlock", logo: "/images/consultlogo2.png" },
    { name: "Spherule", logo: "/images/consultlogo3.png" },
    { name: "Nietzsche", logo: "/images/consultlogo1.png" },
    { name: "GlobalBank", logo: "/images/consultlogo2.png" },
    { name: "FeatherDev", logo: "/images/consultlogo3.png" },
    { name: "Foca", logo: "/images/consultlogo1.png" }
  ]

  // Duplicate brands for seamless infinite scrolling
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section ref={sectionRef} className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="flex items-center animate-ticker-left whitespace-nowrap">
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={index}
              className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity duration-300 mx-8 md:mx-12 lg:mx-16"
            >
              <Image 
                src={brand.logo} 
                alt={brand.name} 
                width={24} 
                height={24} 
                className="w-full h-full object-contain"
              />
              <span className="text-gray-700 font-bold  font-sans text-2xl ">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Future-Proof Section Component
const FutureProofSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, descRef.current], { opacity: 0, x: -50 })
      gsap.set(imageRef.current, { opacity: 0, x: 50 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(titleRef.current, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" })
        .to(descRef.current, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .to(imageRef.current, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Future-Proof Your Business with Strategic{" "}
              <span className="text-[#00B9FF]">IT Consulting</span>
            </h2>
            <p ref={descRef} className="text-gray-600 text-lg leading-relaxed">
              At Webnox Digital, our IT consulting services are built for ambitious businesses seeking clarity, speed, and long-term impact. We go beyond traditional advisory, we embed ourselves in your challenges, co-create solutions, and deliver tailored digital strategies that scale with your growth. Whether you're a startup seeking product direction or an enterprise pursuing digital transformation, Webnox delivers IT strategies that work fast, flexibly, and future-ready.
            </p>
          </div>
          
          {/* Right Column - Isometric Illustration */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              {/* Base Illustration */}
              <Image 
                src="/consultsvg1.svg" 
                alt="IT Consulting Base Illustration" 
                fill
                className="object-contain"
              />
              
              {/* Overlay Elements */}
              {/* Drone - Upper Right */}
              <div className="absolute top-50 left-57 w-16 h-20">
                <Image 
                  src="/consultsvg2.svg" 
                  alt="Drone" 
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Person with Laptop - Mid Left */}
              <div className="absolute top-44 right-72 w-16 h-20">
                <Image 
                  src="/consultsvg3.svg" 
                  alt="Person with Laptop" 
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Person on Books - Bottom Right */}
              <div className="absolute bottom-90 right-55 w-16 h-20">
                <Image 
                  src="/consultsvg4.svg" 
                  alt="Person on Books" 
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Person with Document - Upper Middle */}
              <div className="absolute bottom-48 left-67 transform -translate-x-1/2 w-16 h-20">
                <Image 
                  src="/consultsvg5.svg" 
                  alt="Person with Document" 
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Person with Magnifying Glass - Bottom Middle */}
              <div className="absolute bottom-53 left-64 transform -translate-x-1/2 w-30 h-30">
                <Image 
                  src="/consultsvg6.svg" 
                  alt="Person with Magnifying Glass" 
                  fill
                  className="object-contain"
                />
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Choose Section Component






// Main Outsourcing Page Component
const OutsourcingPage = () => {
  return (
    <main className="@/outsourcing">
      <HeroSection />
      <AnimatedTextSection />
      <FutureProofSection />
      
    </main>
  )
}

export default OutsourcingPage