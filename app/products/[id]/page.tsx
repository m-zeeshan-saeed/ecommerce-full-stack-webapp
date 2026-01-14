
import Image from 'next/image';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import SupplierCard from '@/components/product/SupplierCard';
import Header from '@/components/Header';
import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';

// Mock Data for "You may like"
const recommended = [
    { img: "/1.png", title: "Men Blazers Sets Elegant Formal", price: "7.00 - 99.50" },
    { img: "/2.png", title: "Men Shirt Sleeve Polo Contrast", price: "7.00 - 99.50" },
    { img: "/3.png", title: "Apple Watch Series Space Gray", price: "7.00 - 99.50" },
    { img: "/5.png", title: "Basketball Crew Socks Long Stuff", price: "7.00 - 99.50" },
];

// Mock Data for "Related Products"
const related = [
    { img: "/6.png", title: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00" },
    { img: "/7.png", title: "Smart Watch Series 7", price: "$32.00-$40.00" },
    { img: "/8.png", title: "Headphones G-9000", price: "$32.00-$40.00" },
    { img: "/9.png", title: "Men Blue Jeans Shorts", price: "$32.00-$40.00" },
    { img: "/10.png", title: "Electric Kettle Black", price: "$32.00-$40.00" },
    { img: "/10.png", title: "Electric Kettle Black", price: "$32.00-$40.00" },
];

export default function ProductDetailPage() {
    return (
        <>
            <Header />
            <MenuBar />
            <div className="bg-[#F7F8FA] min-h-screen pb-10">


                <main className="w-full mx-auto px-22 py-4">

                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-5 overflow-x-auto whitespace-nowrap">
                        <span>Home</span> <span className="text-gray-400">›</span>
                        <span>Clothings</span> <span className="text-gray-400">›</span>
                        <span>Men&apos;s wear</span> <span className="text-gray-400">›</span>
                        <span className="text-gray-900">Summer clothing</span>
                    </div>

                    {/* --- Top Section: Product Main Details --- */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6 mb-5">
                        <div className="flex flex-col lg:flex-row gap-6">
                            <ProductGallery />
                            <ProductInfo />
                            <SupplierCard />
                        </div>
                    </div>

                    {/* --- Middle Section: Description & Sidebar --- */}
                    <div className="flex flex-col lg:flex-row gap-5">

                        {/* Left: Description Tabs */}
                        <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm">
                            {/* Tab Headers */}
                            <div className="flex border-b border-gray-200 px-4">
                                {['Description', 'Reviews', 'Shipping', 'About seller'].map((tab, i) => (
                                    <button
                                        key={tab}
                                        className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${i === 0 ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="p-4 lg:p-6 space-y-6">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>

                                {/* Specs Table */}
                                <div className="border border-gray-200 rounded overflow-hidden">
                                    {[
                                        { label: "Model", val: "#8786867" },
                                        { label: "Style", val: "Classic style" },
                                        { label: "Certificate", val: "ISO-898921212" },
                                        { label: "Size", val: "34mm x 450mm x 19mm" },
                                        { label: "Memory", val: "36GB RAM" },
                                    ].map((row, i) => (
                                        <div key={i} className="flex border-b border-gray-200 last:border-b-0">
                                            <div className="w-1/3 bg-gray-50 px-4 py-2 text-gray-500 text-sm">{row.label}</div>
                                            <div className="w-2/3 bg-white px-4 py-2 text-gray-600 text-sm">{row.val}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Features List */}
                                <div className="space-y-2">
                                    {["Some great feature name here", "Lorem ipsum dolor sit amet", "Duis aute irure dolor in reprehenderit", "Some great feature name here"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                            <span className="text-gray-400">✓</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: You May Like */}
                        <div className="w-full lg:w-[280px] bg-white border border-gray-200 rounded-lg p-4 h-fit">
                            <h3 className="font-bold text-gray-900 mb-4">You may like</h3>
                            <div className="space-y-4">
                                {recommended.map((item, i) => (
                                    <div key={i} className="flex gap-3 group cursor-pointer">
                                        <div className="w-16 h-16 border border-gray-200 rounded-md bg-gray-50 relative shrink-0">
                                            <Image src={item.img} alt="rec" fill className="object-contain p-1" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-gray-900 font-medium line-clamp-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                            <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- Bottom Section: Related Products --- */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 mt-5">
                        <h3 className="font-bold text-xl text-gray-900 mb-6">Related products</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {related.map((item, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="bg-gray-50 rounded-lg aspect-square relative mb-3 overflow-hidden">
                                        <Image src={item.img} alt={item.title} fill className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-gray-600 text-sm group-hover:text-blue-600">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- Footer Banner --- */}
                    <div className="mt-5 bg-[#005ADE] rounded-lg p-6 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
                        {/* Simple visual background overlap effect */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#004dc0] skew-x-12 translate-x-12 z-0 opacity-50"></div>

                        <div className="relative z-10 text-white mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold">Super discount on more than 100 USD</h3>
                            <p className="text-blue-100 opacity-90">Have you ever finally just write dummy info</p>
                        </div>
                        <button className="relative z-10 bg-[#FF9017] hover:bg-[#ff8500] text-white font-medium px-6 py-2.5 rounded-md transition-colors shadow-sm">
                            Shop now
                        </button>
                    </div>

                </main>

            </div>
            <Footer />
        </>
    );
}
