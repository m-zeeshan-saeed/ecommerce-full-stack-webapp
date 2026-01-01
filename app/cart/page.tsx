"use client";

import CartItem from '@/components/cart/CartItem';
import OrderSummary from '@/components/cart/OrderSummary';
import SavedItemCard from '@/components/cart/SavedItemCard';


const cartItems = [
    { id: 1, title: "T-shirts with multiple colors, for men and lady", size: "Medium", color: "Blue", seller: "Artel Market", price: 78.99, image: "/1.png" },
    { id: 2, title: "Jeans school bag for boys and girls", size: "Medium", color: "Blue", seller: "Best Factory LLC", price: 39.00, image: "/2.png" },
    { id: 3, title: "Modern beige lamp for bedroom", size: "Medium", color: "Beige", seller: "Artel Market", price: 170.50, image: "/3.png" },
];

const savedItems = [
    { id: 1, title: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/12.png" },
    { id: 2, title: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/5.png" },
    { id: 3, title: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/6.png" },
    { id: 4, title: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/7.png" },
];

export default function CartPage() {
    return (
        <div className="bg-[#F7F8FA] min-h-screen font-sans">

            <main className="w-full mx-auto px-24 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My cart ({cartItems.length})</h2>

                <div className="flex flex-col lg:flex-row gap-6 mb-8">

                    {/* Left Column: Cart Items */}
                    <div className="flex-1">
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 mb-4">
                            {cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}

                            <div className="flex justify-between items-center pt-4 mt-2">
                                <button className="flex items-center gap-2 bg-[#127FFF] hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors shadow-sm">
                                    <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    Back to shop
                                </button>
                                <button className="text-blue-600 font-medium border border-gray-200 px-4 py-2 rounded bg-white hover:bg-gray-50 transition-colors">
                                    Remove all
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="w-full lg:w-[280px] shrink-0">
                        <OrderSummary />
                    </div>
                </div>

                {/* Trust Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    {[
                        {
                            icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-lock-fill " viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3" />
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

                {/* Saved For Later Section */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Saved for later</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {savedItems.map((item, i) => (
                            <SavedItemCard key={i} data={item} />
                        ))}
                    </div>
                </div>

                {/* Blue Discount Banner */}
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
    );
}
