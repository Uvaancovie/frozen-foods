import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "FAQs", href: "#" },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Twitter", href: "#", icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frozen Delights</h3>
            <p className="text-gray-400">Delicious frozen foods, ready when you are!</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white">
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 rounded-l-md text-gray-900" />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Frozen Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

