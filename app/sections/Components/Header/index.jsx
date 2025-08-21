"use client"
import { usePathname } from "next/navigation"
import AnimatedNavbar from "./AnimatedNavbar"

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Custom items for your website
  const navItems = [
    { name: "About", href: "/about-us", icon: null },
    { name: "Services", href: "#services", icon: null },
    { name: "Solutions", href: "#solutions", icon: null },
      // { name: "Industries", href: "/commingsoon", icon: null },
      // { name: "Expertise", href: "/commingsoon", icon: null },
    { name: "AI", href: "/commingsoon", icon: null },
    { name: "Resources", href: "/commingsoon", icon: null }
  ]

  return (
    <AnimatedNavbar 
      items={navItems}
      logo="/webnox-logo.png"
      brandName="Webnox"
    />
  )
}
