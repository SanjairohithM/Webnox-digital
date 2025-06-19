import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

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
    color: "#7B4019",
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
  const newFinalTextRef = useRef(null);

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

    gsap.set(newFinalTextRef.current, {
      opacity: 0,
      y: 50
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 1,
        // markers: true
      }
    });

    // Stage 1: Fade in text
    timeline.from(headingRef.current, {
      opacity: 0,
      y: 50,
      scale: 1,
      duration: 1
    });

    // Stage 2: Zoom out text slightly and bring in cards
    timeline.to(headingRef.current, {
      scale: 0.85,
      duration: 1,
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
        duration: 1,
        ease: "power2.out",
      }, "-=0.8");
    });

    // Stage 3: Stack cards in center and fade out text
    timeline
      .to(headingRef.current, {
        opacity: 0,
        scale: 0.7,
        duration: 1,
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
        duration: 1,
        ease: "power2.inOut"
      })
      .to(cardsRef.current, {
        z: (i) => -i * 10,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        duration: 1,
        stagger: {
          each: 0.1,
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
        duration: 2,
        stagger: {
          each: 0.15,
          from: "end"
        },
        ease: "power1.inOut"
      })
      .to(finalTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power1.out"
      }, "-=1.5");

    // Stage 5: Transition to new final text
    timeline
      .to({}, { duration: 1 })
      .to(finalTextRef.current, {
        opacity: 0,
        y: -50,
        duration: 2,
        ease: "power1.inOut"
      })
      .to(newFinalTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power1.out"
      }, "-=1.5");

    timeline.timeScale(0.8);

  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-screen bg-gradient-to-tr from-[#e8e0ff] via-[#e0f8ff] to-white">
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

        {/* New Final Text */}
        <div 
          ref={newFinalTextRef}
          className="absolute z-20 text-center text-black"
        >
          <h2 className="text-[42px] font-normal font-urbanist leading-[1.3] mb-4">
            Step into the AI era with strategies designed to lead, not catch up.
          </h2>
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