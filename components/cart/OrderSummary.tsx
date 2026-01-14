import Image from 'next/image';

interface OrderSummaryProps {
    onCheckout?: () => void;
    isProcessing?: boolean;
    subtotal: number;
    itemCount: number;
}

export default function OrderSummary({ onCheckout, isProcessing, subtotal, itemCount }: OrderSummaryProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-5 h-fit shadow-sm">
            {/* Coupon */}
            <div className="mb-6">
                <label className="block text-gray-600 text-sm mb-2">Have a coupon?</label>
                <div className="flex border border-gray-300 rounded overflow-hidden">
                    <input
                        type="text"
                        placeholder="Add coupon"
                        className="flex-1 px-2 py-2 text-sm outline-none text-gray-700 placeholder-gray-400"
                    />
                    <button className="px-2 py-2 bg-white text-blue-600 text-sm font-medium border-l border-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                        Apply
                    </button>
                </div>
            </div>

            {/* Totals */}
            <div className="space-y-3 border-b border-gray-200 pb-4 mb-4 text-gray-600">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Discount:</span>
                    <span className="text-red-500">- $0.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax:</span>
                    <span className="text-green-600">+ ${(subtotal * 0.1).toFixed(2)}</span>
                </div>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-gray-900">Total:</span>
                <span className="text-xl font-bold text-gray-900">${(subtotal * 1.1).toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button
                onClick={onCheckout}
                disabled={isProcessing}
                className={`w-full text-white font-medium py-3 rounded-lg transition-all shadow-sm mb-4 flex items-center justify-center gap-2 ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00B517] hover:bg-[#009c14]'
                    }`}
            >
                {isProcessing ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                    </>
                ) : (
                    'Checkout'
                )}
            </button>

            {/* Payment Icons */}
            <div className="flex justify-center gap-2 opacity-80 ">
                {/* Simple placeholders for icons */}
                <div className="w-8 h-5 bg-gray-200 rounded border border-gray-300 flex items-center justify-center text-[10px] font-bold grayscale hover:grayscale-0 "><Image src="/image 34.svg" alt="Amex" width={24} height={8} /></div>
                <div className="w-8 h-5 bg-gray-200 rounded border border-gray-300 flex items-center justify-center text-[10px] font-bold grayscale hover:grayscale-0 "><Image src="/image 33.svg" alt="Visa" width={24} height={8} /></div>
                <div className="w-8 h-5 bg-gray-200 rounded border border-gray-300 flex items-center justify-center text-[10px] font-bold grayscale hover:grayscale-0 "><Image src="/image 32.svg" alt="Mastercard" width={24} height={8} /></div>
                <div className="w-8 h-5 bg-gray-200 rounded border border-gray-300 flex items-center justify-center text-[10px] font-bold grayscale hover:grayscale-0 "><Image src="/image 31.svg" alt="PayPal" width={14} height={8} /></div>
                <div className="w-8 h-5 bg-gray-200 rounded border border-gray-300 flex items-center justify-center text-[10px] font-bold grayscale hover:grayscale-0 "><Image src="/image 30.svg" alt="Apple Pay" width={26} height={8} /></div>
            </div>
        </div>
    );
}
