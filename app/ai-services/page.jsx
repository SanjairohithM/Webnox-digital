"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Link from "next/link"

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

        <Link href="/contact-us">
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

const IndustriesSection = () => {
    const industryRefs = useRef([])
  
    useGSAP(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        industryRefs.current.forEach((ref, i) => {
          if (!ref) return
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
        })
      } else {
        // Individual scroll-triggered fade animations for mobile
        const validRefs = industryRefs.current.filter(Boolean)
        
        gsap.set(validRefs, { opacity: 0 })
        
        // Animate each card individually when it comes into view
        validRefs.forEach((ref, index) => {
          if (ref) {
            gsap.to(ref, {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            })
          }
        })
      }
    }, [])
  
    return (
      <section className="bg-white py-20 px-0">
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
      answer: "Absolutely. AI can seamlessly integrate with your CRM, ERP, cloud services, and legacy software through APIs and middleware. Whether you’re using Salesforce, SAP, Microsoft Dynamics, or custom-built platforms, our AI development ensures smooth compatibility. This way, you don’t need to replace your current system — AI simply enhances it with automation, insights, and predictive capabilities."}
   
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




const Scroll3DSections = ({ children }) => {
  const containerRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const mm = ScrollTrigger.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const sections = sectionsRef.current.filter(Boolean)
        sections.forEach((sectionEl) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionEl,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            }
          })

          tl.fromTo(
            sectionEl,
            {
              opacity: 0,
              y: 60,
              rotationX: 8,
              z: -80,
              transformPerspective: 1000,
              transformOrigin: "50% 50%",
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              z: 0,
              ease: "power2.out",
              duration: 1,
            }
          ).to(sectionEl, {
            opacity: 0,
            y: -60,
            rotationX: -6,
            z: -80,
            ease: "power2.in",
            duration: 1,
          })
        })
      }, containerRef)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative space-y-8 md:space-y-12 "
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
    >
      {React.Children.map(children, (child, idx) => (
        <div
          ref={(el) => (sectionsRef.current[idx] = el)}
          className="will-change-transform"
        >
          {child}
        </div>
      ))}
    </div>
  )
}




const AIServicesPage = () => {
  return (
    <main className="@/ai-services">
      <Scroll3DSections>
      <HeroSection />
     
      <UseCasesSection />
    

      <SecondUseCasesSection />
      </Scroll3DSections>
      <IndustriesSection />
    
      
      <FAQSection />
      <Footer />
    </main>
  )
}

export default AIServicesPage