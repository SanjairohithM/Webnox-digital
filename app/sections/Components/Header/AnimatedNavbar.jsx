"use client"
import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { X, Info, Lightbulb, Building2, GraduationCap, Bot, BookOpen } from "lucide-react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const AnimatedNavbar = ({
  items = [
    {
      name: "About",
      href: "#about",
      IconComponent: Info,
    },
    {
      name: "Solutions",
      href: "#solutions",
      IconComponent: Lightbulb,
    },
    {
      name: "Industries",
      href: "#industries",
      IconComponent: Building2,
    },
    {
      name: "Expertise",
      href: "#expertise",
      IconComponent: GraduationCap,
    },
    {
      name: "AI",
      href: "#ai",
      IconComponent: Bot,
    },
    {
      name: "Resources",
      href: "#resources",
      IconComponent: BookOpen,
    },
  ],
  logo = "/webnox-logo.png",
}) => {
  const navRef = useRef(null)
  const hamburgerRef = useRef(null)
  const fullscreenMenuRef = useRef(null)
  const menuItemsRef = useRef(null)
  const heroLogoRef = useRef(null)
  const letsTalkRef = useRef(null)
  const customCursorRef = useRef(null)
  const cursorIconRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(() => {
    // Check initial hero visibility on mount - only show in first screen area
    if (typeof window !== "undefined") {
      return window.scrollY < (window.innerHeight * 0.8)
    }
    return true
  })
  const heroVisibleRef = useRef(isHeroVisible)
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Sync ref with state on mount and add fallback scroll listener
  useEffect(() => {
    heroVisibleRef.current = isHeroVisible
    
    // Fallback scroll listener to ensure visibility detection always works
    const handleScroll = () => {
      const heroVisible = window.scrollY < (window.innerHeight * 0.8)
      
      if (heroVisible !== heroVisibleRef.current) {
        heroVisibleRef.current = heroVisible
        setIsHeroVisible(heroVisible)
        
        const heroLogo = heroLogoRef.current
        const letsTalk = letsTalkRef.current
        
        if (heroLogo) {
          gsap.to(heroLogo, {
            opacity: heroVisible ? 1 : 0,
            y: heroVisible ? 0 : -20,
            duration: 0.3,
            ease: "power2.out",
          })
        }
        
        if (letsTalk) {
          gsap.to(letsTalk, {
            opacity: heroVisible ? 1 : 0,
            y: heroVisible ? 0 : -20,
            duration: 0.3,
            ease: "power2.out",
          })
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const [currentHoveredIcon, setCurrentHoveredIcon] = useState(null)

  // Custom cursor movement
  useEffect(() => {
    const cursor = customCursorRef.current
    if (!cursor) return

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      })
    }

    document.addEventListener("mousemove", moveCursor)
    return () => document.removeEventListener("mousemove", moveCursor)
  }, [])

  useEffect(() => {
    const navbar = navRef.current
    const hamburger = hamburgerRef.current
    const fullscreenMenu = fullscreenMenuRef.current
    const menuItems = menuItemsRef.current
    const heroLogo = heroLogoRef.current
    const letsTalk = letsTalkRef.current
    if (!navbar || !hamburger || !fullscreenMenu || !menuItems) return

    // Initial animations
    gsap.fromTo(navbar, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

    // Check if we're initially in hero section - only first screen area
    const initiallyInHero = window.scrollY < (window.innerHeight * 0.8)
    heroVisibleRef.current = initiallyInHero

    // Animate hero logo and let's talk button only if in hero section
    if (heroLogo && initiallyInHero) {
      gsap.fromTo(heroLogo, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" })
    } else if (heroLogo) {
      gsap.set(heroLogo, { opacity: 0 })
    }

    if (letsTalk && initiallyInHero) {
      gsap.fromTo(letsTalk, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" })
    } else if (letsTalk) {
      gsap.set(letsTalk, { opacity: 0 })
    }

    // Scroll trigger for navbar transformation and hero visibility
    const navbarScrollTrigger = ScrollTrigger.create({
      trigger: "body",
      start: "top -50",
      end: "bottom bottom",
      onUpdate: (self) => {
        const scrolled = self.scroll() > 50
        // More precise hero detection - only show in the first/hero section
        const heroVisible = self.scroll() < (window.innerHeight * 0.8)

        // Handle hero elements visibility - Always update, don't rely on state comparison
        if (heroVisible !== heroVisibleRef.current) {
          heroVisibleRef.current = heroVisible
          setIsHeroVisible(heroVisible)

          if (heroLogo) {
            gsap.to(heroLogo, {
              opacity: heroVisible ? 1 : 0,
              y: heroVisible ? 0 : -20,
              duration: 0.3,
              ease: "power2.out",
            })
          }

          if (letsTalk) {
            gsap.to(letsTalk, {
              opacity: heroVisible ? 1 : 0,
              y: heroVisible ? 0 : -20,
              duration: 0.3,
              ease: "power2.out",
            })
          }
        }

        // Handle navbar transformation - ONLY for mobile devices
        if (isMobile && scrolled !== isScrolled) {
          setIsScrolled(scrolled)

          if (scrolled) {
            // Transform to hamburger positioned on the right - MOBILE ONLY
            gsap.to(navbar, {
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              padding: "0",
              left: "calc(100% - 100px)", // Position to the right
              transform: "translateX(0)",
              duration: 0.6,
              ease: "power3.out",
            })

            gsap.to(navbar.querySelector(".nav-content"), {
              opacity: 0,
              scale: 0.8,
              duration: 0.3,
              ease: "power2.out",
            })

            gsap.to(hamburger, {
              opacity: 1,
              scale: 1,
              right: "50%",
              transform: "translate(50%, -50%)",
              duration: 0.4,
              delay: 0.2,
              ease: "back.out(1.7)",
            })
          } else {
            // Transform back to full navbar - MOBILE ONLY
            gsap.to(navbar, {
              width: "auto",
              height: "auto",
              borderRadius: "50px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              padding: "1.5rem 3rem",
              left: "calc(50% + 40px)",
              transform: "translateX(-50%)",
              duration: 0.6,
              ease: "power3.out",
            })

            gsap.to(hamburger, {
              opacity: 0,
              scale: 0.8,
              right: "1rem",
              transform: "translateY(-50%)",
              duration: 0.3,
              ease: "power2.out",
            })

            gsap.to(navbar.querySelector(".nav-content"), {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              delay: 0.2,
              ease: "back.out(1.7)",
            })
          }
        }
      },
    })

    // Add ESC key listener to close menu
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        toggleMenu()
      }
    }
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      // Only kill the navbar's ScrollTrigger, not all ScrollTriggers
      if (navbarScrollTrigger) {
        navbarScrollTrigger.kill()
      }
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isScrolled, isMenuOpen, isMobile]) // Added isMobile to dependencies

  const toggleMenu = () => {
    const fullscreenMenu = fullscreenMenuRef.current
    const menuItems = menuItemsRef.current
    const hamburger = hamburgerRef.current
    const cursor = customCursorRef.current
    if (!fullscreenMenu || !menuItems || !hamburger) return

    if (!isMenuOpen) {
      setIsMenuOpen(true)
      document.body.style.overflow = "hidden"

      // Show custom cursor
      if (cursor) {
        gsap.set(cursor, { display: "block" })
        gsap.fromTo(cursor, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" })
      }

      // Hide logo and let's talk button
      if (heroLogoRef.current) {
        gsap.to(heroLogoRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      if (letsTalkRef.current) {
        gsap.to(letsTalkRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      // Animate hamburger to X
      gsap.to(hamburger.querySelector(".hamburger-line-1"), {
        rotation: 45,
        y: 7,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(hamburger.querySelector(".hamburger-line-2"), {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      })
      gsap.to(hamburger.querySelector(".hamburger-line-3"), {
        rotation: -45,
        y: -7,
        duration: 0.3,
        ease: "power2.out",
      })

      // Show fullscreen menu
      gsap.set(fullscreenMenu, { display: "block" })
      gsap.fromTo(
        fullscreenMenu,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      )

      // Animate close X icon
      gsap.fromTo(
        fullscreenMenu.querySelector("button"),
        { opacity: 0, scale: 0.5, rotation: -90 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(1.7)",
        }
      )

      // Animate menu items with advanced staggered entrance
      gsap.fromTo(
        fullscreenMenu.querySelectorAll(".menu-item"),
        {
          x: -150,
          opacity: 0,
          rotationY: -45,
          scale: 0.8,
          filter: "blur(10px)",
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.12,
          delay: 0.4,
          ease: "back.out(1.7)",
        }
      )

      // Animate icons separately with bounce effect (no rotation)
      gsap.fromTo(
        fullscreenMenu.querySelectorAll(".menu-item .icon-container"),
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.8,
          ease: "elastic.out(1, 0.5)",
        }
      )

      // Animate text with typewriter effect
      gsap.fromTo(
        fullscreenMenu.querySelectorAll(".menu-text"),
        {
          opacity: 0,
          x: 50,
          skewX: 15,
        },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.9,
          ease: "power2.out",
        }
      )

      // Animate separator lines with glow effect
      gsap.fromTo(
        fullscreenMenu.querySelectorAll(".separator-line"),
        {
          width: 0,
          opacity: 0,
          boxShadow: "0 0 0px #2acbec",
        },
        {
          width: "60vw",
          opacity: 1,
          boxShadow: "0 0 20px rgba(42, 203, 236, 0.3)",
          duration: 0.8,
          stagger: 0.15,
          delay: 1.2,
          ease: "power2.out",
        }
      )

      // Add continuous floating animation for menu items
      gsap.to(fullscreenMenu.querySelectorAll(".menu-item"), {
        y: "random(-10, 10)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: "random(0, 2)",
      })


    } else {
      document.body.style.overflow = "auto"

      // Hide custom cursor
      if (cursor) {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "back.in(1.7)",
          onComplete: () => gsap.set(cursor, { display: "none" }),
        })
      }

      // Show logo and let's talk button again (only if in hero section)
      if (heroLogoRef.current && heroVisibleRef.current) {
        gsap.to(heroLogoRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: 0.2,
          ease: "power2.out",
        })
      }

      if (letsTalkRef.current && heroVisibleRef.current) {
        gsap.to(letsTalkRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: 0.2,
          ease: "power2.out",
        })
      }

      // Animate menu items out with advanced staggered exit
      gsap.to(fullscreenMenu.querySelectorAll(".menu-item"), {
        x: -200,
        opacity: 0,
        rotationY: 45,
        scale: 0.6,
        filter: "blur(20px)",
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.in",
      })

      // Animate icons out separately (no rotation)
      gsap.to(fullscreenMenu.querySelectorAll(".icon-container"), {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      })

      // Animate text out with skew effect
      gsap.to(fullscreenMenu.querySelectorAll(".menu-text"), {
        opacity: 0,
        x: -100,
        skewX: -20,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      })

      // Kill continuous animations
      gsap.killTweensOf(fullscreenMenu.querySelectorAll(".menu-item"))

      // Animate separator lines out
      gsap.to(fullscreenMenu.querySelectorAll(".separator-line"), {
        width: 0,
        opacity: 0,
        boxShadow: "0 0 0px #2acbec",
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      })

      // Animate close X icon out
      gsap.to(fullscreenMenu.querySelector("button"), {
        opacity: 0,
        scale: 0.5,
        rotation: 90,
        duration: 0.3,
        ease: "power2.in",
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
        },
      })

      // Animate X back to hamburger
      gsap.to(hamburger.querySelector(".hamburger-line-1"), {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(hamburger.querySelector(".hamburger-line-2"), {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power2.out",
      })
      gsap.to(hamburger.querySelector(".hamburger-line-3"), {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  const handleMenuItemHover = (item, isEntering) => {
    const cursor = customCursorRef.current
    const cursorIcon = cursorIconRef.current

    if (isEntering) {
      setCurrentHoveredIcon(item.name)
      if (cursor && cursorIcon) {
        gsap.fromTo(cursorIcon, 
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
          }
        )
      }
    } else {
      setCurrentHoveredIcon(null)
      if (cursor && cursorIcon) {
        gsap.to(cursorIcon, {
          scale: 0.5,
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        })
      }
    }
  }

  const getIconComponent = (itemName) => {
    switch (itemName) {
      case "About":
        return Info
      case "Solutions":
        return Lightbulb
      case "Industries":
        return Building2
      case "Expertise":
        return GraduationCap
      case "AI":
        return Bot
      case "Resources":
        return BookOpen
      default:
        return Info
    }
  }

  return (
    <>
      {/* Custom Cursor - Only shows when hovering menu items */}
      <div
        ref={customCursorRef}
        className="fixed w-16 h-16 pointer-events-none z-[60]"
        style={{
          backgroundColor: "transparent",
          transform: "translate(-50%, -50%)",
          opacity: currentHoveredIcon ? 1 : 0,
          visibility: currentHoveredIcon ? 'visible' : 'hidden',
        }}
      >
        <div ref={cursorIconRef} className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#2acbec]/20 backdrop-blur-sm rounded-full p-3 border border-[#2acbec]/40 shadow-lg">
            {currentHoveredIcon === "About" && <Info size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "Solutions" && <Lightbulb size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "Industries" && <Building2 size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "Expertise" && <GraduationCap size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "AI" && <Bot size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "Resources" && <BookOpen size={32} color="#ffffff" strokeWidth={2} />}
          </div>
        </div>
      </div>

      {/* Hero Logo - Top Left */}
      <div ref={heroLogoRef} className="fixed top-12 left-12 z-50 transition-all duration-300">
        <div className="flex items-center">
          <Image
            src={logo || "/placeholder.svg"}
            alt="Logo"
            width={160}
            height={160}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Let's Talk Button - Top Right */}
      <div ref={letsTalkRef} className="fixed top-12 right-12 z-30 transition-all duration-300">
        <button
          className="bg-[#2acbec] hover:bg-[#1fb8d9] text-white font-bold p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-xl"
          onClick={() => {
            const element = document.querySelector("#contact")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          Let's Talk
        </button>
      </div>

      {/* Main Navbar */}
      <nav
        ref={navRef}
        className="fixed top-6 z-40 transition-all duration-300"
        style={{
          left: "calc(50% + 40px)",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "50px",
          padding: "1.5rem 3rem",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* Full Navbar Content - No Logo */}
        <div className="nav-content flex items-center justify-between w-full">
          <div className="hidden md:flex items-center justify-center gap-10 w-full">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-[#2acbec] transition-all duration-300 flex items-center gap-3 text-base font-semibold whitespace-nowrap relative group px-3 py-2 rounded-full"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {item.name}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#2acbec] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* Mobile Hamburger Menu - Always visible on small screens, positioned right */}
          <div className="md:hidden flex items-center justify-end w-full">
            <div
              className="cursor-pointer p-2"
              onClick={toggleMenu}
            >
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
                <div className="w-6 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
                <div className="w-6 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger Menu (Hidden Initially) - Positioned to the Right - MOBILE ONLY */}
        <div
          ref={hamburgerRef}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-0 scale-75 z-50 md:hidden"
          onClick={toggleMenu}
        >
          <div className="flex flex-col gap-1.5">
            <div className="hamburger-line-1 w-6 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
            <div className="hamburger-line-2 w-6 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
            <div className="hamburger-line-3 w-6 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu - Left Aligned */}
      <div
        ref={fullscreenMenuRef}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl hidden overflow-hidden"
        onClick={(e) => {
          // Close menu if clicking on the background (not on menu items)
          if (e.target === fullscreenMenuRef.current) {
            toggleMenu()
          }
        }}
      >
        {/* Close X Icon */}
        <button
          className="absolute top-8 right-8 text-white hover:text-[#2acbec] transition-colors duration-300 z-50 group cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            <X size={40} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 border-2 border-white/20 rounded-full group-hover:border-[#2acbec]/50 transition-colors duration-300"></div>
          </div>
        </button>

        <div
          ref={menuItemsRef}
          className="absolute inset-0 overflow-hidden"
          style={{
            paddingTop: "8vh",
            paddingBottom: "8vh",
            paddingLeft: "5vw",
            paddingRight: "5vw",
          }}
        >
          <div className="flex flex-col justify-center h-full">
            {items.map((item, index) => (
              <div
                key={index}
                className="menu-item-container"
                style={{ flex: "1 1 0", display: "flex", flexDirection: "column", justifyContent: "center" }}
              >
                <a
                  href={item.href}
                  className="menu-item block text-white font-bold hover:text-[#2acbec] transition-colors duration-500 group relative overflow-hidden cursor-none"
                  style={{
                    fontSize: `clamp(2.5rem, ${Math.min(12, 100 / items.length)}vw, ${Math.min(6, 50 / items.length)}rem)`,
                    lineHeight: "1.2",
                  }}
                  onMouseEnter={(e) => {
                    handleMenuItemHover(item, true)

                    const menuItem = e.currentTarget
                    const text = menuItem.querySelector(".menu-text")

                    gsap.to(menuItem, {
                      scale: 1.05,
                      x: 20,
                      duration: 0.3,
                      ease: "power2.out",
                    })

                    gsap.to(text, {
                      x: 10,
                      letterSpacing: "0.05em",
                      duration: 0.3,
                      ease: "power2.out",
                    })
                  }}
                  onMouseLeave={(e) => {
                    handleMenuItemHover(item, false)

                    const menuItem = e.currentTarget
                    const text = menuItem.querySelector(".menu-text")

                    gsap.to(menuItem, {
                      scale: 1,
                      x: 0,
                      duration: 0.3,
                      ease: "power2.out",
                    })

                    gsap.to(text, {
                      x: 0,
                      letterSpacing: "0em",
                      duration: 0.3,
                      ease: "power2.out",
                    })
                  }}
                  onClick={(e) => {
                    e.preventDefault()

                    // Click animation
                    const item = e.currentTarget
                    gsap.to(item, {
                      scale: 0.95,
                      duration: 0.1,
                      ease: "power2.out",
                      yoyo: true,
                      repeat: 1,
                    })

                    setTimeout(() => {
                      toggleMenu()
                      const element = document.querySelector(item.href)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }, 200)
                  }}
                >
                  <div className="flex items-center relative z-10">
                    <span className="menu-text relative cursor-none">
                      {item.name}
                      <div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2acbec] group-hover:w-full transition-all duration-500"
                      ></div>
                    </span>
                  </div>
                </a>

                {/* Separator line between items */}
                {index < items.length - 1 && (
                  <div
                    className="separator-line bg-white/20 self-center"
                    style={{
                      width: "0",
                      height: "1px",
                      marginTop: `${Math.max(1, 8 / items.length)}vh`,
                      marginBottom: `${Math.max(1, 8 / items.length)}vh`,
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Close instruction */}
        <div className="absolute bottom-6 left-6 text-white/60" style={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}>
          {/* <p>Press ESC or click outside to close</p> */}
        </div>
      </div>
    </>
  )
}

export default AnimatedNavbar
