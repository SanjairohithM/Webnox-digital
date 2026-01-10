"use client";

import { useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "../sections/FAQSection";
import { Quote } from "lucide-react";
import { 
  Zap, Shield, TrendingUp, Users, Cloud, Database, 
  Briefcase, Bot, RefreshCw, Building2, Factory, 
  Laptop, BarChart3, Hospital, Plane, ArrowRight, 
  Target, Globe, Lock, Code, Network, Cpu, 
  LineChart, Workflow, Gauge, Layers, Sparkles,
  Hand, Search, Heart, Package, MessageSquare, MapPin, 
  PenTool, Truck, Leaf, ChefHat, Hammer, CheckCircle2, Book
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// -----------------------------------------------------------------------------
// COMPONENTS
// -----------------------------------------------------------------------------

// 1. Hero Section: Refined Text Sizes & Reveal
const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Text Reveal from Mask
    tl.fromTo(".hero-line-inner", 
      { yPercent: 100, rotateX: 20 },
      { yPercent: 0, rotateX: 0, duration: 1.2, ease: "power4.out", stagger: 0.1 }
    );

    // Fade in Sub & CTA
    tl.fromTo(subRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 
      "-=0.6"
    );
    tl.fromTo(ctaRef.current, 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, 
      "-=0.8"
    );

    // Background Parallax
    gsap.to(".hero-bg-blob", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-transparent pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="hero-bg-blob absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-200/30 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="hero-bg-blob absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-200/30 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Main Headline with scaled down sizes */}
        <div className="mb-8 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
             <div className="overflow-hidden"><span className="hero-line-inner block">Digital Transformation</span></div>
             <div className="overflow-hidden"><span className="hero-line-inner block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services in the UK</span></div>
             <div className="overflow-hidden"><span className="hero-line-inner block text-3xl md:text-5xl mt-4">For Scalable, Future-Ready Businesses</span></div>
          </h1>
        </div>

        <p ref={subRef} className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          In a rapidly evolving UK market, digital transformation enables organisations to stay competitive, resilient, and future-ready. At Webnox Digital, we provide digital transformation services in the UK that help organisations modernise systems, streamline operations, and build digital foundations aligned with long-term business outcomes.
        </p>

        <div ref={ctaRef} className="flex flex-col items-center gap-6">
          <Link href="/contact-us#contact-form" className="group relative px-6 py-3 md:px-10 md:py-5 bg-blue-600 text-white rounded-full overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all">
            <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative font-bold text-base md:text-lg flex items-center gap-2 text-center leading-tight">
              Book a Free Strategy Consultation <ArrowRight size={18} className="shrink-0" />
            </span>
          </Link>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-medium">
            <span className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-slate-200 backdrop-blur-sm">
              <Shield size={16} className="text-blue-500"/> Enterprise & SME Expertise
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-slate-200 backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-blue-500"/> Proven Digital Transformation Delivery
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-slate-200 backdrop-blur-sm">
              <Globe size={16} className="text-blue-500"/> Serving Businesses Across the UK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


// 2. Benefits: Clean Book Page-Turn Animation
const Benefits = () => {
  const bookRef = useRef(null);
  
  const pages = [
    { 
      id: 0, 
      type: 'cover',
      title: "Why Digital Transformation Matters for UK Businesses",
      subtitle: "Digital transformation empowers organisations to improve efficiency, reduce operational risk, and respond faster to changing customer and market demands."
    },
    { id: 1, title: "Operational Efficiency", desc: "Streamline processes and reduce manual overhead.", icon: Gauge, image: "/images/usa/metro.jpg" },
    { id: 2, title: "Scalability & Flexibility", desc: "Build systems that adapt as your business grows.", icon: TrendingUp, image: "/images/usa/test.jpg" },
    { id: 3, title: "Cost Control & Optimisation", desc: "Replace legacy infrastructure with efficient digital platforms.", icon: LineChart, image: "/images/aboutimg1.webp" },
    { id: 4, title: "Data-Led Decisions", desc: "Gain real-time visibility and actionable insights.", icon: Database, image: "/images/aboutimg2.webp" },
    { id: 5, title: "Customer Experience Enhancement", desc: "Deliver consistent, digital-first customer journeys.", icon: Users, image: "/images/aboutimg3.webp" },
    { id: 6, title: "Future-Ready Technology", desc: "Prepare your organisation for innovation and emerging technologies.", icon: Zap, image: "/images/aboutrobot.png" }
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Page turn animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bookRef.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      pages.forEach((page, i) => {
        if (i < pages.length - 1) {
          tl.to(`#page-${i}`, {
            rotateY: -180,
            duration: 1,
            ease: "power2.inOut",
            onUpdate: function() {
              // Midway through the turn, switch z-index so it doesn't block the next page
              const progress = this.progress();
              const element = document.getElementById(`page-${i}`);
              if (element) {
                if (progress > 0.5) {
                  element.style.zIndex = i + 1; // Lower z-index for turned pages
                } else {
                  element.style.zIndex = pages.length - i; // Higher z-index for unturned pages
                }
              }
            }
          });
        }
      });

      // Floating Animation (Water Effect)
      gsap.to(".book-container", {
        y: 20,
        rotateZ: 0.5,
        scale: 1.01,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".book-shadow", {
        scale: 0.9,
        opacity: 0.08,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, { scope: bookRef });

  return (
    <section ref={bookRef} className="relative md:h-screen bg-transparent overflow-hidden flex flex-col items-center justify-center py-10 md:py-0">
      <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center" style={{ perspective: '2000px' }}>
        
        {/* Mobile View: Vertical Stack of Cards */}
        <div className="md:hidden w-full flex flex-col gap-6 pb-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-2">Why Digital Transformation Matters</h2>
            <p className="text-slate-600 text-sm">Empowering organisations to improve efficiency and reduce risk.</p>
          </div>
          {pages.slice(1).map((page) => {
             const Icon = page.icon;
             return (
                <div key={page.id} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col gap-3">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                     <Icon size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 leading-tight">{page.title}</h3>
                 </div>
                 <p className="text-slate-600 text-sm">{page.desc}</p>
                 {page.image && (
                   <div className="relative w-full h-48 rounded-xl overflow-hidden mt-2">
                     <Image src={page.image} alt={page.title} fill className="object-cover" />
                   </div>
                 )}
               </div>
             );
          })}
        </div>


        {/* Desktop View: Book Animation */}
        <div className="hidden md:flex book-container relative w-full max-w-5xl h-[600px] items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Enhanced clean shadow for floating effect */}
          <div className="book-shadow absolute -bottom-16 w-[80%] h-8 bg-blue-900/10 blur-xl rounded-[100%] transition-transform duration-[3s] ease-in-out" />
          
          {/* Book - Two page spread */}
          <div className="relative w-full h-full flex shadow-2xl rounded-xl" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Left page - Base background (first image) */}
            <div className="w-1/2 h-full bg-[#f8fbff] rounded-l-xl border-r border-blue-100 relative overflow-hidden flex items-center justify-center">
                {/* Initial background shown when book is closed or just opened */}
                <div className="text-blue-100/50 flex flex-col items-center">
                    <Book size={120} strokeWidth={1} />
                </div>
            </div>
            
            {/* Pages mapping */}
            <div className="w-1/2 h-full relative" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Spiral Spine / Binding */}
              <div className="absolute left-0 -translate-x-1/2 top-4 bottom-4 w-8 z-[100] flex flex-col justify-between py-2 pointer-events-none">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="relative group">
                    {/* Metal Ring */}
                    <div className="w-10 h-2.5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] -rotate-[15deg] border border-slate-300 relative z-10" />
                    {/* Ring Hole Shadow */}
                    <div className="absolute top-1/2 left-0 w-2 h-2 bg-black/20 rounded-full -translate-y-1/2" />
                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-black/20 rounded-full -translate-y-1/2" />
                  </div>
                ))}
                {/* Vertical Spine Shadow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-black/10 blur-[2px]" />
              </div>

              {/* Static Back Page (Reveal at the end) */}
              <div className="absolute inset-0 bg-[#f8fbff] rounded-r-xl p-8 md:p-12 border-l border-blue-50 flex items-center justify-center">
                <div className="text-center text-blue-200">
                   <Zap size={48} className="mx-auto mb-4 opacity-50" />
                   <p className="font-bold">Next Phase Ready</p>
                </div>
              </div>

              {pages.map((page, index) => {
                // Get the next page's data for the back of this page
                const nextPage = index + 1 < pages.length ? pages[index + 1] : null;
                
                return (
                <div
                  key={page.id}
                  id={`page-${index}`}
                  className="absolute inset-0"
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'left center',
                    zIndex: pages.length - index
                  }}
                >
                  {/* Page Front: Shows Text for spread [index] */}
                  <div 
                    className="absolute inset-0 bg-[#f8fbff] rounded-r-xl border-l border-blue-50"
                    style={{ backfaceVisibility: 'hidden', zIndex: 2 }}
                  >
                    <div className="h-full p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                      {/* Internal Page Doodles (Background) */}
                      <div className="absolute top-6 right-6 text-blue-100 opacity-60">
                        <Sparkles size={60} />
                      </div>
                      <div className="absolute bottom-10 left-8 text-cyan-50 opacity-50 rotate-12">
                         <svg width="80" height="80" viewBox="0 0 100 100">
                           <path d="M10,90 Q50,10 90,90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                         </svg>
                      </div>

                      {page.type === 'cover' ? (
                        <div className="text-center space-y-6 relative z-10">
                          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-4">
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Strategic Benefits</span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            {page.title}
                          </h2>
                          <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
                            {page.subtitle}
                          </p>
                          {/* Specific Cover Doodle */}
                          <div className="absolute -top-10 -right-4 text-yellow-400 opacity-40 rotate-[15deg]">
                            <Zap size={40} fill="currentColor" />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6 relative z-10">
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight flex items-start gap-3">
                            {page.title}
                            {/* Title Doodle */}
                             <span className="text-yellow-400 animate-pulse mt-1 opacity-80"><Sparkles size={20} fill="currentColor" /></span>
                          </h3>
                          <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            {page.desc}
                          </p>
                          <div className="pt-4">
                            <div className="h-px bg-gradient-to-r from-blue-500/40 to-transparent" />
                          </div>
                          <div className="absolute bottom-6 right-8 text-xs text-blue-400 font-bold flex items-center gap-2">
                            <span>Benefit {page.id}</span>
                            <div className="w-8 h-1 bg-cyan-200 rounded-full" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Page Back: Shows Image for the NEXT page */}
                  <div 
                    className="absolute inset-0 bg-[#f8fbff] rounded-l-xl p-8 overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      zIndex: 1
                    }}
                  >
                    {nextPage && nextPage.image && (
                      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
                        {/* Scrapbook Image Layout */}
                        <div className="relative group w-full flex flex-col items-center">
                           {/* Sellotape */}
                           <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-10 ${index % 2 === 0 ? 'bg-cyan-400/30' : 'bg-blue-400/30'} backdrop-blur-[2px] ${index % 2 === 0 ? 'rotate-[-15deg]' : 'rotate-[12deg]'} border border-white/30 shadow-sm z-30 pointer-events-none`} 
                           style={{ clipPath: 'polygon(2% 15%, 98% 5%, 100% 50%, 97% 95%, 5% 90%, 0% 50%)' }} />
                           
                           <div className={`relative ${index % 3 === 0 ? 'w-64 h-64 md:w-72 md:h-72' : 'w-56 h-56 md:w-64 md:h-64'} transform ${index % 2 === 0 ? 'rotate-[-4deg]' : 'rotate-[3deg]'} shadow-2xl p-2 bg-white ring-1 ring-blue-100`}>
                             <Image 
                               src={nextPage.image}
                               alt={nextPage.title}
                               fill
                               className="object-cover"
                             />
                           </div>
                           <div className="mt-6 text-center">
                              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200 shadow-sm mx-auto mb-2 text-blue-600 font-bold text-xs">
                                {nextPage.id}
                              </div>
                              <p className="text-[10px] text-blue-400/70 font-black uppercase tracking-widest">Evidence Item</p>
                           </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>

        {/* Floating Instruction - Desktop Only */}
        <div className="hidden md:block absolute bottom-12 left-0 right-0 text-center z-20">
          <p className="text-blue-500/50 font-bold text-xs uppercase tracking-[0.3em] mb-4">Scroll to Flip Pages</p>
          <div className="w-6 h-10 border-2 border-blue-200 rounded-full mx-auto relative mb-6">
             <div className="w-1.5 h-1.5 bg-blue-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
          </div>
          <Link href="/contact-us#contact-form" className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all">
            Start Your Digital Transformation Journey <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};






// 3. Why Choose Us: Horizontal Scroll Timeline
const Differentiators = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const scrollContainer = containerRef.current;
    
    mm.add("(min-width: 768px)", () => {
      gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + scrollContainer.scrollWidth,
          invalidateOnRefresh: true,
        }
      });
    });

  }, { scope: sectionRef });

  const items = [
    { title: "UK Market Understanding", desc: "Experience across finance, healthcare, retail, SaaS, and professional services.", icon: Globe },
    { title: "Security & Compliance Focused", desc: "GDPR-ready, enterprise-grade security and governance practices.", icon: Lock },
    { title: "Scalable Architectures", desc: "Designed for growth, resilience, and performance.", icon: Layers },
    { title: "Proven Delivery Frameworks", desc: "Agile, data-driven, and user-centric transformation methodologies.", icon: Workflow },
    { title: "Long-Term Digital Partnership", desc: "Ongoing optimisation, support, and strategic guidance.", icon: Users },
  ];

  return (
    <section ref={sectionRef} className="bg-transparent text-slate-900 overflow-hidden md:h-screen flex flex-col justify-center relative py-12 md:py-0">
      <div className="container mx-auto px-6 mb-8 md:mb-12 flex-shrink-0">
         <h2 className="text-3xl md:text-6xl font-bold mt-2 mb-4 md:mb-6 text-slate-900 leading-tight">Why UK Organisations Choose Our <br className="hidden md:block"/><span className="text-blue-600">Digital Transformation Services</span></h2>
         <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed">We deliver structured, outcome-driven transformation initiatives aligned with business goals and regulatory expectations.</p>
      </div>

      <div ref={containerRef} className="flex flex-col md:flex-row gap-6 md:gap-8 px-6 w-full md:w-max overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory font-sans">
        {items.map((item, i) => {
           const Icon = item.icon;
           return (
            <div key={i} className="flex-shrink-0 w-full md:w-[500px] h-auto md:h-[50vh] bg-white/40 backdrop-blur-md border border-slate-200/50 rounded-3xl p-6 md:p-10 flex flex-col gap-4 md:justify-between hover:bg-white/60 transition-colors duration-300 shadow-xl shadow-blue-500/5 snap-center">
               <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                 <Icon size={28} className="md:size-[32px]" />
               </div>
               <div>
                 <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-4 text-slate-900 leading-tight">{item.title}</h3>
                 <p className="text-slate-600 text-base md:text-lg leading-relaxed">{item.desc}</p>
               </div>
               <div className="hidden md:block w-full h-1 bg-slate-200 rounded-full overflow-hidden mt-6">
                  <div className="h-full bg-blue-500 w-1/3" />
               </div>
            </div>
           );
        })}
      </div>
    </section>
  );
};

// 4. Ecosystem: Sticky Scroll & Slanted Connected Cards
const Ecosystem = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      // Helper to setup SVG paths for drawing animation without plugins
      const setupPath = (id) => {
        const path = document.querySelector(id);
        if (path && path.getTotalLength) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });
          return length;
        }
        return 0;
      };

      const line1Length = setupPath("#line-1-2");
      // For multiple lines with same class, we handle them carefully or just target by IDs for simplicity in this specific layout
      const line3Paths = document.querySelectorAll(".line-to-3");
      line3Paths.forEach(path => {
        if(path.getTotalLength) {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2500", // Long scroll distance for stepped animation
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // 0. Initial Reveal for Header Text
      tl.from(".eco-text-reveal", {
        y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
      });

      // 1. Reveal Strategy Card (Top Left)
      tl.fromTo("#card-1", 
        { y: 800, x: -150, rotation: -30, opacity: 0 },
        { y: 0, x: 0, rotation: -6, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // 2. Reveal Technology Card (Top Right)
      tl.fromTo("#card-2", 
        { y: 800, x: 150, rotation: 30, opacity: 0 },
        { y: 0, x: 0, rotation: 6, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // 3. Connect 1 & 2 (Now happens clearly AFTER cards are in place)
      tl.to("#line-1-2", 
        { strokeDashoffset: 0, duration: 0.8, ease: "none" },
        "+=0.2" // Slight delay to separate from card entry
      );

      // 4. Reveal Optimisation Card (Bottom Center)
      tl.fromTo("#card-3", 
        { y: 800, rotation: 15, opacity: 0 },
        { y: 0, rotation: -3, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // 5. Connect to 3 (Happens clearly AFTER card 3 is in place)
      tl.to(".line-to-3", 
        { strokeDashoffset: 0, duration: 0.8, ease: "none" },
        "+=0.2"
      );

      // 6. Final "Lock In"
      tl.to([".eco-card"], {
        scale: 1.05,
        rotation: 0, 
        duration: 0.5,
        ease: "power1.inOut"
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={triggerRef} className="bg-transparent relative"> 
      <div ref={containerRef} className="md:h-[85vh] md:min-h-[900px] w-full flex flex-col items-center justify-center overflow-hidden relative bg-transparent py-20 md:py-0">
        
        {/* Background Text - Scaled down */}
        <div className="relative md:absolute top-0 md:top-16 lg:top-20 text-center z-10 px-6 max-w-4xl mx-auto mb-12 md:mb-0">
          <h2 className="eco-text-reveal text-3xl md:text-5xl font-black text-slate-900 mb-4">A Complete Digital Transformation Ecosystem</h2>
          <p className="eco-text-reveal text-lg text-slate-600">Successful transformation depends on a connected ecosystem—not isolated initiatives.</p>
        </div>

        {/* Animation Stage - Desktop */}
        <div className="relative w-full max-w-6xl h-full mt-20 hidden md:block">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {/* Pronounced curved "string" connection - Higher up now */}
            <path 
              id="line-1-2" 
              d="M320 340 Q 570 140 820 340" 
              stroke="#CBD5E1" 
              strokeWidth="4" 
              strokeDasharray="10 10" 
              fill="none" 
              className="opacity-0"
            />
            {/* Curves to the bottom card */}
            <path 
              d="M320 340 Q 350 600 570 730" 
              stroke="#3B82F6" 
              strokeWidth="4" 
              fill="none" 
              className="line-to-3 opacity-0"
            />
            <path 
              d="M820 340 Q 790 600 570 730" 
              stroke="#3B82F6" 
              strokeWidth="4" 
              fill="none" 
              className="line-to-3 opacity-0"
            />
          </svg>

          {/* Card 1: Strategy - Positioned even higher at 32% top */}
          <div id="card-1" className="eco-card absolute top-[32%] left-[10%] w-80 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-slate-100/50 transform -rotate-6 z-10 origin-center will-change-transform">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">01</div>
               <Target size={32} className="text-blue-600"/>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Strategy & Assessment</h3>
            <p className="text-sm text-slate-500 font-medium">We assess digital maturity chains and systems to define clearer workflows.</p>
          </div>

          {/* Card 2: Technology - Positioned at 32% top */}
          <div id="card-2" className="eco-card absolute top-[32%] right-[10%] w-80 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-slate-100/50 transform rotate-6 z-10 origin-center will-change-transform">
             <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold">02</div>
               <Code size={32} className="text-cyan-600"/>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Tech & Implementation</h3>
            <p className="text-sm text-slate-500 font-medium">Upgrade legacy environments and implement scalable digital solutions.</p>
          </div>

          {/* Card 3: Optimisation */}
          <div id="card-3" className="eco-card absolute bottom-[5%] left-1/2 -translate-x-1/2 w-96 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-2 border-slate-100/50 transform -rotate-3 z-20 origin-center will-change-transform">
             <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">03</div>
               <TrendingUp size={32} className="text-indigo-600"/>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Optimisation & Growth</h3>
            <p className="text-slate-500 font-medium text-base">Automation, analytics, and continuous improvement for long-term growth.</p>
          </div>

        </div>

        {/* Mobile Fallback */}
        <div className="md:hidden w-full px-6 space-y-4 mt-8 pb-12">
            <NodeCard title="Strategy & Assessment" desc="Assess digital maturity chains and systems." icon={Target} color="bg-blue-500" mobile />
            <div className="h-6 w-0.5 bg-slate-300 mx-auto" />
            <NodeCard title="Tech & Implementation" desc="Upgrade legacy environments and solutions." icon={Code} color="bg-cyan-500" mobile />
             <div className="h-6 w-0.5 bg-slate-300 mx-auto" />
            <NodeCard title="Optimisation & Growth" desc="Automation, analytics, and continuous growth." icon={TrendingUp} color="bg-indigo-500" mobile />
        </div>
      </div>
    </section>
  );
};

const NodeCard = ({ title, desc, icon: Icon, color, mobile }) => (
  <div className={`bg-white p-5 rounded-2xl shadow-lg border border-slate-100 flex flex-col gap-2 text-left z-20 relative`}>
    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-white shrink-0`}>
      <Icon size={20} />
    </div>
    <div>
      <h3 className="text-lg font-bold text-slate-800 leading-tight mb-1">{title}</h3>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  </div>
);

// 5. Services: Hover Accordion Grid
const Services = () => {
  const containerRef = useRef(null);
  
  const services = [
    { title: "IT & Legacy System Modernisation", desc: "We modernise legacy environments to reduce technical debt and improve reliability and performance.", icon: RefreshCw },
    { title: "Cloud Enablement & Infrastructure", desc: "Secure, scalable cloud adoption that improves flexibility and operational resilience.", icon: Cloud },
    { title: "Data Modernisation & Analytics", desc: "Our data modernisation consulting in the UK consolidates data sources and enables accurate, real-time insights.", icon: Database },
    { title: "Digital Workplace Solutions", desc: "Tools and platforms that enhance collaboration, productivity, and workforce efficiency.", icon: Laptop },
    { title: "AI & Intelligent Automation", desc: "Where appropriate, we apply intelligent automation to improve operational speed and decision-making.", icon: Bot },
    { title: "Business Transformation Consulting", desc: "We align people, processes, and technology for sustainable change.", icon: Briefcase },
  ];

  useGSAP(() => {
    gsap.from(".service-item", {
      y: 50, opacity: 0, stagger: 0.1,
      scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 md:py-24 bg-transparent">
      <div className="container mx-auto px-6 mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">Our Digital Transformation Services in the UK</h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed">Our digital transformation services for modern businesses are tailored to organisational size, industry, and complexity.</p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="service-item bg-white/40 backdrop-blur-md p-6 md:p-10 hover:bg-white/60 transition-colors duration-500 group cursor-pointer group h-full">
              <div className="flex justify-between items-start mb-4 md:mb-8">
                <Icon size={32} className="text-slate-300 md:size-[40px] group-hover:text-blue-500 transition-colors duration-300" />
                <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500"/>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 leading-tight">{s.title}</h3>
              <p className="text-slate-500 group-hover:text-slate-800 transition-colors text-sm md:text-base leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="container mx-auto px-6 mt-10 md:mt-12 text-center">
        <p className="text-slate-500 mb-6 text-sm md:text-base">We also deliver digital transformation consulting London and UK-wide support for organisations at different stages of growth.</p>
        <Link href="/contact-us#contact-form" className="inline-block px-6 py-3 md:px-8 md:py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold md:text-lg text-sm hover:bg-slate-900 hover:text-white transition-colors leading-tight">
          Request a Digital Transformation Consultation
        </Link>
      </div>
    </section>
  );
};

// 6. Industries: Minimal Card Design
const Industries = () => {
  const industries = [
    { icon: Hand, title: "Finance & FinTech", iconColor: "text-blue-600", borderColor: "border-blue-200" },
    { icon: Package, title: "Retail & E-commerce", iconColor: "text-purple-600", borderColor: "border-purple-200" },
    { icon: Heart, title: "Healthcare & Public Sector", iconColor: "text-pink-600", borderColor: "border-pink-200" },
    { icon: Shield, title: "Security & Compliance", iconColor: "text-slate-700", borderColor: "border-slate-200" },
    { icon: PenTool, title: "Strategy & Tech Consulting", iconColor: "text-cyan-600", borderColor: "border-cyan-200" },
    { icon: Factory, title: "Manufacturing", iconColor: "text-indigo-600", borderColor: "border-indigo-200" },
    { icon: Truck, title: "Logistics", iconColor: "text-teal-600", borderColor: "border-teal-200" },
    { icon: Leaf, title: "Garden Tech & Agriculture", iconColor: "text-green-600", borderColor: "border-green-200" },
    { icon: ChefHat, title: "Hospitality", iconColor: "text-orange-600", borderColor: "border-orange-200" },
    { icon: Hammer, title: "Real Estate & Construction", iconColor: "text-amber-600", borderColor: "border-amber-200" },
    { icon: Laptop, title: "Tech & SaaS", iconColor: "text-violet-600", borderColor: "border-violet-200" },
    { icon: Building2, title: "Professional Services", iconColor: "text-gray-700", borderColor: "border-gray-200" }
  ];

  return (
    <section className="py-10 md:py-20 bg-transparent overflow-hidden relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">Industries We Support</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Driving measurable growth across key UK sectors with tailored digital solutions.</p>
        </div>

        {/* Compact Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className={`industry-card bg-white rounded-2xl p-5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 ${industry.borderColor} group cursor-pointer shadow-lg relative z-10 entrance-animation`}
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <div className={`${industry.iconColor} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  {industry.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact-us" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group text-base">
            Explore All Industry Transformations
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .entrance-animation {
          opacity: 0;
          transform: translateY(10px);
          animation: simpleFadeIn 0.6s ease-out forwards;
        }

        @keyframes simpleFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

// 7. Coverage
const Coverage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".coverage-item", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-10 md:py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900 tracking-tight leading-tight">Serving UK Enterprises & SMEs</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6 md:mb-8" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We work with enterprises and SMEs across the UK, delivering scalable solutions that grow with organisational complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { city: "London", desc: "Finance, Enterprise & Innovation" },
            { city: "Manchester", desc: "Digital & Technology Growth" },
            { city: "Birmingham", desc: "Manufacturing & Services" },
            { city: "Nationwide", desc: "Complete UK Support" }
          ].map((c, i) => (
            <div key={i} className="coverage-item flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{c.city}</h3>
              <p className="text-slate-500 leading-relaxed px-4">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. Modern Testimonial (Matching Image Design)
const ModernTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Mark Smith",
      role: "CEO & Founder",
      content: "Webnox digital transformation services have been instrumental in our shift towards a data-driven culture. Their expertise helped us streamline operations significantly.",
      company: "webflow",
      image: "/images/cons4.png"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Operational Director",
      content: "The transition to a cloud-first ecosystem was seamless thanks to the strategic guidance from the Webnox team. Our efficiency has increased by 40%.",
      company: "Salesforce",
      image: "/images/cons5.png"
    },
    {
       id: 3,
       name: "David Ross",
       role: "Tech Lead",
       content: "A professional and outcome-driven approach. They understood our complex constraints and built a transformation roadmap that actually worked.",
       company: "Microsoft",
       image: "/images/cons6.png"
    }
  ];

  const handleNext = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -10,
      duration: 0.2,
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        gsap.fromTo(contentRef.current, 
          { opacity: 0, x: 10 }, 
          { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
        );
      }
    });
  };

  const handlePrev = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: 10,
      duration: 0.2,
      onComplete: () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        gsap.fromTo(contentRef.current, 
          { opacity: 0, x: -10 }, 
          { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
        );
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(".doodle-fade", 
      { opacity: 0, scale: 0.8 }, 
      { 
        opacity: 0.4, 
        scale: 1, 
        duration: 1.5, 
        stagger: 0.3, 
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-10 md:py-20 bg-transparent testimonial-reveal">
      <div className="container mx-auto px-6">
        {/* Compact Rectangular Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100 relative group">
          
          {/* Hand-drawn Doodles */}
          <div className="absolute top-6 right-10 doodle-fade pointer-events-none text-blue-400 rotate-12">
             <Sparkles size={32} />
          </div>
          <div className="absolute bottom-10 left-6 doodle-fade pointer-events-none text-yellow-400 -rotate-12 opacity-40">
             <Zap size={24} fill="currentColor" />
          </div>
          {/* Swirly SVG Doodle */}
          <svg className="absolute top-1/2 right-4 w-12 h-12 text-blue-200 doodle-fade -translate-y-1/2" viewBox="0 0 100 100">
             <path d="M10,50 Q40,10 70,50 T130,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          </svg>

          <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 relative z-10">
            
            {/* Left Column: Compact Teardrop */}
            <div className="relative w-full max-w-[240px] md:max-w-[280px] mx-auto md:mx-0">
              <div 
                className="absolute inset-0 bg-[#fbc02d] rounded-[50%_0%_50%_50%] transform rotate-[-3deg]" 
                style={{ width: '100%', paddingBottom: '100%' }}
              />
              <div className="relative z-10 p-2">
                <div className="relative w-full overflow-hidden rounded-[50%_0%_50%_50%] bg-[#fbc02d]">
                  <div style={{ width: '100%', paddingBottom: '100%' }} className="relative">
                    <Image 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div ref={contentRef} className="w-full">
                <div className="text-[#edf2f7] mb-4">
                  <Quote size={48} fill="currentColor" />
                </div>

                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="mb-6">
                  <div className="text-xl font-black text-blue-600 lowercase mb-1 tracking-tight">
                    {testimonials[currentIndex].company}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-slate-900">{testimonials[currentIndex].name}</span>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">{testimonials[currentIndex].role}</span>
                  </div>
                </div>

                {/* Compact Nav */}
                <div className="flex items-center gap-4">
                  <button onClick={handlePrev} className="w-10 h-10 flex items-center justify-center text-slate-300 hover:text-blue-600 transition-colors">
                    <ArrowRight className="rotate-180" size={20} />
                  </button>
                  <div className="w-10 h-px bg-slate-100" />
                  <button 
                    onClick={handleNext} 
                    className="w-14 h-11 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    <ArrowRight size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 8. Custom FAQ Wrapper
const FAQWrapper = () => (
  <div className="py-6 md:py-12 bg-transparent">
    <FAQSection faqs={[
      { question: "Is digital transformation suitable for small and medium businesses?", answer: "Yes. We deliver digital transformation strategies for small business as well as enterprise-scale initiatives." },
      { question: "Do you provide consulting as well as implementation?", answer: "Yes. Our work is consulting-led, with implementation aligned to strategic goals." },
      { question: "Is transformation delivered all at once?", answer: "No. Most programmes are delivered in phases to manage risk and adoption." },
      { question: "How do you measure success?", answer: "Success is measured through efficiency gains, system performance, adoption, and business impact." }
    ]} />
  </div>
);

// 9. Final CTA
const FinalCTA = () => (
  <section className="py-16 md:py-32 bg-gradient-to-br from-blue-400 to-cyan-300 relative overflow-hidden flex items-center justify-center text-center">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
    <div className="container mx-auto px-6 relative z-10 max-w-4xl">
      <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">Ready to Transform How Your Organisation Operates?</h2>
      <p className="text-lg md:text-xl text-slate-700 mb-8 md:mb-12 font-medium leading-relaxed">If you’re looking for digital transformation services in the UK that focus on efficiency, scalability, and long-term value, our team is ready to help.</p>
      <Link href="/contact-us#contact-form" className="inline-block bg-blue-600 text-white px-8 py-3 md:px-12 md:py-5 rounded-full text-lg md:text-xl font-bold hover:scale-105 transition-transform shadow-2xl leading-tight">
        Get a free Consultation
      </Link>
    </div>
  </section>
);

export default function DigitalTransformationNew() {
  return (
    <main className="w-full relative overflow-x-hidden bg-white min-h-screen">
      <div className="fixed inset-0 z-0 bg-gradient-to-bl from-white via-[#e0f8ff] to-[#e8e0ff] pointer-events-none" />
      <div className="relative z-10">
      <Hero />
      <Benefits />
      <Differentiators />
      <Ecosystem />
      <Services />
      <Industries />
      <Coverage />
      <ModernTestimonial />
      <FAQWrapper />
      <FinalCTA />
      </div>
    </main>
  );
}