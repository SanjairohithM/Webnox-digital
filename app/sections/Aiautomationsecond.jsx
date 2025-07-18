"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function WebnoxDigitalSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const layer1Ref = useRef(null)
  const layer2Ref = useRef(null)
  const layer3Ref = useRef(null)
  const layer4Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current, imageRef.current], {
        opacity: 0,
        y: 50,
      })

      // Set initial states for layers (show bottom 2 layers, hide top 2)
      gsap.set(layer4Ref.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        transformOrigin: "center center",
      })

      gsap.set(layer3Ref.current, {
        y: -15,
        opacity: 1,
        scale: 1,
        visibility: "visible",
        transformOrigin: "center center",
      })

      // Set layer2 (middle) to start from layer4 position (bottom)
      gsap.set(layer2Ref.current, {
        y: 0, // Same position as layer4 (bottom)
        opacity: 0,
        scale: 0.8,
        visibility: "hidden",
        transformOrigin: "center center",
      })

      // Set layer1 (top) to start from layer2 position (which will be layer4 initially)
      gsap.set(layer1Ref.current, {
        y: 0, // Same position as layer4 (bottom) initially
        opacity: 0,
        scale: 0.8,
        visibility: "hidden",
        transformOrigin: "center center",
      })

      // Create scroll-triggered timeline for main content
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate elements in sequence
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
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6",
        )

      // Create scroll-triggered timeline for layered effect
      const layerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "+=30%", // Animation completes in 30% of scroll distance
          scrub: 1, // Smoother scrubbing
          toggleActions: "play none none reverse",
        },
      })

      // Animate layers to create stacked effect (2 bottom stay together, middle and top have gaps)
      layerTl
        .to(layer2Ref.current, {
          visibility: "visible",
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power3.out",
        })
        .to(
          layer2Ref.current,
          {
            y: -90,
            duration: 3,
            ease: "power2.inOut",
          },
          "-=1.5"
        )
        .to(layer1Ref.current, {
          visibility: "visible",
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }, "-=1")
        .to(
          layer1Ref.current,
          {
            y: -180,
            duration: 3,
            ease: "power2.inOut",
          },
          "-=1.5",
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
    <section ref={sectionRef} className="py-8 bg-white relative overflow-hidden font-sans">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />

      {/* Floor Background - Full Section */}
      {/* <div className="absolute bottom-25 left-234 transform -translate-x-1/2 w-full h-full z-0 opacity-250 ">
        <Image
          src="/Floor.svg"
          alt="Floor Background"
          fill
          className="object-cover opacity-190"
          priority
        />
      </div> */}

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Title */}
        <h2 ref={titleRef} className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 lg:mb-12">
          <span className="text-gray-900">Webnox </span>
          <span className="text-cyan-500">Digital</span>
        </h2>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto "
        >
          Once upon a time, businesses were built on long hours, manual processes, and endless spreadsheets. But the
          world changed. Fast.At Webnox Digital, we help businesses like yours break free from busywork. Whether it's your marketing,
          customer service, operations, or internal tasks.
        </p>
        <br />
        
        

        {/* 3D Illustration */}
        <div
          ref={imageRef}
          className="flex justify-center mt-20"
        >
          <div className="relative min-h-[400px] w-full max-w-4xl">
            {/* SVG Container - Centered on floor */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10">
              {/* Layer 4 - Bottom-most */}
              <div ref={layer4Ref} className="relative w-full z-20">
              <Image
                src="/bottom.svg"
                alt="AI Automation Layer 4 - Bottom"
                width={200}
                height={100}
                className=""
                priority
              />
            </div>

       

              {/* Layer 2 - Middle (will have gap) */}
              <div ref={layer2Ref} className="absolute top-0 left-0 w-full z-40 opacity-0 invisible">
                <Image
                  src="/middle.svg"
                  alt="AI Automation Layer 2 - Middle"
                  width={200}
                  height={100}
                  className=""
                  priority
                />
                {/* Subtle shadow like reference image */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent rounded-full blur-sm"></div>
              </div>

              {/* Layer 1 - Top (will have gap) */}
              <div ref={layer1Ref} className="absolute top-0 left-0 w-full z-50 opacity-0 invisible">
                <Image
                  src="/top.svg"
                  alt="AI Automation Layer 1 - Top"
                  width={200}
                  height={100}
                  className=""
                  priority
                />
                {/* Subtle shadow like reference image */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent rounded-full blur-sm"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
