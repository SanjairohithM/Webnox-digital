"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Component() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const digitalTextRef = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const image3Ref = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const text3Ref = useRef(null)
  const imageText1Ref = useRef(null)
  const imageText2Ref = useRef(null)
  const imageText3Ref = useRef(null)
  const middleColumnRef = useRef(null)
  const [bgHeight, setBgHeight] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
        // Set initial states for header elements (come from top)
        gsap.set([titleRef.current, subtitleRef.current], {
          opacity: 0,
          y: -50,
        })

        // Set initial state for DIGITAL letters
        gsap.set(".digital-letter", {
          opacity: 0,
          y: 30,
          scale: 0.8,
        })

        // Set initial states for cards with different directions
        // First card - from left
        gsap.set([image1Ref.current, imageText1Ref.current], {
          opacity: 0,
          x: -100,
        })

        // Second card - from bottom
        gsap.set([image2Ref.current, imageText2Ref.current], {
          opacity: 0,
          y: 100,
        })

        // Third card - from right
        gsap.set([image3Ref.current, imageText3Ref.current], {
            opacity: 0,
          x: 100,
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })

        // DIGITAL letters animation - letter by letter
        tl.to(".digital-letter", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
        })
          
        // Header animations
          .to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          }, "-=0.5")
          .to(
            subtitleRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.5",
          )
          
          // First card - from left
          .to(
            [imageText1Ref.current, image1Ref.current],
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.1,
            },
            "-=0.3",
          )
          
          // Second card - from bottom
          .to(
            [imageText2Ref.current, image2Ref.current],
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.1,
            },
            "-=0.6",
          )
          
          // Third card - from right
          .to(
            [imageText3Ref.current, image3Ref.current],
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.1,
            },
            "-=0.6",
          )
      } else {
        // Simple fade animations for mobile
        gsap.set([titleRef.current, subtitleRef.current, image1Ref.current, imageText1Ref.current, image2Ref.current, imageText2Ref.current, image3Ref.current, imageText3Ref.current], {
          opacity: 0,
          y: 30,
        })

        gsap.set(".digital-letter", {
          opacity: 0,
          y: 20,
          scale: 0.9,
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })

        // Simple fade-in animations for mobile
        tl.to(".digital-letter", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        })
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3")
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3")
        .to([imageText1Ref.current, image1Ref.current], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }, "-=0.2")
        .to([imageText2Ref.current, image2Ref.current], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }, "-=0.3")
        .to([imageText3Ref.current, image3Ref.current], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }, "-=0.3")
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Measure middle column height and cap background to its bottom
  useEffect(() => {
    const updateBgHeight = () => {
      if (!containerRef.current || !middleColumnRef.current) return
      const containerRect = containerRef.current.getBoundingClientRect()
      const middleRect = middleColumnRef.current.getBoundingClientRect()
      const height = Math.max(0, middleRect.bottom - containerRect.top)
      setBgHeight(height)
    }

    // Run on next frame to ensure layout/images are rendered
    const raf = requestAnimationFrame(updateBgHeight)
    window.addEventListener("resize", updateBgHeight)
    window.addEventListener("load", updateBgHeight)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", updateBgHeight)
      window.removeEventListener("load", updateBgHeight)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
    >
      {/* Background overlay that ends at middle card height */}
      <div
        className="absolute inset-x-0 top-0 z-0"
        style={{
          height: bgHeight ? `${bgHeight}px` : undefined,
          backgroundImage: "url('/images/bgimgabout.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 sm:mb-8"> 
          <p ref={digitalTextRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans text-gray-200 font-bold mb-3">
            <span className="digital-letter">D</span>
            <span className="digital-letter ml-1 sm:ml-2 md:ml-3 lg:ml-4">I</span>
            <span className="digital-letter ml-1 sm:ml-2 md:ml-3 lg:ml-4">G</span>
            <span className="digital-letter ml-1 sm:ml-2 md:ml-3 lg:ml-4">I</span>
            <span className="digital-letter ml-1 sm:ml-2 md:ml-3 lg:ml-4">T</span>
            <span className="digital-letter ml-1 sm:ml-2 md:ml-3 lg:ml-4">A</span>
            <span className="digital-letter ml-1 sm:ml-2 md:ml-3 lg:ml-4">L</span>
          </p>

          {/* Header Section - Left Aligned */}
          <div className="text-left mb-8 sm:mb-12 lg:mb-16">
            <p ref={subtitleRef} className="text-lg sm:text-xl lg:text-2xl font-sans text-gray-600 mb-3 sm:mb-5">
              Innovative Software Solutions for the
            </p>
            <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#25C3E5] leading-tight mb-3 sm:mb-5">
              Next-Gen Digital Transformation
            </h1>
          </div>
        </div>




                  {/* 3-Column Grid Layout with Staggered Image Positioning */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-4">

          {/* Left Image with Text - Top Aligned */}
          <div className="flex flex-col justify-start">
            <div ref={imageText1Ref} className="mb-6 sm:mb-8 lg:mb-0 order-1 h-32 sm:h-40 lg:h-42 flex items-start">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-lg text-gray-800 font-sans font-medium leading-relaxed">
                At Webnox Digital, we architect intelligent, scalable, and future-ready digital platforms that enable businesses to thrive in a rapidly evolving digital world. Our approach is rooted in innovation, agility, and deep technological expertise.
              </p>
            </div>
            <div ref={image1Ref} className="flex justify-center order-2">
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full max-w-sm sm:max-w-md h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/aboutimg1.webp"
                  alt="Team collaboration with digital interfaces"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Center Image with Text - Top Aligned */}
          <div ref={middleColumnRef} className="flex flex-col justify-start">
            <div ref={imageText2Ref} className="mb-6 sm:mb-8 lg:mb-0 order-1 h-32 sm:h-40 lg:h-42 flex items-start">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-lg text-gray-800 font-sans font-medium leading-relaxed ">
                We specialize in delivering transformative digital solutions that not only solve complex problems but also create seamless and impactful user experiences.
              </p>
            </div>
            <div ref={image2Ref} className="flex justify-center order-2">
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full max-w-sm sm:max-w-md h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/aboutimg2.webp"
                  alt="Cloud computing visualization"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Image with Text - Top Aligned */}
          <div className="flex flex-col justify-start">
            <div ref={imageText3Ref} className="mb-6 sm:mb-8 lg:mb-0 order-1 h-32 sm:h-40 lg:h-42 flex items-start">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-lg text-gray-800 font-sans font-medium leading-relaxed">
                From custom software and mobile apps to SaaS products and cloud-based platforms, we focus on building solutions that drive efficiency, growth, and competitive advantage.
              </p>
            </div>
            <div ref={image3Ref} className="flex justify-center order-2">
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full max-w-sm sm:max-w-md h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/aboutimg3.webp"
                  alt="Diverse team working together"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
