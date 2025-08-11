"use client"

import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Draggable from "gsap/Draggable"
import { InertiaPlugin } from "gsap/InertiaPlugin"

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin)

const TECH_IMAGES = [
  { country: "Technology 1", flag: "/ShpereTextures/Group.webp", size: "w-18 h-18" },
  { country: "Technology 2", flag: "/ShpereTextures/Group-1.webp", size: "w-18 h-18" },
  { country: "Technology 3", flag: "/ShpereTextures/Group-2.webp", size: "w-18 h-18" },
  { country: "Technology 4", flag: "/ShpereTextures/Group-3.webp", size: "w-18 h-18" },
  { country: "Technology 5", flag: "/ShpereTextures/Group-4.webp", size: "w-18 h-18" },
  { country: "Technology 6", flag: "/ShpereTextures/Group-5.webp", size: "w-18 h-18" },
  { country: "Technology 7", flag: "/ShpereTextures/Group-6.webp", size: "w-18 h-18" },
  { country: "Technology 8", flag: "/ShpereTextures/Group-7.webp", size: "w-18 h-18" },
  { country: "Technology 9", flag: "/ShpereTextures/Group-8.webp", size: "w-18 h-18" },
  { country: "Technology 10", flag: "/ShpereTextures/Group-9.webp", size: "w-18 h-18" },
  { country: "Technology 11", flag: "/ShpereTextures/Group-10.webp", size: "w-18 h-18" },
  { country: "Technology 12", flag: "/ShpereTextures/Group-11.webp", size: "w-18 h-18" },
  { country: "Technology 13", flag: "/ShpereTextures/Group-12.webp", size: "w-18 h-18" },
  { country: "Technology 14", flag: "/ShpereTextures/Group-13.webp", size: "w-18 h-18" },
  { country: "Technology 15", flag: "/ShpereTextures/Group-14.webp", size: "w-18 h-18" },
  { country: "Technology 16", flag: "/ShpereTextures/Group15.webp", size: "w-18 h-18" },
  { country: "Technology 17", flag: "/ShpereTextures/Group16.webp", size: "w-18 h-18" },
  { country: "Technology 18", flag: "/ShpereTextures/Group17.webp", size: "w-18 h-18" },
  { country: "Technology 19", flag: "/ShpereTextures/Group18.webp", size: "w-18 h-18" },
  { country: "Technology 20", flag: "/ShpereTextures/Group19.webp", size: "w-18 h-18" },
  { country: "Technology 21", flag: "/ShpereTextures/Group20.webp", size: "w-18 h-18" },
  { country: "Technology 22", flag: "/ShpereTextures/Group21.webp", size: "w-18 h-18" },
  { country: "Technology 23", flag: "/ShpereTextures/Group22.webp", size: "w-18 h-18" },
  { country: "Technology 24", flag: "/ShpereTextures/Group23.webp", size: "w-18 h-18" },
  { country: "Technology 25", flag: "/ShpereTextures/Rectangle.webp", size: "w-18 h-18" },
  { country: "Technology 26", flag: "/ShpereTextures/Rectangle-1.webp", size: "w-18 h-18" },
  { country: "Technology 27", flag: "/ShpereTextures/Rectangle-2.webp", size: "w-18 h-18" },
  { country: "Technology 28", flag: "/ShpereTextures/Rectangle-3.webp", size: "w-18 h-18" },
  { country: "Technology 29", flag: "/ShpereTextures/Rectangle-4.webp", size: "w-18 h-18" },
  { country: "Technology 30", flag: "/ShpereTextures/Rectangle-5.webp", size: "w-18 h-18" },
  { country: "Technology 31", flag: "/ShpereTextures/Rectangle-6.webp", size: "w-18 h-18" },
  { country: "Technology 32", flag: "/ShpereTextures/Clip path group.webp", size: "w-18 h-18" },
]

function TechImage({ 
  country, 
  flag, 
  size, 
  initialPosition, 
  isActive, 
  bounds,
  boundsEl
}) {
  const flagRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const vwRef = useRef(0)
  const vhRef = useRef(0)
  const radiusRef = useRef(28)
  const propsRef = useRef(null)
  const trackerRef = useRef(null)
  const draggableRef = useRef(null)

  useEffect(() => {
    vwRef.current = (bounds && bounds.width) || window.innerWidth
    vhRef.current = (bounds && bounds.height) || window.innerHeight
    const onResize = () => {
      vwRef.current = (bounds && bounds.width) || window.innerWidth
      vhRef.current = (bounds && bounds.height) || window.innerHeight
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [bounds?.width, bounds?.height])

  useEffect(() => {
    if (!flagRef.current) return

    propsRef.current = gsap.getProperty(flagRef.current)
    trackerRef.current = InertiaPlugin.track(flagRef.current, "x,y")[0]

    gsap.set(flagRef.current, {
      xPercent: -50,
      yPercent: -50,
      x: initialPosition.x,
      y: initialPosition.y
    })

    const computeRadius = () => {
      const rect = flagRef.current.getBoundingClientRect()
      radiusRef.current = Math.max(10, rect.width / 2)
    }
    computeRadius()

    const friction = -0.5

    function animateBounce(x = "+=0", y = "+=0", vx = "auto", vy = "auto") {
      gsap.fromTo(
        flagRef.current,
        { x, y },
        {
          inertia: { x: vx, y: vy },
          onUpdate: checkBounds,
          overwrite: true
        }
      )
    }

    function checkBounds() {
      const r = radiusRef.current
      const x = propsRef.current("x")
      const y = propsRef.current("y")
      let vx = trackerRef.current.get("x")
      let vy = trackerRef.current.get("y")

      let xPos = x
      let yPos = y
      let hitting = false

      const vw = vwRef.current
      const vh = vhRef.current

      if (x + r > vw) {
        xPos = vw - r
        vx *= friction
        hitting = true
      } else if (x - r < 0) {
        xPos = r
        vx *= friction
        hitting = true
      }

      if (y + r > vh) {
        yPos = vh - r
        vy *= friction
        hitting = true
      } else if (y - r < 0) {
        yPos = r
        vy *= friction
        hitting = true
      }

      if (hitting) {
        animateBounce(xPos, yPos, vx, vy)
        gsap.to(flagRef.current, { scale: 1.08, duration: 0.08, yoyo: true, repeat: 1, ease: "power2.out" })
      }
    }

    // Draggable setup
    draggableRef.current = Draggable.create(flagRef.current, {
      bounds: (boundsEl && boundsEl.current) || window,
      onPress() {
        gsap.killTweensOf(flagRef.current)
        setIsDragging(true)
        this.update()
      },
      onDragEnd() {
    setIsDragging(false)
        animateBounce()
      }
    })[0]

    // Automatic drop from the top on activate (scroll-driven)
    if (isActive) {
      const vw = (bounds && bounds.width) || vwRef.current
      const vh = (bounds && bounds.height) || vhRef.current
      const r = radiusRef.current
      const clampedX = Math.max(r, Math.min(vw - r, initialPosition.x))
      const startY = initialPosition.y
      const targetY = Math.max(r, Math.min(vh - r, vh * 0.95))
      gsap.set(flagRef.current, { xPercent: -50, yPercent: -50, x: clampedX, y: startY })
      const distance = Math.abs(targetY - startY)
      const duration = Math.min(3.5, Math.max(1.2, distance / 350))
      gsap.to(flagRef.current, {
        y: targetY,
        duration,
        ease: "power2.out"
      })
    }

    const img = flagRef.current.querySelector("img")
    if (img) {
      if (img.complete) computeRadius()
      img.addEventListener("load", computeRadius)
    }
    
    return () => {
      if (img) img.removeEventListener("load", computeRadius)
      if (draggableRef.current) draggableRef.current.kill()
      try { InertiaPlugin.untrack(flagRef.current, "x,y") } catch (_) {}
      gsap.killTweensOf(flagRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, initialPosition.x, initialPosition.y, bounds?.width, bounds?.height])

  return (
    <div
      ref={flagRef}
      className={`absolute select-none will-change-transform transition-transform duration-75 ${
        isDragging ? 'scale-110 z-50' : 'hover:scale-105 z-20'
      } cursor-grab`}
      style={{ left: 0, top: 0 }}
      title={country}
    >
      <div className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-200">
        <img 
          src={flag} 
          alt={country}
          className={`${size} object-contain rounded-lg`}
          draggable={false}
        />
      </div>
    </div>
  )
}

export default function TechImages2D() {
  const containerRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const flagsRef = useRef([])
  const [bounds, setBounds] = useState({ width: 0, height: 0 })
  

  // Generate initial positions at the top for booming effect
  const initialPositions = useMemo(() => {
    const getBoomPosition = (index) => {
      const maxWidth = (typeof window !== 'undefined' ? window.innerWidth : 1200) - 100
      const vhApprox = (typeof window !== 'undefined' ? window.innerHeight : 800)
      
      // Randomize horizontally so they land in various places along the bottom
      const randomX = Math.random() * (maxWidth - 100) + 50
      return {
        x: Math.max(50, Math.min(maxWidth - 50, randomX)),
        y: -(vhApprox * 1.25) - (index * 60)
      }
    }
    return TECH_IMAGES.map((_, index) => getBoomPosition(index))
  }, [])

  // Trigger drop on scroll into view
  useEffect(() => {
    if (!containerRef.current) return
    const computeBounds = () => {
      const rect = containerRef.current.getBoundingClientRect()
      setBounds({ width: rect.width, height: rect.height })
    }
    computeBounds()
    window.addEventListener('resize', computeBounds)
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        setIsActive(true)
        gsap.to(flagsRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.02,
          ease: "back.out(1.7)"
        })
      }
    })
    return () => {
      st.kill()
      window.removeEventListener('resize', computeBounds)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 10 }}
    >
      <div className="relative w-full h-full">
        {TECH_IMAGES.map((countryData, index) => (
          <div
            key={countryData.country}
            ref={el => flagsRef.current[index] = el}
            className="opacity-0 scale-0 pointer-events-auto"
          >
            <TechImage
              country={countryData.country}
              flag={countryData.flag}
              size={countryData.size}
              initialPosition={initialPositions[index]}
              isActive={isActive}
              bounds={bounds}
              boundsEl={containerRef}
            />
          </div>
        ))}
      </div>
      

    </div>
  )
} 