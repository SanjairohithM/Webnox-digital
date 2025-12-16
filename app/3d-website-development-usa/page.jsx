"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { Globe, Zap, ShoppingCart, Monitor, ArrowRight, Shield, Users } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ThreeDUSAServices() {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "3D Website Development Services USA",
    "provider": {
      "@type": "Organization",
      "name": "Webnox Digital",
      "url": "https://www.webnoxdigital.com",
      "logo": "https://www.webnoxdigital.com/logo/normallogo.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "description": "Cutting-edge 3D website development services for US businesses. Immersive web experiences, interactive 3D designs, and modern web solutions across the United States."
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webnox Digital",
    "url": "https://www.webnoxdigital.com",
    "logo": "https://www.webnoxdigital.com/logo/normallogo.png"
  }

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <HeroSection />
      <WhyChoose />
      <Services />
      <Coverage />
      <CTASection />
    </div>
  )
}

// ---------------- Hero Section ----------------
const HeroSection = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(buttonRef.current,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative min-h-screen flex mt-[100px] items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6">
      <div className="max-w-5xl text-center">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-8 leading-tight opacity-0">
          <span
            style={{
              background: "linear-gradient(45deg, #00B9FF, #0097D9, #007AC3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            3D Website Development Services in the USA
          </span>{" "}
          – Engage Customers with Immersive Web Experiences
        </h1>
        <p ref={descRef} className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0">
          In the United States, standing out online requires more than a traditional website. Today’s consumers expect interactive, visually stunning, and engaging digital experiences. At Webnox Digital, we specialize in custom{" "}
          <span className="text-[#00B9FF] font-semibold">3D website design and development</span> across the USA, leveraging Three.js, WebGL, and cutting-edge technologies to transform how enterprises connect with their audiences.
        </p>
        <Link href="/contact-us#contact-form">
          <button
            ref={buttonRef}
            className="inline-flex items-center px-10 py-5 bg-[#00B9FF] text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 opacity-0"
          >
            Book a Free Consultation
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </Link>
      </div>
    </section>
  )
}

// ---------------- Why Choose Section ----------------
const WhyChoose = () => {
  const features = [
    { icon: Zap, title: "Pioneers in Immersive Web", desc: "Experts in WebGL, Three.js, and AR/VR-ready design." },
    { icon: Monitor, title: "Tailored for Enterprises", desc: "Scalable 3D sites built for US startups, corporates, and e-commerce." },
    { icon: Users, title: "Conversion-Focused", desc: "Not just visuals—our 3D designs are built to drive leads and sales." },
    { icon: Globe, title: "US Market Expertise", desc: "Experience across industries: real estate, automotive, retail, SaaS." },
    { icon: Shield, title: "SEO-Friendly Builds", desc: "Hybrid structure so Google can crawl your site effectively." },
  ]

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    // Title Animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    )

    // Cards Animation
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-16 text-gray-900 opacity-0">Why Choose Our 3D Web Development Services in the USA?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el} className="feature-card group relative bg-white rounded-3xl w-full p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 opacity-0">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-2xl flex items-center justify-center shadow-md">
                <f.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00B9FF] transition-colors">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------- Services Section ----------------
const Services = () => {
  const services = [
    { icon: Monitor, title: "Custom 3D Website Design", desc: "Unique, interactive user experiences for US businesses." },
    { icon: Users, title: "Enterprise 3D Product Showcases", desc: "Perfect for automotive, real estate, and retail." },
    { icon: Globe, title: "WebGL & Three.js Development", desc: "Lightweight, high-performance interactive 3D." },
    { icon: ShoppingCart, title: "3D E-commerce Experiences", desc: "Boost engagement and conversions with product configurators." },
    { icon: Zap, title: "Immersive Landing Pages", desc: "Create memorable brand-first impressions." },
  ]

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      }
    )

    gsap.fromTo(cardsRef.current,
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-16 opacity-0">Our US 3D Website Development Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {services.map((s, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el} className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 opacity-0">
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#00B9FF] to-[#0097D9] rounded-xl flex items-center justify-center">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00B9FF]">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------- Coverage Section ----------------
const Coverage = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div ref={contentRef} className="max-w-6xl mx-auto px-6 text-center opacity-0">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Serving Businesses Nationwide</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          From Silicon Valley tech innovators to New York retail giants, we help American enterprises build next-generation web experiences.
        </p>
      </div>
    </section>
  )
}

// ---------------- CTA Section ----------------
const CTASection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.75)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-28 bg-white text-center">
      <div ref={contentRef} className="opacity-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Ready to build your 3D website in the USA?</h2>
        <Link href="/contact-us#contact-form">
          <button className="inline-flex items-center px-10 py-5 bg-[#00B9FF] text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            Book a Free Consultation
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </Link>
      </div>
    </section>
  )
}
