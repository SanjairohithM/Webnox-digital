"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import { MoveUpRight } from "lucide-react"
import TickerSection from "../components/TickerSection";
import Footer from "../sections/Footer";
import Scroll3DSections from "../sections/Components/scrollanimation";
import Link from "next/link";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}



// Hero Section Component
const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const badgeRef = useRef(null)
  const titleLettersRef = useRef([])
  const imageRef = useRef(null)
  const leftContentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Set initial positions - left content from left, right image from right
        gsap.set(leftContentRef.current, { x: "-100%", opacity: 0 })
        gsap.set(imageRef.current, { x: "70%", opacity: 0 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          } 
        })
        
        // Animate both sides simultaneously
        tl.to(leftContentRef.current, { 
            x: "0%", 
            opacity: 1, 
            duration: 0.8, 
            ease: "power2.out" 
          })
          .to(imageRef.current, { 
            x: "0%", 
            opacity: 1, 
            duration: 0.8, 
            ease: "power2.out" 
          }, 0) // Start at the same time as left content
          
        // Then animate the internal content with stagger
        tl.to(badgeRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, 0.3)
          .to(titleLettersRef.current, { 
            opacity: 1, 
            y: 0, 
            duration: 0.4, 
            ease: "power2.out",
            stagger: 0.03 // 30ms delay between each letter
          }, 0.4)
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0.5)
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.6)
          
        // Set initial states for internal content
        gsap.set([badgeRef.current, ...titleLettersRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 20 })
        gsap.set(badgeRef.current, { scale: 0.8 })
        
      } else {
        // Mobile animations - simpler slide effect
        gsap.set(leftContentRef.current, { x: "-50%", opacity: 0 })
        gsap.set(imageRef.current, { x: "50%", opacity: 0 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })
        
        // Animate both sides simultaneously
        tl.to(leftContentRef.current, { 
            x: "0%", 
            opacity: 1, 
            duration: 0.7, 
            ease: "power2.out" 
          })
          .to(imageRef.current, { 
            x: "0%", 
            opacity: 1, 
            duration: 0.7, 
            ease: "power2.out" 
          }, 0)
          
        // Then animate internal content
        tl.to(badgeRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }, 0.2)
          .to(titleLettersRef.current, { 
            opacity: 1, 
            y: 0, 
            duration: 0.3, 
            ease: "power2.out",
            stagger: 0.02 // 20ms delay between each letter
          }, 0.3)
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.4)
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.5)
          
        // Set initial states for internal content
        gsap.set([badgeRef.current, ...titleLettersRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 15 })
        gsap.set(badgeRef.current, { scale: 0.8 })
      }
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden "
      style={{
        background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
      }}
    >
      <div className="relative px-12 mt-50">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div ref={leftContentRef} className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left">
            {/* Badge */}
            <div ref={badgeRef} className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF]">
                <Image src="/images/customer1.png" alt="Digital Transformation" width={16} height={16} className="w-4 h-4 object-contain" />
                <span className="text-[#00B9FF] text-sm font-medium">
                  Digital Transformation Experts
                </span>
              </div>
            </div>

            <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-[#00B9FF] mb-4 leading-tight">
              {"Is Your Business Ready for the Digital Future?".split("").map((char, index) => (
                <span
                  key={index}
                  ref={(el) => (titleLettersRef.current[index] = el)}
                  className="inline-block"
                  style={{ 
                    marginRight: char === " " ? "0.75rem" : "0",
                    minWidth: char === " " ? "0.75rem" : "auto"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p
              ref={descRef}
              className="text-gray-700 text-base md:text-lg lg:text-xl font-sans leading-relaxed mb-8 py-4"
            >
              Outdated systems and slow marketing shouldn't stop your growth. Let WEBNOX DIGITAL power your next stage with smart tech and proven digital strategies.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                ref={buttonRef}
                className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                Get Your Free Digital Growth Plan
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div ref={imageRef} className="w-full max-w-md lg:max-w-lg">
              <img
                src="/images/digital1.webp"
                alt="Digital Transformation"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}






// Technology Should Work for You Section Component
const TechnologyWorkSection = () => {
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        // H2 comes from right side, P comes from bottom
        gsap.set(titleRef.current, { opacity: 0, x: 100 }) // From right
        gsap.set(descRef.current, { opacity: 0, y: 80 })   // From bottom
        gsap.set(imageRef.current, { opacity: 0, y: 30 })  // Normal fade
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        })
        
        tl.to([imageRef.current], { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(titleRef.current, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.3") // Slide from right
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")  // Slide from bottom
      } else {
        // Simple fade animations for mobile
        // H2 comes from right side, P comes from bottom (reduced distance for mobile)
        gsap.set(titleRef.current, { opacity: 0, x: 50 })  // From right (less distance)
        gsap.set(descRef.current, { opacity: 0, y: 40 })   // From bottom (less distance)
        gsap.set(imageRef.current, { opacity: 0, y: 20 })  // Normal fade
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        })
        
        tl.to([imageRef.current], { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
          .to(titleRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }, "-=0.2") // Slide from right
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")  // Slide from bottom
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] md:min-h-[700px]  w-full overflow-hidden py-12 lg:py-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/digital2.webp"
          alt="Digital Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* No overlay - full background visibility */}
      
             <div className="relative w-full px-18 z-20 flex items-center py-36">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center w-full">
                     {/* Left Side - Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl perspective-1000">
              <div className="transform-gpu transition-all duration-700 ease-out hover:rotate-x-12 hover:rotate-y-12 hover:scale-105 hover:translate-z-16 cursor-pointer" 
                   style={{
                     perspective: '1000px',
                     transformStyle: 'preserve-3d'
                   }}
                   onMouseEnter={(e) => {
                     const rect = e.currentTarget.getBoundingClientRect();
                     const x = e.clientX - rect.left;
                     const y = e.clientY - rect.top;
                     const centerX = rect.width / 2;
                     const centerY = rect.height / 2;
                     const rotateX = (y - centerY) / 10;
                     const rotateY = (centerX - x) / 10;
                     e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05) translateZ(20px)`;
                   }}
                   onMouseMove={(e) => {
                     const rect = e.currentTarget.getBoundingClientRect();
                     const x = e.clientX - rect.left;
                     const y = e.clientY - rect.top;
                     const centerX = rect.width / 2;
                     const centerY = rect.height / 2;
                     const rotateX = (y - centerY) / 10;
                     const rotateY = (centerX - x) / 10;
                     e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05) translateZ(20px)`;
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)';
                   }}>
                <img
                  src="/images/digital3.webp"
                  alt="Technology Working for You"
                  className="w-full h-auto object-contain transition-all duration-700 ease-out"
                  loading="lazy"
                  style={{ backfaceVisibility: 'hidden' }}
                />
              </div>
            </div>
          </div>

           {/* Right Side - Text Content */}
           <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2 lg:pl-4">
            {/* Badge */}
            <div ref={badgeRef} className="flex justify-center lg:justify-start mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF]">
                <Image src="/images/customer1.png" alt="Digital Innovation" width={16} height={16} className="w-4 h-4 object-contain" />
                <span className="text-[#00B9FF] text-sm font-medium">
                  Discover next-generation tools
                </span>
              </div>
            </div>

            <h2 ref={titleRef} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-semibold text-gray-900 mb-6 lg:mb-8 leading-tight lg:leading-tight">
              Technology Should Work for You, Not Against You
            </h2>
            
            <p
              ref={descRef}
              className="text-gray-700 text-base md:text-lg lg:text-xl font-sans leading-relaxed lg:leading-relaxed max-w-none lg:max-w-xl xl:max-w-2xl"
            >
              At WEBNOX DIGITAL, we combine digital transformation with smart digital marketing strategies. We help you fix the backend systems, automation, ditch the white-label copy, we improve the frontend branding, SEO, online visibility!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


// What is Next-Gen Marketing Section Component
const NextGenMarketingSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)
  const textBoxesRef = useRef([])
  const desktopLayoutRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure all refs are available
      if (!titleRef.current || !subtitleRef.current || !imageRef.current) return
      
      // Filter valid text boxes
      const validTextBoxes = textBoxesRef.current.filter(box => box !== null)
      if (validTextBoxes.length === 0) return
      
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Set initial states - only image and text boxes start blurred
        gsap.set([titleRef.current, subtitleRef.current], { 
          opacity: 0, 
          y: 30 
        })
        
        gsap.set(desktopLayoutRef.current, { 
          opacity: 0.2 
        })
        
        gsap.set(imageRef.current, { 
          opacity: 0.2, 
          scale: 0.95 
        })
        
        gsap.set(validTextBoxes, { 
          filter: "blur(12px)", 
          opacity: 0.2 
        })
        
        // Create timeline with ScrollTrigger
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "bottom 20%",
            scrub: 1.5,
            markers: false, // Set to true for debugging
            onUpdate: self => {
              // Manual progress control for better reliability
              const progress = self.progress
              
              // Title and subtitle - normal fade in (first 30% of scroll)
              if (progress <= 0.3) {
                const titleProgress = Math.min(progress / 0.15, 1)
                const subtitleProgress = Math.min(Math.max((progress - 0.1) / 0.15, 0), 1)
                
                gsap.set(titleRef.current, {
                  opacity: titleProgress,
                  y: 30 * (1 - titleProgress)
                })
                
                gsap.set(subtitleRef.current, {
                  opacity: subtitleProgress,
                  y: 30 * (1 - subtitleProgress)
                })
              }
              
              // Background Image fade in (30-70% of scroll)
              if (progress > 0.3 && progress <= 0.7) {
                const imageProgress = (progress - 0.3) / 0.4
                const opacity = 0.2 + (0.8 * imageProgress)
                const scale = 0.95 + (0.05 * imageProgress)
                
                gsap.set(imageRef.current, {
                  opacity: opacity,
                  scale: scale
                })
              }
              
              // Desktop layout opacity from 20% to 100% (30-50% of scroll) - reaches 100% at middle
              if (progress > 0.3 && progress <= 0.5) {
                const layoutProgress = (progress - 0.3) / 0.2
                const layoutOpacity = 0.2 + (0.8 * layoutProgress)
                gsap.set(desktopLayoutRef.current, {
                  opacity: layoutOpacity
                })
              }
              
              // Text boxes blur clear (40-80% of scroll) - start earlier
              if (progress > 0.4) {
                const textProgress = (progress - 0.4) / 0.4
                validTextBoxes.forEach((box, index) => {
                  const staggerDelay = index * 0.15
                  const boxProgress = Math.min(Math.max((textProgress - staggerDelay) / 0.2, 0), 1)
                  const blurAmount = 12 * (1 - boxProgress)
                  const opacity = 0.2 + (0.8 * boxProgress)
                  
                  gsap.set(box, {
                    filter: `blur(${blurAmount}px)`,
                    opacity: opacity
                  })
                })
              }
            }
          }
        })
      } else {
        // Mobile - simpler approach
        gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 20 })
        gsap.set(desktopLayoutRef.current, { opacity: 0.2 })
        gsap.set(imageRef.current, { opacity: 0.3 })
        gsap.set(validTextBoxes, { filter: "blur(8px)", opacity: 0.2 })
        
        gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
            end: "bottom 30%",
            scrub: 1,
            onUpdate: self => {
              const progress = self.progress
              
              // Title and subtitle
              if (progress <= 0.4) {
                const titleProgress = Math.min(progress / 0.2, 1)
                const subtitleProgress = Math.min(Math.max((progress - 0.1) / 0.2, 0), 1)
                
                gsap.set(titleRef.current, {
                  opacity: titleProgress,
                  y: 20 * (1 - titleProgress)
                })
                
                gsap.set(subtitleRef.current, {
                  opacity: subtitleProgress,
                  y: 20 * (1 - subtitleProgress)
                })
              }
              
              // Background Image fade in
              if (progress > 0.3 && progress <= 0.7) {
                const imageProgress = (progress - 0.3) / 0.4
                const opacity = 0.3 + (0.7 * imageProgress)
                
                gsap.set(imageRef.current, {
                  opacity: opacity
                })
              }
              
              // Desktop layout opacity from 20% to 100% (30-50% of scroll) - reaches 100% at middle
              if (progress > 0.3 && progress <= 0.5) {
                const layoutProgress = (progress - 0.3) / 0.2
                const layoutOpacity = 0.2 + (0.8 * layoutProgress)
                gsap.set(desktopLayoutRef.current, {
                  opacity: layoutOpacity
                })
              }
              
              // Text boxes - start earlier
              if (progress > 0.35) {
                const textProgress = (progress - 0.35) / 0.45
                validTextBoxes.forEach((box, index) => {
                  const staggerDelay = index * 0.15
                  const boxProgress = Math.min(Math.max((textProgress - staggerDelay) / 0.25, 0), 1)
                  const blurAmount = 8 * (1 - boxProgress)
                  const opacity = 0.2 + (0.8 * boxProgress)
                  
                  gsap.set(box, {
                    filter: `blur(${blurAmount}px)`,
                    opacity: opacity
                  })
                })
              }
            }
          }
        })
      }
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  const marketingFeatures = [
    {
      text: "15+ years of hands-on experience",
      position: "top-left"
    },
    {
      text: "Transparent communication, on-time delivery", 
      position: "middle-left"
    },
    // {
    //   text: "Full-service digital marketing team: SEO, PPC, social media & branding",
    //   position: "top-right"
    // },
    {
      text: "Full-service digital marketing team: SEO, PPC, social media & branding",
      position: "bottom-center"
    }
  ]

    return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-36  font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center ">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight"
          >
           Why WEBNOX DIGITAL? We've Done This Before 100+ Times.
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We are digital transformation specialists with a strong team of developers, marketers, automation experts, and data consultants. Our clients trust us because we bring results.
          </p>
        </div>

        {/* Desktop Layout */}
        <div ref={desktopLayoutRef} className="hidden lg:block relative">
          <div className="relative flex justify-center items-center  w-full">
            {/* Central Arrow Image */}
            <div 
              ref={imageRef}
              className="relative z-10"
            >
        <Image
                src="/images/digital4.webp"
                alt="Next-Gen Marketing Arrow"
                width={600}
                height={600}
                className="w-full h-full object-cover "
        />
      </div>
      
            {/* Text Boxes Overlaid Across the Entire Area - Glass Effect */}
            {/* Top Left */}
            <div 
              ref={el => textBoxesRef.current[0] = el}
              className="absolute top-42 left-28 bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 z-20"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <p className="text-gray-900 font-sans text-xl font-semibold leading-relaxed">
                {marketingFeatures[0].text}
              </p>
            </div>

            {/* Middle Left */}
            <div 
              ref={el => textBoxesRef.current[1] = el}
              className="absolute top-120 left-38 bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 z-20"
              style={{ 
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <p className="text-gray-900 font-sans text-xl font-semibold leading-relaxed">
                {marketingFeatures[1].text}
              </p>
            </div>

            {/* Top Right */}
            <div 
              ref={el => textBoxesRef.current[2] = el}  
              className="absolute top-72 right-30 bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 z-20 w-1/3"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                maxWidth: '50%'
              }}
            >
              <p className="text-gray-900 font-sans text-xl font-semibold leading-relaxed">
                {marketingFeatures[2].text}
              </p>
          </div>

            {/* Bottom Center */}
            {/* <div 
              ref={el => textBoxesRef.current[3] = el}
              className="absolute -bottom-2 left-1/2 bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 z-20"
              style={{ 
                transform: 'translateX(-50%)',
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <p className="text-gray-900 font-sans text-xl font-semibold leading-relaxed">
                {marketingFeatures[3].text}
              </p>
            </div> */}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Central Image */}
          <div className="flex justify-center ">
            <div ref={imageRef}>
              <Image
                src="/images/digital4.webp"
                alt="Next-Gen Marketing Arrow"
                width={280}
                height={280}
                className="w-64 h-64 md:w-72 md:h-72 object-contain"
              />
              </div>
            </div>

          {/* Text Cards in Stack */}
          <div className="space-y-6">
            {marketingFeatures.map((feature, index) => (
              <div 
                key={index}
                ref={el => textBoxesRef.current[index] = el}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mx-auto max-w-md"
              >
                <p className="text-gray-800 font-medium text-base leading-relaxed text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}




// Don't Let Outdated Tools Section Component
const OutdatedToolsSection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const listRef = useRef(null)
  const buttonRef = useRef(null)
  const bulletRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Desktop animations
        // Elements coming from left
        gsap.set([titleRef.current, buttonRef.current, imageRef.current], { 
          opacity: 0, 
          x: -50,
          y: 30 
        })
        
        // Individual bullet points coming from right
        gsap.set(bulletRefs.current, { 
          opacity: 0, 
          x: 50,
          y: 30 
        })
        
        // Description paragraph (keep visible)
        gsap.set(listRef.current.querySelector('p'), { 
          opacity: 0, 
          x: -30,
          y: 20 
        })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        tl.to(titleRef.current, { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power2.out" })
          .to(listRef.current.querySelector('p'), { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
          .to(buttonRef.current, { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .to(imageRef.current, { opacity: 1, x: 0, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
        
        // Animate each bullet point individually with delays
        bulletRefs.current.forEach((bullet, index) => {
          if (bullet) {
            tl.to(bullet, { 
              opacity: 1, 
              x: 0, 
              y: 0, 
              duration: 0.8, 
              ease: "power2.out" 
            }, `-=${0.3 - (index * 0.15)}`) // Stagger each bullet by 0.15s
          }
        })
      } else {
        // Mobile animations
        // Elements coming from left
        gsap.set([titleRef.current, buttonRef.current, imageRef.current], { 
          opacity: 0, 
          x: -30,
          y: 20 
        })
        
        // Individual bullet points coming from right
        gsap.set(bulletRefs.current, { 
          opacity: 0, 
          x: 30,
          y: 20 
        })
        
        // Description paragraph
        gsap.set(listRef.current.querySelector('p'), { 
          opacity: 0, 
          x: -20,
          y: 15 
        })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        })
        
        tl.to(titleRef.current, { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "power2.out" })
          .to(listRef.current.querySelector('p'), { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
          .to(buttonRef.current, { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
          .to(imageRef.current, { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
        
        // Animate each bullet point individually with delays
        bulletRefs.current.forEach((bullet, index) => {
          if (bullet) {
            tl.to(bullet, { 
              opacity: 1, 
              x: 0, 
              y: 0, 
              duration: 0.7, 
              ease: "power2.out" 
            }, `-=${0.2 - (index * 0.12)}`) // Stagger each bullet by 0.12s
          }
        })
      }
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  const services = [
    "Inefficient teams",
    "Poor online presence", 
    "Wasted ad budgets",
    "Lost leads and customers"
  ]

  return (
    <section 
      ref={sectionRef}
      className=" overflow-hidden font-sans  "
    >
      <div className="px-12">
        <div className="relative flex min-h-[400px] lg:min-h-[450px]">
          {/* Background Image - Full Width */}
          <div ref={imageRef} className="absolute inset-0 flex -right-55 bottom-3 hidden lg:block">
            <img
              src="/images/digital5.webp"
              alt="Professional Business Consultant"
              className="w-3/4 h-3/4 object-cover rounded-lg mx-auto my-auto"
              loading="lazy"
            />
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 flex items-start w-full">
            <div ref={contentRef} className="w-full lg:w-1/2 p-8 ">
              <h2 
                ref={titleRef}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900   leading-tight"
              >
                Don't Let Outdated Tools & Invisible Marketing{" "}
                <span className="text-[#00B9FF]">Hold You Back</span>
              </h2>
              
              <div ref={listRef} className="mb-8 lg:mb-10">
                <p className="text-gray-700 text-lg lg:text-xl  leading-relaxed">
                Many businesses invest in ads, websites, or CRM tools but still struggle. Why? Because digital success is a system.
                </p>
                <br />

                {/* <p className="text-[#00B9FF] text-lg lg:text-xl  leading-relaxed">Without the right tech and strategy, you face:</p> */}
                <ul className="space-y-3 lg:space-y-4">
                  {services.map((service, index) => (
                    <li 
                      key={index} 
                      ref={el => bulletRefs.current[index] = el}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-[#00B9FF] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-base lg:text-lg leading-relaxed">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



const WhyCustomerExperienceMattersSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const statsRef = useRef([])
  const svgRef = useRef(null)

  useEffect(() => {
      const ctx = gsap.context(() => {
          gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })
          gsap.set(statsRef.current, { opacity: 0, y: 40 })
          // SVG is visible from start, no initial animation
          gsap.set(svgRef.current, { opacity: 0.2 })

          const tl = gsap.timeline({
              scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 30%",
              }
          })

          tl
              .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
              .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
              .to(statsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }, "-=0.2")
              // Start slow wave animation after content is loaded
              .to(svgRef.current, {
                  motionPath: {
                      path: "M0,0 Q50,-20 100,0 T200,0",
                      autoRotate: false,
                  },
                  duration: 4,
                  ease: "sine.inOut",
                  repeat: -1,
                  yoyo: true,
                  delay: 1
              }, "-=0.5")
              // Add gentle opacity pulsing
              .to(svgRef.current, {
                  opacity: 0.4,
                  duration: 3,
                  ease: "sine.inOut",
                  repeat: -1,
                  yoyo: true
              }, "-=3")
      }, sectionRef)
      return () => ctx.revert()
  }, [])

  const stats = [
      {
          icon: "/images/customer7.png",
          number: "500+",
          description: "Successful Digital Transformation Projects"
      },
      {
          icon: "/images/customer9.png",
          number: "98%",
          description: "Client Satisfaction Rate"
      },
      {
          icon: "/images/customer10.png",
          number: "95%",
          description: "Project Delivery Rate"
      },
      {
          icon: "/images/customer7.png",
          number: "5+",
          description: "Global Operation Hubs"
      }
  ]

       return (
       <section
           ref={sectionRef}
           className="relative py-16 lg:py-24 px-4 overflow-hidden mt-20"
           style={{
               background: "linear-gradient(135deg, #00B9FF 0%, #0097D9 50%, #007AC3 100%)"
           }}
       >
           {/* Background Image Overlay */}
           <div className="absolute inset-0 z-40">
               <Image
                   ref={svgRef}
                   src="/customersvg.svg"
                   alt="Customer Experience Background"
                   fill
                   className="object-cover opacity-20"
                   priority={false}
               />
           </div>
           
           {/* Blue Gradient Overlay */}
           <div 
               className="absolute inset-0 z-10"
               style={{
                   background: "linear-gradient(90deg, rgba(0, 185, 255, 0.7) 0%, rgba(0, 118, 217, 0.7) 100%)"
               }}
           ></div>
           
                        <div className="max-w-7xl mx-auto relative z-20">
            
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Side: Text and Image - spans 2 columns */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Title */}
                    <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-sans leading-tight">
                        What Success Looks Like With <span className="text-7xl font-semibold font-sans">WEBNOX DIGITAL</span>
                    </h2>

                    {/* Subtitle */}
                    <p ref={subtitleRef} className="text-white/90 text-xl font-sans leading-relaxed mb-8">
                    Our track record speaks for itself.
                    </p>

                    {/* Image below text */}
                    <div className="relative w-full max-w-md">
                       
                                <div className="text-center">
                                    <div className="items-center justify-center">
                                        <Image src="/images/digital6.webp" alt="Success Guaranteed" width={600} height={600} />
                                    </div>
                                 
                                </div>
                        
                    </div>
                </div>

                {/* Right Side: Stats Grid - spans 1 column */}
                <div className="lg:col-span-1 grid grid-cols-2 gap-6 font-sans ">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            ref={el => statsRef.current[index] = el}
                            className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Number */}
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-sans">
                                {stat.number}
                            </h3>

                            {/* Description */}
                            <p className="text-white/90 text-base font-medium">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full"></div>
          </div>
      </section>
  )
}

const FAQSection = () => {
    const faqs = [
      {
        question: "What types of businesses benefit from your consulting services?",
        answer: " We work with startups, SMEs, and large enterprises across industries to solve complex digital challenges and enable growth."
      },
      {
        question: "How does Webnox approach digital transformation?",
        answer: "We begin with deep discovery and deliver a customized, phased roadmap that balances strategy, tech, and people."
      },
      {
        question: "What makes your consulting different from traditional firms?",
        answer: "We execute. Our tech-first, agile-led approach ensures transformation is actionable and scalable."
      },
      {
        question: "What makes Webnox Digital a reliable IT consulting partner?",
        answer: "We combine deep technical knowledge, strategic insight, and industry-specific experience with a business-first approach, delivering technology solutions that solve real-world problems and fuel growth."
      },
      {
        question: "What industries do you specialize in for IT consulting?",
        answer: "We serve a wide range of industries, including finance, healthcare, e-commerce, logistics, real estate, and manufacturing. Our domain experts tailor strategies based on sector-specific challenges and regulatory requirements."
      },
    ];
    const [openIdx, setOpenIdx] = React.useState(0);
  
    return (
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2">Frequently</h2>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-500">Asked Questions</span>
          </div>
          {/* Responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* FAQ Accordion */}
            <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border border-gray-200 bg-white transition-shadow ${openIdx === idx ? 'shadow-md' : 'hover:shadow'} `}
                >
                  <button
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none"
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold flex-shrink-0">{openIdx === idx ? '-' : '+'}</span>
                  </button>
                  {openIdx === idx && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Right Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center min-h-[280px] sm:min-h-[320px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src="/images/fi_7.webp"
                  alt="FAQ Icon"
                  width={48}
                  height={48}
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Do you have more questions?</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
              <Link href="/contact" className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors shadow-sm cursor-pointer">Shoot a Direct Mail</Link>
              </div>
          </div>
        </div>
      </section>
    );
  };
  

  
const DigitalTransformationPage = () => {
  return (
    <main className="@/digitaltransformation">
      <Scroll3DSections>
      <HeroSection />
      <TechnologyWorkSection />
      <NextGenMarketingSection />
      </Scroll3DSections>
      <OutdatedToolsSection />
      <WhyCustomerExperienceMattersSection />
      
      {/* <FAQSection /> */}
      <Footer />
    </main>
  )
}

export default DigitalTransformationPage