"use client";
import Image from 'next/image';

interface CartItemData {
    id: number | string;
    title: string;
    size?: string;
    color?: string;
    seller?: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartItemProps {
    item: CartItemData;
    onRemove: (id: number | string) => void;
    onSaveForLater: (id: number | string) => void;
    onQuantityChange: (id: number | string, quantity: number) => void;
}

export default function CartItem({ item, onRemove, onSaveForLater, onQuantityChange }: CartItemProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-200 last:border-b-0">
            {/* Image */}
            <div className="relative w-full sm:w-20 h-20 shrink-0 bg-gray-50 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-contain p-2 mix-blend-multiply" />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-1">
                <h4 className="font-medium text-gray-900 leading-snug">{item.title}</h4>
                <p className="text-sm text-gray-500">
                    Size: {item.size || 'N/A'}, Color: {item.color || 'N/A'}, Material: Plastic
                </p>
                <p className="text-sm text-gray-500">Seller: {item.seller || 'Unknown'}</p>

                {/* Mobile Actions */}
                <div className="flex gap-2 mt-2">
                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-red-500 text-sm border border-gray-200 rounded px-3 py-1 hover:bg-red-50 transition-colors"
                    >
                        Remove
                    </button>
                    <button
                        onClick={() => onSaveForLater(item.id)}
                        className="text-blue-600 text-sm border border-gray-200 rounded px-3 py-1 hover:bg-blue-50 transition-colors"
                    >
                        Save for later
                    </button>
                </div>
            </div>

            {/* Price & Qty (Desktop aligned right) */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:gap-4 mt-2 sm:mt-0">
                <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>

                <select
                    value={item.quantity}
                    onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
                    className="border text-gray-600 border-gray-200 rounded px-2 py-1 text-sm bg-white cursor-pointer focus:outline-none focus:border-blue-500"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <option key={num} value={num}>Qty: {num}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
