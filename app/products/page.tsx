import Link from "next/link"
import { createClient } from "@/utils/supabase/server"

export default async function Products() {
  const supabase = await createClient()
  const { data: products } = await supabase.from("products").select()

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="block">
            <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-900 transition duration-300">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-400">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

