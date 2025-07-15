"use client"
import { usePathname } from "next/navigation"
import AnimatedNavbar from "./AnimatedNavbar"

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Custom items for your website
  const navItems = [
    { name: "About", href: "/about", icon: null },
    { name: "Services", href: "#services", icon: null },
    { name: "Solutions", href: "#solutions", icon: null },
    { name: "Industries", href: "#industries", icon: null },
    { name: "Expertise", href: "#expertise", icon: null },
    { name: "AI", href: "#ai", icon: null },
    { name: "Resources", href: "#resources", icon: null }
  ]

  return (
    <AnimatedNavbar 
      items={navItems}
      logo="/webnox-logo.png"
      brandName="Webnox"
    />
  )
}
