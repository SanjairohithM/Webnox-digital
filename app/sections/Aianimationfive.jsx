"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}
  // Centered Use Cases panel matching the provided image
const Aianimationfive = () => {
    const sectionRef = useRef(null)
    const panelRef = useRef(null)
    const itemsRef = useRef([])
  
    const useCases = [
      " We Listen Before We Build",
      " Tech Meets Clarity",
      " Built for Growth, Not Just Delivery",
     
      " Smart, Scalable, Sustainable",
      "Real People. Real Support.",
    ]
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.set([panelRef.current, ...itemsRef.current.filter(Boolean)], { opacity: 0, y: 30 })
        const tl = gsap.timeline({
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        })
        tl.to(panelRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(itemsRef.current.filter(Boolean), {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.35
          }, "-=0.1")
      }, sectionRef)
      return () => ctx.revert()
    }, [])
  
    return (
      <section ref={sectionRef} className="py-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="relative w-full max-w-4xl flex items-center justify-center">
            {/* Centered background image */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <div className="relative w-[900px] max-w-[92vw] h-[520px]">
                <Image src="/images/3d5.webp" alt="Use Cases Background" fill className="object-contain " priority={false} />
              </div>
            </div>
  
         
  
            {/* Main gradient panel */}
            <div ref={panelRef} className="relative w-full max-w-3xl rounded-2xl p-8 sm:p-10 ">
              <h3 className="text-[#2b2b2b] text-5xl  font-bold text-center mb-6">Why Webnox?</h3>
              <div className=" p-4 sm:p-6">
                <ul className="">
                  {useCases.map((item, idx) => (
                    <li
                      key={idx}
                      ref={(el) => (itemsRef.current[idx] = el)}
                      className="w-full grid grid-cols-[0.25fr_auto_1fr] items-center py-3 sm:py-4"
                    >
                      <span className="justify-self-end text-[#2b2b2b] text-sm sm:text-base font-semibold tabular-nums w-10 text-right">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span aria-hidden className="mx-4 h-[2px] w-10 sm:w-16 bg-[#2b2b2b]/30"></span>
                      <span className="justify-self-start text-[#2b2b2b] text-base sm:text-lg font-bold">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Aianimationfive;