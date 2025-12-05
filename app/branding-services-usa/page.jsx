"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Link from "next/link"
import { Building2, Settings, Rocket, Shield, Handshake, Code, RefreshCw, Database, Zap, ShoppingCart, MapPin, Users, Briefcase, Factory, Star, ArrowRight, Sparkles, Globe, TrendingUp, Palette, Target, FileText, Monitor, RefreshCcw } from "lucide-react"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}

export default function BrandingServicesUSA() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <MorphingHeroSection />
      <FloatingIntroSection />
      <RotatingWhyChooseSection />
      <ParallaxServicesSection />
      <InteractiveUSACoverageSection />
      <MagneticCTASection />
    </div>
  )
}

// Morphing Hero Section with 3D Text
const MorphingHeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const morphingShapesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Morphing background shapes
      morphingShapesRef.current.forEach((shape, index) => {
        gsap.to(shape, {
          rotation: 360,
          scale: 1.2,
          duration: 4 + index,
          repeat: -1,
          ease: "power2.inOut",
          yoyo: true
        })
      })

      // Professional title animation with split text effect
      gsap.set(titleRef.current, { opacity: 0, y: 80 })
      
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Add a subtle scale animation for professional feel
      gsap.fromTo(titleRef.current, 
        { scale: 0.95 },
        { 
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Professional description animation
      gsap.fromTo(descRef.current, 
        { 
          opacity: 0,
          y: 40,
          scale: 0.98
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.8,
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Professional button animation
      gsap.fromTo(buttonRef.current, 
        { 
          y: 60, 
          opacity: 0,
          scale: 0.9
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 1.2,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Add a subtle hover effect animation
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        paused: true,
        yoyo: true,
        repeat: 1
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 pt-32 pb-20"
    >
      {/* Morphing Background Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={el => morphingShapesRef.current[i] = el}
            className="absolute opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              background: `linear-gradient(45deg, #00B9FF, #0097D9)`,
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-gray-900"
          style={{
            background: "linear-gradient(45deg, #00B9FF, #0097D9, #007AC3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Branding Services in the USA – Build a Future-Proof Brand Identity
        </h1>
        
        <p 
          ref={descRef}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          In today's competitive US market, your brand is more than a logo – it's your voice, values, and customer promise. At Webnox Digital, we deliver <span className="text-[#00B9FF] font-bold">strategic branding solutions</span> for <span className="text-[#00B9FF] font-bold">enterprises and fast-growing businesses</span> across the <span className="text-[#00B9FF] font-bold">USA</span>, designed to differentiate, engage, and convert.
        </p>
        
        <Link href="/contact-us">
          <button
            ref={buttonRef}
            className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#00B9FF] to-[#0097D9] text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-[#00B9FF]/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
          >
            <span className="relative z-10 flex items-center">
              Start Your Journey
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0097D9] to-[#007AC3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </Link>
      </div>
    </section>
  )
}

// Floating Intro Section with 3D Cards
const FloatingIntroSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Clean scroll reveal only - no floating animation
        gsap.fromTo(card, 
          { 
            y: 60, 
            opacity: 0,
            scale: 0.95
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: 1, 
            ease: "power3.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    })
  }, { scope: sectionRef })

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#00B9FF] rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#0097D9] rotate-12"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border border-[#007AC3] rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-[#00B9FF] to-[#0097D9] bg-clip-text text-transparent">
              US Branding Solutions?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built specifically for the US market with deep understanding of local culture, 
            business practices, and consumer preferences.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "US Industries", desc: "Tech, finance, retail, healthcare" },
              { icon: Globe, title: "Research-Driven", desc: "Market insights, competitor benchmarking" },
              { icon: TrendingUp, title: "Proven Results", desc: "Trusted by US companies with case studies" }
            ].map((item, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00B9FF]/20 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B9FF]/5 to-[#0097D9]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container with enhanced styling */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0097D9] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-gradient-to-r from-[#00B9FF] to-[#0097D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Rotating Why Choose Section
const RotatingWhyChooseSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const rotatingContainerRef = useRef(null)
  const featuresRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0, rotationX: 45 },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Fade in/out animation for circles
      gsap.to(rotatingContainerRef.current, {
        scale: 1.5,
        opacity: 0.3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      })

      // Animate the middle circle
      gsap.to(rotatingContainerRef.current?.nextElementSibling, {
        scale: 1.8,
        opacity: 0.2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 0.5
      })

      // Animate the inner circle
      gsap.to(rotatingContainerRef.current?.nextElementSibling?.nextElementSibling, {
        scale: 2,
        opacity: 0.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 1
      })

      // Individual feature animations
      featuresRef.current.forEach((feature, index) => {
        gsap.fromTo(feature, 
          { 
            y: 150, 
            opacity: 0,
            rotation: 180,
            scale: 0.5
          },
          { 
            y: 0, 
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 1.2, 
            ease: "back.out(1.7)",
            delay: index * 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const features = [
    { icon: Target, title: "Experience across US industries", desc: "Tech, finance, retail, healthcare." },
    { icon: Globe, title: "Research-driven approach", desc: "Market insights, competitor benchmarking." },
    { icon: Building2, title: "Full-service branding", desc: "Identity, messaging, digital, and visual systems." },
    { icon: Shield, title: "Enterprise-ready", desc: "Scalable brand guidelines for multi-location businesses." },
    { icon: Handshake, title: "Trusted by US companies", desc: "Proven results and case studies." }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      {/* Rotating Background */}
      <div className="absolute inset-0">
        <div 
          ref={rotatingContainerRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#00B9FF]/20 rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#0097D9]/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#007AC3]/40 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-20 text-gray-900"
          style={{
            background: "linear-gradient(45deg, #00B9FF, #0097D9, #007AC3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Why Choose Our Branding Services in the USA?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featuresRef.current[index] = el}
              className="group relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 border border-gray-200 hover:border-[#00B9FF] transition-all duration-500 transform hover:scale-105 hover:rotate-2 shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B9FF]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h5 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#00B9FF] transition-colors duration-300">
                  {feature.title}
                </h5>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Parallax Services Section
const ParallaxServicesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const parallaxRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(parallaxRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      // Title animation
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cards with different parallax speeds
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card, 
          { 
            y: 200, 
            opacity: 0,
            rotationY: 45,
            scale: 0.8
          },
          { 
            y: 0, 
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 1.2, 
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Parallax effect for each card
        gsap.to(card, {
          y: -50 * (index + 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: Target,
      title: "Brand Strategy & Positioning",
      description: "Define your competitive edge in the American market.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: Palette,
      title: "Visual Identity Design",
      description: "Logos, colors, typography aligned with US consumer trends.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: FileText,
      title: "Enterprise Brand Guidelines",
      description: "Consistency across teams, platforms, and regions.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: Monitor,
      title: "Digital Branding",
      description: "Web, social, and mobile-first experiences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: RefreshCcw,
      title: "Rebranding Services",
      description: "Transform outdated brands into modern US market leaders.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="pt-16 pb-32 relative overflow-hidden bg-white"
    >
      {/* Parallax Background */} 
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-br from-[#00B9FF]/5 to-[#0097D9]/5"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-gray-900"
          style={{
            background: "linear-gradient(45deg, #00B9FF, #0097D9, #007AC3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Our US Branding Solutions
        </h2>

        <div className="flex flex-wrap justify-center gap-15 space-x-3 space-y-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#00B9FF] transition-all duration-500 hover:-translate-y-2 h-[350px] shadow-lg hover:shadow-2xl w-full sm:w-80 md:w-72 lg:w-80"
            >
              {/* Icon Section */}
              <div className="relative h-32 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00B9FF] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button className="w-full bg-[#00B9FF] hover:bg-[#0097a7] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B9FF]/5 to-[#0097D9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Interactive USA Coverage Section
const InteractiveUSACoverageSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const cardsRef = useRef([])
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0, rotationX: 45 },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      gsap.fromTo(descRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 1, 
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cards with magnetic effect
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card, 
          { 
            y: 150, 
            opacity: 0,
            scale: 0.5,
            rotation: 45
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2, 
            ease: "back.out(1.7)",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cities = [
    { icon: Building2, name: "Silicon Valley", desc: "Tech Startups", projects: "400+", color: "from-blue-500 to-blue-600" },
    { icon: Factory, name: "New York", desc: "Corporations", projects: "600+", color: "from-purple-500 to-purple-600" },
    { icon: Briefcase, name: "Los Angeles", desc: "Entertainment", projects: "350+", color: "from-green-500 to-green-600" },
    { icon: Users, name: "Chicago", desc: "Business Hub", projects: "300+", color: "from-orange-500 to-orange-600" }
  ]

  return (
    <section 
      ref={sectionRef}
      className="pt-16 pb-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900"
          style={{
            background: "linear-gradient(45deg, #00B9FF, #0097D9, #007AC3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Serving Businesses Nationwide
        </h2>
        
        <p 
          ref={descRef}
          className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          From <span className="text-[#00B9FF] font-bold">startups in Silicon Valley</span> to <span className="text-[#00B9FF] font-bold">corporations in New York</span>, we craft branding that speaks to American customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`group relative bg-gradient-to-br ${city.color} rounded-3xl p-8 transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 cursor-pointer shadow-lg hover:shadow-2xl`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <city.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                <p className="text-white/80 text-sm mb-4">{city.desc}</p>
                <div className="text-3xl font-bold text-white">{city.projects}</div>
                <div className="text-white/60 text-sm">Projects</div>
              </div>

              {/* Hover Effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 bg-white/10 rounded-3xl animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Additional Coverage Info */}
        <div className="mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#00B9FF] to-[#0097D9] rounded-full px-8 py-4 shadow-2xl">
            <Sparkles className="w-6 h-6 text-white mr-3 animate-pulse" />
            <span className="text-white font-bold text-lg">+50 States Nationwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Magnetic CTA Section
const MagneticCTASection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const buttonsRef = useRef([])
  const magneticRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, 
        { y: 100, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Magnetic effect for buttons
      buttonsRef.current.forEach((button, index) => {
        gsap.fromTo(button, 
          { 
            y: 50, 
            opacity: 0,
            scale: 0.5
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: 1.2, 
            ease: "back.out(1.7)",
            delay: 0.5 + index * 0.3,
            scrollTrigger: {
              trigger: button,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div ref={contentRef}>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span 
              className="inline-block"
              style={{
                background: "linear-gradient(45deg, #00B9FF, #0097D9, #007AC3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Book a Free Consultation
            </span>
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Ready to build your future-proof brand identity? Let's discuss how our branding services can help your US business stand out.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/contact-us">
              <button
                // ref={el => buttonsRef.current[0] = el}
                className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#00B9FF] to-[#0097D9] text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-[#00B9FF]/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
              >
                <span className="relative z-10 flex items-center">
                Claim Your Free Consultation Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0097D9] to-[#007AC3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
