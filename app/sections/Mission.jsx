"use client"
import { MisssionRobot } from "@/Three/Models/MisssionRobot"
import { Environment } from "@react-three/drei"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Canvas } from "@react-three/fiber"

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    title: "BRANDING",
    description: "We build unique brand identities that are bold, memorable, and aligned with your business vision to leave a lasting impression.",
    image: "/images/BRANDING.webp"
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    description: "From MVPs to enterprise-grade systems, we build scalable, secure, and efficient software tailored to your goals and growth.",
    image: "/images/Software Development.webp"
  },
  {
    title: "DIGITAL MARKETING",
    description: "We create data-driven marketing strategies to reach, engage, and convert your ideal audience across all digital touchpoints.",
    image: "/images/Digital Marketing.webp"
  },
  {
    title: "IOS & ANDROID APP DEVELOPMENT",
    description: "We develop high-performance mobile apps with seamless UI, built to grow with your business across Android, iOS, and hybrid platforms.",
    image: "/images/ECommerce Store Development.webp"
  },
  {
    title: "CUSTOM WEB SOLUTIONS",
    description: "We craft fast, scalable, and visually stunning websites that reflect your brand identity, drive results, and work seamlessly across all devices.",
    image: "/images/Web Development.webp"
  },
  {
    title: "DATA & ANALYSIS",
    description: "We turn your raw data into actionable insights, helping you make smarter business decisions backed by real-time analytics.",
    image: "/images/DATA & ANALYSIS.webp"
  },
  {
    title: "UI UX DESIGN",
    description: "We create intuitive and delightful interfaces that engage users, simplify navigation, and enhance user retention for your product..",
    image: "/images/ui ux design.webp"
  },
  {
    title: "IT SUPPORT",
    description: "We provide proactive, 24/7 support that ensures your systems run smoothly, stay secure, and perform at peak efficiency.",
    image: "/images/IT SUPPORT.webp"
  },
  {
    title: "WEB-BASED 3D VISUALIZATION",
    description: "Captivate your audience with stunning 3D web experiences. Sleek, interactive designs that set your brand apart",
    image: "/images/3dimagesolution.webp"
  },
  
];

export default function Component() {
  const robotRef = useRef(null)
  const mainRef = useRef(null)
  const stickyRef = useRef(null)
  const miniRobotRef = useRef(null)
  const miniRobotContainerRef = useRef(null)
  const contentRefs = {
    headlines: useRef(null),
    strategy: useRef(null),
    mission: useRef(null),
    canvas: useRef(null),
  }

  // State for robot target rotation
  const [robotRotation, setRobotRotation] = useState([0, -Math.PI / 2 + 0.8, 0])

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: stickyRef.current,
        start: "top top",
        end: "+=800%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: false,
      },
    })

    // Initial state setup
    gsap.set(miniRobotContainerRef.current, {
      position: "relative",
      width: "192px",
      height: "68px",
      borderRadius: "9999px",
      left: "auto",
      top: "auto",
      transform: "none",
      zIndex: 1,
    })

    gsap.set(miniRobotRef.current, {
      position: "relative",
      width: "61px",
      height: "80px",
      transform: "rotate(-33.83deg)",
      left: "1rem",
      top: "auto",
    })

    // Stage 1: First show the robot/canvas - coming from right
    timeline.from(contentRefs.canvas.current, {
      opacity: 0,
      x: 100,
      y: 50,
      duration: 0.6,
      ease: "power3.out",
    })

    // Stage 2: Then show the first part of text
    timeline.from(
      contentRefs.headlines.current.children[0],
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.1",
    )
    
    // Stage 3: Then show the second part of text from left with fade
    timeline.from(
      contentRefs.headlines.current.children[1],
      {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: "power2.out",
      },
      "+=0.3",
    )

    // Stage 4: Then show the strategy and mission cards
    timeline.from(
      [contentRefs.strategy.current, contentRefs.mission.current],
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
      },
      "+=0.2",
    )

    // Stage 5: Fade out everything except mini robot container
    const smarterText = contentRefs.headlines.current.querySelector(".smarter-text")
    const firstHeadline = contentRefs.headlines.current.children[0]
    timeline.to(
      [
        firstHeadline,
        contentRefs.strategy.current,
        contentRefs.mission.current,
        contentRefs.canvas.current,
        smarterText,
      ],
      {
        opacity: 0,
        y: -50,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(
            [contentRefs.strategy.current, contentRefs.mission.current, contentRefs.canvas.current, smarterText, firstHeadline],
            { visibility: "hidden" },
          )
        },
      },
    )

    // Stage 2: Position the container fixed and move robot to center
    timeline.to([miniRobotContainerRef.current, miniRobotRef.current], {
      duration: 0.5,
      ease: "power2.inOut",
      onStart: () => {
        gsap.set(miniRobotContainerRef.current, {
          position: "fixed",
          zIndex: 50,
        })
      },
      onReverseComplete: () => {
        gsap.set([contentRefs.strategy.current, contentRefs.mission.current, contentRefs.canvas.current, smarterText, firstHeadline], {
          visibility: "visible",
          opacity: 1,
          y: 0,
        })
        gsap.set(miniRobotContainerRef.current, {
          position: "relative",
          zIndex: 1,
        })
      },
    })

    // Stage 3: Expand container and scale robot simultaneously
    const expandTimeline = gsap.timeline()

    expandTimeline.to(miniRobotContainerRef.current, {
      width: "200vw",
      height: "200vh",
      top: "-80vh",
      left: "-50vw",
      xPercent: 0,
      yPercent: 0,
      margin: 0,
      padding: 0,
      borderRadius: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onStart: () => {
        gsap.set(miniRobotContainerRef.current, {
          overflow: "hidden",
          boxSizing: "border-box",
        })
      },
    })

    expandTimeline.to(
      miniRobotRef.current,
      {
        scale: 4.5,
        rotation: 0,
        position: "absolute",
        left: "calc(50% - 10vw)",
        top: "calc(50% + 15vh)",
        xPercent: -50,
        yPercent: -50,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<",
    )

    timeline.add(expandTimeline)

    // Stage 4: Move robot up and show text
    const finalStage = gsap.timeline()

    // Add the final text elements
    const finalTextContainer = document.createElement("div")
    finalTextContainer.className = "final-text-container absolute w-full text-center flex items-center justify-center font-sans"
    finalTextContainer.innerHTML = `
      <div class="w-full max-w-6xl mx-auto px-4">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-4 md:mb-6 text-center leading-tight">
          <span class="whitespace-nowrap lg:whitespace-normal">Transforming Businesses Through</span>
          <span class="whitespace-nowrap">&nbsp;& Intelligent Automation</span>
        </h1>
        <p class="text-white/80 text-base md:text-lg lg:text-xl mx-auto text-center leading-relaxed max-w-4xl">
          At Webnox Digital, we harness the power of AI, cloud, and automation to help businesses operate smarter, scale faster, and innovate at speed. Our agile-driven software solutions are designed to streamline operations, enhance customer experiences, and unlock new digital value.
        </p>
      </div>
    `

    // Add the solutions text containers
    const solutionsContainer = document.createElement("div")
    solutionsContainer.className = "solutions-text-container absolute w-full"
    solutionsContainer.innerHTML = `
      <div class="flex items-center justify-center gap-[18vw] ml-[-12vw]">
        <h1 class="our-text text-[6vw] font-bold bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] text-transparent bg-clip-text">OUR</h1>
        <h1 class="solutions-text text-[6vw] font-bold bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] text-transparent bg-clip-text">SOLUTIONS</h1>
      </div>
    `

    // Add the solutions grid container
    const solutionsGridContainer = document.createElement("div")
    solutionsGridContainer.className = "solutions-grid-container absolute w-full h-full"
    solutionsGridContainer.innerHTML = `
      <style>
        .solutions-container {
          max-width: 1200px;
        }
        @media (min-width: 1280px) and (max-width: 1535px) {
          .solutions-container {
            max-width: 1100px;
          }
          .solutions-grid-container {
            background: transparent !important;
          }
        }
        @media (min-width: 1536px) {
          .solutions-container {
            max-width: 1600px;
          }
        }
      </style>
              <div class="w-full h-full bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white pt-28 pb-16 px-8 overflow-y-auto flex items-center justify-center 2xl:pt-32">
        <div class="w-full mx-auto solutions-container px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-16 md:gap-x-14 lg:gap-x-16 xl:gap-x-24 2xl:gap-x-12 gap-y-20 md:gap-y-22 lg:gap-y-24 xl:gap-y-32 2xl:gap-y-28 w-full px-6 ml-[-15rem]">
            ${solutions.map((solution, index) => `
              <div class="solution-card flex items-center gap-1 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-6 group opacity-0 w-full min-w-[280px] md:min-w-[320px] lg:min-w-[360px] xl:min-w-[380px] 2xl:min-w-[500px] max-w-[600px]" data-index="${index}">
                <div class="w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] xl:w-[110px] xl:h-[110px] 2xl:w-[140px] 2xl:h-[140px] relative flex-shrink-0 transition-all duration-300 flex items-center justify-center">
                  <img src="${solution.image}" alt="${solution.title}" class="w-full h-full object-contain" />
                </div>
                <div class="flex-1 min-w-0 w-full text-center">
                  <h3 class="text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl font-bold text-gray-800 mb-1 md:mb-2 lg:mb-2 xl:mb-3 2xl:mb-4 leading-tight">${solution.title}</h3>
                  <p class="hidden 2xl:block text-gray-600 text-base leading-relaxed">${solution.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `

    // Insert the containers
    miniRobotContainerRef.current.appendChild(finalTextContainer)
    miniRobotContainerRef.current.appendChild(solutionsContainer)
    miniRobotContainerRef.current.appendChild(solutionsGridContainer)

    // Set initial states
    gsap.set(finalTextContainer, {
      opacity: 0,
      y: 50,
      position: "absolute",
      top: "65%",
      left: "45%",
      xPercent: -50,
      width: "100%",
      zIndex: 60,
    })

    gsap.set(solutionsContainer, {
      opacity: 0,
      position: "absolute",
      top: "45%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      zIndex: 60,
      width: "100%",
    })

    gsap.set(solutionsGridContainer, {
      opacity: 0,
      position: "absolute",
      top: "0%",
      left: "0%",
      width: "100%",
      height: "100%",
      zIndex: 50,
    })

    gsap.set(".solution-card", {
      opacity: 0,
      y: 50,
    })

    // Move robot up and fade in text
    finalStage.to(miniRobotRef.current, {
      top: "calc(35%)",
      duration: 0.8,
      ease: "power2.inOut",
    })

    finalStage.to(
      finalTextContainer,
      {
        opacity: 1,
        y: 0,
        top: "50%",
        left: "45%",
        xPercent: -50,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )

    timeline.add(finalStage)

    // Add the solutions stage with pause
    const solutionsStage = gsap.timeline()

    // First fade out the text as it moves up
    solutionsStage.to(finalTextContainer, {
      y: -50,
      top: "25%",
      left: "45%",
      xPercent: -50,
      duration: 0.8,
      ease: "power2.inOut",
    })

    solutionsStage.to(
      finalTextContainer,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.3",
    )

    // Move robot to position and fade out background
    solutionsStage.to(
      miniRobotRef.current,
      {
        top: "calc(50% - 5vh)",
        left: "calc(50% - 15vw)",
        duration: 0.8,
        ease: "power2.inOut",
      },
      ">",
    )

    solutionsStage.to(
      miniRobotContainerRef.current,
      {
        backgroundColor: "transparent",
        backgroundImage: "none",
        duration: 0.6,
      },
      "<",
    )

    // Fade in solutions text and add pause
    solutionsStage.fromTo(
      ".solutions-text-container",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
      },
    )

    // Add a pause duration
    solutionsStage.to({}, { duration: 0.6 })

    // Add new stage: Shrink and move "OUR SOLUTIONS" text to top as title
    const shrinkTextStage = gsap.timeline()
    
    shrinkTextStage.to(".solutions-text-container", {
      scale: 0.4,
      top: "28%",
      left: "45%",
      xPercent: -50,
      duration: 0.8,
      ease: "power2.out",
    })
    
    // Animate the gap between words to become smaller
    shrinkTextStage.to(".solutions-text-container > div", {
      gap: "1vw",
      marginLeft: "0vw",
      duration: 0.8,
      ease: "power2.out",
    }, "<")

    // Fade out robot completely during title transformation
    shrinkTextStage.to(miniRobotRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.6,
      ease: "power2.out",
    }, "<")

    // Fade in solutions grid background
    shrinkTextStage.to(solutionsGridContainer, {
      opacity: 1,
      duration: 0.15,
      ease: "power2.out",
    }, "-=0.2")

    // Animate solution cards in with stagger
    shrinkTextStage.to(".solution-card", {
      opacity: 1,
      y: 0,
      duration: 0.25,
      stagger: {
        each: 0.05,
        grid: [3, 3],
        from: "start"
      },
      ease: "power3.out",
    }, "-=0.1")

    // Add another pause to show the final state
    shrinkTextStage.to({}, { duration: 1.0 })

    // Add stages to main timeline
    timeline.add(solutionsStage)
    timeline.add(shrinkTextStage)

    return () => {
      // Cleanup
      timeline.kill()
      if (finalTextContainer && finalTextContainer.parentNode) {
        finalTextContainer.parentNode.removeChild(finalTextContainer)
      }
      if (solutionsContainer && solutionsContainer.parentNode) {
        solutionsContainer.parentNode.removeChild(solutionsContainer)
      }
      if (solutionsGridContainer && solutionsGridContainer.parentNode) {
        solutionsGridContainer.parentNode.removeChild(solutionsGridContainer)
      }
    }
  }, [])

  useEffect(() => {
    function handleMouseMove(e) {
      const x = e.clientX
      const y = e.clientY
      const width = window.innerWidth
      const height = window.innerHeight

      const nx = (x / width) * 2 - 1
      const ny = (y / height) * 2 - 1
      const rotY = -Math.PI / 2 + 0.8 + nx * 0.1
      const rotX = ny * 0.1
      setRobotRotation([rotX, rotY, 0])
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={mainRef} className="relative w-full">
      <div ref={stickyRef} className="relative h-screen w-full overflow-hidden">
        <main className="bg-gradient-to-bl from-white via-[#e0f8ff] to-[#e8e0ff] h-full w-full">
          <div className="pl-[10rem] h-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
              {/* Left Content */}
              <div className="space-y-12">
                {/* Main Headline */}
                <div ref={contentRefs.headlines} className="space-y-4">
                  <div className="flex items-center gap-4 flex-wrap mb-5 pt-2">
                    <h1 className="text-5xl md:text-5xl lg:text-8xl font-[511] text-gray-800 tracking-tight">
                      AI-Driven Innovation for a
                    </h1>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap mb-5">
                    <div
                      ref={miniRobotContainerRef}
                      className="mini-robot_container bg-gradient-to-b from-[#3FD7F1] to-[#1B80D5] overflow-hidden"
                      style={{ borderRadius: "9999px" }}
                    >
                      <Image
                        ref={miniRobotRef}
                        src="/images/robot.webp"
                        alt="Robot icon"
                        className="w-[61px] h-[80px] transform rotate-[-33.83deg]"
                        style={{
                          left: "1rem",
                        }}
                        width={200}
                        height={200}
                      />
                    </div>

                    <h1 className="smarter-text text-5xl md:text-6xl lg:text-8xl font-[511] text-gray-800 tracking-tight">
                      Digitally Connected World
                    </h1>
                  </div>

                  {/* <h1 className="text-5xl md:text-6xl lg:text-8xl font-[511] text-gray-800 tracking-tight ml-[3rem]">
                    AI SOLUTIONS
                  </h1> */}
                </div>

                {/* Content Sections */}
                <div className="grid md:grid-cols-2 gap-8 mt-16">
                  {/* Strategy Section */}
                  <div
                    ref={contentRefs.strategy}
                    className="relative space-y-4 bg-[#2ACBEC]/20 min-h-[24rem] rounded-4xl flex flex-col justify-center p-8"
                  >
                    <Image
                      src="/images/robot1.webp"
                      alt="Robot background"
                      className="absolute inset-0 w-full h-full object-cover rounded-4xl"
                      width={1000}
                      height={1000}
                    />
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <h1 className="text-2xl font-extrabold text-black text-right pr-4 mb-6">Approach</h1>
                      <div className="text-gray-700 text-right pr-4">
                        <p className="text-lg">
                          Innovation meets precision in everything we do. We blend creativity and code to build digital
                          success stories. Think global
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mission Section */}
                  <div
                    ref={contentRefs.mission}
                    className="relative space-y-4 bg-[#2ACBEC]/20 min-h-[24rem] rounded-4xl flex flex-col justify-center p-8 overflow-hidden"
                  >
                    <Image
                      src="/images/robot2.webp"
                      alt="Robot background"
                      className="absolute inset-0 w-full h-full object-cover rounded-4xl"
                      width={1000}
                      height={1000}
                    />
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <h2 className="text-2xl font-extrabold text-black pl-4 mb-6">Our Mission</h2>
                      <div className="text-gray-700 pl-4">
                        <p className="text-lg">
                          To empower visionary businesses with transformative digital power. We're here to turn your
                          global ambition into a digital reality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Robot Image */}
              <div ref={contentRefs.canvas} className="relative w-full max-w-lg h-full">
                <div className="relative aspect-square bg-gradient-to-br overflow-hidden h-full">
                  {/* Gradient Circle Behind Robot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "39%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "70%",
                      height: "70%",
                      borderRadius: "50%",
                      pointerEvents: "none",
                      opacity: 0.5,
                      background: "radial-gradient(circle, #2ACBEC 0%, #ffffff 100%)",
                      zIndex: 0,
                      filter: "blur(24px)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      right: "-10%",
                      bottom: "-40%",
                      width: "60%",
                      height: "60%",
                      borderRadius: "50%",
                      pointerEvents: "none",
                      opacity: 0.3,
                      background: "radial-gradient(circle, #EC2A2A 0%, #ffffff 100%)",
                      zIndex: 0,
                      filter: "blur(50px)",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-end h-full w-full z-0">
                    <Canvas
                      camera={{
                        fov: 30,
                        position: [0, 0, 5],
                      }}
                    >
                      <MisssionRobot
                        rotation={[0, -Math.PI / 2 + 0.8, 0]}
                        targetRotation={robotRotation}
                        scale={1.3}
                        position={[-0.3, -0.5, 0]}
                      />
                      <ambientLight intensity={1} />
                      <directionalLight position={[10, 10, 10]} intensity={1} />
                      <Environment preset="city" />
                    </Canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
