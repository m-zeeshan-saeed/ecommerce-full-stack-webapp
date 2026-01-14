"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
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

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push("/");
    };

    return (
        <div className="min-h-screen bg-[#F7F8FA]">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                            <Image src="/profile.svg" alt="Profile" width={40} height={40} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
                            <p className="text-gray-500">Manage your account information</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                                    {session.user?.email}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                                    {session.user?.name || session.user?.email?.split('@')[0]}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                            <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 inline-block">
                                <span className="capitalize">{(session.user as { role?: string })?.role || 'user'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
                        <Link href="/orders">
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                                View My Orders
                            </button>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
