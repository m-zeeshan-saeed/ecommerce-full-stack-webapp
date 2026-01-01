
import Image from 'next/image';

interface SavedProps {
    price: number;
    title: string;
    image: string;
}

export default function SavedItemCard({ data }: { data: SavedProps }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col hover:shadow-md transition-shadow">
            <div className="relative w-full aspect-square mb-4 bg-gray-50 rounded flex items-center justify-center overflow-hidden">
                <Image src={data.image} alt={data.title} fill className="object-contain p-4 mix-blend-multiply" />
            </div>

            <div className="mb-3">
                <h4 className="font-bold text-gray-900 text-lg">${data.price.toFixed(2)}</h4>
                <p className="text-gray-500 text-sm leading-snug line-clamp-2">{data.title}</p>
            </div>

            <button className="mt-auto flex items-center justify-center gap-2 border border-gray-200 rounded text-blue-600 font-medium py-2 hover:bg-blue-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Move to cart
            </button>
        </div>
    );
}
