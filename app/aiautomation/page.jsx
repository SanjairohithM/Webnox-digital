"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
// import { Button } from "@/components/ui/button"
import { Cpu } from "lucide-react"
import WebnoxDigitalSection from "@/app/sections/Aiautomationsecond"
import OurApproachSection from "@/app/sections/Aianimationthird"
import AutomationServicesSection from "@/app/sections/Aianimationfourth"

export default function AIAutomationHero() {
  const containerRef = useRef(null)
  const leftContentRef = useRef(null)
  const rightContentRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([subtitleRef.current, titleRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 30,
      })

      gsap.set([imageRef.current, badgeRef.current], {
        opacity: 0,
        scale: 0.8,
      })

      // Create timeline for animations
      const tl = gsap.timeline({ delay: 0.2 })

      // Animate left content
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
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

      // Animate right content
      tl.to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.8",
      ).to(
        badgeRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

      return (
      <>
        <div
          ref={containerRef}
          className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 py-12"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div ref={leftContentRef} className="space-y-8">
                <p ref={subtitleRef} className="text-cyan-500 font-medium text-lg tracking-wide">
                  AI Automation
                </p>

                <h1 ref={titleRef} className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Work Smarter. <span className="block">Not Harder.</span>
                </h1>

                <p ref={descriptionRef} className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Let Webnox build the systems that run your business, while you focus on growing it.
                </p>

                <div ref={buttonRef}>
                  <button
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Switch to AI
                  </button>
                </div>
              </div>

              {/* Right Content */}
              <div ref={rightContentRef} className="relative flex justify-center lg:justify-end">
                <div ref={imageRef} className="relative">
                  <Image
                    src="/images/ai-robot.png"
                    alt="AI Robot Automation"
                    width={600}
                    height={600}
                    className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
                    priority
                  />

                  {/* AI Automation Badge */}
                  <div
                    ref={badgeRef}
                    className="absolute bottom-8 left-8 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-3"
                  >
                    <div className="bg-cyan-500 p-2 rounded-lg">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">AI Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WebnoxDigitalSection />
        <OurApproachSection/>
        <AutomationServicesSection/>
        
      </>
    )
}
