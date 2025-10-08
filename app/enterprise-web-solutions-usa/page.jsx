"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Link from "next/link"
import { Building2, Settings, Rocket, Shield, Handshake, Code, RefreshCw, Database, Zap, ShoppingCart, MapPin, Users, Briefcase, Factory } from "lucide-react"
import Footer from "../sections/Footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}

// Hero Section with Original Design
const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const floatingElementsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating background elements animation
      gsap.set(floatingElementsRef.current, { opacity: 0, scale: 0.8 })
      
      // Title animation
      gsap.set([titleRef.current, descRef.current, buttonRef.current], { 
        opacity: 0, 
        y: 60,
        rotationX: 15
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        }
      })

      // Animate floating elements
      tl.to(floatingElementsRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        stagger: 0.2
      })
      // Animate main content
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")

      // Continuous floating animation
      gsap.to(floatingElementsRef.current, {
        y: "+=20",
        rotation: "+=5",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #E6F7FD 0%, #ffffff 80%)"
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={el => floatingElementsRef.current[i] = el}
            className="absolute w-20 h-20 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-sm"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-[#00B9FF]"
        >
          Enterprise Web Solutions in the USA – Scalable, Secure, and Future-Ready
        </h1>
        
        <p 
          ref={descRef}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          In today's fast-paced US market, enterprises need more than just a website—they need a <span className="text-[#00B9FF] font-bold">scalable digital ecosystem</span> that drives growth, efficiency, and customer trust. At Webnox Digital, we specialize in delivering <span className="text-[#00B9FF] font-bold">enterprise-grade web solutions</span> across the <span className="text-[#00B9FF] font-bold">United States</span>, tailored to the unique challenges of large organizations.
        </p>
        
        <Link href="/contact-us">
          <button
            ref={buttonRef}
            className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-sans font-semibold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer"
          >
            Start Your Journey
          </button>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

// Why Choose Section with Creative Design
const WhyChooseSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current], { opacity: 0, y: 50 })
      gsap.set(cardsRef.current, { opacity: 0, y: 80, scale: 0.9 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)"
      }, "-=0.4")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Building2,
      title: "Experience in US industries",
      description: "From finance and healthcare to retail and SaaS."
    },
    {
      icon: Settings,
      title: "Custom development",
      description: "Tailored solutions, not off-the-shelf templates."
    },
    {
      icon: Rocket,
      title: "Scalable architecture",
      description: "Cloud-ready, API-driven, enterprise integrations."
    },
    {
      icon: Shield,
      title: "Security-first approach",
      description: "Compliance with HIPAA, GDPR, SOC 2."
    },
    {
      icon: Handshake,
      title: "Proven track record",
      description: "US-based case studies, enterprise clients, and measurable ROI."
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-[#00B9FF]"
        >
          Why Choose Our Enterprise Web Solutions in the USA?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center bg-[#00B9FF] rounded-2xl text-white">
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h5 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#00B9FF] transition-colors duration-300">
                  {feature.title}
                </h5>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-300 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Section with Modern Card Design + Dummy Images
const ServicesSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cards animation with stagger
      gsap.fromTo(cardsRef.current, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.9
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 1, 
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Hover animations for each card
      cardsRef.current.forEach((card) => {
        if (card) {
          const hoverTl = gsap.timeline({ paused: true })
          hoverTl
            .to(card, { 
              scale: 1.02, 
              y: -10,
              duration: 0.3, 
              ease: "power2.out" 
            })
            .to(card.querySelector('.service-image'), { 
              scale: 1.1,
              duration: 0.3, 
              ease: "power2.out" 
            }, 0)

          card.addEventListener('mouseenter', () => hoverTl.play())
          card.addEventListener('mouseleave', () => hoverTl.reverse())
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: Code,
      title: "Custom Enterprise Applications",
      description: "Built for performance and scalability.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
      features: ["Scalable Architecture", "Security First", "Cloud Native"]
    },
    {
      icon: RefreshCw,
      title: "Digital Transformation Solutions",
      description: "Modernize legacy systems and workflows.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&crop=center",
      features: ["System Migration", "Data Migration", "Performance Optimization"]
    },
    {
      icon: Database,
      title: "Enterprise CMS Development",
      description: "Content at scale for global organizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      features: ["Content Management", "Multi-site Support", "API Integration"]
    },
    {
      icon: Zap,
      title: "API & System Integrations",
      description: "Connect ERP, CRM, and cloud platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      features: ["API Development", "Third-party Integration", "Data Synchronization"]
    },
    {
      icon: ShoppingCart,
      title: "Enterprise E-commerce Solutions",
      description: "Optimized for high-volume transactions.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      features: ["High Performance", "Payment Integration", "Inventory Management"]
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B9FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#00B9FF]"
          >
            Our Enterprise Web Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to scale with your business and exceed your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#00B9FF] rounded-xl flex items-center justify-center text-white shadow-lg">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00B9FF] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#00B9FF] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-[#00B9FF] hover:bg-[#0097a7] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group">
                  <span>Learn More</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B9FF]/5 to-[#0097D9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise web solutions can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get Free Consultation
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="border-2 border-[#00B9FF] text-[#00B9FF] hover:bg-[#00B9FF] hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
                View Our Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// USA Coverage Section with Creative Design
const USACoverageSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, descRef.current], { opacity: 0, y: 50 })
      gsap.set(mapRef.current, { opacity: 0, scale: 0.8 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(mapRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.6")

      // Animate individual city cards
      const cityCards = mapRef.current?.children
      if (cityCards) {
        gsap.fromTo(cityCards, 
          { 
            y: 50, 
            opacity: 0,
            scale: 0.9
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: 0.8, 
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.5
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #00B9FF 0%, #0097D9 50%, #007AC3 100%)"
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
        >
          Serving Enterprises Across the USA
        </h2>
        
        <p 
          ref={descRef}
          className="text-xl md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          Whether you're a Fortune 500 company in <span className="text-yellow-300 font-semibold underline decoration-2 underline-offset-4">New York</span>, a healthcare provider in <span className="text-yellow-300 font-semibold underline decoration-2 underline-offset-4">Texas</span>, or a tech innovator in California, our solutions adapt to your business landscape.
        </p>

        {/* USA Coverage Stats */}
        <div 
          ref={mapRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {/* New York */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">New York</h3>
              <p className="text-white/80 text-sm">Financial Hub</p>
              <div className="mt-3 text-yellow-300 font-semibold">800+ Projects</div>
            </div>
          </div>

          {/* California */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">California</h3>
              <p className="text-white/80 text-sm">Tech Innovation</p>
              <div className="mt-3 text-yellow-300 font-semibold">600+ Projects</div>
            </div>
          </div>

          {/* Texas */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Texas</h3>
              <p className="text-white/80 text-sm">Healthcare & Energy</p>
              <div className="mt-3 text-yellow-300 font-semibold">400+ Projects</div>
            </div>
          </div>

          {/* Illinois */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Illinois</h3>
              <p className="text-white/80 text-sm">Manufacturing</p>
              <div className="mt-3 text-yellow-300 font-semibold">300+ Projects</div>
            </div>
          </div>
        </div>

        {/* Additional Coverage Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-semibold">+100 Cities Nationwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section with Unique Design
const CTASection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const buttonsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([contentRef.current], { opacity: 0, y: 100 })
      gsap.set(buttonsRef.current, { opacity: 0, y: 50 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      })

      tl.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      })
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.5")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E6F7FD 0%, #B3E5FC 50%, #81D4FA 100%)"
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B9FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0097D9]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div ref={contentRef}>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00B9FF] mb-8 leading-tight">
            Let's Build Your Enterprise Web Solution
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            Future-proof your enterprise with a partner who understands the <span className="text-[#00B9FF] font-semibold">complexity of US markets</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact-us">
              <button
                ref={el => buttonsRef.current[0] = el}
                className="bg-[#00B9FF] hover:bg-[#0097a7] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer w-full sm:w-auto"
              >
                Schedule a Free Consultation
              </button>
            </Link>
            
            <span className="text-gray-600 text-lg font-medium">or</span>
            
            <Link href="/contact-us">
              <button
                ref={el => buttonsRef.current[1] = el}
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer w-full sm:w-auto border border-gray-600 hover:border-gray-500"
              >
                Request a Proposal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const EnterpriseWebSolutionsUSA = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <USACoverageSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default EnterpriseWebSolutionsUSA