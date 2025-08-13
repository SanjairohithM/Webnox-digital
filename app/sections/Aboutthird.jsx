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
      // Check if we're on desktop (lg breakpoint and above)
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop) {
        // Complex animations for desktop
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
      } else {
        // Simple fade animations for mobile
        gsap.set([
          headerRef.current,
          titleRef.current,
          descriptionRef.current,
          imageRef.current,
          '.value-item-odd',
          '.value-description-odd',
          '.value-item-even',
          '.value-description-even'
        ], {
          opacity: 0,
          y: 30
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
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        })
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.3")
        .to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.3")
        .to(imageRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4")
        .to(['.value-item-odd', '.value-description-odd', '.value-item-even', '.value-description-even'], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.4")
      }

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
    <section ref={containerRef} className="relative w-full min-h-screen bg-white py-8 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section - Above Everything */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          {/* Header */}
          <div ref={headerRef} className="mb-4 sm:mb-6">
            <p className="text-[#25C3E5] font-urbanist text-lg sm:text-xl font-medium tracking-wider uppercase">
              OUR VALUES
            </p>
          </div>

          {/* Main Title */}
          <div ref={titleRef} className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-urbanist text-gray-600 leading-tight">
              <span className="text-[#25C3E5]">Boost Efficiency,</span> Maximize Profits with <br className="hidden sm:block" />
              Smart AI Solutions.
            </h2>
          </div>

          {/* Description */}
          <div ref={descriptionRef}>
            <p className="text-base sm:text-lg text-gray-600 font-urbanist leading-relaxed max-w-3xl">
              We help businesses harness AI's potential. Our tailored solutions transform ideas into outcomes that redefine success.
            </p>
          </div>
        </div>

        {/* Responsive Layout - Mobile: Stacked | Desktop: 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* Column 1 - Image */}
          <div ref={imageRef} className="lg:col-span-1 order-1 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/thirdabout.webp"
                alt="Team collaboration with AI brain visualization"
                width={700}
                height={300}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Mobile: Combined Values | Desktop: Separate Columns */}
          <div className="lg:hidden order-2 space-y-6 sm:space-y-8">
            {values.map((value, index) => (
              <div key={value.id} className={`value-item-mobile ${value.isOdd ? 'value-item-odd' : 'value-item-even'}`}>
                {/* Value Title with Icon */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRightCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#25C3E5]" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-urbanist font-bold text-[#25C3E5] leading-tight">
                    {value.title}
                  </h3>
                </div>
                {/* Value Description */}
                <div className="ml-8 sm:ml-9">
                  <p className="text-sm sm:text-base text-gray-600 font-urbanist leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Column 2 - Blue Value Titles */}
          <div className="hidden lg:block lg:col-span-1 order-2 lg:order-2">
            <div className="space-y-8 lg:space-y-12 pt-4 lg:h-[600px] flex flex-col justify-between">
              {values.map((value, index) => (
                <div key={value.id} className={`value-item flex items-start space-x-4 ${value.isOdd ? 'value-item-odd' : 'value-item-even'}`}>
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <ChevronRightCircle className="w-6 h-6 text-[#25C3E5]" />
                    </div>
                  </div>
                  
                  {/* Blue Title */}
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-urbanist font-bold text-[#25C3E5] leading-tight">
                    {value.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Column 3 - Descriptions */}
          <div className="hidden lg:block lg:col-span-1 order-3 lg:order-3">
            <div ref={valuesRef} className="space-y-8 lg:space-y-12 pt-4 lg:h-[600px] flex flex-col justify-between">
              {values.map((value, index) => (
                <div key={`desc-${value.id}`} className={`value-description ${value.isOdd ? 'value-description-odd' : 'value-description-even'}`}>
                  <p className="text-base lg:text-lg xl:text-xl text-gray-600 font-urbanist leading-relaxed font-medium">
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
