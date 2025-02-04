import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ShoppingCart, Truck } from "lucide-react"

const steps = [
  {
    title: "Browse and Select",
    description: "Browse our wide range of frozen foods and select your favorites.",
    icon: Search,
  },
  {
    title: "Add to Cart and Checkout",
    description: "Add items to your cart and check out securely.",
    icon: ShoppingCart,
  },
  {
    title: "Fast Delivery",
    description: "Enjoy fast delivery straight to your freezer.",
    icon: Truck,
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

