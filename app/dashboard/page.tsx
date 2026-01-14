"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
    // const [user, setUser] = useState<{ name: string; email: string } | null>(null); // Removed as unused
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // In a real app, you might fetch user data from an API that verifies the JWT
        // For this simple version, we'll assume the middleware handled protection
        // and we can either store user info in localStorage or fetch it now.
        const fetchUser = async () => {
            try {
                // We can add an endpoint to get current user info if needed
                // But for now, let's just show a premium UI
                setLoading(false);
            } catch {
                router.push("/login");
            }
        };
        fetchUser();
    }, [router]);

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            router.push("/login");
            router.refresh();
        } catch (_error) {
            console.error("Logout failed", _error);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar */}
            <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <img src="/logo-symbol.svg" className="w-10 mr-2" alt="Logo" />
                    <span className="text-2xl font-bold text-blue-600">Brand</span>
                </Link>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
                >
                    Logout
                </button>
            </nav>

            {/* Main Content */}
            <main className="grow p-6 md:p-12 max-w-7xl mx-auto w-full">
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">Welcome back!</h1>
                    <p className="text-gray-600">{"Here's"} what{"'s"} happening with your account today.</p>
                </header>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Total Orders</h3>
                        <p className="text-2xl font-bold">12</p>
                        <div className="mt-2 text-green-500 text-xs font-medium">+2 this month</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Wishlist Items</h3>
                        <p className="text-2xl font-bold">5</p>
                        <div className="mt-2 text-blue-500 text-xs font-medium">View Wishlist</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Account Security</h3>
                        <p className="text-2xl font-bold text-green-600">Strong</p>
                        <div className="mt-2 text-gray-400 text-xs font-medium">Last login: 2 hours ago</div>
                    </div>
                </div>

                {/* Dashboard Details */}
                <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-8 py-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold">Account Settings</h2>
                    </div>
                    <div className="p-8 space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-50">
                            <div>
                                <p className="font-semibold text-gray-700">Profile Information</p>
                                <p className="text-sm text-gray-500">Update your name and email address.</p>
                            </div>
                            <button className="mt-4 md:mt-0 px-4 py-2 text-blue-600 font-medium hover:underline">Edit</button>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-50">
                            <div>
                                <p className="font-semibold text-gray-700">Order History</p>
                                <p className="text-sm text-gray-500">View and track your past orders.</p>
                            </div>
                            <button className="mt-4 md:mt-0 px-4 py-2 text-blue-600 font-medium hover:underline">View All</button>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4">
                            <div>
                                <p className="font-semibold text-gray-700">Notifications</p>
                                <p className="text-sm text-gray-500">Manage how you receive updates.</p>
                            </div>
                            <button className="mt-4 md:mt-0 px-4 py-2 text-blue-600 font-medium hover:underline">Configure</button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-6 px-6 text-center text-gray-500 text-sm">
                &copy; 2024 Brand E-commerce. All rights reserved.
            </footer>
        </div>
    );
}
