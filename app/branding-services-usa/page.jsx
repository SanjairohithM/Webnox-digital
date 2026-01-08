"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import {
  Target, Globe, TrendingUp, Palette, FileText, Monitor,
  RefreshCcw, ArrowRight, CheckCircle2, Building2, Users,
  Zap, Shield, Sparkles, Star, ChevronDown, Mail, Phone, MapPin
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandingServicesUSA() {
  useEffect(() => {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <HeroSection />
      <WhyChooseUsSection />
      <WhyBrandingMattersSection />
      <BrandingEcosystemSection />
      <DetailedServicesSection />
      <IndustriesSection />
      <NationwideCoverageSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

// Hero Section with USA Banner Background
const HeroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef([]);
  const bgRef = useRef(null);
  const globeRef = useRef(null);

  useGSAP(() => {
    // Parallax background image movement
    gsap.to(bgRef.current, {
      y: 150,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    // Globe rotation animation
    if (globeRef.current) {
      gsap.to(globeRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
      });
    }

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out"
        }
      );
    }

    // Subtitle animation
    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 0.6,
          ease: "back.out(1.4)"
        }
      );
    }

    // Stats stagger
    statsRef.current.forEach((stat, i) => {
      if (!stat) return;
      gsap.fromTo(stat,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          delay: 0.9 + i * 0.15,
          ease: "back.out(1.2)"
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-32 pb-20 px-4">
      {/* USA Banner Background */}
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src="/images/usa-banner.jpg"
          alt="USA Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/20 via-transparent to-[#8B5CF6]/20"></div>
      </div>

      {/* USA Globe Animation */}
      <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
        <div ref={globeRef} className="relative w-64 h-64">
          <Globe className="w-full h-full text-white" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div ref={titleRef}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-2xl">
            A Branding Agency in the USA trusted by businesses that want to grow with clarity, consistency, and confidence.
          </h1>
        </div>

        <div ref={subtitleRef}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-5xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
            In a competitive US market, strong brands are built on clarity, consistency, and execution, not visuals alone. Webnox Digital partners with startups, SMBs, SaaS companies, and enterprises across the USA to build scalable brand systems that align strategy with digital experience and long-term business growth.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/contact-us">
              <button className="group px-8 py-4 bg-white text-[#0EA5E9] font-semibold rounded-full shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 flex items-center">
                Schedule a Branding Strategy Discussion
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-2xl">
            <p className="text-sm font-semibold text-gray-700 mb-6">Trusted by Growing Brands Across the USA</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { label: "Branding Projects", value: "500+" },
                { label: "Industries Served", value: "15+" },
                { label: "Trusted by US Startups & Enterprises", value: "100%" }
              ].map((stat, i) => (
                <div key={i} ref={el => statsRef.current[i] = el} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section with Creative Cards
const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useGSAP(() => {
    // Title reveal
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 60, rotateX: -15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards with stagger
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotateY: -20
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Parallax effect
      gsap.to(card, {
        y: -30,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });
  }, { scope: sectionRef });

  const features = [
    {
      icon: Target,
      title: "Strategy-Focused Approach",
      desc: "We start with strategy, not visuals. Our branding engagements begin by understanding your market position, business goals, and audience expectations, ensuring every design decision is intentional and aligned with growth.",
      image: "/images/Software Development.webp",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Purpose-Led Identity Design",
      desc: "We create brand identities that are grounded in purpose, not trends. Each identity system is designed to communicate clarity, credibility, and differentiation across all customer interactions.",
      image: "/images/BRANDING.webp",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "High-Performance Execution",
      desc: "As a branding marketing company with strong digital capabilities, we translate brand strategy into high-performing digital experiences from websites to platforms, ensuring consistency and impact.",
      image: "/images/Web Development.webp",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Simple, Transparent, Collaborative",
      desc: "Our process is structured and collaborative. Clients know what's happening, why it matters, and how it contributes to the overall brand outcome without unnecessary complexity.",
      image: "/images/Digital Marketing.webp",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Supports Long-Term Business Growth",
      desc: "Our branding work is built to scale. From early-stage startups to established enterprises, we design brand systems that grow with your business, teams, and markets.",
      image: "/images/3dimagesolution.webp",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Businesses Across the USA <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Background */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <feature.icon className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2ACBEC] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Branding Matters Section
const WhyBrandingMattersSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: -100, rotateY: -10 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-96 opacity-10 hidden lg:block">
        <div ref={imageRef}>
          <Image src="/images/aboutrobot.png" alt="Robot" fill className="object-contain" />
        </div>
      </div>

      <div ref={contentRef} className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#2ACBEC]/10 to-[#6149CD]/10 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Branding Matters for US Businesses
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              In the US market, branding directly influences trust, decision-making, and perceived value. A strong brand helps businesses stand out in crowded industries, maintain consistency across channels, and build long-term relationships with customers. Without a clear brand foundation, growth becomes fragmented and harder to sustain.
            </p>

            <Link href="/contact-us">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative z-10 flex items-center">
                  Build Your Brand With Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Branding Ecosystem Section
const BrandingEcosystemSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(card,
        {
          opacity: 0,
          y: 80,
          x: i % 2 === 0 ? -50 : 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: sectionRef });

  const pillars = [
    {
      icon: Target,
      title: "Brand Strategy",
      desc: "We define positioning, messaging, and differentiation to ensure your brand has a clear and competitive presence in the market.",
      image: "/images/L1.webp"
    },
    {
      icon: Palette,
      title: "Brand Identity & Experience",
      desc: "We design cohesive identity systems that translate strategy into visual and experiential consistency across platforms and touchpoints.",
      image: "/images/L2.webp"
    },
    {
      icon: Zap,
      title: "Brand Implementation & Growth",
      desc: "We support brand rollout, adoption, and evolution—helping businesses maintain relevance as they grow and adapt.",
      image: "/images/L3.webp"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Complete <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Branding Ecosystem</span> for US Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Branding works best when every element is connected. Our approach focuses on building a complete branding ecosystem rather than isolated deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <pillar.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2ACBEC] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Detailed Services Section with Read More
const DetailedServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(card,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: sectionRef });

  const services = [
    {
      icon: Target,
      title: "Brand Strategy & Positioning",
      short: "Our branding and strategy services in the USA help businesses define their market position, brand voice, and messaging frameworks with clarity and confidence.",
      image: "/images/aboutimg1.webp"
    },
    {
      icon: Palette,
      title: "Visual Identity Design",
      short: "We deliver branding and identity design services, including logo systems, typography, color frameworks, and visual guidelines built for consistency and scalability.",
      image: "/images/aboutimg2.webp"
    },
    {
      icon: FileText,
      title: "Enterprise Brand Guidelines",
      short: "We create structured brand guidelines that support multi-team and multi-location consistency—ideal for growing and enterprise-level organizations.",
      image: "/images/aboutimg3.webp"
    },
    {
      icon: Monitor,
      title: "Digital Branding",
      short: "As a digital branding company in New York and across the USA, we help brands express their identity through websites, platforms, and digital experiences that reinforce trust and engagement.",
      image: "/images/3d5.webp"
    },
    {
      icon: RefreshCcw,
      title: "Rebranding Services",
      short: "Our rebranding services support businesses undergoing growth, transformation, or repositioning—ensuring alignment between brand perception and business direction.",
      image: "/images/aiauto1.webp"
    },
    {
      icon: FileText,
      title: "Brand Messaging & Content Alignment",
      short: "We align brand messaging across digital channels, helping businesses communicate clearly and consistently to their target audience.",
      image: "/images/aiautolast1.webp"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Detailed <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Branding Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            As a brand design agency in the USA, we provide end-to-end branding and identity design services tailored to different business stages and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{service.short}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            We also work with organizations seeking affordable brand identity development experts, offering value-driven solutions without compromising strategic depth.
          </p>
        </div>
      </div>
    </section>
  );
};

// Industries Section
const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;

      gsap.fromTo(item,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.05,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: sectionRef });

  const industries = [
    { name: "Technology & SaaS", icon: Monitor },
    { name: "E-commerce & Retail", icon: Building2 },
    { name: "Healthcare", icon: Shield },
    { name: "Finance & FinTech", icon: TrendingUp },
    { name: "Real Estate", icon: Building2 },
    { name: "Hospitality", icon: Star },
    { name: "Education", icon: FileText },
    { name: "Manufacturing", icon: Zap },
    { name: "Entertainment", icon: Sparkles },
    { name: "Professional Services", icon: Users }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Industries We Serve <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Across the USA</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">We create branding solutions for:</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
          {industries.map((industry, i) => (
            <div
              key={i}
              ref={el => itemsRef.current[i] = el}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <industry.icon className="w-10 h-10 text-[#2ACBEC] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-semibold text-gray-800 group-hover:text-[#2ACBEC] transition-colors">{industry.name}</p>
            </div>
          ))}
        </div>

        <Link href="/case-studies">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center">
            See Branding Examples for Your Industry
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </section>
  );
};

// Nationwide Coverage Section
const NationwideCoverageSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(card,
        { opacity: 0, y: 50, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <Globe className="w-full h-full text-[#2ACBEC]" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Serving Businesses <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Across All 50 States</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          From New York to Washington, DC, Florida to California, we help brands grow with local relevance and national consistency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Local businesses", desc: "Community-focused branding", gradient: "from-[#2ACBEC] to-[#1facd3]" },
            { title: "Multi-location brands", desc: "Consistent across regions", gradient: "from-[#6149CD] to-[#4b33a8]" },
            { title: "State-wide enterprises", desc: "Scalable brand systems", gradient: "from-[#00c6fb] to-[#005bea]" },
            { title: "Nationwide organizations", desc: "Coast-to-coast impact", gradient: "from-[#9D50BB] to-[#6E48AA]" }
          ].map((item, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-white`}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Not Sure Where to Start?</h3>
          <p className="text-lg text-gray-600 mb-6">Begin With a Free Brand Audit</p>
          <Link href="/contact-us">
            <button className="px-8 py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get My Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Case Studies Section
const CaseStudiesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(card,
        { opacity: 0, x: i === 0 ? -60 : 60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: sectionRef });

  const cases = [
    {
      title: "Skyline SaaS Platform",
      desc: "Repositioned the brand with a digital-first identity system.",
      results: ["3× brand recall", "42% better engagement"],
      image: "/images/usa/test.jpg"
    },
    {
      title: "Metro Retail Co.",
      desc: "Rebranded for improved visibility and conversions.",
      results: ["60% higher conversions", "2× customer retention"],
      image: "/images/usa/metro.jpg"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Case Studies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ACBEC]/40 to-[#6149CD]/30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#2ACBEC] transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{caseStudy.desc}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Results:</p>
                  {caseStudy.results.map((result, j) => (
                    <div key={j} className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-[#2ACBEC] mr-2" />
                      <span className="text-gray-800 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
                <Link href="/case-studies">
                  <button className="text-[#2ACBEC] font-semibold hover:text-[#6149CD] transition-colors inline-flex items-center group">
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(card,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: sectionRef });

  const testimonials = [
    { quote: "The clarity and structure changed everything for our branding.", author: "CEO, SaaS Startup" },
    { quote: "A professional, reliable partner for fast-growing teams.", author: "Marketing Director, E-commerce" },
    { quote: "Our rebrand across multiple states was smooth and consistent.", author: "Operations Head, Retail Chain" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Star className="w-8 h-8 text-[#2ACBEC] mb-4" />
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold text-gray-900">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const sectionRef = useRef(null);
  const faqsRef = useRef([]);

  useGSAP(() => {
    faqsRef.current.forEach((faq, i) => {
      if (!faq) return;

      gsap.fromTo(faq,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faq,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: sectionRef });

  const faqs = [
    {
      q: "Do you work with small businesses and startups?",
      a: "Yes. We work as a branding agency for small business owners, startups, and enterprises, tailoring our approach to each growth stage."
    },
    {
      q: "Do you offer branding services across the USA?",
      a: "Yes. We provide local business branding services and nationwide branding support across all 50 states."
    },
    {
      q: "Is branding limited to logos and visuals?",
      a: "No. Branding includes strategy, identity systems, messaging, and digital experiences."
    },
    {
      q: "How do projects typically begin?",
      a: "Most engagements start with a discovery or brand audit to align goals, scope, and expectations."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              ref={el => faqsRef.current[i] = el}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-900 text-lg">
                {faq.q}
                <ChevronDown className="w-5 h-5 text-[#2ACBEC] group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-[#2ACBEC] to-[#6149CD] px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Build a Stronger Brand?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          If you're looking for branding services in the USA that combine strategy, identity, and digital execution, we're ready to help you move forward with clarity and confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link href="/contact-us">
            <button className="group px-10 py-5 bg-white text-[#2ACBEC] font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10">Schedule a Branding Strategy Discussion</span>
            </button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
            <Mail className="w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm opacity-90">info@webnox.com</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
            <Phone className="w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm opacity-90">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300">
            <MapPin className="w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-sm opacity-90">New York, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};
