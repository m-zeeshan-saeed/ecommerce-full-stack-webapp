"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MessagesPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-[#F7F8FA] flex items-center justify-center">
                <div className="text-gray-600">Loading...</div>
            </div>
        );
    }

    if (!session) {
        router.push("/login");
        return null;
    }

    return (
        <div className="min-h-screen bg-[#F7F8FA]">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
                    <p className="text-gray-500">Your inbox and notifications</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                    <div className="text-gray-400 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No Messages</h3>
                    <p className="text-gray-500 mb-6">You don&apos;t have any messages yet. This feature is coming soon!</p>
                    <Link href="/">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
