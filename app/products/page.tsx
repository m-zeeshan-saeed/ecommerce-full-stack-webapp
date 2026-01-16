
"use client";
import SidebarFilter from "@/components/SidebarFilter";
import ProductListCard from "@/components/ProductListCard";
import Newsletter from "@/components/Newsletter";
import ActiveFilters from "@/components/ActiveFilters";
import ProductGridCard from "@/components/ProductGridCard";
import { useState } from "react";
import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";


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
    {
        id: 4,
        title: "Canon Camera EOS 2000, Black 10x zoom",
        price: 998.00,
        originalPrice: 1128.00,
        rating: 7.5,
        orders: 154,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 5,
        title: "Canon Camera EOS 2000, Black 10x zoom",
        price: 998.00,
        originalPrice: 1128.00,
        rating: 7.5,
        orders: 154,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 6,
        title: "Canon Camera EOS 2000, Black 10x zoom",
        price: 998.00,
        originalPrice: 1128.00,
        rating: 7.5,
        orders: 154,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 7,
        title: "Canon Camera EOS 2000, Black 10x zoom",
        price: 998.00,
        originalPrice: 1128.00,
        rating: 7.5,
        orders: 154,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 8,
        title: "Canon Camera EOS 2000, Black 10x zoom",
        price: 998.00,
        originalPrice: 1128.00,
        rating: 7.5,
        orders: 154,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 9,
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

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

// ... existing imports

function ProductListingContent() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search')?.toLowerCase() || "";

    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleRatingChange = (rating: number) => {
        setSelectedRatings(prev =>
            prev.includes(rating)
                ? prev.filter(r => r !== rating)
                : [...prev, rating]
        );
    };

    const filteredProducts = products.filter(product => {
        // Filter by rating
        if (selectedRatings.length > 0 && !selectedRatings.includes(Math.floor(product.rating))) {
            return false;
        }

        // Filter by search query (title or description)
        if (searchQuery) {
            const matchesSearch =
                product.title.toLowerCase().includes(searchQuery) ||
                product.description.toLowerCase().includes(searchQuery);
            if (!matchesSearch) return false;
        }

        return true;
    });



    return (
        <>
            <Header />
            <MenuBar />
            <div className="bg-[#f7f8fa] min-h-screen w-full"> {/* Removed fixed padding here */}



                <main className="container mx-auto px-4 md:px-6 py-6">


                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <span>Home</span>
                        <span className="text-gray-400">›</span>
                        <span>Clothings</span>
                        <span className="text-gray-400">›</span>
                        <span>Men&apos;s wear</span>
                        <span className="text-gray-400">›</span>
                        <span className="text-gray-900">Summer clothing</span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Sidebar - Hidden on mobile, sticky on desktop */}
                        <div className="hidden lg:block w-[240px] shrink-0">
                            <SidebarFilter
                                selectedRatings={selectedRatings}
                                onRatingChange={handleRatingChange}
                            />
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">

                            {/* Top Filter Bar */}
                            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div className="text-gray-900 text-sm flex items-center justify-between w-full sm:w-auto">
                                    <span>{filteredProducts.length} items found</span>

                                    {/* Mobile Filter Button */}
                                    <button
                                        className="lg:hidden flex items-center gap-2 text-blue-600 font-medium text-sm sm:hidden"
                                        onClick={() => setIsFilterOpen(true)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="4" y1="21" x2="4" y2="14"></line>
                                            <line x1="4" y1="10" x2="4" y2="3"></line>
                                            <line x1="12" y1="21" x2="12" y2="12"></line>
                                            <line x1="12" y1="8" x2="12" y2="3"></line>
                                            <line x1="20" y1="21" x2="20" y2="16"></line>
                                            <line x1="20" y1="12" x2="20" y2="3"></line>
                                            <line x1="1" y1="14" x2="7" y2="14"></line>
                                            <line x1="9" y1="8" x2="15" y2="8"></line>
                                            <line x1="17" y1="16" x2="23" y2="16"></line>
                                        </svg>
                                        Filter
                                    </button>
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                                    <div className="flex items-center gap-2 text-sm hidden sm:flex">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                                        <span className="text-gray-900">Verified only</span>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <select className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white focus:outline-none text-gray-900 focus:border-blue-500">
                                                <option>Featured</option>
                                                <option>Price: Low to High</option>
                                                <option>Newest</option>
                                            </select>
                                        </div>

                                        {/* View Toggle Icons */}
                                        <div className="flex border border-gray-300 rounded overflow-hidden">
                                            <button
                                                onClick={() => setViewMode('grid')}
                                                className={`p-2 border-r border-gray-300 transition-colors ${viewMode === 'grid' ? 'bg-gray-200 text-gray-900' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
                                            >
                                                <svg className="w-[18px] h-[18px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clipRule="evenodd" />
                                                </svg>


                                            </button>
                                            <button
                                                onClick={() => setViewMode('list')}
                                                className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-gray-200 text-gray-900' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
                                            >
                                                <svg className="w-[18px] h-[18px] text-gray-800 dark:text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h12v2H4v-2z" /></svg>
                                            </button>
                                        </div>
                                         {/* Tablet Filter Button */}
                                         <button
                                            className="hidden sm:flex lg:hidden items-center p-2 border border-gray-300 rounded hover:bg-gray-50"
                                            onClick={() => setIsFilterOpen(true)}
                                            title="Filter"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ActiveFilters
                                activeFilters={selectedRatings.map(r => `${r} stars`)}
                                onRemoveFilter={(filter) => {
                                    const rating = parseInt(filter);
                                    handleRatingChange(rating);
                                }}
                                onClearAll={() => setSelectedRatings([])}
                            />

                            {/* Conditional Product Display */}
                            {viewMode === 'grid' ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredProducts.map((product) => (

                                        <ProductGridCard key={product.id} data={product} />

                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {/* Combining and mapping products for list view */}
                                    {filteredProducts.map((product) => (
                                        <ProductListCard key={product.id} data={product} />
                                    ))}
                                </div>
                            )}

                            {/* Pagination */}
                            <div className="flex justify-end items-center gap-2 mt-8">
                                <div className="relative">
                                    <select className="border text-gray-900 border-gray-300 rounded px-3 py-1.5 text-sm bg-white focus:outline-none cursor-pointer">
                                        <option>Show 10</option>
                                        <option>Show 20</option>
                                    </select>
                                </div>

                                <div className="flex border text-gray-900   border-gray-300 rounded bg-white">
                                    <button className="w-9 h-9 flex items-center justify-center border-r border-gray-300 hover:bg-gray-50 text-gray-500 hover:text-blue-600">
                                        &lt;
                                    </button>
                                    <button className="w-9 h-9 flex items-center justify-center border-r border-gray-300 bg-gray-100 font-medium text-gray-900 hover:text-blue-600">
                                        1
                                    </button>
                                    <button className="w-9 h-9 flex items-center justify-center border-r border-gray-300 hover:bg-gray-50 text-gray-600 hover:text-blue-600">
                                        2
                                    </button>
                                    <button className="w-9 h-9 flex items-center justify-center border-r border-gray-300 hover:bg-gray-50 text-gray-600 hover:text-blue-600">
                                        3
                                    </button>
                                    <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-blue-600">
                                        &gt;
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

            </div>

            {/* Mobile Filter Drawer Overlay */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[320px] bg-white p-5 overflow-y-auto shadow-xl transition-transform">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg text-gray-900">Filters</h3>
                            <button onClick={() => setIsFilterOpen(false)} className="text-gray-500 hover:text-gray-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <SidebarFilter
                            selectedRatings={selectedRatings}
                            onRatingChange={handleRatingChange}
                        />
                         <div className="mt-6 pt-4 border-t border-gray-200">
                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Newsletter />
            <Footer />
        </>
    );
}

export default function ProductListingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#f7f8fa] flex items-center justify-center">Loading...</div>}>
            <ProductListingContent />
        </Suspense>
    );
}
