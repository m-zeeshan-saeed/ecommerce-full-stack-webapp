import { categories } from "@/constants/data";
import { connectToDatabase } from "@/db";
import Product from "@/models/Product";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface ProductType {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stockQuantity: number;
  category: string;
}

async function getProducts(categoryName: string): Promise<ProductType[]> {
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
  const matchedCategory = categories.find((c) => {
    // Extract the slug from the href (e.g., "/category/automobiles" -> "automobiles")
    const categorySlug = c.href.split('/').pop();
    return categorySlug === slug;
  });

  if (!matchedCategory) {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
            <p className="text-gray-600 mb-6">The category &quot;{slug}&quot; does not exist.</p>
            <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Back to Home
            </Link>
          </div>
        </div>
    );
  }

  const products = await getProducts(matchedCategory.category);

  return (
    <div className="bg-[#f7f8fa] min-h-screen">
      <Header />
      <MenuBar />

      <main className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">{matchedCategory.category}</span>
        </div>

        {/* Category Header */}
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{matchedCategory.category}</h1>
            <p className="text-gray-500 mt-2">{products.length} items found</p>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
           <div className="bg-white p-8 rounded-lg text-center border border-gray-200">
             <p className="text-gray-500">No products found in this category.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product._id} href={`/products/${product._id}`} className="contents">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
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
      </main>
    </div>
  );
}
