"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Database, FileText, Lock } from "lucide-react"
import Footer from "../sections/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function PrivacyPolicy() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const floatingShapesRef = useRef([])
  const contentSectionsRef = useRef([])

  useGSAP(
    () => {
      const isDesktop = window.innerWidth >= 1024

      // Floating shapes animation
      floatingShapesRef.current.forEach((shape, index) => {
        if (shape) {
          gsap.to(shape, {
            y: "+=30",
            duration: 3 + index * 0.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.3,
          })
        }
      })

      // Hero section animations
      if (heroRef.current) {
        gsap.from(heroRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            once: true,
          },
        })
      }

      // Content sections scroll animations
      contentSectionsRef.current.forEach((section, index) => {
        if (section) {
          const direction = index % 2 === 0 ? -100 : 100
          gsap.from(section, {
            opacity: 0,
            x: direction,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
            delay: index * 0.1,
          })
        }
      })

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
    },
    { scope: sectionRef }
  )

  const sections = [
    {
      icon: FileText,
      title: "Introduction",
      content: [
        'Privacy Policy ("Policy") of Webnox Digital. ("Webnox Digital," "our," "we" or "us"), which will always be at https://www.webnoxdigital.com/, is intended to help you understand our privacy practices and how we collect, use, disclose, and process your organizational and personal data or information.',
        "This Privacy Policy applies to all our https://www.webnoxdigital.com/ pages, Web and mobile apps, which are owned and operated by us.",
      ],
    },
    {
      icon: Database,
      title: "What we collect",
      list: [
        "Name and job title",
        "Contact information, including email address",
        "Demographic information such as postcode, preferences and interests",
        "Other information relevant to customer surveys and/or offers",
      ],
    },
    {
      icon: FileText,
      title: "What we do with the information we gather",
      intro: "We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:",
      list: [
        "Internal record keeping.",
        "We may use the information to improve our products and services.",
        "We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.",
        "From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.",
      ],
    },
    {
      icon: Lock,
      title: "Security",
      content: [
        "We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.",
      ],
    },
  ]

  return (
    <>
      <main
        ref={sectionRef}
        className="relative w-full min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-20 overflow-hidden bg-gradient-to-br from-white via-[#e0f8ff] to-[#e8e0ff] font-sans"
      >
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            ref={(el) => (floatingShapesRef.current[0] = el)}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#3FD7F1]/20 to-[#25C3E5]/20 rounded-full blur-2xl"
          />
          <div
            ref={(el) => (floatingShapesRef.current[1] = el)}
            className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-[#25C3E5]/20 to-[#3FD7F1]/20 rounded-full blur-3xl"
          />
          <div
            ref={(el) => (floatingShapesRef.current[2] = el)}
            className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-br from-[#3FD7F1]/15 to-[#25C3E5]/15 rounded-full blur-2xl"
          />
          <div
            ref={(el) => (floatingShapesRef.current[3] = el)}
            className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-[#25C3E5]/20 to-[#3FD7F1]/20 rounded-full blur-2xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Hero Section */}
          <div ref={heroRef} className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-[#25C3E5] animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-[#3FD7F1] via-[#25C3E5] to-[#3FD7F1] bg-clip-text bg-[length:200%_auto] animate-gradient">
                Privacy Policy
              </span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                At Webnox Digital, We Value your Privacy and are committed to protecting and processing your company/personal information.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                This privacy statement describes how we collect, use, and share your information with our Subsidiaries.
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 md:space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  ref={(el) => (contentSectionsRef.current[index] = el)}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#3FD7F1] to-[#25C3E5] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 pt-2">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                      {section.intro && <p className="font-medium text-gray-700">{section.intro}</p>}
                      {section.content &&
                        section.content.map((para, i) => (
                          <p key={i}>
                            {para.includes("https://") ? (
                              <>
                                {para.split("https://")[0]}
                                <a
                                  href={`https://${para.split("https://")[1]?.split(" ")[0]}`}
                                  className="text-[#25C3E5] hover:text-[#3FD7F1] underline font-medium"
                                >
                                  https://{para.split("https://")[1]?.split(" ")[0]}
                                </a>{" "}
                                {para.split("https://")[1]?.substring(para.split("https://")[1]?.split(" ")[0]?.length)}
                              </>
                            ) : (
                              para
                            )}
                          </p>
                        ))}
                      {section.list && (
                        <ul className="space-y-3 ml-6">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-[#3FD7F1] to-[#25C3E5] mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-16 md:mt-24 pt-8 border-t-2 border-gradient-to-r from-[#3FD7F1] to-[#25C3E5] relative">
            <div className="absolute -top-[2px] left-0 w-32 h-[2px] bg-gradient-to-r from-[#3FD7F1] to-transparent" />
            <div className="bg-white/60 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-white/50 shadow-lg">
              <p className="text-gray-700 text-center text-base md:text-lg">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a
                  href="mailto:info@webnoxdigital.com"
                  className="text-[#25C3E5] hover:text-[#3FD7F1] underline font-semibold transition-colors"
                >
                  info@webnoxdigital.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  )
}
