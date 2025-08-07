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
          src="/images/ecommerce1.webp"
          alt="Software Development Background"
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
            Trusted by 500+ E-commerce Brands
          </span>
        </div>

        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-4 leading-tight">
          <span className="text-[#00B9FF]">
            {"Powering E-Commerce That Performs,".split("").map((char, index) => (
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
            {"Converts ".split("").map((char, index) => (
              <span
                key={index + "Powering E-Commerce That Performs,".length}
                ref={(el) => (titleLettersRef.current[index + "Powering E-Commerce That Performs,".length] = el)}
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
            {"& ".split("").map((char, index) => (
              <span
                key={index + "Powering E-Commerce That Performs, Converts ".length}
                ref={(el) => (titleLettersRef.current[index + "Powering E-Commerce That Performs, Converts ".length] = el)}
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
            {"Scales".split("").map((char, index) => (
              <span
                key={index + "Powering E-Commerce That Performs, Converts & ".length}
                ref={(el) => (titleLettersRef.current[index + "Powering E-Commerce That Performs, Converts & ".length] = el)}
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
          You have the vision. We build the engine behind it. At Webnox Digital, we craft conversion-driven shopping experiences that scale with your business
        </p>
        <button
          ref={buttonRef}
          className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          Get Free Store Audit
        </button>
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
  

  
// Top 3 Framework Section Component
const FrameworkSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])
  const bgImageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation timeline for content
      gsap.set([titleRef.current, subtitleRef.current, ...cardsRef.current], { 
        opacity: 0, 
        y: 30 
      })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(titleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      })
      .to(subtitleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      }, "-=0.3")
      .to(cardsRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out",
        stagger: 0.2 
      }, "-=0.3")

      // Continuous rotation animation for background image
      gsap.to(bgImageRef.current, {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
      })
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  const frameworks = [
    {
      icon: "/images/ecommerce3.png",
     
      title: "Understand & Strategize",
      description: "We start with a deep discovery phase. We study your business model, target audience, and competitors to identify the best growth opportunities aligned with your goals."
    },
    {
      icon: "/images/ecommerce4.png",
     
      title: "Build, Integrate & Optimize",
      description: "From storefront to checkout, every pixel is designed for performance. Our developers build robust, responsive and scalable e-commerce solutions using leading platforms and automation tools."
    },
    {
        icon: "/images/ecommerce5.png",
      
      title: "Launch, Market & Scale",
      description: "We don't just go live-off your site. We monitor, optimize and launch it from varying ROI-based, SEO optimization, so driving paid campaigns, we make sure your store becomes a revenue engine."
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Background Image - Center Only */}
      <div ref={bgImageRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] z-0">
        <Image
          src="/images/ecommerce2.webp"
          alt="E-commerce Background"
          fill
          className="object-contain object-center"
          priority={false}
        />
      </div>
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30 z-5"></div>
      <div className="relative z-10 px-4 font-sans">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF] inline-flex items-center gap-2">
          <Image
            src="/images/customer1.png"
            alt="E-commerce Icon"
            width={20}
            height={20}
            className="w-4 h-4 md:w-5 md:h-5 object-contain "
          />
          <span className="text-[#00B9FF] text-sm md:text-base font-medium">
          Our Development Story
          </span>
          </div>
        </div>

        {/* Title */}
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-gray-900"
        >
          Top 3 Framework to Take You from{" "}
          <br className="hidden md:block" />
          <span className="text-[#00B9FF]">Idea to Revenue</span>
        </h2>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-gray-600 text-lg md:text-xl text-center max-w-4xl mx-auto mb-16 leading-relaxed"
        >
          Whether you're a startup aiming to launch your first store or an enterprise brand 
          platforming to scale globally, our e-commerce experts walk you through a 
          complete transformation journey.
        </p>

        {/* Framework Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Card 1 - Understand & Strategize */}
          <div 
            ref={(el) => (cardsRef.current[0] = el)}
            className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full md:w-70% md:mt-50"
          >
            {/* Icon */}
            <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Image src={frameworks[0].icon} alt={frameworks[0].title} width={64} height={64} />
            </div>
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
              {frameworks[0].title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-center">
              {frameworks[0].description}
            </p>
          </div>

          {/* Card 2 - Build, Integrate & Optimize */}
          <div 
            ref={(el) => (cardsRef.current[1] = el)}
            className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full md:w-70% "
          >
            {/* Icon */}
            <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Image src={frameworks[1].icon} alt={frameworks[1].title} width={64} height={64} />
            </div>
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
              {frameworks[1].title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-center">
              {frameworks[1].description}
            </p>
          </div>

          {/* Card 3 - Launch, Market & Scale */}
          <div 
            ref={(el) => (cardsRef.current[2] = el)}
            className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full md:w-70% md:mt-50"
          >
            {/* Icon */}
            <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Image src={frameworks[2].icon} alt={frameworks[2].title} width={64} height={64} />
            </div>
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
              {frameworks[2].title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-center">
              {frameworks[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}




// Technologies Section Component
const TechnologiesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const techCardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation timeline for content
      gsap.set([titleRef.current, subtitleRef.current, ...techCardsRef.current], { 
        opacity: 0, 
        y: 30 
      })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(titleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      })
      .to(subtitleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      }, "-=0.3")
      .to(techCardsRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out",
        stagger: 0.1 
      }, "-=0.3")
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  const technologies = [
    {
      image: "/images/ecommerce11.webp",
      title: "Shopify",
      subtitle: "E-commerce Platform"
    },
    {
      image: "/images/ecommerce10.webp", 
      title: "WooCommerce",
      subtitle: "WordPress E-commerce"
    },
    {
      image: "/images/ecommerce9.webp",
      title: "React + Node.js",
      subtitle: "Custom Development"
    },
    {
      image: "/images/ecommerce7.webp",
      title: "Stripe & PayPal",
      subtitle: "Payment Processing"
    },
    {
      image: "/images/ecommerce12.webp",
      title: "WhatsApp Commerce",
      subtitle: "Social Commerce"
    },
    {
      image: "/images/ecommerce8.webp",
      title: "AI Chatbots",
      subtitle: "Customer Support"
    },
    {
      image: "/images/ecommerce13.webp",
      title: "ERP Integration",
      subtitle: "Business Systems"
    },
    {
      image: "/images/ecommerce6.webp",
      title: "Mobile Apps",
      subtitle: "iOS & Android"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 font-sans "
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900"
        >
          Technologies We Use
        </h2>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mx-auto mb-16"
        >
          Cutting-edge tools and platforms for maximum performance
        </p>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              ref={(el) => (techCardsRef.current[index] = el)}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:scale-105 h-48 bg-white"
            >
              {/* Full Card Image */}
              <div className="absolute inset-0">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300 opacity-80"
                />
              </div>

              {/* Overlay - Slides up from bottom on hover */}
              <div className="absolute inset-x-0 -bottom-5  bg-gradient-to-t from-white/90 via-white/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-end text-center p-4 pb-6">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-black ">
                  {tech.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-600">
                  {tech.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




// Technology Should Work for You Section Component
const TechnologyWorkSection = () => {
    const sectionRef = useRef(null)
    const badgeRef = useRef(null)
    const titleRef = useRef(null)
    const descRefsArray = useRef([])
    const imageRef = useRef(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        // Check if we're on desktop (lg breakpoint and above)
        const isDesktop = window.innerWidth >= 1024
        
        if (isDesktop) {
          // Complex animations for desktop
          gsap.set(badgeRef.current, { opacity: 0, y: 30 })
          gsap.set(titleRef.current, { opacity: 0, x: 100 }) // From right
          gsap.set(descRefsArray.current, { opacity: 0, y: 80 })   // From bottom
          gsap.set(imageRef.current, { opacity: 0, y: 30 })  // Normal fade
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            }
          })
          
          tl.to(imageRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
            .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
            .to(titleRef.current, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.3") // Slide from right
            .to(descRefsArray.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 }, "-=0.4")  // Slide from bottom with stagger
        } else {
          // Simple fade animations for mobile
          gsap.set(badgeRef.current, { opacity: 0, y: 20 })
          gsap.set(titleRef.current, { opacity: 0, x: 50 })  // From right (less distance)
          gsap.set(descRefsArray.current, { opacity: 0, y: 40 })   // From bottom (less distance)
          gsap.set(imageRef.current, { opacity: 0, y: 20 })  // Normal fade
          
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            }
          })
          
          tl.to(imageRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
            .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
            .to(titleRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }, "-=0.2") // Slide from right
            .to(descRefsArray.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }, "-=0.3")  // Slide from bottom with stagger
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
        
                       <div className="w-full px-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div ref={imageRef} className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
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
                    src="/images/ecommerce14.webp"
                    alt="Technology Working for You"
                    className="w-full h-auto object-contain transition-all duration-700 ease-out"
                    loading="lazy"
                    style={{ backfaceVisibility: 'hidden' }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
              {/* Badge */}
              <div ref={badgeRef} className="flex justify-center lg:justify-start mb-6 lg:mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6F7FD] rounded-full border border-[#00B9FF]">
                  <Image src="/images/customer1.png" alt="Digital Innovation" width={16} height={16} className="w-4 h-4 object-contain" />
                  <span className="text-[#00B9FF] text-sm font-medium">
                    Why Choose Webnox
                  </span>
                </div>
              </div>

              <h2 ref={titleRef} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-semibold text-gray-900 mb-8 lg:mb-10 leading-tight whitespace-nowrap lg:whitespace-normal w-full lg:w-auto">
                Why Brands Choose Webnox as Their E-Commerce Development Partner
              </h2>
              
              {/* Feature Points */}
              <div className="space-y-4 lg:space-y-6">
                <p
                  ref={(el) => (descRefsArray.current[0] = el)}
                  className="text-gray-700 text-base md:text-lg lg:text-xl font-sans leading-relaxed flex items-center justify-center lg:justify-start"
                >
                  <span className="w-2 h-2 bg-[#00B9FF] rounded-full mr-3 flex-shrink-0"></span>
                  Certified developers & UX specialists
                </p>
                <p
                  ref={(el) => (descRefsArray.current[1] = el)}
                  className="text-gray-700 text-base md:text-lg lg:text-xl font-sans leading-relaxed flex items-center justify-center lg:justify-start"
                >
                  <span className="w-2 h-2 bg-[#00B9FF] rounded-full mr-3 flex-shrink-0"></span>
                  AI-driven automation and analytics
                </p>
                <p
                  ref={(el) => (descRefsArray.current[2] = el)}
                  className="text-gray-700 text-base md:text-lg lg:text-xl font-sans leading-relaxed flex items-center justify-center lg:justify-start"
                >
                  <span className="w-2 h-2 bg-[#00B9FF] rounded-full mr-3 flex-shrink-0"></span>
                  10+ years building e-commerce across 12+ countries
                </p>
                <p
                  ref={(el) => (descRefsArray.current[3] = el)}
                  className="text-gray-700 text-base md:text-lg lg:text-xl font-sans leading-relaxed flex items-center justify-center lg:justify-start"
                >
                  <span className="w-2 h-2 bg-[#00B9FF] rounded-full mr-3 flex-shrink-0"></span>
                  Strong portfolio in Retail, Food, Fashion, SaaS, and Wholesale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }


  const MarketingStackSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const cardsRef = useRef([])
    const cardBackgroundsRef = useRef([])
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        // Filter valid cards
        const validCards = cardsRef.current.filter(card => card !== null)
        const validBackgrounds = cardBackgroundsRef.current.filter(bg => bg !== null)
        
        gsap.set(titleRef.current, { opacity: 0, y: 30 })
        gsap.set(validCards, { opacity: 0, y: 50, scale: 0.9 })
        
        // Set initial state for card backgrounds
        gsap.set(validBackgrounds, { scaleX: 0, transformOrigin: "left center" })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        tl
          .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
          .to(validCards, { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.6, 
            stagger: 0.1, 
            ease: "power2.out" 
          }, "-=0.4")
  
        // Add hover animations for each card
        validCards.forEach((card, index) => {
          const background = validBackgrounds[index]
          if (background) {
            card.addEventListener('mouseenter', () => {
              gsap.to(background, { 
                scaleX: 1, 
                duration: 0.4, 
                ease: "power2.out" 
              })
            })
            
            card.addEventListener('mouseleave', () => {
              gsap.to(background, { 
                scaleX: 0, 
                duration: 0.3, 
                ease: "power2.in" 
              })
            })
          }
        })
      }, sectionRef)
      return () => ctx.revert()
    }, [])
  
    const marketingStackItems = [
      "B2C & B2B Portals",
      "Multi-vendor Marketplace", 
      "Subscription Commerce",
      "International Stores",
      "Wholesale Portals",
      "Product Configurators",
      "Mobile Commerce Apps",
      "Progressive Web Apps",
      "Influencer and UGC Amplification"
    ]
  
    return (
      <section 
        ref={sectionRef} 
        className="py-16 px-4 font-sans"
      
      >
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16 leading-tight">
            Our Next-Gen Marketing Stack Includes
          </h2>
          
          {/* Marketing Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingStackItems.map((item, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="relative rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden group"
                style={{
                  background: "linear-gradient(90deg, #00B9FF 0%, rgba(0, 185, 255, 0.6) 20%, rgba(0, 185, 255, 0.2) 35%, rgba(255, 255, 255, 0.9) 60%, #ffffff 100%)"
                }}
              >
                {/* Animated full blue background for hover */}
                <div 
                  ref={el => cardBackgroundsRef.current[index] = el}
                  className="absolute inset-0 bg-[#00B9FF] rounded-2xl"
                  style={{ scaleX: 0, transformOrigin: "left center" }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold leading-tight text-gray-800 group-hover:text-white transition-colors duration-300">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

const EcommercePage = () => {
  return (
    <main className="@/ecommerce">
      <HeroSection />
      <FrameworkSection />
      <TechnologiesSection />
      <TechnologyWorkSection />
      <MarketingStackSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

export default EcommercePage