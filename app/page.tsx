import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductHighlights from "@/components/ProductHighlights"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import HowItWorks from "@/components/HowItWorks"
import Pricing from "@/components/Pricing"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductHighlights />
        <WhyChooseUs />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

