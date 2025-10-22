"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Aianimationfaq = () => {
    const faqs = [
      {
        question: "Does Webnox Digital provide AI automation for both small and large businesses?",
        answer: "Yes. Our AI automation solutions are scalable — from small startups looking to save time on daily tasks to large enterprises seeking complex, multi-step automation across departments."
      },
      {
        question: "Which business processes can be automated with AI?",
        answer: "AI can automate customer support (chatbots), data entry, lead scoring, workflow approvals, marketing campaigns, inventory tracking, and more—depending on your industry needs."
      },
      {
        question: "How quickly can Webnox Digital implement AI automation for my business?",
        answer: "Depending on the complexity, our team can deploy simple automation workflows within a few days, while more advanced, enterprise-level projects may take several weeks."
      },
  
      {
        question: "How do I know if AI automation is right for my company?",
        answer: "If your business deals with repetitive tasks, large amounts of data, or complex workflows, AI automation can significantly improve efficiency and decision-making."
      },
    ];
    const [openIdx, setOpenIdx] = React.useState(-1);
  
    return (
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2">Frequently</h2>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-500">Asked Questions</span>
          </div>
          {/* Responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* FAQ Accordion */}
            <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border border-gray-200 bg-white transition-shadow ${openIdx === idx ? 'shadow-md' : 'hover:shadow'} `}
                >
                  <button
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none"
                    onClick={() => {
                      if (openIdx === idx) {
                        setOpenIdx(-1); // Close if already open
                      } else {
                        setOpenIdx(idx); // Open this one
                      }
                    }}
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold flex-shrink-0">{openIdx === idx ? '-' : '+'}</span>
                  </button>
                  {openIdx === idx && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Right Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center min-h-[280px] sm:min-h-[320px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src="/images/fi_7.webp"
                  alt="FAQ Icon"
                  width={48}
                  height={48}
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Do you have more questions?</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
              <Link href="/contact-us" className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors shadow-sm cursor-pointer">Shoot a Direct Mail</Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Aianimationfaq;