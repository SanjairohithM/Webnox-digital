"use client"

import React from "react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ChevronDown } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false)
  const footerRef = useRef(null)
  const disclaimerRef = useRef(null)
  const formRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation on mount
      gsap.fromTo(formRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })

      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out" },
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const toggleDisclaimer = () => {
    setIsDisclaimerOpen(!isDisclaimerOpen)

    if (!isDisclaimerOpen) {
      gsap.to(disclaimerRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    } else {
      gsap.to(disclaimerRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

    const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    console.log("Email submitted:", email)
  }

  return (
    <footer ref={footerRef} className="bg-white px-8 py-8 lg:px-16 font-sans">
      <div className="mx-auto max-w-8xl">
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-24">
          {/* Left Content */}
          <div ref={formRef} className="lg:max-w-3xl mb-12 lg:mb-0">
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Do you have
              <br />
              any questions?
            </h2>
            <p className="text-gray-600 mb-12 text-xl leading-relaxed">
              Feel free to send us your questions or request a free consultation.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6 mb-12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="flex-1 px-8 py-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg"
                required
              />
              <button
                type="submit"
                className="px-10 py-6 bg-[#00B9FF] hover:bg-[#00B9FF] text-white font-urbanist rounded-xl transition-colors duration-200 text-lg"
              >
                Get Started
              </button>
            </form>

            {/* Disclaimer */}
            <div className="border-t border-gray-200 pt-6">
              <button
                onClick={toggleDisclaimer}
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
              >
                <span>Disclaimer</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${isDisclaimerOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div ref={disclaimerRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
                <p className="text-base text-gray-500 mt-6 leading-relaxed">
                  By submitting this form, you agree to our terms of service and privacy policy. We will use your
                  information to respond to your inquiry and may contact you about our services.
                </p>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div ref={logoRef} className="flex justify-center lg:justify-end">
            <Image
              src="/webnox-logo.png"
              alt="Webnox Digital Logo"
              width={280}
              height={120}
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="border-t border-gray-200 pt-12 mb-16">
          <ul className="flex flex-wrap gap-18 font-urbanist font-semibold text-gray-500">
            {["Home", "About", "Solutions", "Industries", "Expertise", "AI", "Resource"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-900 transition-colors duration-200 text-lg font-urbanist">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-12 ">
              <div>
                <h4 className="text-base font-urbanist text-gray-500 uppercase tracking-wider mb-3">SIGN UP</h4>
                <p className="text-gray-900 font-urbanist font-semibold text-lg">+000 0000 0000</p>
              </div>

              <div>
                <h4 className="text-base font-urbanist text-gray-500 uppercase tracking-wider mb-3">OPENING HOURS</h4>
                <p className="text-gray-900 font-urbanist font-semibold text-lg">24/7</p>
              </div>

              <div>
                <h4 className="text-base font-urbanist text-gray-500 uppercase tracking-wider mb-3">EMAIL</h4>
                <p className="text-gray-900 font-urbanist font-semibold text-lg">youremail@mail.com</p>
              </div>
            </div>

            {/* Tagline */}
            <div className="text-right">
              <p className="text-gray-900 font-urbanist text-xl leading-relaxed">
                Transforming Ideas into Intelligent
                <br />
                Solutions
              </p>
              <p className="text-gray-400 font-urbanist font-semibold text-lg">© 2045-Copyright</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
