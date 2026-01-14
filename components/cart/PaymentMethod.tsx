import Image from 'next/image';

const paymentMethods = [
    {
        id: 'card',
        title: 'Credit / Debit Card',
        description: 'Visa, Mastercard, AMEX',
        icons: ['/image 33.svg', '/image 32.svg', '/image 34.svg'],
    },
    {
        id: 'paypal',
        title: 'PayPal',
        description: 'Fast and secure payment',
        icons: ['/image 31.svg'],
    },
    {
        id: 'cod',
        title: 'Cash on Delivery',
        description: 'Pay when you receive the order',
        icons: [], // No icon or custom icon
    }
];

interface PaymentMethodProps {
    selectedMethod: string;
    onSelect: (method: string) => void;
}

export default function PaymentMethod({ selectedMethod, onSelect }: PaymentMethodProps) {

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 z-0 opacity-50"></div>

            <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">Select Payment Method</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        onClick={() => onSelect(method.id)}
                        className={`cursor-pointer transition-all duration-300 rounded-xl p-4 border-2 flex flex-col justify-between h-40 group ${selectedMethod === method.id
                            ? 'border-blue-500 bg-blue-50/50 shadow-md'
                            : 'border-gray-100 bg-gray-50/30 hover:border-gray-200 hover:bg-gray-50/80 shadow-sm'
                            }`}
                    >
                        <div className="flex justify-between items-start">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedMethod === method.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                }`}>
                                {selectedMethod === method.id && (
                                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                                )}
                            </div>

                            <div className="flex gap-1">
                                {method.icons.map((icon, idx) => (
                                    <div key={idx} className="bg-white p-1 rounded border border-gray-100 shadow-sm transition-transform group-hover:scale-110">
                                        <Image src={icon} alt="Payment" width={24} height={15} className="object-contain" />
                                    </div>
                                ))}
                                {method.id === 'cod' && (
                                    <div className="bg-white p-1 rounded border border-gray-100 shadow-sm flex items-center justify-center w-8 h-6 text-blue-600 transition-transform group-hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <h4 className={`font-bold text-sm mb-1 transition-colors ${selectedMethod === method.id ? 'text-blue-900' : 'text-gray-700'
                                }`}>
                                {method.title}
                            </h4>
                            <p className="text-xs text-gray-500 line-clamp-2">
                                {method.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Selection Hint */}
            <div className="mt-6 flex items-center gap-2 text-xs text-blue-600 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Selected: {paymentMethods.find(m => m.id === selectedMethod)?.title}
            </div>
        </div>
    );
}
