"use client"
import React from "react"
import Image from "next/image"
import { useState, useRef,useEffect} from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import FAQSection from "../components/FAQSection";
import TickerSection from "../components/TickerSection";
import Footer from "../sections/Footer";


// Hero Section
const BrandingHero = () => {
  const [hovered, setHovered] = useState(false)
  const imageRefs = useRef([])
  const brandingTextRef = useRef(null)
  const headingRef = useRef(null)

  useGSAP(() => {
    // Check if we're on desktop (lg breakpoint and above)
    const isDesktop = window.innerWidth >= 1024
    
    if (isDesktop) {
      // Complex hover animations for desktop
      if (hovered) {
        // Animate images and heading left
        imageRefs.current.forEach(ref => {
          if (ref) gsap.to(ref, { x: -30, duration: 1.2, ease: 'power3.inOut' })
        })
        if (headingRef.current) gsap.to(headingRef.current, { x: -30, duration: 1.2, ease: 'power3.inOut' })
        // Animate branding text right
        if (brandingTextRef.current) gsap.to(brandingTextRef.current, { x: 30, duration: 1.2, ease: 'power3.inOut' })
      } else {
        // Reset all
        imageRefs.current.forEach(ref => {
          if (ref) gsap.to(ref, { x: 0, duration: 1.2, ease: 'power3.inOut' })
        })
        if (headingRef.current) gsap.to(headingRef.current, { x: 0, duration: 1.2, ease: 'power3.inOut' })
        if (brandingTextRef.current) gsap.to(brandingTextRef.current, { x: 0, duration: 1.2, ease: 'power3.inOut' })
      }
    } else {
      // Simple fade animations for mobile
      // Set initial states for mobile
      gsap.set([brandingTextRef.current, headingRef.current], { opacity: 0 })
      
      // Create scroll-triggered timeline for mobile
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: brandingTextRef.current,
          start: "top 80%",
        }
      })
      
      tl.to(brandingTextRef.current, { opacity: 1, duration: 0.6, ease: "power2.out" })
        .to(headingRef.current, { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
    }
  }, [hovered])

  return (
    <section
      className="relative flex items-center justify-center min-h-[320px] md:min-h-[420px] w-full overflow-hidden bg-[#fff]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating Brand Images */}
      <Image ref={el => imageRefs.current[0] = el} src="/images/brand4.webp" alt="brand1" width={140} height={140} className="absolute left-4 top-4 md:left-16 md:top-10 animate-float-slow w-16 h-16 md:w-[140px] md:h-[140px]" />
      <Image ref={el => imageRefs.current[1] = el} src="/images/brand5.webp" alt="brand5" width={90} height={90} className="absolute right-8 top-8 md:right-24 md:top-35 animate-float w-12 h-12 md:w-[90px] md:h-[90px]" />
      <Image ref={el => imageRefs.current[2] = el} src="/images/brand6.webp" alt="brand6" width={40} height={40} className="absolute left-1/4 top-1/2 md:left-1/5 md:top-1/3 animate-float-reverse w-8 h-8 md:w-[40px] md:h-[40px]" />
      <Image ref={el => imageRefs.current[3] = el} src="/images/brand1.webp" alt="brand1" width={150} height={150} className="absolute right-1/4 top-1/2 md:right-30 md:top-70 animate-float w-16 h-16 md:w-[150px] md:h-[150px]" />
      <Image ref={el => imageRefs.current[4] = el} src="/images/brand3.webp" alt="brand3" width={150} height={150} className="absolute left-10 bottom-8 md:left-24 md:bottom-16 animate-float-slow w-16 h-16 md:w-[150px] md:h-[150px]" />
      <Image ref={el => imageRefs.current[5] = el} src="/images/brand2.webp" alt="brand2" width={90} height={90} className="absolute right-10 bottom-8 md:right-64 md:top-16 animate-float-reverse w-12 h-12 md:w-[90px] md:h-[90px]" />
      <Image ref={el => imageRefs.current[6] = el} src="/images/brand7.webp" alt="brand7" width={40} height={40} className="absolute right-1/2 bottom-4 md:right-125 md:bottom-20 animate-float w-8 h-8 md:w-[40px] md:h-[40px]" />
      {/* Centered Content */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 py-8 z-10">
        <span ref={brandingTextRef} className="text-[#03afd4] text-xl md:text-2xl font-semibold tracking-[0.3em] mb-4">Branding</span>
        <h1 ref={headingRef} className="text-xl md:text-3xl lg:text-4xl font-semibold font-sans text-black mb-2 leading-tight">
          You Want to Build a Brand That's Noticed.<br />
          Trusted, and Remembered!!
        </h1>
      </div>
    </section>
  )
}

// Plan Section
const planWords = [
  { text: "Brand.", img: "/images/brand2-3.webp", desc: "You feel your brand isn’t reflecting the real value you offer" },
  { text: "Visuals.", img: "/images/brand2-1.webp", desc: "Your visuals are inconsistent and outdated" },
  { text: "Global.", img: "/images/brand2-2.webp", desc: "You’re unsure how to stand out in a crowded global market" },
]

const BrandingPlan = () => {
  const [hovered, setHovered] = useState(null)
  const imageRefs = useRef([])
  const descRefs = useRef([])

  useGSAP(() => {
    // Check if we're on desktop (lg breakpoint and above)
    const isDesktop = window.innerWidth >= 1024
    
    if (isDesktop) {
      // Complex hover animations for desktop
      gsap.set([...imageRefs.current, ...descRefs.current], {
        opacity: 0,
        y: -20
      })
    } else {
      // Simple fade animations for mobile
      // Filter out undefined refs before setting
      const mobileElements = [...imageRefs.current, ...descRefs.current].filter(Boolean)
      
      gsap.set(mobileElements, { opacity: 0 })
      
      // Create scroll-triggered timeline for mobile
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRefs.current[0],
          start: "top 80%",
        }
      })
      
      // Simple fade-in animations for mobile
      mobileElements.forEach((element, index) => {
        if (element) {
          tl.to(element, { 
            opacity: 1, 
            duration: 0.6, 
            ease: "power2.out" 
          }, index * 0.1)
        }
      })
    }
  }, [])

  const handleMouseEnter = (index) => {
    // Only apply hover effects on desktop
    if (window.innerWidth >= 1024) {
      setHovered(index)
      gsap.to(imageRefs.current[index], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      gsap.to(descRefs.current[index], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out"
      })
    }
  }

  const handleMouseLeave = (index) => {
    // Only apply hover effects on desktop
    if (window.innerWidth >= 1024) {
      setHovered(null)
      gsap.to(imageRefs.current[index], {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in"
      })
      gsap.to(descRefs.current[index], {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in"
      })
    }
  }

  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          {planWords.map((item, i) => (
            <div
              key={item.text}
              className="relative flex flex-col items-center group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              {/* Image above text, only visible on hover */}
              <div style={{ minHeight: 90 }} className="mb-2 flex flex-col items-center" >
                <img
                  ref={el => imageRefs.current[i] = el}
                  src={item.img}
                  alt={item.text + ' image'}
                  className="w-28 h-28 md:w-40 md:h-40 object-cover drop-shadow-xl mx-auto"
                />
              </div>
              <span
                className={`outline-text text-4xl md:text-6xl lg:text-7xl font-extrabold font-sans transition-all duration-300 relative z-10 ${hovered === i ? 'hovered-outline-text' : ''}`}
              >
                {item.text}
              </span>
              {/* Description below text, only visible on hover */}
              <div className="mt-6 text-center min-h-[40px]">
                <p
                  ref={el => descRefs.current[i] = el}
                  className="text-lg md:text-xl text-gray-700 font-sans"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section
const BrandingFeatures = () => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Text Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 text-black leading-tight">
          We Understand. And We’ve<br />
          Helped Dozens of <span className="text-[#00b9ff]">Global Brands Fix This.</span>
        </h2>
        <p className="text-[#595959] text-lg mb-8 font-sans font-normal max-w-2xl">
          Webnox Digital is a branding experts who partner with you to craft your story, voice, visuals, and identity with purpose. We’ve worked with businesses across the world, helping them stand out in competitive markets, not with trends, but with timeless, meaningful branding.
        </p>
        <ul className="space-y-4 font-sans font-normal">
          <li className="flex items-start gap-3 text-[#222] text-base md:text-lg">
            <span className="inline-flex items-center justify-center w-7 h-7 bg-green-500 rounded-md text-white text-xl">✔️</span>
            Increased brand recognition across global markets
          </li>
          <li className="flex items-start gap-3 text-[#222] text-base md:text-lg">
            <span className="inline-flex items-center justify-center w-7 h-7 bg-green-500 rounded-md text-white text-xl">✔️</span>
            Consistent identity across all platforms and regions
          </li>
          <li className="flex items-start gap-3 text-[#222] text-base md:text-lg">
            <span className="inline-flex items-center justify-center w-7 h-7 bg-green-500 rounded-md text-white text-xl">✔️</span>
            Better leads through brand clarity and trust
          </li>
          <li className="flex items-start gap-3 text-[#222] text-base md:text-lg">
            <span className="inline-flex items-center justify-center w-7 h-7 bg-green-500 rounded-md text-white text-xl">✔️</span>
            Deeper customer loyalty through story-based branding
          </li>
        </ul>
      </div>
      {/* Right: Custom Grid Image Layout */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
        <img src="/images/brand3-2.webp" alt="feature1" className="rounded-xl object-cover w-full h-full row-span-2 min-h-[200px] md:min-h-[384px]" />
        <img src="/images/brand3-1.webp" alt="feature2" className="rounded-xl object-cover w-full h-full" />
        <img src="/images/brand3-3.webp" alt="feature3" className="rounded-xl object-cover w-full h-full" />
      </div>
    </div>
  </section>
)

// Branding Plan Steps Section
const BrandingPlanSteps = () => (
  <section className="bg-white py-20 px-4 md:px-12 lg:px-24 font-sans">
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Here's Your Branding Plan With Webnox Digital</h2>
      <p className="text-gray-500 text-lg text-center mb-16 max-w-2xl">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>
      <div className="relative w-full flex flex-col items-center">
        {/* Steps Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-full">
            <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
              <img src="/images/brand4-2.webp" alt="Book A Free Call" className="w-8 h-8" />
            </div>
            <h3 className="text-base font-semibold text-[#00b9ff] mb-1 text-center">Book A Free Call</h3>
            <p className="text-gray-600 text-sm text-center">Let's understand your goals, audience, and what makes your business unique.</p>
          </div>
          {/* Arrow 1 */}
          <div className="hidden md:flex justify-center items-center -mt-12">
            <img src="/Arc 2.svg" alt="arrow 1" className="w-[40rem] md:w-[56rem] lg:w-[72rem] h-auto" />
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center w-full">
            <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
              <img src="/images/brand4-3.webp" alt="Get A Custom Branding Strategy" className="w-8 h-8" />
            </div>
            <h3 className="text-base font-semibold text-[#00b9ff] mb-1 text-center">Get A Custom Branding Strategy</h3>
            <p className="text-gray-600 text-sm text-center">We'll share a clear roadmap tailored to your business, including messaging, design direction, and rollout timeline.</p>
          </div>
          {/* Arrow 2 */}
          <div className="hidden md:flex justify-center items-center mt-22">
            <img src="/Arc 1.svg" alt="arrow 2" className="w-[40rem] md:w-[56rem] lg:w-[72rem] h-auto" />
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center w-full">
            <div className="bg-gradient-to-br from-[#f6fafd] to-[#e9f3fa] rounded-xl shadow p-4 mb-2 flex items-center justify-center">
              <img src="/images/brand4-1.webp" alt="Build & Launch A World-Class Brand" className="w-8 h-8" />
            </div>
            <h3 className="text-base font-semibold text-[#00b9ff] mb-1 text-center">Build & Launch A World-Class Brand</h3>
            <p className="text-gray-600 text-sm text-center">From logo to brand voice to digital presence, we’ll create everything your brand needs to make a bold and lasting impression.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const industries = [
  {
    title: "Retail & E-Commerce",
    desc: "Digital solutions for customer-focused systems: retail, fashion, and online stores. We help your business optimize, automate, and grow.",
    img: "/images/brand5-4.webp"
  },
  {
    title: "Logistics & Transportation",
    desc: "Smart logistics for your business: optimize routes, track shipments, and streamline operations for maximum efficiency.",
    img: "/images/brand5-5.webp"
  },
  {
    title: "Real Estate & Construction",
    desc: "From virtual tours to project management, we help real estate and construction businesses modernize and scale.",
    img: "/images/brand5-3.webp"
  },
  {
    title: "Healthcare & Wellness",
    desc: "Modern healthcare solutions for clinics, hospitals, and wellness brands. Improve patient care and streamline operations.",
    img: "/images/brand5-1.webp"
  },
  {
    title: "Education & E-Learning",
    desc: "Empowering educators and learners with digital platforms, virtual classrooms, and interactive content.",
    img: "/images/brand5-2.webp"
  },
  {
    title: "Lifestyle & Personal Brands",
    desc: "Personalized branding and digital solutions for influencers, coaches, and lifestyle brands.",
    img: "/images/brand5-6.webp"
  }
]

const IndustriesSection = () => {
  const industryRefs = useRef([])

  useGSAP(() => {
    // Check if we're on desktop (lg breakpoint and above)
    const isDesktop = window.innerWidth >= 1024
    
    if (isDesktop) {
      // Complex animations for desktop
      industryRefs.current.forEach((ref, i) => {
        if (!ref) return
        gsap.fromTo(ref,
          {
            opacity: 0,
            x: i % 2 === 0 ? 120 : -120
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.4,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        )
      })
    } else {
      // Individual scroll-triggered fade animations for mobile
      const validRefs = industryRefs.current.filter(Boolean)
      
      gsap.set(validRefs, { opacity: 0 })
      
      // Animate each card individually when it comes into view
      validRefs.forEach((ref, index) => {
        if (ref) {
          gsap.to(ref, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          })
        }
      })
    }
  }, [])

  return (
    <section className="bg-white py-20 px-0">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl md:text-5xl font-sans font-semibold text-center mb-2">
          Industries <span className="text-sky-500">we serve</span>
          
        </h2>
        <p className="text-gray-500 text-center mb-16 text-xl max-w-3xl font-sans py-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div className="flex flex-col gap-y-8 w-full">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              ref={el => industryRefs.current[i] = el}
              className={`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 items-stretch w-full px-4 md:px-16 py-8 md:py-12`}
            >
              <div className={`flex justify-center items-center w-full h-full ${i % 2 === 1 ? 'md:order-2' : ''}`}> 
                <img src={industry.img} alt={industry.title} className="w-full md:w-[32rem] h-56 md:h-79 object-cover rounded-3xl shadow-xl" />
              </div>
              <div className={`flex flex-col justify-center w-full h-full text-left px-2 md:px-8 items-center md:items-center md:text-left`}>
                <h3 className="text-2xl md:text-4xl font-sans font-semibold mb-4 text-black">{industry.title}</h3>
                <p className="font-sans  md:text-xl text-gray-400">{industry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


const Scroll3DSections = ({ children }) => {
  const containerRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const mm = ScrollTrigger.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const sections = sectionsRef.current.filter(Boolean)
        sections.forEach((sectionEl) => {
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
        })
      }, containerRef)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative space-y-8 md:space-y-12 lg:space-y-24"
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
    >
      {React.Children.map(children, (child, idx) => (
        <div
          ref={(el) => (sectionsRef.current[idx] = el)}
          className="will-change-transform"
        >
          {child}
        </div>
      ))}
    </div>
  )
}


// Main Branding Page
const BrandingPage = () => (
  <main className="bg-white w-full mt-20">
   
    <BrandingHero />
    <BrandingPlan />
    <Scroll3DSections>
    

    <BrandingFeatures />
    <BrandingPlanSteps />

    <IndustriesSection />
    </Scroll3DSections>
    <TickerSection />
    <FAQSection />
    <Footer />
  </main>
)

export default BrandingPage
