"use client"

import React, { useRef, useEffect, useState } from "react"
import Scroll3DSections from "../sections/Components/scrollanimation";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Compass, Code, Boxes, MousePointer, Zap, Sparkles, Eye, Glasses, Map, User, Gamepad2, Sliders, Type, Layers, Cpu } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"


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
        // SEO: Ensure content is visible initially, then animate on scroll
        // Set initial visible state for crawlers
        gsap.set([...titleLettersRef.current, descRef.current, buttonRef.current], { 
          opacity: 1, 
          y: 0,
          visibility: 'visible'
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })

        // Animate title letters one by one (from current visible state)
        tl.fromTo(titleLettersRef.current, 
          { opacity: 1, y: 0 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.03 // 30ms delay between each letter
          }
        )
          .fromTo(descRef.current, 
            { opacity: 1, y: 0 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
          .fromTo(buttonRef.current, 
            { opacity: 1, y: 0 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      } else {
        // SEO: Ensure content is visible initially for mobile
        gsap.set([...titleLettersRef.current, descRef.current, buttonRef.current], { 
          opacity: 1, 
          y: 0,
          visibility: 'visible'
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })

        // Animate title letters one by one (faster on mobile) - content already visible
        tl.fromTo(titleLettersRef.current,
          { opacity: 1, y: 0 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.02 // 20ms delay between each letter
          }
        )
          .fromTo(descRef.current, 
            { opacity: 1, y: 0 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .fromTo(buttonRef.current, 
            { opacity: 1, y: 0 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      }
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const firstTitlePart = "3D Web Design Services for"
  const secondTitlePart = "Fast, High Performance Websites"

  let charCounter = 0
  const firstWordsWithCharIndexes = firstTitlePart.split(" ").map(word => {
    const chars = word.split("").map(char => {
      return { char, index: charCounter++ }
    })
    return chars
  })

  const secondWordsWithCharIndexes = secondTitlePart.split(" ").map(word => {
    const chars = word.split("").map(char => {
      return { char, index: charCounter++ }
    })
    return chars
  })

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
      }}
    >
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
            {firstWordsWithCharIndexes.map((wordChars, wIdx) => (
              <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
                {wordChars.map((item) => (
                  <span
                    key={item.index}
                    ref={(el) => (titleLettersRef.current[item.index] = el)}
                    className="inline-block"
                  >
                    {item.char}
                  </span>
                ))}
              </span>
            ))}
          </span>
          {" "}
          <span className="text-black">
            {secondWordsWithCharIndexes.map((wordChars, wIdx) => (
              <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
                {wordChars.map((item) => (
                  <span
                    key={item.index}
                    ref={(el) => (titleLettersRef.current[item.index] = el)}
                    className="inline-block"
                  >
                    {item.char}
                  </span>
                ))}
              </span>
            ))}
          </span>
        </h1>
        <div
          ref={descRef}
          className="text-center mx-auto mb-8 max-w-4xl py-4"
        >
          <p className="text-gray-900 text-xl md:text-2xl lg:text-3xl font-sans font-semibold leading-relaxed mb-4">
            Turn Your Website Into an Interactive 3D Brand Experience
          </p>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl font-sans leading-relaxed">
            Craft hyper-interactive, visually stunning 3D websites that engage, convert, and stand out in a sea of 2D sameness. At Webnox Digital, we blend creative brilliance with technical mastery to transform traditional browsing into an immersive storytelling experience.
          </p>
        </div>

        <Link href="/contact-us">
        <button
          ref={buttonRef}
          className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer"
        >
          Book a 3D Website Consultation
        </button>
        </Link>
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
        // SEO: Ensure content is visible initially for crawlers
        gsap.set(titleRef.current, { opacity: 1, x: 0, visibility: 'visible' })
        gsap.set(descRef.current, { opacity: 1, y: 0, visibility: 'visible' })
        gsap.set(imageRef.current, { opacity: 1, y: 0, visibility: 'visible' })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        })

        // Animate from visible state (subtle animation for UX, content already visible)
        tl.fromTo([imageRef.current], 
          { opacity: 1, y: 0 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .fromTo(titleRef.current, 
            { opacity: 1, x: 0 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
          .fromTo(descRef.current, 
            { opacity: 1, y: 0 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
      } else {
        // SEO: Ensure content is visible initially for mobile crawlers
        gsap.set(titleRef.current, { opacity: 1, x: 0, visibility: 'visible' })
        gsap.set(descRef.current, { opacity: 1, y: 0, visibility: 'visible' })
        gsap.set(imageRef.current, { opacity: 1, y: 0, visibility: 'visible' })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        })

        // Animate from visible state
        tl.fromTo([imageRef.current], 
          { opacity: 1, y: 0 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
          .fromTo(titleRef.current, 
            { opacity: 1, x: 0 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
          .fromTo(descRef.current, 
            { opacity: 1, y: 0 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
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
            3D Website Development Company Delivering Interactive Digital Experiences
            </h2>

            <div
              ref={descRef}
              className="text-gray-700 text-base md:text-lg lg:text-lg font-sans leading-relaxed space-y-6 max-w-none lg:max-w-xl xl:max-w-2xl text-justify lg:text-left"
            >
              <p>
                Webnox Digital works as a 3D website development company for brands that need stronger digital presentation, better product storytelling, and more engaging user journeys. We build interactive digital experiences that help users explore products, understand services, and connect with brands through movement, depth, and guided interaction.
              </p>
              <p>
                A 3D website should never exist only for visual appeal. It should support user understanding, reduce confusion, and guide visitors toward a clear action. Our approach connects creative design with technical development, so your website feels immersive without becoming slow, heavy, or difficult to use.
              </p>
              <p>
                Every project starts with the business goal. We study your product, audience, competitors, content structure, and conversion path before planning the 3D experience. This helps us create websites that are visually distinctive, technically stable, and useful for business growth.
              </p>
            </div>
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

// What Is 3D Web Design Section Component
const WhatIs3DSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        gsap.set(titleRef.current, { opacity: 1, x: 0, visibility: 'visible' })
        gsap.set(descRef.current, { opacity: 1, y: 0, visibility: 'visible' })
        gsap.set(imageRef.current, { opacity: 1, y: 0, visibility: 'visible' })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        })

        tl.fromTo(titleRef.current, 
          { opacity: 1, x: 0 }, 
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" })
          .fromTo(descRef.current, 
            { opacity: 1, y: 0 }, 
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.3")
          .fromTo(imageRef.current, 
            { opacity: 1, y: 0 }, 
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
      } else {
        gsap.set([titleRef.current, descRef.current, imageRef.current], { opacity: 1, y: 0, visibility: 'visible' })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] w-full overflow-hidden py-12 lg:py-20 bg-gray-50/50"
    >
      <div className="relative w-full px-8 lg:px-18 z-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-900 mb-6 leading-tight">
              What Is 3D Web Design?
            </h2>
            <div ref={descRef} className="text-gray-700 text-base md:text-lg font-sans leading-relaxed space-y-6 max-w-none lg:max-w-xl xl:max-w-2xl text-justify lg:text-left">
              <p>
                3D web design uses interactive visuals, motion, depth, and browser based 3D elements to create an immersive web experience. It allows users to explore products, spaces, animations, and digital environments directly on a website.
              </p>
              <p>
                A 3D website can include product rotation, scroll based animation, real time rendering, product configurators, virtual showrooms, and interactive storytelling. These elements help users understand complex products faster and stay engaged for longer.
              </p>
              <p>
                Webnox Digital builds 3D websites with clear structure, readable content, accessible navigation, and conversion focused user journeys. This keeps the experience engaging for users while supporting SEO, performance, and lead generation.
              </p>
            </div>
          </div>

          {/* Right Side - Interactive Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl perspective-1000">
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
                  src="/images/3dimagesolution.webp"
                  alt="What Is 3D Web Design"
                  className="w-full h-full object-contain transition-all duration-700 ease-out rounded-3xl shadow-xl"
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

// Services Grid Section Component (Interactive Viewport Timeline)
const UseCasesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const itemRefs = useRef([])
  const sentinelRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  const useCases = [
    {
      icon: "/images/3d1.png",
      tag: "01 / Engagement",
      title: "Interactive Experiences That Increase Engagement",
      description: "An interactive 3D website gives users a reason to explore. They can rotate a product, move through a scene, interact with visual elements, or follow a story through motion. This active experience keeps users involved and helps them spend more time understanding your offer.",
      items: [
        "Interactive rotations & zoom capabilities",
        "Engaging hover effects & scroll animations",
        "Active user involvement for better message retention"
      ]
    },
    {
      icon: "/images/3d3.png",
      tag: "02 / Visualization",
      title: "Advanced 3D Product Visualization",
      description: "3D product visualization helps users understand products faster. Instead of relying only on static images, customers can view details, angles, features, materials, finishes, and variations in a more realistic way. This is useful for ecommerce, manufacturing, technology, furniture, real estate, fashion, and premium product brands that need to show product value clearly.",
      items: [
        "Configurable materials, textures, and colorways",
        "360-degree viewport control for detailed inspection",
        "Intuitive hot-spots and feature highlight annotations"
      ]
    },
    {
      icon: "/images/3d2.png",
      tag: "03 / Branding",
      title: "Strong Brand Differentiation",
      description: "Many websites use similar layouts, stock visuals, and predictable sections. Immersive website design helps your brand create a stronger identity. It shows that your business invests in experience, quality, and innovation. This is valuable for brands that want to position themselves as premium, modern, technical, creative, or future ready.",
      items: [
        "Unique web environments built custom from scratch",
        "High-fidelity custom 3D model integration",
        "Brand identity reinforcement through creative storytelling"
      ]
    },
    {
      icon: "/images/3d4.png",
      tag: "04 / Rendering",
      title: "Real Time Interactive User Experience",
      description: "Real time rendering allows users to interact with 3D elements directly inside the browser. Users can scroll, click, rotate, zoom, move, or trigger animations based on their actions. This gives users more control over the experience and helps businesses explain products or services visually instead of depending only on long text.",
      items: [
        "Zero lag rendering using WebGL and WebGPU optimization",
        "Interactive scroll-bound motion and click triggers",
        "High-performance assets designed to prevent delays"
      ]
    },
    {
      icon: "/images/3d6.png",
      tag: "05 / Conversion",
      title: "Immersive Design That Drives Conversions",
      description: "Conversion focused web design connects creativity with action. A 3D website should not distract users from the goal. It should guide them toward product understanding, service enquiry, booking, demo request, or purchase action. At Webnox Digital, we design 3D experiences with clear CTA placement, structured content flow, page speed, mobile usability, and lead generation in mind.",
      items: [
        "Perfect blend of visual depth with accessibility",
        "Clear call-to-actions placed inside and outside of scenes",
        "Comprehensive tracking of user journeys and click-throughs"
      ]
    }
  ]

  // Set stable array refs
  const setItemRef = (el, i) => {
    itemRefs.current[i] = el
  }
  const setSentinelRef = (el, i) => {
    sentinelRefs.current[i] = el
  }

  useEffect(() => {
    if (!sentinelRefs.current.length) return

    let frame = 0
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity)
      
      const centerY = window.innerHeight / 2
      let bestIndex = 0
      let bestDist = Infinity

      sentinelRefs.current.forEach((node, i) => {
        if (!node) return
        const rect = node.getBoundingClientRect()
        const mid = rect.top + rect.height / 2
        const dist = Math.abs(mid - centerY)
        if (dist < bestDist) {
          bestDist = dist
          bestIndex = i
        }
      })

      if (bestIndex !== activeIndex) {
        setActiveIndex(bestIndex)
      }
    }

    frame = requestAnimationFrame(updateActiveByProximity)
    return () => cancelAnimationFrame(frame)
  }, [activeIndex])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 1, y: 0, visibility: 'visible' })
      const validItems = itemRefs.current.filter(Boolean)
      gsap.set(validItems, { opacity: 1, y: 0, visibility: 'visible' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      tl.fromTo(titleRef.current, 
        { opacity: 1, y: 0 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .fromTo(subtitleRef.current, 
          { opacity: 1, y: 0 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .fromTo(validItems, 
          { opacity: 1, y: 0 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.2")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="font-sans py-24 bg-white relative">
      <div className="px-8 max-w-5xl mx-auto">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight mb-4">
          Why Businesses Are Choosing 3D Website Design
        </h2>
        <p ref={subtitleRef} className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto mb-20">
          Businesses choose 3D website design to explain products clearly, increase engagement, build stronger brand impact, and turn a basic website into an interactive digital experience.
        </p>

        <div className="relative mt-16 space-y-16 md:mt-24 md:space-y-24">
          {/* Vertical Timeline center line */}
          <div className="absolute left-[24px] top-4 bottom-4 w-[2px] bg-sky-100 hidden md:block" />

          {useCases.map((entry, index) => {
            const isActive = index === activeIndex

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-12"
                ref={el => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Left Meta Column */}
                <div className="top-24 flex h-min w-full md:w-56 shrink-0 items-center gap-4 md:sticky z-10 bg-white md:bg-transparent py-2 md:py-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive ? "bg-[#00B9FF] text-white shadow-lg shadow-sky-100" : "bg-sky-50 text-sky-500"
                    }`}>
                      <Image src={entry.icon} alt={entry.title} width={28} height={28} className="object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      }`}>
                        {entry.title.split(' ').slice(0, 3).join(' ')}...
                      </span>
                      <span className="text-xs text-sky-500 font-medium">
                        {entry.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel */}
                <div
                  ref={el => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0 pointer-events-none"
                />

                {/* Content Card Column */}
                <article
                  className={
                    "flex-1 flex flex-col rounded-2xl border p-6 transition-all duration-500 " +
                    (isActive
                      ? "border-sky-300 bg-sky-50/20 shadow-xl shadow-sky-50/40"
                      : "border-gray-200 bg-white shadow-sm")
                  }
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3
                        className={
                          "text-xl font-bold leading-tight transition-colors duration-300 " +
                          (isActive ? "text-gray-900" : "text-gray-700")
                        }
                      >
                        {entry.title}
                      </h3>
                      
                      <p
                        className={
                          "text-sm leading-relaxed text-justify transition-all duration-500 " +
                          (isActive 
                            ? "text-gray-600" 
                            : "text-gray-500 line-clamp-2")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Expandable features */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-500 ease-out " +
                        (isActive 
                          ? "grid-rows-[1fr] opacity-100 mt-4" 
                          : "grid-rows-[0fr] opacity-0 pointer-events-none")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-5">
                              <ul className="space-y-3">
                                {entry.items.map((item, itemIndex) => (
                                  <li 
                                    key={itemIndex} 
                                    className="flex items-start gap-2.5 text-sm text-gray-700"
                                  >
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00B9FF] flex-shrink-0" />
                                    <span className="leading-relaxed font-medium">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="flex justify-end">
                            <Link href="/contact-us">
                              <button className="flex items-center gap-1.5 bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
                                Learn More
                                <ArrowUpRight className="h-4 w-4" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
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
      description: "Real-time 3D rendering engine for browser-based graphics."
    },
    {
      icon: "/images/3d8.png",
      title: "WebGL",
      description: "Low-level API for high-performance interactive rendering."
    },
    {
      icon: "/images/3d10.png",
      title: "React Three Fiber",
      description: "React wrapper for declarative Three.js component architecture."
    },
    {
      icon: "/images/3d7.png",
      title: "GSAP Animation",
      description: "Industry standard animation platform for seamless scroll interactions."
    },
    {
      icon: "/images/3d9.png",
      title: "WebGPU Ready Architecture",
      description: "Future-proof design supporting next-generation GPU capabilities."
    },
    {
      icon: "/images/mobile3.png",
      title: "Modern Frontend Frameworks",
      description: "Highly performant web frameworks optimized for SEO, speed, and responsiveness."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SEO: Ensure content is visible initially for crawlers
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 1, y: 0, visibility: 'visible' })
      const validCards = cardsRef.current.filter(Boolean)
      gsap.set(validCards, { opacity: 1, y: 0, visibility: 'visible' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      // Animate from visible state (subtle animation)
      tl.fromTo(titleRef.current, 
        { opacity: 1, y: 0 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .fromTo(subtitleRef.current, 
          { opacity: 1, y: 0 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .fromTo(validCards, 
          { opacity: 1, y: 0 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.2")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="font-sans py-16 bg-white">
      <div className="px-8 max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight mb-4">
          Technologies Behind Our 3D Websites
        </h2>
        <p ref={subtitleRef} className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
          We select the technology stack based on the project goal, performance needs, interaction level, and long term scalability. The right stack helps the website stay fast, stable, and flexible.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {useCases.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-sky-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-sky-50">
                <Image src={item.icon} alt={item.title} width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Industry Solutions Section Component (Parallax Scroll Effect)
const IndustrySolutionsSection = () => {
  const sectionRef = useRef(null)

  const solutions = [
    {
      icon: "/images/3d1.png",
      title: "Ecommerce",
      thumbnail: "/images/brand5-1.webp",
      description: "3D ecommerce website design helps shoppers view product details, rotate items, compare variations, and understand size, texture, or function before buying. This improves product confidence for furniture, fashion, electronics, luxury items, and custom products."
    },
    {
      icon: "/images/3d3.png",
      title: "SaaS Platforms",
      thumbnail: "/images/3dbg.webp",
      description: "3D web design for SaaS companies helps explain dashboards, workflows, automation, and platform value through interactive product demos. It makes complex software easier to understand and supports faster user decision making."
    },
    {
      icon: "/images/3d2.png",
      title: "Real Estate",
      thumbnail: "/images/brand5-3.webp",
      description: "A virtual property tour website helps real estate brands showcase spaces, layouts, amenities, and project features in an interactive way. It works well for developers, architects, interior brands, and property consultants."
    },
    {
      icon: "/images/3d4.png",
      title: "Luxury and Fashion Brands",
      thumbnail: "/images/aboutimg1.webp",
      description: "An immersive brand experience website helps luxury and fashion brands present product detail, exclusivity, and visual identity with stronger impact. 3D supports launches, collections, premium ecommerce, and brand storytelling."
    },
    {
      icon: "/images/3d6.png",
      title: "Creative Portfolios",
      thumbnail: "/images/brand3-1.webp",
      description: "A 3D portfolio website design helps designers, studios, architects, artists, and creators present work with a memorable digital experience. It gives the portfolio a distinct identity without overpowering the actual work."
    },
    {
      icon: "/images/3d10.png",
      title: "Startups and Enterprises",
      thumbnail: "/images/brand3-2.webp",
      description: "Scalable 3D website solutions help startups explain new products and help enterprises support demos, virtual showrooms, customer education, and brand innovation. We define the scope based on goals, audience, budget, and technical needs."
    }
  ]

  const firstRow = [solutions[0], solutions[1], solutions[2], solutions[0], solutions[1], solutions[2]]
  const secondRow = [solutions[3], solutions[4], solutions[5], solutions[3], solutions[4], solutions[5]]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-200, 600]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -600]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.6, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-200, 0]),
    springConfig
  )

  return (
    <section 
      ref={sectionRef} 
      className="min-h-[135vh] py-20 bg-gray-50/20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] border-y border-gray-150"
    >
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-8 w-full mb-12 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
          3D Web Design Solutions Across Industries
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          We build tailored, interactive 3D solutions for leading companies across diverse industries, helping them engage customers and elevate their brand.
        </p>
      </div>

      {/* Parallax Container */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
        className="w-full flex flex-col gap-10 md:gap-14 mt-4"
      >
        {/* Row 1 */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-12 mb-4">
          {firstRow.map((item, index) => (
            <motion.div
              style={{ x: translateX }}
              whileHover={{ y: -10 }}
              key={`ind-row1-${index}`}
              className="group/product h-[260px] md:h-[320px] w-[260px] md:w-[380px] relative flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white cursor-pointer transform-gpu [backface-visibility:hidden] [transform-style:preserve-3d]"
            >
              <div className="block w-full h-full relative">
                <Image
                  src={item.thumbnail}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/product:scale-105 transform-gpu [backface-visibility:hidden]"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-65 group-hover/product:opacity-85 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-md">
                      <img src={item.icon} alt={item.title} className="w-4 h-4 object-contain filter invert brightness-200" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-sky-100/90 leading-relaxed text-justify line-clamp-4 transform-gpu [backface-visibility:hidden]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div className="flex flex-row space-x-8 md:space-x-12">
          {secondRow.map((item, index) => (
            <motion.div
              style={{ x: translateXReverse }}
              whileHover={{ y: -10 }}
              key={`ind-row2-${index}`}
              className="group/product h-[260px] md:h-[320px] w-[260px] md:w-[380px] relative flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white cursor-pointer transform-gpu [backface-visibility:hidden] [transform-style:preserve-3d]"
            >
              <div className="block w-full h-full relative">
                <Image
                  src={item.thumbnail}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/product:scale-105 transform-gpu [backface-visibility:hidden]"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-65 group-hover/product:opacity-85 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-md">
                      <img src={item.icon} alt={item.title} className="w-4 h-4 object-contain filter invert brightness-200" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-sky-100/90 leading-relaxed text-justify line-clamp-4 transform-gpu [backface-visibility:hidden]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

// Services Grid Section Component (HeroParallax Aceternity UI Effect)
// Sleek interactive 3D card for service showcase
const ServiceCard = ({ title, description, icon: IconName }) => {
  const cardRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    // Spotlight position
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })

    // Parallax tilt (normalized -1 to 1)
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    setCoords({
      x: (mouseX - centerX) / centerX,
      y: (mouseY - centerY) / centerY
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCoords({ x: 0, y: 0 })
  }

  const rotationStyle = isHovered
    ? `perspective(1000px) rotateX(${coords.y * -6}deg) rotateY(${coords.x * 6}deg) scale3d(1.02, 1.02, 1.02)`
    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'

  const activeIconMap = {
    Compass,
    Code,
    Boxes,
    MousePointer,
    Zap,
    Sparkles,
    Eye,
    Glasses,
    Map,
    User,
    Gamepad2,
    Sliders,
    Type,
    Layers,
    Cpu
  }

  const IconComponent = activeIconMap[IconName] || Code

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="bg-white border border-gray-200/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-sky-100/40 hover:border-sky-300 flex flex-col h-full min-h-[190px] relative overflow-hidden group cursor-pointer [transform-style:preserve-3d]"
      style={{
        transform: rotationStyle,
      }}
    >
      {/* Spotlight glow overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 185, 255, 0.08), transparent)`
        }}
      />
      
      {/* Inner layout with 3D translation layers */}
      <div className="relative z-10 flex flex-col h-full [transform-style:preserve-3d]">
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-50 text-[#00B9FF] mb-4 group-hover:bg-[#00B9FF] group-hover:text-white transition-all duration-300 ease-out flex-shrink-0"
          style={{
            transform: isHovered ? `translate3d(${coords.x * 6}px, ${coords.y * 6}px, 15px)` : 'translate3d(0, 0, 0)'
          }}
        >
          <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
        </div>
        
        <h3 
          className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-sky-500 transition-colors duration-300"
          style={{
            transform: isHovered ? `translate3d(${coords.x * 4}px, ${coords.y * 4}px, 8px)` : 'translate3d(0, 0, 0)'
          }}
        >
          {title}
        </h3>
        
        <p 
          className="text-gray-600 text-sm leading-relaxed text-justify mb-0"
          style={{
            transform: isHovered ? `translate3d(${coords.x * 2}px, ${coords.y * 2}px, 4px)` : 'translate3d(0, 0, 0)'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

// Services Grid Section Component
const ThirdUseCasesSection = () => {
  const sectionRef = useRef(null)

  const services = [
    {
      title: "Custom 3D UI UX Design Strategy",
      icon: "Compass",
      description: "We plan user journeys, interaction points, content flow, and visual storytelling before development starts."
    },
    {
      title: "Interactive 3D Web Development",
      icon: "Code",
      description: "Building immersive, browser-based 3D experiences using Three.js and WebGL."
    },
    {
      title: "3D Product Visualization",
      icon: "Boxes",
      description: "Creating highly detailed 3D viewers, configurations, material previews, and rotation tools."
    },
    {
      title: "Scroll Based Animations",
      icon: "MousePointer",
      description: "Guiding users through your product story with smooth scroll-bound animations."
    },
    {
      title: "Performance Optimized 3D Websites",
      icon: "Zap",
      description: "Compressing assets, lazy loading, and optimization to ensure fast browser speeds."
    },
    {
      title: "3D Landing Pages & Campaigns",
      icon: "Sparkles",
      description: "Creating memorable, high-impact landing pages for product launches and campaigns."
    },
    {
      title: "Virtual Showroom Development",
      icon: "Eye",
      description: "Building immersive digital showrooms and tours for ecommerce and real estate."
    },
    {
      title: "WebXR & WebVR Integration",
      icon: "Glasses",
      description: "Immersive VR and AR headset experiences accessible directly inside the browser."
    },
    {
      title: "Interactive 3D Map Customization",
      icon: "Map",
      description: "Interactive geographical mappings and spatial layouts for properties."
    },
    {
      title: "Custom 3D Character Design",
      icon: "User",
      description: "Tailored 3D characters, controllers, and key-frame animations built for the web."
    },
    {
      title: "3D Interactive Games & Portals",
      icon: "Gamepad2",
      description: "Developing custom gamified layouts to boost engagement and brand recall."
    },
    {
      title: "Real-time Product Configurators",
      icon: "Sliders",
      description: "Allowing users to customize colorways, configurations, and sizing in real-time."
    },
    {
      title: "Dynamic 3D Typography",
      icon: "Type",
      description: "Spatial lettering, mouse-interactive fonts, and creative heading layouts."
    },
    {
      title: "Custom Shader & Canvas Effects",
      icon: "Layers",
      description: "High-end visual shaders, complex particle systems, and interactive canvases."
    },
    {
      title: "3D CAD Model Optimization",
      icon: "Cpu",
      description: "Converting and optimizing raw CAD formats into lightweight web-ready assets."
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      className="py-20 lg:py-24 bg-gray-50/40 overflow-hidden font-sans border-y border-gray-150"
    >
      <div className="scroll-3d-wrapper max-w-7xl mx-auto px-6 md:px-8 w-full">
        
        {/* Header Container */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-xs text-sky-500 font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>15 Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
            Our 3D Web Design & Development Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We provide interactive web solutions and 3D experiences that connect digital design with technical performance. Explore our specialized services below.
          </p>
        </div>

        {/* Bento-style Minimalist Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <ServiceCard 
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

// 3D Inner Layer Parallax Card Component for SEO Friendly Section
const ParallaxCard = ({ icon, title, description }) => {
  const cardRef = useRef(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    // Normalize coordinates between -1 and 1
    const normX = (mouseX - centerX) / centerX
    const normY = (mouseY - centerY) / centerY
    
    setCoords({ x: normX, y: normY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCoords({ x: 0, y: 0 })
  }

  const rotationStyle = isHovered
    ? `perspective(1000px) rotateX(${coords.y * -8}deg) rotateY(${coords.x * 8}deg) scale3d(1.02, 1.02, 1.02)`
    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'

  const shadowStyle = isHovered
    ? `${coords.x * -10}px ${coords.y * -10}px 25px rgba(0, 185, 255, 0.08), 0 10px 20px rgba(0, 0, 0, 0.03)`
    : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="bg-white border border-gray-150 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ease-out cursor-pointer [transform-style:preserve-3d]"
      style={{
        transform: rotationStyle,
        boxShadow: shadowStyle
      }}
    >
      {/* Icon Wrapper (Translates most) */}
      <div 
        className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-sky-50 transition-transform duration-200 ease-out flex-shrink-0"
        style={{
          transform: `translate3d(${coords.x * 12}px, ${coords.y * 12}px, 20px)`,
        }}
      >
        <Image src={icon} alt={title} width={42} height={42} className="object-contain" />
      </div>

      {/* Heading (Translates moderately) */}
      <h3 
        className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight transition-transform duration-200 ease-out group-hover:text-[#00B9FF]"
        style={{
          transform: `translate3d(${coords.x * 6}px, ${coords.y * 6}px, 10px)`,
        }}
      >
        {title}
      </h3>

      {/* Description (Translates slightly) */}
      <p 
        className="text-gray-600 text-sm leading-relaxed text-justify transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${coords.x * 3}px, ${coords.y * 3}px, 5px)`,
        }}
      >
        {description}
      </p>
    </div>
  )
}

// SEO Friendly Section Component
const SeoFriendlySection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  const items = [
    {
      icon: "/images/3d7.png",
      title: "Crawlable HTML Content",
      description: "We keep important headings, paragraphs, FAQs, CTAs, and internal links as crawlable HTML content. This helps search engines read the page even when the website includes interactive 3D elements. A 3D scene should enhance the page. It should not hide the main message from Google or users."
    },
    {
      icon: "/images/3d8.png",
      title: "Optimized 3D Assets",
      description: "We optimize models, textures, scripts, and animation logic so the website can load efficiently. A performance optimized website gives users a smoother experience and reduces the risk of drop offs caused by heavy assets."
    },
    {
      icon: "/images/3d9.png",
      title: "Lazy Loading for 3D Models",
      description: "We use lazy loading when needed so critical page content loads first. Heavy 3D models and animations can load after the main content, which improves perceived speed and user access."
    },
    {
      icon: "/images/mobile3.png",
      title: "Mobile First Performance",
      description: "A mobile friendly 3D website needs simplified interaction, responsive layouts, optimized scenes, and device aware performance handling. We test 3D sections across screen sizes so the experience remains usable on mobile, tablet, and desktop."
    },
    {
      icon: "/images/3d13.png",
      title: "Accessible Forms and CTAs",
      description: "Lead generation should not depend on users completing a complex interaction. We place forms, CTA buttons, navigation, and key actions outside the 3D scene where users can access them easily. This keeps the website practical for enquiries, demo bookings, proposal requests, and sales conversations."
    },
    {
      icon: "/images/3d16.png",
      title: "Static Fallbacks",
      description: "We use static fallback visuals where needed to support performance, accessibility, and search engine understanding. This gives users a stable experience even if their device or browser cannot load the full 3D interaction."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 1, y: 0, visibility: 'visible' })
      const validCards = cardsRef.current.filter(Boolean)
      gsap.set(validCards, { opacity: 1, y: 0, visibility: 'visible' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      tl.fromTo(titleRef.current, 
        { opacity: 1, y: 0 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .fromTo(validCards, 
          { opacity: 1, y: 0 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.2")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="font-sans py-16 bg-white">
      <div className="px-8 max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight mb-16">
          How We Build SEO Friendly 3D Websites
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {items.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="h-full"
            >
              <ParallaxCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Design Process Section Component
const DesignProcessSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  const steps = [
    {
      step: "01",
      title: "Discovery and Business Goal Mapping",
      description: "We start by understanding your business model, audience, product, competitors, conversion goals, and technical requirements. This helps us define what the 3D experience should achieve before design begins."
    },
    {
      step: "02",
      title: "Visual Mind Mapping and Experience Planning",
      description: "We plan the user journey, interaction points, content flow, and visual storytelling. This stage helps the team align on the experience before moving into detailed design."
    },
    {
      step: "03",
      title: "3D UI UX Wireframing",
      description: "We create wireframes that show how content, visuals, 3D elements, and CTAs will work together. This keeps the page clear and prevents the 3D experience from becoming distracting."
    },
    {
      step: "04",
      title: "Prototype and Interactive Demo",
      description: "We create prototypes or interactive demos to validate movement, flow, and user interaction. This helps you understand how the experience will feel before full development."
    },
    {
      step: "05",
      title: "Three.js and WebGL Development",
      description: "Our developers build the approved experience using the right frontend and 3D technologies. We focus on clean code, stable rendering, responsive layouts, and smooth browser performance."
    },
    {
      step: "06",
      title: "Performance Testing",
      description: "We test speed, interaction quality, mobile usability, browser compatibility, and Core Web Vitals related issues. This helps us refine the experience before launch."
    },
    {
      step: "07",
      title: "Launch and Optimization",
      description: "After launch, we monitor performance, user behavior, technical stability, and conversion actions. We improve the experience based on data, feedback, and business needs."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 1, y: 0, visibility: 'visible' })
      const validCards = cardsRef.current.filter(Boolean)
      gsap.set(validCards, { opacity: 1, y: 0, visibility: 'visible' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      tl.fromTo(titleRef.current, 
        { opacity: 1, y: 0 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .fromTo(validCards, 
          { opacity: 1, y: 0 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.2")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="font-sans py-16 bg-gray-50/30">
      <div className="px-8 max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight mb-16">
          Our 3D Web Design Process
        </h2>

        <div className="flex flex-wrap justify-center gap-8 p-4">
          {steps.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-sky-300 hover:-translate-y-2 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.33rem)] xl:w-[calc(33.33%-1.33rem)] min-w-[280px] relative overflow-hidden group"
            >
              {/* Step number watermark */}
              <div className="absolute right-4 top-4 text-6xl font-extrabold text-sky-100 group-hover:text-sky-200 transition-colors duration-300 pointer-events-none select-none font-sans">
                {item.step}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 pr-12 leading-tight group-hover:text-[#00B9FF] transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify mt-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section Component
const WhyChooseUsSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef([])

  const benefits = [
    "3D Design with Business Strategy",
    "SEO Friendly 3D Website Execution",
    "Clean Code and Transparent Delivery"
  ]

  const stats = [
    { value: "1450+", label: "Websites Designed & Delivered" },
    { value: "14+", label: "Years of Digital Experience" },
    { value: "1200+", label: "Trusted by Global Clients" },
    { value: "40+", label: "Expert Team Members" },
    { value: "40+", label: "Countries Projects Delivered Across" }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, contentRef.current], { opacity: 1, y: 0, visibility: 'visible' })
      const validStats = statsRef.current.filter(Boolean)
      gsap.set(validStats, { opacity: 1, scale: 1, visibility: 'visible' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      tl.fromTo(titleRef.current, 
        { opacity: 1, y: 0 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .fromTo(contentRef.current, 
          { opacity: 1, y: 0 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .fromTo(validStats, 
          { opacity: 1, scale: 1 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" }, "-=0.3")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="font-sans py-20 bg-white overflow-hidden">
      <div className="px-8 max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight mb-16">
          Why Choose Our 3D Web Design Agency
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Benefits */}
          <div ref={contentRef} className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Connecting Strategy with Creative Technology</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We don't just build beautiful 3D websites. We design interactive experiences aligned with your business objectives, optimized for SEO, and built with clean, transparent code.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-sky-50/50 p-4 rounded-xl border border-sky-100">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#00B9FF] text-white">
                    ✓
                  </div>
                  <span className="text-gray-800 font-semibold text-base md:text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                ref={el => (statsRef.current[idx] = el)}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-sky-300 text-center flex flex-col justify-center items-center h-full min-h-[140px]"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#00B9FF] mb-2 font-sans tabular-nums">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Call to Action Section Component
// Call to Action Section Component (Interactive Constellation Canvas Background)
const CTASection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const particles = []
    const particleCount = 75
    const connectionDistance = 110
    let mouse = { x: null, y: null }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
      })
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener("resize", handleResize)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height)
      bgGrad.addColorStop(0, "#080b18") // very deep navy space
      bgGrad.addColorStop(1, "#030408") // near black space
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // Draw connecting lines and particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        
        // Move particle
        p1.x += p1.vx
        p1.y += p1.vy

        // Bounce off walls
        if (p1.x < 0 || p1.x > width) p1.vx *= -1
        if (p1.y < 0 || p1.y > height) p1.vy *= -1

        // Mouse interaction (gentle attraction)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p1.x
          const dy = mouse.y - p1.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            p1.x += dx * 0.006
            p1.y += dy * 0.006
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 185, 255, 0.65)" // glow sky-blue
        ctx.fill()

        // Connect particles close to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            const alpha = (1 - dist / connectionDistance) * 0.22
            ctx.strokeStyle = `rgba(0, 185, 255, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Connect particles to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x
          const dy = p1.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 160) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(mouse.x, mouse.y)
            const alpha = (1 - dist / 160) * 0.32
            ctx.strokeStyle = `rgba(0, 230, 255, ${alpha})`
            ctx.lineWidth = 0.9
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!contentRef.current) return
      gsap.set(contentRef.current, { opacity: 1, y: 0, visibility: 'visible' })

      gsap.fromTo(contentRef.current, 
        { opacity: 1, y: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full min-h-[500px] overflow-hidden font-sans bg-[#030408] flex items-center justify-center py-20 md:py-28">
      {/* Interactive Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Content Overlay */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Work With Experienced 3D Website Developers
        </h2>
        <div className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl leading-relaxed space-y-4">
          <p>
            Work with experienced 3D website developers who understand design, development, performance, and conversion strategy. Webnox Digital can help you plan and build a custom 3D website development project that supports your product, brand, campaign, or digital platform.
          </p>
          <p>
            Share your idea with our team. We will help you define the right structure, interaction level, technology stack, and launch plan.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Link href="/contact-us" className="w-full sm:w-auto">
            <button className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 cursor-pointer w-full sm:w-auto">
              Book a 3D Website Consultation
            </button>
          </Link>
          <Link href="/contact-us" className="w-full sm:w-auto">
            <button className="border border-white/30 hover:border-white text-white hover:bg-white hover:text-[#030408] font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg cursor-pointer w-full sm:w-auto">
              Request a Custom Proposal
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

const FAQSection = () => {
  const faqs = [
    {
      question: "What are 3D web design services?",
      answer: "3D web design services include the planning, design, and development of websites that use interactive 3D visuals, motion, product models, virtual scenes, and browser based 3D experiences. These services help businesses create more engaging websites for products, campaigns, portfolios, showrooms, and brand experiences."
    },
    {
      question: "Are 3D websites SEO friendly?",
      answer: "A 3D website can be SEO friendly when the main content, headings, CTAs, FAQs, and internal links are available as crawlable HTML content. The 3D scene should support the page, not hide the message inside a canvas. Webnox Digital builds 3D websites with search visibility, performance, and user experience in mind."
    },
    {
      question: "Will a 3D website slow down my website?",
      answer: "A 3D website can become slow if assets are not optimized. We build performance optimized 3D websites by compressing models, reducing texture weight, lazy loading heavy elements, using static fallbacks where needed, and testing speed across devices."
    },
    {
      question: "What technologies are used to build 3D websites?",
      answer: "Common technologies include Three.js, WebGL, React Three Fiber, GSAP animation, modern frontend frameworks, and browser based rendering methods. The final stack depends on the interaction level, performance goal, and project scope."
    },
    {
      question: "Is Three.js good for business websites?",
      answer: "Three.js development works well for business websites that need product visualization, interactive storytelling, 3D landing pages, virtual showrooms, and immersive brand experiences. It gives developers strong control over browser based 3D visuals."
    },
    {
      question: "Can ecommerce websites use 3D product visualization?",
      answer: "Yes. Ecommerce websites can use 3D product visualization to help users explore products more clearly. Customers can view angles, features, finishes, and configurations before buying or submitting an enquiry. This can improve product confidence and engagement."
    },
    {
      question: "How long does it take to build a 3D website?",
      answer: "A basic 3D website section may take a few weeks, while a custom 3D website development project with product models, interactions, animations, and performance testing can take longer. The timeline depends on design complexity, number of 3D assets, content volume, and technical requirements."
    },
    {
      question: "How much does a 3D website cost?",
      answer: "The cost depends on the scope, number of pages, level of interaction, 3D model requirements, animation complexity, technology stack, and post launch support. A custom 3D website development project requires proper discovery before pricing because every experience has different technical needs."
    },
    {
      question: "Can a 3D website work on mobile devices?",
      answer: "Yes. A mobile friendly 3D website can work well when the experience uses optimized assets, responsive layouts, simple touch interactions, and device aware performance handling. Some complex desktop interactions may need simplified mobile versions."
    },
    {
      question: "Why choose Webnox Digital for 3D website development?",
      answer: "Webnox Digital brings 14+ years of digital experience, 1450+ website design and development projects, 1200+ empowered clients, and a 40+ member expert team. As a 3D web design agency, we build interactive websites that support engagement, product clarity, performance, and business growth."
    }
  ];
  const [openIdx, setOpenIdx] = React.useState(0);

  // FAQ Structured Data (JSON-LD) for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question.trim(),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
      {/* FAQ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
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

const CustomWebPage = () => {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "3D Web Design Services",
    "provider": {
      "@type": "Organization",
      "name": "Webnox Digital",
      "url": "https://www.webnoxdigital.com",
      "logo": "https://www.webnoxdigital.com/logo/normallogo.png",
      "sameAs": [
        "https://www.instagram.com/webnox_digital_official/",
        "https://www.linkedin.com/company/webnox-digital/"
      ]
    },
    "areaServed": ["US", "UK", "Worldwide"],
    "description": "Professional 3D web design services for businesses across the US & UK. From immersive visuals to interactive experiences, we deliver high-performance, visually stunning websites.",
    "offers": {
      "@type": "Offer",
      "description": "3D Web Design and Development Services"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webnox Digital",
    "url": "https://www.webnoxdigital.com",
    "logo": "https://www.webnoxdigital.com/logo/normallogo.png",
    "description": "Leading software development company offering 3D website development, AI software solutions, mobile app development, and digital marketing services.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-97865-57739",
      "contactType": "Customer Service",
      "email": "info@webnoxdigital.com"
    },
    "sameAs": [
      "https://www.instagram.com/webnox_digital_official/",
      "https://www.linkedin.com/company/webnox-digital/"
    ]
  }

  return (
    <main className="@/customweb">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      
      <Scroll3DSections>
      <HeroSection />
      <TechnologyWorkSection />
      <WhatIs3DSection />
      <UseCasesSection />
      <ThirdUseCasesSection />
      <SecondUseCasesSection />
      <IndustrySolutionsSection />
      <SeoFriendlySection />
      <DesignProcessSection />
      <WhyChooseUsSection />
      
      <CTASection />
      </Scroll3DSections>
      <FAQSection />
    </main>
  )
}

export default CustomWebPage