import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { CircleX, CircleCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "14+",
    text: "Years of Proven Expertise",
    position: { left: '10%', top: '40%' },
    color: "#764ED3",
    image: "/images/Years of Industry Experience.webp",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "1000+",
    text: " Projects Delivered",
    position: { left: '35%', top: '20%' },
    color: "#30C857",
    image: "/images/Projects Delivered.webp",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "15+",
    text: "Countries Served",
    position: { right: '15%', top: '15%' },
    color: "#4E9AD3",
    image: "/images/Clients Across Countries.webp",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "Agile + ",
    text: " DevOps DNA",
    position: { left: '30%', bottom: '-5%' },
    color: "#4ED3C3",
    image: "/images/Driven Workflow.webp",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "4.9★",
    text: "Client Satisfaction",
    position: { right: '25%', bottom: '-5%' },
    color: "#D34E50",
    image: "/images/Client Satisfaction.webp",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "100%",
    text: "Scalable & Secure Solutions",
    position: { right: '-2%', bottom: '30%' },
    color: "#DDA853",
    image: "/images/safety.webp",
    imageSize: "w-[100px] h-[100px]"
  }
];

const NextGen = React.memo(function NextGen() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const finalTextRef = useRef(null);
  const finalText2Ref = useRef(null);
  const newFinalTextRef = useRef(null);
  const newbeforeFinalTextRef = useRef(null);
  const journeyRef = useRef(null);
  const journeyStepsRef = useRef([]);
  const journeyPathRef = useRef(null);
  const pathCircleRefs = useRef([]);
  const warningRefs = useRef([]);
  const successRefs = useRef([]);
  const waitImagesRef = useRef([]);
  const centerHeadingRef = useRef(null);

  // Mobile detection state
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Second journey refs
  const journey2Ref = useRef(null);
  const journey2StepsRef = useRef([]);
  const journey2PathRef = useRef(null);
  const path2CircleRefs = useRef([]);
  const newbeforeJourney2TextRef = useRef(null);

  // Third journey refs
  const journey3Ref = useRef(null);
  const journey3StepsRef = useRef([]);
  const journey3PathRef = useRef(null);
  const path3CircleRefs = useRef([]);

  const flipTitleRef = useRef(null);
  const flipTextRef = useRef(null);

  useGSAP(() => {
    // Mobile Performance Optimization: Simplify animations on mobile
    const isMobileDevice = isMobile;
    const animationSpeed = isMobileDevice ? 0.3 : 1; // 3x faster on mobile
    const reducedDuration = (duration) => isMobileDevice ? duration * 0.3 : duration;
    // Desktop-only slow/smooth factor for STATS animations
    const statsFactor = isMobileDevice ? 1.0 : 1.6;
    const statsEase = "sine.inOut";
    // Desktop-only slow/smooth factor for WAIT IMAGES
    const waitImageFactor = isMobileDevice ? 1 : 2.0;
    const waitEase = "sine.inOut";

    // Set initial states
    gsap.set(cardsRef.current, {
      opacity: 0,
      scale: 0.8,
      x: "50%",
      y: "50%"
    });

    gsap.set(finalTextRef.current, {
      opacity: 0,
      y: isMobileDevice ? 20 : 50
    });

    gsap.set(finalText2Ref.current, {
      opacity: 0,
      y: isMobileDevice ? 20 : 50
    });

    gsap.set(newFinalTextRef.current, {
      opacity: 0,
      y: isMobileDevice ? 20 : 50
    });

    gsap.set(newbeforeFinalTextRef.current, {
      opacity: 0,
      y: isMobileDevice ? 20 : 50
    });

    // Only set complex journey states on desktop
    if (!isMobileDevice) {
      gsap.set(journeyRef.current, {
        opacity: 0,
        y: 50
      });

      gsap.set(journeyStepsRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8
      });

      // Set initial states for path and circles
      gsap.set(journeyPathRef.current, {
        opacity: 0
      });

      // Set initial state for the path stroke
      const pathElement = journeyPathRef.current?.querySelector('#motionPath');
      if (pathElement) {
        gsap.set(pathElement, {
          strokeDasharray: 1000,
          strokeDashoffset: 1000
        });
      }
    } else {
      // Mobile: Simple card animations
      gsap.set(journeyRef.current, {
        opacity: 0,
        y: 20
      });

      gsap.set(journeyStepsRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.95
      });
    }

    // Set initial states for text elements
    gsap.set(centerHeadingRef.current, {
      opacity: 0,
      x: isMobileDevice ? 50 : 100
    });

    gsap.set(warningRefs.current, {
      opacity: 0,
      x: isMobileDevice ? -20 : -50
    });

    gsap.set(successRefs.current, {
      opacity: 0,
      x: isMobileDevice ? -20 : -50
    });

    // Mobile Performance: Reduce wait images complexity
    if (!isMobileDevice && waitImagesRef.current.length > 0) {
      // Set initial positions with VARIETY - spread around screen edges naturally
      gsap.set(waitImagesRef.current, {
        opacity: 0,
        left: (i) => {
          const leftStartPositions = [
            "-20%", "-15%", "-25%", "-10%", "-18%", "-22%"
          ];
          const rightStartPositions = [
            "120%", "115%", "125%", "110%", "118%", "122%"
          ];

          if (i < 6) {
            return leftStartPositions[i];
          } else {
            return rightStartPositions[i - 6];
          }
        },
        top: (i) => {
          const leftSidePositions = [
            "5%", "30%", "15%", "60%", "80%", "45%"
          ];
          const rightSidePositions = [
            "10%", "35%", "20%", "65%", "85%", "50%"
          ];

          if (i < 6) {
            return leftSidePositions[i];
          } else {
            return rightSidePositions[i - 6];
          }
        },
        right: 'auto',
        bottom: 'auto'
      });
    }

    // Journey initial states - optimized for mobile
    gsap.set(journey2Ref.current, {
      opacity: 0,
      y: isMobileDevice ? 20 : 50
    });

    gsap.set(journey2StepsRef.current, {
      opacity: 0,
      y: isMobileDevice ? 20 : 50,
      scale: isMobileDevice ? 0.95 : 0.8
    });

    gsap.set(journey3Ref.current, {
      opacity: 0,
      y: isMobileDevice ? 20 : 50
    });

    gsap.set(journey3StepsRef.current, {
      opacity: 0,
      y: isMobileDevice ? 20 : 50,
      scale: isMobileDevice ? 0.95 : 0.8
    });

    // Desktop-only complex SVG animations
    if (!isMobileDevice) {
      // Set initial states for second journey path and circles
      gsap.set(journey2PathRef.current, {
        opacity: 0
      });

      const path2Element = journey2PathRef.current?.querySelector('#motionPath2');
      if (path2Element) {
        gsap.set(path2Element, {
          strokeDasharray: 1000,
          strokeDashoffset: 1000
        });
      }

      // Set initial states for third journey path and circles
      gsap.set(journey3PathRef.current, {
        opacity: 0
      });

      const path3Element = journey3PathRef.current?.querySelector('#motionPath3');
      if (path3Element) {
        gsap.set(path3Element, {
          strokeDasharray: 1000,
          strokeDashoffset: 1000
        });
      }
    }

    // Mobile Performance: Shorter scroll distance and faster scrub
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: isMobileDevice ? "+=450%" : "+=1200%", // Increase scroll distance for slower pacing
        pin: true,
        scrub: isMobileDevice ? 1.5 : 4.5, // Higher scrub for smoother, slower response
        // markers: true
      }
    });

    // Stage 1: Head text appears (first scroll) - Mobile Optimized
    timeline.from(headingRef.current, {
      opacity: 0,
      y: isMobileDevice ? 20 : 50,
      scale: 1,
      duration: reducedDuration(1.5)
    });

    // Stage 2: All 6 stats cards appear - Mobile Optimized
    timeline.to(headingRef.current, {
      scale: 0.85,
      duration: reducedDuration(1),
      ease: "power2.inOut"
    });

    // Cards appear - Mobile: Much faster, Desktop: original speed
    cardsRef.current.forEach((card, index) => {
      const position = stats[index].position;

      if (isMobileDevice) {
        // Mobile: Faster, simpler animation
        timeline.to(card, {
          opacity: 1,
          scale: 1,
          left: index < 3 ? `${20 + (index * 25)}%` : `${20 + ((index - 3) * 25)}%`,
          top: index < 3 ? '25%' : '75%',
          right: 'auto',
          bottom: 'auto',
          x: 0,
          y: 0,
          duration: 0.3, // Much faster on mobile
          ease: "power2.out"
        }, `+=${index === 0 ? 0 : 0.1}`); // Faster stagger on mobile
      } else {
        // Desktop: slower, smoother positioning for stats
        timeline.to(card, {
          opacity: 1,
          scale: 1,
          x: position.left || position.right || "0%",
          y: position.top || position.bottom || "0%",
          duration: 1.2 * statsFactor,
          ease: statsEase
        }, `+=${index === 0 ? 0 : (0.8 * statsFactor).toFixed(2)}`);
      }
    });

    // Stage 3: Cards stack in center - Mobile Optimized
    timeline
      .to({}, { duration: reducedDuration(5) * statsFactor }) // Hold cards - slower on desktop
      .to(headingRef.current, {
        opacity: 0,
        scale: 0.7,
        duration: reducedDuration(8),
        ease: "power3.inOut"
      })
      .to(cardsRef.current, {
        xPercent: -50,
        yPercent: -50,
        left: "50%",
        top: "50%",
        right: "auto",
        bottom: "auto",
        x: 0,
        y: 0,
        scale: 1,
        duration: reducedDuration(12) * statsFactor, // Slower on desktop
        ease: statsEase
      })
      .to(cardsRef.current, {
        z: (i) => -i * 10,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        duration: reducedDuration(8) * statsFactor,
        stagger: {
          each: reducedDuration(1.2) * statsFactor,
          from: "end"
        },
        ease: statsEase
      });

    // Stage 4: Cards fade out, final text appears - Mobile Optimized
    timeline
      .to({}, { duration: reducedDuration(8) * statsFactor }) // Longer hold on desktop
      .to(cardsRef.current, {
        y: "-100%",
        opacity: 0,
        scale: 0.8,
        duration: reducedDuration(10) * statsFactor, // Slower on desktop
        stagger: {
          each: reducedDuration(1.5) * statsFactor,
          from: "end"
        },
        ease: statsEase
      })
      .to(finalTextRef.current, {
        opacity: 1,
        y: 0,
        duration: reducedDuration(6), // Faster text appearance on mobile
        ease: "power1.out"
      }, "-=4");

    // Stage 5: Warning/Success phase - Mobile Optimized
    timeline
      .to({}, { duration: reducedDuration(6) }) // Shorter hold on mobile
      .to(finalTextRef.current, {
        opacity: 0,
        y: isMobileDevice ? -20 : -50,
        duration: reducedDuration(5), // Much faster on mobile
        ease: "power1.inOut"
      })
      // Flip animation - faster on mobile
      .to([flipTitleRef.current, flipTextRef.current], {
        rotateY: 0,
        duration: isMobileDevice ? 0.3 : 0.6,
        ease: "power2.inOut"
      })
      .to(finalText2Ref.current, {
        opacity: 1,
        y: 0,
        duration: reducedDuration(6), // Faster on mobile
        ease: "power1.out"
      }, "-=3");

    // Mobile vs Desktop: Different animation complexity
    if (isMobileDevice) {
      // Mobile: Simple warning/success text transitions only
      timeline
        .to(centerHeadingRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.5, // Very fast on mobile
          ease: "power2.out"
        }, "+=0.5")
        // Quick warning text animations
        .to(warningRefs.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        }, "+=0.2")
        // Quick success transition
        .to(centerHeadingRef.current, {
          innerHTML: "If you act now...",
          duration: 0.1
        }, "+=1")
        .to([flipTitleRef.current, flipTextRef.current], {
          rotateY: 180,
          duration: 0.3,
          ease: "power2.inOut"
        })
        .to(warningRefs.current, {
          opacity: 0,
          x: -20,
          duration: 0.4,
          stagger: 0.1
        })
        .to(successRefs.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        });
    } else {
      // Desktop: Full complex animations
      timeline
        // Step 1: Heading appears from right, images fade in
        .to(centerHeadingRef.current, {
          opacity: 1,
          x: 0,
          duration: 5, // Much slower heading appearance  
          ease: "power2.out"
        }, "+=3") // Longer delay
        .to(waitImagesRef.current, {
          opacity: 0.6,
          duration: 6 * waitImageFactor, // Slower image fade in
          ease: waitEase
        }, "<")

        // Step 2: Warning text 1 appears, images STAY IN LEFT/RIGHT GRIDS
        .to(warningRefs.current[0], {
          opacity: 1,
          x: 0,
          duration: 4, // Slower warning text appearance
          ease: "power2.out"
        }, "+=3") // Longer delay between steps
        // Smooth movement to grid positions in one step
        .to(waitImagesRef.current, {
          left: (i) => {
            // LEFT GRID: 0-33% | RIGHT GRID: 67-100% | CENTER GRID: 33-67% (TEXT ONLY)
            if (i < 6) {
              return ["-2%", "8%", "18%", "3%", "13%", "23%"][i]; // LEFT GRID ONLY - moved slightly right
            } else {
              return ["95%", "85%", "75%", "90%", "80%", "70%"][i - 6]; // RIGHT GRID ONLY
            }
          },
          top: (i) => {
            const leftPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];
            const rightPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];

            if (i < 6) {
              return leftPositions[i];
            } else {
              return rightPositions[i - 6];
            }
          },
          duration: 10 * waitImageFactor, // Much slower image movement
          ease: waitEase
        }, "<")

        // Step 3: Warning text 2 appears, images stay in grids
        .to(warningRefs.current[1], {
          opacity: 1,
          x: 0,
          duration: 4, // Slower warning text 2
          ease: "power2.out"
        }, "+=3") // Longer delay

        // Step 4: Warning text 3 appears, images stay in grids
        .to(warningRefs.current[2], {
          opacity: 1,
          x: 0,
          duration: 4, // Slower warning text 3
          ease: "power2.out"
        }, "+=3") // Longer delay

        // Step 5: Warning text 4 appears, images SURROUND TEXT with BIG GAPS
        .to(warningRefs.current[3], {
          opacity: 1,
          x: 0,
          duration: 4, // Slower warning text 4
          ease: "power2.out"
        }, "+=3") // Longer delay
        // Move images to surround text with gradual positioning
        .to(waitImagesRef.current, {
          left: (i) => {
            // SURROUND text with BIG GAPS - stay in grids
            if (i < 6) {
              return ["-2%", "8%", "18%", "3%", "13%", "23%"][i]; // LEFT GRID with gaps - moved slightly right
            } else {
              return ["95%", "85%", "75%", "90%", "80%", "70%"][i - 6]; // RIGHT GRID with gaps
            }
          },
          top: (i) => {
            // Spread around text with BIG GAPS
            const leftPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];
            const rightPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];

            if (i < 6) {
              return leftPositions[i];
            } else {
              return rightPositions[i - 6];
            }
          },
          duration: 8 * waitImageFactor, // Much slower image repositioning
          ease: waitEase
        }, "+=2") // Longer delay before repositioning

        // SECOND SCROLL: SUCCESS PHASE - MUCH SLOWER

        // Step 6: Flip to back (success phase)
        .to(centerHeadingRef.current, {
          opacity: 0, // Hide old text (not needed, but keep for smoothness)
          x: -100,
          duration: 0.1,
          ease: "power2.in"
        }, "+=4")
        .to([flipTitleRef.current, flipTextRef.current], { rotateY: 180, duration: 0.6, ease: "power2.inOut" })
        .set(centerHeadingRef.current, {
          innerHTML: "If you act now..."
        })
        .to(centerHeadingRef.current, {
          opacity: 1,
          x: 0,
          y: -20,
          duration: 0.1,
          ease: "power2.out"
        })

        // Success animations with slower pyramid formation
        .to(warningRefs.current[0], {
          opacity: 0,
          x: -50,
          duration: 4, // Slower warning fade out
          ease: "power2.in"
        }, "+=3") // Longer delay
        .to(successRefs.current[0], {
          opacity: 1,
          x: 0,
          duration: 4, // Slower success text appearance
          ease: "power2.out"
        }, "<1")
        // Start pyramid formation - move top images first
        .to(waitImagesRef.current, {
          opacity: 1,
          left: (i) => {
            // STEP 1: Only top step (1 image each side), others stay in original grids
            if (i === 0) return "15%"; // Left top center - moved slightly right
            if (i === 6) return "84%"; // Right top center

            // Keep other images in their grid positions but visible
            if (i < 6) {
              return ["-2%", "8%", "18%", "3%", "13%", "23%"][i]; // LEFT GRID - moved slightly right
            } else {
              return ["95%", "85%", "75%", "90%", "80%", "70%"][i - 6]; // RIGHT GRID
            }
          },
          top: (i) => {
            if (i === 0 || i === 6) return "30%"; // Top step level

            // Keep others in their original positions
            const leftPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];
            const rightPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];

            if (i < 6) {
              return leftPositions[i];
            } else {
              return rightPositions[i - 6];
            }
          },
          duration: 8 * waitImageFactor, // Much slower pyramid formation start
          ease: waitEase
        }, "+=3") // Longer delay

        // Step 7: Success text 2 appears, ADD MIDDLE STEP (2 images each side)
        .to(warningRefs.current[1], {
          opacity: 0,
          x: -50,
          duration: 4, // Slower warning fade
          ease: "power2.in"
        }, "+=3") // Longer delay
        .to(successRefs.current[1], {
          opacity: 1,
          x: 0,
          duration: 4, // Slower success text
          ease: "power2.out"
        }, "<1")
        // Add middle step to pyramid
        .to(waitImagesRef.current, {
          left: (i) => {
            // STEP 2: Top step + Middle step
            if (i === 0) return "15%"; // Left top - moved slightly right
            if (i === 6) return "84%"; // Right top

            // MIDDLE STEP: Add 2 images each side
            if (i === 1) return "11%"; // Left middle left - moved slightly right
            if (i === 2) return "19%"; // Left middle right - moved slightly right
            if (i === 7) return "80%"; // Right middle left  
            if (i === 8) return "88%"; // Right middle right

            // Keep remaining images in grid positions
            if (i < 6) {
              return ["-2%", "8%", "18%", "3%", "13%", "23%"][i]; // LEFT GRID - moved slightly right
            } else {
              return ["95%", "85%", "75%", "90%", "80%", "70%"][i - 6]; // RIGHT GRID
            }
          },
          top: (i) => {
            if (i === 0 || i === 6) return "30%"; // Top step
            if (i === 1 || i === 2 || i === 7 || i === 8) return "45%"; // Middle step

            // Keep others in original positions
            const leftPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];
            const rightPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];

            if (i < 6) {
              return leftPositions[i];
            } else {
              return rightPositions[i - 6];
            }
          },
          duration: 8 * waitImageFactor, // Much slower middle step formation
          ease: waitEase
        }, "+=3") // Longer delay

        // Step 8: Success text 3 appears, ALMOST COMPLETE PYRAMID (add more to bottom)
        .to(warningRefs.current[2], {
          opacity: 0,
          x: -50,
          duration: 4, // Slower warning fade
          ease: "power2.in"
        }, "+=3") // Longer delay
        .to(successRefs.current[2], {
          opacity: 1,
          x: 0,
          duration: 4, // Slower success text
          ease: "power2.out"
        }, "<1")
        // Add partial bottom step to pyramid
        .to(waitImagesRef.current, {
          left: (i) => {
            // STEP 3: Top + Middle + Partial Bottom
            if (i === 0) return "15%"; // Left top - moved slightly right
            if (i === 6) return "84%"; // Right top

            // MIDDLE STEP
            if (i === 1) return "11%"; // Left middle left - moved slightly right
            if (i === 2) return "19%"; // Left middle right - moved slightly right
            if (i === 7) return "80%"; // Right middle left  
            if (i === 8) return "88%"; // Right middle right

            // BOTTOM STEP: Add 2 more images each side
            if (i === 3) return "7%";  // Left bottom left - moved slightly right
            if (i === 4) return "15%"; // Left bottom center - moved slightly right
            if (i === 9) return "84%"; // Right bottom left
            if (i === 10) return "92%"; // Right bottom right

            // Keep remaining in grid
            if (i < 6) {
              return ["-2%", "8%", "18%", "3%", "13%", "23%"][i]; // LEFT GRID - moved slightly right
            } else {
              return ["95%", "85%", "75%", "90%", "80%", "70%"][i - 6]; // RIGHT GRID
            }
          },
          top: (i) => {
            if (i === 0 || i === 6) return "30%"; // Top step
            if (i === 1 || i === 2 || i === 7 || i === 8) return "45%"; // Middle step
            if (i === 3 || i === 4 || i === 9 || i === 10) return "60%"; // Bottom step

            // Keep others in original positions
            const leftPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];
            const rightPositions = ["10%", "30%", "20%", "70%", "50%", "40%"];

            if (i < 6) {
              return leftPositions[i];

            } else {
              return rightPositions[i - 6];
            }
          },
          duration: 8 * waitImageFactor, // Much slower partial bottom formation
          ease: waitEase
        }, "+=3") // Longer delay

        // Step 9: Success text 4 appears, COMPLETE PYRAMID (all images in formation)
        .to(warningRefs.current[3], {
          opacity: 0,
          x: -50,
          duration: 4, // Slower final warning fade
          ease: "power2.in"
        }, "+=3") // Longer delay
        .to(successRefs.current[3], {
          opacity: 1,
          x: 0,
          duration: 4, // Slower final success text
          ease: "power2.out"
        }, "<1")
        // Complete the pyramid formation
        .to(waitImagesRef.current, {
          left: (i) => {
            // FINAL STEP: COMPLETE PYRAMID FORMATION (original perfect positions)

            // LEFT SIDE PYRAMID
            if (i === 0) return "18%"; // Top (1 image) - moved slightly right
            if (i === 1) return "9%";  // Middle left (2 images) - moved slightly right
            if (i === 2) return "18%"; // Middle right - moved slightly right
            if (i === 3) return "1%";  // Bottom left (3 images) - moved slightly right
            if (i === 4) return "9%";  // Bottom center - moved slightly right
            if (i === 5) return "18%"; // Bottom right - moved slightly right

            // RIGHT SIDE PYRAMID  
            if (i === 6) return "74%"; // Top (1 image)
            if (i === 7) return "74%"; // Middle left (2 images)
            if (i === 8) return "83%"; // Middle right
            if (i === 9) return "74%";  // Bottom left (3 images)
            if (i === 10) return "83%"; // Bottom center
            if (i === 11) return "91%"; // Bottom right

            return "50%"; // Fallback center
          },
          top: (i) => {
            // PYRAMID HEIGHTS (3 levels) - adjusted for better spacing
            if (i === 0 || i === 6) return "25%"; // Top step - moved up
            if (i === 1 || i === 2 || i === 7 || i === 8) return "42%"; // Middle step - same
            if (i === 3 || i === 4 || i === 5 || i === 9 || i === 10 || i === 11) return "59%"; // Bottom step - moved down
            return "50%"; // Fallback center
          },
          duration: 10 * waitImageFactor, // Much slower final pyramid completion
          ease: waitEase
        }, "+=3"); // Longer delay before final formation

      // Stage 6: Fade out all elements with custom pyramid animation - MUCH SLOWER
      timeline
        .to({}, { duration: 8 }) // Hold final pyramid much longer

        // Center texts (warning/success) go up and fade - MUCH SLOWER FADE
        .to([finalText2Ref.current, ...warningRefs.current, ...successRefs.current, centerHeadingRef.current], {
          opacity: 0,
          y: -100,
          duration: 12, // Much slower text fade out
          ease: "power1.inOut",
          stagger: {
            each: 0.8, // Longer stagger between each text
            from: "start"
          }
        })

        // Left side pyramid (indices 0-5) goes down and fades - MUCH SLOWER FADE
        .to([waitImagesRef.current[0], waitImagesRef.current[1], waitImagesRef.current[2], waitImagesRef.current[3], waitImagesRef.current[4], waitImagesRef.current[5]], {
          opacity: 0,
          y: "100px",
          scale: 0.5,
          duration: 15 * waitImageFactor, // Much slower left pyramid fade
          ease: waitEase,
          stagger: {
            each: 1.0 * waitImageFactor, // Longer stagger between each image
            from: "start"
          }
        }, "<")

        // Right side pyramid (indices 6-11) goes down and fades - MUCH SLOWER FADE
        .to([waitImagesRef.current[6], waitImagesRef.current[7], waitImagesRef.current[8], waitImagesRef.current[9], waitImagesRef.current[10], waitImagesRef.current[11]], {
          opacity: 0,
          y: "100px",
          scale: 0.5,
          duration: 15 * waitImageFactor, // Much slower right pyramid fade
          ease: waitEase,
          stagger: {
            each: 1.0 * waitImageFactor, // Longer stagger between each image
            from: "start"
          }
        }, "<")

        // Show "Your digital journey with webnox"
        .to(newbeforeFinalTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 6, // Slower appearance
          ease: "power1.out"
        }, "-=3") // Start earlier for smoother transition
        .to({}, { duration: 6 }) // Hold journey text much longer
        .to(newbeforeFinalTextRef.current, {
          opacity: 0,
          y: -50,
          duration: 5, // Slower fade out
          ease: "power1.inOut"
        })

        // Journey Section - EXTREMELY SLOW (Hidden on mobile)
        .to(journeyRef.current, {
          opacity: 1,
          y: 0,
          duration: 10, // Much slower journey section appearance
          ease: "power1.out"
        }, "+=5") // Much longer delay before journey starts

        // Animate steps appearing one by one - EXTREMELY SLOW
        .to(journeyStepsRef.current[0], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 8, // Much slower step 1 appearance
          ease: "back.out(1.5)"
        }, "-=3")
        .to(journeyStepsRef.current[1], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 8, // Much slower step 2 appearance
          ease: "back.out(1.5)"
        }, "-=4") // Much longer overlap with previous step
        .to(journeyStepsRef.current[2], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 8, // Much slower step 3 appearance
          ease: "back.out(1.5)"
        }, "-=4") // Much longer overlap with previous step

        // Show the SVG container - MUCH SLOWER
        .to(journeyPathRef.current, {
          opacity: 1,
          duration: 4 // Much slower SVG container appearance
        }, "-=4")

        // Animate the curved path drawing - EXTREMELY SLOW
        .to(journeyPathRef.current.querySelector('#motionPath'), {
          strokeDashoffset: 0,
          duration: 25, // Extremely slow path drawing
          ease: "power1.inOut"
        }, "-=2")

        // Animate static start point circle (Hexagon 2) - MUCH SLOWER
        .to(pathCircleRefs.current[0], {
          opacity: 1,
          scale: 1,
          duration: 4, // Much slower circle appearance
          ease: "back.out(1.5)"
        }, "-=5")

        // Animate static end point circle (Hexagon 3) - MUCH SLOWER
        .to(pathCircleRefs.current[1], {
          opacity: 1,
          scale: 1,
          duration: 4, // Much slower circle appearance
          ease: "back.out(1.5)"
        }, "-=4")

        // Hold the journey for an extremely long time
        .to({}, { duration: 15 }) // Extremely long hold time

        // Fade out journey and show final text - MUCH SLOWER
        .to(journeyRef.current, {
          opacity: 0,
          y: -100,
          duration: 10, // Much slower journey fade out
          ease: "power1.in"
        })

        // Second Journey Section - EXTREMELY SLOW
        .to(journey2Ref.current, {
          opacity: 1,
          y: 0,
          duration: 10, // Much slower second journey appearance
          ease: "power1.out"
        }, "+=5") // Much longer delay

        // Animate second journey steps appearing one by one - EXTREMELY SLOW
        .to(journey2StepsRef.current[0], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 8, // Much slower step 4 appearance
          ease: "back.out(1.5)"
        }, "-=3")
        .to(journey2StepsRef.current[1], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 8, // Much slower step 5 appearance
          ease: "back.out(1.5)"
        }, "-=4") // Much longer overlap
        .to(journey2StepsRef.current[2], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 8, // Much slower step 6 appearance
          ease: "back.out(1.5)"
        }, "-=4") // Much longer overlap

        // Show the second SVG container - MUCH SLOWER
        .to(journey2PathRef.current, {
          opacity: 1,
          duration: 4 // Much slower second SVG appearance
        }, "-=4")

        // Animate the second curved path drawing - EXTREMELY SLOW
        .to(journey2PathRef.current.querySelector('#motionPath2'), {
          strokeDashoffset: 0,
          duration: 25, // Extremely slow second path drawing
          ease: "power1.inOut"
        }, "-=2")

        // Animate static start point circle for second journey - MUCH SLOWER
        .to(path2CircleRefs.current[0], {
          opacity: 1,
          scale: 1,
          duration: 4, // Much slower circle appearance
          ease: "back.out(1.5)"
        }, "-=5")

        // Animate static end point circle for second journey - MUCH SLOWER
        .to(path2CircleRefs.current[1], {
          opacity: 1,
          scale: 1,
          duration: 4, // Much slower circle appearance
          ease: "back.out(1.5)"
        }, "-=4")

        // Hold the second journey for an extremely long time
        .to({}, { duration: 15 }) // Extremely long hold time

        // Fade out second journey - MUCH SLOWER
        .to(journey2Ref.current, {
          opacity: 0,
          y: -100,
          duration: 10, // Much slower second journey fade out
          ease: "power1.in"
        })

        // Third Journey Section - EXTREMELY SLOW
        .to(journey3Ref.current, {
          opacity: 1,
          y: 0,
          duration: 10, // Much slower third journey appearance
          ease: "power1.out"
        }, "+=5") // Much longer delay

        // Animate third journey steps appearing one by one - EXTREMELY SLOW
        .to(journey3StepsRef.current[0], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 8, // Much slower step 7 appearance
          ease: "back.out(1.5)"
        }, "-=3")
        .to(journey3StepsRef.current[1], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 8, // Much slower step 8 appearance
          ease: "back.out(1.5)"
        }, "-=4") // Much longer overlap
        .to(journey3StepsRef.current[2], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 8, // Much slower step 9 appearance
          ease: "back.out(1.5)"
        }, "-=4") // Much longer overlap

        // Show the third SVG container - MUCH SLOWER
        .to(journey3PathRef.current, {
          opacity: 1,
          duration: 4 // Much slower third SVG appearance
        }, "-=4")

        // Animate the third curved path drawing - EXTREMELY SLOW
        .to(journey3PathRef.current.querySelector('#motionPath3'), {
          strokeDashoffset: 0,
          duration: 25, // Extremely slow third path drawing
          ease: "power1.inOut"
        }, "-=2")

        // Animate static start point circle for third journey - MUCH SLOWER
        .to(path3CircleRefs.current[0], {
          opacity: 1,
          scale: 1,
          duration: 4, // Much slower circle appearance
          ease: "back.out(1.5)"
        }, "-=5")

        // Animate static end point circle for third journey - MUCH SLOWER
        .to(path3CircleRefs.current[1], {
          opacity: 1,
          scale: 1,
          duration: 4, // Much slower circle appearance
          ease: "back.out(1.5)"
        }, "-=4")

        // Hold the third journey for an extremely long time
        .to({}, { duration: 15 }) // Extremely long hold time

        // Fade out third journey and show final text - EXTREMELY SLOW
        .to(journey3Ref.current, {
          opacity: 0,
          y: -100,
          duration: 10, // Much slower third journey fade out
          ease: "power1.in"
        })
        .to(newFinalTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 12, // Extremely slow final text appearance
          ease: "power1.out"
        }, "-=3"); // Better overlap timing
    }

    // Remove timeScale since we're using scrub now
    // timeline.timeScale(0.05);

  }, []);

  // Determine phase by rotateY (0 = warning, 180 = success)
  // We'll use a state to track the current rotateY for border color
  const [rotateY, setRotateY] = React.useState(0);
  React.useEffect(() => {
    const update = () => {
      if (flipTitleRef.current) {
        const style = window.getComputedStyle(flipTitleRef.current);
        const matrix = style.transform;
        // Parse matrix to get rotateY
        let angle = 0;
        if (matrix && matrix !== 'none') {
          const values = matrix.split('(')[1].split(')')[0].split(',');
          // 3D matrix: matrix3d(a1, a2, ..., a16)
          if (values.length === 16) {
            // https://stackoverflow.com/a/20552344
            const m11 = parseFloat(values[0]);
            const m13 = parseFloat(values[2]);
            angle = Math.round(Math.atan2(m13, m11) * (180 / Math.PI));
            if (angle < 0) angle += 360;
          }
        }
        setRotateY(angle);
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const isWarningPhase = rotateY < 90 || rotateY > 270;

  return (
    <div ref={sectionRef} className="w-full min-h-screen bg-gradient-to-bl from-white via-[#e0f8ff] to-[#e8e0ff]">
      <div className="max-w-[1600px] mx-auto px-8 relative min-h-screen flex items-center justify-center">
        {/* Initial Heading */}
        <h1
          ref={headingRef}
          className="text-[42px] font-normal font-sans text-center leading-[1.3] max-w-[800px] text-black absolute z-10"

        >
          Next-gen software solutions that elevate your business to stay ahead of change!

        </h1>

        {/* Current Final Text */}
        <div
          ref={finalTextRef}
          className="absolute text-center text-black"
          style={{ zIndex: 25 }}
        >
          <h2 className="text-[42px] font-normal font-sans leading-[1.3] mb-4" >
            Don't be the business that ignores AI.
          </h2>
          <h2 className="text-[42px] font-normal font-sans leading-[1.3]" >
            Be the brand that leads the industry.
          </h2>
        </div>

        <div
          ref={finalText2Ref}
          className="absolute w-full flex justify-center items-center"
          style={{ top: '20%', left: '50%', transform: 'translate(-50%, -10%)', zIndex: 25 }}
        >
          {/* Success/Warning Card Container */}
          <div className={`w-full max-w-2xl sm:max-w-2xl max-w-sm bg-white/60 rounded-2xl shadow-lg p-4 sm:p-10 relative transition-colors duration-500 ${isWarningPhase ? 'border-2 border-red-200' : 'border-2 border-green-200'}`}>
            {/* Flip Title */}
            <div className="flip-title-wrapper perspective-1000 w-full flex justify-center mb-4 sm:mb-8">
              <div
                ref={flipTitleRef}
                className="flip-title-inner w-full"
                style={{
                  width: '100%',
                  height: isMobile ? '60px' : '90px',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s cubic-bezier(.4,2,.6,1)'
                }}
              >
                <div
                  className="flip-title-front absolute w-full h-full flex items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <span className={`${isMobile ? 'text-[32px]' : 'text-[72px]'} font-sans font-bold text-black text-center`} >
                    If you wait...
                  </span>
                </div>
                <div
                  className="flip-title-back absolute w-full h-full flex items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <span className={`${isMobile ? 'text-[32px]' : 'text-[72px]'} font-sans font-bold text-black text-center`} >
                    If you act now...
                  </span>
                </div>
              </div>
            </div>
            {/* Flip Texts */}
            <div className="flip-text-wrapper perspective-1000 w-full flex justify-center">
              <div
                ref={flipTextRef}
                className="flip-text-inner w-full"
                style={{
                  width: '100%',
                  minHeight: isMobile ? '200px' : '320px',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s cubic-bezier(.4,2,.6,1)'
                }}
              >
                {/* Warning Texts (Front) */}
                <div
                  className="flip-text-front absolute w-full h-full flex flex-col justify-center"
                  style={{
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className={`space-y-3 sm:space-y-6 max-w-xl mx-auto px-4 sm:px-8 font-sans font-bold`} style={{ zIndex: 10 }}>
                    <div ref={el => warningRefs.current[0] = el} className="flex items-center justify-start opacity-0 backdrop-blur-sm rounded-lg py-2 sm:py-3 px-3 sm:px-4 border-2 border-red-200 bg-white/20 shadow-sm">
                      <CircleX className={`text-red-500 ${isMobile ? 'w-5 h-5 mr-2' : 'w-7 h-7 mr-4'}`} strokeWidth={2.5} />
                      <span className={`${isMobile ? 'text-sm' : 'text-lg'} warning-success-text`}>Revenue stays stagnant</span>
                    </div>
                    <div ref={el => warningRefs.current[1] = el} className="flex items-center justify-start opacity-0 backdrop-blur-sm rounded-lg py-2 sm:py-3 px-3 sm:px-4 border-2 border-red-200 bg-white/20 shadow-sm">
                      <CircleX className={`text-red-500 ${isMobile ? 'w-5 h-5 mr-2' : 'w-7 h-7 mr-4'}`} strokeWidth={2.5} />
                      <span className={`${isMobile ? 'text-sm' : 'text-lg'} warning-success-text`}>Competitors overtake your space</span>
                    </div>
                    <div ref={el => warningRefs.current[2] = el} className="flex items-center justify-start opacity-0 backdrop-blur-sm rounded-lg py-2 sm:py-3 px-3 sm:px-4 border-2 border-red-200 bg-white/20 shadow-sm">
                      <CircleX className={`text-red-500 ${isMobile ? 'w-5 h-5 mr-2' : 'w-7 h-7 mr-4'}`} strokeWidth={2.5} />
                      <span className={`${isMobile ? 'text-sm' : 'text-lg'} warning-success-text`}>AI replaces inefficiency</span>
                    </div>
                    <div ref={el => warningRefs.current[3] = el} className="flex items-center justify-start opacity-0 backdrop-blur-sm rounded-lg py-2 sm:py-3 px-3 sm:px-4 border-2 border-red-200 bg-white/20 shadow-sm">
                      <CircleX className={`text-red-500 ${isMobile ? 'w-5 h-5 mr-2' : 'w-7 h-7 mr-4'}`} strokeWidth={2.5} />
                      <span className={`${isMobile ? 'text-sm' : 'text-lg'} warning-success-text`}>Your brand fades into obscurity</span>
                    </div>
                  </div>
                </div>
                {/* Success Texts (Back) */}
                <div
                  className="flip-text-back absolute w-full h-full flex flex-col justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className={`space-y-3 sm:space-y-6 max-w-xl mx-auto px-4 sm:px-8 font-sans font-bold`} style={{ zIndex: 10 }}>
                    <div ref={el => successRefs.current[0] = el} className="flex items-center justify-start opacity-0 backdrop-blur-sm rounded-lg py-2 sm:py-3 px-3 sm:px-4 border-2 border-green-200 bg-white/20 shadow-sm">
                      <CircleCheck className={`text-green-500 ${isMobile ? 'w-5 h-5 mr-2' : 'w-7 h-7 mr-4'}`} strokeWidth={2.5} />
                      <span className={`${isMobile ? 'text-sm' : 'text-lg'} warning-success-text`}>Smart AI Integration</span>
                    </div>
                    <div ref={el => successRefs.current[1] = el} className="flex items-center justify-start opacity-0 backdrop-blur-sm rounded-lg py-2 sm:py-3 px-3 sm:px-4 border-2 border-green-200 bg-white/20 shadow-sm">
                      <CircleCheck className={`text-green-500 ${isMobile ? 'w-5 h-5 mr-2' : 'w-7 h-7 mr-4'}`} strokeWidth={2.5} />
                      <span className={`${isMobile ? 'text-sm' : 'text-lg'} warning-success-text`}>Marketing Automation</span>
                    </div>
                    <div ref={el => successRefs.current[2] = el} className="flex items-center justify-start opacity-0 backdrop-blur-sm rounded-lg py-2 sm:py-3 px-3 sm:px-4 border-2 border-green-200 bg-white/20 shadow-sm">
                      <CircleCheck className={`text-green-500 ${isMobile ? 'w-5 h-5 mr-2' : 'w-7 h-7 mr-4'}`} strokeWidth={2.5} />
                      <span className={`${isMobile ? 'text-sm' : 'text-lg'} warning-success-text`}>Websites that Sell</span>
                    </div>
                    <div ref={el => successRefs.current[3] = el} className="flex items-center justify-start opacity-0 backdrop-blur-sm rounded-lg py-2 sm:py-3 px-3 sm:px-4 border-2 border-green-200 bg-white/20 shadow-sm">
                      <CircleCheck className={`text-green-500 ${isMobile ? 'w-5 h-5 mr-2' : 'w-7 h-7 mr-4'}`} strokeWidth={2.5} />
                      <span className={`${isMobile ? 'text-sm' : 'text-lg'} warning-success-text`}>Higher Profit Margins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={newbeforeFinalTextRef}
          className="absolute text-center text-black"
          style={{ zIndex: 25 }}
        >
          <h2 className="text-[52px] font-bold font-sans leading-[1.3] mb-4" >
            Your digital journey with <span className="text-[#2acbec]">webnox</span>
          </h2>
        </div>

        {/* First Journey Section - Desktop: Journey Layout, Mobile: Cards */}
        <div
          ref={journeyRef}
          className="absolute z-20 w-full h-full flex items-center justify-center left-50"
        >
          {isMobile ? (
            /* Mobile Card Layout */
            <div className="relative w-full h-full flex flex-col items-start justify-center pl-2 pr-16 space-y-16">
              {/* Step 1 Card */}
              <div
                ref={el => journeyStepsRef.current[0] = el}
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#0ea5e9]/20 -ml-40"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Discover & Define</h3>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">Our IT consulting approach ensures clear business goals, effective digital strategy, and transformation roadmaps.</p>
              </div>

              {/* Step 2 Card */}
              <div
                ref={el => journeyStepsRef.current[1] = el}
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#0ea5e9]/20 -ml-40 mt-13"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Experience-Led Design</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Our UI/UX design services create user-friendly experiences while our web and app development expertise ensures scalability and performance.</p>
              </div>

              {/* Step 3 Card */}
              <div
                ref={el => journeyStepsRef.current[2] = el}
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#0ea5e9]/20 -ml-40 -mt-3"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Agile Development</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">As a software development company, we follow agile methodologies to deliver custom web and app solutions with speed and stability.</p>
              </div>
            </div>
          ) : (
            /* Desktop Journey Layout */
            <div className="relative w-full max-w-6xl h-full flex items-center justify-center">

              {/* Curved Path SVG from firstline.svg */}
              <div className="absolute inset-0 w-full h-full">
                <svg
                  ref={journeyPathRef}
                  width="638"
                  height="497"
                  viewBox="0 0 638 497"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute opacity-0"
                  style={{
                    top: '40%',
                    left: '-1%',
                    width: '70%',
                    height: '35%'
                  }}
                >
                  <defs>
                    <linearGradient id="paint0_linear_1249_18918" x1="658.312" y1="-12.0066" x2="-124.122" y2="556.832" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00B9FF" />
                      <stop offset="0.813119" stopColor="#0076D9" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    id="motionPath"
                    d="M612 33.8559C514.828 15.4465 331.172 10.1014 325.235 245.861C322.454 356.318 256.839 505.612 26 463.805"
                    stroke="url(#paint0_linear_1249_18918)"
                    strokeWidth="51"
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                  />
                </svg>

                {/* Static Start Point Circle (Hexagon 2) */}
                <div
                  ref={el => pathCircleRefs.current[0] = el}
                  className="absolute w-14 h-14 bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white"
                  style={{
                    top: 'calc(30% + 12%)',
                    left: 'calc(3% + 48%)',
                    transform: 'translate(-50%, -50%)'
                  }}
                />

                {/* Static End Point Circle (Hexagon 3) */}
                <div
                  ref={el => pathCircleRefs.current[1] = el}
                  className="absolute w-14 h-14 bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white"
                  style={{
                    top: 'calc(30% + 41%)',
                    left: 'calc(3% + 16%)',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </div>

              {/* Step 1: Discover & Define - hexagon-line-circle-text (RIGHT LAYOUT) */}
              <div
                ref={el => journeyStepsRef.current[0] = el}
                className="absolute"
                style={{
                  right: '40%',
                  top: '25%',
                  transform: 'translateY(-50%)'
                }}
              >
                <div className="relative flex items-center justify-center font-sans">
                  {/* Hexagon */}
                  <div className="relative">
                    <div
                      className="w-32 h-32 bg-gradient-to-b from-[#e0f7ff] to-[#aeafaf] flex items-center justify-center shadow-lg relative border border-[#0ea5e9]/20 backdrop-blur-sm"
                      style={{
                        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                      }}
                    >
                      {/* Inner hexagon for content */}
                      <div
                        className="w-28 h-28 bg-gradient-to-b from-white to-[#f8fafc] flex items-center justify-center backdrop-blur-sm"
                        style={{
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        <span className="text-4xl font-bold text-[#0ea5e9] z-10">1</span>
                      </div>
                    </div>

                    {/* Line starting from hexagon right edge */}
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 z-0">
                      <div
                        className="h-0.5 bg-gradient-to-r from-[#1b80d5] to-[#3fd7f1]"
                        style={{ width: '250px' }}
                      ></div>
                    </div>
                  </div>

                  {/* Blue Circle */}
                  <div className="relative ml-[246px]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10 backdrop-blur-sm"></div>
                  </div>

                  {/* Text Content */}
                  <div className="text-content ml-8 flex-shrink-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Discover & Define</h3>
                    <p className="text-sm w-80 text-gray-800 leading-relaxed">Our IT consulting approach ensures clear business goals, effective digital strategy, and transformation roadmaps.</p>
                  </div>
                </div>
              </div>

              {/* Step 2: Experience-Led Design - text-circle-line-hexagon (LEFT LAYOUT) */}
              <div
                ref={el => journeyStepsRef.current[1] = el}
                className="absolute"
                style={{
                  left: '2%',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                <div className="relative flex items-center justify-center font-sans">
                  {/* Text Content */}
                  <div className="text-content mr-32 flex-shrink-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Experience-Led Design</h3>
                    <p className="text-sm w-80 text-gray-800 leading-relaxed">Our UI/UX design services create user-friendly experiences while our web and app development expertise ensures scalability and performance.</p>
                  </div>

                  {/* Blue Circle */}
                  <div className="relative ml-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10 backdrop-blur-sm"></div>
                  </div>

                  {/* Hexagon */}
                  <div className="relative ml-[246px]">
                    <div
                      className="w-32 h-32 bg-gradient-to-b from-[#e0f7ff] to-[#aeafaf] flex items-center justify-center shadow-lg relative border border-[#0ea5e9]/20 backdrop-blur-sm"
                      style={{
                        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                      }}
                    >
                      {/* Inner hexagon for content */}
                      <div
                        className="w-28 h-28 bg-gradient-to-b from-white to-[#f8fafc] flex items-center justify-center backdrop-blur-sm"
                        style={{
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        <span className="text-4xl font-bold text-[#0ea5e9] z-10">2</span>
                      </div>
                    </div>

                    {/* Line starting from hexagon left edge */}
                    <div className="absolute top-1/2 right-full transform -translate-y-1/2 z-0">
                      <div
                        className="h-0.5 bg-gradient-to-r from-[#3fd7f1] to-[#1b80d5]"
                        style={{ width: '250px' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Agile Development - hexagon-line-circle-text (RIGHT LAYOUT) */}
              <div
                ref={el => journeyStepsRef.current[2] = el}
                className="absolute"
                style={{
                  right: '40%',
                  bottom: '15%',
                  transform: 'translateY(50%)'
                }}
              >
                <div className="relative flex items-center justify-center font-sans">
                  {/* Hexagon */}
                  <div className="relative">
                    <div
                      className="w-32 h-32 bg-gradient-to-b from-[#e0f7ff] to-[#aeafaf] flex items-center justify-center shadow-lg relative border border-[#0ea5e9]/20 backdrop-blur-sm"
                      style={{
                        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                      }}
                    >
                      {/* Inner hexagon for content */}
                      <div
                        className="w-28 h-28 bg-gradient-to-b from-white to-[#f8fafc] flex items-center justify-center backdrop-blur-sm"
                        style={{
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        <span className="text-4xl font-bold text-[#0ea5e9] z-10">3</span>
                      </div>
                    </div>

                    {/* Line starting from hexagon right edge */}
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 z-0">
                      <div
                        className="h-0.5 bg-gradient-to-r from-[#1b80d5] to-[#3fd7f1]"
                        style={{ width: '250px' }}
                      ></div>
                    </div>
                  </div>

                  {/* Blue Circle */}
                  <div className="relative ml-[246px]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10 backdrop-blur-sm"></div>
                  </div>

                  {/* Text Content */}
                  <div className="text-content ml-8 flex-shrink-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Agile Development</h3>
                    <p className="text-sm w-80 text-gray-800 leading-relaxed">As a software development company, we follow agile methodologies to deliver custom web and app solutions with speed and stability.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Second Journey Section - Desktop: Journey Layout, Mobile: Cards */}
        <div
          ref={journey2Ref}
          className="absolute z-20 w-full h-full pointer-events-none pt-2"
        >
          {isMobile ? (
            /* Mobile Card Layout */
            <div className="relative w-full h-full flex flex-col items-start justify-center pl-2 pr-16 space-y-16 pointer-events-auto">
              {/* Step 4 Card */}
              <div
                ref={el => journey2StepsRef.current[0] = el}
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#0ea5e9]/20 ml-10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Intelligent Integration</h3>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">We use AI consulting services and automation solutions to create a streamlined digital backbone.</p>
              </div>

              {/* Step 5 Card */}
              <div
                ref={el => journey2StepsRef.current[1] = el}
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#0ea5e9]/20 ml-10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Launch & Learn</h3>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">We launch with confidence and learn from real-world data. Our app development services and digital product testing ensure performance, scalability, and continuous growth.</p>
              </div>

              {/* Step 6 Card */}
              <div
                ref={el => journey2StepsRef.current[2] = el}
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#0ea5e9]/20 ml-10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Scale with Digital Marketing</h3>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">From visibility to virality, our digital marketing agency helps you scale with SEO services, content marketing, and social media campaigns designed to convert and grow your brand.</p>
              </div>
            </div>
          ) : (
            /* Desktop Journey Layout */
            <>
              {/* SVG Curved Path for Second Journey */}
              <div
                ref={journey2PathRef}
                className="absolute"
                style={{
                  top: '30%',
                  left: '10%',
                  width: '60%',
                  height: '60%',
                  zIndex: 1
                }}
              >
                <svg
                  viewBox="0 0 448 498"
                  className="w-full h-full"
                  style={{ overflow: 'visible' }}
                >
                  <defs>
                    <linearGradient id="paint0_linear_1525_37081_journey2" x1="-13.8615" y1="-128.398" x2="491.708" y2="563.316" gradientUnits="userSpaceOnUse">
                      <stop offset="0.0420851" stopColor="#0076D9" />
                      <stop offset="0.88859" stopColor="#00B9FF" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    id="motionPath2"
                    d="M40.0469 39C72.5652 140.139 202.026 312.295 343.214 238.975C387.78 215.831 406.76 207.539 369.84 241.578C292.74 312.66 157.269 429.977 332.818 394.974C353.412 390.868 376.668 386.618 392.15 400.804C403.956 411.622 412.666 429.848 405.139 457.591"
                    stroke="url(#paint0_linear_1525_37081_journey2)"
                    strokeWidth="32"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                  />
                </svg>

                {/* Static circles for second journey path start and end points */}
                <div className="absolute inset-0">
                  {/* Start point circle (positioned at path start) */}
                  <div
                    ref={el => path2CircleRefs.current[0] = el}
                    className={`absolute ${isMobile ? 'w-10 h-10' : 'w-14 h-14'} bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white`}
                    style={{
                      top: isMobile ? 'calc(25% + -27%)' : 'calc(30% + -27%)',
                      left: isMobile ? 'calc(5% + 16%)' : 'calc(10% + 16%)'
                    }}
                  ></div>

                  {/* End point circle (positioned at path end) */}
                  <div
                    ref={el => path2CircleRefs.current[1] = el}
                    className={`absolute ${isMobile ? 'w-10 h-10' : 'w-14 h-14'} bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white`}
                    style={{
                      top: isMobile ? 'calc(25% + 60%)' : 'calc(30% + 60%)',
                      left: isMobile ? 'calc(5% + 57%)' : 'calc(10% + 57%)'
                    }}
                  ></div>
                </div>
              </div>

              {/* Journey Steps for Second Journey */}
              <div className="relative w-full h-full" style={{ zIndex: 10 }}>
                {/* Step 4: Plan & Prototype - text-circle-line-hexagon (LEFT LAYOUT) */}
                <div
                  ref={el => journey2StepsRef.current[0] = el}
                  className="absolute"
                  style={{
                    left: isMobile ? '10%' : '20%',
                    top: isMobile ? '10%' : '15%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <div className="relative flex items-center justify-center font-sans">
                    {/* Text Content */}
                    <div className={`text-content ${isMobile ? 'mr-20' : 'mr-32'} flex-shrink-0`}>
                      <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-gray-800 mb-2`}>Intelligent Integration</h3>
                      <p className={`${isMobile ? 'text-xs w-48' : 'text-sm w-80'} text-gray-600 leading-relaxed`}>We use AI consulting services and automation solutions to create a streamlined digital backbone.</p>
                    </div>

                    {/* Blue Circle */}
                    <div className={`relative ${isMobile ? 'ml-4' : 'ml-8'}`}>
                      <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10 backdrop-blur-sm`}></div>
                    </div>

                    {/* Hexagon */}
                    <div className={`relative ${isMobile ? 'ml-[116px]' : 'ml-[246px]'}`}>
                      <div
                        className={`${isMobile ? 'w-20 h-20' : 'w-32 h-32'} bg-gradient-to-b from-[#e0f7ff] to-[#aeafaf] flex items-center justify-center shadow-lg relative border border-[#0ea5e9]/20 backdrop-blur-sm`}
                        style={{
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        {/* Inner hexagon for content */}
                        <div
                          className={`${isMobile ? 'w-16 h-16' : 'w-28 h-28'} bg-gradient-to-b from-white to-[#f8fafc] flex items-center justify-center backdrop-blur-sm`}
                          style={{
                            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                          }}
                        >
                          <span className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#0ea5e9] z-10`}>4</span>
                        </div>
                      </div>

                      {/* Line starting from hexagon left edge */}
                      <div className="absolute top-1/2 right-full transform -translate-y-1/2 z-0">
                        <div
                          className="h-0.5 bg-gradient-to-r from-[#3fd7f1] to-[#1b80d5]"
                          style={{ width: isMobile ? '120px' : '250px' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5: Build & Iterate - hexagon-line-circle-text (RIGHT LAYOUT) */}
                <div
                  ref={el => journey2StepsRef.current[1] = el}
                  className="absolute"
                  style={{
                    right: isMobile ? '10%' : '25%',
                    top: isMobile ? '45%' : '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <div className="relative flex items-center justify-center font-sans">
                    {/* Hexagon */}
                    <div className="relative">
                      <div
                        className={`${isMobile ? 'w-20 h-20' : 'w-32 h-32'} bg-gradient-to-b from-[#e0f7ff] to-[#aeafaf] flex items-center justify-center shadow-lg relative border border-[#0ea5e9]/20 backdrop-blur-sm`}
                        style={{
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        {/* Inner hexagon for content */}
                        <div
                          className={`${isMobile ? 'w-16 h-16' : 'w-28 h-28'} bg-gradient-to-b from-white to-[#f8fafc] flex items-center justify-center backdrop-blur-sm`}
                          style={{
                            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                          }}
                        >
                          <span className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#0ea5e9] z-10`}>5</span>
                        </div>
                      </div>

                      {/* Line starting from hexagon right edge */}
                      <div className="absolute top-1/2 left-full transform -translate-y-1/2 z-0">
                        <div
                          className="h-0.5 bg-gradient-to-r from-[#1b80d5] to-[#3fd7f1]"
                          style={{ width: isMobile ? '120px' : '250px' }}
                        ></div>
                      </div>
                    </div>

                    {/* Blue Circle */}
                    <div className={`relative ${isMobile ? 'ml-[116px]' : 'ml-[246px]'}`}>
                      <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10 backdrop-blur-sm`}></div>
                    </div>

                    {/* Text Content */}
                    <div className={`text-content ${isMobile ? 'ml-4' : 'ml-8'} flex-shrink-0`}>
                      <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-gray-800 mb-2`}>Launch & Learn</h3>
                      <p className={`${isMobile ? 'text-xs w-48' : 'text-sm w-80'} text-gray-800 leading-relaxed`}>We launch with confidence and learn from real-world data. Our app development services and digital product testing ensure performance, scalability, and continuous growth.</p>
                    </div>
                  </div>
                </div>

                {/* Step 6: Launch & Scale - text-circle-line-hexagon (LEFT LAYOUT) */}
                <div
                  ref={el => journey2StepsRef.current[2] = el}
                  className="absolute"
                  style={{
                    left: isMobile ? '10%' : '20%',
                    bottom: isMobile ? '30%' : '20%',
                    transform: 'translateY(50%)'
                  }}
                >
                  <div className="relative flex items-center justify-center font-sans">
                    {/* Text Content */}
                    <div className={`text-content ${isMobile ? 'mr-20' : 'mr-32'} flex-shrink-0`}>
                      <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-gray-800 mb-2`}>Scale with Digital Marketing</h3>
                      <p className={`${isMobile ? 'text-xs w-48' : 'text-sm w-80'} text-gray-800 leading-relaxed`}>From visibility to virality, our digital marketing agency helps you scale with SEO services, content marketing, and social media campaigns designed to convert and grow your brand.</p>
                    </div>

                    {/* Blue Circle */}
                    <div className={`relative ${isMobile ? 'ml-4' : 'ml-8'}`}>
                      <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10 backdrop-blur-sm`}></div>
                    </div>

                    {/* Hexagon */}
                    <div className={`relative ${isMobile ? 'ml-[116px]' : 'ml-[246px]'}`}>
                      <div
                        className={`${isMobile ? 'w-20 h-20' : 'w-32 h-32'} bg-gradient-to-b from-[#e0f7ff] to-[#aeafaf] flex items-center justify-center shadow-lg relative border border-[#0ea5e9]/20 backdrop-blur-sm`}
                        style={{
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        {/* Inner hexagon for content */}
                        <div
                          className={`${isMobile ? 'w-16 h-16' : 'w-28 h-28'} bg-gradient-to-b from-white to-[#f8fafc] flex items-center justify-center backdrop-blur-sm`}
                          style={{
                            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                          }}
                        >
                          <span className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#0ea5e9] z-10`}>6</span>
                        </div>
                      </div>

                      {/* Line starting from hexagon left edge */}
                      <div className="absolute top-1/2 right-full transform -translate-y-1/2 z-0">
                        <div
                          className="h-0.5 bg-gradient-to-r from-[#3fd7f1] to-[#1b80d5]"
                          style={{ width: isMobile ? '120px' : '250px' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Third Journey Section - Desktop: Journey Layout, Mobile: Cards */}
        <div
          ref={journey3Ref}
          className="absolute z-20 w-full h-full flex items-center justify-center left-50"
        >
          {isMobile ? (
            /* Mobile Card Layout */
            <div className="relative w-full h-full flex flex-col items-start justify-center pl-2 pr-16 space-y-16">
              {/* Step 7 Card */}
              <div
                ref={el => journey3StepsRef.current[0] = el}
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#0ea5e9]/20 -ml-40"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-white font-bold text-lg">7</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Optimize Across Touchpoints</h3>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">We refine user journeys with UX audits, mobile app enhancements, eCommerce upgrades, and performance tuning.</p>
              </div>

              {/* Step 8 Card */}
              <div
                ref={el => journey3StepsRef.current[1] = el}
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#0ea5e9]/20 -ml-40"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-white font-bold text-lg">8</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Support & Sustain</h3>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">Post-launch isn't the end. It's where we scale, monitor, support, and evolve your digital assets for long-term success.</p>
              </div>

              {/* Step 9 Card */}
              <div
                ref={el => journey3StepsRef.current[2] = el}
                className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#0ea5e9]/20 -ml-40 -mt-3"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-white font-bold text-lg">9</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Scale & Evolve</h3>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">Tech grows. You grow. And we grow with you.</p>
              </div>
            </div>
          ) : (
            /* Desktop Journey Layout */
            <div className="relative w-full max-w-6xl h-full flex items-center justify-center">

              {/* Curved Path SVG from thirdline.svg */}
              <div
                ref={journey3PathRef}
                className="absolute"
                style={{
                  top: isMobile ? '20%' : '25%',
                  left: isMobile ? '-2%' : '1%',
                  width: isMobile ? '70%' : '55%',
                  height: isMobile ? '75%' : '65%',
                  zIndex: 1
                }}
              >
                <svg
                  viewBox="0 0 460 526"
                  className="w-full h-full"
                  style={{ overflow: 'visible' }}
                >
                  <defs>
                    <linearGradient id="paint0_linear_1525_37082_journey3" x1="159.98" y1="-99.3735" x2="473.21" y2="430.425" gradientUnits="userSpaceOnUse">
                      <stop offset="0.0420851" stopColor="#0076D9" />
                      <stop offset="0.88859" stopColor="#00B9FF" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    id="motionPath3"
                    d="M40.082 39C40.0849 86.8002 128.82 196.581 385.519 249.193C426.378 257.568 432.708 254.547 391.803 262.692C370.899 266.854 347.005 273.569 324.556 283.756C239.646 322.287 221.824 473.889 129.06 483.332C111.844 485.084 91.6807 485.116 67.9926 482.817"
                    stroke="url(#paint0_linear_1525_37082_journey3)"
                    strokeWidth="32"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                  />
                </svg>

                {/* Static circles for third journey path start and end points */}
                <div className="absolute inset-0">
                  {/* Start point circle (positioned at path start) */}
                  <div
                    ref={el => path3CircleRefs.current[0] = el}
                    className={`absolute ${isMobile ? 'w-10 h-10' : 'w-14 h-14'} bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white`}
                    style={{
                      top: isMobile ? 'calc(20% + -22%)' : 'calc(25% + -22%)',
                      left: isMobile ? 'calc(-2% + 8%)' : 'calc(5% + 8%)'
                    }}
                  ></div>

                  {/* End point circle (positioned at path end) */}
                  <div
                    ref={el => path3CircleRefs.current[1] = el}
                    className={`absolute ${isMobile ? 'w-10 h-10' : 'w-14 h-14'} bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white`}
                    style={{
                      top: isMobile ? 'calc(20% + 62%)' : 'calc(25% + 62%)',
                      left: isMobile ? 'calc(-2% + 13%)' : 'calc(5% + 13%)'
                    }}
                  ></div>
                  {/* //middle circle */}
                  <div
                    ref={el => path3CircleRefs.current[2] = el}
                    className={`absolute ${isMobile ? 'w-10 h-10' : 'w-14 h-14'} bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white`}
                    style={{
                      top: isMobile ? 'calc(20% + 20%)' : 'calc(25% + 20%)',
                      left: isMobile ? 'calc(-2% + 73%)' : 'calc(5% + 73%)'
                    }}
                  ></div>

                </div>
              </div>

              {/* Journey Steps for Third Journey */}
              <div className="relative w-full h-full" style={{ zIndex: 10 }}>
                {/* Step 7: Optimize & Automate - hexagon-line-circle-text (RIGHT LAYOUT) */}
                <div
                  ref={el => journey3StepsRef.current[0] = el}
                  className="absolute"
                  style={{
                    right: isMobile ? '15%' : '40%',
                    top: isMobile ? '15%' : '25%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <div className="relative flex items-center justify-center font-sans">
                    {/* Hexagon */}
                    <div className="relative">
                      <div
                        className={`${isMobile ? 'w-20 h-20' : 'w-32 h-32'} bg-gradient-to-b from-[#e0f7ff] to-[#aeafaf] flex items-center justify-center shadow-lg relative border border-[#0ea5e9]/20 backdrop-blur-sm`}
                        style={{
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        {/* Inner hexagon for content */}
                        <div
                          className={`${isMobile ? 'w-16 h-16' : 'w-28 h-28'} bg-gradient-to-b from-white to-[#f8fafc] flex items-center justify-center backdrop-blur-sm`}
                          style={{
                            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                          }}
                        >
                          <span className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#0ea5e9] z-10`}>7</span>
                        </div>
                      </div>

                      {/* Line starting from hexagon right edge */}
                      <div className="absolute top-1/2 left-full transform -translate-y-1/2 z-0">
                        <div
                          className="h-0.5 bg-gradient-to-r from-[#1b80d5] to-[#3fd7f1]"
                          style={{ width: isMobile ? '120px' : '250px' }}
                        ></div>
                      </div>
                    </div>

                    {/* Blue Circle */}
                    <div className={`relative ${isMobile ? 'ml-[116px]' : 'ml-[246px]'}`}>
                      <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10 backdrop-blur-sm`}></div>
                    </div>

                    {/* Text Content */}
                    <div className={`text-content ${isMobile ? 'ml-4' : 'ml-8'} flex-shrink-0`}>
                      <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-gray-800 mb-2`}>Optimize Across Touchpoints</h3>
                      <p className={`${isMobile ? 'text-xs w-48' : 'text-sm w-80'} text-gray-800 leading-relaxed`}>We refine user journeys with UX audits, mobile app
                        enhancements, eCommerce upgrades, and
                        performance tuning.</p>
                    </div>
                  </div>
                </div>

                {/* Step 8: Monitor & Enhance - text-circle-line-hexagon (LEFT LAYOUT) */}
                <div
                  ref={el => journey3StepsRef.current[1] = el}
                  className="absolute"
                  style={{
                    left: isMobile ? '5%' : '-5%',
                    top: isMobile ? '45%' : '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <div className="relative flex items-center justify-center font-sans">
                    {/* Text Content */}
                    <div className={`text-content ${isMobile ? 'mr-20' : 'mr-32'} flex-shrink-0`}>
                      <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-gray-800 mb-2`}>Support & Sustain</h3>
                      <p className={`${isMobile ? 'text-xs w-48' : 'text-sm max-w-sm'} text-gray-8  00 leading-relaxed`}>Post-launch isn't the end. It's where we scale,
                        monitor, support, and evolve your digital assets
                        for long-term success.</p>
                    </div>

                    {/* Blue Circle */}
                    <div className={`relative ${isMobile ? 'ml-4' : 'ml-8'}`}>
                      <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10 backdrop-blur-sm`}></div>
                    </div>

                    {/* Hexagon */}
                    <div className={`relative ${isMobile ? 'ml-[116px]' : 'ml-[246px]'}`}>
                      <div
                        className={`${isMobile ? 'w-20 h-20' : 'w-32 h-32'} bg-gradient-to-b from-[#e0f7ff] to-[#aeafaf] flex items-center justify-center shadow-lg relative border border-[#0ea5e9]/20 backdrop-blur-sm`}
                        style={{
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        {/* Inner hexagon for content */}
                        <div
                          className={`${isMobile ? 'w-16 h-16' : 'w-28 h-28'} bg-gradient-to-b from-white to-[#f8fafc] flex items-center justify-center backdrop-blur-sm`}
                          style={{
                            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                          }}
                        >
                          <span className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#0ea5e9] z-10`}>8</span>
                        </div>
                      </div>

                      {/* Line starting from hexagon left edge */}
                      <div className="absolute top-1/2 right-full transform -translate-y-1/2 z-0">
                        <div
                          className="h-0.5 bg-gradient-to-r from-[#3fd7f1] to-[#1b80d5]"
                          style={{ width: isMobile ? '120px' : '250px' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 9: Evolve & Lead - hexagon-line-circle-text (RIGHT LAYOUT) */}
                <div
                  ref={el => journey3StepsRef.current[2] = el}
                  className="absolute"
                  style={{
                    right: isMobile ? '15%' : '40%',
                    bottom: isMobile ? '25%' : '15%',
                    transform: 'translateY(50%)'
                  }}
                >
                  <div className="relative flex items-center justify-center font-sans">
                    {/* Hexagon */}
                    <div className="relative">
                      <div
                        className={`${isMobile ? 'w-20 h-20' : 'w-32 h-32'} bg-gradient-to-b from-[#e0f7ff] to-[#aeafaf] flex items-center justify-center shadow-lg relative border border-[#0ea5e9]/20 backdrop-blur-sm`}
                        style={{
                          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                        }}
                      >
                        {/* Inner hexagon for content */}
                        <div
                          className={`${isMobile ? 'w-16 h-16' : 'w-28 h-28'} bg-gradient-to-b from-white to-[#f8fafc] flex items-center justify-center backdrop-blur-sm`}
                          style={{
                            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                          }}
                        >
                          <span className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#0ea5e9] z-10`}>9</span>
                        </div>
                      </div>

                      {/* Line starting from hexagon right edge */}
                      <div className="absolute top-1/2 left-full transform -translate-y-1/2 z-0">
                        <div
                          className="h-0.5 bg-gradient-to-r from-[#1b80d5] to-[#3fd7f1]"
                          style={{ width: isMobile ? '120px' : '250px' }}
                        ></div>
                      </div>
                    </div>

                    {/* Blue Circle */}
                    <div className={`relative ${isMobile ? 'ml-[116px]' : 'ml-[246px]'}`}>
                      <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} rounded-full bg-gradient-to-b from-[#3ed7f0] to-[#1b72d1] flex items-center justify-center shadow-lg z-10 backdrop-blur-sm`}></div>
                    </div>

                    {/* Text Content */}
                    <div className={`text-content ${isMobile ? 'ml-4' : 'ml-8'} flex-shrink-0`}>
                      <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-gray-800 mb-2`}>Scale & Evolve</h3>
                      <p className={`${isMobile ? 'text-xs w-48' : 'text-sm w-80'} text-gray-800 leading-relaxed`}>Tech grows. You grow. And we grow with you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* New Final Text */}
        <div
          ref={newFinalTextRef}
          className="absolute text-center text-black"
          style={{ zIndex: 25 }}
        >
          <h2 className={`${isMobile ? 'text-[28px]' : 'text-[42px]'} font-normal font-sans leading-[1.3] mb-4 px-4`} >
            Step into the AI era with strategies designed to lead, not catch up.
          </h2>
        </div>

        {/* Background Wait Images - Desktop Only for Performance */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 30 }}>
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                ref={el => waitImagesRef.current[i] = el}
                className="absolute w-32 h-32 opacity-20"
                style={{
                  left: i < 6 ? `${5 + (i * 12)}%` : `${50 + ((i - 6) * 8)}%`,
                  bottom: '-100px',
                  zIndex: 30
                }}
              >
                <Image
                  src={`/images/wait${i + 1}.webp`}
                  alt={`Wait icon ${i + 1}`}
                  width={170}
                  height={170}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  priority={false}
                />
              </div>
            ))}
          </div>
        )}

        {/* Stats Container */}
        <div ref={containerRef} className="absolute inset-0 flex items-center justify-center perspective-[2000px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`absolute rounded-[10px] sm:rounded-[24px] md:rounded-[32px] flex flex-col items-center justify-center shadow-lg backface-visible overflow-hidden ${isMobile ? 'w-[80px] aspect-square' : 'w-[140px] sm:w-[180px] md:w-[220px] aspect-square'}`}
              style={{
                ...stat.position,
                transform: 'translate(-50%, -50%)',
                transformStyle: 'preserve-3d',
                backgroundColor: stat.color,
                // Mobile-specific positioning for 3-top, 3-bottom layout
                ...(isMobile && (() => {
                  const row = Math.floor(index / 3);
                  const col = index % 3;
                  let top;
                  if (row === 0) {
                    // Stagger the first row: middle card higher
                    top = col === 1 ? '14%' : '30%';
                  } else {
                    // Stagger the second row: middle card higher
                    top = col === 1 ? '70%' : '82%';
                  }
                  return {
                    left: `${22 + col * 28}%`,
                    top,
                    right: 'auto',
                    bottom: 'auto'
                  };
                })())
              }}
            >
              <div className={`relative w-full h-full flex flex-col items-center justify-center text-white ${isMobile ? 'p-1' : 'p-2 sm:p-6 md:p-10'}`}>
                <div className={`${isMobile ? 'w-[24px] h-[24px]' : 'w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px]'} relative mb-0.5 sm:mb-4 md:mb-6`}>
                  <Image
                    src={stat.image}
                    alt={stat.text}
                    width={isMobile ? 24 : 100}
                    height={isMobile ? 24 : 100}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    className="drop-shadow-lg"
                  />
                </div>
                <div className={`${isMobile ? 'text-[10px]' : 'text-lg'} font-bold mb-0.5 sm:mb-2 font-sans`}>
                  {stat.number}
                </div>
                <p className={`text-center ${isMobile ? 'text-[7px]' : 'md:text-md '} font-medium opacity-90 font-sans px-0.5 sm:px-2`}>
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default NextGen;