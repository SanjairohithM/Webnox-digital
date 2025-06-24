"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const statsRef = useRef(null)
  const robotRef = useRef(null)
  const redefiningSectionRef = useRef(null)
  const heroLogoRef = useRef(null)
  const letsTalkRef = useRef(null)

  useGSAP(
    () => {
      const elementsToAnimate = [
        titleRef.current,
        subtitleRef.current,
        descriptionRef.current,
        robotRef.current,
        statsRef.current?.children,
        redefiningSectionRef.current
      ].filter(Boolean)

      gsap.set(elementsToAnimate.flat(), { opacity: 0, y: 50 })

      // Animate hero logo and let's talk button on initial load
      if (heroLogoRef.current) {
        gsap.fromTo(heroLogoRef.current, 
          { x: -100, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
        )
      }

      if (letsTalkRef.current) {
        gsap.fromTo(letsTalkRef.current, 
          { x: 100, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
        )
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center+=100",
        once: true,
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          gsap.to(subtitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2
          })
          gsap.to(descriptionRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.4
          })
          gsap.to(robotRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3
          })
          gsap.to(statsRef.current?.children || [], {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.6
          })
          gsap.to(redefiningSectionRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.8
          })
        },
      })

      // Scroll trigger for header elements visibility
      ScrollTrigger.create({
        trigger: "body",
        start: "top -50",
        end: "bottom bottom",
        onUpdate: (self) => {
          const scrolled = self.scroll() > 50
          
          if (heroLogoRef.current) {
            gsap.to(heroLogoRef.current, {
              opacity: scrolled ? 0.8 : 1,
              scale: scrolled ? 0.9 : 1,
              y: scrolled ? -10 : 0,
              duration: 0.3,
              ease: "power2.out",
            })
          }

          if (letsTalkRef.current) {
            gsap.to(letsTalkRef.current, {
              opacity: scrolled ? 0.8 : 1,
              scale: scrolled ? 0.9 : 1,
              y: scrolled ? -10 : 0,
              duration: 0.3,
              ease: "power2.out",
            })
          }
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <>
      {/* Hero Logo - Top Left */}
      <div ref={heroLogoRef} className="fixed top-12 left-12 z-50 transition-all duration-300">
        <div className="flex items-center">
          <Image
            src="/webnox-logo.png"
            alt="Webnox Digital Logo"
            width={160}
            height={160}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Let's Talk Button - Top Right */}
      <div ref={letsTalkRef} className="fixed top-12 right-12 z-30 transition-all duration-300">
        <button
          className="bg-[#2acbec] hover:bg-[#1fb8d9] text-white font-bold p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-xl"
          onClick={() => {
            const element = document.querySelector("#contact")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          Let's Talk
        </button>
      </div>

      <section
        ref={sectionRef}
        className="relative w-full min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-white via-[#f8fafc] to-[#f1f5f9] overflow-hidden font-urbanist"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Headlines */}
              <div className="space-y-4">
                <h1 
                  ref={titleRef}
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 opacity-0"
                >
                  Driven by Innovation.
                </h1>
                <h1 
                  ref={subtitleRef}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] text-transparent bg-clip-text opacity-0"
                >
                  Defined by Results.
                </h1>
              </div>

              {/* Description */}
              <p 
                ref={descriptionRef}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg opacity-0"
              >
                We are a digital transformation partner committed to empowering 
                businesses with cutting-edge technology, strategic insight, and measurable 
                impact.
              </p>

              {/* Statistics */}
              <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg opacity-0">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] text-transparent bg-clip-text">
                    1000+
                  </div>
                  <div className="text-gray-600 mt-2 font-medium">Projects Delivered</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg opacity-0">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] text-transparent bg-clip-text">
                    15+
                  </div>
                  <div className="text-gray-600 mt-2 font-medium">Clients Across Countries</div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg opacity-0 sm:col-span-2 lg:col-span-1">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] text-transparent bg-clip-text">
                    14+
                  </div>
                  <div className="text-gray-600 mt-2 font-medium">Years of Experience</div>
                </div>
              </div>

              {/* Redefining Section */}
              <div 
                ref={redefiningSectionRef}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg mt-12 opacity-0"
              >
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Redefining the digital
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">+</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Dive into compelling narratives set in a dystopian future.
                </p>
              </div>
            </div>

            {/* Right Content - Robot */}
            <div className="relative flex justify-center lg:justify-end">
              <div 
                ref={robotRef}
                className="relative w-full max-w-lg opacity-0"
              >
                {/* Background gradient effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3FD7F1]/20 to-[#1B80D5]/20 rounded-full blur-3xl opacity-60"></div>
                
                {/* Robot Image */}
                <div className="relative z-10">
                  <Image
                    src="/images/aboutrobot.png"
                    alt="AI Robot with VR headset"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-[#3FD7F1] rounded-full animate-bounce opacity-60"></div>
                <div className="absolute bottom-20 left-10 w-3 h-3 bg-[#1B80D5] rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-1/2 left-5 w-2 h-2 bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] rounded-full animate-ping opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About 