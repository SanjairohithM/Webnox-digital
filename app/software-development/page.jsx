"use client"

import React, { useRef, useEffect, useState } from "react"
import Scroll3DSections from "../sections/Components/scrollanimation";
import { gsap } from "gsap"
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
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-[35%] h-[50%] lg:w-[50%] lg:h-[65%]">
        <Image
          src="/images/software1.webp"
          alt="Software Development Background"
          fill
          className="object-contain opacity-15"
          priority={false}
        />
      </div>
      
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mt-50 z-20">
        {/* Introductory text */}
        <div className="mb-6 px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF] inline-flex items-center gap-2">
          <Image
            src="/images/customer1.png"
            alt="Software Development Icon"
            width={20}
            height={20}
            className="w-4 h-4 md:w-5 md:h-5 object-contain"
          />
          <span className="text-[#00B9FF] text-sm md:text-base font-medium">
            Software Development
          </span>
        </div>

        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-4 leading-tight">
          <span className="text-[#00B9FF]">
            {"You Want to Build Software That's".split("").map((char, index) => (
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
            {" Scalable,".split("").map((char, index) => (
              <span
                key={index + "You Want to Build Software That's".length}
                ref={(el) => (titleLettersRef.current[index + "You Want to Build Software That's".length] = el)}
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
            {"Smart, ".split("").map((char, index) => (
              <span
                key={index + "You Want to Build Software That's Scalable,".length}
                ref={(el) => (titleLettersRef.current[index + "You Want to Build Software That's Scalable,".length] = el)}
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
          <span className="text-[#00B9FF]">
            {"and".split("").map((char, index) => (
              <span
                key={index + "You Want to Build Software That's Scalable, Smart, ".length}
                ref={(el) => (titleLettersRef.current[index + "You Want to Build Software That's Scalable, Smart, ".length] = el)}
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
            {" Future-Ready".split("").map((char, index) => (
              <span
                key={index + "You Want to Build Software That's Scalable, Smart, and".length}
                ref={(el) => (titleLettersRef.current[index + "You Want to Build Software That's Scalable, Smart, and".length] = el)}
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
          Webnox Digital is a strategic software development expert that co-builds high-performance digital platforms that drive growth. We've delivered custom software that solves complex challenges with clarity, speed, and precision.
        </p>
        <Link href="/contact-us">
        <button
          ref={buttonRef}
          className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer"
        >
          Talk Now!
        </button>
        </Link>
        </div>
    </section>
  )
}

const WhatDoesWebnoxDigitalDoSection = () => (
    <section className="bg-white py-16 px-4 font-sans">
      <div className=" text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold mb-12 text-black leading-tight">
          What does Webnox Digital do?
        </h2>
        
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Image */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[3/2] relative group cursor-pointer">
            <img 
              src="/images/software2.webp" 
              alt="Team Collaboration" 
              className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-30" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
              <div className="text-left text-black  backdrop-blur-sm rounded-xl p-4 ">
                <h3 className="text-xl font-bold mb-3">Web Applications</h3>
                <p className="text-base">Custom web apps built with modern frameworks and scalable architecture</p>
              </div>
            </div>
          </div>
          
          {/* Second Image */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[3/2] relative group cursor-pointer">
            <img 
              src="/images/software5.webp" 
              alt="Digital Solutions" 
              className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-30" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
              <div className="text-left text-black  backdrop-blur-sm rounded-xl p-4 ">
                <h3 className="text-xl font-bold mb-3">Enterprise Software</h3>
                <p className="text-base">Complex business solutions that streamline operations and boost productivity</p>
              </div>
            </div>
          </div>
          
          {/* Third Image */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[3/2] relative group cursor-pointer">
            <img 
              src="/images/software3.webp" 
              alt="Business Consulting" 
              className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-30" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
              <div className="text-left text-black  backdrop-blur-sm rounded-xl p-4 ">
                <h3 className="text-xl font-bold mb-3">API Development</h3>
                <p className="text-base">Robust APIs and microservices for seamless system integration</p>
              </div>
            </div>
          </div>
          
          {/* Fourth Image */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[3/2] relative group cursor-pointer">
            <img 
              src="/images/software4.webp" 
              alt="Business Consulting" 
              className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-30" 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
              <div className="text-left text-black  backdrop-blur-sm rounded-xl p-4 ">
                <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
                <p className="text-base">Scalable cloud-native applications with modern DevOps practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

const OurApproachSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([titleRef.current], { opacity: 0, y: 30 })
            gsap.set(cardsRef.current, { opacity: 0, y: 40 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            })

            tl
                .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
                .to(cardsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }, "-=0.2")
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const principles = [
        {
            icon: "/images/software6.png",
            title: "Discover & Define",
            desc: " We explore your business goals, user needs, and system requirements through collaborative discovery workshops and technical analysis."
        },
        {
            icon: "/images/software7.png",
            title: "Design & Develop",
            desc: "We build software that looks great, performs fast and integrates seamlessly. Using the best tech stack and agile methods, we turn specs into scalable products."
        },
        {
            icon: "/images/software8.png",
            title: "Deploy & Support",
            desc: "We ensure a smooth go-live with real-time QA, testing, deployment, and post-launch backed by documentation and ongoing optimization."
        }
    ]

    return (
        <section ref={sectionRef} className="bg-white py-16  px-4 font-sans">
            <div className="max-w-7xl mx-auto">
                

                {/* Title */}
                <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-4 font-sans leading-tight">
                Here's Our Proven Software Development Framework
                </h2>

          

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-7xl mx-auto mt-20">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                <Image
                                    src={principle.icon}
                                    alt={principle.title}
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-black mb-3 font-sans">
                                {principle.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-600 text-md leading-relaxed font-sans px-2 text-left">
                                {principle.desc}
                            </p>
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
          number: "500+",
          description: "Custom Software Projects Delivered"
      },
      {
          icon: "/images/customer9.png",
          number: "14+",
          description: "Years of Industry Experience"
      },
      {
          icon: "/images/customer10.png",
          number: "98%",
          description: "Client Retention Rate"
      },
      {
          icon: "/images/customer7.png",
          number: "15+",
          description: "Global Industries Served"
      },
      {
          icon: "/images/customer9.png",
          number: "100%",
          description: "Agile Development Process"
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
        

              {/* Title */}
              <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 font-sans leading-tight">
                  Trusted by Businesses Worldwide
              </h2>

              {/* Subtitle */}
              <p ref={subtitleRef} className="text-white/90 text-center mb-16 max-w-2xl mx-auto text-lg font-sans">
                  Our track record speaks for itself
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto font-sans">
                  {stats.map((stat, index) => (
                      <div
                          key={index}
                          ref={el => statsRef.current[index] = el}
                          className="text-center"
                      >
                          

                          {/* Number */}
                          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">
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

const BrandingPlanSteps = () => (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-24 font-sans">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Here's Your Software Development Plan With Webnox Digital</h2>
        {/* <p className="text-gray-500 text-lg text-center mb-16 max-w-2xl">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p> */}
        <div className="relative w-full flex flex-col items-center">
          {/* Steps Row */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-full">
              <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
                <img src="/images/brand4-2.webp" alt="Book A Free Call" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#00b9ff] mb-1 text-center">Book a Free Call</h3>
              <p className="text-gray-600 text-md text-center">We’ll understand your goals, tech stack, user flows, and current bottlenecks.</p>
            </div>
            {/* Arrow 1 */}
            <div className="hidden md:flex justify-center items-center -mt-12">
              <img src="/Arc 2.svg" alt="arrow 1" className="w-[40rem] md:w-[56rem] lg:w-[72rem] h-auto" />
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center w-full">
              <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
                <img src="/images/brand4-3.webp" alt="Get A Custom Branding Strategy" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#00b9ff] mb-1 text-center">Get a Custom Software Blueprint</h3>
              <p className="text-gray-600 text-md text-center">We’ll create a detailed solution architecture, development roadmap, and timeline tailored to your business needs.</p>
            </div>
            {/* Arrow 2 */}
            <div className="hidden md:flex justify-center items-center mt-22">
              <img src="/Arc 1.svg" alt="arrow 2" className="w-[40rem] md:w-[56rem] lg:w-[72rem] h-auto" />
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center w-full">
              <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
                <img src="/images/brand4-1.webp" alt="Build & Launch A World-Class Brand" className="w-8 h-8" />
              </div>
              <h3 className="  text-xl font-semibold text-[#00b9ff] mb-1 text-center">Build, Launch & Scale With Confidence</h3>
              <p className=" text-md text-gray-600  text-center">From web apps to enterprise tools, we’ll develop, test, deploy, and maintain powerful software solutions that deliver real business impact..</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

const FAQSection = () => {
    const faqs = [
      {
        question: "What industries do you offer software development for?",
        answer: "We work with clients across e-commerce, healthcare, logistics, finance, education, SaaS, and more, tailoring software to business needs."
      },
      {
        question: "Can you scale or modernize existing software?",
        answer: "Yes. We can audit, refactor, or rebuild legacy systems to meet today’s performance, security, and UX standards."
      },
      {
        question: "What makes Webnox Digital different from other software companies?",
        answer: "We don’t just write code. We combine product strategy, UX thinking, and clean engineering to build solutions that scale with your business."
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
            Don’t Just Build Software. Build Solutions That Matter

            </h2>
            <p className="text-lg md:text-xl  text-white/90 mb-12 max-w-3xl leading-relaxed text-center">
            Talk to the software experts at Webnox Digital, your trusted software 
            development agency.  </p>
            {/* "Get Started" button left-aligned below */}
            <div className="flex justify-center">
                    <Link href="/contact-us">
              <button className="bg-black hover:bg-gray-800 text-white font-semibold px-16 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
               Talk Now!              </button>
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
              Don’t Just Build Software. Build Solutions That Matter              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center">
              Talk to the software experts at Webnox Digital, your trusted software 
            development agency.                </p>

              {/* Buttons in card */}
              <div className="flex flex-col space-y-3">
                <Link href="/contact-us">
                <button className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-6 py-4  rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                  Talk Now!
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

// Main Software Development Page
const SoftwarePage = () => (
  <main className="bg-white w-full mt-20">
    <HeroSection />
    <WhatDoesWebnoxDigitalDoSection />
    <OurApproachSection />
    <WhyCustomerExperienceMattersSection />
    <BrandingPlanSteps />
    
    <CTASection />
    <FAQSection />
    <Footer />
  </main>
)

export default SoftwarePage