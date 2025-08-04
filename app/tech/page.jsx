"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import FAQSection from "../components/FAQSection";
import TickerSection from "../components/TickerSection";
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        gsap.set([titleRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 40 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })
        
        tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      } else {
        // Simple fade animations for mobile
        gsap.set([titleRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 30 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          }
        })
        
        tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(descRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      }
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden "
      style={{
        background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
      }}
    >
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-[#00B9FF] mb-4 leading-tight">
          Explore the technologies<br />shaping tomorrow
        </h1>
        <p
          ref={descRef}
          className="text-gray-700 text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-center mx-auto mb-8"
        >
          and let's build with them today.
        </p>
        <button
          ref={buttonRef}
          className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          Building What's Next, Now
        </button>
      </div>
    </section>
  )
}


// Technology Services Section Component  
const TechnologySection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const technologies = [
    { 
      title: "Artificial Intelligence & Machine Learning", 
      desc: "From predictive insights to intelligent automation, we develop AI solutions that adapt, learn, and scale with your business. Smarter decisions. Faster results. Real-time adaptability",
      image: "/images/tech1.webp"
    },
    { 
      title: "Blockchain Development", 
      desc: "Build secure, decentralized applications that bring transparency, trust, and traceability to your digital transactions. Ideal for fintech, logistics, supply chain, and identity systems.",
      image: "/images/tech2.webp"
    },
    { 
      title: "Internet of Things (IoT)", 
      desc: "We connect physical devices to digital systems for real-time monitoring, automation, and data-driven operations. Smart factories, connected homes, and logistics tracking built your way.",
      image: "/images/tech3.webp"
    },
    { 
      title: "AR/VR & Immersive Experiences", 
      desc: "Design augmented and virtual environments for training, shopping, learning, and customer engagement. Create digital experiences that feel unforgettable.",
      image: "/images/tech4.webp"
    },
    { 
      title: "Voice & Conversational Interfaces", 
      desc: "Voice-enabled apps, smart assistants, and NLP-powered bots for frictionless communication with users. Smoother user interactions that feel natural and intuitive.",
      image: "/images/tech5.webp"
    },
    { 
      title: "Cloud Engineering", 
      desc: "Build scalable, secure apps designed to live and grow in the cloud. Faster deployments, greater resilience, and cost-effective scalability.",
      image: "/images/tech6.webp"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        // Set initial positions for cards based on their grid position
        gsap.set(cardsRef.current[0], { opacity: 0, x: -200 }) // Card 1 (first column) - from left
        gsap.set(cardsRef.current[1], { opacity: 0, y: 100 })  // Card 2 (second column) - from bottom
        gsap.set(cardsRef.current[2], { opacity: 0, x: 200 })  // Card 3 (third column) - from right
        gsap.set(cardsRef.current[3], { opacity: 0, x: -200 }) // Card 4 (first column) - from left
        gsap.set(cardsRef.current[4], { opacity: 0, y: 100 })  // Card 5 (second column) - from bottom
        gsap.set(cardsRef.current[5], { opacity: 0, x: 200 })  // Card 6 (third column) - from right
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        // Animate first column cards (1 & 4) together from left
        tl.to([cardsRef.current[0], cardsRef.current[3]], { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: "power2.out" 
        })
        // Animate second column cards (2 & 5) together from bottom
        .to([cardsRef.current[1], cardsRef.current[4]], { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out" 
        }, "-=0.3")
        // Animate third column cards (3 & 6) together from right
        .to([cardsRef.current[2], cardsRef.current[5]], { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: "power2.out" 
        }, "-=0.3")
      } else {
        // Simple fade animations for mobile
        const mobileCards = cardsRef.current.filter(Boolean)
        
        gsap.set(mobileCards, { opacity: 0, y: 30 })
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        })
        
        if (mobileCards.length > 0) {
          tl.to(mobileCards, { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            stagger: 0.15, 
            ease: "power2.out" 
          })
        }
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white my-20 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center  rounded-2xl">
                <Image src={tech.image} alt={tech.title} width={64} height={64} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">{tech.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{tech.desc}</p>
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
      {/* Background Image - Desktop Only */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/Clientstech.png"
          alt="CTA Background"
          fill
          className="object-contain w-full h-full"
          priority
        />
      </div>
      
      {/* Blue Background - Mobile Only */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-br from-[#00B9FF] to-[#0090CC]"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col justify-center min-h-[500px] px-4"
      >
        {/* Desktop Layout - Keep existing perfect design */}
        <div className="hidden lg:flex flex-col items-start text-left max-w-4xl w-full mx-auto">
          {/* "Start Your Project" button at right top */}
          <div className="flex justify-end">
            <button
              className="bg-white hover:bg-gray-50 text-[#00B9FF] font-semibold px-18 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white"
              style={{
                position: "absolute",
                top: "165px",
                right: "140px",
                zIndex: 20,
              }}
            >
              Start Your Project
            </button>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white pt-25 leading-tight text-left">
            Let's Build the Future Together
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed text-left">
            Ready to transform your business with cutting-edge technology? Let's discuss how we can bring your vision to life.
          </p>
          {/* "Get Started" button left-aligned below */}
          <div className="flex">
            <button className="bg-black hover:bg-gray-800 text-white font-semibold px-16 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl ml-95 -mt-4 ">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Card Layout */}
        <div className="block lg:hidden">
          <div className="max-w-md mx-auto">
            {/* Card Container */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/30">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight text-center">
                Let's Build the Future Together
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center">
                Ready to transform your business with cutting-edge technology? Let's discuss how we can bring your vision to life.
              </p>
              
              {/* Buttons in card */}
              <div className="flex flex-col space-y-3">
                <button className="bg-[#00B9FF] hover:bg-[#0090CC] text-white font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                  Get Started
                </button>
                <button className="bg-white hover:bg-gray-50 text-[#00B9FF] font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-[#00B9FF] w-full">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const TechPage = () => {
  return (
    <main className="@/tech">
      <HeroSection />
  
      <TechnologySection />
      
      <CTASection />
   
      <Footer />
    </main>
  )
}

export default TechPage