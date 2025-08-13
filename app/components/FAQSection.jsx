import React from "react";
import Image from "next/image";
import Link from "next/link";

const FAQSection = () => {
  const faqs = [
    {
      question: "What industries do you offer branding for?",
      answer: "We work across industries from e-commerce, healthcare, real estate, education, SaaS, to professional services. We tailor the brand to suit your market and goals."
    },
    {
      question: "Can you help launch the new brand, too?",
      answer: "Yes. We can help you roll out your new brand across your website, social media, stationery, packaging, and digital campaigns."
    },
    {
      question: "What makes Webnox Digital different from other branding agencies?",
      answer: "We combine strategy, creativity, and tech.  We're branding experts who understand business, target markets, and long-term brand scalability. "
    },

  ];
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-2">Frequently</h2>
          <span className="text-4xl font-bold text-sky-500">Asked Questions</span>
        </div>
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* FAQ Accordion */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-xl border border-gray-200 bg-white transition-shadow ${openIdx === idx ? 'shadow-md' : 'hover:shadow'} `}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <span className="text-4xl  font-semibold">{openIdx === idx ? '-' : '+'}</span>
                </button>
                {openIdx === idx && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Right Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 flex flex-col items-center text-center min-h-[320px]">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <Image
                src="/images/fi_7.webp"
                alt="FAQ Icon"
                width={48}
                height={48}
                className="object-contain w-10 h-10"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Do you have more questions?</h3>
            <p className="text-gray-500 text-sm mb-6">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
            <Link href="/contact" className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition-colors shadow-sm cursor-pointer">Shoot a Direct Mail</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 