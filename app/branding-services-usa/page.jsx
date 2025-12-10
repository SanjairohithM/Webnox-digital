"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Target, Globe, TrendingUp, Palette, FileText, Monitor,
  RefreshCcw, ArrowRight, CheckCircle2, Building2, Users,
  Zap, Shield, Sparkles, Star, ChevronDown
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Optimized Animated Particle Background Component
const ParticleBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    // Reduced particle count for better performance
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] rounded-full opacity-20';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.willChange = 'transform';
      particle.style.transform = 'translateZ(0)'; // GPU acceleration
      container.appendChild(particle);
      particles.push(particle);
    }

    // Optimized animations using transform only (GPU accelerated)
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -30, // Reduced movement
        x: (Math.random() - 0.5) * 60, // Reduced movement
        duration: 5 + Math.random() * 2, // Longer duration = smoother
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut", // Smoother easing
        delay: index * 0.3,
        force3D: true // Force GPU acceleration
      });
    });

    return () => {
      particles.forEach(particle => {
        gsap.killTweensOf(particle);
        particle.remove();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ willChange: 'transform', contain: 'layout style paint' }}
    />
  );
};

// Optimized Magnetic Button Effect Hook with throttling
const useMagneticButton = (ref, strength = 0.2) => {
  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    let rafId = null;
    let isHovering = false;

    const handleMouseMove = (e) => {
      if (!isHovering) return;
      
      // Throttle with requestAnimationFrame
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const rect = button.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;

        gsap.to(button, {
          x: x,
          y: y,
          duration: 0.3,
          ease: "power2.out",
          force3D: true // GPU acceleration
        });
        
        rafId = null;
      });
    };

    const handleMouseEnter = () => {
      isHovering = true;
      button.style.willChange = 'transform';
    };

    const handleMouseLeave = () => {
      isHovering = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        force3D: true,
        onComplete: () => {
          button.style.willChange = 'auto';
        }
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [ref, strength]);
};

export default function BrandingServicesUSA() {
  // Optimize ScrollTrigger globally
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
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden" style={{ willChange: 'scroll-position' }}>
      <ParticleBackground />
      <HeroSection />
      <WhyChooseUsSection />
      <BrandingEcosystemSection />
      <DetailedServicesSection />
      <IndustriesSection />
      <NationwideCoverageSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ToolsPlatformsSection />
      <EngagementModelsSection />
      <FinalCTASection />
    </div>
  );
}

// Magnetic Button Component
const MagneticButton = ({ children, className, ...props }) => {
  const buttonRef = useRef(null);
  useMagneticButton(buttonRef, 0.25);

  return (
    <button ref={buttonRef} className={className} {...props}>
      {children}
    </button>
  );
};

// Section 1: Hero
const HeroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef([]);
  const bgRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useGSAP(() => {
    // Optimized parallax background movement
    gsap.to(bgRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5, // Smoother scrubbing
        invalidateOnRefresh: true
      },
      force3D: true // GPU acceleration
    });

    // Optimized floating animation for orbs (GPU accelerated)
    if (orb1Ref.current) {
      orb1Ref.current.style.willChange = 'transform';
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 20,
        scale: 1.1,
        duration: 6, // Slower = smoother
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true
      });
    }

    if (orb2Ref.current) {
      orb2Ref.current.style.willChange = 'transform';
      gsap.to(orb2Ref.current, {
        y: 30,
        x: -20,
        scale: 1.15,
        duration: 7, // Slower = smoother
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true
      });
    }

    // Optimized title animation
    if (titleRef.current) {
      titleRef.current.style.willChange = 'transform, opacity';
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (titleRef.current) titleRef.current.style.willChange = 'auto';
          }
        }
      );
    }

    if (subtitleRef.current) {
      subtitleRef.current.style.willChange = 'transform, opacity';
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (subtitleRef.current) subtitleRef.current.style.willChange = 'auto';
          }
        }
      );
    }

    if (ctaRef.current) {
      ctaRef.current.style.willChange = 'transform, opacity';
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.6, ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (ctaRef.current) ctaRef.current.style.willChange = 'auto';
          }
        }
      );
    }

    statsRef.current.forEach((stat, i) => {
      if (!stat) return;
      stat.style.willChange = 'transform, opacity';
      gsap.fromTo(stat,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.7, delay: 0.9 + i * 0.1,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (stat) stat.style.willChange = 'auto';
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      {/* Optimized animated background with reduced elements */}
      <div ref={bgRef} className="absolute inset-0 opacity-30" style={{ willChange: 'transform', contain: 'layout style paint' }}>
        <div ref={orb1Ref} className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-[#2ACBEC]/20 to-[#6149CD]/20 rounded-full blur-3xl" style={{ willChange: 'transform' }} />
        <div ref={orb2Ref} className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#6149CD]/20 to-[#2ACBEC]/20 rounded-full blur-3xl" style={{ willChange: 'transform' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-[#2ACBEC]/10 to-[#6149CD]/10 rounded-full blur-2xl animate-pulse" />
        
        {/* Reduced morphing shapes for better performance */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-2xl opacity-10"
            style={{
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              left: `${20 + i * 25}%`,
              top: `${25 + i * 20}%`,
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#2ACBEC' : '#6149CD'}, transparent)`,
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div ref={titleRef} className="mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent px-2">
            A Branding Services Company in the USA
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 px-2">
            Trusted by businesses that want to grow with clarity, consistency, and confidence.
          </p>
        </div>

        <p ref={subtitleRef} className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
          Your brand shapes the first and lasting impression people have of your business. We help startups, SMBs, and enterprise teams build strategic, modern brand identities that elevate trust, improve recognition, and accelerate growth across the US.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <Link href="/contact-us" className="w-full sm:w-auto">
            <MagneticButton className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center">
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>
          </Link>
          <Link href="/contact-us" className="w-full sm:w-auto">
            <MagneticButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#2ACBEC] font-semibold rounded-full border-2 border-[#2ACBEC] hover:bg-[#2ACBEC] hover:text-white active:scale-95 transition-all duration-300 relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#2ACBEC] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10">Get a Free 1-Page Brand Audit</span>
            </MagneticButton>
          </Link>
        </div>

        {/* Stats */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 mx-2">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-4 sm:mb-6">Trusted by Growing Brands Across the USA</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { label: "Branding Projects", value: "500+" },
              { label: "Industries Served", value: "10+" },
              { label: "Trusted by US Startups & Enterprises", value: "✓" }
            ].map((stat, i) => (
              <div key={i} ref={el => statsRef.current[i] = el} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 2: Why Businesses Choose Us
const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useGSAP(() => {
    // Optimized animated title
    if (titleRef.current) {
      titleRef.current.style.willChange = 'transform, opacity';
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (titleRef.current) titleRef.current.style.willChange = 'auto';
          }
        }
      );
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      card.style.willChange = 'transform, opacity';
      gsap.fromTo(card,
        { opacity: 0, y: 60, scale: 0.95 }, // Reduced complexity
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.1 + i * 0.1,
          ease: "power2.out", // Simpler easing
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (card) card.style.willChange = 'auto';
          }
        }
      );
    });
  }, { scope: sectionRef });

  const features = [
    {
      icon: Target,
      title: "Strategy-Focused Approach",
      desc: "Every successful brand begins with insight. Our approach blends research, market understanding, and behavioral psychology to position your business where it matters most.",
      benefits: ["Clear, confident market positioning", "Sharper brand messaging", "Stronger competitive differentiation", "Alignment with target US audiences"]
    },
    {
      icon: Palette,
      title: "Purpose-Led Identity Design",
      desc: "We design identity systems that look confident and feel relatable across websites, social platforms, and physical experiences.",
      benefits: ["Logo & complete visual identity", "Brand voice and tone guidelines", "Digital-first design components", "Cohesive visual systems for long-term use"]
    },
    {
      icon: Zap,
      title: "High-Performance Execution",
      desc: "US businesses grow fast. Your brand should keep up. Our execution framework ensures consistency, accuracy, and scalability even with multiple teams involved.",
      benefits: ["Predictable rollout timelines", "Consistent files, formats, and assets", "Adaptable branding across all platforms"]
    },
    {
      icon: Users,
      title: "Simple, Transparent, Collaborative",
      desc: "Branding shouldn't be confusing. We keep every step simple, structured, and aligned with your goals.",
      benefits: ["Clear communication", "Weekly updates", "Transparent milestones", "A partnership, not a transaction"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 overflow-hidden">
      {/* Optimized animated background elements - reduced count */}
      <div className="absolute inset-0 pointer-events-none" style={{ contain: 'layout style paint' }}>
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-5"
            style={{
              width: `${250 + i * 150}px`,
              height: `${250 + i * 150}px`,
              left: `${i * 40}%`,
              top: `${20 + i * 30}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#2ACBEC' : '#6149CD'}, transparent)`,
              willChange: 'transform',
              transform: 'translateZ(0)',
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(15px, -20px, 0); }
        }
      `}</style>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Why Businesses Across the USA <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Branding is more than visuals. It's strategy, direction, and execution coming together to strengthen your place in the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el} className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#2ACBEC]/30 hover:-translate-y-2 hover:scale-[1.02] active:scale-95" style={{ transformStyle: 'preserve-3d' }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2ACBEC] to-[#6149CD] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#2ACBEC] transition-colors duration-300">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{feature.desc}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#2ACBEC] mr-2 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Branding Matters */}
        <div className="bg-gradient-to-br from-[#2ACBEC]/10 to-[#6149CD]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">Why Branding Matters for US Businesses</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            US audiences expect clarity, trust, and a seamless brand experience. A strong brand helps you:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
            {["Increase customer trust", "Improve lead-to-customer conversions", "Strengthen digital presence", "Command higher pricing", "Stand out against well-funded competitors"].map((item, i) => (
              <div key={i} className="flex items-center justify-center bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ACBEC] mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 px-2">A well-built brand isn't an expense—it's a long-term growth engine.</p>
          <Link href="/contact-us">
            <MagneticButton className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10">Build Your Brand With Us</span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Section 3: Branding Ecosystem
const BrandingEcosystemSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      card.style.willChange = 'transform, opacity';
      gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -40 : 40, scale: 0.95 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.8, delay: i * 0.15,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (card) card.style.willChange = 'auto';
          }
        }
      );
    });
  }, { scope: sectionRef });

  const pillars = [
    {
      icon: Target,
      title: "Brand Strategy",
      desc: "We help you articulate who you are, why you matter, and how you compete in the US market.",
      items: ["Market and competitor analysis", "Brand positioning and narrative", "Messaging architecture", "Customer persona profiles", "Tone-of-voice development"]
    },
    {
      icon: Palette,
      title: "Brand Identity & Experience",
      desc: "We create identity systems built for recognition and adaptability.",
      items: ["Logo systems", "Color & typography", "Voice guidelines", "Digital assets", "Experience design"]
    },
    {
      icon: Zap,
      title: "Brand Implementation & Growth",
      desc: "We support your brand rollout and long-term consistency.",
      items: ["Brand guidelines", "Marketing collateral", "Digital rollout", "Social media brand systems", "Continuous brand support"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white px-6 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2ACBEC]/5 via-transparent to-[#6149CD]/5"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Complete <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Branding Ecosystem</span> for US Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Branding works best when strategy, identity, and execution align. Our ecosystem connects all three into one clear, scalable framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2ACBEC]/30">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2ACBEC] to-[#6149CD] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
              <p className="text-gray-600 mb-6">{pillar.desc}</p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700 mb-3">Includes:</p>
                {pillar.items.map((item, j) => (
                  <div key={j} className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#2ACBEC] mr-2 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Detailed Services
const DetailedServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      card.style.willChange = 'transform, opacity';
      gsap.fromTo(card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, delay: i * 0.12,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (card) card.style.willChange = 'auto';
          }
        }
      );
    });
  }, { scope: sectionRef });

  const services = [
    {
      icon: Target,
      title: "Brand Strategy & Positioning",
      desc: "We shape your message, story, and value.",
      deliverables: ["Research insights", "Value proposition", "Messaging structure", "Differentiation framework", "Core brand story"]
    },
    {
      icon: Palette,
      title: "Visual Identity Design",
      desc: "Modern, memorable, and flexible identity systems.",
      deliverables: ["Full logo suite", "Color palette", "Typography system", "Iconography", "Pattern library"]
    },
    {
      icon: FileText,
      title: "Enterprise Brand Guidelines",
      desc: "Brand governance your teams can trust—especially at scale.",
      deliverables: ["Visual usage standards", "Messaging guidelines", "Voice & tone rules", "File formats and asset kits"]
    },
    {
      icon: Monitor,
      title: "Digital Branding",
      desc: "Visual and verbal identity built for digital-first experiences.",
      deliverables: ["UI/UX styling", "Social media branding", "Email templates", "Web component design", "Digital campaign assets"]
    },
    {
      icon: RefreshCcw,
      title: "Rebranding Services",
      desc: "A complete identity transformation with a structured, low-risk process.",
      deliverables: ["Brand audit", "Repositioning framework", "Identity redesign", "Rollout roadmap", "Launch creative"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-gray-50 to-white px-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2ACBEC]/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#6149CD]/5 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Detailed <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Branding Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2ACBEC]/30 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#2ACBEC] to-[#6149CD] p-8">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.desc}</p>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">Deliverables:</p>
                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((item, j) => (
                    <li key={j} className="flex items-start text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#2ACBEC] mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us">
                  <button className="w-full py-3 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
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

// Section 5: Industries
const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      item.style.willChange = 'transform, opacity';
      gsap.fromTo(item,
        { opacity: 0, scale: 0.9, y: 15 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.5, delay: i * 0.04,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (item) item.style.willChange = 'auto';
          }
        }
      );
    });
  }, { scope: sectionRef });

  const industries = [
    "Technology & SaaS", "E-commerce & Retail", "Healthcare", "Finance & FinTech",
    "Real Estate", "Hospitality", "Education", "Manufacturing",
    "Entertainment", "Professional Services"
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Industries We Serve <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Across the USA</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">We create branding solutions for:</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {industries.map((industry, i) => (
            <div key={i} ref={el => itemsRef.current[i] = el} className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2ACBEC]/30 hover:-translate-y-1">
              <Building2 className="w-8 h-8 text-[#2ACBEC] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold text-gray-800 group-hover:text-[#2ACBEC] transition-colors">{industry}</p>
            </div>
          ))}
        </div>

        <Link href="/case-studies">
          <MagneticButton className="px-8 py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative z-10 flex items-center">
              See Branding Examples for Your Industry
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
};

// Section 6: Nationwide Coverage
const NationwideCoverageSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-[#2ACBEC]/5 to-[#6149CD]/5 px-6 overflow-hidden">
      {/* Optimized animated background pattern - reduced elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ contain: 'layout style paint' }}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-2xl opacity-10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${(i * 25) % 100}%`,
              top: `${25 + (i % 2) * 40}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#2ACBEC' : '#6149CD'}, transparent)`,
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
              animation: `pulse ${6 + i * 1}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.1; }
          50% { transform: translate3d(0, 0, 0) scale(1.15); opacity: 0.15; }
        }
      `}</style>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Serving Businesses <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Across All 50 States</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          From New York to Washington, DC, Florida to California, we help brands grow with local relevance and national consistency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Building2, title: "Local businesses", desc: "Community-focused branding" },
            { icon: Globe, title: "Multi-location brands", desc: "Consistent across regions" },
            { icon: TrendingUp, title: "State-wide enterprises", desc: "Scalable brand systems" },
            { icon: Sparkles, title: "Nationwide organizations", desc: "Coast-to-coast impact" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2ACBEC] to-[#6149CD] rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Not Sure Where to Start?</h3>
          <p className="text-lg text-gray-600 mb-6">Begin With a Free Brand Audit</p>
          <Link href="/contact-us">
            <MagneticButton className="px-8 py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10">Get My Audit</span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Section 7: Case Studies
const CaseStudiesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      card.style.willChange = 'transform, opacity';
      gsap.fromTo(card,
        { opacity: 0, x: i === 0 ? -40 : 40, scale: 0.95 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.8, delay: i * 0.15,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (card) card.style.willChange = 'auto';
          }
        }
      );
    });
  }, { scope: sectionRef });

  const cases = [
    {
      title: "Skyline SaaS Platform",
      desc: "Repositioned the brand with a digital-first identity system.",
      results: ["3× brand recall", "42% better engagement"]
    },
    {
      title: "Metro Retail Co.",
      desc: "Rebranded for improved visibility and conversions.",
      results: ["60% higher conversions", "2× customer retention"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Case Studies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2ACBEC]/30 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#2ACBEC] transition-colors">{caseStudy.title}</h3>
              <p className="text-gray-600 mb-6">{caseStudy.desc}</p>
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
                <button className="text-[#2ACBEC] font-semibold hover:text-[#6149CD] transition-colors inline-flex items-center">
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 8: Testimonials
const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bgOrb1Ref = useRef(null);
  const bgOrb2Ref = useRef(null);

  useGSAP(() => {
    // Optimized floating animation for background orbs
    if (bgOrb1Ref.current) {
      bgOrb1Ref.current.style.willChange = 'transform';
      gsap.to(bgOrb1Ref.current, {
        y: -20,
        x: 30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true
      });
    }

    if (bgOrb2Ref.current) {
      bgOrb2Ref.current.style.willChange = 'transform';
      gsap.to(bgOrb2Ref.current, {
        y: 30,
        x: -20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true
      });
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      card.style.willChange = 'transform, opacity';
      gsap.fromTo(card,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, delay: i * 0.12,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (card) card.style.willChange = 'auto';
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
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-[#2ACBEC]/10 via-[#6149CD]/5 to-white px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div ref={bgOrb1Ref} className="absolute top-10 left-10 w-64 h-64 bg-[#2ACBEC]/10 rounded-full blur-3xl opacity-60" />
        <div ref={bgOrb2Ref} className="absolute bottom-10 right-10 w-80 h-80 bg-[#6149CD]/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="mb-6">
                <Star className="w-8 h-8 text-[#2ACBEC] mb-4" />
                <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
              <p className="text-sm font-semibold text-gray-900">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 9: Tools & Platforms
const ToolsPlatformsSection = () => {
  const sectionRef = useRef(null);
  const toolsRef = useRef([]);
  const tools = ["Figma", "Adobe Creative Cloud", "Webflow", "Notion", "Brandfolder"];

  useGSAP(() => {
    toolsRef.current.forEach((tool, i) => {
      if (!tool) return;
      tool.style.willChange = 'transform, opacity';
      gsap.fromTo(tool,
        { opacity: 0, scale: 0.9, y: 15 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.5, delay: i * 0.08,
          ease: "power2.out", // Simpler easing
          force3D: true,
          scrollTrigger: {
            trigger: tool,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (tool) tool.style.willChange = 'auto';
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-20 bg-white px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#2ACBEC]/5 to-[#6149CD]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Tools & <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Platforms We Use</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, i) => (
            <div 
              key={i} 
              ref={el => toolsRef.current[i] = el}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl px-8 py-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2ACBEC]/30 hover:-translate-y-2 hover:scale-105"
            >
              <p className="text-lg font-semibold text-gray-800 group-hover:text-[#2ACBEC] transition-colors">{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 10: Engagement Models & FAQ
const EngagementModelsSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using your backend API or email service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: 'Free US Brand Audit Request',
          type: 'brand-audit'
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', website: '' });

        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const models = [
    { title: "Startup Branding Setup", desc: "Perfect for new businesses starting from zero." },
    { title: "Growth Branding System", desc: "For companies scaling their brand presence and consistency." },
    { title: "Enterprise Brand Transformation", desc: "A complete rebrand and rollout for multi-team organizations." }
  ];

  const faqs = [
    { q: "How long does branding take?", a: "Most projects take 3–6 weeks, depending on scope." },
    { q: "Do you work with startups and small businesses?", a: "Yes, we support brands at every stage." },
    { q: "What deliverables will I receive?", a: "Strategy, identity systems, guidelines, and assets." },
    { q: "Do you offer rebranding?", a: "Yes, complete rebranding from research to rollout." }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Engagement Models */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Our <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Engagement Models</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {models.map((model, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2ACBEC]/30">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.title}</h3>
                <p className="text-gray-600">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-10 shadow-xl mb-16 border border-gray-100 relative overflow-hidden">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get a Free US Brand Audit</h3>

          {showSuccess ? (
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] rounded-full">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Email Sent Successfully! ✉️</h4>
              <p className="text-lg text-gray-600 mb-2">Thank you for your interest!</p>
              <p className="text-base text-gray-500">Our team will contact you shortly to discuss your brand audit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2ACBEC] focus:outline-none focus:ring-2 focus:ring-[#2ACBEC]/20 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2ACBEC] focus:outline-none focus:ring-2 focus:ring-[#2ACBEC]/20 transition-all"
              />
              <input
                type="url"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2ACBEC] focus:outline-none focus:ring-2 focus:ring-[#2ACBEC]/20 transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    'Submit'
                  )}
                </span>
              </button>
            </form>
          )}
        </div>

        {/* FAQ */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Frequently Asked <span className="bg-gradient-to-r from-[#2ACBEC] to-[#6149CD] bg-clip-text text-transparent">Questions</span>
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto text-left">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-900">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-[#2ACBEC] group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 11: Final CTA
const FinalCTASection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    if (contentRef.current) {
      contentRef.current.style.willChange = 'transform, opacity';
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            markers: false
          },
          onComplete: () => {
            if (contentRef.current) contentRef.current.style.willChange = 'auto';
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-[#2ACBEC] to-[#6149CD] px-6">
      <div ref={contentRef} className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Build a Stronger Brand?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Whether you're launching something new or strengthening your current identity, we're here to help you grow across the United States.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/contact-us">
            <MagneticButton className="px-10 py-5 bg-white text-[#2ACBEC] font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#2ACBEC]/0 via-[#2ACBEC]/10 to-[#2ACBEC]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10">Book a Free Consultation</span>
            </MagneticButton>
          </Link>
          <Link href="/contact-us">
            <MagneticButton className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#2ACBEC] transition-all duration-300 relative overflow-hidden group">
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10">Request a 1-Page Brand Audit</span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
