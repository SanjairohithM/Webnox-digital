"use client"
import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Menu, X, Home, User, Briefcase, Mail, Settings } from "lucide-react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const AnimatedNavbar = ({
  items = [
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Solutions", href: "#solutions", icon: <Briefcase size={20} /> },
    { name: "Industries", href: "#industries", icon: <Settings size={20} /> },
    { name: "Expertise", href: "#expertise", icon: <Mail size={20} /> },
    { name: "AI", href: "#ai", icon: <Settings size={20} /> },
    { name: "Resources", href: "#resources", icon: <Settings size={20} /> }
  ],
  logo = "/webnox-logo.png",
  brandName = "Webnox"
}) => {
  const navRef = useRef(null)
  const hamburgerRef = useRef(null)
  const fullscreenMenuRef = useRef(null)
  const menuItemsRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const navbar = navRef.current
    const hamburger = hamburgerRef.current
    const fullscreenMenu = fullscreenMenuRef.current
    const menuItems = menuItemsRef.current
    if (!navbar || !hamburger || !fullscreenMenu || !menuItems) return

    // Initial navbar animation
    gsap.fromTo(navbar, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )

    // Scroll trigger for navbar transformation
    const navbarScrollTrigger = ScrollTrigger.create({
      trigger: "body",
      start: "top -50",
      end: "bottom bottom",
      onUpdate: (self) => {
        const scrolled = self.scroll() > 50
        
        if (scrolled !== isScrolled) {
          setIsScrolled(scrolled)
          
          if (scrolled) {
            // Transform to hamburger
            gsap.to(navbar, {
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              padding: "0",
              duration: 0.6,
              ease: "power3.out"
            })
            
            gsap.to(navbar.querySelector(".nav-content"), {
              opacity: 0,
              scale: 0.8,
              duration: 0.3,
              ease: "power2.out"
            })
            
            gsap.to(hamburger, {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              delay: 0.2,
              ease: "back.out(1.7)"
            })
          } else {
            // Transform back to full navbar
            gsap.to(navbar, {
              width: "auto",
              height: "auto",
              borderRadius: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              padding: "1rem 2rem",
              duration: 0.6,
              ease: "power3.out"
            })
            
            gsap.to(hamburger, {
              opacity: 0,
              scale: 0.8,
              duration: 0.3,
              ease: "power2.out"
            })
            
            gsap.to(navbar.querySelector(".nav-content"), {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              delay: 0.2,
              ease: "back.out(1.7)"
            })
          }
        }
      }
    })

    return () => {
      // Only kill the navbar's ScrollTrigger, not all ScrollTriggers
      if (navbarScrollTrigger) {
        navbarScrollTrigger.kill()
      }
    }
  }, [isScrolled])

  const toggleMenu = () => {
    const fullscreenMenu = fullscreenMenuRef.current
    const menuItems = menuItemsRef.current
    const hamburger = hamburgerRef.current
    if (!fullscreenMenu || !menuItems || !hamburger) return

    if (!isMenuOpen) {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
      
      // Animate hamburger to X
      gsap.to(hamburger.querySelector(".hamburger-line-1"), {
        rotation: 45,
        y: 6,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(hamburger.querySelector(".hamburger-line-2"), {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out"
      })
      gsap.to(hamburger.querySelector(".hamburger-line-3"), {
        rotation: -45,
        y: -6,
        duration: 0.3,
        ease: "power2.out"
      })

      // Show fullscreen menu
      gsap.set(fullscreenMenu, { display: "flex" })
      gsap.fromTo(fullscreenMenu,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      )

      // Animate menu items
      gsap.fromTo(fullscreenMenu.querySelectorAll(".menu-item"),
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          delay: 0.2,
          ease: "power3.out" 
        }
      )
    } else {
      document.body.style.overflow = 'auto'
      
      // Animate menu items out
      gsap.to(fullscreenMenu.querySelectorAll(".menu-item"), {
        y: -50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in"
      })

      // Hide fullscreen menu
      gsap.to(fullscreenMenu, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        delay: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(fullscreenMenu, { display: "none" })
          setIsMenuOpen(false)
        }
      })

      // Animate X back to hamburger
      gsap.to(hamburger.querySelector(".hamburger-line-1"), {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(hamburger.querySelector(".hamburger-line-2"), {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power2.out"
      })
      gsap.to(hamburger.querySelector(".hamburger-line-3"), {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }

  return (
    <>
      {/* Main Navbar */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "12px",
          padding: "1rem 2rem",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
        }}
      >
        {/* Full Navbar Content */}
        <div className="nav-content flex items-center gap-8">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Logo" width={32} height={32} className="object-contain" />
            <span className="text-gray-800 font-semibold text-lg">{brandName}</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-[#2acbec] transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Hamburger Menu (Hidden Initially) */}
        <div
          ref={hamburgerRef}
          className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 scale-75"
          onClick={toggleMenu}
        >
          <div className="flex flex-col gap-1">
            <div className="hamburger-line-1 w-5 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
            <div className="hamburger-line-2 w-5 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
            <div className="hamburger-line-3 w-5 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        ref={fullscreenMenuRef}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl hidden items-center justify-center"
      >
        <div ref={menuItemsRef} className="text-center">
          <div className="mb-12">
            <Image src={logo} alt="Logo" width={64} height={64} className="mx-auto mb-4" />
            <h2 className="text-white text-2xl font-bold">{brandName}</h2>
          </div>
          
          <div className="space-y-8">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="menu-item block text-white text-4xl md:text-6xl font-bold hover:text-[#2acbec] transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  toggleMenu()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl md:text-4xl">{item.icon}</span>
                  {item.name}
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-white/60 text-sm">
            <p>Click anywhere outside to close</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimatedNavbar 