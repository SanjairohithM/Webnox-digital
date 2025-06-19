"use client";
import { MisssionRobot } from "@/Three/Models/MisssionRobot";
import { ViewCanvas } from "@/Three/ViewCanvas";
import { Environment, View } from "@react-three/drei";
import { Bot } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import OnScrollRobot from "./Components/OnScrollRobot";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MainRobo } from "@/Three/Models/MainRobo";
import { Canvas } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const robotRef = useRef(null);
  const mainRef = useRef(null);
  const stickyRef = useRef(null);
  const miniRobotRef = useRef(null);
  const miniRobotContainerRef = useRef(null);
  const contentRefs = {
    headlines: useRef(null),
    strategy: useRef(null),
    mission: useRef(null),
    canvas: useRef(null)
  };

  // State for robot target rotation
  const [robotRotation, setRobotRotation] = useState([
    0,
    -Math.PI / 2 + 0.8,
    0,
  ]);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: stickyRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: false,
      }
    });

    // Initial state setup
    gsap.set(miniRobotContainerRef.current, {
      position: "relative",
      width: "192px",
      height: "68px",
      borderRadius: "9999px",
      left: "auto",
      top: "auto",
      transform: "none",
      zIndex: 1
    });

    gsap.set(miniRobotRef.current, {
      position: "relative",
      width: "61px",
      height: "80px",
      transform: "rotate(-33.83deg)",
      left: "1rem",
      top: "auto"
    });

    // Initial fade in of all elements together
    timeline.from([
      contentRefs.headlines.current.children,
      contentRefs.strategy.current,
      contentRefs.mission.current,
      contentRefs.canvas.current
    ], {
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power3.out"
    });

    // Stage 1: Fade out everything except mini robot container
    const smarterText = contentRefs.headlines.current.querySelector('.smarter-text');
    timeline.to([
      ...Array.from(contentRefs.headlines.current.children).filter(
        child => !child.contains(miniRobotContainerRef.current)
      ),
      contentRefs.strategy.current,
      contentRefs.mission.current,
      contentRefs.canvas.current,
      smarterText
    ], {
      opacity: 0,
      y: -50,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => {
        gsap.set([
          contentRefs.strategy.current,
          contentRefs.mission.current,
          contentRefs.canvas.current,
          smarterText
        ], { visibility: "hidden" });
      }
    });

    // Stage 2: Position the container fixed and move robot to center
    timeline.to([miniRobotContainerRef.current, miniRobotRef.current], {
      duration: 0.5,
      ease: "power2.inOut",
      onStart: () => {
        gsap.set(miniRobotContainerRef.current, {
          position: "fixed",
          zIndex: 50
        });
      },
      onReverseComplete: () => {
        gsap.set([
          contentRefs.strategy.current,
          contentRefs.mission.current,
          contentRefs.canvas.current,
          smarterText
        ], {
          visibility: "visible",
          opacity: 1,
          y: 0
        });
        gsap.set(miniRobotContainerRef.current, {
          position: "relative",
          zIndex: 1
        });
      }
    });

    // Stage 3: Expand container and scale robot simultaneously
    const expandTimeline = gsap.timeline();

    expandTimeline.to(miniRobotContainerRef.current, {
      width: "120vw",
      height: "120vh",
      top: "-25vh",
      left: "-10vw",
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
          boxSizing: "border-box"
        });
      }
    });

    expandTimeline.to(miniRobotRef.current, {
      scale: 4.5,
      rotation: 0,
      position: "absolute",
      left: "calc(50% - 10vw)",
      top: "calc(50% - 25vh)",
      xPercent: -50,
      yPercent: -50,
      duration: 0.8,
      ease: "power2.inOut"
    }, "<");

    timeline.add(expandTimeline);

    // Stage 4: Move robot up and show text
    const finalStage = gsap.timeline();

    // Add the final text elements
    const finalTextContainer = document.createElement('div');
    finalTextContainer.className = 'final-text-container absolute w-full text-center';
    finalTextContainer.innerHTML = `
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
        Fueling progress through scalable &<br/>actionable solutions
      </h1>
      <p class="text-white/80 text-lg max-w-3xl mx-auto px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe mattis,
        pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorpe mattis, pulvinar dapibus leo.
      </p>
    `;

    // Add the solutions text containers
    const solutionsContainer = document.createElement('div');
    solutionsContainer.className = 'solutions-text-container absolute w-full';
    solutionsContainer.innerHTML = `
      <div class="flex items-center justify-center gap-[15vw]">
        <h1 class="our-text text-[6vw] font-bold bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] text-transparent bg-clip-text">OUR</h1>
        <h1 class="solutions-text text-[6vw] font-bold bg-gradient-to-r from-[#3FD7F1] to-[#1B80D5] text-transparent bg-clip-text">SOLUTIONS</h1>
      </div>
    `;

    // Insert the containers
    miniRobotContainerRef.current.appendChild(finalTextContainer);
    miniRobotContainerRef.current.appendChild(solutionsContainer);

    // Set initial states
    gsap.set(finalTextContainer, {
      opacity: 0,
      y: 50,
      position: 'absolute',
      bottom: '20%',
      left: '45%',
      xPercent: -50,
      zIndex: 60
    });

    gsap.set(solutionsContainer, {
      opacity: 0,
      position: 'absolute',
      top: '35%',
      left: '50%',
      xPercent: -50,
      yPercent: -50,
      zIndex: 60
    });

    // Move robot up and fade in text
    finalStage.to(miniRobotRef.current, {
      top: "calc(30%)",
      duration: 0.8,
      ease: "power2.inOut"
    });

    finalStage.to(finalTextContainer, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    timeline.add(finalStage);

    // Stage 5: Final transition to solutions text
    const solutionsStage = gsap.timeline();

    // Fade out background and description text
    solutionsStage.to(miniRobotContainerRef.current, {
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      duration: 0.6
    });

    solutionsStage.to(finalTextContainer, {
      opacity: 0,
      y: -50,
      duration: 0.4
    }, "<");

    // Fade in and animate solutions text
    solutionsStage.fromTo('.solutions-text-container',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6
      }
    );

    timeline.add(solutionsStage);

    return () => {
      // Cleanup
      timeline.kill();
      if (finalTextContainer && finalTextContainer.parentNode) {
        finalTextContainer.parentNode.removeChild(finalTextContainer);
      }
      if (solutionsContainer && solutionsContainer.parentNode) {
        solutionsContainer.parentNode.removeChild(solutionsContainer);
      }
    };
  }, []);

  useEffect(() => {
    function handleMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const nx = (x / width) * 2 - 1;
      const ny = (y / height) * 2 - 1;
      const rotY = -Math.PI / 2 + 0.8 + nx * 0.1;
      const rotX = ny * 0.1;
      setRobotRotation([rotX, rotY, 0]);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={mainRef} className="relative w-full">
      <div
        ref={stickyRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <main className="bg-gradient-to-bl from-white via-[#e0f8ff] to-[#e8e0ff] h-full w-full">
          <div className="pl-[10rem] h-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
              {/* Left Content */}
              <div className="space-y-12">
                {/* Main Headline */}
                <div ref={contentRefs.headlines} className="space-y-4">
                  <div className="flex items-center gap-4 flex-wrap mb-5">
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-[511] text-gray-800 tracking-tight">
                      AI-Driven Innovation for a
                    </h1>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap mb-5">
                    <div
                      ref={miniRobotContainerRef}
                      className="mini-robot_container bg-gradient-to-b from-[#3FD7F1] to-[#1B80D5] overflow-hidden"
                      style={{ borderRadius: '9999px' }}
                    >
                      <Image
                        ref={miniRobotRef}
                        src="/images/robot.png"
                        alt="Robot icon"
                        className="w-[61px] h-[80px] transform rotate-[-33.83deg]"
                        style={{
                          left: '1rem'
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
                  <div ref={contentRefs.strategy} className="relative space-y-4 bg-[#2ACBEC]/20 min-h-[20rem] rounded-4xl flex flex-col justify-center p-4">
                    <Image
                      src="/images/robot1.png"
                      alt="Robot background"
                      className="absolute w-full h-full object-cover"
                      width={1000}
                      height={1000}
                    />
                    <h1 className="text-xl font-extrabold text-black text-right pr-4">
                      Approach
                    </h1>
                    <div className="space-y-2 text-gray-700 text-right pr-4">
                      <p>Innovation meets precision in everything we do. We blend creativity and code to build digital success stories.Think global</p>

                    </div>
                  </div>

                  {/* Mission Section */}
                  <div ref={contentRefs.mission} className="relative space-y-4 bg-[#2ACBEC]/20 min-h-[20rem] rounded-4xl flex flex-col justify-center p-4 overflow-hidden">
                    <Image
                      src="/images/robot2.png"
                      alt="Robot background"
                      className="absolute w-full h-full object-cover"
                      width={1000}
                      height={1000}
                    />
                    <h2 className="text-xl font-extrabold text-black pl-4">
                      Our Mission
                    </h2>
                    <div className="space-y-2 text-gray-700 pl-4">
                      <p>
                        To empower visionary businesses with transformative digital power.  We’re here to turn your global ambition into a digital reality.
                      </p>

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
                      background:
                        "radial-gradient(circle, #2ACBEC 0%, #ffffff 100%)",
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
                      background:
                        "radial-gradient(circle, #EC2A2A 0%, #ffffff 100%)",
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
  );
}
