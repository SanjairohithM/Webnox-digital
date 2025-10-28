//balls


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
  boundsEl,
  allBalls,
  ballIndex
}) {
  const flagRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const vwRef = useRef(0)
  const vhRef = useRef(0)
  const radiusRef = useRef(28)
  const propsRef = useRef(null)
  const trackerRef = useRef(null)
  const draggableRef = useRef(null)
  const collisionCooldownRef = useRef({})
  const resizeObserverRef = useRef(null)
  const collisionFrameSkipRef = useRef(0)
  const currentTweenRef = useRef(null)

  // Keep viewport/bounds in refs without adding many window listeners per ball
  useEffect(() => {
    vwRef.current = (bounds && bounds.width) || (typeof window !== 'undefined' ? window.innerWidth : 0)
    vhRef.current = (bounds && bounds.height) || (typeof window !== 'undefined' ? window.innerHeight : 0)
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

    // Observe size changes to keep radius accurate after reveal/resizes
    if ('ResizeObserver' in window) {
      resizeObserverRef.current = new ResizeObserver(() => computeRadius())
      resizeObserverRef.current.observe(flagRef.current)
    } else {
      // Fallback recalc after reveal animation
      gsap.delayedCall(0.4, computeRadius)
    }

    const friction = -0.5

    function animateBounce(x = "+=0", y = "+=0", vx = "auto", vy = "auto") {
      if (!flagRef.current) return
      if (currentTweenRef.current) currentTweenRef.current.kill()
      currentTweenRef.current = gsap.fromTo(
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

      // Stop inertial tween early if nearly at rest to avoid long-running updates
      const speed = Math.abs(vx) + Math.abs(vy)
      if (speed < 0.06) {
        if (currentTweenRef.current) {
          try { currentTweenRef.current.kill() } catch (_) {}
          currentTweenRef.current = null
        }
        return
      }

      // Ball-to-ball collisions (throttled and de-duplicated)
      if (allBalls && Array.isArray(allBalls)) {
        // throttle collision checks to every other tick
        collisionFrameSkipRef.current = (collisionFrameSkipRef.current + 1) % 2
        if (collisionFrameSkipRef.current !== 0) return
        for (let i = 0; i < allBalls.length; i += 1) {
          if (i <= ballIndex) continue // avoid duplicate pair checks
          const other = allBalls[i]
          if (!other || !other.getXY || other.isDragging?.()) continue

          const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now()
          const key = String(i)
          if (collisionCooldownRef.current[key] && now - collisionCooldownRef.current[key] < 120) {
            continue
          }

          const { x: ox, y: oy } = other.getXY()
          const or = other.getRadius ? other.getRadius() : r
          const dx = xPos - ox
          const dy = yPos - oy
          const minDist = r + or
          const minDistSq = minDist * minDist
          const distSq = dx * dx + dy * dy

          if (distSq > 0 && distSq < (minDistSq * 0.96)) {
            const dist = Math.sqrt(distSq)
            const nx = dx / dist
            const ny = dy / dist

            // separate
            const overlap = minDist - dist
            const sepX = nx * (overlap / 2)
            const sepY = ny * (overlap / 2)
            const newThisX = xPos + sepX
            const newThisY = yPos + sepY
            const newOtherX = ox - sepX
            const newOtherY = oy - sepY

            // relative velocity
            const ov = other.getVelocity ? other.getVelocity() : { vx: 0, vy: 0 }
            const rvx = vx - ov.vx
            const rvy = vy - ov.vy
            const rvn = rvx * nx + rvy * ny
            if (rvn < 0) {
              const restitution = 0.7
              const j = (-(1 + restitution) * rvn) / 2 // equal mass
              const impX = j * nx
              const impY = j * ny
              const thisVx = vx + impX
              const thisVy = vy + impY
              const otherVx = ov.vx - impX
              const otherVy = ov.vy - impY

              collisionCooldownRef.current[key] = now
              animateBounce(newThisX, newThisY, thisVx, thisVy)
              other.kick?.(newOtherX, newOtherY, otherVx, otherVy)

              gsap.to(flagRef.current, { scale: 1.06, duration: 0.08, yoyo: true, repeat: 1 })
            }
          }
        }
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

    // Register this ball for interactions
    if (allBalls && Array.isArray(allBalls)) {
      allBalls[ballIndex] = {
        getXY: () => ({ x: propsRef.current("x"), y: propsRef.current("y") }),
        getVelocity: () => ({ vx: trackerRef.current.get("x"), vy: trackerRef.current.get("y") }),
        getRadius: () => radiusRef.current,
        isDragging: () => isDragging,
        kick: (x, y, vx, vy) => animateBounce(x, y, vx, vy)
      }
    }

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
      if (currentTweenRef.current) {
        try { currentTweenRef.current.kill() } catch (_) {}
        currentTweenRef.current = null
      }
      try { InertiaPlugin.untrack(flagRef.current, "x,y") } catch (_) {}
      gsap.killTweensOf(flagRef.current)
      if (allBalls && Array.isArray(allBalls)) {
        allBalls[ballIndex] = null
      }
      if (resizeObserverRef.current) {
        try { resizeObserverRef.current.disconnect() } catch (_) {}
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, initialPosition.x, initialPosition.y, bounds?.width, bounds?.height, allBalls, ballIndex])

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
  const allBallsRef = useRef([])
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
              allBalls={allBallsRef.current}
              ballIndex={index}
            />
          </div>
        ))}
      </div>
      

    </div>
  )
} 