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
  const svg2Ref = useRef(null)
  const svg3Ref = useRef(null)
  const svg4Ref = useRef(null)
  const svg5Ref = useRef(null)
  const svg6Ref = useRef(null)

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

      // Continuous left-right movement for SVG elements
      gsap.to(svg2Ref.current, {
        x: "-20px",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

      gsap.to(svg3Ref.current, {
        x: "-20px",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

      // Continuous top-bottom movement for drone
      gsap.to(svg4Ref.current, {
        y: "60px",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

      // Continuous top-bottom movement for SVG5 and SVG6 (synchronized)
      gsap.to([svg5Ref.current, svg6Ref.current], {
        y: "20px",
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className=" py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-sans font-bold text-gray-800 leading-tight">
              Future-Proof Your Business with Strategic{" "}
              <span className="bg-gradient-to-r from-[#6107AF] to-[#00B9FF] bg-clip-text text-transparent font-sans">IT Consulting</span>
            </h2>
            <p ref={descRef} className="text-gray-500 text-lg font-sans leading-relaxed">
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
              {/* blueman - Upper Right */}
              <div ref={svg2Ref} className="absolute top-50 left-57 w-16 h-20">
                <Image 
                  src="/consultsvg2.svg" 
                  alt="blueman" 
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Person with Laptop - Mid Left */}
              <div ref={svg3Ref} className="absolute top-44 right-72 w-16 h-20">
                <Image 
                  src="/consultsvg3.svg" 
                  alt="Person with Laptop" 
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* drone - Top Right */}
              <div ref={svg4Ref} className="absolute top-20 right-50 w-26 h-30">
                <Image 
                  src="/consultsvg4.svg" 
                  alt="drone" 
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Person with Document - Upper Middle */}
              <div ref={svg5Ref} className="absolute bottom-48 left-67 transform -translate-x-1/2 w-16 h-20">
                <Image 
                  src="/consultsvg5.svg" 
                  alt="Person with Document" 
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Person with Magnifying Glass - Bottom Middle */}
              <div ref={svg6Ref} className="absolute bottom-53 left-64 transform -translate-x-1/2 w-30 h-30">
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

// Robot Section Component
const RobotSection = () => {
  const sectionRef = useRef(null)
  const robotRef = useRef(null)
  const textBlocksRef = useRef([])
  const bannerRef = useRef(null)

  const textBlocks = [
    {
      title: "Business-First Approach",
      desc: "We understand your business goals and align every IT strategy accordingly."
    },
    {
      title: "Full-Stack Expertise", 
      desc: "From cloud and software architecture to UX and AI, our diverse team brings deep, cross-functional knowledge to the table."
    },
    {
      title: "Enterprise-Grade Thinking",
      desc: "We combine the agility of a modern digital studio with the discipline of enterprise IT consulting."
    },
    {
      title: "Execution-Focused",
      desc: "From cloud and software architecture to UX and AI, our diverse team brings deep, cross-functional knowledge to the table."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([robotRef.current, ...textBlocksRef.current, bannerRef.current], { opacity: 0, y: 30 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(robotRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to(textBlocksRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4")
        .to(bannerRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Central Robot Illustration with Surrounding Text */}
        <div className="relative flex items-center justify-center mb-16 min-h-[500px]">
          {/* Left Side Text Blocks */}
          <div className="absolute left-0 top-0 w-80 space-y-16">
            {/* Top Left */}
            <div 
              ref={el => textBlocksRef.current[0] = el}
              className="text-right pr-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{textBlocks[0].title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{textBlocks[0].desc}</p>
            </div>

            {/* Bottom Left */}
            <div 
              ref={el => textBlocksRef.current[2] = el}
              className="text-right pr-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{textBlocks[2].title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{textBlocks[2].desc}</p>
            </div>
          </div>

          {/* Central Robot Illustration */}
          <div ref={robotRef} className="relative w-96 h-[500px] mx-12">
            {/* Light blue circular background */}
            <div className="absolute inset-0 bg-blue-100 rounded-full opacity-60"></div>
            
            {/* Robot with data board */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="relative">
                {/* Robot Image */}
                <Image 
                  src="/images/robocons.webp" 
                  alt="Robot Consultant" 
                  width={300} 
                  height={400} 
                  className="w-64 h-auto object-contain"
                />
                
                {/* Data Board */}
                <div className="absolute top-12 left-20 w-40 h-32 bg-white rounded-lg shadow-lg border border-gray-200 p-3">
                  {/* Small blue horizontal bar chart at top left */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-10 h-3 bg-blue-400 rounded"></div>
                    <div className="w-8 h-3 bg-blue-300 rounded"></div>
                    <div className="w-6 h-3 bg-blue-200 rounded"></div>
                  </div>
                  
                  {/* Circular chart in center */}
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 rounded-full border-4 border-blue-400 relative">
                      <div className="absolute inset-0 rounded-full border-4 border-orange-400 transform rotate-45"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-gray-300 transform rotate-90"></div>
                    </div>
                  </div>
                  
                  {/* Horizontal lines at bottom left */}
                  <div className="space-y-1">
                    <div className="w-20 h-1 bg-gray-400 rounded"></div>
                    <div className="w-16 h-1 bg-gray-300 rounded"></div>
                    <div className="w-18 h-1 bg-gray-400 rounded"></div>
                  </div>
                  
                  {/* Blank rectangular box at bottom right */}
                  <div className="absolute bottom-3 right-3 w-8 h-6 border border-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Text Blocks */}
          <div className="absolute right-0 top-0 w-80 space-y-16">
            {/* Top Right */}
            <div 
              ref={el => textBlocksRef.current[1] = el}
              className="text-left pl-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{textBlocks[1].title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{textBlocks[1].desc}</p>
            </div>

            {/* Bottom Right */}
            <div 
              ref={el => textBlocksRef.current[3] = el}
              className="text-left pl-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{textBlocks[3].title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{textBlocks[3].desc}</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div 
          ref={bannerRef}
          className="relative bg-gradient-to-r from-blue-200 via-blue-100 to-white rounded-t-lg p-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00B9FF] mb-4">What we do</h2>
          <p className="text-gray-700 text-xl">Webnox takes a leaner, smarter, and more personalized approach.</p>
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
      <RobotSection />
      
    </main>
  )
}

export default OutsourcingPage