"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories } from "@/constants/data";

export default function Header() {
    const { data: session } = useSession();
    const { wishlistCount } = useWishlist();
    const { cartCount } = useCart();
    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All category");

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchQuery.trim()) {
            params.set("search", searchQuery.trim());
        }
        if (selectedCategory && selectedCategory !== "All category") {
            params.set("category", selectedCategory);
        }
        router.push(`/products?${params.toString()}`);
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
        <div className="bg-white border-b border-gray-200 px-15">

            <div className="w-full mx-auto px-4 md:px-6 py-3 flex flex-col gap-y-4 md:flex-row md:items-center md:gap-x-6">


                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                        <div className="flex items-center text-[#0d6efd] font-bold text-2xl tracking-tight cursor-pointer">
                            <span className="p-1.5">
                                <Image src="/logo-symbol.svg" alt="" width={40} height={40} />
                            </span>
                            <span className="opacity-50 text-3xl">Brand</span>
                        </div>
                    </Link>
                    <div className="flex md:hidden gap-5 text-gray-500">
                        <div className="flex flex-col items-center"></div>
                        <div className="flex flex-col items-center relative">
                            {cartCount > 0 && (
                                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="flex flex-1 w-full order-last md:order-0">
                    <div className="flex w-full">
                        <input
                            className="flex-1 border-2 border-[#0d6efd] rounded-l-md px-4 py-2 text-sm text-gray-600 focus:outline-none"
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
                                <div className="text-[11px] mt-1">
                                    {item.label === 'Profile' && session?.user?.email
                                        ? session.user.email.split('@')[0]
                                        : item.label}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
