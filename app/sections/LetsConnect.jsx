"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
    import PhysicsSpheres from "./physics-spheres"

gsap.registerPlugin(ScrollTrigger)



function LetsConnect() {
  const sectionRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const inputRef = useRef(null)
  const buttonRef = useRef(null)
  const r3fContainerRef = useRef(null)
  const techIconsContainerRef = useRef(null)
  const individualTechIconsRef = useRef([])

  useGSAP(
    () => {
      const elementsToAnimate = [
        subtitleRef.current,
        titleRef.current,
        inputRef.current,
        buttonRef.current,
        r3fContainerRef.current,
      ]

      gsap.set(elementsToAnimate, { opacity: 0, y: 50 })
      gsap.set(individualTechIconsRef.current, { opacity: 0, y: 30 })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center+=100",
        once: true,
        onEnter: () => {
          gsap.to(elementsToAnimate, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          })
          gsap.to(individualTechIconsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.5,
          })
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white overflow-hidden font-urbanist"
    >
      <div
        ref={r3fContainerRef}
        className="absolute inset-0 z-0 opacity-0"
        style={{ pointerEvents: "none" }}
      >
        <PhysicsSpheres />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-xl w-full">
        <p ref={subtitleRef} className="text-lg text-gray-700 opacity-0">
          Tell About Yourself
        </p>
        <h1 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-gray-900 opacity-0 whitespace-nowrap">
          Let's Connect, What is your name?
        </h1>
        <div ref={inputRef} className="w-full max-w-md opacity-0">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 text-lg rounded-full border-2 border-black/80 focus:ring-2 focus:ring-[#4ecdc4] focus:border-[#4ecdc4] transition-shadow placeholder:text-gray-400"
            aria-label="Your Name"
          />
        </div>
        <div ref={buttonRef} className="w-full max-w-md opacity-0">
          <button
            className="w-full px-12 py-6 text-lg bg-[#4ecdc4] hover:bg-[#45b8af] text-white rounded-full transition-colors"
          >
            Next
          </button>
        </div>
      </div>

     
    </section>
  )
}

export default LetsConnect