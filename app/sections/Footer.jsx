"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [disclaimerOpen, setDisclaimerOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false)
  const servicesDropdownRef = useRef(null)
  const solutionsDropdownRef = useRef(null)

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Solutions:", href: "/solutions" },
    { name: "Services:", href: "/services" },
    { name: "AI", href: "/ai-services" },
    { name: "Resource", href: "/resources" },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  const services = [
    { name: "IT Consulting", href: "/it-consulting" },
    { name: "AI Automation", href: "/ai-automation" },
    { name: "Data Analytics", href: "/data-analytics" },
    { name: "Next-gen Marketing", href: "/next-gen-marketing" },
    { name: "Emerging Tech", href: "/emerging-tech" },
    { name: "Outsourcing", href: "/outsourcing" },
    { name: "N8N Workflow", href: "/n8n-automation-workflow" },
    { name: "Customer Experience", href: "/customer-experience" },
  ]

  const solutions = [
    { name: "Branding", href: "/branding-agency" },
    { name: "Software Development", href: "/software-development" },
    { name: "Online Store Solutions", href: "/e-commerce-services" },
    { name: "IOS & Android App Dev", href: "/app-development-services" },
    { name: "Custom Web Solutions", href: "/custom-web-solutions" },
    { name: "UI/UX", href: "/ui-ux-design-services" },
    { name: "Cloud & DevOps", href: "/cloud-devops-services" },
    { name: "3D Website", href: "/3d-web-design-services" },
  ]

  // Auto-scroll when dropdowns open/close
  useEffect(() => {
    if (servicesMenuOpen && servicesDropdownRef.current) {
      setTimeout(() => {
        servicesDropdownRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest' 
        })
      }, 100)
    }
  }, [servicesMenuOpen])

  useEffect(() => {
    if (solutionsMenuOpen && solutionsDropdownRef.current) {
      setTimeout(() => {
        solutionsDropdownRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest' 
        })
      }, 100)
    }
  }, [solutionsMenuOpen])

  return (
    <footer className="relative font-sans bg-gray-100 text-gray-800">
      <div className="w-full px-6 lg:px-20">
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

        {/* Disclaimer Section */}
        <div className="py-4 border-b border-gray-200">
          <button
            onClick={() => setDisclaimerOpen(!disclaimerOpen)}
            className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <span className="font-medium">Disclaimer</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${disclaimerOpen ? "rotate-180" : ""}`}
            />
          </button>
          {disclaimerOpen && (
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <p>
                The information provided on this website is for general informational purposes only. While we strive to
                keep the information up to date and correct, we make no representations or warranties of any kind, express
                or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or
                the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </div>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left: Navigation Links */}
          <div className="md:col-span-3 space-y-6">
            <nav className="flex flex-wrap gap-x-8 md:gap-x-12 lg:gap-x-20 gap-y-4 text-base md:text-lg relative">
              {navigationLinks.map((link) => {
                if (link.name === "Services:") {
                  return (
                    <div key={link.name} className="relative inline-block">
                      <button
                        type="button"
                        onClick={() => {
                          setServicesMenuOpen((v) => !v)
                          if (!servicesMenuOpen) {
                            setSolutionsMenuOpen(false)
                          }
                        }}
                        className="text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                        aria-expanded={servicesMenuOpen}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${servicesMenuOpen ? "rotate-180" : ""}`} />
                      </button>
                      {servicesMenuOpen && (
                        <div 
                          ref={servicesDropdownRef}
                          className="absolute top-full left-0 mt-2 p-4 md:p-5 rounded-xl border-2 border-gray-300 bg-white shadow-lg w-56 md:w-64 lg:w-72 transition-all duration-300 ease-in-out z-10"
                        >
                          <h5 className="text-sm uppercase tracking-wide text-gray-700 font-bold mb-4 pb-2 border-b border-gray-200">Services</h5>
                          <ul className="space-y-2.5 text-sm">
                            {services.map((item) => (
                              <li key={item.name}>
                                <Link 
                                  href={item.href} 
                                  className="text-gray-700 hover:text-[#25C3E5] transition-colors duration-200 block py-1 hover:pl-2 rounded-md"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                }
                if (link.name === "Solutions:") {
                  return (
                    <div key={link.name} className="relative inline-block">
                      <button
                        type="button"
                        onClick={() => {
                          setSolutionsMenuOpen((v) => !v)
                          if (!solutionsMenuOpen) {
                            setServicesMenuOpen(false)
                          }
                        }}
                        className="text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                        aria-expanded={solutionsMenuOpen}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${solutionsMenuOpen ? "rotate-180" : ""}`} />
                      </button>
                      {solutionsMenuOpen && (
                        <div 
                          ref={solutionsDropdownRef}
                          className="absolute top-full left-0 mt-2 p-4 md:p-5 rounded-xl border-2 border-gray-300 bg-white shadow-lg w-56 md:w-64 lg:w-72 transition-all duration-300 ease-in-out z-10"
                        >
                          <h5 className="text-sm uppercase tracking-wide text-gray-700 font-bold mb-4 pb-2 border-b border-gray-200">Solutions</h5>
                          <ul className="space-y-2.5 text-sm">
                            {solutions.map((item) => (
                              <li key={item.name}>
                                <Link 
                                  href={item.href} 
                                  className="text-gray-700 hover:text-[#25C3E5] transition-colors duration-200 block py-1 hover:pl-2 rounded-md"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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
            </nav>

            {/* Removed separate Services/Solutions blocks in favor of single dropdown above */}

            {/* Contact Information - Three Columns */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-3 text-sm md:text-base transition-all duration-300 ${servicesMenuOpen || solutionsMenuOpen ? 'mt-64 md:mt-64' : 'mt-0'}`}>
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
            <div className="flex items-center gap-4 pt-4 flex-wrap relative">
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
              <span className="text-gray-400">|</span>
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                privacy-policy
              </Link>
              <Link
                href="/refund-cancellation-policy"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
               refund-cancellation-policy
              </Link>
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
  )
}
