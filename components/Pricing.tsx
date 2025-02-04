import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">Special Offers</h2>
        <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white">Bundle Deal</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold text-white mb-4">10% OFF</p>
            <p className="text-xl mb-6 text-gray-300">on orders over R500</p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Shop Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

