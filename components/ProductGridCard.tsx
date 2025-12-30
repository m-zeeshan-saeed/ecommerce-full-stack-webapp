
import Image from "next/image";
import React from "react";

interface ProductProps {
    id: number;
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
}

const ProductGridCard: React.FC<{ data: ProductProps }> = ({ data }) => {
    const { title, price, originalPrice, rating, image } = data;

    return (
        <div
            className="
        relative flex h-full flex-col
        rounded-lg border border-gray-200 bg-white
        p-4 transition-all duration-200
        hover:shadow-md
      "
        >
            {/* Image */}
            <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-md bg-gray-50">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
            </div>

            <hr className="mb-3 border-gray-100" />

            {/* Price */}
            <div className="mb-1 flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-900">
                    ${price.toFixed(2)}
                </span>

                {originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                        ${originalPrice.toFixed(2)}
                    </span>
                )}
                <button
                    className="text-blue-600 hover:text-red-500
          absolute right-4
          flex h-9 w-9 items-center justify-center
          rounded-lg border
          shadow-sm transition-all
          border-gray-200 hover:border-red-100 bg-white
        "
                    aria-label="Add to wishlist"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
            </div>

            {/* Rating */}
            <div className="mb-1 flex items-center gap-1.5">
                <div className="flex text-sm">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            className={
                                i < Math.floor(rating)
                                    ? "text-orange-400"
                                    : "text-gray-300"
                            }
                        >
                            ★
                        </span>
                    ))}
                </div>
                <span className="text-sm font-medium text-orange-400">
                    {rating}
                </span>
            </div>

            {/* Title */}
            <h3 className="line-clamp-2 text-sm leading-snug text-gray-500">
                {title}
            </h3>

            {/* Wishlist */}

        </div>
    );
};

export default ProductGridCard;
