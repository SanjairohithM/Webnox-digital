"use client"

import React, { useRef, useEffect, useState } from "react
import Scroll3DSections from "../sections/Components/scrollanimation";
"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Link from "next/link";

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
          src="/images/custom1.webp"
          alt="Mobile Development Background"
          fill
          className="object-contain opacity-85"
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
            Custom Web Development
          </span>
        </div>

        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-4 leading-tight">
          <span className="text-[#00B9FF]">
            {"Your Website Is the First Impression. Make  ".split("").map((char, index) => (
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

          <span className="text-black">
            {" It Unforgettable.".split("").map((char, index) => (
              <span
                key={index + "Your Website Is the First Impression. Make It ".length}
                ref={(el) => (titleLettersRef.current[index + "Your Website Is the First Impression. Make It ".length] = el)}
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
          At WEBNOX DIGITAL, we build custom websites from scratch—designed for your business, your audience, and your goals.
        </p>
        {/* Highlighted statement */}
        <div className="mx-auto mb-6 max-w-3xl">
          <div className="bg-[#E6F7FD] text-[#00B9FF] text-sm md:text-base rounded-xl px-4 py-3 font-medium">
            At WEBNOX DIGITAL, we build custom websites from scratch—designed for your business, your audience, and your goals.
          </div>
        </div>
          <Link href="/contact-us">
        <button
          ref={buttonRef}
          className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer"
        >
          Start Your Project
        </button>
        </Link>
      </div>
    </section>
  )
}

const WhyCustomerExperienceMattersSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const badgeRef = useRef(null)
  const statsRef = useRef([])
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })
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
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
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

  const features = [
    { icon: "/images/brand4-3.webp", label: "Your business objectives" },
    { icon: "/images/ecommerce5.png", label: "Your industry standards" },
    { icon: "/images/custom2.png", label: "Your audience's needs" },
    { icon: "/images/consult4.png", label: "Your long-term growth strategy" },
  ]

  return (<>
    <div>        {/* Badge */}
      <div ref={badgeRef} className="text-center mt-26">
        <div className="flex justify-center mb-4">
          <div className="px-3 py-1 bg-[#E6F7FD] rounded-full border border-[#00B9FF] inline-flex items-center gap-2">
            <Image src="/images/customer1.png" alt="Badge" width={16} height={16} className="w-4 h-4 object-contain" />
            <span className="text-[#00B9FF] text-xs md:text-sm font-medium">What sets Webnox Apart?</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-4 font-sans leading-tight mt-10">
        Why WEBNOX DIGITAL Is the Right<br />Development Partner
      </h2>

      {/* Subtitle */}
      <p ref={subtitleRef} className="text-black/90 text-center mb-16 max-w-3xl mx-auto text-lg font-sans">
        At WEBNOX DIGITAL, we bring over 15 years of hands-on experience building custom websites that are built to perform.
      </p>
    </div>
    <div
      ref={sectionRef}
      className="relative py-16 lg:py-24 px-4 overflow-hidden"
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

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((f, index) => (
            <div key={index} ref={(el) => (statsRef.current[index] = el)} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/90 rounded-2xl flex items-center justify-center shadow-sm">
                <Image src={f.icon} alt={f.label} width={36} height={36} className="object-contain" />
              </div>
              <p className="text-white/95 text-base md:text-lg font-medium">{f.label}</p>
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
    </div>
  </>)
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

          {/* left Side - Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 lg:pl-4">

            <h2 ref={titleRef} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-semibold text-gray-900 mb-6 lg:mb-8 leading-tight lg:leading-tight">
              Our Methodical & Results-Driven Approach
            </h2>

            <p
              ref={descRef}
              className="text-gray-700 text-base md:text-lg lg:text-xl font-sans leading-relaxed lg:leading-relaxed max-w-none lg:max-w-xl xl:max-w-2xl"
            >Because your business deserves a website as unique and powerful as your vision.<span className="text-[#00B9FF]">We listen, plan, design, develop, test, and launch—without relying on templates, shortcuts, or generic solutions.</span>
            </p>
          </div>

          {/* Right Side - Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-start order-1 lg:order-2">
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
                  src="/images/custom3.webp"
                  alt="Technology Working for You"
                  className="w-full h-full object-contain transition-all duration-700 ease-out"
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
      icon: "/images/custom4.png",
      title: "Responsive Business Websites",
      description: "Conversion‑focused, SEO‑ready websites built with modern stacks.",
      chips: ["Next.js", "SEO‑ready", "Pixel‑perfect"]
    },
    {
      icon: "/images/custom5.png",
      title: "Custom eCommerce Development",
      description: "From catalog to checkout, tailored shopping experiences that scale.",
      chips: ["Inventory", "Secure Payments", "Cart & Checkout"]
    },
    {
      icon: "/images/custom6.png",
      title: "Web Portals & Dashboards",
      description: "Data‑driven dashboards and role‑based portals for teams and clients.",
      chips: ["RBAC", "Charts & Reports", "Workflows"]
    },
    {
      icon: "/images/custom7.png",
      title: "WordPress & Laravel Development",
      description: "Robust CMS and backend development for content and apps.",
      chips: ["Theme Dev", "Performance", "Plugins"]
    },
    {
      icon: "/images/custom8.png",
      title: "API Integrations & Automation",
      description: "Connect CRMs, ERPs, and 3rd‑party services. Automate with n8n/Zapier.",
      chips: ["CRM/ERP", "Webhooks", "n8n/Zapier"]
    },
    {
      icon: "/images/custom9.png",
      title: "Speed Optimization + Core Web Vitals",
      description: "Hit Lighthouse 90+ with advanced performance tuning.",
      chips: ["LCP/CLS", "Lazy Loading", "Caching"]
    },
    {
      icon: "/images/custom6.png",
      title: "Admin-friendly CMS and backend",
      description: "Built for ease of use, with intuitive admin panels and powerful backend systems.",
      chips: ["Admin Panel", "Backend", "CMS"]
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
      <div className="max-w-7xl mx-auto px-4">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
          Custom Web Development Services
          <br />
          from WEBNOX DIGITAL
        </h2>
        <p ref={subtitleRef} className="text-gray-600 text-sm md:text-base lg:text-lg text-center max-w-3xl mx-auto mt-3 mb-10">
          We specialize in building smart, scalable, and secure websites using modern technologies.
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
              <div className="flex flex-col gap-2">
                {item.chips.map((chip, i) => (
                  <span key={i} className="inline-block w-max text-xs px-3 py-1 rounded-full border border-[#00B9FF] text-[#00B9FF] bg-[#E6F7FD]">
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

 const industries = [
   {
     step: "01",
     title: "Understand Your Business",
     desc: "We take time to learn your brand, audience, and goals.",
    
     img: "/images/custom12.webp"
   },
   {
     step: "02",
     title: "Design + Build Your Custom Website",
     desc: "From eCommerce features to portals, dashboards, and integrations—everything built just for you.",
     img: "/images/custom11.webp"
   },
   {
    step: "03",
    title: "Launch & Optimize",
    desc: "We launch your website, set up analytics, and fine-tune for maximum impact.",
    img: "/images/custom10.webp"
  }
 ]

const IndustriesSection = () => {
  const industryRefs = useRef([])

  useGSAP(() => {
    // Check if we're on desktop (lg breakpoint and above)
    const isDesktop = window.innerWidth >= 1024
    
    if (isDesktop) {
      // Complex animations for desktop
      industryRefs.current.forEach((ref, i) => {
        if (!ref) return
        gsap.fromTo(ref,
          {
            opacity: 0,
            x: i % 2 === 0 ? 120 : -120
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.4,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        )
      })
    } else {
      // Individual scroll-triggered fade animations for mobile
      const validRefs = industryRefs.current.filter(Boolean)
      
      gsap.set(validRefs, { opacity: 0 })
      
      // Animate each card individually when it comes into view
      validRefs.forEach((ref, index) => {
        if (ref) {
          gsap.to(ref, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          })
        }
      })
    }
  }, [])

  return (
    <section className="bg-white py-20 px-0">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl md:text-5xl font-sans font-semibold text-center mb-2">
        The Plan Is  <span className="text-sky-500">Simple</span>
          
        </h2>
        <p className="text-gray-500 text-center mb-16 text-xl max-w-3xl font-sans py-4">
        Real solutions for real business challenges        </p>
         <div className="flex flex-col gap-y-10 w-full">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              ref={el => industryRefs.current[i] = el}
               className={`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 items-stretch w-full px-4 md:px-16 py-8 md:py-12`}
            >
              <div className={`flex justify-center items-center w-full h-full ${i % 2 === 1 ? 'md:order-2' : ''}`}> 
                <img src={industry.img} alt={industry.title} className="w-full md:w-[32rem] h-56 md:h-79 object-cover rounded-3xl shadow-xl" />
              </div>
               <div className={`flex flex-col justify-center w-full h-full text-left px-2 md:px-8 md:items-start font-sans`}>
                 <div className="text-[72px] md:text-[180px] font-extrabold text-[#0000004A] leading-none mb-2">{industry.step}</div>
                 <h3 className="text-2xl md:text-4xl font-sans font-semibold mb-2 text-black">{industry.title}</h3>
                 <p className="font-sans md:text-lg text-gray-600 mb-2">{industry.desc}</p>
 
              </div>
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
          <div className="flex flex-col items-start text-left max-w-4xl w-full mx-auto">
            {/* "Start Your Project" button at right top */}
            <div className="flex justify-end">

            </div>
            <h2 className="text-3xl md:text-4xl lg:text-4xl  font-bold text-white pt-25 leading-tight text-left ml-4 md:-ml-28 -mt-10">
            You Deserve a Website That Works as Hard as You Do
            </h2>
            <p className="text-lg md:text-xl  text-white/90 mb-12 max-w-3xl leading-relaxed text-left ml-4 md:-ml-28">
            Your business is unique. Your website should be too. Let's build a platform that shows who you really are—and brings results.           </p>
            {/* "Get Started" button left-aligned below */}
            <div className="flex">
              <Link href="/contact-us">
              <button className="bg-black hover:bg-gray-800 text-white font-semibold px-16 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl ml-95 -mt-12 cursor-pointer">
                Schedule Free Consultation
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
              You Deserve a Website That Works as Hard as You Do
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center">
              Your business is unique. Your website should be too. Let's build a platform that shows who you really are—and brings results.                </p>

              {/* Buttons in card */}
              <div className="flex flex-col space-y-3">
                <Link href="/contact-us">
                <button className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-6 py-4  rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full cursor-pointer">
                  Schedule Free Consultation
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
      question: " What is custom web development and how is it different from using templates?",
      answer: "Custom web development means building a site from scratch to fit your business goals, features, and branding—unlike templates, which are pre-built and limit flexibility."
    },
    {
      question: "What security measures do you include?",
      answer: "Security-first coding, SSL setup, server hardening, regular backups, and protection against common vulnerabilities like SQL injection or XSS."
    },
    {
      question: "What industries do you provide custom web solutions for?",
      answer: "We deliver solutions for various industries including e-commerce, healthcare, education, finance, hospitality, logistics, and more. Our team adapts to the unique needs of every sector."
    },
    {
      question: " Will my website be mobile-friendly?",
      answer: "Absolutely. Every custom web solution we build is fully responsive, ensuring optimal performance and usability across all devices and screen sizes."
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

const CustomWebPage = () => {
  return (
    <main className="@/customweb">
      <Scroll3DSections>
      <HeroSection />
      <WhyCustomerExperienceMattersSection />
      <TechnologyWorkSection />
      <UseCasesSection />
      <IndustriesSection />
      <CTASection />
      </Scroll3DSections>
      <FAQSection />
      <Footer />
    </main>
  )
}

export default CustomWebPage