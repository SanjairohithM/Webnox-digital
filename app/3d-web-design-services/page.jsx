"use client"

import React, { useRef, useEffect, useState } from "react"
import Scroll3DSections from "../sections/Components/scrollanimation";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Link from "next/link"


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
  const secondTitlePart = " Fast, High Performance Websites"

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

// Services Grid Section Component
const UseCasesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const useCases = [
    {
      icon: "/images/3d1.png",
      title: "Interactive Experiences That Increase Engagement",
      description: "An interactive 3D website gives users a reason to explore. They can rotate a product, move through a scene, interact with visual elements, or follow a story through motion. This active experience keeps users involved and helps them spend more time understanding your offer."
    },
    {
      icon: "/images/3d3.png",
      title: "Advanced 3D Product Visualization",
      description: "3D product visualization helps users understand products faster. Instead of relying only on static images, customers can view details, angles, features, materials, finishes, and variations in a more realistic way. This is useful for ecommerce, manufacturing, technology, furniture, real estate, fashion, and premium product brands that need to show product value clearly."
    },
    {
      icon: "/images/3d2.png",
      title: "Strong Brand Differentiation",
      description: "Many websites use similar layouts, stock visuals, and predictable sections. Immersive website design helps your brand create a stronger identity. It shows that your business invests in experience, quality, and innovation. This is valuable for brands that want to position themselves as premium, modern, technical, creative, or future ready."
    },
    {
      icon: "/images/3d4.png",
      title: "Real Time Interactive User Experience",
      description: "Real time rendering allows users to interact with 3D elements directly inside the browser. Users can scroll, click, rotate, zoom, move, or trigger animations based on their actions. This gives users more control over the experience and helps businesses explain products or services visually instead of depending only on long text."
    },
    {
      icon: "/images/3d6.png",
      title: "Immersive Design That Drives Conversions",
      description: "Conversion focused web design connects creativity with action. A 3D website should not distract users from the goal. It should guide them toward product understanding, service enquiry, booking, demo request, or purchase action. At Webnox Digital, we design 3D experiences with clear CTA placement, structured content flow, page speed, mobile usability, and lead generation in mind."
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
          Why Businesses Are Choosing 3D Website Design
        </h2>
        <p ref={subtitleRef} className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
          Businesses choose 3D website design to explain products clearly, increase engagement, build stronger brand impact, and turn a basic website into an interactive digital experience.
        </p>

        <div className="flex flex-wrap justify-center gap-8 p-4">
          {useCases.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-sky-300 hover:-translate-y-1 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.33rem)] xl:w-[calc(33.33%-1.33rem)] min-w-[280px]"
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

// Industry Solutions Section Component
const IndustrySolutionsSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  const solutions = [
    {
      icon: "/images/3d1.png",
      title: "Ecommerce",
      description: "3D ecommerce website design helps shoppers view product details, rotate items, compare variations, and understand size, texture, or function before buying. This improves product confidence for furniture, fashion, electronics, luxury items, and custom products."
    },
    {
      icon: "/images/3d3.png",
      title: "SaaS Platforms",
      description: "3D web design for SaaS companies helps explain dashboards, workflows, automation, and platform value through interactive product demos. It makes complex software easier to understand and supports faster user decision making."
    },
    {
      icon: "/images/3d2.png",
      title: "Real Estate",
      description: "A virtual property tour website helps real estate brands showcase spaces, layouts, amenities, and project features in an interactive way. It works well for developers, architects, interior brands, and property consultants."
    },
    {
      icon: "/images/3d4.png",
      title: "Luxury and Fashion Brands",
      description: "An immersive brand experience website helps luxury and fashion brands present product detail, exclusivity, and visual identity with stronger impact. 3D supports launches, collections, premium ecommerce, and brand storytelling."
    },
    {
      icon: "/images/3d6.png",
      title: "Creative Portfolios",
      description: "A 3D portfolio website design helps designers, studios, architects, artists, and creators present work with a memorable digital experience. It gives the portfolio a distinct identity without overpowering the actual work."
    },
    {
      icon: "/images/3d10.png",
      title: "Startups and Enterprises",
      description: "Scalable 3D website solutions help startups explain new products and help enterprises support demos, virtual showrooms, customer education, and brand innovation. We define the scope based on goals, audience, budget, and technical needs."
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
          3D Web Design Solutions Across Industries
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {solutions.map((item, index) => (
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

// Services Grid Section Component
const ThirdUseCasesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const useCases = [
    {
      icon: "/images/3d11.png",
      title: "Custom 3D UI UX Design Strategy",
      description: "Every successful 3D website starts with a clear user journey. We plan the structure, content flow, interactive sections, CTA placement, and visual hierarchy before development begins. Our 3D UI UX design process focuses on how users move through the website, what they need to understand first, and how each interaction supports the next action. This keeps the experience clear, purposeful, and conversion ready."
    },
    {
      icon: "/images/3d12.png",
      title: "Interactive 3D Web Development with WebGL and Three.js",
      description: "We use Three.js development and WebGL development to create browser based 3D experiences that work smoothly across modern devices. These technologies allow us to build interactive scenes, product models, animations, visual effects, and guided website experiences. Our development team focuses on clean code, optimized assets, stable rendering, and smooth interaction. This helps your 3D website feel advanced while staying practical for real users."
    },
    {
      icon: "/images/3d13.png",
      title: "3D Product Visualization and Configurators",
      description: "A 3D product visualization website helps users explore products in more detail. We create 3D viewers, product rotations, feature highlights, material previews, and interactive product configurators based on your business requirements. This service is useful for ecommerce brands, product companies, furniture businesses, real estate projects, industrial products, technology products, and premium consumer brands."
    },
    {
      icon: "/images/3d14.png",
      title: "Scroll Based Animations and Interactions",
      description: "Scroll based animation helps guide users through a story. As the user moves down the page, products can reveal features, scenes can change, and content can appear in a controlled sequence. We use motion design techniques to make the page feel smooth and intentional. Each animation supports content understanding and keeps the user focused on the next section."
    },
    {
      icon: "/images/3d15.png",
      title: "Performance Optimized 3D Websites",
      description: "3D websites can become slow when models, textures, scripts, and animations are not optimized. We build performance optimized 3D websites by reducing asset weight, lazy loading 3D elements, compressing models, using efficient rendering methods, and keeping core content fast. Speed matters because users will not wait for a heavy visual experience to load. Performance, stability, and interaction quality directly affect engagement and conversion."
    },
    {
      icon: "/images/3d16.png",
      title: "3D Landing Pages and Campaign Experiences",
      description: "Brands can use 3D landing pages for product launches, marketing campaigns, event promotions, investor presentations, and high impact brand experiences. These pages work well when the goal is to create attention, explain value quickly, and make the campaign memorable. We design these experiences with a strong message, focused CTA, clear sections, and measurable conversion actions."
    },
    {
      icon: "/images/3d17.png",
      title: "Virtual Showroom Development",
      description: "Virtual showroom development allows users to explore products, collections, spaces, or environments online. A virtual showroom can support ecommerce, real estate, interiors, manufacturing, luxury products, and product demonstrations. We build virtual experiences that help users move through visual spaces, interact with products, and understand offerings without visiting a physical location."
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
          Our 3D Web Design and Development Services
        </h2>
        <p ref={subtitleRef} className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
          Webnox Digital provides 3D web design and development services for businesses that need custom digital experiences, product visualization, immersive storytelling, and performance focused execution.
        </p>

        <div className="flex flex-wrap justify-center gap-8 p-4">
          {useCases.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-sky-300 hover:-translate-y-1 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.33rem)] xl:w-[calc(33.33%-1.33rem)] min-w-[280px]"
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
const CTASection = () => {
  const sectionRef = useRef(null)
  const contentDesktopRef = useRef(null)
  const contentMobileRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [contentDesktopRef.current, contentMobileRef.current].filter(Boolean)
      if (targets.length === 0) return

      // SEO: Ensure content is visible initially for crawlers
      gsap.set(targets, { opacity: 1, y: 0, visibility: 'visible' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      // Animate from visible state
      tl.fromTo(targets, 
        { opacity: 1, y: 0 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.05 })
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
          {/* Desktop Layout */}
          <div className="flex flex-col items-center text-center max-w-4xl w-full mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white pt-20 leading-tight text-center mt-6">
              Work With Experienced 3D Website Developers
            </h2>
            <div className="text-base md:text-lg text-white/95 mb-10 max-w-3xl leading-relaxed text-center space-y-4">
              <p>
                Work with experienced 3D website developers who understand design, development, performance, and conversion strategy. Webnox Digital can help you plan and build a custom 3D website development project that supports your product, brand, campaign, or digital platform.
              </p>
              <p>
                Share your idea with our team. We will help you define the right structure, interaction level, technology stack, and launch plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact-us">
                <button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer w-full sm:w-auto">
                  Book a 3D Website Consultation
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="bg-white hover:bg-gray-150 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer w-full sm:w-auto">
                  Request a Custom Proposal
                </button>
              </Link>
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
                Work With Experienced 3D Website Developers
              </h2>
              <div className="text-xs sm:text-sm text-gray-700 mb-6 leading-relaxed text-center space-y-3">
                <p>
                  Work with experienced 3D website developers who understand design, development, performance, and conversion strategy. Webnox Digital can help you plan and build a custom 3D website development project that supports your product, brand, campaign, or digital platform.
                </p>
                <p>
                  Share your idea with our team. We will help you define the right structure, interaction level, technology stack, and launch plan.
                </p>
              </div>

              {/* Buttons in card */}
              <div className="flex flex-col space-y-3">
                <Link href="/contact-us">
                  <button className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-6 py-4 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full cursor-pointer">
                    Book a 3D Website Consultation
                  </button>
                </Link>
                <Link href="/contact-us">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-6 py-4 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full cursor-pointer">
                    Request a Custom Proposal
                  </button>
                </Link>
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
    

      <SecondUseCasesSection />
      <IndustrySolutionsSection />
      <ThirdUseCasesSection />
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