"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const expertiseData = [
  {
    id: 1,
    title: "Brand Strategy",
    description:
      "We specialize in crafting unique brand experiences that resonate with your audience and drive long-term growth.",
    image: "/images/expertise1.webp",
    href: "/branding-agency"
  },
  {
    id: 2,
    title: "Website Development",
    description: "We build websites that not only look great but also perform exceptionally well across all devices.",
    image: "/images/expertise2.webp",
    href: "/custom-web-solutions"
  },
  {
    id: 3,
    title: "SEO & Search Dominance",
    description:
      "Organic traffic is our forte. We optimize your website to rank higher and attract more qualified leads.",
    image: "/images/expertise3.webp",
    href: "/digital-transformation-services"
  },
  {
    id: 4,
    title: "3D Website",
    description: "Transform your digital presence with innovative 3D website designs. We use cutting-edge 3D technology to deliver engaging, visually rich, and performance-driven web solutions.",
    image: "/images/expertise4.webp",
    href: "/3d-web-design-services"
  },
  {
    id: 5,
    title: "Enterprise web solutions",
    description: "Delivering powerful enterprise web solutions to help businesses scale and succeed globally.",
    image: "/images/expertise5.webp",
    href: "/software-development"
  },
  {
    id: 6,
    title: "AI Solutions & Automation",
    description: "Simplifying complex business tasks through AI-powered automation for faster, more efficient results.",
    image: "/images/expertise6.webp",
    href: "/ai-services"
  },
]

export default function ExpertiseSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const mainTitleRef = useRef(null)
  const cardsRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        // Set initial states
        gsap.set(subtitleRef.current, {
          opacity: 0,
          y: -50, // Come from top
        })

        gsap.set(mainTitleRef.current, {
          opacity: 0,
          y: 50, // Come from bottom
        })

        // Title animations timeline
        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })

        // "Our Expertise" from top
        headerTl.to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        // Main title from bottom
        .to(mainTitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.4") // Start 0.4s before the previous animation ends

        // Set initial states for directional animations
        gsap.set(".left-card", {
          opacity: 0,
          x: -200,
          scale: 0.8
        })

        gsap.set(".right-card", {
          opacity: 0,
          x: 200,
          scale: 0.8
        })

        // Row-by-row timeline animations with more spacing
        const rows = [
          { left: ".card-1", right: ".card-2", trigger: "top 85%" },   // First row
          { left: ".card-3", right: ".card-4", trigger: "top 60%" },   // Second row (more scroll needed)
          { left: ".card-5", right: ".card-6", trigger: "top 35%" }    // Third row (even more scroll)
        ]

        rows.forEach((row, index) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: cardsRef.current,
              start: row.trigger,
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              // markers: true, // Uncomment to see trigger points during development
            }
          })

          // Animate left card from left
          tl.to(row.left, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out"
          })
          // Animate right card from right (with slight overlap)
          .to(row.right, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out"
          }, "-=0.8")
        })

        // Hover animations for cards
        document.querySelectorAll(".expertise-card").forEach((card) => {
          const icon = card.querySelector(".card-icon")
          const button = card.querySelector(".card-button")

          card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power2.out" })
            gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: "power2.out" })
            gsap.to(button, { x: 5, duration: 0.3, ease: "power2.out" })
          })

          card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
            gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" })
            gsap.to(button, { x: 0, duration: 0.3, ease: "power2.out" })
          })
        })
      } else {
        // Simple fade animations for mobile
        gsap.set([subtitleRef.current, mainTitleRef.current, ".left-card", ".right-card"], {
          opacity: 0,
          y: 30
        })

        // Title animations timeline
        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })

        // Simple fade-in animations for mobile
        headerTl.to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(mainTitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3")

        // Simple card animations for mobile
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        })

        tl.to([".left-card", ".right-card"], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        })

        // Hover animations for cards (keep for mobile too)
        document.querySelectorAll(".expertise-card").forEach((card) => {
          const icon = card.querySelector(".card-icon")
          const button = card.querySelector(".card-button")

          card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power2.out" })
            gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: "power2.out" })
            gsap.to(button, { x: 5, duration: 0.3, ease: "power2.out" })
          })

          card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
            gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" })
            gsap.to(button, { x: 0, duration: 0.3, ease: "power2.out" })
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white py-32 px-6 lg:px-16 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 w-full max-w-8xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-32">
          <p ref={subtitleRef} className="text-gray-500 text-3xl mb-8 font-sans tracking-wide opacity-0">Our Expertise</p>
          <h2 ref={mainTitleRef} className="text-5xl font-sans font-semibold text-gray-800 leading-tight max-w-6xl mx-auto opacity-0">
            AI That Listens, Learns, and Delivers Precision for{" "}
            <br />
            <span className="text-gray-800">Every Unique Project</span>
          </h2>
        </div>

        {/* Cards Grid - Full width 2 columns layout with more spacing */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 w-full max-w-none">
          {expertiseData.map((item, index) => {
            const isLeftCard = index % 2 === 0
            const cardNumber = index + 1
            
            return (
              <div
                key={item.id}
                className={`expertise-card ${isLeftCard ? 'left-card' : 'right-card'} card-${cardNumber} rounded-3xl p-12 transition-all duration-300 cursor-pointer w-full`}
              >
                  {/* Icon and Title in same line */}
                  <div className="flex items-center mb-8">
                    <div className="card-icon w-20 h-20 rounded-full flex items-center justify-center mr-6">
                      <Image 
                        src={item.image} 
                        alt={`${item.title} icon`} 
                        width={72} 
                        height={72} 
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-4xl font-bold text-[#00B9FF] leading-tight flex-1">{item.title}</h3>
                  </div>

                  {/* Content */}
                  <p className="text-gray-400 mb-12 font-medium font-sans leading-relaxed text-xl">{item.description}</p>

                  {/* Button */}
                  <button 
                    onClick={() => router.push(item.href)}
                    className="card-button group flex items-center text-[#00B9FF] hover:text-[#00B9FF] font-sans transition-colors duration-300 text-xl rounded-full px-8 py-4 border-2 border-[#00B9FF] hover:border-[#00B9FF] hover:bg-[#00B9FF] hover:text-white"
                  >
                    Learn more
                    <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
