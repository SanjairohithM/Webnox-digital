"use client"

import React, { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import Image from "next/image"
import FAQSection from "../components/FAQSection";
import TickerSection from "../components/TickerSection";



if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}



// Hero Section Component
const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, descRef.current], { opacity: 0, y: 40 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative flex items-center justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/outsource.webp"
          alt="Outsourcing background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Strong white fade at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white"></div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4">
        <h1 ref={titleRef} className="text-2xl md:text-4xl lg:text-5xl  font-sans font-bold text-black mb-6">
          Outsourcing Services by <span className="text-[#13b4ee]">Webnox Digital</span>
        </h1>
        <p
          ref={descRef}
          className="text-[#222] text-lg md:text-xl max-w-2xl font-sans leading-relaxed text-center mx-auto tracking-wide mt-4"
        >
          At Webnox Digital, we understand that managing everything in-house can slow down your business growth. That’s why we offer smart, efficient, and affordable outsourcing solutions to help you stay focused on what matters most: growing your business.
        </p>
      </div>
    </section>
  )
}

// Why Choose Section Component
const WhyChooseSection = () => {
  const sectionRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const featuresRef = useRef([])
  const dotsRef = useRef([])
  const svgPathRef = useRef(null)
  const svgRef = useRef(null)
  const animatedDotRef = useRef(null)
  const pathTrackerRef = useRef(null)

  const features = [
    {
      number: "1",
      title: "Skilled Professionals",
      desc: "Get access to experienced designers, developers, digital marketers, and support teams without the cost of hiring."
    },
    {
      number: "2",
      title: "Scalable Solutions",
      desc: "Whether you're a startup or an enterprise, our services scale with your needs."
    },
    {
      number: "3",
      title: "Time-Zone Advantage",
      desc: "With our offshore team, your work progresses even after your office closes."
    },
    {
      number: "4",
      title: "Reliable Communication",
      desc: "Daily updates, clear reporting, and direct communication channels to keep you in the loop."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide everything
      gsap.set([
        subtitleRef.current,
        titleRef.current,
        descRef.current,
        buttonRef.current,
        ...featuresRef.current,
        ...dotsRef.current,
        svgRef.current,
        animatedDotRef.current
      ], { opacity: 0, y: 30 })

      // Set initial scale for animated dot
      gsap.set(animatedDotRef.current, { scale: 0 })

      // Set up SVG path for drawing animation
      if (svgPathRef.current) {
        const pathLength = svgPathRef.current.getTotalLength()
        gsap.set(svgPathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        })
      }

      // Main timeline for content animation
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      mainTl
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
        .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
        .to(featuresRef.current, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3")

      // Connection animation timeline - triggers automatically when section comes into view
      const connectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        }
      })

      // Automatic slow animation sequence
      connectionTl
        // First show the SVG container
        .to(svgRef.current, { opacity: 1, duration: 0.3 })
        // Show and animate the traveling dot
        .to(animatedDotRef.current, { 
          opacity: 1, 
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)" 
        })
        // Animate dot along the path using MotionPath - slow and smooth
        .to(animatedDotRef.current, {
          motionPath: {
            path: svgPathRef.current,
            align: svgPathRef.current,
            alignOrigin: "0.5 0.5",
            autoRotate: false,
          },
          duration: 4, // Slower animation - 4 seconds
          ease: "power1.inOut", // Smoother easing
          onUpdate: function() {
            // Draw the path as the dot moves
            const progress = this.progress()
            const pathLength = svgPathRef.current.getTotalLength()
            gsap.set(svgPathRef.current, {
              strokeDashoffset: pathLength * (1 - progress)
            })
          }
        }, "-=0.2")
        // Show static dots progressively as the animated dot passes near them
        .to(dotsRef.current[0], { 
          opacity: 1, 
          scale: 1,
          duration: 0.4, 
          ease: "back.out(1.7)" 
        }, "-=3.2") // Show first dot early in the animation
        .to(dotsRef.current[1], { 
          opacity: 1, 
          scale: 1,
          duration: 0.4, 
          ease: "back.out(1.7)" 
        }, "-=2.4") // Show second dot
        .to(dotsRef.current[2], { 
          opacity: 1, 
          scale: 1,
          duration: 0.4, 
          ease: "back.out(1.7)" 
        }, "-=1.6") // Show third dot
        .to(dotsRef.current[3], { 
          opacity: 1, 
          scale: 1,
          duration: 0.4, 
          ease: "back.out(1.7)" 
        }, "-=0.8") // Show fourth dot
        // Hide the animated dot at the end
        .to(animatedDotRef.current, { 
          opacity: 0, 
          scale: 0.5,
          duration: 0.5,
          ease: "power2.in" 
        }, "-=0.3")

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative min-h-[500px]">
        
        {/* Left Column Content */}
        <div className="absolute left-0 top-0 w-full lg:w-[40%] flex flex-col items-start">
          <span ref={subtitleRef} className="text-[#13b4ee] text-sm font-semibold uppercase mb-2 tracking-wide">Why Choose</span>
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-black font-sans text-black mb-4 leading-tight text-left">Webnox for Outsourcing</h2>
          <p ref={descRef} className="text-[#6b6b6b] text-base md:text-lg font-sans font-normal leading-relaxed mb-6 text-left max-w-md">
            At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster, operate efficiently, and focus on their core strengths.
          </p>
          <button ref={buttonRef} className="bg-[#13b4ee] text-white px-7 py-3 rounded-full font-semibold text-base shadow-md hover:bg-[#0ea5e9] transition mb-8">
            Get Started
          </button>
          
          {/* First Feature - Below Button */}
          <div
            ref={el => featuresRef.current[0] = el}
            className="relative flex flex-col items-start justify-start max-w-sm mt-20"
          >
            {/* Large faint number */}
            <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
              1
            </span>
            {/* Feature content */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[0].title}</h3>
              <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug max-w-xs">
                {features[0].desc}
              </p>
            </div>
          </div>

          {/* Second Feature - Higher and more right of 1 */}
          <div
            ref={el => featuresRef.current[1] = el}
            className="absolute left-[380px] top-[350px] flex flex-col items-start justify-start w-[320px]"
          >
            {/* Large faint number */}
            <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
              2
            </span>
            {/* Feature content */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[1].title}</h3>
              <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug">
                {features[1].desc}
              </p>
            </div>
          </div>

        {/* Third Feature - Time-Zone Advantage */}
        <div
          ref={el => featuresRef.current[2] = el}
          className="absolute left-[720px] top-[150px] flex flex-col items-start justify-start w-[320px]"
        >
          {/* Large faint number */}
          <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
            3
          </span>
          {/* Feature content */}
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[2].title}</h3>
            <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug">
              {features[2].desc}
            </p>
          </div>
        </div>

        {/* Fourth Feature - Reliable Communication */}
        <div
          ref={el => featuresRef.current[3] = el}
          className="absolute left-[1120px] top-[70px] flex flex-col items-start justify-start w-[320px]"
        >
          {/* Large faint number */}
          <span className="absolute right-0 top-[-120px] text-[190px] font-black text-[#e5e7eb] opacity-40 select-none pointer-events-none z-0">
            4
          </span>
          {/* Feature content */}
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans leading-tight">{features[3].title}</h3>
            <p className="text-[#6b6b6b] text-base font-normal font-sans leading-snug">
              {features[3].desc}
            </p>
          </div>
        </div>
        </div>

        {/* Connection Points and SVG Curve */}
        <div className="absolute inset-0 pointer-events-none z-5 -translate-y-32">
          {/* Animated Dot that travels along the path */}


          {/* Static Connection Dots - Positioned on the SVG path */}
          {/* Dot 1 - On path at 250,529 position */}
          <div 
            ref={el => dotsRef.current[0] = el}
            className="absolute left-[230px] top-[450px] w-6 h-6 bg-[#13b4ee] border-3 border-[#13b4ee] rounded-full opacity-0 scale-0 transform -translate-x-3 -translate-y-3"
          ></div>
          
          {/* Dot 2 - On path at 470,382 position */}
          <div 
            ref={el => dotsRef.current[1] = el}
            className="absolute left-[540px] top-[330px] w-6 h-6 bg-[#13b4ee] border-3 border-[#13b4ee] rounded-full opacity-0 scale-0 transform -translate-x-3 -translate-y-3"
          ></div>
          
          {/* Dot 3 - On path at 776,321 position */}
          <div 
            ref={el => dotsRef.current[2] = el}
            className="absolute left-[790px] top-[131px] w-6 h-6 bg-[#13b4ee] border-3 border-[#13b4ee] rounded-full opacity-0 scale-0 transform -translate-x-3 -translate-y-3"
          ></div>
          
          {/* Dot 4 - On path at 1044,138 position */}
          <div 
            ref={el => dotsRef.current[3] = el}
            className="absolute left-[1144px] top-[98px] w-6 h-6 bg-[#13b4ee] border-3 border-[#white] rounded-full opacity-0 scale-0 transform -translate-x-3 -translate-y-3"
          ></div>
          
          {/* SVG Curve connecting all 4 dots - Using outsourcing1.svg */}
          <svg
            ref={svgRef}
            viewBox="0 0 1619 582"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-0"
          >
            <path
              ref={svgPathRef}
              d="M27 444C75 479 186.8 545 250 529C329 509 348.5 406 470.5 382C592.5 358 682 441.5 776.5 321C871 200.5 860 132.5 1044 138.5C1228 144.501 1558.8 103.4 1592 3"
              stroke="#13b4ee"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

// Approach Cards Section Component  
const ApproachSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const approaches = [
    { 
      title: "Agility", 
      desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster.",
      image: "/images/fi_2.webp"
    },
    { 
      title: "Transparency", 
      desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster.",
      image: "/images/fi_1.webp"
    },
    { 
      title: "Cost Efficiency", 
      desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster.",
      image: "/images/fi_4.webp"
    },
    { 
      title: "Expertise Access", 
      desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster.",
      image: "/images/fi_3.webp"
    },
    { 
      title: "Data Security", 
      desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster.",
      image: "/images/fi_5.webp"
    },
    { 
      title: "Quality Assurance", 
      desc: "At Webnox, we redefine outsourcing by blending innovation, reliability, and performance. Our tailored services are designed to help businesses scale faster.",
      image: "/images/fi_2.webp"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([subtitleRef.current, titleRef.current], { opacity: 0, y: 30 })
      gsap.set(cardsRef.current, { opacity: 0, y: 40 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .to(cardsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4")
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <p ref={subtitleRef} className="text-cyan-500 font-sans text-xl mb-4">What we offer</p>
          <h2 ref={titleRef} className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Our outsourcing approach <br />focuses on
          </h2>
        </div>
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mb-6">
                <Image
                  src={approach.image}
                  alt={approach.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{approach.title}</h3>
              <p className="text-gray-600 leading-relaxed">{approach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Dual-line Ticker/Marquee Section
// const TickerSection = () => {
//   // You can customize these arrays for your content
//   const topLine = [
//     { text: "Proven Results Across 15+ Industries", bold: false },
//     { text: "Transparent Communication & Reporting", bold: false },
//     { text: "Global Delivery Model", bold: false },
//     { text: "24/7 Support", bold: false },
//   ];
//   const bottomLine = [
//     { text: "15+ Years Of Industry Experience", bold: true },
//     { text: "98% Client Retention Rate", bold: true },
//     { text: "Proven Results", bold: true },
//     { text: "Global Delivery", bold: true },
//   ];

//   // Helper to render a line with dots
//   const renderLine = (items, outline = false) => (
//     <>
//       {items.map((item, idx) => (
//         <span
//           key={idx}
//           className={
//             outline
//               ? "outline-text text-4xl font-bold mx-2"
//               : item.bold
//               ? "font-bold text-gray-700"
//               : "font-normal text-gray-500"
//           }
//         >
//           {item.text}
//           {idx !== items.length - 1 && <span className="mx-4">&bull;</span>}
//         </span>
//       ))}
//     </>
//   );

//   return (
//     <div className="bg-[#f3fbfe] py-10 overflow-hidden border-b border-gray-100">
//       {/* Top ticker: right to left */}
//       <div className="relative w-full h-20 flex items-center">
//         <div className="whitespace-nowrap animate-ticker-left text-2xl font-sans flex items-center">
//           {renderLine(topLine, true)}
//           {/* Repeat for infinite effect */}
//           <span className="mx-8" />
//           {renderLine(topLine, true)}
//         </div>
//       </div>
//       {/* Bottom ticker: left to right */}
//       <div className="relative w-full h-20 flex items-center mt-2">
//         <div className="whitespace-nowrap animate-ticker-right text-2xl font-sans flex items-center">
//           {renderLine(bottomLine)}
//           {/* Repeat for infinite effect */}
//           <span className="mx-8" />
//           {renderLine(bottomLine)}
//         </div>
//       </div>
//     </div>
//   );
// };

// Modern FAQ Section (matches screenshot)
// const FAQSection = () => {
//   const faqs = [
//     {
//       question: "The expense windows adapted sir. Wrong widen drawn.",
//       answer: "Offending belonging promotion provision can be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her."
//     },
//     {
//       question: "Six curiosity day assurance bed necessary?",
//       answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     },
//     {
//       question: "Produce say the ten moments parties?",
//       answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       question: "Simple innate summer fat appear basket his desire joy?",
//       answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
//     },
//     {
//       question: "Outward clothes promise at gravity do excited?",
//       answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
//     },
//   ];
//   const [openIdx, setOpenIdx] = React.useState(0);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <div className="mb-16">
//           <h2 className="text-4xl font-extrabold text-black mb-2">Frequently</h2>
//           <span className="text-4xl font-bold text-sky-500">asked questions</span>
//         </div>
//         {/* Two-column layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
//           {/* FAQ Accordion */}
//           <div className="md:col-span-2 flex flex-col gap-4">
//             {faqs.map((faq, idx) => (
//               <div
//                 key={idx}
//                 className={`rounded-xl border border-gray-200 bg-white transition-shadow ${openIdx === idx ? 'shadow-md' : 'hover:shadow'} `}
//               >
//                 <button
//                   className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
//                   onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
//                 >
//                   <span className="text-lg font-medium text-gray-900">{faq.question}</span>
//                   <span className="text-4xl  font-semibold">{openIdx === idx ? '-' : '+'}</span>
//                 </button>
//                 {openIdx === idx && (
//                   <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           {/* Right Card */}
//           <div className="rounded-xl border border-gray-200 bg-white p-8 flex flex-col items-center text-center min-h-[320px]">
//             <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
//               <Image
//                 src="/images/fi_7.webp"
//                 alt="FAQ Icon"
//                 width={48}
//                 height={48}
//                 className="object-contain w-10 h-10"
//               />
//             </div>
//             <h3 className="text-lg font-bold text-gray-900 mb-2">Do you have more questions?</h3>
//             <p className="text-gray-500 text-sm mb-6">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
//             <button className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-3 transition-colors shadow-sm">Shoot a Direct Mail</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



// Main Outsourcing Page Component
const OutsourcingPage = () => {
  return (
    <main className="@/outsourcing">
      <HeroSection />
      <WhyChooseSection />
      <ApproachSection />
      <TickerSection />
      <FAQSection />
    </main>
  )
}

export default OutsourcingPage