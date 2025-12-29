

const InquirySection = () => {
    return (
        <div className="w-full mx-auto ">

            <div className="relative rounded-lg overflow-hidden min-h-[420px] flex items-center shadow-lg">

                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/image 102.png')" }}
                >
                    {/* Blue Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600/90 to-blue-400/40" />
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-top px-6 py-10 lg:px-12 gap-10">

                    {/* Left Side: Marketing Text */}
                    <div className="text-white max-w-md space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                            An easy way to send requests to all suppliers
                        </h2>
                        <p className="text-blue-50 text-sm md:text-base opacity-90 leading-relaxed">
                            If you want it to sound more premium, more casual, or more sales-focused, tell me and I’ll refine it further.
                        </p>
                    </div>

                    {/* Right Side: Inquiry Form Card */}
                    <div className="w-full max-w-[490px] bg-white rounded-xl p-6 md:p-8 shadow-2xl backdrop-blur-sm bg-opacity-95 transform transition-all duration-300 hover:scale-[1.01]">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">
                            Send quote to suppliers
                        </h3>

                        <form className="space-y-4 text-gray-600">
                            {/* Item Name */}
                            <input
                                type="text"
                                placeholder="What item you need?"
                                className="w-full border text-gray-600 border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                            />

                            {/* Details Textarea */}
                            <textarea
                                placeholder="Type more details"
                                rows={3}
                                className="w-full border text-gray-600 border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                            />

                            {/* Quantity and Units Row */}
                            <div className="flex gap-3">
                                <input
                                    type="number"
                                    placeholder="Quantity"
                                    className="flex-1 border text-gray-600 border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                                <div className="relative min-w-[120px]">
                                    <select className="w-full h-full border text-gray-600 border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer">
                                        <option>Pcs</option>
                                        <option>Kg</option>
                                        <option>Liters</option>
                                    </select>
                                    {/* Custom Arrow for Select */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg w-fit mt-2"
                            >
                                Send inquiry
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InquirySection;
