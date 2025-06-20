"use client"

import Header from "../sections/Components/Header"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Web Development</h2>
            <p className="text-gray-600">Custom web solutions tailored to your needs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Mobile Apps</h2>
            <p className="text-gray-600">Native and cross-platform mobile applications</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cloud Solutions</h2>
            <p className="text-gray-600">Scalable and secure cloud infrastructure</p>
          </div>
        </div>
      </div>
    </main>
  )
}