"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
// import { Button } from "@/components/ui/button"
import { Cpu } from "lucide-react"
import WebnoxDigitalSection from "@/app/sections/Aiautomationsecond"
import OurApproachSection from "@/app/sections/Aianimationthird"
import AutomationServicesSection from "@/app/sections/Aianimationfourth"
import Footer from "../sections/Footer"

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

      // Set initial rotation for the image
      gsap.set(imageRef.current, {
        rotation: 360,
        x: 400,
        transformOrigin: "center center",
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

      // Animate right content with rotation
      tl.to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          x: 0,
          duration: 2.5,
          ease: "power2.out",
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
          className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 py-12 font-sans"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div ref={leftContentRef} className="space-y-8">
                <p ref={subtitleRef} className="text-cyan-500  text-2xl tracking-wide">
                  AI Automation
                </p>

                <h1 ref={titleRef} className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="text-gray-900">Work Smarter. Not Harder </span>
                  
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
                  {/* Circular Background Element */}
                  <div className="absolute inset-0 w-full h-full flex items-start justify-end pr-6 pt-8">
                    <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-90 -z-10"></div>
                  </div>
                  
                  <Image
                    src="/images/aiauto1.webp"
                    alt="AI Robot Automation"
                    width={600}
                    height={600}
                    className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto relative z-10"
                    priority
                  />

                  {/* AI Automation Badge */}
                  <div
                    ref={badgeRef}
                    className="absolute bottom-8 left-14 rounded-2xl px-6 py-3 shadow-lg border border-gray-100 flex items-center gap-3 z-20
                      bg-white/30 backdrop-blur-md"
                    style={{
                      WebkitBackdropFilter: "blur(12px)",
                      backdropFilter: "blur(12px)",
                      background: "rgba(255,255,255,0.30)"
                    }}
                  >
                    <div className="bg-cyan-500 p-4 rounded-lg flex items-center justify-center">
                      <Image
                        src="/images/cons10.png"
                        alt="AI Icon"
                        width={24}
                        height={24}
                        className="w-7 h-7 object-cover"
                        priority
                      />
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
        <Footer/>
        
      </>
    )
}
