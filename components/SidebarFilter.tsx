// components/SidebarFilter.tsx
"use client";
import { useState } from 'react';

const FilterSection = ({ title, defaultOpen = false, children }: { title: string, defaultOpen?: boolean, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-t border-gray-200  first:border-none first:pt-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full font-semibold  text-gray-900 mb-3"
            >
                {title}
                <span className={`text-gray-400  transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            {isOpen && <div className="space-y-2 animate-fadeIn">{children}</div>}
        </div>
    );
};

interface SidebarFilterProps {
    selectedRatings: number[];
    onRatingChange: (rating: number) => void;
}

export default function SidebarFilter({ selectedRatings, onRatingChange }: SidebarFilterProps) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

    return (
        <div className="w-full lg:w-[240px] shrink-0 space-y-6 pr-4">
            {/* Category Section */}
            <div className="border-t border-gray-200 first:border-none first:pt-0">
                <div className="font-semibold text-gray-900 mb-3 flex justify-between cursor-pointer">
                </div>
                <FilterSection title="Category" defaultOpen={true}>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="hover:text-blue-600 cursor-pointer">Mobile accessory</li>
                        <li className="hover:text-blue-600 cursor-pointer">Electronics</li>
                        <li className="hover:text-blue-600 cursor-pointer">Smartphones</li>
                        <li className="hover:text-blue-600 cursor-pointer">Modern tech</li>
                        <li className="text-blue-600 cursor-pointer mt-1">See all</li>
                    </ul>
                </FilterSection>
            </div>

            {/* Brands Section */}

            <FilterSection title="Brands" defaultOpen={true}>
                {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map((brand) => (
                    <div key={brand} className=" flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-600">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 " />
                        {brand}
                    </div>
                ))}
                <div className="text-blue-600 text-sm cursor-pointer block mt-1">See all</div>
            </FilterSection>


            {/* Features - Expanded & Checked (New from screenshot) */}
            <FilterSection title="Features" defaultOpen={true}>
                {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map((feat, i) => (
                    <label key={feat} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-600">
                        <input type="checkbox" defaultChecked={i === 0} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        {feat}
                    </label>
                ))}
                <span className="text-blue-600 text-xs cursor-pointer block mt-1">See all</span>
            </FilterSection>

            {/* Price Range Section */}
            <FilterSection title="Price range" defaultOpen={true}>
                <div className=" border-gray-200 ">

                    {/* Visual Range Slider Mockup */}
                    <div className="h-1 bg-gray-200 rounded-full mb-4 relative">
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-600 rounded-full"></div>
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow-sm"></div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex-1">
                            <div className="text-xs text-gray-900">Min</div>
                            <input
                                type="number"
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className="w-full border text-black border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-blue-500"
                                placeholder="0"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-gray-900">Max</div>
                            <input
                                type="number"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="w-full border text-black border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-blue-500"
                                placeholder="999999"
                            />
                        </div>
                    </div>
                    <button className="w-full mt-3 bg-white border border-gray-300 text-blue-600 text-sm font-medium py-1.5 rounded hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
                        Apply
                    </button>
                </div>
            </FilterSection>

            {/* Condition Section */}
            <FilterSection title="Condition" defaultOpen={true}>

                <div className="space-y-2">
                    {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond, i) => (
                        <div key={cond} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-600">
                            <input type="radio" name="condition" defaultChecked={i === 0} className="text-blue-600 focus:ring-blue-500" />
                            {cond}
                        </div>
                    ))}
                </div>
                <span className="text-blue-600 text-xs cursor-pointer block mt-1">See all</span>

            </FilterSection>

            {/* Ratings Section */}
            <FilterSection title="Ratings" defaultOpen={true}>

                <div className="space-y-2">
                    {[5, 4, 3, 2].map((stars) => (
                        <div key={stars} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedRatings.includes(stars)}
                                onChange={() => onRatingChange(stars)}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <div className="flex text-orange-400 text-sm">
                                {"★".repeat(stars)}{"☆".repeat(5 - stars)}
                            </div>
                        </div>
                    ))}
                </div>
            </FilterSection>


        </div >
    );
}
