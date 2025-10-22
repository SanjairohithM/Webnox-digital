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
  const titleLettersRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop with letter-by-letter title animation
        gsap.set([...titleLettersRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 20 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })
        
        // Animate title letters one by one
        tl.to(titleLettersRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          ease: "power2.out",
          stagger: 0.03 // 30ms delay between each letter
        })
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      } else {
        // Simple fade animations for mobile with letter-by-letter title animation
        gsap.set([...titleLettersRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 15 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })
        
        // Animate title letters one by one (faster on mobile)
        tl.to(titleLettersRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 0.3, 
          ease: "power2.out",
          stagger: 0.02 // 20ms delay between each letter
        })
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      }
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-[420px] md:min-h-[F480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden "
      style={{
        background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
      }}
    >
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mt-50">
        <h1 ref={titleRef} className="md:text-6xl text-3xl  font-sans font-semibold text-[#00B9FF] mb-4 leading-tight">
          {"Automate Growth. Personalize at Scale.".split("").map((char, index) => (
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
          className="text-gray-700 text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-center mx-auto mb-8 py-4"
        >
         Your Next-Gen Marketing Partner Starts Here. You need marketing that adapts faster, connects more deeply, and scales more intelligently. At Webnox Digital, we blend human insight with data intelligence, using the latest tools in AI, automation, and consumer behavior to take your brand from being seen to being sought-after.
        </p>
        <Link href="/contact-us">
        <button
          ref={buttonRef}
          className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer"
        >
          Talk Now !
        </button>
        </Link>
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
      text: "Predictive campaigns that adjust in real-time",
      position: "top-left"
    },
    {
      text: "AI-driven insights that reduce guesswork", 
      position: "middle-left"
    },
    {
      text: "Hyper-personalized customer journeys",
      position: "top-right"
    },
    {
      text: "Data-led storytelling that builds long-term loyalty",
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
        <div className="text-center mb-16 lg:mb-20">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight"
          >
            What is Next-Gen Marketing?
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            It's about building systems that learn, optimize, and evolve<br />
            with your audience.
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
                src="/images/nextgen1.webp"
                alt="Next-Gen Marketing Arrow"
                width={500}
                height={500}
                className="w-96 h-96 xl:w-[450px] xl:h-[450px] object-contain"
        />
      </div>
      
            {/* Text Boxes Overlaid Across the Entire Area - Glass Effect */}
            {/* Top Left */}
            <div 
              ref={el => textBoxesRef.current[0] = el}
              className="absolute -top-12 left-28 bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 z-20"
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
              className="absolute top-40 left-38 bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 z-20"
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
              className="absolute top-52 right-28 bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 z-20"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <p className="text-gray-900 font-sans text-xl font-semibold leading-relaxed">
                {marketingFeatures[2].text}
              </p>
          </div>

            {/* Bottom Center */}
            <div 
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
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Central Image */}
          <div className="flex justify-center mb-12">
            <div ref={imageRef}>
              <Image
                src="/images/nextgen1.webp"
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


// Is This Right for You Section Component
const IsThisRightSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const cardsRef = useRef([])
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        // Filter valid cards
        const validCards = cardsRef.current.filter(card => card !== null)

        const isDesktop = window.innerWidth >= 1024

        // Titles initial
        gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })

        tl
          .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
          .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")

        if (isDesktop) {
          // Desktop: slide in from sides
          if (validCards.length >= 4) {
            gsap.set([validCards[0], validCards[1]], { x: -window.innerWidth, y: 0 })
            gsap.set([validCards[2], validCards[3]], { opacity: 0, x: 100, y: 0 })
          }

          if (validCards.length >= 2) {
            tl.to([validCards[0], validCards[1]], {
              x: 0,
              duration: 1.5,
              stagger: 0,
              ease: "power2.out"
            }, "-=0.3")
          }

          if (validCards.length >= 4) {
            tl.to([validCards[2], validCards[3]], {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out"
            }, "-=0.6")
          }
        } else {
          // Mobile/tablet: simple fade-up, no horizontal motion
          if (validCards.length > 0) {
            gsap.set(validCards, { opacity: 0, y: 20 })
            tl.to(validCards, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out"
            }, "-=0.2")
          }
        }
      }, sectionRef)
      return () => ctx.revert()
    }, [])
  
    const businessTypes = [
      {
        icon: "/images/nextgen2.webp",
        title: "Ready to scale fast"
      },
      {
        icon: "/images/nextgen3.webp",
        title: "Tired of old marketing playbooks"
      },
      {
        icon: "/images/nextgen4.webp",
        title: "Want clarity, performance, and creative edge"
      },
      {
        icon: "/images/nextgen5.webp",
        title: "Looking for a partner who moves as fast as the market does"
      }
    ]
  
    return (
      <section ref={sectionRef} className=" py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 font-sans leading-tight">
            Is This Right for You?
          </h2>
          
          {/* Subtitle */}
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-700 text-center mb-16 font-sans">
            Next-gen marketing is for businesses that are
          </p>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
            {businessTypes.map((type, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="bg-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1 border border-gray-200 min-h-[280px] flex flex-col justify-center"
              >
                {/* Arrow in top right */}
                <div className="bg-white rounded-xl p-2 absolute top-4 right-4 text-gray-400 group-hover:text-[#00B9FF] transition-colors duration-300 shadow-sm">
                  <MoveUpRight size={20} />
                </div>
                
                {/* Icon - Centered */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src={type.icon}
                    alt={type.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Title - With wrapping, centered */}
                <h3 className="text-lg font-semibold text-gray-900 font-sans leading-tight px-2">
                  {type.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }


const NextGenFeatures = () => (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold mb-12 text-black leading-tight">
          What does Webnox Digital do?
        </h2>
        
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 max-w-3xl mx-auto">
          {/* Column 1 - Row 1: Takes 1 grid space (smaller) */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden col-span-2 row-span-1 relative group cursor-pointer">
            <img 
              src="/images/nextgen8.webp" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
              <div className="text-left text-white">
                <h3 className="text-lg font-bold mb-2">Smart Campaign Intelligence</h3>
                <p className="text-sm">Our AI-driven strategy tools help us test, adapt, and scale campaigns based on real-time performance</p>
              </div>
            </div>
          </div>
          
          {/* Column 2 - Row 1: Takes 2 grid spaces (larger, spans down) */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden col-span-2 row-span-2 relative group cursor-pointer">
            <img 
              src="/images/nextgen9.webp" 
              alt="Digital Solutions" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
              <div className="text-left text-white">
                <h3 className="text-xl font-bold mb-3">Buyer Psychology + Data</h3>
                <p className="text-base">We don’t just know what your audience clicks, we know why. That’s how we design campaigns that connect, convert, and compound</p>
              </div>
            </div>
          </div>
          
          {/* Column 1 - Row 2: Takes 2 grid spaces (larger, spans down) */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden col-span-2 row-span-2 relative group cursor-pointer">
            <img 
              src="/images/nextgen7.webp" 
              alt="Business Consulting" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
              <div className="text-left text-white">
                <h3 className="text-xl font-bold mb-3">Omnichannel Experience</h3>
                <p className="text-base">From WhatsApp to LinkedIn, YouTube to voice search, we craft unified campaigns across the platforms your audience lives on.</p>
              </div>
            </div>
          </div>
          
          {/* Column 2 - Row 2: Takes 1 grid space (smaller) */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden col-span-2 row-span-1 relative group cursor-pointer">
            <img 
              src="/images/nextgen6.webp" 
              alt="Business Consulting" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
              <div className="text-left text-white">
                <h3 className="text-lg font-bold mb-2"> Conversion, Not Just Reach</h3>
                <p className="text-sm">Impressions are nice. Revenue is better. Our goal is to turn awareness into acquisition and browsers into brand believers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

const ResultsSection = () => (
  <section className=" py-16 px-4 font-sans">
    <div className="max-w-6xl mx-auto text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-gray-800 leading-tight">
        Results Our Clients See:
      </h2>
      
      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8   ">
        {/* ROAS Result */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center ">
            <Image src="/images/nextgen11.webp" alt="ROAS" width={80} height={80} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-2xl  font-bold text-gray-900 mb-2">
            5x Return on Ad Spend (ROAS)
          </h3>
        </div>
        
        {/* Lead Increase Result */}
        <div className=" rounded-2xl p-8 text-center shadow-lg bg-gray-50">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center ">
            <Image src="/images/nextgen10.webp" alt="ROAS" width={80} height={80} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-2xl  font-bold text-gray-900 mb-2">
            300% Increase in lead
          </h3>
        </div>
        
        {/* Engagement Growth Result */}
        <div className=" rounded-2xl p-8 text-center shadow-lg bg-gray-50">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center ">
            <Image src="/images/nextgen2.webp" alt="ROAS" width={80} height={80} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-2xl  font-bold text-gray-900 mb-2">
            4x Engagement growth across channels
          </h3>
        </div>
      </div>
    </div>
  </section>
)

const MarketingStackSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const cardBackgroundsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Filter valid cards
      const validCards = cardsRef.current.filter(card => card !== null)
      const validBackgrounds = cardBackgroundsRef.current.filter(bg => bg !== null)
      
      gsap.set(titleRef.current, { opacity: 0, y: 30 })
      gsap.set(validCards, { opacity: 0, y: 50, scale: 0.9 })
      
      // Set initial state for card backgrounds
      gsap.set(validBackgrounds, { scaleX: 0, transformOrigin: "left center" })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to(validCards, { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out" 
        }, "-=0.4")

      // Add hover animations for each card
      validCards.forEach((card, index) => {
        const background = validBackgrounds[index]
        if (background) {
          card.addEventListener('mouseenter', () => {
            gsap.to(background, { 
              scaleX: 1, 
              duration: 0.4, 
              ease: "power2.out" 
            })
          })
          
          card.addEventListener('mouseleave', () => {
            gsap.to(background, { 
              scaleX: 0, 
              duration: 0.3, 
              ease: "power2.in" 
            })
          })
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const marketingStackItems = [
    "AI-Powered Ad Campaigns",
    "Automated Lead Funnels", 
    "Voice & Search Engine Optimization (VSEO)",
    "Conversion Rate Optimization (CRO)",
    "Multilingual Campaigns for Global Markets",
    "Email + WhatsApp Automation",
    "Predictive Retargeting",
    "Video & Interactive Content Strategy",
    "Influencer and UGC Amplification"
  ]

  return (
    <section 
      ref={sectionRef} 
      className="py-16 px-4 font-sans"
    
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16 leading-tight">
          Our Next-Gen Marketing Stack Includes
        </h2>
        
        {/* Marketing Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingStackItems.map((item, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="relative rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden group"
              style={{
                background: "linear-gradient(90deg, #00B9FF 0%, rgba(0, 185, 255, 0.6) 20%, rgba(0, 185, 255, 0.2) 35%, rgba(255, 255, 255, 0.9) 60%, #ffffff 100%)"
              }}
            >
              {/* Animated full blue background for hover */}
              <div 
                ref={el => cardBackgroundsRef.current[index] = el}
                className="absolute inset-0 bg-[#00B9FF] rounded-2xl"
                style={{ scaleX: 0, transformOrigin: "left center" }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold leading-tight text-gray-800 group-hover:text-white transition-colors duration-300">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



const FAQSection = () => {
    const faqs = [
      {
        question: "What is next-gen marketing?",
        answer: "Next-gen marketing refers to a modern marketing approach that integrates AI tools, automation, data intelligence, and omnichannel strategies to help businesses connect with audiences more effectively. It goes beyond traditional digital marketing by delivering personalized, real-time, and scalable campaigns that improve ROI and reduce manual effort."
      },
      {
        question: "Why should businesses invest in AI-powered marketing?",
        answer: "Businesses should invest in AI-powered marketing because it helps them automate repetitive tasks, target the right audience, improve personalization, and make data-driven decisions. This leads to higher conversion rates, lower cost per acquisition, and better customer experiences across platforms."
      },
      {
        question: "Which industries can benefit from next-gen marketing?",
        answer: "Industries like e-commerce, SaaS, logistics, healthcare, education, professional services, and real estate can benefit greatly from next-gen marketing. Webnox Digital customizes strategies to suit your industry, audience, and market geography."
      },
  
      {
        question: "How do I get started with Webnox Digital’s next-gen marketing services?",
        answer: "Getting started is easy. Simply book a free strategy call with our team. We’ll analyze your current marketing, identify growth opportunities, and propose a next-gen plan customized for your business goals and audience."
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
              <Link href="/contact-us" className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors shadow-sm cursor-pointer">Shoot a Direct Mail</Link>
              </div>
          </div>
        </div>
      </section>
    );
  };
  

  
const NextgenPage = () => {
  return (
    <main className="@/nextgen">
      <Scroll3DSections>
      <HeroSection />
      <NextGenMarketingSection />
      <IsThisRightSection />
      <NextGenFeatures />
      <ResultsSection />
      <MarketingStackSection />
      </Scroll3DSections>
      <FAQSection />
      <Footer />
    </main>
  )
}

export default NextgenPage