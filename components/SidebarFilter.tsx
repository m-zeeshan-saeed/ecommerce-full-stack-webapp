// components/SidebarFilter.tsx
"use client";
import React, { useState } from 'react';

export default function SidebarFilter() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

    return (
        <div className="w-full lg:w-[240px] shrink-0 space-y-6 pr-4">
            {/* Category Section */}
            <div className="border-t border-gray-200 pt-4 first:border-none first:pt-0">
                <div className="font-semibold text-gray-900 mb-3 flex justify-between cursor-pointer">
                    Category <div className="text-gray-400">^</div>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="hover:text-blue-600 cursor-pointer">Mobile accessory</li>
                    <li className="hover:text-blue-600 cursor-pointer">Electronics</li>
                    <li className="hover:text-blue-600 cursor-pointer">Smartphones</li>
                    <li className="hover:text-blue-600 cursor-pointer">Modern tech</li>
                    <li className="text-blue-600 cursor-pointer mt-1">See all</li>
                </ul>
            </div>

            {/* Brands Section */}
            <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900 mb-3 flex justify-between">
                    Brands <div className="text-gray-400">^</div>
                </div>
                <div className="space-y-2">
                    {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map((brand) => (
                        <div key={brand} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            {brand}
                        </div>
                    ))}
                    <div className="text-blue-600 text-sm cursor-pointer block mt-1">See all</div>
                </div>
            </div>

            {/* Price Range Section */}
            <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900 mb-3 flex justify-between">
                    Price range <span className="text-gray-400">^</span>
                </div>
                {/* Visual Range Slider Mockup */}
                <div className="h-1 bg-gray-200 rounded-full mb-4 relative">
                    <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-600 rounded-full"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow-sm"></div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <div className="text-xs text-gray-500">Min</div>
                        <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                            className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-blue-500"
                            placeholder="0"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs text-gray-500">Max</div>
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-blue-500"
                            placeholder="999999"
                        />
                    </div>
                </div>
                <button className="w-full mt-3 bg-white border border-gray-300 text-blue-600 text-sm font-medium py-1.5 rounded hover:bg-gray-50 transition-colors shadow-sm">
                    Apply
                </button>
            </div>

            {/* Condition Section */}
            <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900 mb-3 flex justify-between">
                    Condition <span className="text-gray-400">^</span>
                </div>
                <div className="space-y-2">
                    {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond, i) => (
                        <div key={cond} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="radio" name="condition" defaultChecked={i === 0} className="text-blue-600 focus:ring-blue-500" />
                            {cond}
                        </div>
                    ))}
                </div>
            </div>

            {/* Ratings Section */}
            <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900 mb-3 flex justify-between">
                    Ratings <span className="text-gray-400">^</span>
                </div>
                <div className="space-y-2">
                    {[5, 4, 3, 2].map((stars) => (
                        <div key={stars} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <div className="flex text-orange-400 text-sm">
                                {"★".repeat(stars)}{"☆".repeat(5 - stars)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
