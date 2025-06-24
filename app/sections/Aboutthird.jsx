"use client"
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { ChevronRightCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const Aboutthird = () => {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const valuesRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Set initial states for left-coming elements (image + odd items)
      gsap.set([
        headerRef.current,
        titleRef.current,
        descriptionRef.current,
        imageRef.current,
        '.value-item-odd',
        '.value-description-odd'
      ], {
        opacity: 0,
        x: -100
      })

      // Set initial states for right-coming elements (even items)
      gsap.set([
        '.value-item-even',
        '.value-description-even'
      ], {
        opacity: 0,
        x: 100
      })

      // Create timeline with scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      })

      tl.to(headerRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(titleRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(descriptionRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(imageRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.6")
      .to(['.value-item-odd', '.value-description-odd'], {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.8")
      .to(['.value-item-even', '.value-description-even'], {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.6")

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const values = [
    {
      id: 1,
      title: "Truth Over Trends",
      description: "We believe in honesty over hype. No buzzwords, no overpromising — just clear, straightforward work that delivers real results.",
      isOdd: true
    },
    {
      id: 2,
      title: "Progress Over Perfection",
      description: "In a world that moves fast, we focus on momentum. We build, test, optimize, repeat.",
      isOdd: false
    },
    {
      id: 3,
      title: "People First, Always",
      description: "Clients, team, audience — every decision we make starts with Compassion.",
      isOdd: true
    },
    {
      id: 4,
      title: "Creativity Meets Data",
      description: "We combine artistic storytelling with scientific precision to get results that matter.",
      isOdd: false
    },
    {
      id: 5,
      title: "Results That Speak",
      description: "You're here for growth — more leads, more sales, more visibility. And that's exactly what we deliver.",
      isOdd: true
    }
  ]

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-white py-16 lg:py-24">
      <div className="container mx-auto px-8">
        
        {/* Top Header Section - Above Everything */}
        <div className="mb-16">
          {/* Header */}
          <div ref={headerRef} className="mb-6">
            <p className="text-[#25C3E5] font-urbanist text-lg font-medium tracking-wider uppercase">
              OUR VALUES
            </p>
          </div>

          {/* Main Title */}
          <div ref={titleRef} className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-urbanist font-bold text-gray-800 leading-tight">
              <span className="text-[#25C3E5]">Boost Efficiency,</span> Maximize Profits with <br />
              Smart AI Solutions.
            </h2>
          </div>

          {/* Description */}
          <div ref={descriptionRef}>
            <p className="text-lg text-gray-600 font-urbanist leading-relaxed max-w-3xl">
              We help businesses harness AI's potential. Our tailored solutions transform ideas into outcomes that redefine success.
            </p>
          </div>
        </div>

        {/* 3-Column Grid Layout - Image | Blue Titles | Descriptions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Column 1 - Image */}
          <div ref={imageRef} className="lg:col-span-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[600px]">
              <Image
                src="/images/thirdabout.png"
                alt="Team collaboration with AI brain visualization"
                width={700}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Column 2 - Blue Value Titles (Bigger) */}
          <div className="lg:col-span-1">
            <div className="space-y-12 pt-4 h-[600px] flex flex-col justify-between">
              {values.map((value, index) => (
                <div key={value.id} className={`value-item flex items-start space-x-4 ${value.isOdd ? 'value-item-odd' : 'value-item-even'}`}>
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <ChevronRightCircle className="w-6 h-6 text-[#25C3E5]" />
                    </div>
                  </div>
                  
                  {/* Blue Title - Much Bigger */}
                  <h3 className="text-2xl lg:text-3xl font-urbanist font-bold text-[#25C3E5] leading-tight">
                    {value.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Descriptions (Bigger & Balanced) */}
          <div className="lg:col-span-1">
            <div ref={valuesRef} className="space-y-12 pt-4 h-[600px] flex flex-col justify-between">
              {values.map((value, index) => (
                <div key={`desc-${value.id}`} className={`value-description ${value.isOdd ? 'value-description-odd' : 'value-description-even'}`}>
                  <p className="text-lg lg:text-xl text-gray-600 font-urbanist leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
