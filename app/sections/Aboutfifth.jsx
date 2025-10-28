"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const statsData = [
  {
    id: 1,
    number: "500+",
    label: "Projects Delivered"
  },
  {
    id: 2,
    number: "14+",
    label: "Years of Industry Experience"
  },
  {
    id: 3,
    number: "98%",
    label: "Client Retention Rate"
  },
  {
    id: 4,
    number: "15+",
    label: "Industries Served"
    
  },
  {
    id: 5,
    number: "100%",
    label: "Transparent Communication & Reporting"
    
  }
]

export default function AboutFifth() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Set initial states
        gsap.set([titleRef.current], {
          opacity: 0,
          y: 50
        })

        gsap.set(".stat-card", {
          opacity: 0,
          y: 100,
          scale: 0.9
        })

        // Header animation
        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })

        headerTl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })

        // Stats animation with stagger
        gsap.to(".stat-card", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        })

        // Hover animations for stat cards
        document.querySelectorAll(".stat-card").forEach((card) => {
          const number = card.querySelector(".stat-number")
          const label = card.querySelector(".stat-label")

          card.addEventListener("mouseenter", () => {
            gsap.to(card, { 
              scale: 1.05, 
              duration: 0.3, 
              ease: "power2.out" 
            })
            gsap.to(number, { 
              scale: 1.1, 
              duration: 0.3, 
              ease: "power2.out" 
            })
            gsap.to(label, { 
              y: -5, 
              duration: 0.3, 
              ease: "power2.out" 
            })
          })

          card.addEventListener("mouseleave", () => {
            gsap.to(card, { 
              scale: 1, 
              duration: 0.3, 
              ease: "power2.out" 
            })
            gsap.to(number, { 
              scale: 1, 
              duration: 0.3, 
              ease: "power2.out" 
            })
            gsap.to(label, { 
              y: 0, 
              duration: 0.3, 
              ease: "power2.out" 
            })
          })
        })
      } else {
        // Simple fade animations for mobile
        gsap.set([titleRef.current, ".stat-card"], {
          opacity: 0,
          y: 30
        })

        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })

        headerTl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        })

        gsap.to(".stat-card", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white py-20 px-6 lg:px-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-gray-800 leading-tight opacity-0">
          Why Brands Trust <span className="text-[#00B9FF]">Webnox Digital</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="stat-card group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {stat.number && (
                <div className="stat-number text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00B9FF] mb-3 transition-transform duration-300">
                  {stat.number}
                </div>
              )}
              <h3 className="stat-label text-lg sm:text-xl font-bold text-gray-800 mb-3 transition-transform duration-300">
                {stat.label}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the Webnox Digital difference?
          </p>
          <button className="bg-[#00B9FF] hover:bg-[#0099cc] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}
