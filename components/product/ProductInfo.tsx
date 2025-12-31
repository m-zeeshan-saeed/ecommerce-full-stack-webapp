

export default function ProductInfo() {
    return (
        <div className="flex-1 min-w-0">
            <span className="text-green-600 text-sm font-medium flex items-center gap-1 mb-1">
                ✓ In stock
            </span>
            <h1 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-1">
                    <span className="text-orange-400">★★★★☆</span>
                    <span className="text-orange-400 text-sm font-medium">9.3</span>
                </div>
                <span className="text-gray-400 text-sm">32 reviews</span>
                <span className="text-gray-400 text-sm">154 sold</span>
            </div>

            {/* Bulk Pricing Grid */}
            <div className="bg-[#FFF0DF] p-4 flex flex-col sm:flex-row gap-4 sm:gap-12 mb-6 rounded">
                <div className="border-l-2 border-transparent sm:pl-2">
                    <div className="text-red-500 font-bold text-lg">$98.00</div>
                    <div className="text-gray-500 text-sm">50-100 pcs</div>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                    <div className="text-gray-900 font-bold text-lg">$90.00</div>
                    <div className="text-gray-500 text-sm">100-700 pcs</div>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                    <div className="text-gray-900 font-bold text-lg">$78.00</div>
                    <div className="text-gray-500 text-sm">700+ pcs</div>
                </div>
            </div>

            {/* Product Details Table */}
            <div className="space-y-3 border-b border-gray-200 pb-4 text-sm text-gray-600">
                <div className="grid grid-cols-[120px_1fr]">
                    <span className="text-gray-400">Price:</span>
                    <span>Negotiable</span>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-[120px_1fr]">
                    <span className="text-gray-400">Type:</span>
                    <span>Classic shoes</span>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                    <span className="text-gray-400">Material:</span>
                    <span>Plastic material</span>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                    <span className="text-gray-400">Design:</span>
                    <span>Modern nice</span>
                </div>
            </div>

            {/* Extra Info */}
            <div className="space-y-3 pt-4 text-sm text-gray-600">
                <div className="grid grid-cols-[120px_1fr]">
                    <span className="text-gray-400">Customization:</span>
                    <span>Customized logo and design custom packages</span>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                    <span className="text-gray-400">Protection:</span>
                    <span>Refund Policy</span>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                    <span className="text-gray-400">Warranty:</span>
                    <span>2 years full warranty</span>
                </div>
            </div>
        </div>
    );
}
