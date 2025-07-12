"use client"

import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const TECH_IMAGES = [
  { country: "Technology 1", flag: "/ShpereTextures/Group.webp", size: "w-12 h-12" },
  { country: "Technology 2", flag: "/ShpereTextures/Group-1.webp", size: "w-14 h-14" },
  { country: "Technology 3", flag: "/ShpereTextures/Group-2.webp", size: "w-12 h-12" },
  { country: "Technology 4", flag: "/ShpereTextures/Group-3.webp", size: "w-14 h-14" },
  { country: "Technology 5", flag: "/ShpereTextures/Group-4.webp", size: "w-12 h-12" },
  { country: "Technology 6", flag: "/ShpereTextures/Group-5.webp", size: "w-14 h-14" },
  { country: "Technology 7", flag: "/ShpereTextures/Group-6.webp", size: "w-12 h-12" },
  { country: "Technology 8", flag: "/ShpereTextures/Group-7.webp", size: "w-14 h-14" },
  { country: "Technology 9", flag: "/ShpereTextures/Group-8.webp", size: "w-12 h-12" },
  { country: "Technology 10", flag: "/ShpereTextures/Group-9.webp", size: "w-14 h-14" },
  { country: "Technology 11", flag: "/ShpereTextures/Group-10.webp", size: "w-12 h-12" },
  { country: "Technology 12", flag: "/ShpereTextures/Group-11.webp", size: "w-14 h-14" },
  { country: "Technology 13", flag: "/ShpereTextures/Group-12.webp", size: "w-12 h-12" },
  { country: "Technology 14", flag: "/ShpereTextures/Group-13.webp", size: "w-14 h-14" },
  { country: "Technology 15", flag: "/ShpereTextures/Group-14.webp", size: "w-12 h-12" },
  { country: "Technology 16", flag: "/ShpereTextures/Group15.webp", size: "w-14 h-14" },
  { country: "Technology 17", flag: "/ShpereTextures/Group16.webp", size: "w-12 h-12" },
  { country: "Technology 18", flag: "/ShpereTextures/Group17.webp", size: "w-14 h-14" },
  { country: "Technology 19", flag: "/ShpereTextures/Group18.webp", size: "w-12 h-12" },
  { country: "Technology 20", flag: "/ShpereTextures/Group19.webp", size: "w-14 h-14" },
  { country: "Technology 21", flag: "/ShpereTextures/Group20.webp", size: "w-12 h-12" },
  { country: "Technology 22", flag: "/ShpereTextures/Group21.webp", size: "w-14 h-14" },
  { country: "Technology 23", flag: "/ShpereTextures/Group22.webp", size: "w-12 h-12" },
  { country: "Technology 24", flag: "/ShpereTextures/Group23.webp", size: "w-14 h-14" },
  { country: "Technology 25", flag: "/ShpereTextures/Rectangle.webp", size: "w-12 h-12" },
  { country: "Technology 26", flag: "/ShpereTextures/Rectangle-1.webp", size: "w-14 h-14" },
  { country: "Technology 27", flag: "/ShpereTextures/Rectangle-2.webp", size: "w-12 h-12" },
  { country: "Technology 28", flag: "/ShpereTextures/Rectangle-3.webp", size: "w-14 h-14" },
  { country: "Technology 29", flag: "/ShpereTextures/Rectangle-4.webp", size: "w-12 h-12" },
  { country: "Technology 30", flag: "/ShpereTextures/Rectangle-5.webp", size: "w-14 h-14" },
  { country: "Technology 31", flag: "/ShpereTextures/Rectangle-6.webp", size: "w-12 h-12" },
  { country: "Technology 32", flag: "/ShpereTextures/Clip path group.webp", size: "w-14 h-14" },
]

function TechImage({ 
  country, 
  flag, 
  size, 
  initialPosition, 
  isActive, 
  onDragStart, 
  onDragEnd,
  allBalls,
  ballIndex
}) {
  const flagRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(initialPosition)
  const [velocity, setVelocity] = useState({ x: 0, y: 0 })
  const [hasStarted, setHasStarted] = useState(false)
  const [isSettled, setIsSettled] = useState(false)
  const lastBounceRef = useRef(0)
  const [isBouncing, setIsBouncing] = useState(false)
  
  // Function to wake up a settled ball
  const wakeUp = useCallback(() => {
    if (isSettled) {
      setIsSettled(false)
    }
  }, [isSettled])

  // Expose ball data to other balls for collision detection
  useEffect(() => {
    if (allBalls && ballIndex !== undefined) {
      allBalls[ballIndex] = {
        position,
        velocity,
        updateVelocity: setVelocity,
        isSettled,
        isDragging,
        wakeUp,
        ref: flagRef
      }
    }
  }, [position, velocity, isSettled, isDragging, wakeUp, allBalls, ballIndex])
  const dragDataRef = useRef({
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0
  })

  // Animation loop for physics-like movement with gravity
  useEffect(() => {
    if (!isActive || isDragging || isSettled || isBouncing) return

    const animate = () => {
      setPosition(prev => {
        let newX = prev.x + velocity.x
        let newY = prev.y + velocity.y
        
        // Boundary collision detection
        const containerWidth = window.innerWidth
        const containerHeight = window.innerHeight
        
        // Normal gravity for natural falling
        let gravity = 0.3 // Standard gravity for natural fall
        const flagSize = 56 // Approximate flag size for images
        
        let newVelX = velocity.x
        let newVelY = velocity.y + gravity // Apply gravity
        
        let bounced = false;

        // Left wall collision
        if (newX <= 0) {
          newVelX = Math.abs(newVelX) * 0.85; // Bounce right
          bounced = true;
          newX = 0;
        }

        // Right wall collision
        if (newX >= containerWidth - flagSize) {
          newVelX = -Math.abs(newVelX) * 0.85; // Bounce left
          bounced = true;
          newX = containerWidth - flagSize;
        }

        // Top wall collision
        if (newY <= 0) {
          newVelY = Math.abs(newVelY) * 0.85; // Bounce down
          bounced = true;
          newY = 0;
        }

        // Bottom wall collision - settle immediately without bouncing
        if (newY >= containerHeight - flagSize) {
          setIsSettled(true);
          setVelocity({ x: 0, y: 0 });
          return {
            x: Math.max(0, Math.min(containerWidth - flagSize, newX)),
            y: containerHeight - flagSize
          };
        }

        // GSAP bounce scale effect on any wall collision (throttled)
        if (bounced && flagRef.current) {
          const now = Date.now();
          if (now - lastBounceRef.current > 200) {
            lastBounceRef.current = now;
            gsap.to(flagRef.current, {
              scale: 1.25,
              duration: 0.12,
              ease: "elastic.out(1.2, 0.4)",
              yoyo: true,
              repeat: 1
            });
          }
        }
        
        // Ball-to-ball collision detection and physics
        if (allBalls && allBalls.length > 0 && !isDragging) {
          allBalls.forEach((otherBall, otherIndex) => {
            if (otherIndex !== ballIndex && otherBall && otherBall.position && otherBall.velocity && !otherBall.isDragging) {
              const dx = newX - otherBall.position.x
              const dy = newY - otherBall.position.y
              const distance = Math.sqrt(dx * dx + dy * dy)
              const minDistance = flagSize * 0.9 // Slightly smaller for better collision
              
              if (distance < minDistance && distance > 0) {
                // Collision detected - calculate collision response
                const overlap = minDistance - distance
                const normalX = dx / distance
                const normalY = dy / distance
                
                // Separate the balls equally
                const separationX = normalX * (overlap / 2)
                const separationY = normalY * (overlap / 2)
                
                // Update positions to separate balls
                const newPosX = newX + separationX
                const newPosY = newY + separationY
                
                // Calculate relative velocity
                const relativeVelX = newVelX - otherBall.velocity.x
                const relativeVelY = newVelY - otherBall.velocity.y
                const relativeVelDotNormal = relativeVelX * normalX + relativeVelY * normalY
                
                // Only resolve collision if objects are approaching
                if (relativeVelDotNormal > 0) return
                
                // Calculate collision impulse (elastic collision with damping)
                const restitution = 0.7 // Bounce damping factor
                const impulse = -(1 + restitution) * relativeVelDotNormal / 2 // Equal mass assumption
                
                const impulseX = impulse * normalX
                const impulseY = impulse * normalY
                
                // Update velocities
                newVelX += impulseX
                newVelY += impulseY
                
                                 // Update the other ball's velocity and position
                if (otherBall.updateVelocity) {
                  otherBall.updateVelocity({
                    x: otherBall.velocity.x - impulseX,
                    y: otherBall.velocity.y - impulseY
                  })
                  
                  // Wake up the other ball if it was settled and hit hard enough
                  if (otherBall.isSettled && otherBall.wakeUp && (Math.abs(impulseX) > 0.5 || Math.abs(impulseY) > 0.5)) {
                    otherBall.wakeUp()
                  }
                }
                
                // Update this ball's position
                setPosition(prevPos => ({
                  x: Math.max(0, Math.min(containerWidth - flagSize, newPosX)),
                  y: Math.max(0, Math.min(containerHeight - flagSize, newPosY))
                }))
                
                // Visual bounce effect for ball collisions
                if (flagRef.current) {
                  gsap.to(flagRef.current, {
                    scale: 1.15,
                    duration: 0.1,
                    ease: "back.out(1.7)",
                    yoyo: true,
                    repeat: 1
                  })
                }
                
                bounced = true
              }
            }
          })
        }
        
        // Apply air resistance during drop
        newVelX *= 0.99
        newVelY *= 0.99 // Standard air resistance
        
        setVelocity({ x: newVelX, y: newVelY })
        
        return {
          x: Math.max(0, Math.min(containerWidth - flagSize, newX)),
          y: Math.max(0, Math.min(containerHeight - flagSize, newY))
        }
      })
    }

    const intervalId = setInterval(animate, 20) // ~50fps - faster animation
    return () => clearInterval(intervalId)
  }, [velocity, isActive, isDragging, isSettled, isBouncing])

  // Give initial boom velocity when becoming active
  useEffect(() => {
    if (isActive && !hasStarted) {
      const randomHorizontalVel = (Math.random() - 0.5) * 4 // Explosive horizontal spread
      const initialDownwardVel = Math.random() * 1 + 0.5 // Gentle downward start
      setVelocity({ x: randomHorizontalVel, y: initialDownwardVel })
      setHasStarted(true)
      setIsSettled(false) // Reset settled state
    }
    if (!isActive) {
      setHasStarted(false)
      setIsSettled(false) // Reset when inactive
    }
  }, [isActive, hasStarted])

  const handleMouseDown = useCallback((e) => {
    if (!isActive) return
    
    e.preventDefault()
    setIsDragging(true)
    setIsSettled(false) // Allow movement during drag
    setVelocity({ x: 0, y: 0 }) // Stop any existing velocity
    onDragStart?.()
    
    const rect = flagRef.current.getBoundingClientRect()
    dragDataRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top
    }
    
    document.body.style.cursor = 'grabbing'
    document.body.style.userSelect = 'none'
  }, [isActive, onDragStart])

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return
    
    e.preventDefault()
    const newX = e.clientX - dragDataRef.current.offsetX
    const newY = e.clientY - dragDataRef.current.offsetY
    
    // Check for pushing other balls when dragging
    if (allBalls && allBalls.length > 0) {
      allBalls.forEach((otherBall, otherIndex) => {
        if (otherIndex !== ballIndex && otherBall && otherBall.position && !otherBall.isDragging) {
          const dx = newX - otherBall.position.x
          const dy = newY - otherBall.position.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const pushDistance = 56 // Distance to start pushing
          
          if (distance < pushDistance && distance > 0) {
            // Calculate push force
            const pushStrength = (pushDistance - distance) / pushDistance
            const pushX = (dx / distance) * pushStrength * 3
            const pushY = (dy / distance) * pushStrength * 3
            
                         // Apply push to other ball
            if (otherBall.updateVelocity) {
              otherBall.updateVelocity({
                x: otherBall.velocity.x + pushX,
                y: otherBall.velocity.y + pushY
              })
              
              // Wake up the ball if it's settled and being pushed
              if (otherBall.isSettled && otherBall.wakeUp && pushStrength > 0.3) {
                otherBall.wakeUp()
              }
            }
          }
        }
      })
    }
    
    // Direct position update without physics interference
    setPosition({ x: Math.max(0, newX), y: Math.max(0, newY) })
    
    // Store velocity for potential release effect
    const deltaX = e.clientX - dragDataRef.current.startX
    const deltaY = e.clientY - dragDataRef.current.startY
    setVelocity({ x: deltaX * 0.05, y: deltaY * 0.05 })
    
    dragDataRef.current.startX = e.clientX
    dragDataRef.current.startY = e.clientY
  }, [isDragging, allBalls, ballIndex])

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return
    
    setIsDragging(false)
    onDragEnd?.()
    document.body.style.cursor = 'default'
    document.body.style.userSelect = 'auto'
    
    // Check if dropped at bottom, if so settle immediately
    const containerHeight = window.innerHeight
    const flagSize = 56
    if (position.y >= containerHeight - flagSize - 10) {
      setIsSettled(true)
      setVelocity({ x: 0, y: 0 })
    }
  }, [isDragging, onDragEnd, position.y])



  // Event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  return (
    <div
      ref={flagRef}
      className={`absolute select-none transition-transform duration-75 ${
        isDragging ? 'scale-110 z-50' : 'hover:scale-105 z-20'
      } ${isActive && isSettled ? 'cursor-grab' : 'cursor-default'}`}
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(0, 0) ${isDragging ? 'rotate(5deg)' : ''}`
      }}
      onMouseDown={handleMouseDown}
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
  const [dragCount, setDragCount] = useState(0)
  const flagsRef = useRef([])
  const allBallsRef = useRef([]) // Shared array for ball-to-ball interactions
  
  // Initialize balls array
  useEffect(() => {
    allBallsRef.current = new Array(TECH_IMAGES.length).fill(null)
  }, [])

  // Generate initial positions at the top for booming effect
  const initialPositions = useMemo(() => {
    const getBoomPosition = (index) => {
      const maxWidth = (typeof window !== 'undefined' ? window.innerWidth : 1200) - 100
      
      // Start all balls from the top center with slight spread
      const centerX = maxWidth / 2
      const spread = 200 // How much to spread the balls horizontally
      const randomOffset = (Math.random() - 0.5) * spread
      
      return {
        x: Math.max(50, Math.min(maxWidth - 50, centerX + randomOffset)),
        y: -100 - (index * 20) // Start above viewport with slight staggering
      }
    }
    return TECH_IMAGES.map((_, index) => getBoomPosition(index))
  }, [])

  // Activate physics when component comes into view
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center+=200",
      end: "bottom center-=200",
      onEnter: () => {
        setIsActive(true)
        // Boom effect - all balls appear at once with scale animation
        gsap.to(flagsRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.02, // Very fast stagger for boom effect
          ease: "back.out(1.7)"
        })
      },
      onLeave: () => {
        setIsActive(false)
      },
      onEnterBack: () => {
        setIsActive(true)
      },
      onLeaveBack: () => {
        setIsActive(false)
      }
    })
  }, { scope: containerRef })

  const handleDragStart = useCallback(() => {
    setDragCount(prev => prev + 1)
  }, [])

  const handleDragEnd = useCallback(() => {
    setDragCount(prev => Math.max(0, prev - 1))
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
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              allBalls={allBallsRef.current}
              ballIndex={index}
            />
          </div>
        ))}
      </div>
      

    </div>
  )
} 