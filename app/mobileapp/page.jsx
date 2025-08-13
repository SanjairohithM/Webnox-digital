"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"

import Footer from "../sections/Footer";



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
      className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
      }}
    >
      {/* Background Image Overlay - Right Side */}
      <div className="absolute right-34 top-1/2 transform -translate-y-1/2 z-10 w-[35%] h-[50%] lg:w-[70%] lg:h-[65%]">
        <Image
          src="/images/mobile1.webp"
          alt="Mobile Development Background"
          fill
          className="object-contain opacity-45"
          priority={false}
        />
      </div>
      
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mt-35 z-20">
        {/* Introductory text */}
        <div className="mb-6 px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF] inline-flex items-center gap-2">
          <Image
            src="/images/customer1.png"
            alt="E-commerce Icon"
            width={20}
            height={20}
            className="w-4 h-4 md:w-5 md:h-5 object-contain"
          />
          <span className="text-[#00B9FF] text-sm md:text-base font-medium">
            Next-gen Mobile Solutions
          </span>
        </div>

        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-4 leading-tight">
          <span className="text-[#00B9FF]">
            {"Mobile App Development Services to ".split("").map((char, index) => (
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
          </span>
          <br />
          <span className="text-black">
            {"Launch, Scale ".split("").map((char, index) => (
              <span
                key={index + "Mobile App Development Services to ".length}
                ref={(el) => (titleLettersRef.current[index + "Mobile App Development Services to ".length] = el)}
                className="inline-block"
                style={{ 
                  marginRight: char === " " ? "0.75rem" : "0",
                  minWidth: char === " " ? "0.75rem" : "auto"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="text-black">
            {"& Future-Proof ".split("").map((char, index) => (
              <span
                key={index + "Mobile App Development Services to Launch, Scale ".length}
                ref={(el) => (titleLettersRef.current[index + "Mobile App Development Services to Launch, Scale ".length] = el)}
                className="inline-block"
                style={{ 
                  marginRight: char === " " ? "0.75rem" : "0",
                  minWidth: char === " " ? "0.75rem" : "auto"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="text-[#00B9FF] whitespace-nowrap">
            {"Your Digital Vision".split("").map((char, index) => (
              <span
                key={index + "Mobile App Development Services to Launch, Scale & Future-Proof ".length}
                ref={(el) => (titleLettersRef.current[index + "Mobile App Development Services to Launch, Scale & Future-Proof ".length] = el)}
                className="inline-block"
                style={{ 
                  marginRight: char === " " ? "0.75rem" : "0",
                  minWidth: char === " " ? "0.75rem" : "auto"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>
        <p
          ref={descRef}
          className="text-gray-700 text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-center mx-auto mb-8 py-4 max-w-4xl"
        >
          At Webnox Digital, mobile app development is a transformation journey. It begins with a user problem and ends with a digital solution that scales, engages, and converts.
        </p>
        <button
          ref={buttonRef}
          className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          Start Your Project
        </button>
      </div>
    </section>
  )
}



// Technology Services Section Component  
const TechnologySection = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])
  
  const technologies = [
      {
        title: "15+ Years Experience",
        desc: "Hands-on experience in iOS, Android & Cross-platform development",
        image: "/images/mob1.png"
      },
      {
        title: "Battle-Tested Tech",
        desc: "Flutter, Swift, Kotlin, Java and Node.js expertise",
        image: "/images/custom7.png"
      },
      {
        title: "Product Thinking",
        desc: "Driven by product thinking not just programming",
        image: "/images/mob2.png"
      },
      {
        title: "Secure Architecture",
        desc: "Built on OAuth 2.0, JWT and Cloud-based Firewalls",
        image: "/images/mob3.png"
      },
      {
        title: "ASO Optimized",
        desc: "Optimized for App Store Optimization and long-term scalability",
        image: "/images/ecommerce5.png"
      },
      {
        title: "Future-Ready",
        desc: "Built for scale, performance, and emerging technologies",
          image: "/images/mob4.png"
        }
    ]
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        // Check if we're on desktop (lg breakpoint and above)
        const isDesktop = window.innerWidth >= 1024
        
        if (isDesktop) {
          // Complex animations for desktop
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
          
          // Animate first column cards (1 & 4) together from left
          tl.to([cardsRef.current[0], cardsRef.current[3]], { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out" 
          })
          // Animate second column cards (2 & 5) together from bottom
          .to([cardsRef.current[1], cardsRef.current[4]], { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power2.out" 
          }, "-=0.3")
          // Animate third column cards (3 & 6) together from right
          .to([cardsRef.current[2], cardsRef.current[5]], { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out" 
          }, "-=0.3")
        } else {
          // Simple fade animations for mobile
          const mobileCards = cardsRef.current.filter(Boolean)
          
          gsap.set(mobileCards, { opacity: 0, y: 30 })
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            }
          })
          
          if (mobileCards.length > 0) {
            tl.to(mobileCards, { 
              opacity: 1, 
              y: 0, 
              duration: 0.6, 
              stagger: 0.15, 
              ease: "power2.out" 
            })
          }
        }
      }, sectionRef)
      return () => ctx.revert()
    }, [])
  
    return (
      <section ref={sectionRef} className="bg-white  font-sans mt-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex justify-center mb-4">
            <div className="px-3 py-1 bg-[#E6F7FD] rounded-full border border-[#00B9FF] inline-flex items-center gap-2">
              <Image src="/images/customer1.png" alt="Badge" width={16} height={16} className="w-4 h-4 object-contain" />
              <span className="text-[#00B9FF] text-xs md:text-sm font-medium">What sets Webnox Apart?</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
            Why Leading Brands Choose Our
            <br />
            Mobile Expertise
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center max-w-3xl mx-auto mt-4 mb-10">
            From early-stage startups to scaling enterprises, brands approach us with an idea.
            We strategize, architect, and design with precision.
          </p>
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center  rounded-2xl">
                  <Image src={tech.image} alt={tech.title} width={40} height={40} className="w-[80%] h-[80%] object-contain" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 leading-tight">{tech.title}</h3>
                <p className="text-gray-800 leading-relaxed text-sm lg:text-md font-semibold">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }


  
// Proven Use-Cases Section Component
const UseCasesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const useCases = [
    {
      icon: "/images/mobile2.png",
      title: "Healthcare Apps",
      description: "Patient management, telemedicine, HIPAA compliance",
      chips: ["Swift", "Kotlin", "HIPAA Compliant"]
    },
    {
      icon: "/images/mobile3.png",
      title: "EdTech Platforms",
      description: "Interactive learning, progress tracking, video streaming",
      chips: ["Flutter", "Video APIs", "Analytics"]
    },
    {
      icon: "/images/mobile4.png",
      title: "B2B Platforms",
      description: "CRM integration, ERP connectivity, workflow automation",
      chips: ["Node.js", "REST APIs", "Cloud Sync"]
    },
    {
      icon: "/images/mobile5.png",
      title: "On-Demand Delivery",
      description: "Real-time tracking, payment integration, driver management",
      chips: ["Flutter", "Firebase", "Maps API"]
    },
    {
      icon: "/images/mobile6.png",
      title: "eCommerce Mobile",
      description: "Product catalogs, secure checkout, inventory management",
      chips: ["React Native", "Stripe", "Push Notifications"]
    },
    {
      icon: "/images/mobile7.png",
      title: "FinTech & Banking",
      description: "Secure transactions, biometrics auth, compliance features",
      chips: ["Native iOS/Android", "OAuth 2.0", "Encryption"]
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })
      const validCards = cardsRef.current.filter(Boolean)
      gsap.set(validCards, { opacity: 0, y: 40 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(validCards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.2")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
          Proven Use-Cases
          <br />
          We' ve Built
        </h2>
        <p ref={subtitleRef} className="text-gray-600 text-sm md:text-base lg:text-lg text-center max-w-3xl mx-auto mt-3 mb-10">
          Real solutions for real business challenges
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg">
                <Image src={item.icon} alt={item.title} width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.chips.map((chip, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full border border-[#00B9FF] text-[#00B9FF] bg-[#E6F7FD]">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
                    start: "top 80%",
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
            number: "120+",
            description: "Custom mobile apps built across industries"
        },
        {
            icon: "/images/customer9.png",
            number: "90%",
            description: "Client retention rate, NDA and compliance-first approach"
        },
        {
            icon: "/images/customer10.png",
            number: "Open Source",
            description: "Our engineers contribute to libraries and mobile SDKs"
        },
        {
            icon: "/images/customer7.png",
            number: "4.9",
            description: "Rated on Clutch, with verified case studies"
        },

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
          
  
                {/* Title */}
                <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 font-sans leading-tight">
                Why Businesses Trust Us for App Development
                </h2>
  
                {/* Subtitle */}
                <p ref={subtitleRef} className="text-white/90 text-center mb-16 max-w-2xl mx-auto text-lg font-sans">
                Proven track record of delivering exceptional mobile experiences
                </p>
  
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto font-sans">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            ref={el => statsRef.current[index] = el}
                            className="text-center"
                        >
                            
  
                            {/* Number */}
                            <h3 className="text-4xl md:text-3xl font-bold text-white mb-2 font-sans">
                                {stat.number}
                            </h3>
  
                            {/* Description */}
                            <p className="text-white/90 text-lg font-medium">
                                {stat.description}
                            </p>
                        </div>
                    ))}
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

  // Full-Suite Services Section Component
const ServicesSuiteSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const tabsRef = useRef(null)
  const cardsRef = useRef([])
  const [activeTab, setActiveTab] = useState("Native Apps")

  const tabs = ["Native Apps", "Cross-Platform", "Backend & APIs", "Cloud-Enabled"]

  const dataByTab = {
    "Native Apps": [
      {
        icon: "/images/mobile8.png",
        title: "iOS Development",
        stack: "Swift, Objective-C",
        description: "Premium iOS apps built with Swift and Objective‑C, optimized for performance and App Store guidelines.",
        chips: ["Banking", "Insurance", "Healthcare"],
        bullets: ["Native Performance", "iOS Design Guidelines", "App Store Optimization"],
      },
      {
        icon: "/images/mobile3.png",
        title: "Android Development",
        stack: "Kotlin, Java",
        description: "Robust Android apps using Kotlin and Java for broad device compatibility and Play Store success.",
        chips: ["Banking", "Insurance", "Healthcare"],
        bullets: ["Material Design", "Multi‑Device Support", "Play Store Optimization"],
      },
    ],
    "Cross-Platform": [
     
      {
        icon: "/images/mobile9.png",
        title: "Flutter Development",
        stack: "Cross-Platform Excellence",
        description: "Single codebase for iOS and Android with Flutter, delivering native performance and beautiful UIs.",
        chips: ["E-Commerce", "EdTech", "Delivery Apps"],
        bullets: ["Single Codebase", "Native Performance", "Fast Development"],
      },
      {
        icon: "/images/mobile10.png",
        title: "React Native ",
        stack: "JavaScript-Powered",
        description: "Leverage React Native for rapid development with JavaScript, perfect for startups and MVPs.",
        chips: ["E‑commerce", "EdTech", "Delivery Apps"],
        bullets: ["JavaScript Ecosystem", "Hot Reloading", "Code Reusability"],
      },
    ],

 
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current, tabsRef.current], { opacity: 0, y: 24 })
      gsap.set(cardsRef.current.filter(Boolean), { opacity: 0, y: 40 })

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      })

      tl
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.25")
        .to(tabsRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.25")
        .to(cardsRef.current.filter(Boolean), { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.2")
    }, sectionRef)
    return () => ctx.revert()
  }, [activeTab])

  const items = dataByTab[activeTab]

  return (
    <section ref={sectionRef} className="py-16 md:py-20 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
          Our Full‑Suite
          <br />
          Mobile App Development Services
        </h2>
        <p ref={subtitleRef} className="text-gray-600 text-sm md:text-base lg:text-lg text-center max-w-3xl mx-auto mt-3">
          Comprehensive solutions for every mobile app need
        </p>

        {/* Tabs */}
        <div ref={tabsRef} className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {tabs.map((t) => {
            const active = t === activeTab
            return (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${
                  active
                    ? "bg-[#E6F7FD] border-[#00B9FF] text-[#00B9FF] shadow-sm"
                    : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {t}
              </button>
            )
          })}
        </div>

        {/* Content */}
        {activeTab === "Cloud-Enabled" ? (
          <div className="mt-8">
            <div ref={(el) => (cardsRef.current[0] = el)} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#E6F7FD]">
                  <Image src="/images/mobile12.png" alt="Cloud Enabled" width={24} height={24} className="object-contain" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Cloud-Enabled Apps</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base mt-3">Serverless, scalable, and globally distributed</p>
              <p className="text-gray-700 text-sm md:text-base mt-2">Single codebase for iOS and Android with Flutter, delivering native performance and beautiful UIs.</p>

              {/* Providers */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
                {[{
                  title: 'AWS Amplify', desc: 'Full-stack development platform', badge: 'Real-time sync'
                },{
                  title: 'Google Firebase', desc: 'Real-time database & hosting', badge: 'Offline access'
                },{
                  title: 'Azure Functions', desc: 'Serverless computing platform', badge: 'Serverless performance'
                }].map((prov, idx) => (
                  <div key={prov.title} ref={(el) => (cardsRef.current[idx + 1] = el)} className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 text-center">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-lg overflow-hidden flex items-center justify-center bg-[#E6F7FD]">
                      <Image src="/images/mobile12.png" alt={prov.title} width={20} height={20} className="object-contain" />
                    </div>
                    <h4 className="text-sm md:text-base font-semibold text-gray-900">{prov.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">{prov.desc}</p>
                    <div className="mt-3">
                      <span className="inline-block text-[10px] md:text-xs px-3 py-1 rounded-full border border-[#00B9FF] text-[#00B9FF] bg-[#E6F7FD]">{prov.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : activeTab === "Backend & APIs" ? (
          <div className="mt-8">
            <div ref={(el) => (cardsRef.current[0] = el)} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#E6F7FD]">
                  <Image src="/images/mobile11.png" alt="Backend & API" width={24} height={24} className="object-contain" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Backend & API Integrations</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base mt-3">Scalable server architecture and seamless integrations</p>
              <p className="text-gray-700 text-sm md:text-base mt-2">Single codebase for iOS and Android with Flutter, delivering native performance and beautiful UIs.</p>

              <div className="grid md:grid-cols-2 gap-8 mt-6 px-40">
                <div>
                  <span className="inline-block text-xs px-3 py-1 rounded-full border border-[#00B9FF] text-[#00B9FF] bg-[#E6F7FD]">Technologies</span>
                  <ul className="mt-4 space-y-3 text-sm md:text-base text-gray-800">
                    <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></span><span>Node.js & Express.js</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></span><span>Laravel PHP</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></span><span>Firebase Backend</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></span><span>REST & GraphQL APIs</span></li>
                  </ul>
                </div>
                <div>
                  <span className="inline-block text-xs px-3 py-1 rounded-full border border-[#00B9FF] text-[#00B9FF] bg-[#E6F7FD]">Features</span>
                  <ul className="mt-4 space-y-3 text-sm md:text-base text-gray-800">
                    <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></span><span>Microservices Architecture</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></span><span>Real-time Data Sync</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></span><span>Third-party Integrations</span></li>
                    <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></span><span>Scalable Database Design</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-8">
            {items.map((svc, index) => (
              <div
                key={svc.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#E6F7FD]">
                    <Image src={svc.icon} alt={svc.title} width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{svc.title}</h3>
                    <p className="text-gray-500 text-sm">{svc.stack}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm md:text-base mt-4 leading-relaxed">{svc.description}</p>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {svc.chips.map((chip) => (
                    <span key={chip} className="text-xs px-3 py-1 rounded-full border border-[#00B9FF] text-[#00B9FF] bg-[#E6F7FD]">
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-2 text-sm text-gray-800">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

  // Call to Action Section Component
const CTASection = () => {
    const sectionRef = useRef(null)
    const contentDesktopRef = useRef(null)
    const contentMobileRef = useRef(null)
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        const targets = [contentDesktopRef.current, contentMobileRef.current].filter(Boolean)
        if (targets.length === 0) return

        gsap.set(targets, { opacity: 0, y: 50 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })

        tl.to(targets, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.05 })
      }, sectionRef)
      return () => ctx.revert()
    }, [])
  
      return (
      <section ref={sectionRef} className="relative w-full min-h-[500px] overflow-hidden font-sans ">
        {/* 3D Container for Desktop - wraps everything */}
        <div className="hidden lg:block transform-gpu transition-all duration-700 ease-out cursor-pointer w-full h-full" 
             style={{
               perspective: '1200px',
               transformStyle: 'preserve-3d'
             }}
             onMouseEnter={(e) => {
               const rect = e.currentTarget.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;
               const centerX = rect.width / 2;
               const centerY = rect.height / 2;
               const rotateX = (y - centerY) / 25;
               const rotateY = (centerX - x) / 25;
               e.currentTarget.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateZ(15px)`;
             }}
             onMouseMove={(e) => {
               const rect = e.currentTarget.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;
               const centerX = rect.width / 2;
               const centerY = rect.height / 2;
               const rotateX = (y - centerY) / 25;
               const rotateY = (centerX - x) / 25;
               e.currentTarget.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateZ(15px)`;
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)';
             }}>
          
          {/* Background Image - Desktop */}
          <div className="absolute inset-0">
            <Image
              src="/images/Clientstech.png"
              alt="CTA Background"
              fill
              className="object-contain w-full h-full transition-all duration-700 ease-out"
              priority
              style={{ backfaceVisibility: 'hidden' }}
            />
          </div>
  
          {/* Content - Desktop */}
          <div
            ref={contentDesktopRef}
            className="relative z-10 flex flex-col justify-center min-h-[500px] px-4"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Desktop Layout - Keep existing perfect design */}
            <div className="flex flex-col items-start text-left max-w-4xl w-full mx-auto">
              {/* "Start Your Project" button at right top */}
              <div className="flex justify-end">
                
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-4xl  font-bold text-white pt-25 leading-tight text-left ml-4 md:-ml-28 -mt-10">
              Ready to Build a Future-Ready App?
              </h2>
              <p className="text-lg md:text-xl  text-white/90 mb-12 max-w-3xl leading-relaxed text-left ml-4 md:-ml-28">
              Don't settle for generic apps. Let Webnox Digital engineer your product with performance, UX, and scale in mind.              </p>
              {/* "Get Started" button left-aligned below */}
              <div className="flex">
                <button className="bg-black hover:bg-gray-800 text-white font-semibold px-16 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl ml-95 -mt-12">
                Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Mobile Layout - No 3D animation */}
        <div className="block lg:hidden">
          {/* Blue Background - Mobile Only */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B9FF] to-[#0090CC]"></div>
  
          {/* Content - Mobile */}
          <div
            ref={contentMobileRef}
            className="relative z-10 flex flex-col justify-center min-h-[500px] px-4"
          >
            {/* Mobile Card Layout */}
            <div className="max-w-md mx-auto">
              {/* Card Container */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/30">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight text-center">
                Ready to Build a Future-Ready App?
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center">
                Don't settle for generic apps. Let Webnox Digital engineer your product with performance, UX, and scale in mind.                </p>
                
                {/* Buttons in card */}
                <div className="flex flex-col space-y-3">
                  <button className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-6 py-4  rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                  Schedule Free Consultation
                  </button>
              
                </div>
              </div>
            </div>
          </div>
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
              <button className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors shadow-sm">Shoot a Direct Mail</button>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const Scroll3DSections = ({ children }) => {
    const containerRef = useRef(null)
    const sectionsRef = useRef([])
  
    useEffect(() => {
      const mm = ScrollTrigger.matchMedia()
  
      mm.add("(min-width: 1024px)", () => {
        const ctx = gsap.context(() => {
          const sections = sectionsRef.current.filter(Boolean)
          sections.forEach((sectionEl) => {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionEl,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
              }
            })
  
            tl.fromTo(
              sectionEl,
              {
                opacity: 0,
                y: 60,
                rotationX: 8,
                z: -80,
                transformPerspective: 1000,
                transformOrigin: "50% 50%",
              },
              {
                opacity: 1,
                y: 0,
                rotationX: 0,
                z: 0,
                ease: "power2.out",
                duration: 1,
              }
            ).to(sectionEl, {
              opacity: 0,
              y: -60,
              rotationX: -6,
              z: -80,
              ease: "power2.in",
              duration: 1,
            })
          })
        }, containerRef)
  
        return () => ctx.revert()
      })
  
      return () => mm.revert()
    }, [])
  
    return (
      <div
        ref={containerRef}
        className="relative space-y-8 md:space-y-12 lg:space-y-24"
        style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      >
        {React.Children.map(children, (child, idx) => (
          <div
            ref={(el) => (sectionsRef.current[idx] = el)}
            className="will-change-transform"
          >
            {child}
          </div>
        ))}
      </div>
    )
  }
  








const MobileAppPage = () => {
  return (
    <main className="@/mobileapp">
      <Scroll3DSections>
      <HeroSection />
      <TechnologySection />
      <ServicesSuiteSection />
      <WhyCustomerExperienceMattersSection />
      <UseCasesSection />
      <CTASection />
      </Scroll3DSections>
      {/* <FAQSection /> */}
      <Footer />
    </main>
  )
}

export default MobileAppPage