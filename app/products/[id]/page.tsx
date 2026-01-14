"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import Header from '@/components/Header';
import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';

// Mock product data - in a real app, this would come from an API
const mockProducts = [
    { id: 1, title: "Canon Camera EOS 2000, Black 10x zoom", price: 998.00, originalPrice: 1128.00, rating: 4.5, image: "/1.png", description: "High-quality camera with advanced features for professional photography", orders: 154, seller: "Artel Market" },
    { id: 2, title: "Headphones Premium Wireless", price: 536.00, originalPrice: 600.00, rating: 4.2, image: "/2.png", description: "Premium wireless headphones with noise cancellation", orders: 89, seller: "Best Factory LLC" },
    { id: 3, title: "Xiaomi Poco X2 Pro", price: 244.00, rating: 3.5, image: "/3.png", description: "Powerful smartphone with excellent performance", orders: 234, seller: "Tech Store" },
    { id: 4, title: "Smart Watch Series 5", price: 399.00, originalPrice: 499.00, rating: 4.7, image: "/12.png", description: "Advanced smartwatch with health tracking", orders: 67, seller: "Gadget Hub" },
    { id: 5, title: "Laptop Pro 15 inch", price: 1299.00, originalPrice: 1499.00, rating: 4.8, image: "/5.png", description: "Professional laptop for work and gaming", orders: 45, seller: "Computer World" },
    { id: 6, title: "Bluetooth Speaker", price: 89.00, rating: 4.0, image: "/6.png", description: "Portable speaker with amazing sound", orders: 178, seller: "Audio Plus" },
];

export default function ProductDetailPage() {
    const params = useParams();
    const productId = parseInt(params.id as string);
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false);

    // Find product by ID
    const product = mockProducts.find(p => p.id === productId);

    if (!product) {
        return (
            <div className="min-h-screen bg-[#F7F8FA] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
                    <Link href="/products">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                            Browse Products
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    const inWishlist = isInWishlist(productId);

    const handleWishlistClick = () => {
        if (inWishlist) {
            removeFromWishlist(productId);
        } else {
            addToWishlist(product);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: quantity,
                seller: product.seller
            });
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 3000);
        }
    };

    // Get recommended products (exclude current product)
    const recommended = mockProducts
        .filter(p => p.id !== productId)
        .slice(0, 3)
        .map(p => ({ img: p.image, title: p.title, price: p.price.toFixed(2), id: p.id }));

    // Get related products (exclude current product)
    const related = mockProducts
        .filter(p => p.id !== productId)
        .slice(0, 6)
        .map(p => ({ img: p.image, title: p.title, price: `$${p.price.toFixed(2)}`, id: p.id }));

    // Product images (using same image for demo)
    const productImages = [product.image, product.image, product.image, product.image];

    const tabs = ['Description', 'Reviews', 'Shipping', 'About seller'];

    return (
        <>
            <Header />
            <MenuBar />
            <div className="bg-[#F7F8FA] min-h-screen pb-10">
                <main className="w-full mx-auto px-22 py-4">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-5 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-blue-600">Home</Link> <span className="text-gray-400">›</span>
                        <Link href="/products" className="hover:text-blue-600">Products</Link> <span className="text-gray-400">›</span>
                        <span className="text-gray-900">{product.title}</span>
                    </div>

                    {/* --- Top Section: Product Main Details --- */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6 mb-5">
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Product Gallery */}
                            <div className="shrink-0 w-full lg:w-[400px]">
                                <div className="relative aspect-square bg-gray-50 rounded-lg mb-3 overflow-hidden border border-gray-200">
                                    <Image
                                        src={productImages[selectedImage]}
                                        alt={product.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {productImages.map((img, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setSelectedImage(i)}
                                            className={`relative aspect-square bg-gray-50 rounded border-2 cursor-pointer transition-all ${selectedImage === i ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <Image src={img} alt={`View ${i + 1}`} fill className="object-contain p-2" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex-1">
                                <h1 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h1>

                                {/* Rating */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex text-orange-400">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < Math.floor(product.rating) ? "text-orange-400" : "text-gray-300"}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-orange-400">{product.rating}</span>
                                    <span className="text-sm text-gray-500">• {product.orders} orders</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                                    <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                                    {product.originalPrice && (
                                        <>
                                            <span className="text-lg text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                                                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                                {/* Quantity */}
                                <div className="mb-4">
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Quantity</h3>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-9 h-9 border text-gray-900 border-gray-500 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="w-12 text-center font-semibold text-gray-900">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-9 h-9 border text-gray-900 border-gray-500 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 mb-4">
                                    <button
                                        onClick={handleAddToCart}
                                        disabled={addedToCart}
                                        className={`flex-1 font-semibold py-2.5 rounded-lg transition-colors text-sm ${
                                            addedToCart
                                                ? "bg-green-600 hover:bg-green-700 text-white"
                                                : "bg-blue-600 hover:bg-blue-700 text-white"
                                        }`}
                                    >
                                        {addedToCart ? "Added to Cart!" : "Add to Cart"}
                                    </button>
                                    <button
                                        onClick={handleWishlistClick}
                                        className={`px-4 py-2.5 border-2 rounded-lg transition-all ${inWishlist
                                            ? 'border-red-500 text-red-500 bg-red-50'
                                            : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'
                                            }`}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill={inWishlist ? "currentColor" : "none"}
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Features */}
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Free Shipping
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        In Stock
                                    </div>
                                </div>
                            </div>

                            {/* Supplier Card */}
                            <div className="w-full lg:w-[240px] border border-gray-200 rounded-lg p-4 h-fit bg-gray-50">
                                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Supplier</h3>
                                <p className="text-gray-700 font-medium mb-2">{product.seller}</p>
                                <div className="space-y-2 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Germany
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Verified Seller
                                    </div>
                                </div>
                                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg transition-colors text-sm font-medium">
                                    Contact Supplier
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- Middle Section: Description & Sidebar --- */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* Left: Description Tabs */}
                        <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm">
                            {/* Tab Headers */}
                            <div className="flex border-b border-gray-200 px-4">
                                {tabs.map((tab, i) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(i)}
                                        className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${i === activeTab ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="p-4 lg:p-6 space-y-6">
                                {activeTab === 0 && (
                                    <>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {product.description}. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>

                                        {/* Specs Table */}
                                        <div className="border border-gray-200 rounded overflow-hidden">
                                            {[
                                                { label: "Model", val: `#${product.id}786867` },
                                                { label: "Style", val: "Classic style" },
                                                { label: "Rating", val: `${product.rating} stars` },
                                                { label: "Orders", val: `${product.orders} orders` },
                                                { label: "Seller", val: product.seller },
                                            ].map((row, i) => (
                                                <div key={i} className="flex border-b border-gray-200 last:border-b-0">
                                                    <div className="w-1/3 bg-gray-50 px-4 py-2 text-gray-500 text-sm">{row.label}</div>
                                                    <div className="w-2/3 bg-white px-4 py-2 text-gray-600 text-sm">{row.val}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Features List */}
                                        <div className="space-y-2">
                                            {["High quality materials", "Professional grade performance", "Durable and long-lasting", "Great value for money"].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                                    <span className="text-gray-400">✓</span> {item}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                                {activeTab === 1 && (
                                    <div className="text-gray-600 text-sm">
                                        <p className="mb-4">Customer reviews coming soon. Be the first to review this product!</p>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="flex text-orange-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i}>★</span>
                                                ))}
                                            </div>
                                            <span className="font-semibold">{product.rating} out of 5</span>
                                        </div>
                                        <p className="text-gray-500">Based on {product.orders} orders</p>
                                    </div>
                                )}
                                {activeTab === 2 && (
                                    <div className="text-gray-600 text-sm space-y-3">
                                        <p><strong>Free Shipping:</strong> Available for all orders</p>
                                        <p><strong>Delivery Time:</strong> 3-5 business days</p>
                                        <p><strong>Return Policy:</strong> 30 days money-back guarantee</p>
                                    </div>
                                )}
                                {activeTab === 3 && (
                                    <div className="text-gray-600 text-sm space-y-3">
                                        <p><strong>Seller:</strong> {product.seller}</p>
                                        <p><strong>Location:</strong> Germany</p>
                                        <p><strong>Total Orders:</strong> {product.orders}+</p>
                                        <p><strong>Rating:</strong> {product.rating} stars</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: You May Like */}
                        <div className="w-full lg:w-[280px] bg-white border border-gray-200 rounded-lg p-4 h-fit">
                            <h3 className="font-bold text-gray-900 mb-4">You may like</h3>
                            <div className="space-y-4">
                                {recommended.map((item) => (
                                    <Link key={item.id} href={`/products/${item.id}`}>
                                        <div className="flex gap-3 group cursor-pointer">
                                            <div className="w-16 h-16 border border-gray-200 rounded-md bg-gray-50 relative shrink-0">
                                                <Image src={item.img} alt="rec" fill className="object-contain p-1" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm text-gray-900 font-medium line-clamp-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                                <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- Bottom Section: Related Products --- */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 mt-5">
                        <h3 className="font-bold text-xl text-gray-900 mb-6">Related products</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {related.map((item) => (
                                <Link key={item.id} href={`/products/${item.id}`}>
                                    <div className="group cursor-pointer">
                                        <div className="bg-gray-50 rounded-lg aspect-square relative mb-3 overflow-hidden">
                                            <Image src={item.img} alt={item.title} fill className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-gray-600 text-sm group-hover:text-blue-600">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* --- Footer Banner --- */}
                    <div className="mt-5 bg-[#005ADE] rounded-lg p-6 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
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
