"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Link from "next/link"
import { Building2, Settings, Rocket, Shield, Handshake, Code, RefreshCw, Database, Zap, ShoppingCart, MapPin, Users, Briefcase, Factory, Star, ArrowRight, Sparkles, Globe, TrendingUp, Palette, Target, FileText, Monitor, RefreshCcw, CheckCircle2, Award, Heart, GraduationCap, DollarSign, Package, Lightbulb, BarChart3, MessageSquare, Layers, Eye, Book } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { ViewCanvas } from "@/Three/ViewCanvas"
import FAQSection from "../sections/FAQSection"
import TestimonialSection from "../sections/TestimonialSection"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}

export default function BrandingServicesUK() {
  const mainRef = useRef(null)

  useGSAP(() => {
    ScrollTrigger.refresh()
  }, { scope: mainRef })

  return (
    <div ref={mainRef} className="w-full relative overflow-x-hidden bg-gradient-to-bl from-white via-[#e0f8ff] to-[#e8e0ff]">
      <ViewCanvas />
      
      <div className="relative z-10 w-full font-sans">
        <HeroSection />
        <TrustIndicators />
        <ProvenImpact />
        <WhyBusinessesChooseUs />
        <WhyBrandingMatters />
        <BrandingEcosystem />
        <DetailedServices />
        <IndustriesServed />
        <UKCoverageSection />
        <CaseStudiesSection />
        <div className="py-20"><TestimonialSection /></div>
        <FreeBrandAudit />
        <FAQSectionWrapper />
        <FinalCTA />
      </div>
    </div>
  )
}

// 1. Hero Section - Matching DT Page
const HeroSection = () => {
  const heroRef = useRef(null)
  
  useGSAP(() => {
    const tl = gsap.timeline()
    
    tl.from(".hero-line", {
      y: 50,
      opacity: 0,
      rotateX: 10,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1
    })
    
    tl.from(".hero-desc", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    
    tl.from(".hero-cta-btn", {
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.5)"
    }, "-=0.6")
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-8 max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.2] tracking-tight mb-6">
            <div className="overflow-hidden"><span className="hero-line block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent pb-1">Branding Services UK</span></div>
            <div className="overflow-hidden"><span className="hero-line block">For Startups, Tech Teams,</span></div>
            <div className="overflow-hidden"><span className="hero-line block text-3xl md:text-5xl mt-2">& Growing Businesses</span></div>
          </h1>
        </div>
        
        <p className="hero-desc text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Your brand defines how people recognise, trust, and choose your business. We help startups and global brands create strategic, modern identities that strengthen credibility and support long-term growth across the UK market.
        </p>
        
        <div className="hero-cta-btn flex flex-col items-center gap-8">
          <Link href="/contact-us" className="group relative px-10 py-5 bg-blue-600 text-white rounded-full overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 font-bold text-lg flex items-center gap-2">
              Get a Free Brand Audit <ArrowRight size={20} />
            </span>
          </Link>
          <div className="flex flex-wrap justify-center gap-4 text-slate-500 text-sm font-medium">
             <span className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-slate-200 backdrop-blur-sm">
               <Shield size={16} className="text-blue-500"/> Strategy-First Approach
             </span>
             <span className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-slate-200 backdrop-blur-sm">
               <CheckCircle2 size={16} className="text-blue-500"/> UK-Wide Branding Support
             </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// 2. Trust Indicators (UPGRADED)
const TrustIndicators = () => (
  <section className="py-12 border-y border-slate-100 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="trust-indicators-row flex flex-wrap justify-center items-center gap-6 md:gap-12 text-slate-400 font-bold uppercase tracking-widest text-xs opacity-0">
        <div className="flex items-center gap-3"><Award size={20} className="text-blue-500" /> Top-Rated UK Agency</div>
        <div className="flex items-center gap-3"><Shield size={20} className="text-blue-500" /> ISO Certified Standards</div>
        <div className="flex items-center gap-3"><Users size={20} className="text-blue-500" /> 500+ Brands Launched</div>
        <div className="flex items-center gap-3"><Globe size={20} className="text-blue-500" /> Global Strategic Reach</div>
        <div className="flex items-center gap-3"><CheckCircle2 size={20} className="text-blue-500" /> 100% Client Satisfaction</div>
      </div>
    </div>
    <AnimationScript selector=".trust-indicators-row" animation={(target) => {
      gsap.to(target, { opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: target, start: "top 90%" } })
      
      const children = target.children
      gsap.set(children, { y: 20, opacity: 0 })
      gsap.to(children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)", scrollTrigger: { trigger: target, start: "top 90%" } })
    }} />
  </section>
)

const AnimationScript = ({ selector, animation }) => {
  useGSAP(() => {
    const target = document.querySelector(selector)
    if (target) animation(target)
  }, [])
  return null
}


// 3. Proven Impact (REDESIGNED FOR IMPACT)
const ProvenImpact = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  
  useGSAP(() => {
    // Reveal cards
    gsap.set(cardsRef.current, { opacity: 0, scale: 0.9, y: 30 })

    ScrollTrigger.batch(cardsRef.current, {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
        overwrite: true
      }),
      start: "top 85%"
    })

    // Count numbers
    const counters = document.querySelectorAll('.stat-number')
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'))
      if (!isNaN(target)) {
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 90%"
          }
        })
      }
    })
  }, { scope: sectionRef })

  const stats = [
    { number: "500", suffix: "+", label: "Projects Delivered", sub: "Successfully launched & scaled across the UK market." },
    { number: "25", suffix: "+", label: "Global Industries", sub: "Deep expertise across Tech, SaaS, Retail & more." },
    { number: "98", suffix: "%", label: "Retention Rate", sub: "Long-term partnerships built on trust & results." }
  ]

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Proven <span className="text-blue-600">Impact</span></h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">Quantifiable results that demonstrate our commitment to brand excellence and organisational growth.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {stats.map((s, i) => (
              <div 
                key={i} 
                ref={el => cardsRef.current[i] = el}
                className="flex-1 text-center relative group"
              >
                <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3 tracking-tighter">
                  <span className="stat-number" data-target={s.number}>0</span>
                  <span>{s.suffix}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase tracking-wide">{s.label}</h3>
                <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-3" />
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{s.sub}</p>
                
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// 4. Why Businesses Choose Us (RESTORED PREMIUM DESIGN)
const WhyBusinessesChooseUs = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    gsap.set(cardsRef.current, { opacity: 0, y: 50 })

    ScrollTrigger.batch(cardsRef.current, {
      onEnter: batch => gsap.to(batch, { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power2.out",
        overwrite: true
      }),
      start: "top 85%"
    })
  }, { scope: sectionRef })

  const reasons = [
    { icon: Target, title: "Strategy-Focused", desc: "Understanding market, audience, and objectives. Our work is grounded in strategic clarity." },
    { icon: Eye, title: "Purpose-Led Identity", desc: "Identity design driven by purpose, not trends. Visual systems that communicate trust." },
    { icon: Zap, title: "Performance Execution", desc: "Translating strategy into digital experiences that support engagement and growth." },
    { icon: Handshake, title: "Simple & Transparent", desc: "Clear, structured processes designed to keep your business aligned at every step." },
    { icon: TrendingUp, title: "Long-Term Growth", desc: "Brands built to evolve across teams, markets, and platforms as you grow." }
  ]

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Why Businesses <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Partnering with UK organisations to build resilient digital-first brands.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((r, i) => (
            <div 
              key={i} 
              ref={el => cardsRef.current[i] = el}
              className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              {/* Top Right Corner Design */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-600 to-blue-500 rounded-bl-[3rem] -mr-0 -mt-0 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 z-10">
                <span className="text-white font-bold text-xl pl-2 pb-2">0{i + 1}</span>
              </div>
              
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-sm relative z-0">
                <r.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors relative z-0">{r.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium relative z-0">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhyBrandingMatters = () => {
  const sectionRef = useRef(null)
  useGSAP(() => {
    const card = sectionRef.current.querySelector('.main-card')
    gsap.set(card, { opacity: 0, y: 50, scale: 0.95 })
    gsap.to(card, {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <div className="main-card bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Why Branding Matters for <span className="text-blue-400">UK Businesses</span></h2>
          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto relative z-10">
            In competitive UK sectors, branding plays a key role in credibility, customer trust, and differentiation. A well-defined brand helps organisations communicate clearly and build lasting value.
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-400 transition-all transform hover:scale-[1.05] relative z-10">
            Build Your Brand With Us <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

// 5. Branding Ecosystem (PINNED STACKING CARDS)
const BrandingEcosystem = () => {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)
  const cardsRef = useRef([])
  const headerRef = useRef(null)
  
  useGSAP(() => {
    // Media query for desktop only pinning (optional, but good for mobile UX)
    // For now, we apply to all sizes as requested, but scale appropriately
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Start pinning when section hits top
        end: "+=250%", // Scroll distance (3 cards * ~80vh)
        pin: true,
        scrub: 1, // Smooth scrubbing
        anticipatePin: 1
      }
    })

    // Init state: Cards off screen (bottom)
    gsap.set(cardsRef.current, { y: "150vh", rotate: 0, opacity: 0 })
    
    // Header animation (happens quickly at start)
    tl.from(headerRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out"
    })

    // Card 1
    tl.to(cardsRef.current[0], {
      y: 0,
      opacity: 1,
      rotation: -6,
      duration: 2,
      ease: "power3.out"
    }, "+=0.2")

    // Card 2
    tl.to(cardsRef.current[1], {
      y: 0,
      opacity: 1,
      rotation: 6,
      duration: 2,
      ease: "power3.out"
    }, "+=0.2") // Little gap before next card

    // Card 3
    tl.to(cardsRef.current[2], {
      y: 0,
      opacity: 1,
      rotation: -3,
      duration: 2,
      ease: "power3.out"
    }, "+=0.2")
    
    // Small pause at end before unpinning
    tl.to({}, { duration: 1 })

  }, { scope: containerRef })

  const cards = [
    { title: "Brand Strategy", icon: Lightbulb, color: "bg-blue-100 text-blue-600", desc: "Positioning, messaging, and differentiation." },
    { title: "Identity Design", icon: Palette, color: "bg-cyan-100 text-cyan-600", desc: "Cohesive visual systems and consistent guidelines." },
    { title: "Implementation", icon: Rocket, color: "bg-indigo-100 text-indigo-600", desc: "Rollout, adoption, and long-term brand evolution." }
  ]

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      {/* Fixed Header */}
      <div ref={headerRef} className="text-center z-10 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">A Complete Branding <span className="text-blue-600">Ecosystem</span></h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Effective branding is not a single output — it&apos;s an interconnected system.</p>
      </div>

      {/* Card Stacking Area */}
      <div ref={wrapperRef} className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[2.5/3.5] mx-auto z-20 perspective-1000">
        {cards.map((item, i) => (
          <div 
            key={i} 
            ref={el => cardsRef.current[i] = el}
            className="absolute inset-0 w-full h-full bg-white rounded-[1.5rem] shadow-2xl p-4 flex flex-col items-center justify-center text-center origin-center will-change-transform border border-slate-100"
            style={{ 
              zIndex: i + 1,
              backfaceVisibility: "hidden"
            }}
          >
            {/* Playing Card Inset Border with Pattern */}
            <div className="absolute inset-4 border-2 border-slate-900/10 rounded-[1rem] pointer-events-none flex flex-col items-center justify-center p-6 bg-white z-20">
              
              {/* Corner Suit Icons */}
              <div className="absolute top-3 left-3 flex flex-col items-center gap-1 opacity-40">
                <span className="text-xs font-bold font-serif">{i + 1}</span>
                <item.icon size={12} className="text-slate-900" />
              </div>

              <div className="absolute bottom-3 right-3 flex flex-col items-center gap-1 rotate-180 opacity-40">
                 <span className="text-xs font-bold font-serif">{i + 1}</span>
                 <item.icon size={12} className="text-slate-900" />
              </div>

              {/* Central Content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm mx-auto`}>
                  <item.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>

              {/* Large Watermark Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0">
                 <item.icon size={200} />
              </div>

            </div>

            {/* Premium Background Pattern & Texture */}
            <div className="absolute inset-2 rounded-[1.2rem] opacity-[0.03] z-10 pointer-events-none" 
                 style={{ 
                   backgroundImage: `
                     repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%),
                     repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 0, transparent 50%)
                   `,
                   backgroundSize: '10px 10px' 
                 }}>
            </div>
            
            {/* Noise Texture for Paper Feel */}
            <div className="absolute inset-0 opacity-[0.4] z-0 mix-blend-overlay"
                 style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 -z-10" />
          </div>
        ))}
      </div>
    </section>
  )
}

// 6. Detailed Services (REFINED LIGHT BENTO GRID)
const DetailedServices = () => {
  const sectionRef = useRef(null)
  
  useGSAP(() => {
    const cards = sectionRef.current.querySelectorAll('.bento-card')
    gsap.set(cards, { opacity: 0, y: 30 })

    ScrollTrigger.batch(cards, {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        overwrite: true
      }),
      start: "top 85%"
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Detailed Branding <span className="text-blue-600">Services</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">End-to-end brand identity design for organisations at different stages of growth.</p>
        </div>

        {/* Reduced row height for more compact feel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)] max-w-6xl mx-auto">
          
          {/* 1. Brand Strategy - Large Feature Card (2x2) - WITH IMAGE */}
          <div className="bento-card md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0">
               <Image 
                 src="/images/BRANDING.webp" 
                 alt="Brand Strategy" 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-[1px] group-hover:from-black/70 transition-colors duration-500" />
            </div>
            
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md backdrop-blur-sm">
                  <Target size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Brand Strategy & Positioning</h3>
                <p className="text-white/90 text-lg leading-relaxed max-w-md font-medium">Clarify your value proposition, define your voice, and carve out a unique space in the market.</p>
              </div>
              <div className="flex items-center gap-2 font-bold text-white group-hover:text-blue-200 transition-colors mt-6">
                <span>Explore Strategy</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>

          {/* 2. Visual Identity - Tall Vertical Card (1x2) - LIGHT THEME */}
          <div className="bento-card md:col-span-1 md:row-span-2 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[2rem] p-8 border border-cyan-100 relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />
             
             <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 border border-cyan-100">
                  <Palette size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Visual Identity</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">Logo systems, typography, color frameworks, and visual guidelines.</p>
             </div>

             <div className="relative z-10 mt-6 h-32 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 group-hover:border-cyan-200 transition-colors">
                 {/* Abstract visual elements */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-xl shadow-lg rotate-12 group-hover:rotate-45 transition-transform duration-700" />
             </div>
          </div>

          {/* 3. Digital Branding - Wide Card (3-col) - WITH IMAGE & LIGHT THEME */}
          <div className="bento-card md:col-span-3 bg-white rounded-[2rem] p-8 relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="absolute inset-y-0 right-0 w-1/3">
                 <Image 
                   src="/images/Digital Marketing.webp" 
                   alt="Digital Branding" 
                   fill 
                   className="object-cover opacity-90"
                 />
                 <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
              <div className="max-w-xl">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center border border-indigo-100">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Digital Branding</h3>
                 </div>
                 <p className="text-slate-500 font-medium">Align websites, apps, and digital touchpoints to reflect brand credibility. Ensuring your digital presence is as powerful as your reputation.</p>
              </div>
              <div className="flex gap-2 flex-wrap relative z-20">
                 {['UI/UX', 'Web Design', 'Assets'].map((tag, i) => (
                   <span key={i} className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">{tag}</span>
                 ))}
              </div>
            </div>
          </div>

          {/* 4. Guidelines - Deep Navy Center Card */}
          <div className="bento-card bg-slate-900 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-center text-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-50" />
            <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center mb-6 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform">
              <Book size={24} />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Guidelines</h3>
            <p className="text-blue-100/70 text-xs font-medium uppercase tracking-widest leading-relaxed px-4">Brand Consistency<br/>Across Ecosystems</p>
          </div>

          {/* 5. Rebranding - Light Sky Left Card */}
          <div className="bento-card bg-blue-50 rounded-[2.5rem] p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all group flex flex-col items-start text-left">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-8 group-hover:rotate-180 transition-transform duration-700 shadow-lg shadow-blue-200">
              <RefreshCw size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Rebranding</h3>
            <div className="w-8 h-1 bg-blue-400 rounded-full mb-4 group-hover:w-16 transition-all" />
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Strategic support for<br/>corporate change & global expansion.</p>
          </div>

          {/* 6. Messaging - Vibrant Royal Right Card */}
          <div className="bento-card bg-blue-600 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-end text-right justify-end relative overflow-hidden">
            <div className="absolute top-6 left-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <MessageSquare size={80} className="text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white mb-2 leading-none tracking-tighter">Messaging</h3>
              <p className="text-blue-100 font-bold text-sm tracking-wide">CLEAR FRAMEWORKS</p>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link href="/contact-us" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 hover:scale-105 transition-all shadow-lg hover:shadow-blue-500/30">
            Request a Branding Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}

// 6. Industries Served - Compact matching DT
const IndustriesServed = () => {
  const sectionRef = useRef(null)
  
  useGSAP(() => {
    const items = sectionRef.current.querySelectorAll('.industry-item')
    gsap.set(items, { opacity: 0, y: 30, scale: 0.9 })
    
    gsap.to(items, {
      opacity: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.6, ease: "back.out(1.5)",
      scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
    })
  }, { scope: sectionRef })

  const items = [
    { icon: Code, name: "Technology & SaaS" },
    { icon: Rocket, name: "Startups & Scale-ups" },
    { icon: Globe, name: "Global Businesses" },
    { icon: Building2, name: "Corporate" },
    { icon: Briefcase, name: "Professional Services" },
    { icon: ShoppingCart, name: "E-commerce" },
    { icon: DollarSign, name: "Finance & FinTech" },
    { icon: Heart, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: Factory, name: "Manufacturing" }
  ]

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Industries We Support</h2>
          <p className="text-lg text-slate-600">Tailored branding approach for key UK sectors.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="industry-item bg-white rounded-2xl p-5 border border-slate-200 shadow hover:scale-[1.02] transition-all group flex flex-col items-center text-center">
              <item.icon className="mb-3 text-blue-500 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 7. UK Coverage (THREAD LAYOUT)
const UKCoverageSection = () => {
  const containerRef = useRef(null)
  
  useGSAP(() => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: containerRef.current, start: "top 70%" } })
    
    const path = containerRef.current.querySelectorAll('.thread-path')
    const nodes = containerRef.current.querySelectorAll('.map-node')
    
    gsap.set(path, { strokeDashoffset: 1300, strokeDasharray: 1300 })
    gsap.set(nodes, { scale: 0, opacity: 0 })

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.out"
    })
    
    tl.to(nodes, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.3,
      ease: "back.out(1.7)"
    }, "-=2.5")

  }, { scope: containerRef })
  
  // Simple "Thread" Path: A gentle looping curve
  // Used a viewBox of 1200x300 for the SVG coordinate system
  
  const regions = [
    { name: "London", icon: Building2, x: "15%", y: "30%", color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Manchester", icon: Factory, x: "40%", y: "65%", color: "text-cyan-600", bg: "bg-cyan-50" },
    { name: "Birmingham", icon: MapPin, x: "65%", y: "25%", color: "text-purple-600", bg: "bg-purple-50" },
    { name: "Global", icon: Globe, x: "85%", y: "55%", color: "text-emerald-600", bg: "bg-emerald-50" }
  ]

  return (
    <section ref={containerRef} className="py-32 border-t border-slate-100 overflow-hidden relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-20">Nationwide <span className="text-blue-600">Connectivity</span></h2>
        
        <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[300px]">
           
           {/* The Thread (SVG Path) */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 300" preserveAspectRatio="none">
             {/* Shadow Path */}
             <path 
               d="M0,150 C150,150 200,50 300,50 S450,250 600,250 S800,50 900,50 S1050,150 1200,150" 
               fill="none" 
               stroke="#e2e8f0" 
               strokeWidth="4" 
             />
             {/* Main Thread */}
             <path 
               d="M0,150 C150,150 200,50 300,50 S450,250 600,250 S800,50 900,50 S1050,150 1200,150" 
               fill="none" 
               stroke="#3b82f6" 
               strokeWidth="2" 
               strokeDasharray="8 4"
               className="thread-path opacity-50"
             />
           </svg>

             {regions.map((region, i) => (
               <div 
                 key={i} 
                 className="map-node absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                 style={{ left: region.x, top: region.y }}
               >
               {/* Hover Ring Effect */}
               <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
               
               {/* Node Content */}
               <div className={`relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border-2 border-slate-100 shadow-xl flex flex-col items-center justify-center gap-1 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 z-10 ${region.color}`}>
                 <region.icon size={28} />
               </div>
               
               {/* Label (Hanging below) */}
               <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg bg-white text-slate-800`}>
                    {region.name}
                  </span>
               </div>
               
               {/* Permanent Label (Small) */}
               <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-slate-400 group-hover:opacity-0 transition-opacity`}>
                 {region.name}
               </span>
             </div>
           ))}
        </div>

      </div>
    </section>
  )
}

// 8. Case Studies (RESTORED PREMIUM DESIGN)
const CaseStudiesSection = () => {
  const sectionRef = useRef(null)
  const caseRef = useRef([])

  useGSAP(() => {
    gsap.set(caseRef.current, { opacity: 0, y: 50 })

    ScrollTrigger.batch(caseRef.current, {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        overwrite: true
      }),
      start: "top 85%"
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-slate-900 leading-[1.2]">Our <span className="text-blue-600">Success Stories</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            { id: 1, title: "Tech Brand Evolution", desc: "Strategic rebranding that drove 40% growth in digital engagement for a UK tech leader.", image: "/images/BRANDING.webp" },
            { id: 2, title: "Enterprise Identity", desc: "Cohesive identity system for a multi-location UK organisation, improving brand recognition by 60%.", image: "/images/Digital Marketing.webp" },
            { id: 3, title: "Startup Launchpad", desc: "Full-service brand strategy and identity design for a high-growth UK fintech startup.", image: "/images/Web Development.webp" }
          ].map((item, i) => (
            <div 
              key={i} 
              ref={el => caseRef.current[i] = el}
              className="bg-white/40 backdrop-blur-md rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all border border-white group cursor-pointer hover:-translate-y-3"
            >
              <div className="h-72 relative overflow-hidden">
                 <Image 
                   src={item.image} 
                   alt={item.title} 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-transparent group-hover:from-black/40 transition-colors" />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-5 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 mb-10 font-medium text-lg leading-relaxed">{item.desc}</p>
                <Link href="/our-work" className="text-blue-600 font-bold flex items-center gap-3 transition-all group-hover:gap-5">
                  Read Case Study <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQSectionWrapper = () => {
  const faqs = [
    { question: "What is your branding process?", answer: "We start with discovery and strategy, followed by visual identity design and implementation guidelines." },
    { question: "Do you offer UK-wide services?", answer: "Yes, we support businesses across London, Manchester, and globally." },
    { question: "How long does branding take?", answer: "Timelines vary depending on complexity, but typically range from 4 to 12 weeks." }
  ]
  return (
    <div className="py-20">
      <FAQSection faqs={faqs} />
    </div>
  )
}

// 9. Free Brand Audit & Final CTA
const FreeBrandAudit = () => {
  const sectionRef = useRef(null)
  
  useGSAP(() => {
    const card = sectionRef.current.querySelector('.audit-card')
    gsap.set(card, { y: 50, opacity: 0, scale: 0.9 })
    gsap.to(card, {
      y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="audit-card bg-white/90 backdrop-blur-xl p-10 md:p-16 rounded-3xl shadow-2xl border border-white/50 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Get a Free <span className="text-blue-600">Brand Audit</span></h2>
          <p className="text-lg text-slate-600 mb-10 font-medium">Analyze your current brand positioning in the UK market.</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500" />
            <input type="email" placeholder="Email" className="p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500" />
            <input type="text" placeholder="Website" className="p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 md:col-span-2" />
            <button className="md:col-span-2 p-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl">Submit Audit Request</button>
          </form>
        </div>
      </div>
    </section>
  )
}

const FinalCTA = () => {
  const sectionRef = useRef(null)
  
  useGSAP(() => {
    const content = sectionRef.current.querySelector('.cta-content')
    gsap.set(content, { y: 50, opacity: 0 })
    gsap.to(content, {
      y: 0, opacity: 1, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
      <div className="cta-content container mx-auto px-6 relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">Ready to Build a <span className="text-blue-500">Stronger Brand?</span></h2>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">Combine strategy, identity, and execution to move forward with clarity and confidence.</p>
      <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg shadow-xl hover:bg-blue-500 transition-all transform hover:scale-[1.05]">
        Arrange a Consultation <ArrowRight size={24} />
      </Link>
    </div>
  </section>
)
}
