import React, { useRef } from 'react';
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
    image: "/images/Years of Industry Experience.png",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "1000+",
    text: " Projects Delivered",
    position: { left: '35%', top: '20%' },
    color: "#30C857",
    image: "/images/Projects Delivered.png",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "15+",
    text: "Countries Served",
    position: { right: '15%', top: '15%' },
    color: "#4E9AD3",
    image: "/images/Clients Across Countries.png",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "Agile + ",
    text: " DevOps DNA",
    position: { left: '30%', bottom: '4%' },
    color: "#4ED3C3",
    image: "/images/Driven Workflow.png",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "4.9★",
    text: "Client Satisfaction",
    position: { right: '25%', bottom: '15%' },
    color: "#D34E50",
    image: "/images/Client Satisfaction.png",
    imageSize: "w-[100px] h-[100px]"
  },
  {
    number: "100%",
    text: "Scalable & Secure Solutions",
    position: { right: '5%', bottom: '40%' },
    color: "#DDA853",
    image: "/images/safety.png",
    imageSize: "w-[100px] h-[100px]"
  }
];

function NextGen() {
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

  useGSAP(() => {
    // Set initial states
    gsap.set(cardsRef.current, {
      opacity: 0,
      scale: 0.8,
      x: "50%",
      y: "50%"
    });

    gsap.set(finalTextRef.current, {
      opacity: 0,
      y: 50
    });

    gsap.set(finalText2Ref.current, {
      opacity: 0,
      y: 50
    });

    gsap.set(newFinalTextRef.current, {
      opacity: 0,
      y: 50
    });

    gsap.set(newbeforeFinalTextRef.current, {
      opacity: 0,
      y: 50
    });

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

    // Set initial states for all text elements
    gsap.set(centerHeadingRef.current, {
      opacity: 0,
      x: 100
    });

    gsap.set(warningRefs.current, {
      opacity: 0,
      x: -50
    });

    gsap.set(successRefs.current, {
      opacity: 0,
      x: -50
    });

    // Set initial positions with VARIETY - spread around screen edges naturally
    gsap.set(waitImagesRef.current, {
      opacity: 0,
      left: (i) => {
        // More natural spread from different directions
        const leftStartPositions = [
          "-20%", "-15%", "-25%", // Far left with variety
          "-10%", "-18%", "-22%"  // Different distances from left edge
        ];
        const rightStartPositions = [
          "120%", "115%", "125%", // Far right with variety  
          "110%", "118%", "122%"  // Different distances from right edge
        ];

        if (i < 6) {
          return leftStartPositions[i];
        } else {
          return rightStartPositions[i - 6];
        }
      },
      top: (i) => {
        // More variety in vertical positioning - some from corners, some from edges
        const leftSidePositions = [
          "5%",   // Top-left corner
          "30%",  // Upper-left 
          "15%",  // Top-left area
          "60%",  // Lower-left
          "80%",  // Bottom-left
          "45%"   // Middle-left
        ];
        const rightSidePositions = [
          "10%",  // Top-right corner
          "35%",  // Upper-right
          "20%",  // Top-right area  
          "65%",  // Lower-right
          "85%",  // Bottom-right
          "50%"   // Middle-right
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

    // Second journey initial states
    gsap.set(newbeforeJourney2TextRef.current, {
      opacity: 0,
      y: 50
    });

    gsap.set(journey2Ref.current, {
      opacity: 0,
      y: 50
    });

    gsap.set(journey2StepsRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.8
    });

    // Set initial states for second journey path and circles
    gsap.set(journey2PathRef.current, {
      opacity: 0
    });

    // Set initial state for the second path stroke
    const path2Element = journey2PathRef.current?.querySelector('#motionPath2');
    if (path2Element) {
      gsap.set(path2Element, {
        strokeDasharray: 1000,
        strokeDashoffset: 1000
      });
    }

    // Third journey initial states
    gsap.set(journey3Ref.current, {
      opacity: 0,
      y: 50
    });

    gsap.set(journey3StepsRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.8
    });

    // Set initial states for third journey path and circles
    gsap.set(journey3PathRef.current, {
      opacity: 0
    });

    // Set initial state for the third path stroke
    const path3Element = journey3PathRef.current?.querySelector('#motionPath3');
    if (path3Element) {
      gsap.set(path3Element, {
        strokeDasharray: 1000,
        strokeDashoffset: 1000
      });
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 2,
        // markers: true
      }
    });

    // Stage 1: Fade in text
    timeline.from(headingRef.current, {
      opacity: 0,
      y: 50,
      scale: 1,
      duration: 2
    });

    // Stage 2: Zoom out text slightly and bring in cards
    timeline.to(headingRef.current, {
      scale: 0.85,
      duration: 2,
      ease: "power2.inOut"
    });

    // Cards appear and move to their positions
    cardsRef.current.forEach((card, index) => {
      const position = stats[index].position;
      timeline.to(card, {
        opacity: 1,
        scale: 1,
        x: position.left || position.right || "0%",
        y: position.top || position.bottom || "0%",
        duration: 2,
        ease: "power2.out",
      }, "-=1.5");
    });

    // Stage 3: Stack cards in center and fade out text
    timeline
      .to(headingRef.current, {
        opacity: 0,
        scale: 0.7,
        duration: 2,
        ease: "power2.inOut"
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
        duration: 2,
        ease: "power2.inOut"
      })
      .to(cardsRef.current, {
        z: (i) => -i * 10,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        duration: 2,
        stagger: {
          each: 0.2,
          from: "end"
        },
        ease: "power2.inOut"
      });

    // Stage 4: Move cards up and fade out, bring in final text
    timeline
      .to(cardsRef.current, {
        y: "-100%",
        opacity: 0,
        scale: 0.8,
        duration: 3,
        stagger: {
          each: 0.3,
          from: "end"
        },
        ease: "power1.inOut"
      })
      .to(finalTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power1.out"
      }, "-=2");

    // Stage 5: Transition to "if you wait" text and warning sequence
    timeline
      .to({}, { duration: 2 })
      .to(finalTextRef.current, {
        opacity: 0,
        y: -50,
        duration: 2,
        ease: "power1.inOut"
      })
      .to(finalText2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power1.out"
      }, "-=1.5")

      // FIRST SCROLL: WARNING PHASE

      // Step 1: Heading appears from right, images fade in
      .to(centerHeadingRef.current, {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }, "+=1")
      .to(waitImagesRef.current, {
        opacity: 0.6,
        duration: 2,
        ease: "power1.out"
      }, "<")

      // Step 2: Warning text 1 appears, images STAY IN LEFT/RIGHT GRIDS
      .to(warningRefs.current[0], {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }, "+=1")
      .to(waitImagesRef.current, {
        left: (i) => {
          // LEFT GRID: 0-33% | RIGHT GRID: 67-100% | CENTER GRID: 33-67% (TEXT ONLY)
          if (i < 6) {
            return ["5%", "15%", "25%", "10%", "20%", "30%"][i]; // LEFT GRID ONLY
          } else {
            return ["95%", "85%", "75%", "90%", "80%", "70%"][i - 6]; // RIGHT GRID ONLY
          }
        },
        duration: 2,
        ease: "power2.out"
      }, "<")

      // Step 3: Warning text 2 appears, images stay in grids
      .to(warningRefs.current[1], {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }, "+=1")

      // Step 4: Warning text 3 appears, images stay in grids
      .to(warningRefs.current[2], {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }, "+=1")

      // Step 5: Warning text 4 appears, images SURROUND TEXT with BIG GAPS
      .to(warningRefs.current[3], {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }, "+=1")
      .to(waitImagesRef.current, {
        left: (i) => {
          // SURROUND text with BIG GAPS - stay in grids
          if (i < 6) {
            return ["5%", "15%", "25%", "10%", "20%", "30%"][i]; // LEFT GRID with gaps
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
        duration: 2,
        ease: "power2.out"
      }, "<")

      // SECOND SCROLL: SUCCESS PHASE

      // Step 6: Change heading to "If you act now..."
      .to(centerHeadingRef.current, {
        opacity: 0,
        x: -100,
        duration: 2,
        ease: "power2.in"
      }, "+=2")
      .set(centerHeadingRef.current, {
        innerHTML: "If you act now..."
      })
      .to(centerHeadingRef.current, {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      })

      // Success animations with slower pyramid formation
      .to(warningRefs.current[0], {
        opacity: 0,
        x: -50,
        duration: 2,
        ease: "power2.in"
      }, "+=1")
      .to(successRefs.current[0], {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }, "<0.5")
      .to(waitImagesRef.current, {
        opacity: 1,
        left: (i) => {
          // STEP 1: Only top step (1 image each side), others stay in original grids
          if (i === 0) return "16%"; // Left top center
          if (i === 6) return "84%"; // Right top center

          // Keep other images in their grid positions but visible
          if (i < 6) {
            return ["5%", "15%", "25%", "10%", "20%", "30%"][i]; // LEFT GRID
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
        duration: 2,
        ease: "power2.out"
      }, "<")

      // Step 7: Success text 2 appears, ADD MIDDLE STEP (2 images each side)
      .to(warningRefs.current[1], {
        opacity: 0,
        x: -50,
        duration: 2,
        ease: "power2.in"
      }, "+=1")
      .to(successRefs.current[1], {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }, "<0.5")
      .to(waitImagesRef.current, {
        left: (i) => {
          // STEP 2: Top step + Middle step
          if (i === 0) return "16%"; // Left top
          if (i === 6) return "84%"; // Right top

          // MIDDLE STEP: Add 2 images each side
          if (i === 1) return "12%"; // Left middle left
          if (i === 2) return "20%"; // Left middle right
          if (i === 7) return "80%"; // Right middle left  
          if (i === 8) return "88%"; // Right middle right

          // Keep remaining images in grid positions
          if (i < 6) {
            return ["5%", "15%", "25%", "10%", "20%", "30%"][i]; // LEFT GRID
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
        duration: 2,
        ease: "power2.out"
      }, "<")

      // Step 8: Success text 3 appears, ALMOST COMPLETE PYRAMID (add more to bottom)
      .to(warningRefs.current[2], {
        opacity: 0,
        x: -50,
        duration: 2,
        ease: "power2.in"
      }, "+=1")
      .to(successRefs.current[2], {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }, "<0.5")
      .to(waitImagesRef.current, {
        left: (i) => {
          // STEP 3: Top + Middle + Partial Bottom
          if (i === 0) return "16%"; // Left top
          if (i === 6) return "84%"; // Right top

          // MIDDLE STEP
          if (i === 1) return "12%"; // Left middle left
          if (i === 2) return "20%"; // Left middle right
          if (i === 7) return "80%"; // Right middle left  
          if (i === 8) return "88%"; // Right middle right

          // BOTTOM STEP: Add 2 more images each side
          if (i === 3) return "8%";  // Left bottom left
          if (i === 4) return "16%"; // Left bottom center
          if (i === 9) return "84%"; // Right bottom left
          if (i === 10) return "92%"; // Right bottom right

          // Keep remaining in grid
          if (i < 6) {
            return ["5%", "15%", "25%", "10%", "20%", "30%"][i]; // LEFT GRID
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
        duration: 2,
        ease: "power2.out"
      }, "<")

      // Step 9: Success text 4 appears, COMPLETE PYRAMID (all images in formation)
      .to(warningRefs.current[3], {
        opacity: 0,
        x: -50,
        duration: 2,
        ease: "power2.in"
      }, "+=1")
      .to(successRefs.current[3], {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out"
      }, "<0.5")
      .to(waitImagesRef.current, {
        left: (i) => {
          // FINAL STEP: COMPLETE PYRAMID FORMATION (original perfect positions)

          // LEFT SIDE PYRAMID
          if (i === 0) return "19%"; // Top (1 image)
          if (i === 1) return "10%"; // Middle left (2 images)
          if (i === 2) return "19%"; // Middle right
          if (i === 3) return "2%";  // Bottom left (3 images)
          if (i === 4) return "10%"; // Bottom center
          if (i === 5) return "19%"; // Bottom right

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
          // PYRAMID HEIGHTS (3 levels) - original perfect positions
          if (i === 0 || i === 6) return "30%"; // Top step
          if (i === 1 || i === 2 || i === 7 || i === 8) return "45%"; // Middle step
          if (i === 3 || i === 4 || i === 5 || i === 9 || i === 10 || i === 11) return "60%"; // Bottom step
          return "50%"; // Fallback center
        },
        duration: 3,
        ease: "power2.out"
      }, "<");

    // Stage 6: Fade out all elements with custom pyramid animation
    timeline
      .to({}, { duration: 3 })

      // Center texts (warning/success) go up and fade - SLOW FADE
      .to([finalText2Ref.current, ...warningRefs.current, ...successRefs.current, centerHeadingRef.current], {
        opacity: 0,
        y: -100,
        duration: 6,
        ease: "power1.inOut",
        stagger: {
          each: 0.3,
          from: "start"
        }
      })

      // Left side pyramid (indices 0-5) goes down and fades - SLOW FADE
      .to([waitImagesRef.current[0], waitImagesRef.current[1], waitImagesRef.current[2], waitImagesRef.current[3], waitImagesRef.current[4], waitImagesRef.current[5]], {
        opacity: 0,
        y: "100px",
        scale: 0.5,
        duration: 6,
        ease: "power1.inOut",
        stagger: {
          each: 0.2,
          from: "start"
        }
      }, "<")

      // Right side pyramid (indices 6-11) goes down and fades - SLOW FADE
      .to([waitImagesRef.current[6], waitImagesRef.current[7], waitImagesRef.current[8], waitImagesRef.current[9], waitImagesRef.current[10], waitImagesRef.current[11]], {
        opacity: 0,
        y: "100px",
        scale: 0.5,
        duration: 6,
        ease: "power1.inOut",
        stagger: {
          each: 0.2,
          from: "start"
        }
      }, "<")

      // Show "Your digital journey with webnox"
      .to(newbeforeFinalTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power1.out"
      }, "-=1")
      .to({}, { duration: 2 })
      .to(newbeforeFinalTextRef.current, {
        opacity: 0,
        y: -50,
        duration: 2,
        ease: "power1.inOut"
      })

      // Journey Section
      .to(journeyRef.current, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power2.out"
      }, "+=1")

      // Animate steps appearing one by one
      .to(journeyStepsRef.current[0], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1")
      .to(journeyStepsRef.current[1], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1.5")
      .to(journeyStepsRef.current[2], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1")

      // Show the SVG container
      .to(journeyPathRef.current, {
        opacity: 1,
        duration: 0.5
      }, "-=1")

      // Animate the curved path drawing
      .to(journeyPathRef.current.querySelector('#motionPath'), {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut"
      }, "-=0.5")

      // Animate static start point circle (Hexagon 2)
      .to(pathCircleRefs.current[0], {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(2)"
      }, "-=1.5")

      // Animate static end point circle (Hexagon 3) 
      .to(pathCircleRefs.current[1], {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(2)"
      }, "-=1")

      // Hold the journey for a moment
      .to({}, { duration: 3 })

      // Fade out journey and show final text
      .to(journeyRef.current, {
        opacity: 0,
        y: -100,
        duration: 3,
        ease: "power2.in"
      })

      // Second Journey Section
      .to(journey2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power2.out"
      }, "+=1")

      // Animate second journey steps appearing one by one
      .to(journey2StepsRef.current[0], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1")
      .to(journey2StepsRef.current[1], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1.5")
      .to(journey2StepsRef.current[2], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1")

      // Show the second SVG container
      .to(journey2PathRef.current, {
        opacity: 1,
        duration: 0.5
      }, "-=1")

      // Animate the second curved path drawing
      .to(journey2PathRef.current.querySelector('#motionPath2'), {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut"
      }, "-=0.5")

      // Animate static start point circle for second journey
      .to(path2CircleRefs.current[0], {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(2)"
      }, "-=1.5")

      // Animate static end point circle for second journey
      .to(path2CircleRefs.current[1], {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(2)"
      }, "-=1")

      // Hold the second journey for a moment
      .to({}, { duration: 3 })

      // Fade out second journey
      .to(journey2Ref.current, {
        opacity: 0,
        y: -100,
        duration: 3,
        ease: "power2.in"
      })

      // Third Journey Section
      .to(journey3Ref.current, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power2.out"
      }, "+=1")

      // Animate third journey steps appearing one by one
      .to(journey3StepsRef.current[0], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1")
      .to(journey3StepsRef.current[1], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1.5")
      .to(journey3StepsRef.current[2], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "back.out(1.7)"
      }, "-=1")

      // Show the third SVG container
      .to(journey3PathRef.current, {
        opacity: 1,
        duration: 0.5
      }, "-=1")

      // Animate the third curved path drawing
      .to(journey3PathRef.current.querySelector('#motionPath3'), {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut"
      }, "-=0.5")

      // Animate static start point circle for third journey
      .to(path3CircleRefs.current[0], {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(2)"
      }, "-=1.5")

      // Animate static end point circle for third journey
      .to(path3CircleRefs.current[1], {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(2)"
      }, "-=1")

      // Hold the third journey for a moment
      .to({}, { duration: 3 })

      // Fade out third journey and show final text
      .to(journey3Ref.current, {
        opacity: 0,
        y: -100,
        duration: 3,
        ease: "power2.in"
      })
      .to(newFinalTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 4,
        ease: "power1.out"
      }, "-=1");

    timeline.timeScale(0.3);

  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-screen bg-gradient-to-bl from-white via-[#e0f8ff] to-[#e8e0ff]">
      <div className="max-w-[1600px] mx-auto px-8 relative min-h-screen flex items-center justify-center">
        {/* Initial Heading */}
        <h1
          ref={headingRef}
          className="text-[42px] font-normal font-urbanist text-center leading-[1.3] max-w-[800px] text-black absolute z-10"
        >
          Next-gen software solutions that elevate your business to stay ahead of change!

        </h1>

        {/* Current Final Text */}
        <div
          ref={finalTextRef}
          className="absolute z-20 text-center text-black"
        >
          <h2 className="text-[42px] font-normal font-urbanist leading-[1.3] mb-4">
            Don't be the business that ignores AI.
          </h2>
          <h2 className="text-[42px] font-normal font-urbanist leading-[1.3]">
            Be the brand that leads the industry.
          </h2>
        </div>

        <div
          ref={finalText2Ref}
          className="absolute z-20 text-center text-black w-full"
        >
          <h2 ref={centerHeadingRef} className="text-[42px] font-normal font-urbanist leading-[1.3] mb-8">
            If you wait....
          </h2>

          {/* Warning texts */}
          <div className="space-y-6 max-w-xl mx-auto px-8">
            <div ref={el => warningRefs.current[0] = el} className="flex items-center justify-start opacity-0  backdrop-blur-sm rounded-lg py-3 px-4">
              <CircleX className="text-red-500 w-7 h-7 mr-4" strokeWidth={2.5} />
              <span className="text-lg font-medium">Revenue stays stagnant</span>
            </div>
            <div ref={el => warningRefs.current[1] = el} className="flex items-center justify-start opacity-0  backdrop-blur-sm rounded-lg py-3 px-4">
              <CircleX className="text-red-500 w-7 h-7 mr-4" strokeWidth={2.5} />
              <span className="text-lg font-medium">Competitors overtake your space</span>
            </div>
            <div ref={el => warningRefs.current[2] = el} className="flex items-center justify-start opacity-0  backdrop-blur-sm rounded-lg py-3 px-4">
              <CircleX className="text-red-500 w-7 h-7 mr-4" strokeWidth={2.5} />
              <span className="text-lg font-medium">AI replaces inefficiency</span>
            </div>
            <div ref={el => warningRefs.current[3] = el} className="flex items-center justify-start opacity-0  backdrop-blur-sm rounded-lg py-3 px-4">
              <CircleX className="text-red-500 w-7 h-7 mr-4" strokeWidth={2.5} />
              <span className="text-lg font-medium">Your brand fades into obscurity</span>
            </div>
          </div>

          {/* Success texts (hidden initially, same position as warnings) */}
          <div className="space-y-6 max-w-xl mx-auto px-8 absolute inset-0 top-16">
            <div ref={el => successRefs.current[0] = el} className="flex items-center justify-start opacity-0  backdrop-blur-sm rounded-lg py-3 px-4">
              <CircleCheck className="text-green-500 w-7 h-7 mr-4" strokeWidth={2.5} />
              <span className="text-lg font-medium">Smart AI Integration</span>
            </div>
            <div ref={el => successRefs.current[1] = el} className="flex items-center justify-start opacity-0  backdrop-blur-sm rounded-lg py-3 px-4">
              <CircleCheck className="text-green-500 w-7 h-7 mr-4" strokeWidth={2.5} />
              <span className="text-lg font-medium">Marketing Automation</span>
            </div>
            <div ref={el => successRefs.current[2] = el} className="flex items-center justify-start opacity-0  backdrop-blur-sm rounded-lg py-3 px-4">
              <CircleCheck className="text-green-500 w-7 h-7 mr-4" strokeWidth={2.5} />
              <span className="text-lg font-medium">Websites that Sell</span>
            </div>
            <div ref={el => successRefs.current[3] = el} className="flex items-center justify-start opacity-0  backdrop-blur-sm rounded-lg py-3 px-4">
              <CircleCheck className="text-green-500 w-7 h-7 mr-4" strokeWidth={2.5} />
              <span className="text-lg font-medium">Higher Profit Margins</span>
            </div>
          </div>

        </div>


        <div
          ref={newbeforeFinalTextRef}
          className="absolute z-20 text-center text-black"
        >
          <h2 className="text-[52px] font-bold font-urbanist leading-[1.3] mb-4">
            Your digital journey with <span className="text-[#2acbec]">webnox</span>
          </h2>
        </div>

        {/* Journey Section */}
        <div
          ref={journeyRef}
          className="absolute z-20 w-full h-full flex items-center justify-center left-50"
        >
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
              style={{ right: '45%', top: '25%', transform: 'translateY(-50%)' }}
            >
              <div className="relative flex items-center justify-center">
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
                <div className="text-content ml-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Discover & Define</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm">We don't offer solutions until we understand the problem</p>
                </div>
              </div>
            </div>

            {/* Step 2: Experience-Led Design - text-circle-line-hexagon (LEFT LAYOUT) */}
            <div
              ref={el => journeyStepsRef.current[1] = el}
              className="absolute"
              style={{ left: '2%', top: '50%', transform: 'translateY(-50%)' }}
            >
              <div className="relative flex items-center justify-center">
                {/* Text Content */}
                <div className="text-content mr-32">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Experience-Led Design</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm">Smart tech meets meaningful design</p>
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
              style={{ right: '45%', bottom: '15%', transform: 'translateY(50%)' }}
            >
              <div className="relative flex items-center justify-center">
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
                <div className="text-content ml-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Agile Development</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm">Progress without chaos. Speed with stability</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Second Journey Section */}
        <div
          ref={journey2Ref}
          className="absolute z-20 w-full h-full pointer-events-none"
        >
          {/* SVG Curved Path for Second Journey */}
          <div
            ref={journey2PathRef}
            className="absolute"
            style={{
              top: '20%',
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
                className="absolute w-14 h-14 bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white"
                style={{
                  top: 'calc(20% + -17%)',
                  left: 'calc(10% + 18%)'
                }}
              ></div>

              {/* End point circle (positioned at path end) */}
              <div
                ref={el => path2CircleRefs.current[1] = el}
                className="absolute w-14 h-14 bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white"
                style={{
                  top: 'calc(20% + 64%)',
                  left: 'calc(10% + 56%)'
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
              style={{ left: '20%', top: '15%', transform: 'translateY(-50%)' }}
            >
              <div className="relative flex items-center justify-center">
                {/* Text Content */}
                <div className="text-content mr-32">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Intelligent Integration</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm">AI tools to create a streamlined digital backbone
                    for your busine We unify your ecosystem seamlessly
                    connecting CRMs, ERPs, APIs, cloud services, ss.</p>
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
                      <span className="text-4xl font-bold text-[#0ea5e9] z-10">4</span>
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

            {/* Step 5: Build & Iterate - hexagon-line-circle-text (RIGHT LAYOUT) */}
            <div
              ref={el => journey2StepsRef.current[1] = el}
              className="absolute"
              style={{ right: '25%', top: '40%', transform: 'translateY(-50%)' }}
            >
              <div className="relative flex items-center justify-center">
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
                      <span className="text-4xl font-bold text-[#0ea5e9] z-10">5</span>
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
                <div className="text-content ml-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Launch & Learn</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm">We monitor real-world performance, gather insights,
                    and iterate quickly to ensure sustained growth and
                    continuous improvement.</p>
                </div>
              </div>
            </div>

            {/* Step 6: Launch & Scale - text-circle-line-hexagon (LEFT LAYOUT) */}
            <div
              ref={el => journey2StepsRef.current[2] = el}
              className="absolute"
              style={{ left: '20%', bottom: '20%', transform: 'translateY(50%)' }}
            >
              <div className="relative flex items-center justify-center">
                {/* Text Content */}
                <div className="text-content mr-32">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Scale with Digital Marketing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm">From visibility to virality, we help your brand grow
                    through strategic marketing, SEO, content, and
                    campaigns that convert.</p>
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
                      <span className="text-4xl font-bold text-[#0ea5e9] z-10">6</span>
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
          </div>
        </div>

        {/* Third Journey Section */}
        <div
          ref={journey3Ref}
          className="absolute z-20 w-full h-full flex items-center justify-center left-50"
        >
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">

            {/* Curved Path SVG from thirdline.svg */}
            <div 
              ref={journey3PathRef}
              className="absolute"
              style={{ 
                top: '25%', 
                left: '5%', 
                width: '55%', 
                height: '65%',
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
                    <stop offset="0.0420851" stopColor="#0076D9"/>
                    <stop offset="0.88859" stopColor="#00B9FF"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
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
                  className="absolute w-14 h-14 bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white"
                  style={{
                    top: 'calc(25% + -22%)',
                    left: 'calc(5% + 10%)'
                  }}
                ></div>
                
                {/* End point circle (positioned at path end) */}
                <div 
                  ref={el => path3CircleRefs.current[1] = el}
                  className="absolute w-14 h-14 bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white"
                  style={{
                    top: 'calc(25% + 60%)',
                    left: 'calc(5% + 14%)'
                  }}
                ></div>
{/* //middle circle */}
                <div 
                  ref={el => path3CircleRefs.current[2] = el}
                  className="absolute w-14 h-14 bg-gray-100 rounded-full opacity-100 shadow-lg z-50 border-2 border-white"
                  style={{
                    top: 'calc(25% + 20%)',
                    left: 'calc(5% + 70%)'
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
                style={{ right: '45%', top: '25%', transform: 'translateY(-50%)' }}
              >
                <div className="relative flex items-center justify-center">
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
                        <span className="text-4xl font-bold text-[#0ea5e9] z-10">7</span>
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
                  <div className="text-content ml-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Optimize Across Touchpoints</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm">We refine user journeys with UX audits, mobile app
                      enhancements, eCommerce upgrades, and
                      performance tuning.</p>
                  </div>
                </div>
              </div>

              {/* Step 8: Monitor & Enhance - text-circle-line-hexagon (LEFT LAYOUT) */}
              <div
                ref={el => journey3StepsRef.current[1] = el}
                className="absolute"
                style={{ left: '2%', top: '50%', transform: 'translateY(-50%)' }}
              >
                <div className="relative flex items-center justify-center">
                  {/* Text Content */}
                  <div className="text-content mr-32">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Support & Sustain</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm">Post-launch isn’t the end. It’s where we scale,
                      monitor, support, and evolve your digital assets
                      for long-term success.</p>
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
                        <span className="text-4xl font-bold text-[#0ea5e9] z-10">8</span>
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

              {/* Step 9: Evolve & Lead - hexagon-line-circle-text (RIGHT LAYOUT) */}
              <div
                ref={el => journey3StepsRef.current[2] = el}
                className="absolute"
                style={{ right: '45%', bottom: '15%', transform: 'translateY(50%)' }}
              >
                <div className="relative flex items-center justify-center">
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
                        <span className="text-4xl font-bold text-[#0ea5e9] z-10">9</span>
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
                  <div className="text-content ml-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Scale & Evolve</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm">Tech grows. You grow. And we grow with you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Final Text */}
        <div
          ref={newFinalTextRef}
          className="absolute z-20 text-center text-black"
        >
          <h2 className="text-[42px] font-normal font-urbanist leading-[1.3] mb-4">
            Step into the AI era with strategies designed to lead, not catch up.
          </h2>
        </div>

        {/* Background Wait Images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              ref={el => waitImagesRef.current[i] = el}
              className="absolute w-32 h-32 opacity-20"
              style={{
                left: i < 6 ? `${5 + (i * 12)}%` : `${50 + ((i - 6) * 8)}%`,
                bottom: '-100px',
              }}
            >
              <Image
                src={`/images/wait${i + 1}.png`}
                alt={`Wait icon ${i + 1}`}
                width={170}
                height={170}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Stats Container */}
        <div ref={containerRef} className="absolute inset-0 flex items-center justify-center perspective-[2000px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="absolute rounded-[32px] w-[220px] aspect-square flex flex-col items-center justify-center shadow-lg backface-visible overflow-hidden"
              style={{
                position: 'absolute',
                ...stat.position,
                transform: 'translate(-50%, -50%)',
                transformStyle: 'preserve-3d',
                backgroundColor: stat.color
              }}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center text-white p-10">
                <div className={`${stat.imageSize} relative mb-6`}>
                  <Image
                    src={stat.image}
                    alt={stat.text}
                    width={100}
                    height={100}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    className="drop-shadow-lg"
                  />
                </div>
                <div className="text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-center text-sm font-medium opacity-90">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NextGen;