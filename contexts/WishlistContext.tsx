"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface WishlistItem {
    id: number;
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
}

interface WishlistContextType {
    wishlistItems: WishlistItem[];
    addToWishlist: (item: WishlistItem) => void;
    removeFromWishlist: (id: number) => void;
    isInWishlist: (id: number) => boolean;
    wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
        // Load wishlist from localStorage on mount
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('wishlist');
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (error) {
                    console.error('Failed to load wishlist:', error);
                }
            }
        }
        return [];
    });

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
        }
    }, [wishlistItems]);

    const addToWishlist = (item: WishlistItem) => {
        setWishlistItems(prev => {
            // Check if item already exists
            if (prev.some(i => i.id === item.id)) {
                return prev;
            }
            return [...prev, item];
        });
    };

    const removeFromWishlist = (id: number) => {
        setWishlistItems(prev => prev.filter(item => item.id !== id));
    };

    const isInWishlist = (id: number) => {
        return wishlistItems.some(item => item.id === id);
    };

    const value = {
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount: wishlistItems.length
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
}
