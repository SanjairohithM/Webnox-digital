"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import ServicesOverlay from "./Components/Header/ServicesOverlay"
import SolutionsOverlay from "./Components/Header/SolutionsOverlay"
import UKOverlay from "./Components/Header/UKOverlay"
import USAOverlay from "./Components/Header/USAOverlay"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [showServicesOverlay, setShowServicesOverlay] = useState(false)
  const [showSolutionsOverlay, setShowSolutionsOverlay] = useState(false)
  const [showUKOverlay, setShowUKOverlay] = useState(false)
  const [showUSAOverlay, setShowUSAOverlay] = useState(false)

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "AI", href: "/ai-services" },
    { name: "Resource", href: "/resources" },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    setEmail("")
  }


  return (
    <>
      {/* Services Overlay */}
      {showServicesOverlay && (
        <ServicesOverlay onClose={() => setShowServicesOverlay(false)} />
      )}

      {/* Solutions Overlay */}
      {showSolutionsOverlay && (
        <SolutionsOverlay onClose={() => setShowSolutionsOverlay(false)} />
      )}

      {/* UK Overlay */}
      {showUKOverlay && (
        <UKOverlay onClose={() => setShowUKOverlay(false)} />
      )}

      {/* USA Overlay */}
      {showUSAOverlay && (
        <USAOverlay onClose={() => setShowUSAOverlay(false)} />
      )}

      <footer className="relative font-sans bg-gray-100 text-gray-800 overflow-x-hidden">
      <div className="w-full px-6 lg:px-20 max-w-full">
        {/* Top Section - Inquiry and Subscription */}
        <div className="py-8 md:py-12 border-b border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-3">
                Do you have any questions?
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
                Feel free to send us your questions or request a free consultation.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25C3E5] text-gray-800 placeholder-gray-400 flex-1 md:flex-initial md:w-64 text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap text-sm md:text-base"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left: Navigation Links */}
          <div className="md:col-span-3 space-y-6">
            <nav className="flex flex-wrap gap-x-4 md:gap-x-8 lg:gap-x-14 gap-y-3 md:gap-y-4 text-sm md:text-base lg:text-lg relative">
              {navigationLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <button
                      key={link.name}
                      type="button"
                      onClick={() => setShowServicesOverlay(true)}
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </button>
                  )
                }
                if (link.name === "Solutions") {
                  return (
                    <button
                      key={link.name}
                      type="button"
                      onClick={() => setShowSolutionsOverlay(true)}
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </button>
                  )
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              })}
              <button
                type="button"
                onClick={() => setShowUKOverlay(true)}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                UK
              </button>
              <button
                type="button"
                onClick={() => setShowUSAOverlay(true)}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                USA
              </button>
            </nav>

            {/* Contact Information - Three Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-3 text-sm md:text-base mt-0">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2 uppercase tracking-wide">Opening Hours</h5>
                <p className="text-gray-600">Mon-Sat: 09.00 AM - 06.00 PM</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2 uppercase tracking-wide">Email</h5>
                <a href="mailto:info@webnoxdigital.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                  info@webnoxdigital.com
                </a>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2 uppercase tracking-wide">Sign Up</h5>
                <a href="tel:+919786557739" className="text-gray-600 hover:text-gray-800 transition-colors">
                  +91 97865 57739
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/webnox_digital_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/webnox-digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/webnoxdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  privacy-policy
                </Link>
                <span className="text-gray-400">|</span>
                <Link
                  href="/refund-cancellation-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  refund-cancellation-policy
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Logo and Tagline */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start lg:items-end justify-start md:justify-center mt-8 md:mt-0">
            <div className="mb-4">
              <Link href="/" className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo/normallogo.png"
                  alt="Webnox Digital Logo"
                  width={160}
                  height={160}
                  className="object-contain w-32 h-32 md:w-40 md:h-40 lg:w-[160px] lg:h-[160px]"
                />
              </Link>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center md:text-left lg:text-right max-w-md">
              Transforming Ideas into Intelligent Solutions
            </p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="py-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} – Copyright
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
