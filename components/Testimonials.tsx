"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    image: "/testimonial1.jpg",
    quote: "The frozen pizzas are a lifesaver for busy nights!",
  },
  {
    name: "John D.",
    image: "/testimonial2.jpg",
    quote: "Amazing quality – tastes like fresh-baked goods.",
  },
  {
    name: "Emily R.",
    image: "/testimonial3.jpg",
    quote: "Frozen Delights has become a staple in our household. Convenient and delicious!",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gray-900 py-12" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">What Our Customers Say</h2>
        <div className="relative">
          <Card className="max-w-3xl mx-auto bg-gray-800 border-gray-700">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <p className="text-xl italic mb-4 text-gray-300">&ldquo;{testimonials[currentIndex].quote}&rdquo;</p>
              <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
            </CardContent>
          </Card>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0">
            <div className="flex justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

