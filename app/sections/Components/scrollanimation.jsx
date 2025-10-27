   "use client"
   import { useEffect, useRef } from "react"
    import { gsap } from "gsap"
    import { ScrollTrigger } from "gsap/ScrollTrigger"
    import React from "react"

    gsap.registerPlugin(ScrollTrigger)

    const Scroll3DSections = ({ children }) => {
    const containerRef = useRef(null)
    const sectionsRef = useRef([])
  
    useEffect(() => {
      const mm = ScrollTrigger.matchMedia()
  
      mm.add("(min-width: 1024px)", () => {
        const ctx = gsap.context(() => {
          const sections = sectionsRef.current.filter(Boolean)
          sections.forEach((sectionEl) => {
            // Create a wrapper div for the 3D effect
            const wrapper = sectionEl.querySelector('.scroll-3d-wrapper')
            
            if (wrapper) {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: sectionEl,
                  start: "top 80%",
                  end: "bottom 20%",
                  scrub: true,
                }
              })
    
              tl.fromTo(
                wrapper,
                {
                  opacity: 0,
                  y: 60,
                  rotationX: 8,
                  z: -80,
                  transformPerspective: 1000,
                  transformOrigin: "50% 50%",
                },
                {
                  opacity: 1,
                  y: 0,
                  rotationX: 0,
                  z: 0,
                  ease: "power2.out",
                  duration: 1,
                }
              ).to(wrapper, {
                opacity: 0,
                y: -60,
                rotationX: -6,
                z: -80,
                ease: "power2.in",
                duration: 1,
              })
            } else {
              // Fallback to original animation if wrapper not found
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: sectionEl,
                  start: "top 80%",
                  end: "bottom 20%",
                  scrub: true,
                }
              })
    
              tl.fromTo(
                sectionEl,
                {
                  opacity: 0,
                  y: 60,
                  rotationX: 8,
                  z: -80,
                  transformPerspective: 1000,
                  transformOrigin: "50% 50%",
                },
                {
                  opacity: 1,
                  y: 0,
                  rotationX: 0,
                  z: 0,
                  ease: "power2.out",
                  duration: 1,
                }
              ).to(sectionEl, {
                opacity: 0,
                y: -60,
                rotationX: -6,
                z: -80,
                ease: "power2.in",
                duration: 1,
              })
            }
          })
        }, containerRef)
  
        return () => ctx.revert()
      })
  
      return () => mm.revert()
    }, [])
  
    return (
      <div
        ref={containerRef}
        className="relative space-y-8 md:space-y-12"
        style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      >
        {React.Children.map(children, (child, idx) => (
          <div
            ref={(el) => (sectionsRef.current[idx] = el)}
            className="will-change-transform"
            style={{ 
              pointerEvents: 'auto',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div className="scroll-3d-wrapper" style={{ pointerEvents: 'auto' }}>
              {child}
            </div>
          </div>
        ))}
      </div>
    )
    }

  export default Scroll3DSections;