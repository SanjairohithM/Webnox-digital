"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Footer from "../sections/Footer";
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
    <section ref={heroRef} className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden ">
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
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 mt-15">
        <h1 ref={titleRef} className="text-2xl md:text-4xl lg:text-5xl font-sans font-bold mb-6">
          <span className="text-[#00BFFF]">Still doing repetitive tasks</span>
          <br />
          <span className="text-black">manually?</span>
        </h1>
        <p
          ref={descRef}
          className="text-[#333] text-lg md:text-xl max-w-4xl font-sans leading-relaxed text-center mx-auto tracking-wide mt-4 mb-8"
        >
          Juggling Google Sheets, CRMs, APIs, and email without sync?<br/>
          Your business deserves better.<br/><br/>
          At Webnox Digital, we help startups, agencies, SaaS companies, and enterprises automate daily operations, marketing, and data flows using the open-source power of n8n.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button className="bg-[#00BFFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0099CC] transition-colors duration-300">
            Book Free Automation Audit
          </button>
          <button className="border-2 border-[#00BFFF] text-[#00BFFF] px-8 py-3 rounded-lg font-semibold hover:bg-[#00BFFF] hover:text-white transition-colors duration-300">
            Get My Workflow Plan
          </button>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-sans">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-sans">{feature.desc}</p>
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([leftRef.current, rightRef.current], { opacity: 0, y: 40 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl
        .to(leftRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to(rightRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* With Webnox Automation */}
          <div 
            ref={leftRef}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6 font-sans">
              With Webnox Automation
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-lg">•</span>
                <span className="text-blue-800 font-medium">Save 100+ hours/month</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-lg">•</span>
                <span className="text-blue-800 font-medium">Reduce human error by 90%</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-lg">•</span>
                <span className="text-blue-800 font-medium">Cut costs on SaaS subscriptions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-lg">•</span>
                <span className="text-blue-800 font-medium">Get real-time data & alerts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-lg">•</span>
                <span className="text-blue-800 font-medium">Focus your team on what matters</span>
              </li>
            </ul>
          </div>

          {/* Without Automation */}
          <div 
            ref={rightRef}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-cyan-900 mb-6 font-sans">
              Without Automation
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-cyan-600 mr-3 text-lg">•</span>
                <span className="text-cyan-800 font-medium">Repetitive Work Drains Productivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-3 text-lg">•</span>
                <span className="text-cyan-800 font-medium">Data Scattered Everywhere</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-3 text-lg">•</span>
                <span className="text-cyan-800 font-medium">No Alerts, No Action</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-3 text-lg">•</span>
                <span className="text-cyan-800 font-medium">Zero Scalability</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-3 text-lg">•</span>
                <span className="text-cyan-800 font-medium">More Tools = More Confusion</span>
              </li>
            </ul>
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
            <h2 className="text-3xl md:text-4xl lg:text-4xl  font-bold text-white pt-25 leading-tight text-left ml-30">
            Ready to Save Time, Cut Errors & Scale Faster?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed text-left ml-30">
            Let's build your first n8n workflow — or improve what you've started.            </p>
            {/* Buttons side by side */}
            <div className="flex gap-8 ml-50  ">
              <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Book a Free Automation Audit Today
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#00B9FF] font-semibold px-6 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white">
                Get My Workflow Plan Now
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
                    Book a Free Automation Audit Today
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-[#00B9FF] font-semibold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-[#00B9FF] w-full">
                    Get My Workflow Plan Now
                  </button>
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
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At Webnox Digital, we build intelligent systems that scale with you using n8n + A1 + your business logic.
        </p>
      </div>
    </section>
  )
}

// Main Outsourcing Page Component
    const n8nPage = () => {
  return (
    <main className="@/n8n">
      <HeroSection />
      
      <WhyWebnoxSection />
      <BrandingPlanSteps />
      <AutomationComparisonSection />
      <CTASection />
      <WhyN8nWebnoxSection />
    
  
      <Footer />
    </main>
  )
}

export default n8nPage