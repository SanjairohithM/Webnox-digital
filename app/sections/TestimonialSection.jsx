"use client"

import React, { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Rajhans Plywood",
      designation: "Client",
      content: "I worked with Webnox closely for 3 different projects - Logo creation, website building and digital marketing. The logo came out really well, Our website is well-designed with visually appealing images, animations, and content. Their Digital marketing campaigns, particularly the Google Ads strategy, was fantastic, which helped us with more clients. Thank you, Webnox team, for making my digital presence more effective.",
      rating: 5,
      company: "Rajhans Plywood"
    },
    {
      id: 2,
      name: "Varuna Gandhi",
      designation: "Client",
      content: "I was looking for a trusted mobile app development company, and I visited Webnox for the same and had a great discussion with the team. Wonderful team, and they understood accurately what I needed and supported me to create the most suitable app for my business. I am extremely impressed with Webnox's time management and proactive work. They completed my app project within time and budget. App quality was also excellent. Really very good result, and our work process has also increased a lot.",
      rating: 5,
      company: "Varuna Gandhi"
    },
    {
      id: 3,
      name: "Ashish Kumar",
      designation: "Client",
      content: "After launching our new website, Webnox helped us build the foundation of our SEO. They provided business keywords for my website and prepared a proper SEO strategy to rank for those keywords. As promised, their SEO team gave us the best ranking result within two months. We had an amazing experience, I highly recommend SEO services in Coimbatore.",
      rating: 5,
      company: "Ashish Kumar"
    }
  ]

  const nextTestimonial = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevTestimonial = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToTestimonial = (index) => {
    if (index !== currentIndex) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsTransitioning(false)
      }, 300)
    }
  }

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by businesses worldwide
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-24 h-24 text-[#25C3E5]" />
            </div>

            {/* Testimonial Content */}
            <div className={`relative z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FFD700] text-[#FFD700]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 text-center leading-relaxed font-medium italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#3FD7F1] to-[#25C3E5] flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  {testimonials[currentIndex].designation}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#25C3E5]" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#25C3E5]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#25C3E5] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

