"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ComingSoonPage() {
  const containerRef = useRef(null)
  const curtainTopRef = useRef(null)
  const curtainBottomRef = useRef(null)
  const threadRef = useRef(null)
  const contentRef = useRef(null)
  const starsRef = useRef(null)
  const particlesRef = useRef(null)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([curtainTopRef.current, curtainBottomRef.current], {
        y: 0,
      })
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 100,
      })
      gsap.set(starsRef.current, {
        opacity: 0,
      })

      // Particle system setup
      gsap.set(".particle", {
        scale: "random(0.1, 1)",
        opacity: "random(0.3, 0.8)",
      })

      // Create timeline for curtain animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            // Animate thread tension based on scroll progress
            const progress = self.progress
            gsap.to(threadRef.current, {
              scaleY: 1 + progress * 0.3,
              duration: 0.1,
            })
          },
        },
      })

      // Animate curtains pulling apart
      tl.to(curtainTopRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
      })
        .to(
          curtainBottomRef.current,
          {
            y: "100%",
            duration: 1,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          threadRef.current,
          {
            opacity: 0,
            duration: 0.5,
          },
          "-=0.5",
        )
        .to(
          starsRef.current,
          {
            opacity: 1,
            duration: 1,
          },
          "-=0.8",
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        )

      // Floating animation for stars
      gsap.to(".star", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      })

      // Particle animations
      gsap.to(".particle", {
        y: "random(-200, -400)",
        x: "random(-50, 50)",
        rotation: "random(0, 360)",
        duration: "random(8, 15)",
        repeat: -1,
        ease: "none",
        stagger: {
          amount: 5,
          from: "random",
        },
      })

      // Glowing effect for coming soon text
      gsap.to(".glow-text", {
        textShadow: "0 0 20px #60a5fa, 0 0 40px #3b82f6, 0 0 60px #1d4ed8",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Enhanced lighting effects
      gsap.to(".stage-light", {
        opacity: "random(0.2, 0.4)",
        scale: "random(0.8, 1.2)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      })

      // Floating UI elements
      gsap.to(".float-element", {
        y: "random(-10, 10)",
        rotation: "random(-2, 2)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      gsap.fromTo(".success-message", 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      )
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900"
    >
      {/* Enhanced Theater Stage Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-800/20 via-blue-900/40 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>

      {/* Enhanced Stage Lights */}
      <div className="stage-light absolute top-0 left-1/4 w-40 h-40 bg-gradient-radial from-yellow-300/40 via-yellow-200/20 to-transparent rounded-full blur-2xl"></div>
      <div className="stage-light absolute top-0 right-1/4 w-40 h-40 bg-gradient-radial from-pink-300/40 via-pink-200/20 to-transparent rounded-full blur-2xl"></div>
      <div className="stage-light absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-radial from-cyan-300/30 via-cyan-200/15 to-transparent rounded-full blur-xl"></div>

      {/* Particle System */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Stars Background */}
      <div ref={starsRef} className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="star absolute rounded-full opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: ['#ffffff', '#60a5fa', '#a78bfa', '#fbbf24'][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Theater Curtains - Enhanced */}
      <div ref={curtainTopRef} className="absolute top-0 left-0 w-full h-1/2 z-10">
        <div className="w-full h-full relative overflow-hidden" style={{background: `linear-gradient(to bottom, #2acbec, #20a8c7, #1a8ba3)`}}>
          {/* Enhanced Curtain Texture */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-1"
                style={{ 
                  top: `${i * 4}%`,
                  background: `linear-gradient(to right, transparent, rgba(42, 203, 236, 0.6), transparent)`
                }}
              ></div>
            ))}
          </div>
          {/* Velvet Texture */}
          <div className="absolute inset-0" style={{background: `linear-gradient(to bottom right, rgba(42, 203, 236, 0.3), rgba(26, 139, 163, 0.3))`}}></div>
          {/* Curtain Bottom Edge */}
          <div className="absolute bottom-0 w-full h-6 shadow-2xl" style={{background: `linear-gradient(to bottom, #1a8ba3, #156b7a)`}}></div>
          {/* Enhanced Decorative Elements */}
          <div className="absolute bottom-0 left-1/4 w-3 h-12 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-b-full shadow-lg"></div>
          <div className="absolute bottom-0 right-1/4 w-3 h-12 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-b-full shadow-lg"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-b-lg shadow-lg"></div>
        </div>
      </div>

      <div ref={curtainBottomRef} className="absolute bottom-0 left-0 w-full h-1/2 z-10">
        <div className="w-full h-full relative overflow-hidden" style={{background: `linear-gradient(to top, #2acbec, #20a8c7, #1a8ba3)`}}>
          {/* Enhanced Curtain Texture */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-1"
                style={{ 
                  top: `${i * 4}%`,
                  background: `linear-gradient(to right, transparent, rgba(42, 203, 236, 0.6), transparent)`
                }}
              ></div>
            ))}
          </div>
          {/* Velvet Texture */}
          <div className="absolute inset-0" style={{background: `linear-gradient(to top right, rgba(42, 203, 236, 0.3), rgba(26, 139, 163, 0.3))`}}></div>
          {/* Curtain Top Edge */}
          <div className="absolute top-0 w-full h-6 shadow-2xl" style={{background: `linear-gradient(to top, #1a8ba3, #156b7a)`}}></div>
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-3 h-12 bg-gradient-to-t from-yellow-500 to-yellow-700 rounded-t-full shadow-lg"></div>
          <div className="absolute top-0 right-1/4 w-3 h-12 bg-gradient-to-t from-yellow-500 to-yellow-700 rounded-t-full shadow-lg"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-t-lg shadow-lg"></div>
        </div>
      </div>

      {/* Enhanced Pull Thread */}
      <div ref={threadRef} className="absolute left-1/2 top-0 bottom-0 w-2 z-20 transform -translate-x-1/2">
        <div className="w-full h-full bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-800 shadow-xl relative rounded-sm">
          {/* Thread Texture */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/80 to-yellow-800/80"></div>
          {/* Thread Highlight */}
          <div className="absolute left-0 top-0 w-px h-full bg-yellow-200/80"></div>
          {/* Thread Shadow */}
          <div className="absolute right-0 top-0 w-px h-full bg-yellow-900/60"></div>
        </div>
        {/* Enhanced Thread End */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full shadow-xl border border-yellow-400/50"></div>
      </div>

      {/* Main Content - Enhanced */}
      <div ref={contentRef} className="absolute inset-0 flex items-center justify-center z-5">
        <div className="text-center space-y-12 px-8 max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="space-y-6">
            <div className="float-element">
              <h1 className="glow-text text-6xl md:text-8xl lg:text-9xl  font-sans font-bold text-white tracking-wider drop-shadow-2xl">
                COMING
              </h1>
            </div>
            <div className="float-element">
              <h1 className="glow-text text-6xl md:text-8xl lg:text-9xl  font-sans font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wider drop-shadow-2xl">
                SOON
              </h1>
            </div>
          </div>

   

          {/* Scroll Indicator */}
          <div className="mt-16">
            <div className="inline-flex items-center space-x-3 text-blue-400 text-sm bg-blue-900/20 backdrop-blur-sm border border-blue-400/20 rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-3 animate-bounce">
          <div className="w-8 h-14 border-2 border-gradient-to-b from-blue-400 to-purple-400 rounded-full flex justify-center relative bg-gradient-to-b from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
            <div className="w-2 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-3 animate-pulse shadow-lg"></div>
          </div>
          <span className="text-blue-400 text-xs uppercase tracking-widest font-semibold">Pull to Open</span>
        </div>
      </div>


    </div>
  )
}
