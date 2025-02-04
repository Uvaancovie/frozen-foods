import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Award, DollarSign, Clock } from "lucide-react"

const features = [
  {
    name: "Fast Delivery",
    description: "Get your frozen delights delivered quickly to your doorstep.",
    icon: Truck,
  },
  {
    name: "High-Quality, Halal-certified",
    description: "All our products are Halal-certified and made with premium ingredients.",
    icon: Award,
  },
  {
    name: "Affordable Pricing",
    description: "Enjoy great taste without breaking the bank.",
    icon: DollarSign,
  },
  {
    name: "Long Shelf Life",
    description: "Our frozen foods stay fresh for longer, reducing food waste.",
    icon: Clock,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.name} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-white mb-4" />
                <CardTitle className="text-white">{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

