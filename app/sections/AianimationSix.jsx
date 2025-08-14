"use client"

import React from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useEffect, useRef } from "react"
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const AianimationSix = () => {
    const sectionRef = useRef(null)
    const panelRef = useRef(null)
    const itemsRef = useRef([])

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

  const tools = [
    {
      name: "Zapier",
      img: "/images/L2.webp",
      imgClass: "h-14 md:h-16",
      description:
        "Zapier is a platform that connects your tools into automated workflows.",
    },
    {
      name: "ChatGPT",
      img: "/images/L3.webp",
      imgClass: "h-14 md:h-16",
      description:
        "OpenAI’s AI chat model used for smart, natural conversations and workflow logic.",
    },
    {
      name: "Gemini",
      img: "/images/L1.webp",
      imgClass: "h-14 md:h-16",
      description:
        "Google’s AI model we leverage as a capable complement and alternative to chat models.",
    },
    {
      name: "OpenAI",
      img: "/images/L5.webp",
      imgClass: "h-14 md:h-16",
      description:
        "We build with the OpenAI platform to power reliable, production-grade automations.",
    },
    {
      name: "Make",
      img: "/images/L4.webp",
      imgClass: "h-14 md:h-16",
      description:
        "Make.com is a Zapier competitor offering a visual canvas for larger, complex workflows.",
    },
    {
      name: "Python",
      img: "/images/L6.webp",
      imgClass: "h-14 md:h-16",
      description:
        "We also use Python and JavaScript for custom scripts to automate complex processes.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          ref={panelRef}
          className="text-center text-[22px] sm:text-2xl md:text-3xl font-medium tracking-tight text-black/90"
        >
          Our Expertise Lies In Advanced AI Automation Tools For Seamless Operations.
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex flex-col items-center text-center"
            >
              <div
                className="relative mb-3 w-[170px] h-[60px] sm:w-[180px] sm:h-[64px] md:w-[200px] md:h-[70px]"
              >
                <Image
                  src={tool.img}
                  alt={tool.name}
                  fill
                  priority={false}
                  sizes="(max-width: 640px) 170px, (max-width: 768px) 180px, 200px"
                  className="object-contain"
                />
              </div>
              <p className="text-[16px] leading-relaxed text-gray-900 max-w-[280px]">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AianimationSix

