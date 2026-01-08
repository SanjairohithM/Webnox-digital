"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
 
export default function FAQSection({ faqs: customFaqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  const defaultFaqs = [
    {
      question: "What makes Webnox Digital a data-driven digital marketing agency?",
      answer: "Webnox Digital uses real-time analytics, performance metrics, and AI-powered tools to make informed marketing decisions. Our campaigns are backed by data, not guesswork, to deliver measurable results."
    },
    {
      question: "Are you an international SEO agency?",
      answer: "Absolutely. We specialize in international SEO strategies that help brands rank across multiple regions and languages, including the UK, US, Europe, and the Middle East."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Absolutely. We provide flexible maintenance packages that include bug fixing, updates, feature enhancements, performance monitoring, and technical support."
    },
    {
      question: "Do you offer ecommerce website development services?",
      answer: "Yes. We build scalable ecommerce websites using platforms like Shopify, WooCommerce, and Magento, as well as custom ecommerce portals with robust backend systems."
    },
    {
      question: "Can you build multilingual and international websites?",
      answer: "Absolutely. As an international web development agency, we create multilingual websites with localized SEO features to target global markets like Europe, the UK, and the GCC."
    }
  ]

  const faqs = customFaqs || defaultFaqs

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200/50 rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-sm"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 hover:bg-white/60 transition-colors duration-200 ${
                  openIndex === index ? "bg-white/70 text-[#25C3E5]" : "bg-white/40"
                }`}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 border-t border-gray-200/50 bg-white/50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

