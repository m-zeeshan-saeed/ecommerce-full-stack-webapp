"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react"; // Removed as unused

export default function SignUpForm() {
    const [name, setName] = useState("");
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
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            router.push("/login");
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="w-full m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <Link href="/">
                        <div className="flex items-center justify-center">
                            <Image src="/logo-symbol.svg"
                                width={64} height={64}
                                className="w-16 mr-2" alt="Logo" />
                            <span className="text-4xl xl:text-5xl font-extrabold text-blue-600 opacity-55">Brand</span>
                        </div>
                    </Link>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold ">
                            Sign up
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                                {error && <p className="text-red-500 text-xs mt-2 text-center">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:opacity-50">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        {loading ? "Signing Up..." : "Sign Up"}
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by {"templatana's"}
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                                <div className="text-gray-600 text-center text-[12px] mt-5">
                                    If you have an account?
                                    <a href="/login">
                                        <span className="text-blue-600 hover:text-blue-700 font-bold hover:underline cursor-pointer">
                                            Login
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
