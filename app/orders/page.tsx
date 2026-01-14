"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Order {
    _id: string;
    totalAmount: number;
    paymentMethod: string;
    status: string;
    createdAt: string;
    items: Array<{
        product: string;
        quantity: number;
        price: number;
    }>;
}

export default function OrdersPage() {
    const { status } = useSession();
    const router = useRouter();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        } else if (status === "authenticated") {
            fetchOrders();
        }
    }, [status, router]);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders/user');
            if (response.ok) {
                const data = await response.json();
                setOrders(data.orders || []);
            }
        } catch (error) {
            console.error("Failed to fetch orders:", error);
        } finally {
            setLoading(false);
        }
    };

    if (status === "loading" || loading) {
        return (
            <div className="min-h-screen bg-[#F7F8FA] flex items-center justify-center">
                <div className="text-gray-600">Loading...</div>
            </div>
        );
    }

    const getPaymentMethodLabel = (method: string) => {
        const labels: { [key: string]: string } = {
            'card': 'Credit/Debit Card',
            'paypal': 'PayPal',
            'cod': 'Cash on Delivery'
        };
        return labels[method] || method;
    };

    const getStatusColor = (status: string) => {
        const colors: { [key: string]: string } = {
            'pending': 'bg-yellow-100 text-yellow-800',
            'processing': 'bg-blue-100 text-blue-800',
            'shipped': 'bg-purple-100 text-purple-800',
            'delivered': 'bg-green-100 text-green-800',
            'cancelled': 'bg-red-100 text-red-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="min-h-screen bg-[#F7F8FA]">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
                    <p className="text-gray-500">View and track your order history</p>
                </div>

                {orders.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                        <div className="text-gray-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Orders Yet</h3>
                        <p className="text-gray-500 mb-6">You haven&apos;t placed any orders yet.</p>
                        <Link href="/">
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                                Start Shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order._id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-gray-200">
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Order ID</div>
                                        <div className="font-mono text-sm font-medium text-gray-900">{order._id}</div>
                                    </div>
                                    <div className="flex gap-4 mt-4 md:mt-0">
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Date</div>
                                            <div className="text-sm font-medium text-gray-900">
                                                {new Date(order.createdAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Total</div>
                                            <div className="text-sm font-bold text-gray-900">${order.totalAmount.toFixed(2)}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Payment Method</div>
                                        <div className="text-sm font-medium text-gray-900">{getPaymentMethodLabel(order.paymentMethod)}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Items</div>
                                        <div className="text-sm font-medium text-gray-900">{order.items.length} item(s)</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Status</div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
