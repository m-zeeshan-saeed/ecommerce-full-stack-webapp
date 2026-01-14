"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWishlist } from '@/contexts/WishlistContext';

interface ProductProps {
    id: number;
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    orders: number;
    description: string;
}

export default function ProductListCard({ data }: { data: ProductProps }) {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const inWishlist = isInWishlist(data.id);

    const handleWishlistClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (inWishlist) {
            removeFromWishlist(data.id);
        } else {
            addToWishlist({
                id: data.id,
                title: data.title,
                price: data.price,
                originalPrice: data.originalPrice,
                rating: data.rating,
                image: data.image
            });
        }
    };

    return (
        <Link href={`/products/${data.id}`}>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                {/* Image Section */}
                <div className="relative w-full sm:w-[200px] h-[180px] shrink-0 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover object-center mix-blend-multiply"
                    />
                </div>

                {/* Details Section */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start">
                            <div className="font-medium text-gray-900 text-base mb-1">
                                {data.title}
                            </div>
                            {/* Wishlist Icon */}
                            <button
                                onClick={handleWishlistClick}
                                className={`${inWishlist ? 'text-red-500 border-red-200' : 'text-blue-600 border-gray-200'} hover:text-red-500 transition-colors p-1 rounded-full border hover:border-red-100 bg-white shadow-sm`}
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

                        <div className="flex items-center gap-2 mb-1">
                            <div className="text-xl font-bold text-gray-900">${(data.price || 0).toFixed(2)}</div>
                            {data.originalPrice && (
                                <div className="text-sm text-gray-400 line-through">${data.originalPrice.toFixed(2)}</div>
                            )}
                        </div>

                        <div className="flex items-center gap-3 text-sm mb-2">
                            <div className="flex items-center gap-1">
                                <div className="flex text-orange-400 text-sm">★★★★☆</div>
                                <div className="text-orange-400 font-medium">{data.rating}</div>
                            </div>
                            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="text-gray-500">{data.orders} orders</div>
                            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div className="text-green-600 font-medium">Free Shipping</div>
                        </div>

                        <div className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2">
                            {data.description}
                        </div>
                    </div>

                    <div className="text-blue-600 text-sm font-medium hover:underline">
                        View details
                    </div>
                </div>
            </div>
        </Link>
    );
}
