"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { View } from "@react-three/drei"
import { CarIdelScene } from "@/Three/Scenes/Car"
import Sphere from "@/Three/Models/Sphere"
import { Float } from "@react-three/drei"
import Robot from "@/Three/Models/Robot"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const robotRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)
  const textRef = useRef(null)
  const shimmerRef = useRef(null)
  const shadowRef = useRef(null)
  const backgroundCircleRef = useRef(null)
  const sphere1Ref = useRef(null)
  const sphere2Ref = useRef(null)
  const heroSectionRef = useRef(null)
  const mainContainerRef = useRef(null)

  useEffect(() => {
    // Check if all required refs are available and run animations
    const checkRefsAndAnimate = () => {
      if (!robotRef.current || !headingRef.current || !paragraphRef.current || 
          !buttonRef.current || !textRef.current || !shimmerRef.current || 
          !shadowRef.current || !backgroundCircleRef.current ||
          !heroSectionRef.current || !mainContainerRef.current) {
        setTimeout(checkRefsAndAnimate, 100);
        return;
      }

      // Set initial states for DOM elements (not Three.js elements)
      gsap.set([robotRef.current, backgroundCircleRef.current], {
        opacity: 0,
        scale: 0.5,
        y: 30
      });

      gsap.set(headingRef.current, {
      opacity: 0,
      y: 50
    });

    gsap.set([buttonRef.current, textRef.current], {
      opacity: 0,
      y: 30,
      scale: 0.95
    });

    // Safety fallback - ensure button becomes visible after 5 seconds regardless of animation state
    setTimeout(() => {
      if (buttonRef.current && textRef.current) {
        gsap.to([buttonRef.current, textRef.current], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    }, 5000);

      gsap.set(paragraphRef.current, {
      opacity: 0,
      y: 30
    });

    gsap.set([shimmerRef.current, shadowRef.current], {
      opacity: 0
    });

      gsap.set(shimmerRef.current, {
        x: '-100%'
    });
    
      gsap.set(shadowRef.current, {
      scale: 0.8
    });

      // Main entrance timeline - sequence as requested
      const mainTimeline = gsap.timeline({ delay: 0.5 });

      // 1. First animate the spheres (Three.js objects - handle separately)
      mainTimeline
        .add(() => {
          // For Three.js objects, we'll animate them via their parent groups if refs are available
          if (sphere1Ref.current) {
            gsap.fromTo(sphere1Ref.current.scale, 
              { x: 0, y: 0, z: 0 },
              { x: 1, y: 1, z: 1, duration: 1.2, ease: "back.out(1.7)" }
            );
          }
          if (sphere2Ref.current) {
            gsap.fromTo(sphere2Ref.current.scale, 
              { x: 0, y: 0, z: 0 },
              { x: 1, y: 1, z: 1, duration: 1.2, ease: "back.out(1.7)", delay: 0.2 }
            );
          }
        })
        
        // 2. Then the robot and background circle
        .to(backgroundCircleRef.current, {
      opacity: 1,
      scale: 1,
          duration: 1.5,
      ease: "power2.inOut"
        }, "+=0.8")

        .to(robotRef.current, {
      opacity: 1,
          scale: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.inOut"
        }, "-=1.2")

        // 3. Then the text below
        .to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.out"
        }, "+=0.2")

        .to(paragraphRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: "power2.out"
        }, "+=0.2")

        // Button animation - simplified and more reliable
        .to([buttonRef.current, textRef.current], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.0,
      ease: "power2.out"
        }, "+=0.3")

        .to(shadowRef.current, {
      scale: 1,
      opacity: 0.3,
      duration: 0.6,
      ease: "power2.out"
        }, "-=0.3")

        .to(shimmerRef.current, {
      opacity: 1,
      duration: 0.1
    }, "-=0.2")
        
    .to(shimmerRef.current, {
      x: '100%',
      duration: 1.5,
      ease: "power2.inOut"
    })
        
    .to(shimmerRef.current, {
      opacity: 0,
      duration: 0.3
    }, "-=0.3");

      // Continuous animations after entrance
      mainTimeline.add(() => {
        // Safety check - ensure button is visible
        gsap.set([buttonRef.current, textRef.current], {
          opacity: 1,
          scale: 1,
          y: 0
        });

        // Continuous subtle pulse animation for button
        gsap.to(buttonRef.current, {
          scale: 1.02,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        });

        // Add continuous floating animation for robot
        gsap.to(robotRef.current, {
          y: "+=10",
          rotation: "+=2",
          duration: 3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        });
      });

      // Scroll-triggered zoom out effect for hero section
      ScrollTrigger.create({
        id: "hero-scroll-trigger",
        trigger: mainContainerRef.current,
        start: "top top",
        end: "top bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - (progress * 0.2); // Scale down to 80% at full scroll
          const opacity = 1 - (progress * 0.5); // Fade out to 50% opacity
          
          gsap.set(heroSectionRef.current, {
            scale: Math.max(scale, 0.8),
            opacity: Math.max(opacity, 0.5),
            y: progress * -50
          });
        }
    });

    // Button hover animations
    const handleMouseEnter = () => {
      gsap.killTweensOf([buttonRef.current, textRef.current, shadowRef.current]);
      
      const hoverTL = gsap.timeline();
      
      hoverTL.to(buttonRef.current, {
        scale: 1.05,
        y: -2,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(shadowRef.current, {
        scale: 1.1,
        opacity: 0.4,
        y: 4,
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      .to(textRef.current, {
        letterSpacing: "0.02em",
        duration: 0.3,
        ease: "power2.out"
      }, 0);

      gsap.set(shimmerRef.current, { x: '-100%', opacity: 1 });
      gsap.to(shimmerRef.current, {
        x: '100%',
        duration: 0.8,
        ease: "power2.inOut"
      });
      gsap.to(shimmerRef.current, {
        opacity: 0,
        duration: 0.2,
        delay: 0.6
      });
    };

    const handleMouseLeave = () => {
      gsap.killTweensOf([buttonRef.current, textRef.current, shadowRef.current]);
      
      const leaveTL = gsap.timeline();
      
      leaveTL.to(buttonRef.current, {
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(shadowRef.current, {
        scale: 1,
        opacity: 0.3,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      }, 0)
      .to(textRef.current, {
        letterSpacing: "0em",
        duration: 0.4,
        ease: "power2.out"
      }, 0);

      gsap.to(buttonRef.current, {
        scale: 1.02,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5
      });
    };

    const handleClick = () => {
      gsap.killTweensOf([buttonRef.current, textRef.current]);
      
      const clickTL = gsap.timeline();
      
      clickTL.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out"
      })
      .to(buttonRef.current, {
        scale: 1.03,
        duration: 0.2,
        ease: "back.out(1.7)"
      })
      .to(buttonRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });

      gsap.set(shimmerRef.current, { x: '-100%', opacity: 1 });
      gsap.to(shimmerRef.current, {
        x: '100%',
        duration: 0.6,
        ease: "power2.inOut",
        delay: 0.1
      });
      gsap.to(shimmerRef.current, {
        opacity: 0,
        duration: 0.2,
        delay: 0.5
      });
    };

    // Add button event listeners
    const button = buttonRef.current;
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

      // Store cleanup function in ref for later use
      const cleanup = () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
        // Only kill hero-specific ScrollTrigger
        ScrollTrigger.getById("hero-scroll-trigger")?.kill();
        gsap.killTweensOf([heroSectionRef.current, buttonRef.current, textRef.current, robotRef.current]);
      };

      // Return cleanup function
      return cleanup;
    };

    // Start the animation check
    const cleanup = checkRefsAndAnimate();

    // Cleanup on unmount
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  return (
    <main ref={mainContainerRef} className="min-h-screen bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white overflow-hidden relative">
        {/* Three.js Background Elements - Lower z-index */}
        <View className="w-[100%] h-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] pointer-events-none">
            {/* <CarIdelScene /> */}
            <Float
              speed={2}
              rotationIntensity={0}
              floatIntensity={2}
              floatingRange={[0, 0.15]}
            >
              <group ref={sphere1Ref}>
              <Sphere position={[-1.9,.5,0]} />
              </group>
            </Float>

            <Float
              speed={2}
              rotationIntensity={0}
              floatIntensity={2}
              floatingRange={[0, 0.15]}
            >
              <group ref={sphere2Ref}>
              <Sphere position={[1.9,-.5,0]} />
              </group>
            </Float>
        </View>

      {/* Hero Section - Lower z-index to avoid navbar conflicts */}
      <section ref={heroSectionRef} className="container mx-auto px-4 pt-32 text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-8 relative flex justify-center items-center z-10">
          <div 
            ref={backgroundCircleRef}
            className="absolute left-1/2 top-[115%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full z-[-1] bg-gradient-to-b from-[#2acbec]/70 via-white/10 to-white/10  shadow-[inset_0px_0.91px_43.29px_0px_#F9F9F9] backdrop-blur-0"
          ></div>
          {/* <Image src="/robot.png" alt="AI Robot" width={400} height={400} className="mx-auto relative" /> */}
          <div ref={robotRef} className="relative z-5">
            <Robot />
          </div>
        </div>

        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-5xl mx-auto text-gray-800 relative z-5"
        >
        We Build. We Scale. We Transform. -<span className="text-[#2acbec]"> Lead the Future
        </span>
        </h1>

        <p 
          ref={paragraphRef}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 relative z-5 font-urbanist"
        >
        Webnox Digital is a leading software development company specializing in AI-powered solutions and business automation, and end-to-end digital transformation. We help organisations to streamline operations, improve efficiency, and scale faster through intelligent 
        </p>
        <div className="relative inline-block z-5">
          {/* Shadow element */}
          <div 
            ref={shadowRef}
            className="absolute inset-0 bg-black/20 rounded-full blur-lg z-[-1]"
            style={{ transform: 'translateY(8px)' }}
          ></div>
          
          {/* Main button */}
          <button 
            ref={buttonRef}
            className="relative bg-black text-white px-12 py-5 rounded-full font-semibold text-lg md:text-xl overflow-hidden transition-colors duration-300 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-black/20 z-10"
          >
            {/* Shimmer overlay */}
            <div 
              ref={shimmerRef}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-5"
            ></div>
            
            {/* Button text */}
            <span ref={textRef} className="relative z-20 text-lg md:text-xl">
              Let's Build Your AI Solution
            </span>
          </button>
        </div>
      </section>
    </main>
  )
}