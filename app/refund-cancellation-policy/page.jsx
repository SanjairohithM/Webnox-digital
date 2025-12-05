"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Receipt, XCircle, DollarSign, AlertCircle, Mail, CheckCircle2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function RefundCancellationPolicy() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const floatingShapesRef = useRef([])
  const contentSectionsRef = useRef([])
  const tableRefs = useRef([])

  useGSAP(
    () => {
      const isDesktop = window.innerWidth >= 1024

      // Floating shapes animation
      floatingShapesRef.current.forEach((shape, index) => {
        if (shape) {
          gsap.to(shape, {
            y: "+=40",
            rotation: "+=10",
            duration: 4 + index * 0.5,
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

      // Table animations
      tableRefs.current.forEach((table, index) => {
        if (table) {
          gsap.from(table.querySelectorAll("tr"), {
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: table,
              start: "top 85%",
              once: true,
            },
          })
        }
      })

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
    },
    { scope: sectionRef }
  )

  const refundScheduleData = [
    {
      reason: "Within 24 Hours of Placing the Order",
      policy: "90% refund of the amount paid is guaranteed",
      explanation: "10% deduction will be made to cover the costs incurred for the payment gateway and accounting while returning the funds to the client's account.",
    },
    {
      reason: "Within 2-3 Days after the advance payment is made",
      policy: "50% refund of the amount paid is guaranteed",
      explanation: "As soon as we receive financial confirmation, a Designer, Developer, and Project Manager will be allocated and hence resulting in a 50% payment deduction.",
    },
    {
      reason: "After 3 Days from the date of confirmation",
      policy: "No Refund",
      explanation: "No Refund",
    },
  ]

  const acceptableGroundsData = [
    {
      event: "In the event of an accidental surplus payment by the client",
      policy: "100% of the excess amount will be refunded",
      explanation: "Full payment will be refunded to the client, with the exception of payment gateway costs, which will be deducted.",
    },
    {
      event: "If the client is not satisfied with the design outcome",
      policy: "No Refund",
      explanation:
        "We aim to comprehend the client's vision before starting each project and provide multiple design revisions until the client is satisfied. If the client is not pleased with the designs, we will work alongside the client to make the necessary modifications. Hence, we do not provide a refund in this instance.",
    },
    {
      event: "Work Delay",
      policy: "Up to 50% of the Total Payment Made",
      explanation:
        "Upon discovering issues with the project, we will meticulously review all project emails and documents. If the issues are caused by us, we will take corrective measures and offer a refund of 50% of the total payment made.",
    },
    {
      event: "Technical Glitches",
      policy: "No Refund",
      explanation: "Webnox Digital will not be accountable for any losses that result from hosting and domain issues caused by third-party vendors.",
    },
    {
      event: "SEO",
      policy: "No Refund",
      explanation:
        "In the event that the promised top ranking on search engines is not obtained, we will persist in our efforts for an additional 2 months with no refund.",
    },
  ]

  const sections = [
    {
      icon: XCircle,
      title: "Cancellation Policy",
      content: [
        "In the event that a customer wishes to opt out of service for a project, they must send a request to info@webnoxdigital.com. Any other form of contact other than mail, such as phone calls, WhatsApp, or others, will not be taken into consideration. Our team will then thoroughly analyze your issues and concerns and guide you on further procedures.",
        "If the issue is at our end, the client will receive an activation code within a week of their request, which will be processed by our team at Webnox Digital. If no email is received by the client, it can be interpreted that the request is considered invalid.",
      ],
    },
    {
      icon: DollarSign,
      title: "Payment Refund Policy",
      content: [
        "Webnox Digital adheres to various refund policies for each of our different services. For further details, please refer to the individual service agreement.",
        "If a client requests to cancel a project, the acceptance of a refund by Webnox Digital cannot be fully ensured. We will carefully evaluate the various factors involved in the project, such as the verification of the signed contract, email acceptance, and whether the contract was signed electronically or physically between the two parties. Only then will we decide whether to issue a refund.",
        "Please note that Webnox Digital will not be held liable for any payment transactions incurred for the project, and any amounts sent to third-party providers for services rendered or any non-recoverable miscellaneous charges will not be reimbursed by Webnox Digital.",
      ],
    },
    {
      icon: AlertCircle,
      title: "Conditions for Refund",
      intro: "Webnox Digital reserves the right to refuse a refund in the following circumstances:",
      list: [
        "If the service has been fully provided and completed according to the terms and conditions outlined in the service level agreement.",
        "If the client has changed their mind about the service and wishes to cancel it after the work has started.",
        "If the client has not made an effort to resolve any issues with the service through the appropriate channels outlined in the service level agreement.",
        "If the client has violated the terms and conditions outlined in the service level agreement.",
      ],
    },
    {
      icon: Mail,
      title: "Requesting a Refund",
      content: [
        "In order to request a refund, the customer must send an email to info@webnoxdigital.com outlining the reason for their request. The email should include a detailed explanation of the circumstances and a copy of the service level agreement. Our finance and management team will then thoroughly analyze the situation and provide guidance on further procedures.",
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

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Hero Section */}
          <div ref={heroRef} className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center justify-center mb-6">
              <Receipt className="w-12 h-12 md:w-16 md:h-16 text-[#25C3E5] animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-[#3FD7F1] via-[#25C3E5] to-[#3FD7F1] bg-clip-text bg-[length:200%_auto] animate-gradient">
                Refund & Cancellation Policy
              </span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                At Webnox Digital, we take customer satisfaction seriously and strive to provide the best possible web services to our clients.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                This policy outlines the circumstances under which we will issue a refund, as well as the steps a customer must take to request a refund.
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
                            {para.includes("info@webnoxdigital.com") ? (
                              <>
                                {para.split("info@webnoxdigital.com")[0]}
                                <a
                                  href="mailto:info@webnoxdigital.com"
                                  className="text-[#25C3E5] hover:text-[#3FD7F1] underline font-medium"
                                >
                                  info@webnoxdigital.com
                                </a>
                                {para.split("info@webnoxdigital.com")[1]}
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

            {/* Refund Policy Table Section */}
            <div ref={(el) => (contentSectionsRef.current[sections.length] = el)} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-[#25C3E5]" />
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Refund Policy</h2>
                    <p className="text-gray-600 mt-2">Cancellation of Work Order After Completion of Client Payment</p>
                  </div>
                </div>
                <div className="overflow-x-auto" ref={(el) => (tableRefs.current[0] = el)}>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5]">
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm md:text-base rounded-tl-lg">
                          Reasons for Cancellation
                        </th>
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm md:text-base">
                          Refund Policy
                        </th>
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm md:text-base rounded-tr-lg">
                          Explanation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {refundScheduleData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-200 hover:bg-gradient-to-r hover:from-[#3FD7F1]/5 hover:to-[#25C3E5]/5 transition-colors ${
                            index === refundScheduleData.length - 1 ? "border-b-0" : ""
                          }`}
                        >
                          <td className="px-6 py-4 text-gray-700 font-medium text-sm md:text-base">{row.reason}</td>
                          <td className="px-6 py-4 text-gray-700 text-sm md:text-base">
                            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#3FD7F1]/10 to-[#25C3E5]/10 text-gray-800 font-medium">
                              {row.policy}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600 text-sm md:text-base">{row.explanation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Acceptable Grounds Table Section */}
            <div ref={(el) => (contentSectionsRef.current[sections.length + 1] = el)} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-[#25C3E5]" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Acceptable Grounds for a Refund Claim</h2>
                </div>
                <div className="overflow-x-auto" ref={(el) => (tableRefs.current[1] = el)}>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5]">
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm md:text-base rounded-tl-lg">
                          In the event of
                        </th>
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm md:text-base">
                          Refund Policy
                        </th>
                        <th className="px-6 py-4 text-left text-white font-semibold text-sm md:text-base rounded-tr-lg">
                          Explanation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {acceptableGroundsData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-200 hover:bg-gradient-to-r hover:from-[#3FD7F1]/5 hover:to-[#25C3E5]/5 transition-colors ${
                            index === acceptableGroundsData.length - 1 ? "border-b-0" : ""
                          }`}
                        >
                          <td className="px-6 py-4 text-gray-700 font-medium text-sm md:text-base">{row.event}</td>
                          <td className="px-6 py-4 text-gray-700 text-sm md:text-base">
                            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#3FD7F1]/10 to-[#25C3E5]/10 text-gray-800 font-medium">
                              {row.policy}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600 text-sm md:text-base">{row.explanation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 md:mt-24 pt-8 border-t-2 border-gradient-to-r from-[#3FD7F1] to-[#25C3E5] relative">
            <div className="absolute -top-[2px] left-0 w-32 h-[2px] bg-gradient-to-r from-[#3FD7F1] to-transparent" />
            <div className="bg-white/60 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-white/50 shadow-lg">
              <p className="text-gray-700 text-center text-base md:text-lg">
                For further queries and clarifications about our refund policy, please don't hesitate to contact us at{" "}
                <a
                  href="mailto:info@webnoxdigital.com"
                  className="text-[#25C3E5] hover:text-[#3FD7F1] underline font-semibold transition-colors"
                >
                  info@webnoxdigital.com
                </a>
                . We will do our best to address your concerns in a timely and efficient manner.
              </p>
            </div>
          </div>
        </div>
      </main>
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
