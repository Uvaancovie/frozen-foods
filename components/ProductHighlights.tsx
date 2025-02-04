import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { name: "Frozen Pizza", thumbnail: "/pizza.jpg", price: 89.99, link: "#" },
  { name: "Ice Cream", thumbnail: "/ice-cream.jpg", price: 49.99, link: "#" },
  { name: "Frozen Vegetables", thumbnail: "/vegetables.jpg", price: 29.99, link: "#" },
  { name: "Frozen Croissants", thumbnail: "/croissants.jpg", price: 69.99, link: "#" },
  { name: "Frozen Fish Fillets", thumbnail: "/fish.jpg", price: 99.99, link: "#" },
  { name: "Frozen Berries", thumbnail: "/berries.jpg", price: 59.99, link: "#" },
]

export default function ProductHighlights() {
  return (
    <section className="bg-gray-900 py-12" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.name} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Image
                  src={product.thumbnail || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-white">{product.name}</CardTitle>
                <p className="text-lg font-semibold text-white mt-2">R{product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Link href={product.link} passHref>
                  <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                    View Product
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}

