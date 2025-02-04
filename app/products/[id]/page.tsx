import { createClient } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  
  // Fetch product based on the dynamic [id] parameter
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !product) {
    console.error('Error fetching product:', error);
    return notFound(); // Show a 404 page if the product doesn't exist
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
        <p className="text-white text-lg">${product.price}</p>
        <p className="text-gray-400 mt-2">{product.description}</p>
      </div>
    </div>
  );
}
