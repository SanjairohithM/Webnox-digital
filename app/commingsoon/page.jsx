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
        <div className="w-full h-full bg-gradient-to-b from-red-800 via-red-900 to-red-950 relative overflow-hidden">
          {/* Enhanced Curtain Texture */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-400/60 to-transparent"
                style={{ top: `${i * 4}%` }}
              ></div>
            ))}
          </div>
          {/* Velvet Texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-700/30 to-red-950/30"></div>
          {/* Curtain Bottom Edge */}
          <div className="absolute bottom-0 w-full h-6 bg-gradient-to-b from-red-900 to-red-950 shadow-2xl"></div>
          {/* Enhanced Decorative Elements */}
          <div className="absolute bottom-0 left-1/4 w-3 h-12 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-b-full shadow-lg"></div>
          <div className="absolute bottom-0 right-1/4 w-3 h-12 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-b-full shadow-lg"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-b-lg shadow-lg"></div>
        </div>
      </div>

      <div ref={curtainBottomRef} className="absolute bottom-0 left-0 w-full h-1/2 z-10">
        <div className="w-full h-full bg-gradient-to-t from-red-800 via-red-900 to-red-950 relative overflow-hidden">
          {/* Enhanced Curtain Texture */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-400/60 to-transparent"
                style={{ top: `${i * 4}%` }}
              ></div>
            ))}
          </div>
          {/* Velvet Texture */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-700/30 to-red-950/30"></div>
          {/* Curtain Top Edge */}
          <div className="absolute top-0 w-full h-6 bg-gradient-to-t from-red-900 to-red-950 shadow-2xl"></div>
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
              <h1 className="glow-text text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-wider drop-shadow-2xl">
                COMING
              </h1>
            </div>
            <div className="float-element">
              <h1 className="glow-text text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wider drop-shadow-2xl">
                SOON
              </h1>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="float-element bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-white/80 text-sm uppercase tracking-widest mb-4">Launch Countdown</h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-3 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-blue-300 text-xs uppercase tracking-wider">{unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-blue-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              Prepare yourself for a revolutionary digital experience that will redefine the boundaries of innovation and creativity.
            </p>

            {/* Subscription Form */}
            <div className="float-element max-w-md mx-auto">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <h3 className="text-white font-semibold mb-4">Get Notified</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Notify Me
                    </button>
                  </div>
                </form>
              ) : (
                <div className="success-message bg-green-500/20 backdrop-blur-lg border border-green-400/30 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-center space-x-2 text-green-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">You're on the list!</span>
                  </div>
                  <p className="text-green-200 text-sm mt-2">We'll notify you when we launch.</p>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="bg-blue-800/20 backdrop-blur-lg border border-blue-400/30 rounded-xl px-6 py-4 shadow-lg">
                <span className="text-blue-300 text-sm uppercase tracking-widest block">Launching</span>
                <div className="text-white text-xl font-bold">2024</div>
              </div>

              <div className="flex space-x-4">
                {[
                  { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", color: "blue" },
                  { icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z", color: "purple" },
                  { icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.118.112.221.083.342-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z", color: "pink" }
                ].map((social, index) => (
                  <div key={index} className={`w-14 h-14 bg-${social.color}-600/20 backdrop-blur-lg border border-${social.color}-400/30 rounded-full flex items-center justify-center hover:bg-${social.color}-500/30 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg`}>
                    <svg className={`w-6 h-6 text-${social.color}-300`} fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16">
            <div className="inline-flex items-center space-x-3 text-blue-400 text-sm bg-blue-900/20 backdrop-blur-sm border border-blue-400/20 rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="tracking-wider">Scroll to reveal the magic</span>
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

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-900/30 z-50">
        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-0 transition-all duration-300" 
             style={{width: `${Math.min(100, (new Date().getTime() / new Date("2024-12-31").getTime()) * 100)}%`}}></div>
      </div>
    </div>
  )
}
