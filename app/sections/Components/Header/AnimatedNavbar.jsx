"use client"
import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { X, Info, Lightbulb, Building2, GraduationCap, Bot, BookOpen, Mail } from "lucide-react"
import Image from "next/image"
import { FloatingNav } from "@/components/ui/floating-navbar"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ServicesOverlay from "./ServicesOverlay"
import SolutionsOverlay from "./SolutionsOverlay"
import ResourcesOverlay from "./ResourcesOverlay"

gsap.registerPlugin(ScrollTrigger)

// Navigation items for FloatingNav
const navItems = [
  {
    name: "About",
    link: "/about-us",
    icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    link: "#services",
    icon: <Lightbulb className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Solutions",
    link: "#solutions",
    icon: <Lightbulb className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  // {
  //   name: "Industries",
  //   link: "/commingsoon", 
  //   icon: <Building2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
  // },
  // {
  //   name: "Expertise",
  //   link: "/commingsoon",
  //   icon: <GraduationCap className="h-4 w-4 text-neutral-500 dark:text-white" />,
  // },
  {
    name: "AI",
    link: "/ai-services",
    icon: <Bot className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Resources",
    link: "#resources",
    icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact-us",
    icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
]

const AnimatedNavbar = ({
  items = [
    {
      name: "About",
      href: "/about-us",
      IconComponent: Info,
    },
    {
      name: "Services",
      href: "#services",
      IconComponent: Lightbulb,
    },
    {
      name: "Solutions",
      href: "#solutions",
      IconComponent: Lightbulb,
    },
    // {
    //     name: "Industries",
    //   href: "/commingsoon",
    //   IconComponent: Building2,
    // },
    // {
    //   name: "Expertise",
    //   href: "/commingsoon",
    //   IconComponent: GraduationCap,
    // },
    {
      name: "AI",
      href: "/ai-services",
      IconComponent: Bot,
    },
    {
      name: "Resources",
      href: "#resources",
      IconComponent: BookOpen,
    },
    {
      name: "Contact",
      href: "/contact-us",
      IconComponent: Mail,
    },
  ],
  logo = "/logo/normallogo.png",
}) => {
  const navRef = useRef(null)
  const hamburgerRef = useRef(null)
  const fullscreenMenuRef = useRef(null)
  const menuItemsRef = useRef(null)
  const heroLogoRef = useRef(null)
  const heroMenuRef = useRef(null)
  const letsTalkRef = useRef(null)
  const customCursorRef = useRef(null)
  const cursorIconRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY < (window.innerHeight * 0.8)
    }
    return true
  })
  const heroVisibleRef = useRef(isHeroVisible)
  const [currentHoveredIcon, setCurrentHoveredIcon] = useState(null)
  const [showServicesOverlay, setShowServicesOverlay] = useState(false)
  const [showSolutionsOverlay, setShowSolutionsOverlay] = useState(false)
  const [showResourcesOverlay, setShowResourcesOverlay] = useState(false)

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

    const handleScroll = () => {
      const heroVisible = window.scrollY < (window.innerHeight * 0.8)

      if (heroVisible !== heroVisibleRef.current) {
        heroVisibleRef.current = heroVisible
        setIsHeroVisible(heroVisible)

        const heroLogo = heroLogoRef.current
        const heroMenu = heroMenuRef.current
        const letsTalk = letsTalkRef.current

        if (heroLogo) {
          gsap.to(heroLogo, {
            opacity: heroVisible ? 1 : 0,
            y: heroVisible ? 0 : -20,
            duration: 0.3,
            ease: "power2.out",
          })
        }

        if (heroMenu) {
          gsap.to(heroMenu, {
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
    const heroMenu = heroMenuRef.current
    const letsTalk = letsTalkRef.current

    if (!navbar || !hamburger || !fullscreenMenu || !menuItems) return

    // Initial animations for hero elements
    if (isMobile) {
      // Hide mobile navbar initially
      gsap.set(navbar, { opacity: 0, y: -20 })
    } else {
      gsap.fromTo(navbar, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
    }

    // Check if we're initially in hero section
    const initiallyInHero = window.scrollY < (window.innerHeight * 0.8)
    heroVisibleRef.current = initiallyInHero

    // Animate hero elements only if in hero section
    if (heroLogo && initiallyInHero) {
      gsap.fromTo(heroLogo, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" })
    } else if (heroLogo) {
      gsap.set(heroLogo, { opacity: 0 })
    }

    if (heroMenu && initiallyInHero) {
      gsap.fromTo(heroMenu, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" })
    } else if (heroMenu) {
      gsap.set(heroMenu, { opacity: 0 })
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
        const heroVisible = self.scroll() < (window.innerHeight * 0.8)

        // Handle hero elements visibility
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

          if (heroMenu) {
            gsap.to(heroMenu, {
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

        // Handle mobile navbar transformation
        if (isMobile && scrolled !== isScrolled) {
          setIsScrolled(scrolled)

          if (scrolled) {
            // Show mobile navbar with burger icon
            gsap.to(navbar, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            })
          } else {
            // Hide mobile navbar when at top
            gsap.to(navbar, {
              opacity: 0,
              y: -20,
              duration: 0.6,
              ease: "power3.out",
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
      if (navbarScrollTrigger) {
        navbarScrollTrigger.kill()
      }
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isScrolled, isMenuOpen, isMobile])

  const toggleMenu = () => {
    const fullscreenMenu = fullscreenMenuRef.current
    const menuItems = menuItemsRef.current
    const hamburger = hamburgerRef.current
    const cursor = customCursorRef.current
    const heroLogo = heroLogoRef.current
    const heroMenu = heroMenuRef.current
    const letsTalk = letsTalkRef.current

    if (!fullscreenMenu || !menuItems || !hamburger) return

    if (!isMenuOpen) {
      setIsMenuOpen(true)
      document.body.style.overflow = "hidden"

      // Show custom cursor
      if (cursor) {
        gsap.set(cursor, { display: "block" })
        gsap.fromTo(cursor, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" })
      }

      // Hide hero elements
      if (heroLogo) {
        gsap.to(heroLogo, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      if (heroMenu) {
        gsap.to(heroMenu, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      if (letsTalk) {
        gsap.to(letsTalk, {
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

      // Animate menu items with staggered entrance
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

      // Show hero elements again (only if in hero section)
      if (heroLogo && heroVisibleRef.current) {
        gsap.to(heroLogo, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: 0.2,
          ease: "power2.out",
        })
      }

      if (heroMenu && heroVisibleRef.current) {
        gsap.to(heroMenu, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: 0.2,
          ease: "power2.out",
        })
      }

      if (letsTalk && heroVisibleRef.current) {
        gsap.to(letsTalk, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: 0.2,
          ease: "power2.out",
        })
      }

      // Animate menu items out
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

  const handleServicesClick = (e) => {
    e.preventDefault()
    setShowServicesOverlay(true)
  }

  const handleSolutionsClick = (e) => {
    e.preventDefault()
    setShowSolutionsOverlay(true)
  }

  const handleResourcesClick = (e) => {
    e.preventDefault()
    setShowResourcesOverlay(true)
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

      {/* Resources Overlay */}
      {showResourcesOverlay && (
        <ResourcesOverlay onClose={() => setShowResourcesOverlay(false)} />
      )}

      {/* FloatingNav for Desktop - Shows in non-hero sections */}
      <div className="hidden md:block">
        <FloatingNav
          navItems={navItems}
          logo={logo}
          className=""
          onServicesClick={() => setShowServicesOverlay(true)}
          onSolutionsClick={() => setShowSolutionsOverlay(true)}
          onResourcesClick={() => setShowResourcesOverlay(true)}
        />
      </div>

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
            {currentHoveredIcon === "Services" && <Lightbulb size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "Solutions" && <Lightbulb size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "Industries" && <Building2 size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "Expertise" && <GraduationCap size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "AI" && <Bot size={32} color="#ffffff" strokeWidth={2} />}
            {currentHoveredIcon === "Resources" && <BookOpen size={32} color="#ffffff" strokeWidth={2} />}
          </div>
        </div>
      </div>

      {/* Hero Logo - Top Left - Separate Element (Desktop Only) */}
      {!isMobile && (
        <div ref={heroLogoRef} className="fixed top-12 left-40 z-50 transition-all duration-300">
          <Link href="/" className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Logo"
              width={160}
              height={160}
              className="object-contain drop-shadow-2xl"
            />
          </Link>
        </div>
      )}

      {/* Hero Menu Items - Top Center - Separate Element (Desktop Only) */}
      {!isMobile && (
        <div ref={heroMenuRef} className="hidden md:block fixed top-12 z-50 transition-all duration-300" style={{ left: "50%", transform: "translateX(-50%)" }}>
          <div
            className="flex items-center gap-8 py-4 px-8 rounded-full"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
            }}
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-[#2acbec] transition-all duration-300 flex items-center gap-2 text-base font-semibold whitespace-nowrap relative group px-3 py-2 rounded-full"
                onClick={(e) => {
                  e.preventDefault()
                  if (item.name === "Services") {
                    handleServicesClick(e)
                  } else if (item.name === "Solutions") {
                    handleSolutionsClick(e)
                  } else if (item.name === "Resources") {
                    handleResourcesClick(e)
                  } else if (item.href.startsWith('/')) {
                    // Handle page navigation for routes like /about
                    window.location.href = item.href
                  } else {
                    // Handle anchor links like #services
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }
                }}
              >
                {item.name}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#2acbec] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Let's Talk Button - Top Right - Separate Element (Desktop Only) */}
      {!isMobile && (
        <div ref={letsTalkRef} className="fixed top-12 right-50 z-30 transition-all duration-300">
          <a
            href="https://cal.com/webnox-digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-[#2acbec] hover:bg-[#1fb8d9] text-white font-bold p-4 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-xl cursor-pointer"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              Book a Meeting
            </button>
          </a>
        </div>
      )}

      {/* Mobile Logo - Top Left - Only on Mobile */}
      {isMobile && (
        <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50 transition-all duration-300">
          <Link href="/" className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Logo"
              width={90}
              height={90}
              className="object-contain drop-shadow-2xl w-16 h-16 sm:w-20 sm:h-20"
            />
          </Link>
        </div>
      )}

      {/* Mobile Burger Menu - Top Right - Only on Mobile */}
      {isMobile && (
        <div
          ref={hamburgerRef}
          className="fixed top-4 right-4 md:top-6 md:right-6 z-50 cursor-pointer p-2 -m-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <div className="hamburger-line-1 w-6 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
            <div className="hamburger-line-2 w-6 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
            <div className="hamburger-line-3 w-6 h-0.5 bg-gray-800 rounded-full transform origin-center transition-all duration-300"></div>
          </div>
        </div>
      )}

      {/* Mobile Scroll Navbar - Only shows on scroll for mobile (remove hamburger from here) */}
      {/* <nav
        ref={navRef}
        className="fixed top-6 z-40 transition-all duration-300 md:hidden"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "50px",
          padding: "1rem",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        Empty for now, could add scroll nav items if needed
      </nav> */}

      {/* Fullscreen Menu */}
      <div
        ref={fullscreenMenuRef}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl hidden overflow-hidden"
        onClick={(e) => {
          if (e.target === fullscreenMenuRef.current) {
            toggleMenu()
          }
        }}
      >
        {/* Close X Icon */}
        <button
          className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[#2acbec] transition-colors duration-300 z-50 group cursor-pointer p-2 -m-2"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <X size={32} strokeWidth={2} className="md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 border-2 border-white/20 rounded-full group-hover:border-[#2acbec]/50 transition-colors duration-300"></div>
          </div>
        </button>

        <div
          ref={menuItemsRef}
          className="absolute inset-0 overflow-hidden overflow-y-auto"
          style={{
            paddingTop: "12vh",
            paddingBottom: "8vh",
            paddingLeft: "4vw",
            paddingRight: "4vw",
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
                    fontSize: `clamp(1.75rem, ${Math.min(8, 80 / items.length)}vw, ${Math.min(4, 40 / items.length)}rem)`,
                    lineHeight: "1.3",
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

                    const menuItem = e.currentTarget
                    gsap.to(menuItem, {
                      scale: 0.95,
                      duration: 0.1,
                      ease: "power2.out",
                      yoyo: true,
                      repeat: 1,
                    })

                    setTimeout(() => {
                      toggleMenu()
                      if (item.name === "Services") {
                        setShowServicesOverlay(true)
                      } else if (item.name === "Solutions") {
                        setShowSolutionsOverlay(true)
                      } else if (item.name === "Resources") {
                        setShowResourcesOverlay(true)
                      } else if (item.href.startsWith('/')) {
                        // Handle page navigation for routes like /about
                        window.location.href = item.href
                      } else {
                        // Handle anchor links like #services
                        const element = document.querySelector(item.href)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
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
      </div>
    </>
  )
}

export default AnimatedNavbar
