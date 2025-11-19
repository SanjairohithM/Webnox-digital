"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Footer from "../sections/Footer";
import Link from "next/link";
import Scroll3DSections from "../sections/Components/scrollanimation";
// import FAQSection from "../components/FAQSection";
// import TickerSection from "../components/TickerSection";

   

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}



// Hero Section Component
const HeroSection = () => {
  const heroRef = useRef(null)
  const titleBlueRef = useRef(null)
  const desc1Ref = useRef(null)
  const desc2Ref = useRef(null)
  const desc3Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state - hide all elements
      gsap.set([titleBlueRef.current, desc1Ref.current, desc2Ref.current, desc3Ref.current], { 
        opacity: 0, 
        y: 20 
      })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        }
      })

      
      // Animate each element with a quick fade-in
      tl.to(titleBlueRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" })
        .to(desc1Ref.current, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }, "-=0.2")
        .to(desc2Ref.current, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }, "-=0.2")
        .to(desc3Ref.current, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }, "-=0.2")
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden ">
      {/* Background with light blue gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#e1edf0] via-[#f2f4f5] to-white "></div>
      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0 -z-5">
        <Image
          src="/images/brandbg.webp"
          alt="Outsourcing background"
          fill
          className="object-cover w-full h-full opacity-5"
          priority
        />
      </div>
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 mt-50">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold mb-6">
          <span ref={titleBlueRef} className="text-[#00BFFF] inline-block">
            Seamless Automation with n8n
          </span>
        </h1>
        <div className="text-[#333] text-lg md:text-xl max-w-4xl font-sans leading-relaxed text-center mx-auto tracking-wide mt-4 mb-8">
          <p ref={desc1Ref} className="inline-block mb-2 font-semibold text-xl md:text-2xl">
            Still, doing repetitive tasks manually?
          </p>
          <br/>
          <p ref={desc2Ref} className="inline-block mb-2">
            Juggling Google Sheets, CRMs, APIs, and email without sync?
          </p>
          <br/>
          <p ref={desc3Ref} className="inline-block mb-4 font-medium">
            Your business deserves better.
          </p>
          <br/>
          <p className="inline-block">
            At Webnox Digital, we help startups, agencies, SaaS companies, and enterprises automate daily operations, marketing, reporting, and data flows using the open-source power of n8n.
          </p>
          <br/>
          <p className="inline-block font-semibold text-[#00BFFF] mt-2">
            No-code. No limits. Just smarter workflows.
          </p>
        </div>
      </div>
    </section>
  )
}





// Why Choose Webnox Section Component
const WhyWebnoxSection = () => {
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
        .to(cardsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }, "-=0.4")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const features = [
    {
      image: "/images/n8n1.webp",
      title: "100+ Custom Workflows",
      desc: "From simple triggers to complex, multi-brand logic"
    },
    {
      image: "/images/n8n2.webp",
      title: "Integrate Anything",
      desc: "500+ native integrations + custom API connections"
    },
    {
      image: "/images/n8n3.webp",
      title: "AI-Ready",
      desc: "Combine LLMs AI, ChatGPT + your business logic"
    },
    {
      image: "/images/n8n4.webp",
      title: "Secure & Scalable",
      desc: "On premise or cloud deployments"
    }
  ]

  return (
    <section ref={sectionRef} className="bg-white py-20 px-8">
      <div className="">
        {/* Title */}
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-sans leading-tight">
          Why Choose Webnox for n8n Workflow<br />Automation?
        </h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 min-h-[300px] flex flex-col justify-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  width={64} 
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-sans">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Global Support Footer */}
        <div className="text-center pt-8  px-4">
          <p className="text-gray-600 font-sans flex items-center justify-center">
            <span className="w-6 h-6 mr-3 flex items-center justify-center">
              <Image 
                src="/images/n8n5.webp" 
                alt="Global Support" 
                width={24} 
                height={24}
                className="w-full h-full object-contain"
              />
            </span>
            Global Support — Used by clients across the US, UAE, UK & India
          </p>
        </div>
      </div>
    </section>
  )
}

const BrandingPlanSteps = () => (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-24 font-sans">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Here's Your Branding Plan With Webnox Digital</h2>
        <p className="text-gray-500 text-lg text-center mb-16 max-w-2xl">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div className="relative w-full flex flex-col items-center">
          {/* Steps Row */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-full">
              <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
                <img src="/images/brand4-2.webp" alt="Book A Free Call" className="w-8 h-8" />
              </div>
              <h3 className="text-base font-semibold text-[#00b9ff] mb-1 text-center">Workflow Discovery
              Session</h3>
              <p className="text-gray-600 text-sm text-center">We identify your most time-
consuming processes and tools that
don't talk to each other.</p>
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
              <h3 className="text-base font-semibold text-[#00b9ff] mb-1 text-center">Custom Workflow Design</h3>
              <p className="text-gray-600 text-sm text-center">We create visual, modular
workflows inside n8n, with smart
conditions, loops, and alerts.</p>
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
              <h3 className="text-base font-semibold text-[#00b9ff] mb-1 text-center">Deploy, Test & Scale</h3>
              <p className="text-gray-600 text-sm text-center">We set up, test thoroughly, and
monitor workflows with full
documentation & support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

// Automation Comparison Section
const AutomationComparisonSection = () => {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const itemsLeftRef = useRef([])
  const itemsRightRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([leftRef.current, rightRef.current], { opacity: 0, y: 40 })
      const allItems = [...itemsLeftRef.current, ...itemsRightRef.current].filter(Boolean)
      gsap.set(allItems, { opacity: 0, y: 16 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl
        .to(leftRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to(itemsLeftRef.current.filter(Boolean), { opacity: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.22 }, "-=0.4")
        .to(rightRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.2")
        .to(itemsRightRef.current.filter(Boolean), { opacity: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.22 }, "-=0.4")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* With Webnox Automation - Green Theme */}
          <div 
            ref={leftRef}
            className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-3xl p-10 shadow-xl border border-green-200 hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Background Image - Success Pattern */}
            <div className="absolute inset-0 opacity-5">
              <Image
                src="/images/brandbg.webp"
                alt="Success background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#065f46] mb-8 font-sans">
                With Webnox Automation
              </h3>
              <ul className="space-y-5">
                <li ref={(el) => (itemsLeftRef.current[0] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#047857] font-semibold text-lg">Save 100+ hours/month</span>
                </li>
                <li ref={(el) => (itemsLeftRef.current[1] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#047857] font-semibold text-lg">Reduce human error by 90%</span>
                </li>
                <li ref={(el) => (itemsLeftRef.current[2] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#047857] font-semibold text-lg">Cut costs on SaaS subscriptions</span>
                </li>
                <li ref={(el) => (itemsLeftRef.current[3] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#047857] font-semibold text-lg">Get real-time data & alerts</span>
                </li>
                <li ref={(el) => (itemsLeftRef.current[4] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#047857] font-semibold text-lg">Focus your team on what matters</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Without Automation - Red Theme */}
          <div 
            ref={rightRef}
            className="relative bg-gradient-to-br from-red-50 via-rose-50 to-red-100 rounded-3xl p-10 shadow-xl border border-red-200 hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Background Image - Warning Pattern */}
            <div className="absolute inset-0 opacity-5">
              <Image
                src="/images/brandbg.webp"
                alt="Warning background"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#991b1b] mb-8 font-sans">
                Without Automation
              </h3>
              <ul className="space-y-5">
                <li ref={(el) => (itemsRightRef.current[0] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[#b91c1c] font-semibold text-lg">Repetitive Work Drains Productivity</span>
                </li>
                <li ref={(el) => (itemsRightRef.current[1] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[#b91c1c] font-semibold text-lg">Data Scattered Everywhere</span>
                </li>
                <li ref={(el) => (itemsRightRef.current[2] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[#b91c1c] font-semibold text-lg">No Alerts, No Action</span>
                </li>
                <li ref={(el) => (itemsRightRef.current[3] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[#b91c1c] font-semibold text-lg">Zero Scalability</span>
                </li>
                <li ref={(el) => (itemsRightRef.current[4] = el)} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500 flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[#b91c1c] font-semibold text-lg">More Tools = More Confusion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Call to Action Section Component
const CTASection = () => {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        // Set initial state
        gsap.set(contentRef.current, { opacity: 0, y: 50 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        tl.to(contentRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out" 
        })
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
              ref={contentRef}
              className="relative z-10 flex flex-col justify-center min-h-[500px] px-4"
              style={{ backfaceVisibility: 'hidden' }}
            >
                        {/* Desktop Layout - Keep existing perfect design */}
              <div className="flex flex-col items-start text-left max-w-4xl w-full mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-4xl  font-bold text-white pt-25 leading-tight text-left ml-30">
                Ready to Save Time, Cut Errors & Scale Faster?
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed text-left ml-30">
                Let's build your first n8n workflow — or improve what you've started.            </p>
                {/* Buttons side by side */}
                <div className="flex gap-8 ml-50  ">
                  <Link href="/contact-us">
                  <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                    Book a Free Automation Audit Today
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
              ref={contentRef}
              className="relative z-10 flex flex-col justify-center min-h-[500px] px-4"
            >
              {/* Mobile Card Layout */}
              <div className="max-w-md mx-auto">
                {/* Card Container */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/30">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight text-center">
                    Ready to Save Time, Cut Errors & Scale Faster?
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center">
                    Let's build your first n8n workflow — or improve what you've started.
                  </p>

                  {/* Buttons in card */}
                  <div className="flex flex-col space-y-3">
                    <Link href="/contact-us"> 
                    <button className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                      Book a Free Automation Audit Today
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



// Why n8n + Webnox Section Component
const WhyN8nWebnoxSection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 30 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(contentRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out" 
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-16 px-4 font-sans">
      <div ref={contentRef} className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Why n8n + Webnox Is the Smartest Automation Decision
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
        At Webnox Digital, we build intelligent systems that scale with you using n8n + AI + your business logic.
        </p>
        <button 
          className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transform"
          onClick={() => window.location.href = '/contact-us'}
        >
          Get My Workflow Plan Now
        </button>
      </div>
    </section>
  )
}

const FAQSection = () => {
  const faqs = [
    {
      question: "What is n8n and how does it help my business?",
      answer: "n8n is a powerful, open-source automation platform that connects your apps, tools, and data flows — without needing heavy coding. It lets you automate repetitive tasks, sync systems, and reduce manual work so your team can focus on what matters."
    },
    {
      question: "What can I automate using n8n?",
      answer: "Almost anything! From lead routing and email workflows to marketing reports, CRM syncs, WhatsApp alerts, blog generation, PDF automation, and payment updates, we can automate it."
    },
    {
      question: " I’m not technical. Can I still use n8n?",
      answer: "Yes, especially when working with a team like Webnox. We handle the setup, integration, and maintenance, while you just focus on your business. We also build easy-to-understand visual flows and provide full documentation."
    },
    {
      question: "How do I get started?",
      answer: "Just book a free consultation with our automation team. We’ll analyze your current processes, recommend what to automate first, and give you a clear roadmap — with no obligation."
    },
    {
      question: " Is this a one-time setup or ongoing support?",
      answer: " We offer both. You can start with a one-time workflow build. Or, subscribe to our Automation Support Plan for ongoing updates, new flows, performance optimization, and peace of mind."
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



// Main Outsourcing Page Component
    const n8nPage = () => {
  return (
    <main className="@/n8n">
      <Scroll3DSections>
      <HeroSection />
      
      <WhyWebnoxSection />
      <BrandingPlanSteps />
      <AutomationComparisonSection />
      <CTASection />
      <WhyN8nWebnoxSection />
      </Scroll3DSections>
      <FAQSection />
  
      <Footer />
    </main>
  )
}

export default n8nPage