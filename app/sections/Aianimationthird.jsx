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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Image */}
          <div ref={leftContentRef} className="order-2 lg:order-1">
            <div ref={imageRef} className="relative">
              <Image
                src="/images/our-approach.png"
                alt="Our Approach - Built Around You"
                width={600}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
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
