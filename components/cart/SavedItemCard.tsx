"use client";
import Image from 'next/image';

interface SavedItemProps {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function SavedItemCard({
    data,
    onMoveToCart,
    onRemove
}: {
    data: SavedItemProps;
    onMoveToCart: (id: number) => void;
    onRemove: (id: number) => void;
}) {
    return (
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
            <div className="relative w-full h-32 mb-3 bg-gray-50 rounded flex items-center justify-center overflow-hidden">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-contain p-2 mix-blend-multiply"
                />
            </div>
            <h5 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-10">
                {data.title}
            </h5>
            <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-900">${data.price.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => onMoveToCart(data.id)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded transition-colors"
                >
                    Move to Cart
                </button>
                <button
                    onClick={() => onRemove(data.id)}
                    className="px-3 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
