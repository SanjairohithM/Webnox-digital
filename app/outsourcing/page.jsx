"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
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
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/outsource.webp"
          alt="Outsourcing background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Strong white fade at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white"></div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4">
        <h1 ref={titleRef} className="text-2xl md:text-4xl lg:text-5xl  font-sans font-bold text-black mb-6">
          Outsourcing Services by <span className="text-[#13b4ee]">Webnox Digital</span>
        </h1>
        <p
          ref={descRef}
          className="text-[#222] text-lg md:text-xl max-w-2xl font-sans leading-relaxed text-center mx-auto tracking-wide mt-4"
        >
          At Webnox Digital, we understand that managing everything in-house can slow down your business growth. That’s why we offer smart, efficient, and affordable outsourcing solutions to help you stay focused on what matters most: growing your business.
        </p>
      </div>
    </section>
  )
}

// Why Choose Section Component
const WhyChooseSection = () => {
  const sectionRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const featuresRef = useRef([])

  const features = [
    {
      number: "1",
      title: "Skilled Professionals",
      desc: "Get access to experienced designers, developers, digital marketers, and support teams without the cost of hiring."
    },
    {
      number: "2",
      title: "Scalable Solutions",
      desc: "Whether you're a startup or an enterprise, our services scale with your needs."
    },
    {
      number: "3",
      title: "Time-Zone Advantage",
      desc: "With our offshore team, your work progresses even after your office closes."
    },
    {
      number: "4",
      title: "Reliable Communication",
      desc: "Daily updates, clear reporting, and direct communication channels to keep you in the loop."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([
        subtitleRef.current,
        titleRef.current,
        descRef.current,
        buttonRef.current,
        ...featuresRef.current
      ], { opacity: 0, y: 30 })
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
        .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
        .to(featuresRef.current, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative min-h-[500px]">
        
        {/* Left Column Content */}
        <div className="absolute left-0 top-0 w-full lg:w-[40%] flex flex-col items-start">
          <span ref={subtitleRef} className="text-[#13b4ee] text-sm font-semibold uppercase mb-2 tracking-wide">Why Choose</span>
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-black font-sans text-black mb-4 leading-tight text-left">Webnox for Outsourcing</h2>
          <p ref={descRef} className="text-[#6b6b6b] text-base md:text-lg font-sans font-normal leading-relaxed mb-6 text-left max-w-md">
            At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster, operate efficiently, and focus on their core strengths.
          </p>
          <button ref={buttonRef} className="bg-[#13b4ee] text-white px-7 py-3 rounded-full font-semibold text-base shadow-md hover:bg-[#0ea5e9] transition mb-8">
            Get Started
          </button>
          
          {/* First Feature - Below Button */}
          <div
            ref={el => featuresRef.current[0] = el}
            className="relative flex flex-col items-start justify-start max-w-sm"
          >
            {/* Large faint number */}
            <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
              1
            </span>
            {/* Feature content */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[0].title}</h3>
              <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug max-w-xs">
                {features[0].desc}
              </p>
            </div>
          </div>

          {/* Second Feature - Higher and more right of 1 */}
          <div
            ref={el => featuresRef.current[1] = el}
            className="absolute left-[380px] top-[250px] flex flex-col items-start justify-start w-[320px]"
          >
            {/* Large faint number */}
            <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
              2
            </span>
            {/* Feature content */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[1].title}</h3>
              <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug">
                {features[1].desc}
              </p>
            </div>
          </div>

        {/* Third Feature - Time-Zone Advantage */}
        <div
          ref={el => featuresRef.current[2] = el}
          className="absolute left-[820px] top-[150px] flex flex-col items-start justify-start w-[320px]"
        >
          {/* Large faint number */}
          <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
            3
          </span>
          {/* Feature content */}
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[2].title}</h3>
            <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug">
              {features[2].desc}
            </p>
          </div>
        </div>

        {/* Fourth Feature - Reliable Communication */}
        <div
          ref={el => featuresRef.current[3] = el}
          className="absolute left-[1120px] top-[10px] flex flex-col items-start justify-start w-[320px]"
        >
          {/* Large faint number */}
          <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
            4
          </span>
          {/* Feature content */}
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[3].title}</h3>
            <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug">
              {features[3].desc}
            </p>
          </div>
        </div>
        </div>

        {/* Connection Points and SVG Curve */}
        <div className="absolute inset-0 pointer-events-none z-5">
          {/* Connection Dots */}
          {/* Dot 1 - Above Feature 1 (Skilled Professionals) */}
          <div className="absolute left-[80px] top-[320px] w-6 h-6 bg-white border-3 border-[#13b4ee] rounded-full"></div>
          
          {/* Dot 2 - Above Feature 2 (Scalable Solutions) */}
          <div className="absolute left-[460px] top-[220px] w-6 h-6 bg-white border-3 border-[#13b4ee] rounded-full"></div>
          
          {/* Dot 3 - Above Feature 3 (Time-Zone Advantage) */}
          <div className="absolute left-[900px] top-[120px] w-6 h-6 bg-white border-3 border-[#13b4ee] rounded-full"></div>
          
          {/* Dot 4 - Above Feature 4 (Reliable Communication) */}
          <div className="absolute left-[1200px] top-[-20px] w-6 h-6 bg-white border-3 border-[#13b4ee] rounded-full"></div>
          
          {/* SVG Curve connecting all 4 dots */}
          <svg
            viewBox="0 0 1400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
          >
            <path
              d="M88 328 Q 250 270 468 228 Q 650 170 908 128 Q 1050 50 1208 -12"
              stroke="#13b4ee"
              strokeWidth="3"
              fill="none"
              strokeDasharray="0"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

// Approach Cards Section Component  
const ApproachSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const approaches = [
    { title: "Agility", desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster." },
    { title: "Transparency", desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster." },
    { title: "Cost Efficiency", desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster." },
    { title: "Expertise Access", desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster." },
    { title: "Data Security", desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster." },
    { title: "Agility", desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster." }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([subtitleRef.current, titleRef.current], { opacity: 0, y: 30 })
      gsap.set(cardsRef.current, { opacity: 0, y: 40 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .to(cardsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <p ref={subtitleRef} className="text-cyan-500 font-medium text-lg mb-4">What we offer</p>
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Our outsourcing approach <br />focuses on
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{approach.title}</h3>
              <p className="text-gray-600 leading-relaxed">{approach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Ticker Component
const TickerSection = () => {
  const tickerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(tickerRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: tickerRef.current,
            start: "top 90%",
          }
        }
      )
    }, tickerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={tickerRef} className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-700 leading-tight">
            14+ Years of Industry Experience • 98% Client Retention Rate • Proven Results Across 15+ Industries • Transparent Communication & Reporting
          </p>
        </div>
      </div>
    </section>
  )
}

// FAQ Section Component
const FAQSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: "The expense windows adapted sir. Wrong widen drawn.",
      answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her."
    },
    { question: "Six curiosity day assurance bed necessary?", answer: "" },
    { question: "Produce say the ten moments parties?", answer: "" },
    { question: "Simple innate summer fat appear basket his desire joy?", answer: "" },
    { question: "Outward clothes promise at gravity do excited?", answer: "" }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Title */}
          <div>
            <h2 ref={titleRef} className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Frequently<br />asked questions
            </h2>
          </div>

          {/* Middle - FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 bg-white"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600">+</span>
                    </button>
                  </div>
                  {index === 0 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="mt-12 lg:ml-auto lg:max-w-md">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Do you have more questions?</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              End-to-end payments and financial management in a single solution. 
              Meet the right platform to help realize.
            </p>
            <button className="w-full bg-cyan-500 text-white py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
              Shoot a Direct Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}



// Main Outsourcing Page Component
const OutsourcingPage = () => {
  return (
    <main className="@/outsourcing">
      <HeroSection />
      <WhyChooseSection />
      <ApproachSection />
      <TickerSection />
      <FAQSection />
    </main>
  )
}

export default OutsourcingPage