// app/products/page.tsx

import SidebarFilter from "@/components/SidebarFilter";
import ProductListCard from "@/components/ProductListCard";

const products = [
    {
        id: 1,
        title: "Canon Camera EOS 2000, Black 10x zoom",
        price: 998.00,
        originalPrice: 1128.00,
        rating: 7.5,
        orders: 154,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 2,
        title: "GoPro HERO6 4K Action Camera - Black",
        price: 998.00,
        rating: 7.5,
        orders: 154,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 3,
        title: "Canon Camera EOS 2000, Black 10x zoom",
        price: 998.00,
        originalPrice: 1128.00,
        rating: 7.5,
        orders: 154,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
    },
    // Add more dummy data as needed...
];

export default function ProductListingPage() {
    return (
        <div className="bg-[#f7f8fa] min-h-screen">


            <main className="max-w-[1180px] mx-auto px-4 md:px-6 py-6">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>Home</span>
                    <span className="text-gray-400">›</span>
                    <span>Clothings</span>
                    <span className="text-gray-400">›</span>
                    <span>Men's wear</span>
                    <span className="text-gray-400">›</span>
                    <span className="text-gray-900">Summer clothing</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar - Hidden on mobile, sticky on desktop */}
                    <div className="hidden lg:block">
                        <SidebarFilter />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">

                        {/* Top Filter Bar */}
                        <div className="bg-white border border-gray-200 rounded-lg p-3 mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-gray-900 text-sm">
                                12,911 items in <span className="font-semibold">Mobile accessory</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                                    <span className="text-gray-900">Verified only</span>
                                </div>

                                <div className="relative">
                                    <select className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white focus:outline-none text-gray-900 focus:border-blue-500">
                                        <option>Featured</option>
                                        <option>Price: Low to High</option>
                                        <option>Newest</option>
                                    </select>
                                </div>

                                {/* View Toggle Icons */}
                                <div className="flex border border-gray-300 rounded overflow-hidden">
                                    <button className="p-2 bg-gray-100 hover:bg-gray-200 border-r border-gray-300">
                                        <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4h10v2H5V4zm0 5h10v2H5V9zm0 5h10v2H5v-2z" /></svg>
                                    </button>
                                    <button className="p-2 bg-white hover:bg-gray-50">
                                        <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M5 5h2v2H5V5zm0 4h2v2H5V9zm0 4h2v2H5v-2zm4-8h6v2H9V5zm0 4h6v2H9V9zm0 4h6v2H9v-2z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product List */}
                        <div className="space-y-3">
                            {products.map((product) => (
                                <ProductListCard key={product.id} data={product} />
                            ))}

                            {/* Just duplicating to fill the page for demo */}
                            {products.map((product) => (
                                <ProductListCard key={`dup-${product.id}`} data={{ ...product, id: product.id + 10 }} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-end items-center gap-2 mt-8">
                            <div className="relative">
                                <select className="border text-gray-900 border-gray-300 rounded px-3 py-1.5 text-sm bg-white focus:outline-none cursor-pointer">
                                    <option>Show 10</option>
                                    <option>Show 20</option>
                                </select>
                            </div>

                            <div className="flex border text-gray-900 border-gray-300 rounded bg-white">
                                <button className="w-9 h-9 flex items-center justify-center border-r border-gray-300 hover:bg-gray-50 text-gray-500">
                                    &lt;
                                </button>
                                <button className="w-9 h-9 flex items-center justify-center border-r border-gray-300 bg-gray-100 font-medium text-gray-900">
                                    1
                                </button>
                                <button className="w-9 h-9 flex items-center justify-center border-r border-gray-300 hover:bg-gray-50 text-gray-600">
                                    2
                                </button>
                                <button className="w-9 h-9 flex items-center justify-center border-r border-gray-300 hover:bg-gray-50 text-gray-600">
                                    3
                                </button>
                                <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500">
                                    &gt;
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
