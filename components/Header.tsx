"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories, headerData } from "@/constants/data";

export default function Header() {
    const { data: session } = useSession();
    const { wishlistCount } = useWishlist();
    const { cartCount } = useCart();
    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All category");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchQuery.trim()) {
            params.set("search", searchQuery.trim());
        }
        if (selectedCategory && selectedCategory !== "All category") {
            params.set("category", selectedCategory);
        }
        router.push(`/products?${params.toString()}`);
        setIsMobileMenuOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const navigationItems = [
        {
            label: 'Profile',
            icon: <Image src="/profile.svg" alt="Profile" width={20} height={20} />,
            href: '/profile'
        },
        {
            label: 'Message',
            icon: <Image src="/Vector.svg" alt="Message" width={20} height={20} />,
            href: '/messages'
        },
        {
            label: 'Wishlist',
            icon: <Image src="/heart.svg" className="mb-1" alt="Wishlist" width={20} height={20} />,
            href: '/wishlist',
            count: wishlistCount
        },
        {
            label: 'My cart',
            icon: <Image src="/bucket.svg" alt="Cart" width={20} height={20} />,
            count: cartCount,
            href: '/cart'
        },
    ];

    return (
        <div className="bg-white border-b border-gray-200 relative z-50">
            <div className="container mx-auto lg:px-20 px-4 md:px-6 py-3 flex flex-col gap-y-4 md:flex-row md:items-center md:gap-x-6">

                {/* Top Row: Brand + Mobile Toggles */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center gap-3">
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-500 focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        <Link href="/">
                            <div className="flex items-center text-[#0d6efd] font-bold text-2xl tracking-tight cursor-pointer">
                                <span className="p-1.5 bg-[#0d6efd] rounded-lg mr-2">
                                    <Image src="/logo-symbol.svg" alt="" width={30} height={30} className="w-7 h-7 "  />
                                </span>
                                <span className="text-[#8CB7F5] font-bold text-2xl">Brand</span>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Cart & User Actions (Visible on Mobile) */}
                    <div className="flex md:hidden gap-4 text-gray-500 items-center">
                         <Link href="/cart" className="relative">
                            <Image src="/bucket.svg" alt="Cart" width={24} height={24} />
                            {cartCount > 0 && (
                                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </div>
                            )}
                        </Link>
                         <Link href="/profile">
                            <Image src="/profile.svg" alt="Profile" width={24} height={24} />
                        </Link>
                    </div>
                </div>

                {/* Search Bar - Full Width on Mobile, Auto on Desktop */}
                <div className="flex flex-1 w-full order-last md:order-0">
                    <div className="flex w-full">
                        <input
                            className="flex-1 border-2 border-[#0d6efd] rounded-l-md px-4 py-2 text-sm text-gray-600 focus:outline-none w-0 min-w-[50px]"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <div className="hidden lg:block border-y-2 border-[#0d6efd] px-3 bg-white">
                            <select
                                className="h-full text-sm text-black bg-transparent border-none focus:outline-none cursor-pointer"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option>All category</option>
                                {categories.map((cat) => (
                                    <option key={cat.category} value={cat.category}>
                                        {cat.category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={handleSearch}
                            className="bg-[#0d6efd] hover:bg-blue-700 transition-colors text-white px-6 rounded-r-md text-sm font-medium"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation Items */}
                <div className="hidden md:flex gap-5 lg:gap-7 text-gray-500 shrink-0">
                    {navigationItems.map((item) => (
                        <Link key={item.label} href={item.href}>
                            <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors group">
                                <div className="relative text-xl">
                                    {item.icon}
                                    {item.count !== undefined && item.count > 0 && (
                                        <div className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] px-1 min-w-[14px] h-[14px] rounded-full flex items-center justify-center">
                                            {item.count}
                                        </div>
                                    )}
                                </div>
                                <div className="text-[11px] mt-1 text-center">
                                    {item.label === 'Profile' && session?.user?.email
                                        ? session.user.email.split('@')[0]
                                        : item.label}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

             {/* Mobile Navigation Drawer */}
             {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
                    <div className="px-4 py-2 space-y-1">
                        {/* Main Navigation */}
                        {navigationItems.map((item) => (
                             <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-50 text-gray-700"
                            >
                                <div className="relative">
                                    {item.icon}
                                    {item.count !== undefined && item.count > 0 && (
                                        <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                            {item.count}
                                        </div>
                                    )}
                                </div>
                                <span className="font-medium text-sm">
                                     {item.label === 'Profile' && session?.user?.email
                                        ? session.user.email.split('@')[0]
                                        : item.label}
                                </span>
                            </Link>
                        ))}

                        {/* Secondary Links from MenuBar using headerData */}
                         <div className="border-t border-gray-100 my-2 pt-2">
                             <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                 Menu
                             </div>
                             {headerData.map((item) => (
                                 <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                                 >
                                     {item.title}
                                 </Link>
                             ))}
                         </div>

                         {/* Categories */}
                         <div className="border-t border-gray-100 my-2 pt-2">
                             <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                 Categories
                             </div>
                             {categories.map((cat) => (
                                <button
                                    key={cat.category}
                                    onClick={() => {
                                        setSelectedCategory(cat.category);
                                        handleSearch(); // Triggers search and closes menu
                                    }}
                                    className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                                >
                                    {cat.category}
                                </button>
                            ))}
                         </div>
                    </div>
                </div>
            )}
        </div>
    );
}
