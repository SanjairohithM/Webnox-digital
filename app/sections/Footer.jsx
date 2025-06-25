"use client"

import React from "react"

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
    <footer ref={footerRef} className="bg-gray-50 px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16">
          {/* Left Content */}
          <div ref={formRef} className="lg:max-w-2xl mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 leading-tight">
              Do you have
              <br />
              any questions?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Feel free to send us your questions or request a free consultation.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Get Started
              </button>
            </form>

            {/* Disclaimer */}
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={toggleDisclaimer}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <span>Disclaimer</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isDisclaimerOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div ref={disclaimerRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  By submitting this form, you agree to our terms of service and privacy policy. We will use your
                  information to respond to your inquiry and may contact you about our services.
                </p>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div ref={logoRef} className="flex justify-center lg:justify-end">
            <div className="text-4xl font-light text-gray-400">
              <span className="text-gray-600">W</span>
              <span className="text-cyan-400">eo</span>
              <span className="text-gray-600">nox</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="border-t border-gray-200 pt-8 mb-12">
          <ul className="flex flex-wrap gap-8 text-gray-600">
            {["Home", "About", "Solutions", "Industries", "Expertise", "AI", "Resource"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">SIGN UP</h4>
                <p className="text-gray-900 font-medium">+000 0000 0000</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">OPENING HOURS</h4>
                <p className="text-gray-900 font-medium">24/7</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">EMAIL</h4>
                <p className="text-gray-900 font-medium">youremail@mail.com</p>
              </div>
            </div>

            {/* Tagline */}
            <div className="text-right">
              <p className="text-gray-900 font-medium">
                Transforming Ideas into Intelligent
                <br />
                Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
