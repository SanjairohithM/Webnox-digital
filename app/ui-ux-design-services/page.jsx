"use client"

import React, { useRef, useEffect, useState } from "react"
import Scroll3DSections from "../sections/Components/scrollanimation";
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

    const firstTitlePart = "Elevate Every Click with Purposeful "
    const secondTitlePart = " UI/UX Design."

    return (
        <section
            ref={heroRef}
            className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
            }}
        >
            {/* Background Image Overlay - Right Side */}
            <div className="absolute right-34 top-1/2 transform -translate-y-1/2 z-10 w-[35%] h-[50%] lg:w-[90%] lg:h-[90%]">
                <Image
                    src="/images/uiux1.webp"
                    alt="Mobile Development Background"
                    fill
                    className="object-contain opacity-55"
                    priority={false}
                />
            </div>

            <div className="relative w-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mt-50 z-20">
                {/* Introductory text */}
                <div className="mb-6 px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF] flex items-center gap-2 w-fit mx-auto">
                    <Image
                        src="/images/customer1.png"
                        alt="UI/UX Badge Icon"
                        width={20}
                        height={20}
                        className="w-4 h-4 md:w-5 md:h-5 object-contain"
                    />
                    <span className="text-[#00B9FF] text-sm md:text-base font-medium">
                        UI/UX Design Excellence          </span>
                </div>

                <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-4 leading-tight lg:whitespace-nowrap">
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
                    At WEBNOX DIGITAL, we blend creativity with usability to deliver digital experiences that are not only beautiful—but functional, intuitive, and conversion-ready.        </p>

                <div className="mx-auto mb-6 max-w-3xl">
                    <div className="bg-[#E6F7FD] text-[#00B9FF] text-sm md:text-base rounded-xl px-4 py-3 font-medium">
                        "In today's digital-first world, design is no longer just about aesthetics—it defines how users experience, trust, and connect with your brand at every touchpoint."                    </div>
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

const BrandingPlanSteps = () => (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-24 font-sans">
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mt-15">Our Automation Approach</h2>

            <div className="relative w-full flex flex-col items-center mt-15">
                {/* Steps Row */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 px-20">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center w-full">
                        <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
                            <img src="/images/uiux2.png" alt="Book A Free Call" className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#00b9ff] mb-1 text-center">Research</h3>

                    </div>
                    {/* Arrow 1 */}
                    <div className="hidden md:flex justify-center items-center -mt-16 ">
                        <img src="/Arc 2.svg" alt="arrow 1" className="w-[40rem] md:w-[56rem] lg:w-[72rem] h-auto" />
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center w-full">
                        <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
                            <img src="/images/uiux3.png" alt="Get A Custom Branding Strategy" className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#00b9ff] mb-1 text-center">Wireframe</h3>

                    </div>
                    {/* Arrow 2 */}
                    <div className="hidden md:flex justify-center items-center -mt-8">
                        <img src="/Arc 1.svg" alt="arrow 2" className="w-[40rem] md:w-[56rem] lg:w-[72rem] h-auto" />
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center w-full">
                        <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
                            <img src="/images/uiux4.png" alt="Build & Launch A World-Class Brand" className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#00b9ff] mb-1 text-center">Design</h3>

                    </div>
                    <div className="hidden md:flex justify-center items-center -mt-16">
                        <img src="/Arc 2.svg" alt="arrow 1" className="w-[40rem] md:w-[56rem] lg:w-[72rem] h-auto" />
                    </div>
                    {/* Step 4 */}
                    <div className="flex flex-col items-center w-full">
                        <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
                            <img src="/images/mobile3.png" alt="Build & Launch A World-Class Brand" className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#00b9ff] mb-1 text-center">Test</h3>

                    </div>
                </div>
            </div>
        </div>
    </section>
)

// Services Grid Section Component
const SecondUseCasesSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const cardsRef = useRef([])

    const useCases = [
        {
            icon: "/images/uiux2.png",
            title: "User Research & Strategy",
            description: "We understand your users—so your product speaks their language from the start.",

        },
        {
            icon: "/images/uiux3.png",
            title: "Website & Mobile App Design",
            description: "Designs that adapt perfectly across devices—fast, fluid, and user-friendly.",

        },
        {
            icon: "/images/software6.png",
            title: "Journey Mapping",
            description: " Custom admin panels and user portals for complex business operations",

        },
        {
            icon: "/images/3d1.png",
            title: "Wireframes & Prototypes",
            description: "Clickable blueprints that validate your vision before writing a single line of code.",

        },
        {
            icon: "/images/uiux4.png",
            title: "UI Design & Branding",
            description: "Visually striking, on-brand interfaces that attract, engage, and convert.",

        },
        {
            icon: "/images/mobile3.png",
            title: "Usability Testing",
            description: "Real feedback. Real users. Real improvements.",

        },

        {
            icon: "/images/software8.png",
            title: "Inclusive Design",
            description: "Accessibility-first design that works for everyone—because great UX includes everyone.",

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

                <div className="mb-6 px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF] flex items-center gap-2 w-fit mx-auto">
                    <Image
                        src="/images/customer1.png"
                        alt="UI/UX Badge Icon"
                        width={20}
                        height={20}
                        className="w-4 h-4 md:w-5 md:h-5 object-contain"
                    />
                    <span className="text-[#00B9FF] text-sm md:text-base font-medium text-center justify-center items-center ">
                        Our UI/UX Services</span>
                </div>
                <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
                    Our UI/UX Services Include
                </h2>
                <p className="text-gray-600 text-lg mb-4 text-center">Comprehensive design solutions that transform ideas into exceptional user experiences.</p>

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
      { icon: "/images/brand4-3.webp", number:"85%",label: "Conversion Increase" },
      { icon: "/images/ecommerce5.png", number:"92%",label: "User Satisfaction" },
      { icon: "/images/custom2.png", number:"67%",label: "Task Completion" },
      { icon: "/images/consult4.png", number:"45%",label: "Bounce Reduction" },
    ]

    const benefitsTop = [
      "Create seamless, intuitive user flows that reduce friction",
      "Build trust through clean, accessible, and consistent design",
      "Increase task completion rates across apps and websites",
    ]

    const benefitsBottom = [
      "Improve brand perception with every click, scroll, and swipe",
      "Turn first-time visitors into loyal, long-term users",
    ]
  
    return (<>
      <div>        {/* Badge */}
        <div ref={badgeRef} className="text-center mt-20">
          <div className="flex justify-center mb-4">
            <div className="px-3 py-1 bg-[#E6F7FD] rounded-full border border-[#00B9FF] inline-flex items-center gap-2">
              <Image src="/images/customer1.png" alt="Badge" width={16} height={16} className="w-4 h-4 object-contain" />
              <span className="text-[#00B9FF] text-xs md:text-sm font-medium">Business Impact</span>
            </div>
          </div>
        </div>
  
        {/* Title */}
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center mb-4 font-sans leading-tight ">
        UI/UX That Drives Engagement, <br />Trust & Growth
        </h2>
  
        {/* Subtitle */}
        <p ref={subtitleRef} className="text-black/90 text-center  max-w-3xl mx-auto text-lg font-sans mb-10">
        At WEBNOX DIGITAL, we don't just design interfaces—we craft digital journeys that users love and businesses grow with. Our UI/UX solutions help brands:</p>
        <p className="text-[#00B9FF] text-center mb-6 max-w-3xl mx-auto text-2xl font-sans">Our UI/UX solutions help brands</p>

        {/* Horizontal Benefit Bars */}
        <div className="w-full max-w-6xl mx-auto shadow-2xl rounded-xl overflow-hidden">
          {/* Top (Blue) bar */}
          <div className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] text-white">
            <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/30">
              {benefitsTop.map((text, idx) => (
                <div key={idx} className="px-6 py-4 text-center flex-1">
                  <p className="text-sm md:text-base lg:text-lg font-semibold leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom (Black) bar */}
          <div className="bg-gradient-to-r from-gray-900 to-black text-white">
            <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              {benefitsBottom.map((text, idx) => (
                <div key={idx} className="px-6 py-4 text-center flex-1">
                  <p className="text-sm md:text-base lg:text-lg font-semibold leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-8" />
        
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
                <p className="text-white/95 text-base md:text-3xl font-bold">{f.number}</p>
                <p className="text-white/95 text-base md:text-lg font-semibold">{f.label}</p>
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
                        <h2 className="text-3xl md:text-4xl lg:text-4xl  font-bold text-white pt-25 leading-tight text-left ml-4 md:-ml-28 ">
                            Let’s Create Something Users Will Love
                        </h2>
                        <p className="text-lg md:text-xl  text-white/90 mb-12 max-w-3xl leading-relaxed text-left ml-4 md:-ml-28">
                            Whether you're launching a new platform or improving an existing one, our UI/UX experts are ready to help you build digital experiences that look good, feel natural, and drive real results.        </p>
                        {/* "Get Started" button left-aligned below */}
                        <div className="flex">
                            <Link href="/contact-us">
                            <button className="bg-black hover:bg-gray-800 text-white font-semibold px-16 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl ml-95 -mt-10 cursor-pointer">
                                Start Your UI/UX Project             </button>
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
                                Let’s Create Something Users Will Love              </h2>
                            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center">
                                Whether you're launching a new platform or improving an existing one, our UI/UX experts are ready to help you build digital experiences that look good, feel natural, and drive real results.              </p>

                            {/* Buttons in card */}
                            <div className="flex flex-col space-y-3">
                                <Link href="/contact-us">
                                <button className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-6 py-4  rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full cursor-pointer">
                                    Start Your UI/UX Project
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
            question: "What types of businesses benefit from your consulting services?",
            answer: " UI (User Interface) focuses on the visual design and interactive elements of a product—like buttons, layout, and typography.UX (User Experience) is about the overall journey a user takes—from usability and accessibility to how intuitive and satisfying the experience feels."
        },
        {
            question: " Why is UI/UX important for my business?",
            answer: "A well-designed interface improves user satisfaction, increases conversion rates, reduces bounce rate, and strengthens brand perception. In short, it makes your product easier to use and more effective."
        },
        {
            question: "Do I need UI/UX if I already have a website?",
            answer: "Yes. Even existing websites can benefit from a redesign to improve usability, performance, and conversions."
        },
        {
            question: "Does UI/UX impact business growth?",
            answer: "Yes. Better user experiences lead to higher retention, better reviews, and increased conversions"
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

const UIUXDesignPage = () => {
    return (
        <main className="@/uiuxdesign">
            <Scroll3DSections>
                <HeroSection />
                <BrandingPlanSteps />
                <SecondUseCasesSection />
                <WhyCustomerExperienceMattersSection />
            </Scroll3DSections>
            <Footer />
        </main>
    )
}

export default UIUXDesignPage