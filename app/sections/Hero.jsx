import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { View } from "@react-three/drei"
import { CarIdelScene } from "@/Three/Scenes/Car"
import Sphere from "@/Three/Models/Sphere"
import { Float } from "@react-three/drei"
import Robot from "@/Three/Models/Robot"

export default function Hero() {
  return (
    <main className="min-h-[100vh] bg-gradient-to-br from-[#e8e0ff] via-[#e0f8ff] to-white overflow-hidden relative">
        <View className="w-[100%] h-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
            {/* <CarIdelScene /> */}
            <Float
              speed={2}
              rotationIntensity={0}
              floatIntensity={2}
              floatingRange={[0, 0.15]}
            >
              <Sphere position={[-1.9,.5,0]} />
            </Float>
            <Float
              speed={2}
              rotationIntensity={0}
              floatIntensity={2}
              floatingRange={[0, 0.15]}
            >
              <Sphere position={[1.9,-.5,0]} />
            </Float>
        </View>
    

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="flex">
          <Image src="/webnox-logo.png" alt="Webnox Logo" width={180} height={50} className="object-contain" />
        </div>

        <nav className="hidden md:flex items-center max-w-[45rem] w-full gap-8  px-[3rem] py-[1rem] rounded-full border border-gray-400 justify-between backdrop-filter backdrop-blur-lg bg-opacity-30 ">
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            About
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            Solutions
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            Industries
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            Expertise
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            AI
          </Link>
          <Link href="#" className="text-gray-800 hover:text-[#2acbec] transition-colors">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="md:hidden rounded-full p-2 hover:bg-white/20 cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20">
            <Menu className="h-6 w-6 text-black" />
          </button>
          <Link
            href="#"
            className="hidden md:block bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Let's talk
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 flex flex-col justify-center relative z-10" style={{ height: 'calc(100vh - 88px)' }}>
        <div className="max-w-3xl mx-auto mb-8 relative flex justify-center items-center">
          <div className="absolute left-1/2 top-[115%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full -z-10 bg-gradient-to-b from-[#2acbec]/70 via-white/10 to-white/10  shadow-[inset_0px_0.91px_43.29px_0px_#F9F9F9] backdrop-blur-0"></div>
          {/* <Image src="/robot.png" alt="AI Robot" width={400} height={400} className="mx-auto relative" /> */}
          <Robot />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl mx-auto text-gray-800">
          Where AI Agents Connect, Solve, and deliver -<span className="text-[#2acbec]"> Webnox Digital</span>
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
        </p>
      </section>
    </main>
  )
}
