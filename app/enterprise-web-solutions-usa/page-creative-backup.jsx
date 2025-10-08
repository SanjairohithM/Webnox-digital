"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import Link from "next/link"
import { Building2, Settings, Rocket, Shield, Handshake, Code, RefreshCw, Database, Zap, ShoppingCart, MapPin, Users, Briefcase, Factory, Star, ArrowRight, Sparkles, Globe, TrendingUp } from "lucide-react"
import Footer from "../sections/Footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}

export default function EnterpriseWebSolutionsUSA() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <ParticleBackground />
      <MorphingHeroSection />
      <FloatingIntroSection />
      <RotatingWhyChooseSection />
      <ParallaxServicesSection />
      <InteractiveUSACoverageSection />
      <MagneticCTASection />
      <Footer />
    </div>
  )
}

// Animated Particle Background
const ParticleBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-[#00B9FF] to-[#0097D9] rounded-full opacity-20'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 2 + 's'
      container.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles with floating motion
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -50,
        x: (Math.random() - 0.5) * 100,
        rotation: 180,
        scale: 0.5,
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2
      })
    })

    return () => {
      particles.forEach(particle => particle.remove())
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
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

      // Title morphing animation
      gsap.fromTo(titleRef.current, 
        { 
          y: 200, 
          opacity: 0,
          rotationX: 90,
          transformOrigin: "center bottom"
        },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          duration: 2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Description with typewriter effect
      const descText = descRef.current?.textContent || ""
      descRef.current.textContent = ""
      
      gsap.fromTo(descRef.current, 
        { opacity: 0 },
        { 
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Typewriter effect
      let i = 0
      const typeWriter = () => {
        if (i < descText.length) {
          descRef.current.textContent += descText.charAt(i)
          i++
          setTimeout(typeWriter, 30)
        }
      }
      
      setTimeout(typeWriter, 1000)

      // Button magnetic effect
      gsap.fromTo(buttonRef.current, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.5,
          rotationY: 180
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5, 
          ease: "back.out(1.7)",
          delay: 1.5,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50"
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
          Enterprise Web Solutions in the USA – Scalable, Secure, and Future-Ready
        </h1>
        
        <p 
          ref={descRef}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          In today's fast-paced US market, enterprises need more than just a website—they need a <span className="text-[#00B9FF] font-bold">scalable digital ecosystem</span> that drives growth, efficiency, and customer trust. At Webnox Digital, we specialize in delivering <span className="text-[#00B9FF] font-bold">enterprise-grade web solutions</span> across the <span className="text-[#00B9FF] font-bold">United States</span>, tailored to the unique challenges of large organizations.
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

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-[#00B9FF]/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}

// Floating Intro Section with 3D Cards
const FloatingIntroSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Floating animation
          gsap.to(card, {
            y: -20,
            rotation: 5,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
          })

          // Scroll reveal
          gsap.fromTo(card, 
            { 
              y: 200, 
              opacity: 0,
              rotationX: 45,
              scale: 0.8
            },
            { 
              y: 0, 
              opacity: 1,
              rotationX: 0,
              scale: 1,
              duration: 1.5, 
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
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Building2, title: "US Industries", desc: "Finance, healthcare, retail, SaaS" },
            { icon: Shield, title: "Security First", desc: "HIPAA, GDPR, SOC 2 compliance" },
            { icon: TrendingUp, title: "Proven ROI", desc: "US-based case studies & results" }
          ].map((item, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border border-gray-200 hover:border-[#00B9FF] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B9FF]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#00B9FF] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
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

      // Rotating container
      gsap.to(rotatingContainerRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
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
    { icon: Building2, title: "Experience in US industries", desc: "From finance and healthcare to retail and SaaS." },
    { icon: Settings, title: "Custom development", desc: "Tailored solutions, not off-the-shelf templates." },
    { icon: Rocket, title: "Scalable architecture", desc: "Cloud-ready, API-driven, enterprise integrations." },
    { icon: Shield, title: "Security-first approach", desc: "Compliance with HIPAA, GDPR, SOC 2." },
    { icon: Handshake, title: "Proven track record", desc: "US-based case studies, enterprise clients, and measurable ROI." }
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
          Why Choose Our Enterprise Web Solutions in the USA?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featuresRef.current[index] = el}
              className="group relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border border-gray-200 hover:border-[#00B9FF] transition-all duration-500 transform hover:scale-105 hover:rotate-2 shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B9FF]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h5 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#00B9FF] transition-colors duration-300">
                  {feature.title}
                </h5>
                
                <p className="text-gray-600 leading-relaxed">
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
      icon: Code,
      title: "Custom Enterprise Applications",
      description: "Built for performance and scalability.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: RefreshCw,
      title: "Digital Transformation Solutions",
      description: "Modernize legacy systems and workflows.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: Database,
      title: "Enterprise CMS Development",
      description: "Content at scale for global organizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: Zap,
      title: "API & System Integrations",
      description: "Connect ERP, CRM, and cloud platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center"
    },
    {
      icon: ShoppingCart,
      title: "Enterprise E-commerce Solutions",
      description: "Optimized for high-volume transactions.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-white"
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
          Our Enterprise Web Development Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-gradient-to-br from-white to-blue-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-[#00B9FF] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00B9FF] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-[#00B9FF] to-[#0097D9] hover:from-[#0097D9] hover:to-[#007AC3] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B9FF]/10 to-[#0097D9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
    { icon: Building2, name: "New York", desc: "Financial Hub", projects: "800+", color: "from-blue-500 to-blue-600" },
    { icon: Rocket, name: "California", desc: "Tech Innovation", projects: "600+", color: "from-purple-500 to-purple-600" },
    { icon: Shield, name: "Texas", desc: "Healthcare & Energy", projects: "400+", color: "from-green-500 to-green-600" },
    { icon: Factory, name: "Illinois", desc: "Manufacturing", projects: "300+", color: "from-orange-500 to-orange-600" }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50"
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
          Serving Enterprises Across the USA
        </h2>
        
        <p 
          ref={descRef}
          className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          Whether you're a Fortune 500 company in New York, a healthcare provider in Texas, or a tech innovator in California, our solutions adapt to your business landscape.
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
            <span className="text-white font-bold text-lg">+100 Cities Nationwide</span>
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
            scale: 0.5,
            rotation: 180
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            rotation: 0,
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

      // Magnetic container animation
      gsap.to(magneticRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Magnetic Background */}
      <div className="absolute inset-0">
        <div 
          ref={magneticRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#00B9FF]/20 rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#0097D9]/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#007AC3]/40 rounded-full" />
      </div>

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
              Let's Build Your Enterprise Web Solution
            </span>
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Future-proof your enterprise with a partner who understands the complexity of US markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/contact-us">
              <button
                ref={el => buttonsRef.current[0] = el}
                className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#00B9FF] to-[#0097D9] text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-[#00B9FF]/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
              >
                <span className="relative z-10 flex items-center">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0097D9] to-[#007AC3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            
            <span className="text-gray-400 text-lg font-medium">or</span>
            
            <Link href="/contact-us">
              <button
                ref={el => buttonsRef.current[1] = el}
                className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-gray-600 hover:border-gray-500"
              >
                <span className="relative z-10 flex items-center">
                  Request a Proposal
                  <Star className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

