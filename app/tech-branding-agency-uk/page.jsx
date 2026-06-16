"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import { 
  Target, 
  Sparkles, 
  Palette, 
  MessageSquareCode, 
  Compass, 
  MonitorPlay, 
  RefreshCcw, 
  BookOpen, 
  Globe, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  Code2, 
  Users2, 
  Search,
  PenTool,
  Rocket
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TechBrandingAgencyUK() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans selection:bg-cyan-500 selection:text-white">
      <ParticleBackground />
      <HeroSection />
      <StatsBanner />
      <IntroSection />
      <ServicesSection />
      <AudienceSection />
      <AIPowerSection />
      <ProcessSection />
      <GrowthSolutionsSection />
      <WhyChooseSection />
      <IndustriesSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  )
}

// Particle Floating Background
const ParticleBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []
    const count = 20

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div")
      p.className = "absolute rounded-full pointer-events-none"
      
      const isLarge = Math.random() > 0.7
      if (isLarge) {
        p.classList.add("bg-cyan-400/10", "blur-xl")
        p.style.width = Math.random() * 80 + 40 + "px"
        p.style.height = p.style.width
      } else {
        p.classList.add("bg-indigo-500/15")
        p.style.width = Math.random() * 5 + 3 + "px"
        p.style.height = p.style.width
      }

      p.style.left = Math.random() * 100 + "%"
      p.style.top = Math.random() * 100 + "%"
      container.appendChild(p)
      particles.push(p)
    }

    particles.forEach((p, index) => {
      gsap.to(p, {
        y: (Math.random() - 0.5) * 100,
        x: (Math.random() - 0.5) * 100,
        opacity: Math.random() * 0.3 + 0.1,
        duration: 8 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.1
      })
    })

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}

// Hero Section
const HeroSection = () => {
  const heroRef = useRef(null)
  const tagRef = useRef(null)
  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  const actionsRef = useRef(null)
  const visualRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    
    tl.fromTo(tagRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1 })
      .fromTo(titleRef.current, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6")
      .fromTo(bodyRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(actionsRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(visualRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, "-=0.7")

    // Gentle float animation for image
    gsap.to(visualRef.current, {
      y: 10,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="relative pt-36 pb-16 px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div 
            ref={tagRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/60 border border-cyan-200/80 text-cyan-800 font-semibold text-sm mb-6 shadow-sm backdrop-blur-sm"
          >
            <Cpu className="w-4 h-4 text-cyan-600 animate-pulse" />
            <span>Webnox Digital</span>
          </div>

          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
          >
            Tech Branding Agency in the UK for SaaS, Startups and Technology Companies
          </h1>

          <p 
            ref={bodyRef}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            <strong className="text-slate-800 font-bold block mb-2 text-xl">Build a Technology Brand That Leads the Markets</strong>
            We partner with SaaS startups, software companies and enterprise technology brands to create identities that simplify complex ideas and drive growth. As a forward-thinking tech branding company in the UK, we combine strategy, design and AI-driven insights to build powerful technology brands. Start your journey with us.
          </p>

          <div ref={actionsRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact-us" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <span>Book a Free Branding Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/contact-us" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-200 shadow-sm transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>

        {/* Right column: Branding Visual mockups */}
        <div ref={visualRef} className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50 to-indigo-50/30 opacity-50 z-0" />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src="/images/aboutimg1.webp" 
                alt="Technology Branding Design Illustration" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Trust Signals Banner
const StatsBanner = () => {
  const bannerRef = useRef(null)
  
  useGSAP(() => {
    gsap.fromTo(bannerRef.current.children, 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 95%",
          toggleActions: "play none none none"
        }
      }
    )
  }, { scope: bannerRef })

  const stats = [
    "500+ Brands and Digital Projects Delivered",
    "98% Client Retention Rate",
    "25+ Global Industries Served",
    "AI-Powered Branding Strategy",
    "Top-Rated Technology Agency"
  ]

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white py-10 px-6 overflow-hidden z-10 shadow-xl">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div ref={bannerRef} className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-8 relative z-10">
        {stats.map((stat, idx) => {
          const parts = stat.split(" ")
          const firstWord = parts[0]
          const rest = parts.slice(1).join(" ")
          return (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <span className="text-2xl lg:text-3xl font-extrabold text-cyan-400 mb-1">
                {firstWord}
              </span>
              <span className="text-sm font-semibold text-slate-200 tracking-wide">{rest}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Intro Content Section
const IntroSection = () => {
  const containerRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(leftRef.current, 
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    )
    gsap.fromTo(rightRef.current, 
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column */}
        <div ref={leftRef} className="lg:col-span-6">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-3 block">Branding Excellence</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Brand Strategy and Design for Innovative Tech Companies
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mb-8" />
          
          <p className="text-slate-600 text-lg leading-relaxed mb-6 font-normal">
            In the technology industry, innovation moves fast, but brands often struggle to communicate their value clearly. Webnox Digital is a technology branding agency in the UK partnering with SaaS startups, AI companies and enterprise technology businesses to build brands that simplify complex products and stand out in competitive markets.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            Through AI-driven strategy, distinctive visual identity and clear brand messaging, we transform technical innovation into compelling brand experiences. Our team works closely with founders, product teams and innovators to uncover what makes their technology unique and turn that insight into a brand that attracts customers, investors and long-term growth.
          </p>
        </div>

        {/* Right column: Design Showcase */}
        <div ref={rightRef} className="lg:col-span-6 flex justify-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-[500px]">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-square row-span-2">
              <Image 
                src="/images/brand3-2.webp" 
                alt="Brand visual identity assets" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-video">
              <Image 
                src="/images/brand3-1.webp" 
                alt="Logo branding layout design" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-video">
              <Image 
                src="/images/brand3-3.webp" 
                alt="Website branding design assets" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

// Services Section
const ServicesSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%"
        }
      }
    )

    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%"
        }
      }
    )
  }, { scope: sectionRef })

  const services = [
    {
      icon: Target,
      title: "Brand Strategy",
      desc: "A clear strategic foundation that defines your purpose, positioning and long-term direction. We provide strategic brand frameworks that help technology companies align their brand with long-term growth. Our approach supports technology companies seeking a branding service for software products, SaaS platforms and digital solutions."
    },
    {
      icon: Sparkles,
      title: "Logo Design",
      desc: "Distinctive, scalable logos designed for modern digital products, platforms and technology ecosystems. We create logo systems that work consistently across websites, apps, SaaS dashboards and marketing materials."
    },
    {
      icon: Palette,
      title: "Visual Identity",
      desc: "We create cohesive visual identity systems including colour palettes, typography and brand assets tailored for technology brands. Our designs ensure consistency across digital platforms and strengthen brand recognition."
    },
    {
      icon: MessageSquareCode,
      title: "Brand Messaging",
      desc: "Clear messaging frameworks that communicate complex technologies with simplicity and confidence. We develop value propositions, tone of voice and messaging structures that help technology companies explain their products effectively."
    },
    {
      icon: Compass,
      title: "Brand Positioning",
      desc: "We define strategic brand positioning that differentiates your technology and highlights its unique value in competitive markets. Our positioning strategies help technology companies stand out and build stronger market presence."
    },
    {
      icon: MonitorPlay,
      title: "Website Brand Design",
      desc: "We design user-focused website experiences that strengthen your digital presence and improve engagement. Our approach combines brand storytelling with an intuitive user experience."
    },
    {
      icon: RefreshCcw,
      title: "Rebranding",
      desc: "Our rebranding services in the UK help technology companies refresh their positioning, modernise their visual identities and reconnect with evolving markets. We transform outdated brands into modern technology identities."
    },
    {
      icon: BookOpen,
      title: "Brand Guidelines",
      desc: "Complete brand guidelines that ensure consistency across products, platforms and marketing channels. These guidelines help teams maintain a unified and professional brand identity."
    },
    {
      icon: Globe,
      title: "Digital Branding",
      desc: "We create digital brand assets optimised for online platforms, SaaS products and modern marketing ecosystems to ensure your technology brand performs effectively across digital channels."
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-white border-b border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-3 block">Expert Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Our Tech Branding Services</h2>
          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            We provide strategic technology branding services in the UK designed specifically for technology companies. At Webnox Digital, we combine brand strategy, design thinking and digital expertise to create brands that communicate complex technology clearly and stand out in competitive markets. From early-stage startups to enterprise platforms, we help technology businesses build brands that support innovation, product adoption and long-term growth.
          </p>
        </div>

        {/* Grid Container */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div 
              key={idx}
              className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-cyan-500/10 group-hover:rotate-6 transition-transform">
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {svc.desc}
                </p>
              </div>

              <div className="w-full h-1 bg-slate-200/50 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-indigo-500 rounded-full transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// Audience Target Section
const AudienceSection = () => {
  const sectionRef = useRef(null)
  
  useGSAP(() => {
    gsap.fromTo(sectionRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%"
        }
      }
    )
  }, { scope: sectionRef })

  const audiences = [
    "SaaS startups",
    "software companies",
    "AI platforms",
    "fintech innovators",
    "enterprise technology businesses"
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side */}
        <div className="lg:col-span-7">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-3 block">Target Sectors</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Technology Branding for SaaS and Software Companies
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mb-8" />

          <p className="text-slate-600 text-lg leading-relaxed mb-6 font-normal">
            Technology companies operate in fast-moving markets where clarity and differentiation are critical. As a specialised technology branding agency in the UK, we work with SaaS startups, software companies and enterprise technology businesses to create brands that support innovation and growth. Our team also provides branding for software companies looking to strengthen their positioning, improve product communication and scale in competitive digital markets.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8 font-normal">
            We are also recognised as a tech startup branding agency helping early-stage companies build strong brand foundations for scalable growth.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-950 font-bold text-base shadow-sm">
            <Zap className="w-5 h-5 text-indigo-600" />
            <span>Our branding frameworks are designed to support scalability, product adoption and global expansion.</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border border-slate-800">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Users2 className="w-5 h-5 text-cyan-400" />
              <span>We work with organisations including:</span>
            </h3>
            
            <div className="space-y-4">
              {audiences.map((org, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400"><CheckCircle2 className="w-4 h-4" /></div>
                  <span className="text-slate-200 capitalize font-semibold text-sm">{org}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

// AI-Powered Technology Branding Section
const AIPowerSection = () => {
  const containerRef = useRef(null)
  
  useGSAP(() => {
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        }
      }
    )
  }, { scope: containerRef })

  const aiPillars = [
    "market and competitor analysis",
    "audience behaviour insights",
    "data-driven design decisions",
    "brand performance evaluation"
  ]

  return (
    <section ref={containerRef} className="py-24 bg-white border-b border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Graphic visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square rounded-3xl bg-gradient-to-br from-indigo-905 to-slate-950 p-6 text-white border border-slate-800 shadow-2xl flex flex-col justify-between bg-slate-900">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
              <div className="flex justify-between items-center z-10">
                <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase">AI RESEARCH LAB</span>
                <div className="h-3 w-3 bg-cyan-400 rounded-full animate-ping" />
              </div>
              <div className="z-10 py-8 flex flex-col gap-4 text-center items-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-slate-950 shadow-md">
                  <Cpu className="w-8 h-8 text-white animate-spin-slow" />
                </div>
                <h4 className="text-xl font-bold tracking-tight">AI Insights Suite</h4>
              </div>
              <span className="text-xs text-center text-slate-500 font-mono z-10 uppercase">Data-Driven Creativity</span>
            </div>
          </div>

          {/* Right Column: AI Details */}
          <div className="lg:col-span-7">
            <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-3 block">Data-Driven Approach</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">AI-Powered Technology Branding</h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mb-8" />

            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-normal">
              The future of branding is data-driven. We integrate AI insights and digital analytics into our branding process to ensure strategic and creative decisions are informed by real market data. This allows technology companies to build brands that evolve with their markets and connect more effectively with their audiences.
            </p>

            <h3 className="text-lg font-bold text-slate-800 mb-4">Our AI-powered approach includes:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiPillars.map((pillar, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-cyan-200 transition-colors">
                  <div className="h-8 w-8 flex-shrink-0 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center font-extrabold text-sm">
                    {i + 1}
                  </div>
                  <span className="font-semibold text-slate-700 capitalize text-sm">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Beyond Branding Growth Solutions Section
const GrowthSolutionsSection = () => {
  const containerRef = useRef(null)
  
  useGSAP(() => {
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        }
      }
    )
  }, { scope: containerRef })

  const growthServices = [
    { title: "AI development", icon: Cpu },
    { title: "SaaS product development", icon: Code2 },
    { title: "website design and development", icon: MonitorPlay },
    { title: "digital marketing", icon: Globe },
    { title: "SEO and growth strategy", icon: TrendingUp }
  ]

  return (
    <section ref={containerRef} className="py-24 bg-white border-b border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-3 block">Growth Engine</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Beyond Branding: Technology Growth Solutions</h2>
          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            Most branding agencies stop at design. We go further. Alongside branding, we provide technology and digital growth services that help companies build, launch and scale their products.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {growthServices.map((svc, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[150px] shadow-sm">
              <div className="p-3.5 rounded-xl bg-cyan-100/60 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <svc.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm leading-snug group-hover:text-white transition-colors capitalize">{svc.title}</h4>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <span className="inline-flex items-center gap-3 px-6 py-4 bg-slate-900 text-white rounded-2xl text-sm md:text-base shadow-lg font-bold">
            <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400" />
            <span>This integrated approach allows technology companies to develop their brand, product and digital ecosystem with one strategic partner.</span>
          </span>
        </div>

      </div>
    </section>
  )
}

// Proven Branding Process
const ProcessSection = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const stepsRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%"
        }
      }
    )

    gsap.fromTo(stepsRef.current.children,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 85%"
        }
      }
    )
  }, { scope: sectionRef })

  const steps = [
    {
      title: "Discovery and Research",
      icon: Search,
      desc: "Understanding your technology, market and audience is the first step in building a strong brand. We conduct research on your product, competitors and target users to uncover insights that shape the foundation of your brand strategy."
    },
    {
      title: "Brand Strategy",
      icon: Target,
      desc: "Defining positioning, messaging and differentiation that clearly communicates your technology’s value. At this stage, we create a strategic direction that helps your brand stand out in competitive markets."
    },
    {
      title: "Identity Design",
      icon: PenTool,
      desc: "A visual identity that reflects your innovation and brand personality. This includes logo design, colour systems, typography and visual elements that represent your technology brand consistently across platforms."
    },
    {
      title: "Messaging Development",
      icon: MessageSquareCode,
      desc: "Clear and effective messaging that communicates complex technologies with simplicity. We develop tone of voice, value propositions and messaging frameworks that resonate with customers and stakeholders."
    },
    {
      title: "Brand Guidelines",
      icon: BookOpen,
      desc: "A structured framework that ensures consistency across all brand touchpoints. We create detailed brand guidelines that define how your brand should appear across websites, products and marketing materials."
    },
    {
      title: "Launch and Growth",
      icon: Rocket,
      desc: "Successful brand implementation across digital platforms and customer touchpoints. We support the launch of your brand and integrate it with marketing strategies and product experiences to drive long-term growth."
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-slate-200">
      
      {/* Header */}
      <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-3 block">Step-By-Step</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Our Proven Technology Branding Process</h2>
        <p className="text-slate-600 text-lg leading-relaxed font-normal">
          At Webnox Digital, great technology brands are built through structured thinking and creative exploration.
        </p>
      </div>

      {/* Timeline steps */}
      <div ref={stepsRef} className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group">
            
            {/* Step marker */}
            <div className="absolute -left-[25px] top-0.5 w-12 h-12 rounded-full border-4 border-slate-50 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300">
              <step.icon className="w-5 h-5" />
            </div>

            <div className="absolute left-[-110px] top-3 hidden md:block text-slate-400 font-mono font-bold text-sm tracking-wider">
              PHASE 0{idx + 1}
            </div>

            {/* Step card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 transition-colors shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">{step.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

// Why Choose Us Section
const WhyChooseSection = () => {
  const containerRef = useRef(null)
  
  useGSAP(() => {
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        }
      }
    )
  }, { scope: containerRef })

  const advantages = [
    { title: "500+ Projects Delivered", desc: "Extensive experience supporting startups and global technology businesses." },
    { title: "25+ Industries Served", desc: "Cross-industry expertise spanning SaaS, AI, retail and digital platforms." },
    { title: "98% Client Retention", desc: "Long-term partnerships built on trust and measurable results." },
    { title: "AI-Driven Strategy", desc: "Brand decisions informed by insights, research and data." },
    { title: "Agile and Fast-Moving", desc: "Efficient processes designed for innovative startups and scaling companies." },
    { title: "Branding + Technology", desc: "A rare combination of branding, development and digital growth expertise." }
  ]

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-slate-200">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-3 block">Why Webnox</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Why Choose Our Tech Branding Agency</h2>
        <p className="text-slate-600 text-lg leading-relaxed font-normal">
          We partner with technology companies that want to challenge convention and lead their industries. As one of the emerging branding agencies for tech startups, we help innovative companies build distinctive brands that scale globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((adv, idx) => (
          <div key={idx} className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-lg mb-2">{adv.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">{adv.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

// Served Sectors Section
const IndustriesSection = () => {
  const containerRef = useRef(null)
  
  useGSAP(() => {
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        }
      }
    )
  }, { scope: containerRef })

  const sectors = [
    "SaaS platforms",
    "artificial intelligence companies",
    "fintech innovators",
    "HealthTech startups",
    "cybersecurity companies",
    "cloud technology platforms",
    "enterprise software providers"
  ]

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-3 block">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Technology Industries We Serve</h2>
          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            Our experience spans a wide range of technology sectors, including startups, SaaS platforms and enterprise software providers. We help innovative companies establish distinctive brand identities that stand out in competitive digital markets.
          </p>
        </div>

        {/* Sectors loop */}
        <div ref={containerRef} className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {sectors.map((sector, i) => (
            <div 
              key={i} 
              className="px-6 py-3.5 rounded-full bg-slate-50 border border-slate-100 hover:border-cyan-300 hover:bg-cyan-50 text-slate-800 font-bold text-sm md:text-base transition-colors shadow-sm flex items-center gap-3 cursor-default capitalize"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500" />
              <span>{sector}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// FAQ Section
const FAQSection = () => {
  const containerRef = useRef(null)
  const [openIdx, setOpenIdx] = useState(0)

  useGSAP(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        }
      }
    )
  }, { scope: containerRef })

  const faqs = [
    {
      question: "What is technology branding?",
      answer: "Technology branding is the process of developing a clear brand strategy, identity and positioning for technology companies such as SaaS startups, AI platforms and software businesses."
    },
    {
      question: "How much does tech branding cost in the UK?",
      answer: "Tech branding costs in the UK vary depending on the project scope, strategy requirements and brand assets needed. We provide tailored branding solutions for SaaS startups, software companies and technology businesses based on their growth goals."
    },
    {
      question: "Why do SaaS startups need branding?",
      answer: "Branding helps SaaS startups communicate their value clearly, build trust with users and stand out in competitive markets. At Webnox Digital, we help SaaS companies create strong brand identities that support product adoption and long-term growth."
    },
    {
      question: "How long does a tech branding project take?",
      answer: "Most technology branding projects take 4–8 weeks, depending on the complexity of the strategy, design requirements and deliverables. We follow a structured process to move efficiently from research and strategy to brand launch."
    },
    {
      question: "What makes a strong technology brand?",
      answer: "A strong technology brand clearly communicates complex products in a simple and compelling way. At Webnox Digital, we help SaaS startups and technology companies build strategic brand identities, messaging and visual systems that differentiate them in competitive digital markets."
    },
    {
      question: "Do technology companies need a specialised branding agency?",
      answer: "Yes. Technology companies often deal with complex products and fast-moving markets, which require specialised branding expertise. We work with SaaS startups, software companies and enterprise tech businesses to create brands that simplify innovation and support scalable growth."
    }
  ]

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-slate-200 font-sans">
      
      {/* Header */}
      <div className="mb-16 text-center lg:text-left">
        <span className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-3 block">FAQ</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Frequently Asked Questions</h2>
        <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mx-auto lg:mx-0 mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Accordion List */}
        <div className="lg:col-span-8 flex flex-col gap-4 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? "bg-white border-cyan-400 shadow-md" : "bg-slate-50 border-slate-200 hover:shadow-sm"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none cursor-pointer"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-800">{faq.question}</span>
                  <span className={`text-2xl font-black transition-transform duration-300 ${isOpen ? "rotate-45 text-cyan-500" : "text-slate-400"}`}>
                    +
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right CTA Card */}
        <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 p-8 text-white text-center relative overflow-hidden shadow-xl border border-slate-800 bg-slate-900">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
            <MessageSquareCode className="w-6 h-6 text-cyan-400" />
          </div>

          <h3 className="text-lg font-bold text-slate-100 mb-2">Do you have more questions?</h3>
          <p className="text-xs text-slate-400 mb-8 leading-relaxed font-normal">
            Partner with Webnox Digital to create a brand identity that captures attention, communicates value and supports long-term growth.
          </p>
          
          <Link href="/contact-us" className="inline-block w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl py-3.5 transition-colors shadow-lg cursor-pointer text-sm">
            Book a Free Consultation
          </Link>
        </div>

      </div>
    </section>
  )
}

// Final Call To Action Section
const FinalCTASection = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, scale: 0.98 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        }
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
        
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase mb-6 tracking-widest font-bold">
            UK SaaS Branding Partner
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            Build Your Technology Brand Today
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Partner with Webnox Digital, a tech branding agency in the UK, to create a brand identity that captures attention, communicates value and supports long-term growth. Our team also works with emerging companies as a branding agency for tech startups looking to launch and scale successfully.
          </p>

          <Link href="/contact-us">
            <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 hover:text-white font-black rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <span>Book a Free Branding Consultation</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}
