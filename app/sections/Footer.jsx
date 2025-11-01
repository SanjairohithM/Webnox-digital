"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [disclaimerOpen, setDisclaimerOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false)

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
    { name: "IT Consulting", href: "/IT-consulting" },
    { name: "AI Automation", href: "/AI-automation" },
    { name: "Data Analytics", href: "/Data-analytics" },
    { name: "Next-gen Marketing", href: "/Next-gen-marketing" },
    { name: "Emerging Tech", href: "/Emerging-tech" },
    { name: "Outsourcing", href: "/outsourcing" },
    { name: "N8N Workflow", href: "/N8N-automation-workflow" },
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

  return (
    <footer className="relative font-sans bg-gray-100 text-gray-800">
      <div className="w-full px-6 lg:px-20">
        {/* Top Section - Inquiry and Subscription */}
        <div className="py-12 border-b border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-3">
                Do you have any questions?
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Feel free to send us your questions or request a free consultation.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto flex-shrink-0">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25C3E5] text-gray-800 placeholder-gray-400 flex-1 md:flex-initial md:w-64"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
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
            <nav className="flex flex-wrap gap-x-20 gap-y-4 text-lg relative">
              {navigationLinks.map((link) => {
                if (link.name === "Services:") {
                  return (
                    <button
                      key={link.name}
                      type="button"
                      onClick={() => setServicesMenuOpen((v) => !v)}
                      className="text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                      aria-expanded={servicesMenuOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${servicesMenuOpen ? "rotate-180" : ""}`} />
                    </button>
                  )
                }
                if (link.name === "Solutions:") {
                  return (
                    <button
                      key={link.name}
                      type="button"
                      onClick={() => setSolutionsMenuOpen((v) => !v)}
                      className="text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                      aria-expanded={solutionsMenuOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${solutionsMenuOpen ? "rotate-180" : ""}`} />
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
            </nav>

            {servicesMenuOpen && (
              <div className="mt-4 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <h5 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Services</h5>
                <ul className="space-y-2 text-base">
                  {services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {solutionsMenuOpen && (
              <div className="mt-4 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <h5 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Solutions</h5>
                <ul className="space-y-2 text-base">
                  {solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Removed separate Services/Solutions blocks in favor of single dropdown above */}

            {/* Contact Information - Three Columns */}
            <div className="grid grid-cols-3 gap-3 text-base">
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
            <div className="flex items-center gap-4 pt-4">
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
            </div>
          </div>

          {/* Right: Logo and Tagline */}
          <div className="md:col-span-2 flex flex-col items-start md:items-end justify-start md:justify-center">
            <div className="mb-4">
              <Link href="/" className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/webnox-logo.png"
                  alt="Webnox Digital Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="text-base md:text-lg text-gray-600 text-center md:text-right">
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
