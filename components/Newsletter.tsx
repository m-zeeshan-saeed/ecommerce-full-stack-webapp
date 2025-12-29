"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    return (
        <section className="w-full bg-gray-200 py-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
                    Subscribe on our newsletter
                </h2>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                    Get daily news on upcoming offers from many suppliers all over the world
                </p>

                {/* Form */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <div className="relative w-full sm:w-80">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white placeholder-gray-400
              focus:border-blue-500 focus:ring-2 focus:ring-blue-100
              outline-none transition"
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            ✉️
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2.5 rounded-lg
            hover:bg-blue-700 active:scale-95 transition-all duration-200"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
