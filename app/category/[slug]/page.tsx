import { categories } from "@/constants/data";
import { connectToDatabase } from "@/db";
import Product from "@/models/Product";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getProducts(categoryName: string) {
  try {
    await connectToDatabase();
    // Case-insensitive search just in case, but exact match is better if possible
    const products = await Product.find({ category: categoryName });
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // Find the category object that matches the slug
  // The href is like "/category/automobiles", so we split to get the last part
  const matchedCategory = categories.find((c) => {
    const parts = c.href.split("/");
    const categorySlug = parts[parts.length - 1];
    return categorySlug === slug;
  });

  if (!matchedCategory) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">Category Not Found</h1>
        <p>The category you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 underline mt-4 block">
          Go Home
        </Link>
      </div>
    );
  }

  const products = await getProducts(matchedCategory.category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{matchedCategory.category}</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <Link key={product._id} href={`/products/${product._id}`} className="contents">
            <div
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="relative h-48 w-full bg-gray-100">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg truncate" title={product.name}>
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1 truncate" title={product.description}>
                  {product.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-lg">${product.price}</span>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {product.stockQuantity} in stock
                  </span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
