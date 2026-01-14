"use client";

import CartItem from '@/components/cart/CartItem';
import OrderSummary from '@/components/cart/OrderSummary';
import SavedItemCard from '@/components/cart/SavedItemCard';
import PaymentMethod from '@/components/cart/PaymentMethod';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

interface CartItemType {
    id: number;
    _id: string;
    title: string;
    size: string;
    color: string;
    seller: string;
    price: number;
    image: string;
    quantity: number;
}

interface SavedItemType {
    id: number;
    title: string;
    price: number;
    image: string;
}

const initialCartItems: CartItemType[] = [
    { id: 1, _id: "65a2f5e8d9b3a1a2b3c4d5e6", title: "T-shirts with multiple colors, for men and lady", size: "Medium", color: "Blue", seller: "Artel Market", price: 78.99, image: "/1.png", quantity: 1 },
    { id: 2, _id: "65a2f5e8d9b3a1a2b3c4d5e7", title: "Jeans school bag for boys and girls", size: "Medium", color: "Blue", seller: "Best Factory LLC", price: 39.00, image: "/2.png", quantity: 1 },
    { id: 3, _id: "65a2f5e8d9b3a1a2b3c4d5e8", title: "Modern beige lamp for bedroom", size: "Medium", color: "Beige", seller: "Artel Market", price: 170.50, image: "/3.png", quantity: 1 },
];

const initialSavedItems: SavedItemType[] = [
    { id: 4, title: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/12.png" },
    { id: 5, title: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/5.png" },
    { id: 6, title: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/6.png" },
    { id: 7, title: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/7.png" },
];

export default function CartPage() {
    const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
    const [savedItems, setSavedItems] = useState<SavedItemType[]>(initialSavedItems);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isCheckedOut, setIsCheckedOut] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // Handler functions
    const handleRemoveItem = (id: number | string) => {
        removeFromCart(id);
    };

    const handleSaveForLater = (id: number | string) => {
        const itemToSave = cartItems.find(item => item.id === id);
        if (itemToSave) {
            const savedItem: SavedItemType = {
                id: Number(itemToSave.id),
                title: itemToSave.title,
                price: itemToSave.price,
                image: itemToSave.image
            };
            setSavedItems([...savedItems, savedItem]);
            removeFromCart(id);
        }
    };

    const handleQuantityChange = (id: number | string, quantity: number) => {
        updateQuantity(id, quantity);
    };

    const handleMoveToCart = (id: number | string) => {
        const itemToMove = savedItems.find(item => item.id === id);
        if (itemToMove) {
            addToCart({
                id: itemToMove.id,
                title: itemToMove.title,
                size: "Medium",
                color: "Blue",
                seller: "Artel Market",
                price: itemToMove.price,
                image: itemToMove.image,
                quantity: 1
            });
            setSavedItems(savedItems.filter(item => item.id !== id));
        }
    };

    // Correcting the above: addToCart needs to be destructured at top
    // Retrying the whole block in next tool call logic, but here I will fix it inline

    // ... logic continues below in actual implementation ...
    // I will replace the block with the correct implementation.

    const handleRemoveSavedItem = (id: number | string) => {
        setSavedItems(savedItems.filter(item => item.id !== id));
    };

    const handleRemoveAll = () => {
        if (window.confirm('Are you sure you want to remove all items from cart?')) {
            clearCart();
        }
    };

    const handleCheckout = async () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        setIsProcessing(true);
        try {
            // Using context's cartTotal
            const items = cartItems.map(item => ({
                product: item.id, // Using id as product reference
                quantity: item.quantity,
                price: item.price
            }));

            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items,
                    totalAmount: cartTotal,
                    paymentMethod
                }),
            });

            if (response.ok) {
                setIsCheckedOut(true);
                clearCart();
            } else {
                const data = await response.json();
                alert(data.message || "Failed to place order (Mock API might be missing user session).");
            }
        } catch (error) {
            console.error("Checkout error:", error);
            alert("An error occurred during checkout.");
        } finally {
            setIsProcessing(false);
        }
    };

    if (isCheckedOut) {
        return (
            <div className="bg-[#F7F8FA] min-h-screen font-sans flex items-center justify-center px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-gray-100 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Order Success!</h2>
                    <p className="text-gray-500 mb-8">
                        Thank you for your purchase. Your order has been placed successfully using
                        <span className="font-bold text-gray-900"> {paymentMethod === 'card' ? 'Credit Card' : paymentMethod === 'paypal' ? 'PayPal' : 'Cash on Delivery'}</span>.
                    </p>
                    <Link href="/">
                        <button className="w-full bg-[#127FFF] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-200 active:scale-95">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-white border-b border-gray-200 px-15">
                <div className="w-full mx-auto px-4 md:px-6 py-3 flex justify-between flex-col gap-y-4 md:flex-row md:items-center md:gap-x-6">
                    <div className="flex items-center justify-start w-full md:w-auto">
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
                                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartItems.length}</div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex gap-5 lg:gap-7 text-gray-500 shrink-0 items-center justify-end">
                        {[
                            { label: 'Profile', icon: <Image src="/profile.svg" alt="Profile" width={20} height={20} /> },
                            { label: 'Message', icon: <Image src="/Vector.svg" alt="Message" width={20} height={20} /> },
                            { label: 'Orders', icon: <Image src="/heart.svg" className="mb-1" alt="Orders" width={20} height={20} /> },
                            { label: 'My cart', icon: <Image src="/bucket.svg" alt="Cart" width={20} height={20} />, count: cartItems.length },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors">
                                <div className="relative text-xl">
                                    {item.icon}
                                    {item.count !== undefined && item.count > 0 && (
                                        <div className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] px-1 min-w-[14px] h-[14px] rounded-full flex items-center justify-center">
                                            {item.count}
                                        </div>
                                    )}
                                </div>
                                <div className="text-[11px] mt-1">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#F7F8FA] min-h-screen font-sans">
                <main className="w-full mx-auto px-24 py-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">My cart ({cartItems.length})</h2>

                    <div className="flex flex-col lg:flex-row gap-6 mb-8">
                        <div className="flex-1">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 mb-4">
                                {cartItems.length === 0 ? (
                                    <div className="text-center py-12">
                                        <p className="text-gray-500 mb-4">Your cart is empty</p>
                                        <Link href="/">
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                                                Continue Shopping
                                            </button>
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        {cartItems.map((item) => (
                                            <CartItem
                                                key={item.id}
                                                item={item}
                                                onRemove={handleRemoveItem}
                                                onSaveForLater={handleSaveForLater}
                                                onQuantityChange={handleQuantityChange}
                                            />
                                        ))}

                                        <div className="flex justify-between items-center pt-4 mt-2">
                                            <Link href="/">
                                                <button className="flex items-center gap-2 bg-[#127FFF] hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors shadow-sm">
                                                    <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                    Back to shop
                                                </button>
                                            </Link>
                                            <button
                                                onClick={handleRemoveAll}
                                                className="text-blue-600 font-medium border border-gray-200 px-4 py-2 rounded bg-white hover:bg-gray-50 transition-colors"
                                            >
                                                Remove all
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>

                            <PaymentMethod
                                selectedMethod={paymentMethod}
                                onSelect={setPaymentMethod}
                            />
                        </div>

                        <div className="w-full lg:w-[280px] shrink-0">
                            <OrderSummary
                                onCheckout={handleCheckout}
                                isProcessing={isProcessing}
                                subtotal={cartTotal}
                                itemCount={cartItems.length}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                        {[
                            {
                                icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-lock-fill " viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
                                </svg>
                                , title: "Secure payment", desc: "Have you ever finally just"
                            },
                            {
                                icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-left-text " viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                </svg>, title: "Customer support", desc: "Have you ever finally just"
                            },
                            {
                                icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-truck " viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg>, title: "Free delivery", desc: "Have you ever finally just"
                            },
                        ].map((feat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl text-gray-500">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-900">{feat.title}</h5>
                                    <p className="text-sm text-gray-400">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {savedItems.length > 0 && (
                        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Saved for later</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {savedItems.map((item) => (
                                    <SavedItemCard
                                        key={item.id}
                                        data={item}
                                        onMoveToCart={handleMoveToCart}
                                        onRemove={handleRemoveSavedItem}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="bg-[#005ADE] rounded-lg p-8 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#004dc0] skew-x-12 translate-x-20 z-0 opacity-50"></div>

                        <div className="relative z-10 text-white mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold">Super discount on more than 100 USD</h3>
                            <p className="text-blue-100 opacity-90 text-sm">Have you ever finally just write dummy info</p>
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
