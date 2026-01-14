"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            // Redirect to admin dashboard
            router.push("/admin");
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex justify-center">
            <div className="w-full m-0 sm:m-10 bg-gray-800 shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <Link href="/">
                        <div className="flex items-center justify-center">
                            <img src="/logo-symbol.svg"
                                className="w-16 mr-2" />
                            <span className="text-4xl xl:text-5xl font-extrabold text-blue-500 opacity-80">Admin</span>
                        </div>
                    </Link>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Admin Login
                        </h1>
                        <div className="w-full flex-1 mt-8 text-gray-900">
                            <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                                {error && <p className="text-red-500 text-xs mt-2 text-center">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-5 tracking-wide font-semibold bg-blue-600 hover:bg-blue-700 text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:opacity-50">
                                    <span className="">
                                        {loading ? "Logging In..." : "Admin Login"}
                                    </span>
                                </button>
                                <div className="text-gray-400 text-center text-[12px] mt-5">
                                    Need an admin account?
                                    <a href="/admin/signup">
                                        <span className="text-blue-400 hover:text-blue-500 font-bold hover:underline cursor-pointer ml-1">
                                            Sign up
                                        </span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
