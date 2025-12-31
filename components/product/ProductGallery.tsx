"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const images = [
    "/1.png", // Replace with your image paths
    "/2.png",
    "/3.png",
    "/6.png",
    "/5.png",
];

export default function ProductGallery() {
    const [activeImg, setActiveImg] = useState(images[0]);

    return (
        <div className="w-full lg:w-[380px] shrink-0 space-y-4">
            {/* Main Image */}
            <div className="border border-gray-200 rounded-md bg-white p-2 flex items-center justify-center h-[380px] relative overflow-hidden group">
                <Image
                    src={activeImg}
                    alt="Product Main"
                    fill
                    className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveImg(img)}
                        className={`w-14 h-14 border rounded-md shrink-0 flex items-center justify-center p-1 bg-white cursor-pointer hover:border-blue-400 transition-colors ${activeImg === img ? 'border-gray-600' : 'border-gray-200'}`}
                    >
                        <div className="relative w-full h-full">
                            <Image src={img} alt="thumb" fill className="object-cover" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
