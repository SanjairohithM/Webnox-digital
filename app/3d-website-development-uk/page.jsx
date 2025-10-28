"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Globe, Zap, ShoppingCart, Monitor, Users, ArrowRight, Shield } from "lucide-react"
import Footer from "../sections/Footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}



// ---------------- Hero Section ----------------
const HeroSection = () => {
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
    gsap.fromTo(descRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3 })
    gsap.fromTo(buttonRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.6 })
  }, [])

  return (
    <section className="relative min-h-screen flex mt-[100px] items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6">
      <div className="max-w-5xl text-center">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span
            style={{
              background: "linear-gradient(45deg, #00B9FF, #0097D9, #007AC3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            3D Website Development Services in the UK
          </span>{" "}
          – Create Interactive Digital Experiences That Convert
        </h1>
        <p ref={descRef} className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          In the UK, businesses are embracing <span className="text-[#00B9FF] font-semibold">3D websites</span> to captivate audiences and stand apart from competitors. At Webnox Digital, we design and develop{" "}
          <span className="text-[#00B9FF] font-semibold">interactive 3D websites</span> for enterprises across the United Kingdom, delivering engaging, conversion-focused experiences.
        </p>
        <Link href="/contact-us">
          <button
            ref={buttonRef}
            className="inline-flex items-center px-10 py-5 bg-[#00B9FF] text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            Request a Free Strategy Call
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
    { icon: Globe, title: "UK Market Expertise", desc: "Serving London corporates, Manchester startups, and nationwide enterprises." },
    { icon: Zap, title: "Cutting-edge Tech", desc: "Powered by Three.js, WebGL, and next-gen frameworks." },
    { icon: Monitor, title: "Industry-Focused", desc: "Trusted by UK businesses in retail, real estate, and tech." },
    { icon: Shield, title: "Optimised & Secure", desc: "SEO-ready, performance-driven, and GDPR-friendly." },
  ]

  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelectorAll(".feature-card"), { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } })
  }, [])

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-gray-900">Why Choose Our 3D Web Development Services in the UK?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="feature-card group relative bg-white rounded-3xl w-[300px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
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
    { icon: Monitor, title: "Custom 3D Website Design", desc: "Tailored for UK brands and enterprises." },
    { icon: ShoppingCart, title: "3D E-commerce Platforms", desc: "Interactive shopping experiences for UK audiences." },
    { icon: Zap, title: "Interactive 3D Product Demos", desc: "Perfect for retail, fashion, and real estate." },
    { icon: Globe, title: "WebGL & Three.js Solutions", desc: "Smooth, immersive cross-device experiences." },
  ]

  return (
    <section className="py-28 bg-white">
      <div className=" mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Our UK 3D Website Development Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s, i) => (
            <div key={i} className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
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
  const cities = [
    { name: "London", desc: "Corporate Hub", projects: "500+" },
    { name: "Manchester", desc: "Startup Center", projects: "300+" },
    { name: "Birmingham", desc: "Business Hub", projects: "250+" },
    { name: "Leeds", desc: "Innovation Hub", projects: "200+" },
  ]

  return (
    <section className="py-28 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Serving Businesses Across the UK</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cities.map((c, i) => (
            <div key={i} className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-[#00B9FF] mb-2">{c.name}</h3>
              <p className="text-gray-600 mb-3">{c.desc}</p>
              <span className="text-sm font-semibold text-gray-500">{c.projects} Projects</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------- CTA Section ----------------
const CTASection = () => {
  return (
    <section className="py-28 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">Transform Your UK Website into an Immersive Experience</h2>
      <Link href="/contact-us#contact-form">
        <button className="inline-flex items-center px-10 py-5 bg-[#00B9FF] text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          Request a Free Strategy Call
          <ArrowRight className="ml-3 w-6 h-6" />
        </button>
      </Link>
    </section>
  )
}


export default function DigitalTransformationUKPage() {
    return (
      <main className="overflow-hidden">
        <HeroSection />
        <WhyChoose />
        <Services />
        <Coverage />
        <CTASection />
        <Footer />
      </main>
    );
  }
