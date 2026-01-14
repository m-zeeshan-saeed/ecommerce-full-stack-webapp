"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface StatItem {
    label: string;
    value: string;
    trend: string;
    color: string;
}

interface TransactionItem {
    name: string;
    item: string;
    price: string;
    status: string;
}

interface ProductItem {
    _id?: string;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    category: string;
}

export default function AdminDashboard() {
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<StatItem[]>([]);
    const [transactions, setTransactions] = useState<TransactionItem[]>([]);
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [activeTab, setActiveTab] = useState("overview");
    const [showAddModal, setShowAddModal] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: "", description: "", price: 0, stockQuantity: 0, category: "" });
    const router = useRouter();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [statsRes, productsRes] = await Promise.all([
                fetch("/api/admin/stats"),
                fetch("/api/admin/inventory")
            ]);
            const statsData = await statsRes.json();
            const productsData = await productsRes.json();

            setStats(statsData.stats || []);
            setTransactions(statsData.recentTransactions || []);
            setProducts(productsData || []);
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            router.push("/admin/login");
            router.refresh();
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/admin/inventory", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });
            if (res.ok) {
                setShowAddModal(false);
                setNewProduct({ name: "", description: "", price: 0, stockQuantity: 0, category: "" });
                fetchData();
            }
        } catch (error) {
            console.error("Failed to add product", error);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
            {/* Sidebar / Topbar */}
            <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center">
                        <img src="/logo-symbol.svg" className="w-10 mr-2" alt="Logo" />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500">
                            Admin Panel
                        </span>
                    </Link>
                    <div className="hidden md:flex gap-6 ml-10">
                        <button
                            onClick={() => setActiveTab("overview")}
                            className={`${activeTab === "overview" ? "text-white border-b-2 border-blue-500" : "text-gray-400"} hover:text-white font-medium transition-colors pb-1`}>
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab("inventory")}
                            className={`${activeTab === "inventory" ? "text-white border-b-2 border-blue-500" : "text-gray-400"} hover:text-white font-medium transition-colors pb-1`}>
                            Inventory
                        </button>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-all font-medium border border-red-500/20"
                >
                    Logout
                </button>
            </nav>

            {/* Main Grid */}
            <main className="grow p-6 md:p-12 max-w-7xl mx-auto w-full">
                {activeTab === "overview" ? (
                    <>
                        <header className="mb-10">
                            <h1 className="text-3xl font-extrabold text-white">System Overview</h1>
                            <p className="text-gray-400 mt-2">Real-time business insights and management tools.</p>
                        </header>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all group">
                                    <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.label}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                        <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                            {stat.trend}
                                        </span>
                                    </div>
                                    <div className={`h-1 w-full bg-gray-700 mt-4 rounded-full overflow-hidden`}>
                                        <div className={`h-full bg-${stat.color}-500 w-2/3 group-hover:w-3/4 transition-all duration-500`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                                <div className="px-8 py-6 border-b border-gray-700 flex justify-between items-center">
                                    <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
                                    <button className="text-blue-400 text-sm hover:underline">View All</button>
                                </div>
                                <div className="p-4">
                                    <table className="w-full text-left">
                                        <thead className="text-gray-400 text-sm uppercase">
                                            <tr>
                                                <th className="px-4 py-3">Customer</th>
                                                <th className="px-4 py-3">Product</th>
                                                <th className="px-4 py-3">Amount</th>
                                                <th className="px-4 py-3">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-300">
                                            {transactions.length > 0 ? transactions.map((row, i) => (
                                                <tr key={i} className="border-t border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                                                    <td className="px-4 py-4 font-medium">{row.name}</td>
                                                    <td className="px-4 py-4">{row.item}</td>
                                                    <td className="px-4 py-4">{row.price}</td>
                                                    <td className="px-4 py-4">
                                                        <span className={`px-2 py-1 rounded text-xs font-bold ${row.status === 'Delivered' ? 'bg-green-500/10 text-green-400' :
                                                            row.status === 'Processing' ? 'bg-blue-500/10 text-blue-400' :
                                                                'bg-yellow-500/10 text-yellow-400'
                                                            }`}>
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            )) : (
                                                <tr>
                                                    <td colSpan={4} className="px-4 py-8 text-center text-gray-500 italic">No transactions found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => { setActiveTab("inventory"); setShowAddModal(true); }}
                                            className="p-3 bg-gray-700/50 hover:bg-blue-500/20 border border-gray-600 rounded-xl text-xs font-medium transition-all">+ Add Product</button>
                                        <button className="p-3 bg-gray-700/50 hover:bg-purple-500/20 border border-gray-600 rounded-xl text-xs font-medium transition-all">Send Promo</button>
                                        <button
                                            onClick={() => setActiveTab("inventory")}
                                            className="p-3 bg-gray-700/50 hover:bg-green-500/20 border border-gray-600 rounded-xl text-xs font-medium transition-all">Check Inventory</button>
                                        <button className="p-3 bg-gray-700/50 hover:bg-red-500/20 border border-gray-600 rounded-xl text-xs font-medium transition-all">Report Issue</button>
                                    </div>
                                </div>
                                <div className="bg-linear-to-br from-blue-600 to-purple-700 p-6 rounded-2xl text-white">
                                    <h2 className="text-lg font-bold mb-2">Inventory Summary</h2>
                                    <p className="text-blue-100 text-sm mb-4">You have {products.length} products in stock with various categories.</p>
                                    <button
                                        onClick={() => setActiveTab("inventory")}
                                        className="w-full py-2 bg-white text-blue-700 font-bold rounded-lg text-sm">Manage Inventory</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="space-y-6">
                        <header className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-3xl font-extrabold text-white">Inventory Tracking</h1>
                                <p className="text-gray-400 mt-2">Manage your stock levels and product catalog.</p>
                            </div>
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                                + Add New Product
                            </button>
                        </header>

                        <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="text-gray-400 text-sm uppercase bg-gray-700/30">
                                    <tr>
                                        <th className="px-6 py-4">Product</th>
                                        <th className="px-6 py-4">Category</th>
                                        <th className="px-6 py-4">Price</th>
                                        <th className="px-6 py-4">Stock</th>
                                        <th className="px-6 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {products.length > 0 ? products.map((product) => (
                                        <tr key={product._id} className="border-t border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-bold text-white">{product.name}</div>
                                                <div className="text-xs text-gray-500 line-clamp-1">{product.description}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-gray-700 rounded-md text-xs">{product.category}</span>
                                            </td>
                                            <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                                            <td className="px-6 py-4">
                                                <span className={`font-bold ${product.stockQuantity < 10 ? 'text-red-400' : 'text-green-400'}`}>
                                                    {product.stockQuantity}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button className="text-blue-400 hover:text-blue-300 mr-4 text-sm font-medium">Edit</button>
                                                <button className="text-red-400 hover:text-red-300 text-sm font-medium">Delete</button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-gray-500 italic">No products in inventory</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>

            {/* Add Product Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                        <div className="px-8 py-6 border-b border-gray-700 flex justify-between items-center bg-gray-750">
                            <h2 className="text-xl font-bold text-white">Add New Product</h2>
                            <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-white">✕</button>
                        </div>
                        <form onSubmit={handleAddProduct} className="p-8 space-y-4">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-400">Product Name</label>
                                <input
                                    className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                                    placeholder="Enter product name"
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-400">Description</label>
                                <textarea
                                    className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all min-h-[100px]"
                                    placeholder="Enter product description"
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-400">Price ($)</label>
                                    <input
                                        type="number"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                                        placeholder="0.00"
                                        value={newProduct.price}
                                        onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-400">Stock Quantity</label>
                                    <input
                                        type="number"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                                        placeholder="0"
                                        value={newProduct.stockQuantity}
                                        onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: parseInt(e.target.value) })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-400">Category</label>
                                <input
                                    className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                                    placeholder="e.g. Electronics, Fashion"
                                    value={newProduct.category}
                                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-all">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
                                    Save Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="mt-auto border-t border-gray-800 py-8 px-6 text-center text-gray-500 text-sm">
                &copy; 2024 Brand Admin Control. Secure Environment.
            </footer>
        </div>
    );
}
