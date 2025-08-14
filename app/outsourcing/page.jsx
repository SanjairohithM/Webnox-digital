"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        gsap.set([titleRef.current, descRef.current], { opacity: 0, y: 40 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })
        
        tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
      } else {
        // Simple fade animations for mobile
        gsap.set([titleRef.current, descRef.current], { opacity: 0, y: 30 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })
        
        tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      }
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/outsource.webp"
          alt="Outsourcing background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Strong white fade at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white"></div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 mt-30">
        <h1 ref={titleRef} className="text-2xl md:text-4xl lg:text-5xl  font-sans font-bold text-black mb-6">
          Outsourcing Services by <span className="text-[#13b4ee]">Webnox Digital</span>
        </h1>
        <p
          ref={descRef}
          className="text-[#222] text-lg md:text-xl max-w-2xl font-sans leading-relaxed text-center mx-auto tracking-wide mt-4"
        >
          At Webnox Digital, we understand that managing everything in-house can slow down your business growth. That’s why we offer smart, efficient, affordable outsourcing solutions to help you stay focused on what matters most—growing your business.
        </p>
      </div>
    </section>
  )
}

// Why Choose Section Component
const WhyChooseSection = () => {
  const sectionRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const featuresRef = useRef([])
  const dotsRef = useRef([])
  const svgPathRef = useRef(null)
  const svgRef = useRef(null)
  const animatedDotRef = useRef(null)
  const pathTrackerRef = useRef(null)

  const features = [
    {
      number: "1",
      title: "Skilled Professionals",
      desc: "Get access to experienced designers, developers, digital marketers, and support teams without the cost of hiring."
    },
    {
      number: "2",
      title: "Scalable Solutions",
      desc: "Whether you're a startup or an enterprise, our services scale with your needs."
    },
    {
      number: "3",
      title: "Time-Zone Advantage",
      desc: " With our offshore team, your projects keep moving forward even after your office closes."
    },
    {
      number: "4",
      title: "Reliable Communication",
      desc: " We provide daily updates, clear reporting, and direct communication channels to keep you fully informed."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        // Initial setup - hide everything
        gsap.set([
          subtitleRef.current,
          titleRef.current,
          descRef.current,
          buttonRef.current,
          ...featuresRef.current,
          ...dotsRef.current,
          svgRef.current,
          animatedDotRef.current
        ], { opacity: 0, y: 30 })

        // Set initial scale for animated dot
        gsap.set(animatedDotRef.current, { scale: 0 })

        // Set up SVG path for drawing animation
        if (svgPathRef.current) {
          const pathLength = svgPathRef.current.getTotalLength()
          gsap.set(svgPathRef.current, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
          })
        }

        // Main timeline for content animation
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })

        mainTl
          .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
          .to(titleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
          .to(featuresRef.current, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3")

        // Connection animation timeline - triggers automatically when section comes into view
        const connectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          }
        })

        // Automatic slow animation sequence
        connectionTl
          // First show the SVG container
          .to(svgRef.current, { opacity: 1, duration: 0.3 })
          // Show and animate the traveling dot
          .to(animatedDotRef.current, { 
            opacity: 1, 
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)" 
          })
          // Animate dot along the path using MotionPath - slow and smooth
          .to(animatedDotRef.current, {
            motionPath: svgPathRef.current ? {
              path: svgPathRef.current,
              align: svgPathRef.current,
              alignOrigin: "0.5 0.5",
              autoRotate: false,
            } : null,
            duration: 4, // Slower animation - 4 seconds
            ease: "power1.inOut", // Smoother easing
            onUpdate: function() {
              // Draw the path as the dot moves
              if (svgPathRef.current) {
                const progress = this.progress()
                const pathLength = svgPathRef.current.getTotalLength()
                gsap.set(svgPathRef.current, {
                  strokeDashoffset: pathLength * (1 - progress)
                })
              }
            }
          }, "-=0.2")
          // Show static dots progressively as the animated dot passes near them
          .to(dotsRef.current[0], { 
            opacity: 1, 
            scale: 1,
            duration: 0.4, 
            ease: "back.out(1.7)" 
          }, "-=3.2") // Show first dot early in the animation
          .to(dotsRef.current[1], { 
            opacity: 1, 
            scale: 1,
            duration: 0.4, 
            ease: "back.out(1.7)" 
          }, "-=2.4") // Show second dot
          .to(dotsRef.current[2], { 
            opacity: 1, 
            scale: 1,
            duration: 0.4, 
            ease: "back.out(1.7)" 
          }, "-=1.6") // Show third dot
          .to(dotsRef.current[3], { 
            opacity: 1, 
            scale: 1,
            duration: 0.4, 
            ease: "back.out(1.7)" 
          }, "-=0.8") // Show fourth dot
          // Hide the animated dot at the end
          .to(animatedDotRef.current, { 
            opacity: 0, 
            scale: 0.5,
            duration: 0.5,
            ease: "power2.in" 
          }, "-=0.3")
      } else {
        // Simple fade animations for mobile
        // Filter out undefined refs before setting
        const mobileElements = [
          subtitleRef.current,
          titleRef.current,
          descRef.current,
          buttonRef.current,
          ...featuresRef.current,
          ...dotsRef.current
        ].filter(Boolean)
        
        gsap.set(mobileElements, { opacity: 0, y: 30 })

        // Main timeline for content animation
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })

        // Simple fade-in animations for mobile
        if (subtitleRef.current) {
          mainTl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        }
        if (titleRef.current) {
          mainTl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        }
        if (descRef.current) {
          mainTl.to(descRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        }
        if (buttonRef.current) {
          mainTl.to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        }
        
        const validFeatures = featuresRef.current.filter(Boolean)
        if (validFeatures.length > 0) {
          mainTl.to(validFeatures, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.3")
        }

        // Mobile Timeline Line Animation
        const timelineLineRef = window.mobileTimelineLineRef
        if (timelineLineRef) {
          // Animate the timeline line drawing
          gsap.to(timelineLineRef, {
            height: "100%",
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            }
          })
        }

        // Animate timeline dots as they come into view
        const validDots = dotsRef.current.filter(Boolean)
        if (validDots.length > 0) {
          gsap.to(validDots, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            }
          })
        }
      }

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white py-20 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto relative min-h-[500px]">
        
        {/* Desktop Version - Hidden on mobile */}
        <div className="hidden lg:block">
          {/* Left Column Content */}
          <div className="absolute left-0 top-0 w-full lg:w-[40%] flex flex-col items-start">
            <span ref={subtitleRef} className="text-[#13b4ee] text-sm font-semibold uppercase mb-2 tracking-wide">Why Choose</span>
            <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-black font-sans text-black mb-4 leading-tight text-left">Webnox for Outsourcing</h2>
            <p ref={descRef} className="text-[#6b6b6b] text-base md:text-lg font-sans font-normal leading-relaxed mb-6 text-left max-w-md">
            At Webnox, we redefine outsourcing by combining innovation, reliability, and performance. Our tailored services help businesses scale faster, operate more efficiently, and focus on their core strengths.
            </p>
            <button ref={buttonRef} className="bg-[#13b4ee] text-white px-7 py-3 rounded-full font-semibold text-base shadow-md hover:bg-[#0ea5e9] transition mb-8">
              Get Started
            </button>
            
            {/* First Feature - Below Button */}
            <div
              ref={el => featuresRef.current[0] = el}
              className="relative flex flex-col items-start justify-start max-w-sm mt-20"
            >
              {/* Large faint number */}
              <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
                1
              </span>
              {/* Feature content */}
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[0].title}</h3>
                <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug max-w-xs">
                  {features[0].desc}
                </p>
              </div>
            </div>

            {/* Second Feature - Higher and more right of 1 */}
            <div
              ref={el => featuresRef.current[1] = el}
              className="absolute left-[380px] top-[350px] flex flex-col items-start justify-start w-[320px]"
            >
              {/* Large faint number */}
              <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
                2
              </span>
              {/* Feature content */}
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[1].title}</h3>
                <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug">
                  {features[1].desc}
                </p>
              </div>
            </div>

          {/* Third Feature - Time-Zone Advantage */}
          <div
            ref={el => featuresRef.current[2] = el}
            className="absolute left-[720px] top-[150px] flex flex-col items-start justify-start w-[320px]"
          >
            {/* Large faint number */}
            <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
              3
            </span>
            {/* Feature content */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[2].title}</h3>
              <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug">
                {features[2].desc}
              </p>
            </div>
          </div>

          {/* Fourth Feature - Reliable Communication */}
          <div
            ref={el => featuresRef.current[3] = el}
            className="absolute left-[1120px] top-[70px] flex flex-col items-start justify-start w-[320px]"
          >
            {/* Large faint number */}
            <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
              4
            </span>
            {/* Feature content */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[3].title}</h3>
              <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug">
                {features[3].desc}
              </p>
            </div>
          </div>
          </div>

          {/* Connection Points and SVG Curve */}
          <div className="absolute inset-0 pointer-events-none z-5 -translate-y-32">
            {/* Static Connection Dots - Positioned on the SVG path */}
            {/* Dot 1 - On path at 250,529 position */}
            <div 
              ref={el => dotsRef.current[0] = el}
              className="absolute left-[230px] top-[450px] w-6 h-6 bg-[#13b4ee] border-3 border-[#13b4ee] rounded-full opacity-0 scale-0 transform -translate-x-3 -translate-y-3"
            ></div>
            
            {/* Dot 2 - On path at 470,382 position */}
            <div 
              ref={el => dotsRef.current[1] = el}
              className="absolute left-[540px] top-[330px] w-6 h-6 bg-[#13b4ee] border-3 border-[#13b4ee] rounded-full opacity-0 scale-0 transform -translate-x-3 -translate-y-3"
            ></div>
            
            {/* Dot 3 - On path at 776,321 position */}
            <div 
              ref={el => dotsRef.current[2] = el}
              className="absolute left-[790px] top-[131px] w-6 h-6 bg-[#13b4ee] border-3 border-[#13b4ee] rounded-full opacity-0 scale-0 transform -translate-x-3 -translate-y-3"
            ></div>
            
            {/* Dot 4 - On path at 1044,138 position */}
            <div 
              ref={el => dotsRef.current[3] = el}
              className="absolute left-[1144px] top-[98px] w-6 h-6 bg-[#13b4ee] border-3 border-[#white] rounded-full opacity-0 scale-0 transform -translate-x-3 -translate-y-3"
            ></div>
            
            {/* SVG Curve connecting all 4 dots - Using outsourcing1.svg */}
            <svg
              ref={svgRef}
              viewBox="0 0 1619 582"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-0"
            >
              <path
                ref={svgPathRef}
                d="M27 444C75 479 186.8 545 250 529C329 509 348.5 406 470.5 382C592.5 358 682 441.5 776.5 321C871 200.5 860 132.5 1044 138.5C1228 144.501 1558.8 103.4 1592 3"
                stroke="#13b4ee"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Version - Vertical Timeline */}
        <div className="lg:hidden">
          {/* Header Content */}
          <div className="text-center mb-12">
            <span ref={subtitleRef} className="text-[#13b4ee] text-sm font-semibold uppercase mb-2 tracking-wide block">Why Choose</span>
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-black font-sans text-black mb-4 leading-tight">Webnox for Outsourcing</h2>
            <p ref={descRef} className="text-[#6b6b6b] text-base md:text-lg font-sans font-normal leading-relaxed mb-6 max-w-md mx-auto">
              At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster, operate efficiently, and focus on their core strengths.
            </p>
            <button ref={buttonRef} className="bg-[#13b4ee] text-white px-7 py-3 rounded-full font-semibold text-base shadow-md hover:bg-[#0ea5e9] transition">
              Get Started
            </button>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line Container */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            {/* Animated Timeline Line */}
            <div 
              ref={el => {
                // Create a ref for the animated line
                if (!window.mobileTimelineLineRef) {
                  window.mobileTimelineLineRef = el
                }
              }}
              className="absolute left-6 top-0 w-0.5 bg-[#13b4ee] origin-top"
              style={{ height: '0%' }}
            ></div>
            
            {/* Timeline Items */}
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => featuresRef.current[index] = el}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div 
                  ref={el => dotsRef.current[index] = el}
                  className="absolute left-6 w-4 h-4 bg-[#13b4ee] border-2 border-white rounded-full transform -translate-x-2 -translate-y-2 shadow-md opacity-0 scale-0"
                ></div>
                
                {/* Content Card */}
                <div className="ml-16 bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-[#13b4ee] text-white text-sm font-bold rounded-full mb-3">
                    {index + 1}
                  </div>
                  
                  {/* Feature Content */}
                  <h3 className="text-lg font-bold text-black mb-2 font-sans leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#6b6b6b] text-base font-normal font-sans leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Approach Cards Section Component  
const ApproachSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const approaches = [
    { 
      title: "Agility", 
      desc: " Rapid team deployment and flexible engagement models",
      image: "/images/fi_2.webp"
    },
    { 
      title: "Transparency", 
      desc: " Regular reporting, project tracking, and clear communication",
      image: "/images/fi_1.webp"
    },
    { 
      title: "Cost Efficiency", 
      desc: "50–70% savings on operational and development costs",
      image: "/images/fi_4.webp"
    },
    { 
      title: "Expertise Access", 
      desc: "Hire experienced developers, designers, marketers, and QA experts",
      image: "/images/fi_3.webp"
    },
    { 
      title: "Data Security", 
      desc: " Strict compliance with international data protection standards (GDPR-ready)",
      image: "/images/fi_5.webp"
    },
    { 
      title: "Quality Assurance", 
      desc: " Rigorous testing, bug fixes, and continuous improvement",
      image: "/images/fi_2.webp"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        // Initial setup - hide everything
        gsap.set([subtitleRef.current, titleRef.current], { opacity: 0, y: 30 })
        
        // Set initial positions for cards based on their grid position
        gsap.set(cardsRef.current[0], { opacity: 0, x: -200 }) // Card 1 (first column) - from left
        gsap.set(cardsRef.current[1], { opacity: 0, y: 100 })  // Card 2 (second column) - from bottom
        gsap.set(cardsRef.current[2], { opacity: 0, x: 200 })  // Card 3 (third column) - from right
        gsap.set(cardsRef.current[3], { opacity: 0, x: -200 }) // Card 4 (first column) - from left
        gsap.set(cardsRef.current[4], { opacity: 0, y: 100 })  // Card 5 (second column) - from bottom
        gsap.set(cardsRef.current[5], { opacity: 0, x: 200 })  // Card 6 (third column) - from right
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
          // Animate first column cards (1 & 4) together from left
          .to([cardsRef.current[0], cardsRef.current[3]], { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out" 
          }, "-=0.4") // Cards 1 & 4 from left
          // Animate second column cards (2 & 5) together from bottom
          .to([cardsRef.current[1], cardsRef.current[4]], { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power2.out" 
          }, "-=0.3") // Cards 2 & 5 from bottom
          // Animate third column cards (3 & 6) together from right
          .to([cardsRef.current[2], cardsRef.current[5]], { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out" 
          }, "-=0.3") // Cards 3 & 6 from right
      } else {
        // Simple fade animations for mobile
        // Filter out undefined refs before setting
        const mobileElements = [subtitleRef.current, titleRef.current].filter(Boolean)
        const mobileCards = cardsRef.current.filter(Boolean)
        
        gsap.set(mobileElements, { opacity: 0, y: 30 })
        gsap.set(mobileCards, { opacity: 0, y: 30 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        // Simple fade-in animations for mobile
        if (subtitleRef.current) {
          tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        }
        if (titleRef.current) {
          tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        }
        if (mobileCards.length > 0) {
          tl.to(mobileCards, { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            stagger: 0.1, 
            ease: "power2.out" 
          }, "-=0.3")
        }
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <p ref={subtitleRef} className="text-cyan-500 font-sans text-xl mb-4">What we offer</p>
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Our outsourcing approach <br />focuses on
          </h2>
        </div>
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mb-6">
                <Image
                  src={approach.image}
                  alt={approach.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{approach.title}</h3>
              <p className="text-gray-600 leading-relaxed">{approach.desc}</p>
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
      question: "Why should I outsource?",
      answer: "Outsourcing allows businesses to access specialized expertise, reduce operational costs, and focus on core activities while delegating non-core functions to external experts."
    },
    {
      question: "Is outsourcing with Webnox suitable for small businesses?",
      answer: "Absolutely! Webnox works with startups, SMEs, and large enterprises, tailoring solutions to fit your budget and goals."
    },
    {
      question: "Can Webnox handle end-to-end project development?",
      answer: "Yes, from planning and design to development, testing, deployment, and post-launch support, Webnox offers full lifecycle outsourcing services."
    },
    {
      question: " Do you offer dedicated teams for long-term projects?",
      answer: "Yes, clients can hire dedicated developers, designers, or marketing specialists who work exclusively on their projects."
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


const OutsourcingPage = () => {
  return (
    <main className="@/outsourcing">
      <Scroll3DSections>
      <HeroSection />
      <WhyChooseSection />
      <ApproachSection />
      </Scroll3DSections>
      <FAQSection />
 
     
      <Footer />
    </main>
  )
}

export default OutsourcingPage