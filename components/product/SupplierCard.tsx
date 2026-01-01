

export default function SupplierCard() {
    return (
        <div className="w-full lg:w-[280px] shrink-0 p-4 border border-gray-200 bg-white rounded-md shadow-sm h-fit">
            {/* Supplier Info */}
            <div className="flex items-start gap-3 border-b border-gray-200 pb-4 mb-4">
                <div className="w-12 h-12 bg-[#C6F3F1] rounded text-[#4CA7A7] font-bold text-xl flex items-center justify-center">
                    R
                </div>
                <div>
                    <h4 className="text-gray-900 font-medium">Supplier</h4>
                    <p className="text-gray-900 text-sm">Guanjoi Trading LLC</p>
                </div>
            </div>

            {/* Flags & Badges */}
            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="w-5 h-3 bg-red-500 relative overflow-hidden block">
                        {/* Simple CSS flag for demo */}
                        <div className="absolute top-0 bottom-0 w-1/3 bg-black left-0"></div>
                        <div className="absolute top-0 bottom-0 w-1/3 bg-red-600 left-1/3"></div>
                        <div className="absolute top-0 bottom-0 w-1/3 bg-yellow-400 right-0"></div>
                    </span>
                    Germany, Berlin
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    Verified Seller
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22M2.50002 9H21.5M2.5 15H21.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> Worldwide shipping
                </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
                <button className="w-full bg-[#0d6efd] hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors">
                    Send inquiry
                </button>
                <button className="w-full bg-white border border-gray-200 text-gray-900 font-medium py-2 rounded-md hover:bg-gray-50 transition-colors">
                    Seller's profile
                </button>
            </div>
        </div>
    );
}
