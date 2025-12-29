

export default function MenuBar() {
    return (
        <div className="border-b border-gray-200 max-w-full mx-auto px-20 flex flex-wrap gap-6 bg-white space-y-6">
            <div className="w-full mx-auto sm:px-6 lg:px-2 py-3 flex items-center justify-between text-sm text-gray-900">


                <div className="flex items-center overflow-x-auto no-scrollbar whitespace-nowrap gap-4 md:gap-6 mr-4">
                    <button className="flex items-center gap-1.5 font-semibold shrink-0 hover:text-blue-600 transition-colors">
                        <span>☰</span>
                        <span>All category</span>
                    </button>

                    <nav className="flex items-center gap-4 md:gap-6">
                        <span className="cursor-pointer hover:text-blue-600 transition-colors">Hot offers</span>
                        <span className="cursor-pointer hover:text-blue-600 transition-colors">Gift boxes</span>
                        <span className="cursor-pointer hover:text-blue-600 transition-colors">Projects</span>
                        <span className="cursor-pointer hover:text-blue-600 transition-colors">Menu item</span>
                        <span className="cursor-pointer hover:text-blue-600 transition-colors">Help</span>
                    </nav>
                </div>

                <div className="hidden sm:flex items-center gap-4 shrink-0 font-medium">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
                        <span>English, USD</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
                        <span>Ship to</span>
                        <span className="text-base">🇩🇪</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
