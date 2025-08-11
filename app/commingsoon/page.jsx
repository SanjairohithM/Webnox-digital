"use client"

export default function ComingSoonPage() {
  return (
    <>
      {/* Desktop / Tablet (md and up): Background video only */}
      <div className="relative min-h-screen w-full overflow-hidden hidden md:flex items-center justify-center">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/comesoon1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Mobile only: Simple centered message */}
      <div className="md:hidden min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-b from-white via-[#e0f8ff] to-[#e8e0ff] font-sans">
        <h1 className="text-4xl font-bold bg-black bg-clip-text text-transparent tracking-wider text-center font-sans">
          Under Construction
        </h1>
      </div>
    </>
  )
}
