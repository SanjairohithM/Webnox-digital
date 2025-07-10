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
    <section ref={heroRef} className="relative bg-white py-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Outsourcing Services by Webnox Digital
        </h1>
        <p ref={descRef} className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          At Webnox Digital, we understand that managing everything in-house can slow down your business growth. 
          That's why we offer smart, efficient, and affordable outsourcing solutions to help you stay focused on what 
          matters most growing your business.
        </p>
      </div>
    </section>
  )
}

// Why Choose Section Component
const WhyChooseSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const cardsRef = useRef([])

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
      gsap.set([titleRef.current, subtitleRef.current, descRef.current, buttonRef.current], { opacity: 0, y: 30 })
      gsap.set(cardsRef.current, { opacity: 0, y: 50 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(cardsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }, "-=0.4")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 relative">
      {/* Decorative Circle */}
      <div className="absolute top-16 right-32 w-96 h-96 bg-blue-50 rounded-full opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p ref={subtitleRef} className="text-cyan-500 font-medium text-lg mb-4">WHY CHOOSE</p>
            <h2 ref={titleRef} className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Webnox for Outsourcing
            </h2>
            <p ref={descRef} className="text-gray-600 text-lg leading-relaxed mb-8">
              At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. 
              Our tailored services are designed to help businesses scale faster, operate efficiently, 
              and focus on their core strengths.
            </p>
            <div ref={buttonRef}>
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-cyan-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="relative"
              >
                {/* Large Number */}
                <div className="text-9xl font-black text-gray-900 opacity-20 absolute -top-4 -left-4">
                  {feature.number}
                </div>
                
                {/* Card Content */}
                <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-gray-300 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
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