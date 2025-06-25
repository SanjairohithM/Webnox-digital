"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Component() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const image3Ref = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const text3Ref = useRef(null)
  const imageText1Ref = useRef(null)
  const imageText2Ref = useRef(null)
  const imageText3Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for header elements (come from top)
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: -50,
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

      // Header animations
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      })
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
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/bgimgabout.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 container mx-auto px-8 py-16 lg:py-20">
        <div className="mb-8"> 
          <p className="text-8xl font-urbanist text-gray-200 font-bold mb-3">D I G I T A L </p>

          {/* Header Section - Left Aligned */}
          <div className="text-left mb-16">
            <p ref={subtitleRef} className="text-2xl font-urbanist text-gray-600 mb-5">
              Innovative Software Solutions for the
            </p>
            <h1 ref={titleRef} className="text-6xl font-urbanist font-bold text-[#25C3E5] leading-tight mb-5">
              Next-Gen Digital Transformation
            </h1>
          </div>
        </div>




                  {/* 3-Column Grid Layout with Staggered Image Positioning */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 min-h-[800px] -mt-8">

          {/* Left Image with Text - Positioned in CENTER */}
          <div className="flex flex-col justify-center -mt-40">
            <div ref={imageText1Ref} className="mb-8">
              <p className=" text-gray-400 font-urbanist leading-relaxed">
                At Webnox Digital, we architect intelligent, scalable, and future-ready digital platforms that enable businesses to thrive in a rapidly evolving digital world. Our approach is rooted in innovation, agility, and deep technological expertise.
              </p>
            </div>
            <div ref={image1Ref} className="flex justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full max-w-md">
                <Image
                  src="/images/aboutimg1.png"
                  alt="Team collaboration with digital interfaces"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Center Image with Text - Positioned at END (BOTTOM) */}
          <div className="flex flex-col justify-end">
            <div ref={imageText2Ref} className="mb-8">
              <p className="text-base text-gray-400 font-urbanist leading-relaxed">
                We specialize in delivering transformative digital solutions that not only solve complex problems but also create seamless and impactful user experiences.
              </p>
            </div>
            <div ref={image2Ref} className="flex justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full max-w-md">
                <Image
                  src="/images/aboutimg2.png"
                  alt="Cloud computing visualization"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Image with Text - Positioned at START (TOP) */}
          <div className="flex flex-col justify-start -mt-20">
            <div ref={imageText3Ref} className="mb-8">
              <p className="text-base text-gray-400 font-urbanist leading-relaxed">
                From custom software and mobile apps to SaaS products and cloud-based platforms, we focus on building solutions that drive efficiency, growth, and competitive advantage.
              </p>
            </div>
            <div ref={image3Ref} className="flex justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full max-w-md">
                <Image
                  src="/images/aboutimg3.png"
                  alt="Diverse team working together"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
