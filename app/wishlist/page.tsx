"use client";

import { useWishlist } from "@/contexts/WishlistContext";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
    const { wishlistItems, removeFromWishlist } = useWishlist();

    if (wishlistItems.length === 0) {
        return (
            <div className="min-h-screen bg-[#F7F8FA]">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">My Wishlist</h1>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                        <div className="text-gray-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Your Wishlist is Empty</h3>
                        <p className="text-gray-500 mb-6">Save items you love to your wishlist!</p>
                        <Link href="/products">
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                                Browse Products
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F7F8FA]">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
                    <p className="text-gray-500">{wishlistItems.length} item(s) saved</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <Link href={`/products/${item.id}`}>
                                <div className="relative w-full aspect-square mb-3 bg-gray-50 rounded overflow-hidden cursor-pointer">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </Link>

                            <Link href={`/products/${item.id}`}>
                                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-10 cursor-pointer hover:text-blue-600">
                                    {item.title}
                                </h3>
                            </Link>

                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
                                {item.originalPrice && (
                                    <span className="text-sm text-gray-400 line-through">${item.originalPrice.toFixed(2)}</span>
                                )}
                            </div>

                            <div className="flex items-center gap-1.5 mb-3">
                                <div className="flex text-sm text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={i < Math.floor(item.rating) ? "text-orange-400" : "text-gray-300"}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-orange-400">{item.rating}</span>
                            </div>

                            <div className="flex gap-2">
                                <Link href={`/products/${item.id}`} className="flex-1">
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded transition-colors">
                                        View Details
                                    </button>
                                </Link>
                                <button
                                    onClick={() => removeFromWishlist(item.id)}
                                    className="px-3 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-red-500 rounded transition-colors"
                                    title="Remove from wishlist"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
