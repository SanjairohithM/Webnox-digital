"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function OurApproachSection() {
  const sectionRef = useRef(null)
  const leftContentRef = useRef(null)
  const rightContentRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        x: 50,
      })

      gsap.set(imageRef.current, {
        opacity: 0,
        x: -50,
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

      // Animate left content (image)
      tl.to(imageRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      })

      // Animate right content
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3",
        )

      // Animate SVG elements (robot and gear) after image is visible
      const svgTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      })

      // Wait for image to load, then animate SVG elements
      setTimeout(() => {
        const svgElement = imageRef.current?.querySelector('svg')
        if (svgElement) {
          // Target robot elements (common SVG element selectors)
          const robotElements = svgElement.querySelectorAll('[id*="robot"], [class*="robot"], [id*="bot"], [class*="bot"]')
          const gearElements = svgElement.querySelectorAll('[id*="gear"], [class*="gear"], [id*="cog"], [class*="cog"]')
          
          // Set initial scale for robot and gear elements
          gsap.set([...robotElements, ...gearElements], {
            scale: 0.8,
            transformOrigin: "center center",
          })

          // Animate robot elements
          svgTimeline.to(robotElements, {
            scale: 1.3,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.1,
          })

          // Animate gear elements with rotation
          svgTimeline.to(gearElements, {
            scale: 1.4,
            rotation: 360,
            duration: 1.5,
            ease: "back.out(1.7)",
            stagger: 0.15,
          }, "-=0.8")
        }
      }, 500)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Image */}
          <div ref={leftContentRef} className="order-2 lg:order-1">
            <div ref={imageRef} className="relative w-full h-auto min-h-[400px]">
              <Image
                src="/aiauto1.svg"
                alt="Our Approach - Built Around You"
                width={600}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
              {/* Overlayed SVGs */}
              <Image
                src="/aiauto3.svg"
                alt="AI Automation Layer 2"
                width={220}
                height={220}
                className="absolute left-[60%] top-[10%] w-[36%] h-auto pointer-events-none"
                priority
              />
              <Image
                src="/aiauto2.svg"
                alt="AI Automation Layer 3"
                width={180}
                height={180}
                className="absolute left-[12%] top-[17%] w-[28%] h-auto pointer-events-none"
                priority
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div ref={rightContentRef} className="order-1 lg:order-2 space-y-8">
            <h2 ref={titleRef} className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Our Approach: </span>
              <span className="text-cyan-500">Built Around You</span>
            </h2>

            <p ref={descriptionRef} className="text-xl text-gray-600 leading-relaxed">
              We listen. Understand your workflow. Learn how your team operates. And then build automation. It's not
              about replacing people, it's about empowering them.
            </p>

            <div ref={buttonRef}>
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Switch to AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
