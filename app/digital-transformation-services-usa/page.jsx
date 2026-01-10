"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Zap,
  TrendingUp,
  Users,
  Cloud,
  Database,
  Briefcase,
  Bot,
  RefreshCw,
  MapPin,
  Building2,
  Factory,
  Laptop,
  BarChart3,
  Hospital,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Code,
  Network,
  Cpu,
  Binary,
  Settings,
  DollarSign,
  ShoppingBag,
  Lightbulb,
  Layers,
  Scale,
  ChevronDown,
  ChevronUp,
  CheckCircle
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, useGSAP);
}

// SECTION 1: HERO
const DigitalTransformationHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(titleRef.current,
      { y: 150, opacity: 0, rotationX: 90, transformPerspective: 1000 },
      { y: 0, opacity: 1, rotationX: 0, duration: 2, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo(subtitleRef.current,
      { y: 80, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, delay: 1, ease: "power3.out" }
    );
  }, { scope: heroRef });

  const digitalElements = [
    { icon: Code, position: { top: "20%", left: "10%" } },
    { icon: Network, position: { top: "30%", right: "15%" } },
    { icon: Cpu, position: { top: "60%", left: "8%" } },
    { icon: Binary, position: { top: "15%", right: "25%" } },
    { icon: Database, position: { top: "70%", right: "10%" } },
    { icon: Cloud, position: { top: "45%", left: "15%" } },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen pt-28 md:pt-40 pb-12 md:pb-20 overflow-hidden bg-transparent">
      {/* Decorative large blurred circles like home page */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[130px] pointer-events-none" />
      
      {[...Array(6)].map((_, index) => (
         <div key={index} className="hidden md:block absolute w-64 h-64 bg-[#00B9FF]/5 rounded-full blur-3xl animate-pulse"
           style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${index}s`, animationDuration: `${5 + index}s` }}
         />
      ))}
      {digitalElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <div key={index} className="hidden md:block absolute text-blue-300/30" style={element.position}>
            <IconComponent size={40} />
          </div>
        );
      })}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-gray-900 leading-tight" style={{ transformStyle: "preserve-3d" }}>
            Digital Transformation Services in the USA for<br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent">Scalable, Future-Ready Businesses</span>
          </h1>
          <p ref={subtitleRef} className="text-base md:text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
            Digital transformation is no longer about adopting new tools, it's about redesigning how businesses operate, make decisions, and scale in a digital-first economy. At Webnox Digital, we deliver digital transformation services in the USA that help organisations modernise systems, optimise processes, and align technology with real business outcomes.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16">
            <Link href="/contact-us" className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center">
              Book a Free Strategy Consultation <ArrowRight size={18} className="md:w-5 md:h-5"/>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto border-t border-gray-100 pt-12">
             <div className="flex items-center justify-center gap-3">
               <span className="text-3xl font-bold text-[#00B9FF]">500+</span>
               <span className="text-gray-600 text-left text-sm font-semibold">Projects <br/>Delivered</span>
             </div>
             <div className="flex items-center justify-center gap-3 md:border-l md:border-r border-gray-100 px-6">
                <Building2 className="text-[#0097D9]" size={32}/>
               <span className="text-gray-600 text-left text-sm font-semibold">Enterprise & SME <br/>Experience</span>
             </div>
             <div className="flex items-center justify-center gap-3">
                <Globe className="text-[#007AC3]" size={32}/>
               <span className="text-gray-600 text-left text-sm font-semibold">Serving Businesses <br/>Across the USA</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SECTION 2: WHY MATTERS (YIN YANG STACKED/PORTAL ANIMATION - OPTIMIZED)
const WhyMattersSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const row1Left = useRef(null);
    const row1Right = useRef(null);
    const row2Container = useRef(null);
    const row2Left = useRef(null);
    const row2Right = useRef(null);
    const row3Container = useRef(null);

    const benefits = [
        { title: "Operational Efficiency", desc: "Reduce manual processes and improve workflow automation across teams.", icon: Settings },
        { title: "Scalability & Agility", desc: "Build systems that grow with your business and adapt to market changes.", icon: TrendingUp },
        { title: "Cost Optimization", desc: "Replace outdated infrastructure with efficient, cloud-based solutions.", icon: DollarSign },
        { title: "Data-Driven Decisions", desc: "Turn real-time data into actionable insights.", icon: BarChart3 },
        { title: "Enhanced Experience", desc: "Deliver consistent, seamless digital experiences across touchpoints.", icon: Users },
        { title: "Future-Ready Architecture", desc: "Prepare your business for emerging technologies and innovation.", icon: Layers }
    ];

    useGSAP(() => {
        const mm = gsap.matchMedia();
        
        mm.add("(min-width: 768px)", () => {
             // Desktop: Stick & Split Logic
             const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=1800",
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            gsap.set(row2Container.current, { scale: 0.6, autoAlpha: 0, force3D: true });
            gsap.set(row3Container.current, { scale: 0.6, autoAlpha: 0, force3D: true });
            gsap.set([row1Left.current, row1Right.current], { force3D: true });
            gsap.set([row2Left.current, row2Right.current], { force3D: true });

            // Phase 1: Row 1 Splits, Row 2 Emerges
            tl.to(row1Left.current, { x: -600, rotation: -10, autoAlpha: 0, duration: 1.5, ease: "power1.inOut" }, 0)
              .to(row1Right.current, { x: 600, rotation: 10, autoAlpha: 0, duration: 1.5, ease: "power1.inOut" }, 0)
              .to(row2Container.current, { scale: 1, autoAlpha: 1, duration: 1.5, ease: "power1.out" }, 0.3);

            // Phase 2: Row 2 Splits, Row 3 Emerges
            tl.to(row2Left.current, { x: -600, rotation: -10, autoAlpha: 0, duration: 1.5, ease: "power1.inOut" }, "+=0.3")
              .to(row2Right.current, { x: 600, rotation: 10, autoAlpha: 0, duration: 1.5, ease: "power1.inOut" }, "<")
              .to(row3Container.current, { scale: 1, autoAlpha: 1, duration: 1.5, ease: "power1.out" }, "<0.3");
        });

        mm.add("(max-width: 767px)", () => {
            // Mobile: Stack & Fade Logic
             const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=1500",
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            // Init
            gsap.set([row2Container.current, row3Container.current], { autoAlpha: 0, scale: 0.9 });
            
            // Phase 1
            tl.to([row1Left.current, row1Right.current], { autoAlpha: 0, scale: 1.05, duration: 1 }, 0)
              .to(row2Container.current, { autoAlpha: 1, scale: 1, duration: 1 }, 0.2);
              
            // Phase 2
             tl.to([row2Left.current, row2Right.current], { autoAlpha: 0, scale: 1.05, duration: 1 }, "+=0.2")
               .to(row3Container.current, { autoAlpha: 1, scale: 1, duration: 1 }, "<0.2");
        });

    }, { scope: sectionRef });

    const Card = ({ item }) => (
        <div className="relative h-[220px] md:h-[280px] w-[90%] md:w-full mx-auto rounded-[30px] overflow-hidden shadow-2xl bg-white flex flex-col md:flex-row" style={{ willChange: 'transform' }}>
             <div className="w-full md:w-[50%] h-[40%] md:h-full bg-[#111] flex flex-col justify-center p-6 md:p-8 md:pl-10 relative z-10 text-white">
                 <div className="mb-2 md:mb-4 text-[#00B9FF]">
                     <item.icon size={32} className="md:w-10 md:h-10" />
                 </div>
                 <h3 className="text-xl md:text-2xl font-bold leading-tight max-w-[90%]">
                     {item.title}
                 </h3>
             </div>
             <div className="flex-1 bg-white flex items-center p-6 md:p-8 md:pr-10 relative z-0">
                 <p className="text-gray-600 font-medium leading-relaxed md:pl-6 text-sm md:text-base">
                     {item.desc}
                 </p>
             </div>
             {/* Divider - Desktop Only */}
             <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[60px] h-[105%] -translate-x-1/2 -translate-y-[2%] z-20 pointer-events-none">
                  <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M50,0 C90,60 10,140 50,200 L100,200 L100,0 Z" fill="white" />
                  </svg>
             </div>
        </div>
    );

    return (
        <section ref={sectionRef} className="bg-transparent relative">
            {/* The Trigger/Pin Container */}
            <div ref={triggerRef} className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
                
                <div className="absolute top-4 md:top-10 w-full text-center z-50 pointer-events-none px-4">
                    <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gray-50/80 backdrop-blur-sm inline-block px-6 py-2 md:px-10 md:py-3 rounded-full border border-gray-200 shadow-sm">
                        Why Digital Transformation Matters
                    </h2>
                </div>

                {/* Card Stack Container */}
                <div className="relative w-full max-w-5xl h-[520px] md:h-[300px] flex items-center justify-center px-4 mt-20 md:mt-0">
                    
                    {/* Row 3 (Bottom Layer) */}
                    <div ref={row3Container} className="absolute inset-x-0 md:inset-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 z-10 origin-center" style={{ willChange: 'transform, opacity' }}>
                        {benefits.slice(4, 6).map((item, i) => (
                             <Card key={i} item={item} />
                        ))}
                    </div>

                    {/* Row 2 (Middle Layer) */}
                    <div ref={row2Container} className="absolute inset-x-0 md:inset-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 z-20 origin-center" style={{ willChange: 'transform, opacity' }}>
                        <div ref={row2Left} className="w-full" style={{ willChange: 'transform, opacity' }}><Card item={benefits[2]} /></div>
                        <div ref={row2Right} className="w-full" style={{ willChange: 'transform, opacity' }}><Card item={benefits[3]} /></div>
                    </div>

                    {/* Row 1 (Top Layer) */}
                    <div className="absolute inset-x-0 md:inset-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 z-30 origin-center">
                        <div ref={row1Left} className="w-full" style={{ willChange: 'transform, opacity' }}><Card item={benefits[0]} /></div>
                        <div ref={row1Right} className="w-full" style={{ willChange: 'transform, opacity' }}><Card item={benefits[1]} /></div>
                    </div>

                </div>

                <div className="absolute bottom-10 md:bottom-10 text-gray-400 text-xs md:text-sm pointer-events-none">
                    Scroll to Explore
                </div>
            </div>
        </section>
    );
};

// SECTION 3: WHY CHOOSE US
const WhyChooseUsSection = () => {
    const sectionRef = useRef(null);
    const advantageRefs = useRef([]);
  
    useGSAP(() => {
      // Clear Slide From Bottom Stagger
      gsap.fromTo(advantageRefs.current,
        { 
          y: 100, 
          opacity: 0,
          scale: 0.95 
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out", 
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 80%",
            toggleActions: "play none none none"
          } 
        }
      );
    }, { scope: sectionRef });
  
    const reasons = [
      { title: "Strategy-led Consulting", desc: "Business objectives first, technology second.", icon: Lightbulb, color: "text-amber-500", bg: "bg-amber-50" },
      { title: "Enterprise-ready Execution", desc: "Solutions designed for scale and governance.", icon: Building2, color: "text-purple-600", bg: "bg-purple-50" },
      { title: "Integrated Delivery", desc: "Systems, platforms, and data working together.", icon: Network, color: "text-emerald-600", bg: "bg-emerald-50" },
      { title: "Regional Expertise", desc: "Supporting Austin, Dallas, Chicago & beyond.", icon: MapPin, color: "text-blue-600", bg: "bg-blue-50" },
      { title: "Phased Approach", desc: "Manageable phases to reduce risk.", icon: Scale, color: "text-pink-600", bg: "bg-pink-50" }
    ];
  
    return (
      <section ref={sectionRef} className="py-16 md:py-24 bg-transparent overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Why Businesses Across the USA Choose Our
              <span className="block bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent mt-2">
                Digital Transformation Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Businesses across the United States choose our digital transformation consulting services because we focus on outcomes, not tools.
            </p>
          </div>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {reasons.map((reason, index) => (
                <div 
                    key={index} 
                    ref={(el) => (advantageRefs.current[index] = el)} 
                    className="group relative rounded-2xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 ${reason.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon size={28} className={reason.color} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

// SECTION 4: ECOSYSTEM
const EcosystemSection = () => {
  const sectionRef = useRef(null);
  const featureRefs = useRef([]);
  // No complex background movement, cleaner look

  useGSAP(() => {
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(feature, 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, delay: index * 0.2, ease: "power2.out", scrollTrigger: { trigger: feature, start: "top 85%" } }
        );
      }
    });
  }, { scope: sectionRef });

  const items = [
    { title: "Strategy & Assessment", desc: "We evaluate digital maturity, operational workflows, and existing systems to define a clear transformation roadmap aligned with business objectives.", icon: Target },
    { title: "Technology & Implementation", desc: "Through application modernization consulting and legacy application modernization services, we upgrade outdated systems and implement scalable digital platforms.", icon: Cpu },
    { title: "Optimization & Growth", desc: "Using intelligent automation consulting, data modernisation, and continuous optimisation, we help businesses improve performance and sustain long-term growth.", icon: TrendingUp }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight px-5">
            A Complete Digital Transformation 
            <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent block md:inline">Ecosystem</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Successful transformation requires more than isolated improvements; it demands a connected ecosystem.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className={`flex flex-col lg:flex-row items-center gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative">
                    {/* Main Circle */}
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-full flex items-center justify-center shadow-2xl z-10 relative">
                      <item.icon size={48} className="text-white" />
                    </div>
                    {/* Pulsing Waves */}
                    <div className="absolute inset-0 border-2 border-[#00B9FF] rounded-full animate-ping opacity-20 duration-[3s]"></div>
                    <div className="absolute -inset-4 border border-[#00B9FF] rounded-full animate-ping opacity-15 duration-[3s] delay-[1s]"></div>
                    <div className="absolute -inset-8 border border-[#0097D9] rounded-full animate-ping opacity-10 duration-[3s] delay-[2s]"></div>
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left px-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">{item.title}</h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// SECTION 5: SEQUENTIAL SCROLL SERVICES (CENTER TO LEFT)
const SequentialServicesSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const titleRefs = useRef([]);
    const imageCardRefs = useRef([]);
    const contentCardRefs = useRef([]);

    const services = [
      { 
          title: "IT & Legacy System Modernization", 
          desc: "Reduce technical debt and enable future innovation.", 
          list: ["System Audit", "Refactoring", "Cloud Migration"],
          image: "https://images.unsplash.com/photo-1558494949-efdeb6bf80d1?q=80&w=2874&auto=format&fit=crop", 
          id: "01",
          icon: RefreshCw
      },
      { 
          title: "Cloud Enablement", 
          desc: "Secure, scalable cloud adoption for operational resilience.", 
          list: ["AWS/Azure", "Migration", "Optimization"],
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop", 
          id: "02",
          icon: Cloud
      },
      { 
          title: "Data Modernization", 
          desc: "Consolidate data sources and enable real-time insights.", 
          list: ["Analytics", "Warehousing", "Governance"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
          id: "03",
          icon: Database
      },
      { 
          title: "Digital Workplace", 
          desc: "Tools to improve collaboration and workforce efficiency.", 
          list: ["Collaboration", "Remote Work", "Security"],
          image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop", 
          id: "04",
          icon: Laptop
      },
      { 
          title: "AI & Intelligent Automation", 
          desc: "Enhance automation, analytics, and operational intelligence.", 
          list: ["Process Auto", "AI Ops", "Predictive"],
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop", 
          id: "05",
          icon: Bot
      },
      { 
          title: "Business Consulting", 
          desc: "Align people, processes, and technology for change.", 
          list: ["Strategy", "Change Mgmt", "Roadmapping"],
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop", 
          id: "06",
          icon: Briefcase
      }
    ];

    useGSAP(() => {
        const mm = gsap.matchMedia();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=6000",
                scrub: 1, 
                pin: true,
                anticipatePin: 1
            }
        });

        // Setup
        titleRefs.current.forEach((el) => { if(el) gsap.set(el, { autoAlpha: 0, left: "50%", top: "50%", xPercent: -50, yPercent: -50, scale: 2.5, position: "absolute" }); });
        imageCardRefs.current.forEach((el) => { if(el) gsap.set(el, { autoAlpha: 0, x: 100, y: 200 }); });
        contentCardRefs.current.forEach((el) => { if(el) gsap.set(el, { autoAlpha: 0, x: 100, y: 200 }); });

        // Logic
        services.forEach((_, i) => {
             const title = titleRefs.current[i];
             const imgCard = imageCardRefs.current[i];
             const contentCard = contentCardRefs.current[i];
             const nextTitle = titleRefs.current[i + 1];

             if(title && imgCard && contentCard) {
                 const entryLabel = `entry-${i}`;
                 tl.addLabel(entryLabel);

                 // DESKTOP: Move Title to Left
                 mm.add("(min-width: 768px)", () => {
                     tl.to(title, { autoAlpha: 1, scale: 2.5, left: "50%", top: "50%", xPercent: -50, yPercent: -50, duration: 1.5, ease: "power2.out" }, entryLabel)
                       .to(title, { scale: 1, left: "1%", top: "50%", xPercent: 0, yPercent: -50, duration: 2, ease: "power3.inOut" }, ">-0.5")
                       .to(imgCard, { autoAlpha: 1, x: 0, y: 0, duration: 2, ease: "power3.out" }, "<+=1")
                       .to(contentCard, { autoAlpha: 1, x: 0, y: 0, duration: 2.2, ease: "power3.out" }, "<+=0.2");
                 });

                 // MOBILE: Title moves to Top, Cards slide up cleanly
                 mm.add("(max-width: 767px)", () => {
                     tl.to(title, { autoAlpha: 1, scale: 1, top: "12%", duration: 1, ease: "power2.out" }, entryLabel) // Scale reduced to allow wrap
                       .to(imgCard, { autoAlpha: 1, x: 0, y: 0, duration: 1, ease: "power3.out" }, ">") // Img Card Up
                       .to(contentCard, { autoAlpha: 1, x: 0, y: 0, duration: 1, ease: "power3.out" }, "<0.2"); // Content Card Up
                 });
                 
                 tl.to({}, { duration: 4 }); // Pause
                 
                 const exitLabel = `exit-${i}`;
                 tl.addLabel(exitLabel);
                 tl.to([imgCard, contentCard], { y: -150, autoAlpha: 0, duration: 1.5, ease: "power2.in" }, exitLabel); // Exit Up

                 // Title Exit / Next Title Enter logic
                 if (nextTitle) {
                      // Desktop/Mobile Agnostic for next title entry logic generally
                      mm.add("(min-width: 768px)", () => {
                        tl.to(nextTitle, { autoAlpha: 1, scale: 2.5, left: "50%", top: "50%", duration: 1.5 }, exitLabel + "+=0.5")
                          .to(title, { autoAlpha: 0, duration: 1 }, exitLabel + "+=0.5");
                      });
                      mm.add("(max-width: 767px)", () => {
                           tl.to(nextTitle, { autoAlpha: 1, scale: 1, top: "20%", duration: 1 }, exitLabel + "+=0.5")
                             .to(title, { autoAlpha: 0, duration: 0.5 }, exitLabel + "+=0.5"); 
                      });
                 } else {
                      tl.to(title, { autoAlpha: 0, duration: 1 }, exitLabel);
                 }
             }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-transparent">
            <div ref={triggerRef} className="h-screen w-full relative overflow-hidden flex bg-transparent">
                <div className="hidden lg:block absolute left-0 top-0 h-full w-[35%] z-10 px-12 pointer-events-none"></div>
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {services.map((service, i) => (
                        <div key={i} ref={el => titleRefs.current[i] = el} className="absolute w-full md:w-[80%] lg:w-[30%] origin-center flex flex-col items-center lg:items-start text-center lg:text-left px-5 md:px-4" style={{ willChange: 'transform, opacity' }}>
                            <div className="flex items-center gap-4 mb-3 md:mb-6"><span className="text-sm font-mono tracking-widest text-[#00B9FF] font-bold">{service.id}</span><div className="h-px w-12 bg-gray-200"></div></div>
                            <h3 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-tight mb-4 text-gray-900 break-words whitespace-normal w-full px-5 md:px-2">{service.title}</h3>
                            <p className="text-gray-400 text-lg hidden md:block">Webnox Digital Transformation</p>
                        </div>
                    ))}
                </div>
                <div className="w-full lg:w-[65%] h-full relative ml-auto flex items-center justify-center px-5 lg:px-12 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                         <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#00B9FF]/5 rounded-full blur-[100px]"></div>
                         <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#0097D9]/5 rounded-full blur-[80px]"></div>
                    </div>
                    {services.map((service, i) => (
                        <div key={i} className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
                            <div className="relative w-full max-w-5xl h-[80%] lg:h-[600px] flex flex-col md:block items-center justify-center mt-32 md:mt-0">
                                <div ref={el => imageCardRefs.current[i] = el} className="md:absolute left-0 top-0 lg:left-0 lg:top-10 w-[90%] md:w-[60%] mx-auto md:mx-0 h-[220px] md:h-[320px] lg:h-[380px] z-20 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto group border border-gray-100" style={{ willChange: 'transform, opacity' }}>
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${service.image})` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/30"><service.icon className="text-white" size={24} /></div>
                                        <h4 className="text-xl md:text-2xl font-bold text-white max-w-[80%]">{service.title}</h4>
                                    </div>
                                </div>
                                <div ref={el => contentCardRefs.current[i] = el} className="md:absolute right-0 bottom-0 lg:right-10 lg:bottom-10 w-[90%] md:w-[50%] mx-auto md:mx-0 bg-white text-gray-900 p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] z-30 pointer-events-auto border border-gray-100 mt-[-20px] md:mt-0" style={{ willChange: 'transform, opacity' }}>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-800 flex items-center gap-2"><Zap className="fill-[#00B9FF] text-[#00B9FF]" size={18} />Key Benefits</h4>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{service.desc}</p>
                                    <ul className="space-y-3">{service.list.map((item, idx) => (<li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700"><div className="w-1.5 h-1.5 rounded-full bg-[#00B9FF]"></div>{item}</li>))}</ul>
                                    <div className="hidden md:flex mt-4 md:mt-8 pt-4 md:pt-6 border-t border-gray-100 items-center justify-between group cursor-pointer hover:bg-gray-50 -mx-6 md:-mx-10 -mb-6 md:-mb-10 p-6 md:p-10 rounded-b-3xl transition-colors">
                                        <Link href="/contact-us" className="text-xs md:text-sm font-bold text-[#0097D9] group-hover:text-[#00B9FF] transition-colors">
                                            EXPLORE SOLUTION
                                        </Link>
                                        <ArrowRight className="text-gray-400 group-hover:translate-x-1 group-hover:text-[#00B9FF] transition-all" size={16}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// SECTION 6: INDUSTRIES
const IndustriesSection = () => {
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);

    useGSAP(() => {
        gsap.fromTo(itemRefs.current, 
            { y: 30, opacity: 0 },
            { 
               y: 0, opacity: 1, duration: 0.5, stagger: 0.1,
               scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
            }
        );
    }, { scope: sectionRef });

    const industries = [
        { name: "Finance & FinTech", icon: DollarSign },
        { name: "Healthcare & Life Sciences", icon: Hospital },
        { name: "Technology & SaaS", icon: Cpu },
        { name: "E-commerce & Retail", icon: ShoppingBag },
        { name: "Manufacturing", icon: Factory },
        { name: "Professional Services", icon: Briefcase },
        { name: "Public Sector", icon: Building2 }
    ];

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-transparent border-t border-gray-100">
             <div className="container mx-auto px-6 text-center">
                 <h2 className="text-4xl font-bold text-gray-900 mb-12">Industries We Support Across the USA</h2>
                 <div className="flex flex-wrap justify-center gap-6">
                    {industries.map((item, index) => (
                        <div 
                            key={index}
                            ref={el => itemRefs.current[index] = el}
                            className="bg-white px-8 py-5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 border border-gray-200 flex items-center gap-3 cursor-default"
                        >
                            <item.icon className="text-[#00B9FF]" size={20}/>
                            <span className="font-bold text-gray-800">{item.name}</span>
                        </div>
                    ))}
                 </div>
                 <div className="mt-12">
                     <Link href="/case-studies" className="text-[#00B9FF] font-bold text-lg hover:underline inline-flex items-center gap-2">
                         See Digital Transformation Examples by Industry <ArrowRight size={20}/>
                     </Link>
                 </div>
             </div>
        </section>
    );
};

// SECTION 7: USA COVERAGE (THREAD LAYOUT)
// SECTION 7: USA COVERAGE (VERTICAL THREAD LAYOUT FOR MOBILE)
const USACoverageSection = () => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    // DESKTOP: Original Map Animation
    mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: containerRef.current, start: "top 70%" } });
        
        const path = containerRef.current.querySelectorAll('.thread-path');
        const nodes = containerRef.current.querySelectorAll('.map-node');
        
        gsap.set(path, { strokeDashoffset: 1300, strokeDasharray: 1300 });
        gsap.set(nodes, { scale: 0, opacity: 0 });

        tl.to(path, { strokeDashoffset: 0, duration: 3, ease: "power2.out" });
        
        nodes.forEach((node, i) => {
          const revealTime = i === 0 ? 0.4 : i === 1 ? 1.2 : i === 2 ? 1.9 : 2.5;
          tl.to(node, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, revealTime);
        });
    });

    // MOBILE: Vertical Thread Animation
    mm.add("(max-width: 767px)", () => {
        gsap.from(".mobile-node", {
            x: -20, opacity: 0, duration: 0.8, stagger: 0.3, ease: "power2.out",
            scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
        });
        gsap.from(".mobile-thread-line", {
            height: 0, duration: 2, ease: "power1.inOut",
             scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
        });
    });

  }, { scope: containerRef });
  
  const hubs = [
    { name: "San Francisco", icon: Laptop, x: "15%", y: "31%", color: "text-blue-600", desc: "Tech Hubs" },
    { name: "Austin", icon: Cpu, x: "40%", y: "66%", color: "text-cyan-600", desc: "Innovation & Tech" },
    { name: "Chicago", icon: BarChart3, x: "65%", y: "46%", color: "text-purple-600", desc: "Business Hub" },
    { name: "New York", icon: Building2, x: "85%", y: "31%", color: "text-emerald-600", desc: "Financial Innovation" }
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-32 border-t border-gray-100 overflow-hidden relative bg-transparent">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-20 leading-tight">
          Nationwide <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent">Connectivity</span>
        </h2>
        
        {/* DESKTOP MAP */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto h-[300px]">
           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 300" preserveAspectRatio="none">
             <path d="M0,150 C150,150 200,50 300,50 S450,250 600,250 S800,50 900,50 S1050,150 1200,150" fill="none" stroke="#e2e8f0" strokeWidth="4" className="thread-path opacity-40"/>
             <path d="M0,150 C150,150 200,50 300,50 S450,250 600,250 S800,50 900,50 S1050,150 1200,150" fill="none" stroke="#00B9FF" strokeWidth="2" strokeDasharray="8 4" className="thread-path opacity-80"/>
           </svg>
           {hubs.map((hub, i) => (
             <div key={i} className="map-node absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer" style={{ left: hub.x, top: hub.y }}>
               <div className="absolute inset-0 bg-[#00B9FF]/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
               <div className={`relative w-24 h-24 bg-white rounded-full border-2 border-gray-100 shadow-xl flex flex-col items-center justify-center gap-1 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 z-10 ${hub.color}`}>
                 <hub.icon size={28} />
                 <span className="text-[10px] font-bold text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">US Hub</span>
               </div>
               <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  <span className="px-4 py-2 rounded-full text-sm font-bold shadow-lg bg-white text-gray-800 block">{hub.name}</span>
                  <span className="text-[10px] text-gray-500 block mt-1">{hub.desc}</span>
               </div>
               <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-gray-400 group-hover:opacity-0 transition-opacity">{hub.name}</span>
             </div>
           ))}
        </div>

        {/* MOBILE VERTICAL THREAD */}
        <div className="md:hidden relative flex flex-col items-start pl-4 gap-8">
            <div className="mobile-thread-line absolute left-[31px] top-0 bottom-0 w-1 bg-gray-200" />
            {hubs.map((hub, i) => (
                <div key={i} className="mobile-node flex items-center gap-5 relative z-10 w-full">
                    <div className={`w-14 h-14 bg-white rounded-full border-2 border-gray-100 shadow-lg flex items-center justify-center shrink-0 ${hub.color} relative`}>
                        <hub.icon size={24} />
                        {/* Dot on line */}
                        <div className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#00B9FF] rounded-full border-2 border-white" />
                    </div>
                    <div className="text-left bg-white p-5 rounded-2xl shadow-sm border border-gray-100 w-full">
                        <h3 className="font-bold text-gray-900 text-lg">{hub.name}</h3>
                         <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{hub.desc}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

// SECTION 8: FAQ (Accordion)
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const faqs = [
      { q: "Is digital transformation only for large enterprises?", a: "No. We provide digital transformation services for SMEs as well as enterprise organisations." },
      { q: "Do you focus more on consulting or implementation?", a: "Our engagements are consulting-led, with implementation aligned to business strategy." },
      { q: "Can digital transformation be delivered in phases?", a: "Yes. Most initiatives are executed in structured phases to reduce risk and improve adoption." },
      { q: "How do you measure success?", a: "Success is measured through operational efficiency, system performance, adoption, and business impact." }
    ];
  
    return (
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-md">
                <button
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-900"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.q}
                  {openIndex === index ? <ChevronUp className="text-[#00B9FF]" /> : <ChevronDown className="text-gray-400" />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 p-6 pt-0' : 'max-h-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

// SECTION 9: CTA (Magnetic with Animation)
const MagneticCTASection = () => {
    const sectionRef = useRef(null);
    const buttonRef = useRef(null);
  
    useGSAP(() => {
        if(buttonRef.current) {
            gsap.to(buttonRef.current, {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            })
        }
    }, { scope: sectionRef });
  
    return (
      <section ref={sectionRef} className="py-16 md:py-32 bg-gradient-to-br from-[#00B9FF] via-[#0097D9] to-[#007AC3] relative overflow-hidden text-center">
        {/* Sparkles */}
        {[...Array(5)].map((_, i) => (
            <Sparkles key={i} className="absolute text-white opacity-40 animate-pulse" 
            style={{top: `${Math.random()*80}%`, left: `${Math.random()*90}%`, width: 20 + Math.random()*20}} />
        ))}

        <div className="container mx-auto px-6 relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 transform-gpu hover:scale-105 transition-transform duration-500">
            Ready to Accelerate Your<br/>
            <span className="text-white/90">Digital Transformation?</span>
          </h2>
          <p className="text-xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed">
            Whether you're modernizing legacy systems or planning enterprise-wide transformation, our team is ready to help you move forward with confidence.
          </p>
          <Link
            href="/contact-us#contact-form"
            ref={buttonRef}
            className="inline-flex items-center gap-3 bg-white text-[#00B9FF] px-12 py-6 rounded-full text-xl font-semibold border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-300"
          >
            Book a Free Strategy Call
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    );
};

export default function DigitalTransformationUSAPage() {
  return (
    <main className="overflow-hidden bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white relative">
      {/* Dots Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-100" />
      
      {/* More global decorative backgrounds for depth */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[45%] left-[-5%] w-[600px] h-[600px] bg-purple-300/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[75%] right-[5%] w-[500px] h-[500px] bg-cyan-300/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10">
        <DigitalTransformationHero />
        <WhyMattersSection />
        <WhyChooseUsSection />
        <EcosystemSection />
        <SequentialServicesSection />
        <IndustriesSection />
        <USACoverageSection />
        <FAQSection />
        <MagneticCTASection />
      </div>
    </main>
  );
}
