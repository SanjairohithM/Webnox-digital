"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [

  {
    id: 1,
    title: "Your Sales Follow-Ups",
    description: "Leads won't slip through the cracks again.",
    icon: "/images/cons5.png",
    hoverIcon: "/images/cons9.png",
    hoverImage: "/images/aiautolast4.webp",
  },
  {
    id: 2,
    title: "Customer Support Tickets",
    description: "Smart bots and triggers that give answers instantly — and keep your team free for real issues.",
    icon: "/images/cons2.png",
    hoverIcon: "/images/cons8.png",
    hoverImage: "/images/aiautolast3.webp",
  },
  {
    id: 3,
    title: "Task Reminders & Approvals",
    description: "Automate HR, finance, and operations approvals with zero micromanagement.",
    icon: "/images/cons3.png",
    hoverIcon: "/images/cons11.png",
    hoverImage: "/images/aiautolast2.webp",
  },
  {
    id: 4,
    title: "E-commerce Workflows",
    description: "Orders, inventory updates, and returns are streamlined and synced.",
    icon: "/images/cons4.png",
    hoverIcon: "/images/cons7.png",
    hoverImage: "/images/aiautolast1.webp",
  },
  {
    id: 5,
    title: "AI-Powered Decisions",
    description:
      "We don't just automate, we make it intelligent. Think smart suggestions, predictions, and adaptive triggers.",
    icon: "/images/cons1.png",
    hoverIcon: "/images/cons10.png",
    hoverImage: "/images/aiautolast5.webp",
  },
 
]

export default function AutomationServicesSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const cardsRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  useEffect(() => {
    // Initialize cardsRef as an empty array
    if (!cardsRef.current) {
      cardsRef.current = []
    }

    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        // Filter out undefined refs before setting
        const desktopElements = [titleRef.current, descriptionRef.current, buttonRef.current].filter(Boolean)
        const desktopCards = cardsRef.current ? cardsRef.current.filter(Boolean) : []
        
        gsap.set(desktopElements, {
          opacity: 0,
          y: 30,
        })

        gsap.set(desktopCards, {
          opacity: 0,
          y: 50,
        })

        // Create scroll-triggered timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })

        // Animate header content
        if (titleRef.current) {
          tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          })
        }
        if (descriptionRef.current) {
          tl.to(
            descriptionRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4",
          )
        }
        if (buttonRef.current) {
          tl.to(
            buttonRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.3",
          )
        }

        // Animate cards with stagger
        if (desktopCards.length > 0) {
          tl.to(
            desktopCards,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.1,
            },
            "-=0.4",
          )
        }
      } else {
        // Simple fade animations for mobile
        // Filter out undefined refs before setting
        const mobileElements = [titleRef.current, descriptionRef.current, buttonRef.current].filter(Boolean)
        const mobileCards = cardsRef.current ? cardsRef.current.filter(Boolean) : []
        
        gsap.set([...mobileElements, ...mobileCards], {
          opacity: 0,
          y: 30,
        })

        // Create scroll-triggered timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })

        // Simple fade-in animations for mobile
        if (titleRef.current) {
          tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          })
        }
        if (descriptionRef.current) {
          tl.to(descriptionRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          }, "-=0.3")
        }
        if (buttonRef.current) {
          tl.to(buttonRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          }, "-=0.3")
        }
        if (mobileCards.length > 0) {
          tl.to(mobileCards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          }, "-=0.3")
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardHover = (cardId, isHovering) => {
    setHoveredCard(isHovering ? cardId : null)
  }

  const handleCardClick = (cardId) => {
    // For mobile devices - toggle the hover state on click
    setHoveredCard(hoveredCard === cardId ? null : cardId)
  }



  return (
    <section ref={sectionRef} className="py-20 lg:py-36 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Services Grid - Custom Layout */}
        <div className="space-y-12">
          {/* First Row - Title + 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Title Section */}
            <div className="lg:col-span-1">
              <h2 ref={titleRef} className="text-2xl lg:text-2xl xl:text-4xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">What We Can </span>
                <span className="text-cyan-500">Automate Together</span>
              </h2>

              {/* <p ref={descriptionRef} className="text-lg text-gray-600 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
              </p> */}

             
            </div>

            {/* First 2 Service Cards */}
            {services.slice(0, 2).map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el && cardsRef.current) {
                    cardsRef.current[index] = el
                  }
                }}
                className="relative group"
                onMouseEnter={() => handleCardHover(service.id, true)}
                onMouseLeave={() => handleCardHover(service.id, false)}
                onClick={() => handleCardClick(service.id)}
              >
                {/* Hover Image */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ease-out ${
                    hoveredCard === service.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  } bottom-full mb-4 lg:mb-6 ${hoveredCard === service.id ? "translate-y-0 rotate-0" : "translate-y-4 rotate-45"}`}
                >
                  <Image
                    src={service.hoverImage}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-24 h-auto sm:w-28 lg:w-30 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Service Card */}
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-[#00B9FF] group cursor-pointer border-2 border-black">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300">
                      <Image 
                        src={service.icon} 
                        alt={service.title} 
                        width={32} 
                        height={32} 
                        className="w-8 h-8 object-contain group-hover:hidden"
                      />
                      <Image 
                        src={service.hoverIcon} 
                        alt={service.title} 
                        width={32} 
                        height={32} 
                        className="w-8 h-8 object-contain hidden group-hover:block"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-2 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-white/80 text-sm transition-colors duration-300 hidden group-hover:block">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(2, 5).map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el && cardsRef.current) {
                    cardsRef.current[index + 2] = el
                  }
                }}
                className="relative group"
                onMouseEnter={() => handleCardHover(service.id, true)}
                onMouseLeave={() => handleCardHover(service.id, false)}
                onClick={() => handleCardClick(service.id)}
              >
                {/* Hover Image */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ease-out ${
                    hoveredCard === service.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  } top-full mt-4 lg:mt-6 ${hoveredCard === service.id ? "translate-y-0 rotate-0" : "-translate-y-4 rotate-45"}`}
                >
                  <Image
                    src={service.hoverImage}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-24 h-auto sm:w-28 lg:w-30 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Service Card */}
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-[#00B9FF] group cursor-pointer border-2 border-black">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300">
                      <Image 
                        src={service.icon} 
                        alt={service.title} 
                        width={32} 
                        height={32} 
                        className="w-8 h-8 object-contain group-hover:hidden"
                      />
                      <Image 
                        src={service.hoverIcon} 
                        alt={service.title} 
                        width={32} 
                        height={32} 
                        className="w-8 h-8 object-contain hidden group-hover:block"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-2 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-white/80 text-sm transition-colors duration-300 hidden group-hover:block">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
