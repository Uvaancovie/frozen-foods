"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navItems = [
  { name: "Products", href: "#products" },
  { name: "About Us", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black shadow-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/logo.png" className="flex-shrink-0">
            <Image src="/logo.svg" alt="Frozen Delights Logo" width={150} height={40} />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Button>Shop Now</Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-gray-700">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="w-full">Shop Now</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

