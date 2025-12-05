"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Link from "next/link"
import { useLayoutEffect } from "react"

import Scroll3DSections from "../sections/Components/scrollanimation";



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

  const firstTitlePart = "AI Solutions & "
  const secondTitlePart = " Automation Services."

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
      }}
    >
      {/* Background Image Overlay - Right Side */}
      <div className="absolute right-34 top-1/2 transform -translate-y-1/2 z-10 w-[35%] h-[50%] lg:w-[80%] lg:h-[75%]">
        <Image
          src="/images/aiservice.webp"
          alt="Mobile Development Background"
          fill
          className="object-contain opacity-25"
          priority={false}
        />
      </div>

      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mt-50 z-20">
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
            Transforming businesses with next-gen Artificial Intelligence
          </span>
        </div>

        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-4 leading-tight">
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

          <span className="text-[#00B9FF]">
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
          At WebnoxDigital, we help businesses harness the power of Artificial Intelligence (AI) to drive smarter decisions, automate processes, and deliver exceptional customer experiences. From AI consulting to building custom AI-powered applications, we partner with enterprises, startups, and SMBs to adopt future-ready solutions.
        </p>

        <Link href="/contact-us#contact-form">
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









// Services Grid Section Component
const UseCasesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const useCases = [
    {
      icon: "/images/aiservice1.webp",
      title: " AI Consulting & Strategy",
      description: " Identify opportunities for AI adoption, roadmap design, and implementation strategy.",

    },
    {
      icon: "/images/aiservice2.webp",
      title: " Generative AI Solutions",
      description: "AI-driven text, image, and video generation for marketing, design, and content automation.",

    },
    {
      icon: "/images/aiservice6.webp",
      title: " Machine Learning & Predictive Analytics",
      description: "Data-driven models for demand forecasting, customer segmentation, and fraud detection.",

    },
    {
      icon: "/images/aiservice3.webp",
      title: " AI-Powered Chatbots & Virtual Assistants",
      description: "Enhance customer support with conversational AI.",

    },
    {
      icon: "/images/aiservice10.webp",
      title: " Process Automation with AI",
      description: "Reduce manual work by integrating AI.",

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
    <section ref={sectionRef} className=" font-sans">
      <div className=" px-8">
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
          Our AI Capabilities?
        </h2>
        <p className="text-gray-600 text-lg mb-4 text-center">We specialize in delivering scalable AI solutions across industries:</p>


        <div className="max-w-6xl mx-auto">
          {/* First row with 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-10">
            <div
              ref={el => (cardsRef.current[0] = el)}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg">
                <Image src={useCases[0].icon} alt={useCases[0].title} width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{useCases[0].title}</h3>
              <p className="text-gray-600 text-sm mb-4">{useCases[0].description}</p>
            </div>

            <div
              ref={el => (cardsRef.current[1] = el)}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg">
                <Image src={useCases[1].icon} alt={useCases[1].title} width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{useCases[1].title}</h3>
              <p className="text-gray-600 text-sm mb-4">{useCases[1].description}</p>
            </div>

            <div
              ref={el => (cardsRef.current[2] = el)}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg">
                <Image src={useCases[2].icon} alt={useCases[2].title} width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{useCases[2].title}</h3>
              <p className="text-gray-600 text-sm mb-4">{useCases[2].description}</p>
            </div>
          </div>

          {/* Second row with 2 items, centered like a triangle */}
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              <div
                ref={el => (cardsRef.current[3] = el)}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg">
                  <Image src={useCases[3].icon} alt={useCases[3].title} width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{useCases[3].title}</h3>
                <p className="text-gray-600 text-sm mb-4">{useCases[3].description}</p>
              </div>

              <div
                ref={el => (cardsRef.current[4] = el)}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg">
                  <Image src={useCases[4].icon} alt={useCases[4].title} width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{useCases[4].title}</h3>
                <p className="text-gray-600 text-sm mb-4">{useCases[4].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Grid Section Component
const SecondUseCasesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const useCases = [
    {
      icon: "/images/mobile3.png",
      title: "Programming Languages",
      description: " Python, Next.js, React, PHP, 3js",

    },
    {
      icon: "/images/aiservice8.webp",
      title: "Frameworks & Libraries",
      description: "TensorFlow, PyTorch, Keras, Scikit-Learn",

    },
    {
      icon: "/images/aiservice9.webp",
      title: " Generative AI Models",
      description: " OpenAI GPT, Stable Diffusion, LLaMA, MidJourney APIs",

    },
    {
      icon: "/images/aiservice7.webp",
      title: "Cloud & Platforms",
      description: "AWS AI/ML, Google Cloud AI, Microsoft Azure Cognitive Services",

    },
    {
      icon: "/images/aiservice5.webp",
      title: " Databases",
      description: "MongoDB, MySQL, BigQuery",

    },
    {
      icon: "/images/aiservice11.webp",
      title: "Automation Tools",
      description: "UiPath, n8n, Zapier with AI integration",

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
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight">
          AI Tech Stack We Use
        </h2>


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






















const FAQSection = () => {
  const faqs = [
    {
      question: "What industries can benefit from AI?",
      answer: "AI has applications across almost every industry. For example, healthcare uses AI for predictive diagnostics, manufacturing leverages it for quality control and automation, retail benefits from personalized recommendations and inventory optimization, and finance applies AI for fraud detection and risk analysis. Even sectors like education, real estate, logistics, and marketing are actively adopting AI to improve decision-making, reduce costs, and deliver better customer experiences."
    },
    {
      question: "Is AI secure and compliant?",
      answer: "Yes. AI solutions are designed with enterprise-grade security in mind. We implement data encryption, role-based access control, compliance with GDPR/ISO standards, and regular vulnerability testing. This ensures sensitive data stays protected while AI models remain transparent and compliant. We also build explainable AI systems so businesses can trust the decision-making process instead of facing black-box outputs."
    },
    {
      question: "Can AI integrate with my existing systems?",
      answer: "Absolutely. AI can seamlessly integrate with your CRM, ERP, cloud services, and legacy software through APIs and middleware. Whether you’re using Salesforce, SAP, Microsoft Dynamics, or custom-built platforms, our AI development ensures smooth compatibility. This way, you don’t need to replace your current system — AI simply enhances it with automation, insights, and predictive capabilities."
    }

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







const SpecializedSolutionsSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const imageContainerRef = useRef(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })

      gsap.to([titleRef.current, subtitleRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      const imageContainer = imageContainerRef.current
      const scrollContainer = scrollContainerRef.current

      if (!imageContainer || !scrollContainer) return

      const ensureImagesLoaded = () => new Promise((resolve) => {
        const imgs = imageContainer.querySelectorAll('img')
        let remaining = 0
        const done = () => {
          remaining -= 1
          if (remaining <= 0) resolve()
        }
        imgs.forEach((img) => {
          if (img.complete) return
          remaining += 1
          img.addEventListener('load', done, { once: true })
          img.addEventListener('error', done, { once: true })
        })
        if (remaining === 0) resolve()
      })

      let resizeHandler
      let loadHandler

      const createOrRefreshPin = () => {
        const existing = ScrollTrigger.getById('pinnedSection')
        if (existing) existing.kill()

        // Reset internal scroll before measuring
        scrollContainer.scrollTop = 0

        const totalScrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight

        ScrollTrigger.create({
          id: 'pinnedSection',
          trigger: imageContainer,
          start: "top 25%",
          end: `+=${Math.max(totalScrollHeight * 2, window.innerHeight)}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const scrollProgress = self.progress
            const scrollPosition = scrollProgress * totalScrollHeight
            scrollContainer.scrollTop = scrollPosition
          },
          invalidateOnRefresh: true,
          refreshPriority: -1,
        })

        ScrollTrigger.refresh()
      }

      const init = async () => {
        await ensureImagesLoaded()
        requestAnimationFrame(() => {
          createOrRefreshPin()
        })
      }

      init()

      resizeHandler = () => ScrollTrigger.refresh()
      window.addEventListener('resize', resizeHandler)

      loadHandler = () => ScrollTrigger.refresh()
      window.addEventListener('load', loadHandler)

      return () => {
        window.removeEventListener('resize', resizeHandler)
        window.removeEventListener('load', loadHandler)
      }
    }, sectionRef)

    return () => {
      const existing = ScrollTrigger.getById('pinnedSection')
      if (existing) existing.kill()
      ctx.revert()
    }
  }, [])

  // Handle wheel scrolling for when section is not pinned (fallback)
  useEffect(() => {
    const imageContainer = imageContainerRef.current
    const scrollContainer = scrollContainerRef.current

    if (!imageContainer || !scrollContainer) return

    const handleWheel = (e) => {
      // Check if the section is currently pinned by ScrollTrigger
      const scrollTriggerInstance = ScrollTrigger.getById('pinnedSection')

      // Only handle wheel events if section is not pinned (fallback behavior)
      if (!scrollTriggerInstance || !scrollTriggerInstance.isActive) {
        e.preventDefault()

        const scrollIncrement = e.deltaY * 0.8

        scrollContainer.scrollBy({
          top: scrollIncrement,
          behavior: 'auto'
        })
      }
    }

    imageContainer.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      imageContainer.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const industries = [
    {
      title: "Retail & E-Commerce",
      desc: "AI-powered retail: personalized recommendations, inventory management, and seamless customer experiences.",
      img: "/images/brand5-4.webp"
    },
    {
      title: "Finance & Banking",
      desc: "AI-driven financial services: fraud detection, risk management, and personalized banking experiences.",
      img: "/images/brand5-5.webp"
    },
    {
      title: "Manufacturing & Supply Chain",
      desc: "AI-driven supply chain: predictive maintenance, inventory optimization, and smart logistics.",
      img: "/images/brand5-3.webp"
    },
    {
      title: "Healthcare & Wellness",
      desc: "AI-driven healthcare: personalized treatment plans, predictive analytics, and telemedicine solutions.",
      img: "/images/brand5-1.webp"
    },
    {
      title: "Education & E-Learning",
      desc: "AI-powered learning: personalized content, adaptive assessments, and virtual tutors.",
      img: "/images/brand5-2.webp"
    },

  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Industries We Serve
          </h2>
        </div>

        {/* Background Image Section with Scrollable Cards */}
        <div ref={imageContainerRef} className="relative w-full max-w-6xl mx-auto mb-16 cursor-pointer overflow-hidden">
          {/* Background Image */}
          <div className="relative  ">
            <img
              src="/images/ecommerce23.webp"
              alt="E-commerce Solutions"
              className="w-full h-auto object-contain"
            />

            {/* Overlay with Parallax Scrollable Cards */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div
                ref={scrollContainerRef}
                className="w-full h-full overflow-y-auto p-6 scroll-container"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  scrollBehavior: 'auto' // Ensure smooth internal scrolling
                }}
              >
                <div ref={cardRef} className="space-y-0">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`group flex flex-col lg:flex-row items-center gap-8  ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                        }   min-h-[500px] flex-shrink-0 mb-8`}
                    >
                      {/* Image Side */}
                      <div className="w-full lg:w-1/2">
                        <div className="relative overflow-hidden rounded-5xl">
                          <img
                            src={industry.img}
                            alt={industry.title}
                            className="w-full h-48 lg:h-56 object-contain"
                          />
                          <div className="absolute inset-0 rounded-"></div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-90% lg:w-1/2 text-center lg:text-center px-4 lg:px-6">
                        <h3 className="text-2xl lg:text-4xl font-bold text-black mb-4">
                          {industry.title}
                        </h3>
                        <p className="text-gray-600 text-xl leading-relaxed">
                          {industry.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hide Scrollbar Styles */}
        <style jsx>{`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>


      </div>
    </section>
  )
}



const AIServicesPage = () => {
  return (
    <main className="@/ai-services">
      <HeroSection />
      <Scroll3DSections>
        <UseCasesSection />
        <SecondUseCasesSection />
      </Scroll3DSections>
      <SpecializedSolutionsSection />
      <FAQSection />
    </main>
  )
}

export default AIServicesPage