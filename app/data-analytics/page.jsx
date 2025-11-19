"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Scroll3DSections from "../sections/Components/scrollanimation";
import Footer from "../sections/Footer";
import Link from "next/link";
  // import FAQSection from "../components/FAQSection";
// import TickerSection from "../components/TickerSection";



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
      gsap.set([titleRef.current, descRef.current], { opacity: 0, y: 40 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden">
      {/* Background with light blue gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#e1edf0] via-[#f2f4f5] to-white"></div>
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
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4">
        <h1 ref={titleRef} className="text-2xl md:text-4xl lg:text-5xl font-sans font-bold mb-6">
          <span className="text-[#00BFFF]">Turn Data Into Direction.</span>
        </h1>
        <p
          ref={descRef}
          className="text-[#333] text-lg md:text-xl max-w-3xl font-sans leading-relaxed text-center mx-auto tracking-wide mt-4"
        >
          We help you uncover what your business is really saying and what it needs to do next.<br/>
          At Webnox Digital, we help you turn scattered information into sharp insights. We help you find trends, identify patterns, predict outcomes, and make decisions backed by solid numbers.
        </p>
      </div>
    </section>
  )
}



// Approach Cards Section Component  
const ApproachSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  const approaches = [
    { 
      title: "Descriptive Analytics", 
      desc: "Understand what’s really happening in your business and why.",
      image: "/images/market4.webp"
    },
    { 
      title: "Predictive Analytics", 
      desc: "Forecast sales, customer behavior, demand, and risk using AI and machine learning.",
      image: "/images/market1.webp"
    },
    { 
      title: "Prescriptive Analytics", 
      desc: "We tell you what to do next with data-driven recommendations.",
      image: "/images/market2.webp"
    },
    { 
      title: "Real-Time Dashboards", 
      desc: "Live visual dashboards tailored for CEOs, marketers, and ops teams to monitor KPIs on the go",
      image: "/images/market5.webp"
    },
    { 
      title: "Data Integration & Warehousing", 
      desc: "We bring your data from spreadsheets, CRMs, ERPs, apps, and databases into a unified system.",
      image: "/images/market3.webp"
    },
    { 
      title: "Custom BI Solutions", 
      desc: "Powerful yet intuitive reporting systems using tools like Power BI, Tableau, and more.",
      image: "/images/market6.webp"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      gsap.set([titleRef.current], { opacity: 0, y: 30 })
      
      if (isDesktop) {
        // Complex animations for desktop - first 3 from right, last 3 from left
        gsap.set(cardsRef.current.slice(0, 3), { opacity: 0, x: 100 }) // First 3 from right
        gsap.set(cardsRef.current.slice(3, 6), { opacity: 0, x: -100 }) // Last 3 from left
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        tl
          .to(titleRef.current, { opacity: 1, y: 0, duration: 2.5, ease: "power2.out" })
          .to(cardsRef.current.slice(0, 3), { opacity: 1, x: 0, duration: 2.0, stagger: 0.6, ease: "power2.out" }, "-=1.5")
          .to(cardsRef.current.slice(3, 6), { opacity: 1, x: 0, duration: 2.0, stagger: 0.6, ease: "power2.out" }, "-=1.0")
      } else {
        // Simple fade animations for mobile
        gsap.set(cardsRef.current, { opacity: 0, y: 20 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        tl
          .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
          .to(cardsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }, "-=0.4")
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-extrabold text-gray-500 font-sans text-center  leading-tight">
          Our Data Analytics Capabilities
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
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold font-sans text-gray-900 mb-4">{approach.title}</h3>
              <p className="text-gray-500 leading-relaxed font-sans text-lg">{approach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}






// Why Webnox Section Component
const WhyWebnoxSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const centralBoxRef = useRef(null)
  const boxesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, centralBoxRef.current], { opacity: 0, scale: 0.8 })
      gsap.set(boxesRef.current, { opacity: 0, y: 30 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl
        .to(titleRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" })
        .to(centralBoxRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
        .to(boxesRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.3")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const reasons = [
    "We focus on business value, not just visuals.",
    "We speak your language, not just tech jargon.",
    "We combine AI + human intuition for insights that matter.",
    "We treat every project like a long-term partnership, not a one-time setup."
  ]

  return (
    <>
      {/* Desktop Version */}
      <section ref={sectionRef} className="hidden lg:block bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-16 font-sans">
            Why Webnox Is the Right Analytics Partner
          </h2>
          
          {/* Mind Map Container */}
          <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
            {/* Central Webnox Box */}
            <div 
              ref={centralBoxRef}
              className="relative z-20 bg-[#00BFFF] px-8 py-6 rounded-2xl shadow-lg flex items-center justify-center"
            >
              <Image
                src="/images/marketsvgcenter.webp"
                alt="Webnox Analytics"
                width={120}
                height={60}
                className="w-auto h-12 md:h-16 object-contain"
              />
            </div>
            
            {/* Connection Lines and Boxes */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Top Left */}
              <div className="absolute top-0 -left-8 md:-left-16 lg:-left-24 w-64 md:w-72" style={{transform: 'translateY(20px)'}}>
                <div className="relative">
                
                  {/* SVG Icon */}
                  <div className="absolute top-25 left-104 w-62 h-62 -translate-x-1/2 -translate-y-1/2 z-10">
                    <Image
                      src="/marketsvg3.svg"
                      alt="Analytics Icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Content Box */}
                  <div 
                    ref={el => boxesRef.current[0] = el}
                    className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm mt-18"
                  >
                    <p className="text-gray-700 text-sm md:text-base font-sans leading-relaxed">
                      {reasons[0]}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom Left */}
              <div className="absolute bottom-0 -left-8 md:-left-16 lg:-left-24 w-64 md:w-72" style={{transform: 'translateY(-20px)'}}>
                <div className="relative">
                
                
                  {/* SVG Icon */}
                  <div className="absolute -top-10 left-103 w-62 h-62 -translate-x-1/2 -translate-y-1/2 z-10">
                    <Image
                      src="/marketsvg4.svg"
                      alt="Analytics Icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Content Box */}
                  <div 
                    ref={el => boxesRef.current[1] = el}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-4"
                  >
                    <p className="text-gray-700 text-sm md:text-base font-sans leading-relaxed">
                      {reasons[1]}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Top Right */}
              <div className="absolute top-0 -right-8 md:-right-16 lg:-right-24 w-64 md:w-72" style={{transform: 'translateY(20px)'}}>
                <div className="relative">
                
                  {/* SVG Icon */}
                  <div className="absolute top-28 right-41 w-62 h-62 -translate-x-1/2 -translate-y-1/2 z-10">
                    <Image
                      src="/marketsvg1.svg"
                      alt="Analytics Icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Content Box */}
                  <div 
                    ref={el => boxesRef.current[2] = el}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mt-14"
                  >
                    <p className="text-gray-700 text-sm md:text-base font-sans leading-relaxed">
                      {reasons[2]}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom Right */}
              <div className="absolute bottom-0 -right-8 md:-right-16 lg:-right-24 w-64 md:w-72" style={{transform: 'translateY(-20px)'}}>
                <div className="relative">
                
                  {/* SVG Icon */}
                  <div className="absolute -top-2 right-41 w-62 h-62 -translate-x-1/2 -translate-y-1/2 z-10">
                    <Image
                      src="/marketsvg2.svg"
                      alt="Analytics Icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Content Box */}
                  <div 
                    ref={el => boxesRef.current[3] = el}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-4"
                  >
                    <p className="text-gray-700 text-sm md:text-base font-sans leading-relaxed">
                      {reasons[3]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="lg:hidden bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-12 font-sans">
            Why Webnox Is the Right Analytics Partner
          </h2>
          
          {/* Simple Cards Layout */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00BFFF] rounded-lg flex items-center justify-center">
                    <Image
                      src={`/marketsvg${index + 1}.svg`}
                      alt="Icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <p className="text-gray-700 text-base font-sans leading-relaxed flex-1">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


const industries = [
    {
      title: "Retail & E-Commerce",
      desc: "Digital solutions for customer-focused systems: retail, fashion, and online stores. We help your business optimize, automate, and grow.",
      img: "/images/brand5-4.webp"
    },
    {
      title: "Logistics & Transportation",
      desc: "Smart logistics for your business: optimize routes, track shipments, and streamline operations for maximum efficiency.",
      img: "/images/brand5-5.webp"
    },
    {
      title: "Real Estate & Construction",
      desc: "From virtual tours to project management, we help real estate and construction businesses modernize and scale.",
      img: "/images/brand5-3.webp"
    },
    {
      title: "Healthcare & Wellness",
      desc: "Modern healthcare solutions for clinics, hospitals, and wellness brands. Improve patient care and streamline operations.",
      img: "/images/brand5-1.webp"
    },
    {
      title: "Education & E-Learning",
      desc: "Empowering educators and learners with digital platforms, virtual classrooms, and interactive content.",
      img: "/images/brand5-2.webp"
    },
    {
      title: "Lifestyle & Personal Brands",
      desc: "Personalized branding and digital solutions for influencers, coaches, and lifestyle brands.",
      img: "/images/brand5-6.webp"
    }
  ]
  
  const IndustriesSection = () => {
    const sectionRef = useRef(null)
    const industryRefs = useRef([])
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        // Check if we're on desktop (lg breakpoint and above)
        const isDesktop = window.innerWidth >= 1024
        
        industryRefs.current.forEach((ref, i) => {
          if (!ref) return
          
          if (isDesktop) {
            // Complex animations for desktop - alternating left/right
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
          } else {
            // Simple fade animations for mobile
            gsap.fromTo(ref,
              {
                opacity: 0,
                y: 30
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: ref,
                  start: "top 80%",
                  toggleActions: "play none none none"
                }
              }
            )
          }
        })
      }, sectionRef)
      return () => ctx.revert()
    }, [])
  
    return (
      <section ref={sectionRef} className="bg-white py-20 px-0">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-5xl font-sans font-semibold text-center mb-2">
            Industries <span className="text-sky-500">we serve</span>
          </h2>
          <p className="text-gray-500 text-center mb-16 text-xl max-w-3xl font-sans py-4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <div className="flex flex-col gap-y-8 w-full">
            {industries.map((industry, i) => (
              <div
                key={industry.title}
                ref={el => industryRefs.current[i] = el}
                className={`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 items-stretch w-full px-4 md:px-16 py-8 md:py-12`}
              >
                <div className={`flex justify-center items-center w-full h-full ${i % 2 === 1 ? 'md:order-2' : ''}`}> 
                  <img src={industry.img} alt={industry.title} className="w-full md:w-[32rem] h-56 md:h-79 object-cover rounded-3xl shadow-xl" />
                </div>
                <div className={`flex flex-col justify-center w-full h-full text-left px-2 md:px-8 items-center md:items-center md:text-left`}>
                  <h3 className="text-2xl md:text-4xl font-sans font-semibold mb-4 text-black">{industry.title}</h3>
                  <p className="font-sans  md:text-xl text-gray-400">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }



// CTA Section Component
const CTASection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], { opacity: 0, y: 30 })
        gsap.set(imageRef.current, { opacity: 0, scale: 0.8 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
          .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .to(imageRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.4")
      } else {
        // Simple fade animations for mobile
        gsap.set([titleRef.current, subtitleRef.current, buttonRef.current, imageRef.current], { opacity: 0, y: 30 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .to(imageRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-[#00BFFF] via-[#0099CC] to-[#0077AA] py-16 sm:py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Let's turn your data into your smartest business advisor.
            </h2>
            <p ref={subtitleRef} className="text-xl sm:text-2xl text-white/90 leading-relaxed">
              Talk to the analytics team at Webnox Digital
            </p>
            <div ref={buttonRef}>
              <Link href="/contact-us">
                <button className="bg-white text-[#00BFFF] hover:bg-gray-100 text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right Content - Analytics Visualization */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Background Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-white/10 backdrop-blur-sm"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 lg:w-60 lg:h-60 rounded-full bg-white/20 backdrop-blur-sm"></div>
              </div>
              
              {/* Main Analytics Image */}
              <div className="relative z-10">
                <Image
                  src="/images/data analytics.png"
                  alt="Data Analytics Visualization"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Floating Data Points */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-12 w-3 h-3 bg-white/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-20 left-12 w-5 h-5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-8 right-8 w-3 h-3 bg-white/90 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
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
        question: "How does Webnox Digital approach business analysis?",
        answer: "We begin with process mapping and stakeholder interviews, followed by tools like PESTLE (for external factors) and SWOT (for internal strengths/weaknesses). This structured insight helps drive targeted improvements."
      },
      {
        question: "How do I get started with Analysis services at Webnox Digital?",
        answer: "Simply reach out using our Contact page. We’ll begin with an initial consultation to understand your needs, then outline a structured analysis roadmap—customized for your business."
      },
      {
        question: "What industries do you offer analysis services for?",
        answer: "We work across diverse industries including e-commerce, finance, manufacturing, healthcare, logistics, and emerging tech. Each analysis is customized to the industry’s unique challenges and compliance requirements."
      },
      {
        question: " What’s included in a competitive or market analysis?",
        answer: "You’ll get a comprehensive review of industry trends, competitor strengths, value propositions, and target market segments. This equips you with actionable insights to refine your strategy and improve positioning."
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
const OutsourcingPage = () => {
  return (
    <main className="@/outsourcing">
      <Scroll3DSections>
      <HeroSection />
      <ApproachSection />
      <WhyWebnoxSection />
     
      </Scroll3DSections>
      <IndustriesSection />
     
      <CTASection />
      <FAQSection /> 
      <Footer />
    </main>
  )
}

export default OutsourcingPage