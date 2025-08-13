"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
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

  const firstTitlePart = "Reimagine Digital with"
  const secondTitlePart = " 3D Web Design."

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
          src="/images/custom1.webp"
          alt="Mobile Development Background"
          fill
          className="object-contain opacity-85"
          priority={false}
        />
      </div>

      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mt-50 z-20">
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
           Innovative 3D Solutions
          </span>
        </div>

        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-4 leading-tight">
          <span className="text-[#00B9FF]">
            {firstTitlePart.split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => (titleLettersRef.current[index] = el)}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>

          <span className="text-black">
            {secondTitlePart.split("").map((char, index) => (
              <span
                key={index + firstTitlePart.length}
                ref={(el) => (titleLettersRef.current[index + firstTitlePart.length] = el)}
                className="inline-block"
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
         Craft hyper-interactive, visually stunning 3D websites that engage, convert, and stand out in a sea of 2D sameness. At Webnox Digital, we blend creative brilliance with technical mastery to transform traditional browsing into an immersive storytelling experiences.
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




// Technology Should Work for You Section Component
const TechnologyWorkSection = () => {
  const sectionRef = useRef(null)
  // const badgeRef = useRef(null)
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


      {/* No overlay - full background visibility */}

      <div className="relative w-full px-18 z-20 flex items-center py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center w-full">


          {/* right Side - Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2 lg:pl-4">


            <h2 ref={titleRef} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-semibold text-gray-900 mb-6 lg:mb-8 leading-tight lg:leading-tight">
            Introduction
            </h2>

            <p
              ref={descRef}
              className="text-gray-700 text-base md:text-lg lg:text-2xl font-sans leading-relaxed lg:leading-relaxed max-w-none lg:max-w-xl xl:max-w-2xl"
            >At Webnox Digital, we create digital realities. With over 2 years of hands-on experience building scalable web platforms, our team has evolved into a frontrunner in 3D website development. Leveraging technologies like Three.js, WebGL, and GSAP, we design experiential websites that blend motion, depth, and interaction, optimized for performance across all devices.
            </p>
          </div>


          {/* left Side - Image */}
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
                  src="/images/3dbg.webp"
                  alt="Technology Working for You"
                  className="w-full h-full object-contain transition-all duration-700 ease-out rounded-3xl"
                  loading="lazy"
                  style={{ backfaceVisibility: 'hidden' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




// Services Grid Section Component
const UseCasesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const useCases = [
    {
      icon: "/images/3d1.png",
      title: " Maximize Engagement:",
      description: "3D elements hold user attention 3x longer than static visuals",
  
    },
    {
      icon: "/images/3d2.png",
      title: " Differentiate Your Brand",
      description: "Stand out in competitive industries like fashion, real estate, luxury, and tech",
     
    },
    {
      icon: "/images/3d3.png",
      title: " Interactive Storytelling",
      description: "Engage users with immersive experiences that tell your brand's story",
     
    },
    {
      icon: "/images/3d4.png",
      title: " Higher Conversions",
      description: "Enhance emotional engagement that leads to action",
     
    },
  
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
    <section ref={sectionRef} className=" font-sans">
      <div className=" px-8">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
        Why 3D Web Development?
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mt-10">
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
           
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Grid Section Component
const SecondUseCasesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const useCases = [
    {
      icon: "/images/3d6.png",
      title: "Three.js",
      description: "Real-time 3D rendering",
  
    },
    {
      icon: "/images/3d7.png",
      title: "GSAP + ScrollTrigger",
      description: "Smooth transitions and scroll-based animation",
     
    },
    {
      icon: "/images/3d10.png",
      title: " React Three Fiber",
      description: " React-based 3D component rendering",
     
    },
    {
      icon: "/images/3d8.png",
      title: "WebGL + WebGPU",
      description: "For pixel-perfect, hardware-accelerated graphics",
     
    },
    {
      icon: "/images/3d9.png",
      title: " Blender + Cinema4D",
      description: "Custom 3D model creation and animation",
     
    },
    {
      icon: "/images/mobile3.png",
      title: " Next.js",
      description: "Blazing fast frontend frameworks for SEO-friendly delivery",
     
    },

  
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
    <section ref={sectionRef} className=" font-sans mt-20">
      <div className=" px-28 ">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
         Technologies We Use
        </h2>
        <p className="text-gray-600 text-lg mb-4 text-center">We build 3D websites using a future-ready tech stack trusted by Fortune 500 brands</p>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-10">
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
           
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



// Centered Use Cases panel matching the provided image
const ShowcaseUseCasesPanel = () => {
  const sectionRef = useRef(null)
  const panelRef = useRef(null)
  const itemsRef = useRef([])

  const useCases = [
    "3D Product Showcase Websites",
    "Real Estate Virtual Tours",
    "Gaming / Metaverse Platforms",
    "SaaS Onboarding with Interactive Models",
    "Immersive E‑Commerce Stores",
    "Portfolio Websites for Artists/Designers",
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([panelRef.current, ...itemsRef.current.filter(Boolean)], { opacity: 0, y: 30 })
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      })
      tl.to(panelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(itemsRef.current.filter(Boolean), { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }, "-=0.2")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <div className="relative w-full max-w-4xl flex items-center justify-center">
          {/* Centered background image */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
            <div className="relative w-[900px] max-w-[92vw] h-[520px]">
              <Image src="/images/3d5.webp" alt="Use Cases Background" fill className="object-contain " priority={false} />
            </div>
          </div>

       

          {/* Main gradient panel */}
          <div ref={panelRef} className="relative w-full max-w-3xl rounded-2xl p-8 sm:p-10 ">
            <h3 className="text-[#2b2b2b] text-5xl  font-bold text-center mb-6">Use Cases</h3>
            <div className=" p-4 sm:p-6">
              <ul className="">
                {useCases.map((item, idx) => (
                  <li
                    key={idx}
                    ref={(el) => (itemsRef.current[idx] = el)}
                    className="w-full grid grid-cols-[0.25fr_auto_1fr] items-center py-3 sm:py-4"
                  >
                    <span className="justify-self-end text-[#2b2b2b] text-sm sm:text-base font-semibold tabular-nums w-10 text-right">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden className="mx-4 h-[2px] w-10 sm:w-16 bg-[#2b2b2b]/30"></span>
                    <span className="justify-self-start text-[#2b2b2b] text-base sm:text-lg font-bold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



// Services Grid Section Component
const ThirdUseCasesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const useCases = [
    {
      icon: "/images/3d11.png",
      title: "3D Web Design & UI/UX Strategy",
  
    },
    {
      icon: "/images/3d12.png",
      title: "Custom 3D Modeling & Animation",
     
     
    },
    {
      icon: "/images/3d13.png",
      title: " Interactive Scroll & Parallax Animation",
     
     
    },
    {
      icon: "/images/3d14.png",
      title: "Cross-Platform Optimization (Mobile & Desktop)",
     
     
    },
    {
      icon: "/images/3d15.png",
      title: "WebAR/VR Integration (Optional Add-on)",
     
     
    },
    {
      icon: "/images/3d16.png",
      title: " Hosting & Performance Optimization",
     
     
    },
    {
      icon: "/images/3d17.png",
      title: " Ongoing Maintenance & Feature Enhancements",
     
     
    },


  
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
    <section ref={sectionRef} className=" font-sans mt-20">
      <div className=" px-28 ">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
        Our 3D Web Development Services Include
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-10">
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
           
            </div>
          ))}
        </div>
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
    <section ref={sectionRef} className="relative w-full min-h-[500px] overflow-hidden font-sans">
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
          <div className="flex flex-col items-center text-center max-w-4xl w-full mx-auto">
            {/* "Start Your Project" button at right top */}
            <div className="flex justify-end">

            </div>
            <h2 className="text-3xl md:text-4xl lg:text-4xl  font-bold text-white pt-25 leading-tight text-center mt-10">
            Let Your Brand Speak in 3D
            </h2>
            <p className="text-lg md:text-xl  text-white/90 mb-12 max-w-3xl leading-relaxed text-center">
            Want to build an unforgettable web experience that drives attention and conversions?          </p>
            {/* "Get Started" button left-aligned below */}
            <div className="flex justify-center">
              <button className="bg-black hover:bg-gray-800 text-white font-semibold px-16 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl  ">
               Get a Free 3D Demo Today              </button>
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
              Let Your Brand Speak in 3D              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center">
              Want to build an unforgettable web experience that drives attention and conversions?                </p>

              {/* Buttons in card */}
              <div className="flex flex-col space-y-3">
                <button className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-6 py-4  rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                  Get a Free 3D Demo Today
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
      question: " What industries benefit most from 3D website development?",
      answer: "Sectors like real estate, luxury products, gaming, and tech startups can drive higher engagement and sales through immersive 3D experiences."
    },
    {
      question: "Is a 3D website mobile-friendly?",
      answer: "Yes. Our 3D websites are fully optimized for mobile devices using adaptive rendering techniques and performance tuning."
    },
    {
      question: "What’s the difference between 3D and traditional websites?",
      answer: "Traditional websites are static or 2D. 3D websites provide interactive experiences with motion graphics, 3D models, and spatial navigation improving retention and brand value."
    },
    {
      question: " Will 3D websites affect SEO?",
      answer: "Not at all. We build 3D websites using SEO-friendly frameworks like Next.js and implement best practices such as SSR, structured data, and performance optimization."
    },
    {
      question: "How long does it take to build a 3D website?",
      answer: "Project timelines vary based on complexity but usually range from 4 to 10 weeks. We provide a detailed roadmap after the initial discovery phase."
    },
  ];
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2">Frequently</h2>
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-500">asked questions</span>
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
      className="relative space-y-8 md:space-y-12 "
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




const CustomWebPage = () => {
  return (
    <main className="@/customweb">
      <Scroll3DSections>
      <HeroSection />
      <TechnologyWorkSection />
      <UseCasesSection />
    

      <SecondUseCasesSection />
      <ShowcaseUseCasesPanel />
      <ThirdUseCasesSection />

      
      <CTASection />
      </Scroll3DSections>
      <FAQSection />
      <Footer />
    </main>
  )
}

export default CustomWebPage