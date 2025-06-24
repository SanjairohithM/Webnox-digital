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
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          image1Ref.current,
          image2Ref.current,
          image3Ref.current,
          text1Ref.current,
          text2Ref.current,
          text3Ref.current,
          imageText1Ref.current,
          imageText2Ref.current,
          imageText3Ref.current,
        ],
        {
          opacity: 0,
          y: 50,
        },
      )

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

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
        .to(
          text1Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .to(
          [imageText1Ref.current, imageText2Ref.current, imageText3Ref.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.5",
        )
        .to(
          [image1Ref.current, image2Ref.current, image3Ref.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=0.5",
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
        
        {/* Header Section - Left Aligned */}
        <div className="text-left mb-16">
          <p ref={subtitleRef} className="text-lg font-normal text-gray-600 leading-relaxed mb-4">
            Innovative Software Solutions for the
          </p>
          <h1 ref={titleRef} className="text-5xl lg:text-6xl font-bold text-[#25C3E5] leading-tight">
            Next-Gen Digital Transformation
          </h1>
        </div>

        {/* Description - Left Aligned */}
        <div ref={text1Ref} className="text-left max-w-4xl mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Webnox Digital, we architect intelligent, scalable, and future-ready digital platforms that enable
            businesses to thrive in a rapidly evolving digital world. Our approach is rooted in innovation, agility,
            and deep technological expertise.
          </p>
        </div>

        {/* 3-Column Grid Layout with Staggered Image Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 min-h-[600px]">
          
          {/* Left Image with Text - Positioned in CENTER */}
          <div className="flex flex-col justify-center">
            <div ref={imageText1Ref} className="mb-4">
              <p className="text-base text-gray-700 leading-relaxed text-center">
                From custom software and mobile apps to SaaS products and cloud-based platforms, we focus on building solutions that drive efficiency, growth, and competitive advantage.
              </p>
            </div>
            <div ref={image1Ref} className="flex justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full max-w-md">
                <Image
                  src="/images/aboutimg1.png"
                  alt="Team collaboration with digital interfaces"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Center Image with Text - Positioned at END (BOTTOM) */}
          <div className="flex flex-col justify-end">
            <div ref={imageText2Ref} className="mb-4">
              <p className="text-base text-gray-700 leading-relaxed text-center">
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
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Image with Text - Positioned at START (TOP) */}
          <div className="flex flex-col justify-start">
            <div ref={imageText3Ref} className="mb-4">
              <p className="text-base text-gray-700 leading-relaxed text-center">
                Our innovative approach combines cutting-edge technology with strategic insights to deliver measurable business impact and sustainable growth.
              </p>
            </div>
            <div ref={image3Ref} className="flex justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full max-w-md">
                <Image
                  src="/images/aboutimg3.png"
                  alt="Diverse team working together"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
