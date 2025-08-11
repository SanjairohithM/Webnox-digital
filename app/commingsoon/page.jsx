"use client"

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background video */}
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
  )
}
