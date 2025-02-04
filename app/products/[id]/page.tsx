import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}

export default async function ProductPage() {
  const supabase = await createClient();
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    console.error('Error fetching products:', error);
    return <div>Failed to load products.</div>;
  }

  return (
    <div className="min-h-screen bg-black"> 
      <h1 className="text-3xl font-bold text-white mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-white text-lg font-semibold mb-2">
              {product.name}
            </h2>
            <p className="text-white mb-2">${product.price}</p>
            {/* Add more product details here */}
          </div>
        ))}
      </div>
    </div>
  );
}