"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { View } from "@react-three/drei"
import { CarIdelScene } from "@/Three/Scenes/Car"
import Sphere from "@/Three/Models/Sphere"
import { Float } from "@react-three/drei"
import Robot from "@/Three/Models/Robot"
import { gsap } from "gsap"

export default function Hero() {
  const robotRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)
  const backgroundCircleRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    // Set initial states
    gsap.set([robotRef.current, headingRef.current, paragraphRef.current, buttonRef.current], {
      opacity: 0,
      y: 50
    })
    
    gsap.set(backgroundCircleRef.current, {
      opacity: 0,
      scale: 0.8
    })

    gsap.set(headerRef.current, {
      opacity: 0,
      y: -30
    })

    // Create timeline for entrance animations
    const tl = gsap.timeline()

    // Header animation
    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.out"
    })

    // Background circle animation
    tl.to(backgroundCircleRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.8,
      ease: "power2.inOut"
    }, "-=0.8")

    // Robot animation
    tl.to(robotRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=1.2")

    // Text animations with stagger
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.out"
    }, "-=0.6")
    
    tl.to(paragraphRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.out"
    }, "-=0.8")
    
    tl.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.out"
    }, "-=0.8")

    // Add continuous floating animation for robot
    gsap.to(robotRef.current, {
      y: "+=10",
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    })

  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white overflow-hidden relative">
        <View className="w-[100%] h-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
            {/* <CarIdelScene /> */}
            <Float
              speed={2}
              rotationIntensity={0}
              floatIntensity={2}
              floatingRange={[0, 0.15]}
            >
              <Sphere position={[-1.9,.5,0]} />
            </Float>

            <Float
              speed={2}
              rotationIntensity={0}
              floatIntensity={2}
              floatingRange={[0, 0.15]}
            >
              <Sphere position={[1.9,-.5,0]} />
            </Float>
        </View>
    

      {/* Header */}
      <header ref={headerRef} className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="flex">
          <Image src="/webnox-logo.png" alt="Webnox Logo" width={180} height={50} className="object-contain" />
        </div>

        <nav className="hidden md:flex items-center max-w-[45rem] w-full gap-8  px-[3rem] py-[1rem] rounded-full border border-gray-400 justify-between backdrop-filter backdrop-blur-lg bg-opacity-30 ">
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            About
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            Solutions
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            Industries
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            Expertise
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            AI
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="md:hidden rounded-full p-2 hover:bg-white/20 cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20">
            <Menu className="h-6 w-6 text-black" />
          </button>
          <Link
            href="#"
            className="hidden md:block bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Let's talk
          </Link>
        </div>
      </header>

      {/* Hero Section */}

      <section className="container mx-auto px-4 pt-12 pb-24 text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-8 relative flex justify-center items-center">
          <div 
            ref={backgroundCircleRef}
            className="absolute left-1/2 top-[115%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full -z-10 bg-gradient-to-b from-[#2acbec]/70 via-white/10 to-white/10  shadow-[inset_0px_0.91px_43.29px_0px_#F9F9F9] backdrop-blur-0"
          ></div>
          {/* <Image src="/robot.png" alt="AI Robot" width={400} height={400} className="mx-auto relative" /> */}
          <div ref={robotRef}>
            <Robot />
          </div>
        </div>

        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-5xl mx-auto text-gray-800"
        >
        We Build. We Scale. We Transform. -<span className="text-[#2acbec]"> Lead the Future
        </span>
        </h1>

        <p 
          ref={paragraphRef}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 "
        >
        Webnox Digital is a leading software development company specializing in AI-powered solutions and business automation, and end-to-end digital transformation. We help organisations to streamline operations, improve efficiency, and scale faster through intelligent 
        </p>
        <button 
          ref={buttonRef}
          className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
        >
        Let's Build Your AI Solution
        </button>
    
      </section>
    </main>
  )
}