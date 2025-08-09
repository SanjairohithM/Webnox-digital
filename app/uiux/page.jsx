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
         Craft hyper-interactive, visually stunning 3D websites that engage, convert, and stand out in a sea of 2D sameness. At Webnox Digital, we blend creative brilliance with technical mastery to transform traditional browsing into immersive storytelling experiences.
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
            Let Your Brand Speak in 3D
            </h2>
            <p className="text-lg md:text-xl  text-white/90 mb-12 max-w-3xl leading-relaxed text-left ml-4 md:-ml-28">
            Want to build an unforgettable web experience that drives attention and conversions?          </p>
            {/* "Get Started" button left-aligned below */}
            <div className="flex">
              <button className="bg-black hover:bg-gray-800 text-white font-semibold px-16 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl ml-95 ">
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









const CustomWebPage = () => {
  return (
    <main className="@/customweb">
      <HeroSection />


     
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}

export default CustomWebPage