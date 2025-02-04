import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to stock up on delicious frozen foods?</h2>
        <p className="text-xl text-blue-100 mb-8">Shop now and experience the difference!</p>
        <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-200">
          Start Shopping
        </Button>
      </div>
    </section>
  )
}

