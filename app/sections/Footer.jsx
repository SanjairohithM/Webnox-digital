"use client"

import React, { useRef, useEffect } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Robot from "@/Three/Models/Robot"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const quickLinks = ["About", "Solutions", "Industries", "Expertise", "Resources"]
const designServices = [
  "Branding",
  "Web Development",
  "Staff Augmentation",
  "Mobile App Development",
  "SaaS Development",
]
const products = [
  "Billing Software",
  "Field Service Management",
  "Multichannel Development",
  "Job Portal Development",
  "CRM Software Development",
]

export default function Footer() {
  const robotRef = useRef(null)

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024
    if (robotRef.current) {
      // entrance
      gsap.to(robotRef.current, {
        scale: 1,
        duration: isDesktop ? 1.6 : 1,
        ease: isDesktop ? "back.out(1.4)" : "power2.out",
        delay: 0.3,
      })
      // float
      gsap.to(robotRef.current, {
        y: "+=12",
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })
      // gentle rotate
      gsap.to(robotRef.current, {
        rotation: "+=3",
        duration: 6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <footer
      className="relative font-sans text-gray-800 bg-gradient-to-b from-white via-[#e0f8ff] to-[#e8e0ff] overflow-hidden pt-20 "
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 ">
        {/* Top: Robot centered */}
        <div className="flex items-center justify-center mb-10">
          <div className="relative -left-4 -top-2 md:-left-68 md:-top-46 z-[80]">
            <div
              ref={robotRef}
              className="transform-gpu w-[90px] h-[90px] md:w-[140px] md:h-[140px] z-[80]"
              style={{ transform: "scale(0)" }}
            >
              <Robot />
            </div>
          </div>
        </div>

        {/* Bottom: 4 columns of links/info under the robot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start mt-50">
          {/* Quick Link */}
          <div>
            <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Quick Link</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Design Service */}
          <div>
            <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Design Service</h4>
            <ul className="space-y-2 text-sm">
              {designServices.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {products.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-3 text-sm">
            <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Address</h4>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-gray-500" />
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gray-500" />
              <a href="tel:+919786557739" className="hover:text-black transition-colors">
                +91 97865 57739
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gray-500" />
              <a href="mailto:info@webnoxdigital.com" className="hover:text-black transition-colors">
                info@webnoxdigital.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-1 text-gray-600">
              <a href="#" aria-label="Facebook" className="hover:text-black"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-black"><Instagram size={16} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-black"><Twitter size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-black"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>

        {/* Bottom tiny copyright */}
        <div className="mt-12 border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Webnox Digital</p>
        </div>
      </div>
    </footer>
  )
}
