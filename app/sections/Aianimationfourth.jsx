"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    id: 1,
    title: "Your Sales Follow-Ups",
    description: "Leads won't slip through the cracks again.",
    position: "top",
  },
  {
    id: 2,
    title: "Customer Support Tickets",
    description: "Smart bots and triggers that give answers instantly — and keep your team free for real issues.",
    position: "top",
  },
  {
    id: 3,
    title: "Task Reminders & Approvals",
    description: "Automate HR, finance, and operations approvals with zero micromanagement.",
    position: "bottom",
  },
  {
    id: 4,
    title: "E-commerce Workflows",
    description: "Orders, inventory updates, and returns are streamlined and synced.",
    position: "bottom",
  },
  {
    id: 5,
    title: "AI-Powered Decisions",
    description:
      "We don't just automate, we make it intelligent. Think smart suggestions, predictions, and adaptive triggers.",
    position: "bottom",
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
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 30,
      })

      gsap.set(cardsRef.current, {
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
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3",
        )

      // Animate cards with stagger
      tl.to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.4",
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardHover = (cardId, isHovering) => {
    setHoveredCard(isHovering ? cardId : null)
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-16 lg:mb-20 max-w-2xl">
          <h2 ref={titleRef} className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">What We Can </span>
            <span className="text-cyan-500">Automate Together</span>
          </h2>

          <p ref={descriptionRef} className="text-lg text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
          </p>

          <div ref={buttonRef}>
            <button
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Switch to AI
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
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
            >
              {/* Hover Image */}
              <div
                className={`absolute inset-x-0 z-10 transition-all duration-500 ease-out ${
                  hoveredCard === service.id ? "opacity-100" : "opacity-0 pointer-events-none"
                } ${
                  service.position === "top"
                    ? `bottom-full mb-4 ${hoveredCard === service.id ? "translate-y-0" : "translate-y-4"}`
                    : `top-full mt-4 ${hoveredCard === service.id ? "translate-y-0" : "-translate-y-4"}`
                }`}
              >
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="w-full h-32 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-cyan-200 hover:-translate-y-1">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
