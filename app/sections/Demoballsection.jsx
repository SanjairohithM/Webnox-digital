"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useSpring, animated } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import { gsap } from "gsap"
import Image from "next/image"

const BALL_SIZE = 80
const FRICTION = 0.98
const BOUNCE_DAMPING = 0.7
const GRAVITY = 0.5

export default function PhysicsBalls() {
  const containerRef = useRef(null)
  const [balls, setBalls] = useState([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const animationFrameRef = useRef()

  // Initialize container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerSize({ width: rect.width, height: rect.height })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Initialize balls with physics properties
  useEffect(() => {
    if (containerSize.width > 0 && containerSize.height > 0) {
      const initialBalls = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * Math.max(0, containerSize.width - BALL_SIZE),
        y: Math.random() * Math.max(0, containerSize.height - BALL_SIZE),
        vx: (Math.random() - 0.5) * 10, // Random horizontal velocity
        vy: (Math.random() - 0.5) * 10, // Random vertical velocity
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        image: `/placeholder.svg?height=60&width=60&text=${i + 1}`,
        isDragging: false,
        mass: 1 + Math.random() * 2, // Random mass for different behaviors
      }))

      setBalls(initialBalls)
    }
  }, [containerSize])

  // Physics simulation loop
  useEffect(() => {
    if (balls.length === 0 || containerSize.width === 0) return

    const animate = () => {
      setBalls(prevBalls => 
        prevBalls.map(ball => {
          if (ball.isDragging) return ball

          let newX = ball.x + ball.vx
          let newY = ball.y + ball.vy
          let newVx = ball.vx * FRICTION
          let newVy = ball.vy * FRICTION + GRAVITY

          // Boundary collision with bounce
          if (newX <= 0) {
            newX = 0
            newVx = -newVx * BOUNCE_DAMPING
          } else if (newX >= containerSize.width - BALL_SIZE) {
            newX = containerSize.width - BALL_SIZE
            newVx = -newVx * BOUNCE_DAMPING
          }

          if (newY <= 0) {
            newY = 0
            newVy = -newVy * BOUNCE_DAMPING
          } else if (newY >= containerSize.height - BALL_SIZE) {
            newY = containerSize.height - BALL_SIZE
            newVy = -newVy * BOUNCE_DAMPING
          }

          return {
            ...ball,
            x: newX,
            y: newY,
            vx: Math.abs(newVx) < 0.1 ? 0 : newVx,
            vy: Math.abs(newVy) < 0.1 ? 0 : newVy,
          }
        })
      )

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [balls.length, containerSize])

  // Ball collision detection
  useEffect(() => {
    const checkCollisions = () => {
      setBalls(prevBalls => {
        const newBalls = [...prevBalls]
        
        for (let i = 0; i < newBalls.length; i++) {
          for (let j = i + 1; j < newBalls.length; j++) {
            const ball1 = newBalls[i]
            const ball2 = newBalls[j]
            
            if (ball1.isDragging || ball2.isDragging) continue

            const dx = ball2.x - ball1.x
            const dy = ball2.y - ball1.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = BALL_SIZE * 0.8

            if (distance < minDistance && distance > 0) {
              // Collision detected - calculate new velocities
              const angle = Math.atan2(dy, dx)
              const sin = Math.sin(angle)
              const cos = Math.cos(angle)

              // Rotate ball positions
              const x1 = 0
              const y1 = 0
              const x2 = dx * cos + dy * sin
              const y2 = dy * cos - dx * sin

              // Rotate ball velocities
              const vx1 = ball1.vx * cos + ball1.vy * sin
              const vy1 = ball1.vy * cos - ball1.vx * sin
              const vx2 = ball2.vx * cos + ball2.vy * sin
              const vy2 = ball2.vy * cos - ball2.vx * sin

              // Collision reaction
              const finalVx1 = ((ball1.mass - ball2.mass) * vx1 + 2 * ball2.mass * vx2) / (ball1.mass + ball2.mass)
              const finalVx2 = ((ball2.mass - ball1.mass) * vx2 + 2 * ball1.mass * vx1) / (ball1.mass + ball2.mass)

              // Update positions to avoid overlap
              const absorbtion = (minDistance - distance) / 2
              const moveX = cos * absorbtion
              const moveY = sin * absorbtion

              newBalls[i] = {
                ...ball1,
                x: ball1.x - moveX,
                y: ball1.y - moveY,
                vx: finalVx1 * cos - vy1 * sin,
                vy: vy1 * cos + finalVx1 * sin,
              }

              newBalls[j] = {
                ...ball2,
                x: ball2.x + moveX,
                y: ball2.y + moveY,
                vx: finalVx2 * cos - vy2 * sin,
                vy: vy2 * cos + finalVx2 * sin,
              }
            }
          }
        }
        
        return newBalls
      })
    }

    const collisionInterval = setInterval(checkCollisions, 16) // ~60fps
    return () => clearInterval(collisionInterval)
  }, [])

  const updateBallPosition = useCallback((id, newX, newY, isDragging = false, vx = 0, vy = 0) => {
    setBalls(prev => prev.map(ball => 
      ball.id === id 
        ? { ...ball, x: newX, y: newY, isDragging, vx, vy }
        : ball
    ))
  }, [])

  const resetBalls = () => {
    setBalls(prev => prev.map(ball => ({
      ...ball,
      x: Math.random() * Math.max(0, containerSize.width - BALL_SIZE),
      y: Math.random() * Math.max(0, containerSize.height - BALL_SIZE),
      vx: (Math.random() - 0.5) * 20,
      vy: (Math.random() - 0.5) * 20,
      isDragging: false,
    })))
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-whiteoverflow-hidden"
    >
      <div className="absolute top-4 left-4 space-y-2 z-20">
        <div className="text-lg font-bold text-gray-800 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
          🎮 Fully Controllable Physics Balls
        </div>
        <button
          onClick={resetBalls}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          🔄 Reset Balls
        </button>
      </div>

      <div className="absolute top-4 right-4 space-y-1 text-sm text-gray-600 z-20 bg-white/90 px-3 py-2 rounded-lg">
        <div>{balls.filter((b) => b.isDragging).length} dragging</div>
        <div>{balls.length} total balls</div>
      </div>

      <div className="absolute bottom-4 left-4 text-xs text-gray-600 z-20 bg-white/90 px-3 py-2 rounded-lg max-w-xs">
        <div className="font-semibold mb-1">Controls:</div>
        <div>• Drag balls anywhere</div>
        <div>• Release with momentum</div>
        <div>• Balls bounce and collide</div>
        <div>• Physics simulation active</div>
      </div>

      {balls.map((ball) => (
        <FullyControllableBall 
          key={ball.id} 
          ball={ball} 
          containerSize={containerSize} 
          onPositionChange={updateBallPosition} 
        />
      ))}
    </div>
  )
}

function FullyControllableBall({ ball, containerSize, onPositionChange }) {
  const [{ x, y, scale, rotation }, api] = useSpring(() => ({
    x: ball.x,
    y: ball.y,
    scale: 1,
    rotation: 0,
    config: { tension: 300, friction: 30 }
  }))

  const lastPositionRef = useRef({ x: ball.x, y: ball.y, time: Date.now() })
  const velocityRef = useRef({ vx: 0, vy: 0 })

  // Update spring when ball position changes externally (from physics)
  useEffect(() => {
    if (!ball.isDragging) {
      api.start({
        x: ball.x,
        y: ball.y,
        scale: 1,
        rotation: ball.vx * 2, // Rotate based on velocity
        immediate: false,
      })
    }
  }, [ball.x, ball.y, ball.isDragging, ball.vx, api])

  const bind = useDrag(
    ({ active, movement: [mx, my], first, last, velocity: [vx, vy], direction: [dx, dy] }) => {
      if (first) {
        // Start dragging - stop physics
        onPositionChange(ball.id, ball.x, ball.y, true, 0, 0)
        api.start({ 
          scale: 1.2,
          rotation: 0,
          config: { tension: 400, friction: 40 }
        })
        lastPositionRef.current = { x: ball.x, y: ball.y, time: Date.now() }
      }

      if (active) {
        // Calculate new position with boundaries
        const newX = Math.max(0, Math.min(containerSize.width - BALL_SIZE, ball.x + mx))
        const newY = Math.max(0, Math.min(containerSize.height - BALL_SIZE, ball.y + my))

        // Track velocity for momentum
        const now = Date.now()
        const dt = now - lastPositionRef.current.time
        if (dt > 0) {
          velocityRef.current = {
            vx: (newX - lastPositionRef.current.x) / dt * 16, // Scale to frame rate
            vy: (newY - lastPositionRef.current.y) / dt * 16
          }
          lastPositionRef.current = { x: newX, y: newY, time: now }
        }

        // Update spring immediately for smooth dragging
        api.start({
          x: newX,
          y: newY,
          rotation: mx * 0.1, // Subtle rotation while dragging
          immediate: true,
        })
      }

      if (last) {
        // End dragging - apply momentum
        const finalX = Math.max(0, Math.min(containerSize.width - BALL_SIZE, ball.x + mx))
        const finalY = Math.max(0, Math.min(containerSize.height - BALL_SIZE, ball.y + my))

        // Calculate release velocity with gesture velocity and tracked velocity
        const releaseVx = Math.max(-30, Math.min(30, velocityRef.current.vx + vx * 10))
        const releaseVy = Math.max(-30, Math.min(30, velocityRef.current.vy + vy * 10))

        api.start({
          scale: 1,
          rotation: releaseVx * 2,
          config: { tension: 300, friction: 30 }
        })

        onPositionChange(ball.id, finalX, finalY, false, releaseVx, releaseVy)
      }
    },
    {
      filterTaps: true,
      threshold: 3, // More sensitive dragging
      rubberband: false, // Disable rubberband for more direct control
    }
  )

  return (
    <animated.div
      id={`ball-${ball.id}`}
      {...bind()}
      style={{
        x,
        y,
        scale,
        rotation,
        position: "absolute",
        left: 0,
        top: 0,
        touchAction: "none",
        willChange: "transform",
        cursor: ball.isDragging ? "grabbing" : "grab",
      }}
      className="select-none z-10"
      onDoubleClick={() => {
        // Double click to add random velocity
        const randomVx = (Math.random() - 0.5) * 40
        const randomVy = (Math.random() - 0.5) * 40
        onPositionChange(ball.id, ball.x, ball.y, false, randomVx, randomVy)
      }}
    >
      <div
        className="rounded-full shadow-lg border-3 border-white flex items-center justify-center transition-all duration-200 hover:shadow-xl hover:border-yellow-300"
        style={{ 
          backgroundColor: ball.color,
          width: BALL_SIZE,
          height: BALL_SIZE,
        }}
      >
        <Image
          src={ball.image || "/placeholder.svg"}
          alt={`Ball ${ball.id + 1}`}
          width={50}
          height={50}
          className="rounded-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Enhanced glow effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-30 blur-sm -z-10 transition-all duration-200" 
        style={{ 
          backgroundColor: ball.color,
          width: BALL_SIZE,
          height: BALL_SIZE,
          transform: ball.isDragging ? 'scale(1.3)' : 'scale(1)',
        }} 
      />

      {/* Velocity indicator */}
      {(Math.abs(ball.vx) > 1 || Math.abs(ball.vy) > 1) && !ball.isDragging && (
        <div
          className="absolute top-1/2 left-1/2 w-1 bg-red-500 origin-bottom transform -translate-x-1/2 -translate-y-1/2 opacity-70"
          style={{
            height: Math.min(40, Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy) * 2),
            transform: `translate(-50%, -50%) rotate(${Math.atan2(ball.vy, ball.vx) * 180 / Math.PI + 90}deg)`,
          }}
        />
      )}
    </animated.div>
  )
}
