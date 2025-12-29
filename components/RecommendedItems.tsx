
import Image from 'next/image';

interface Product {
    id: number;
    price: string;
    name: string;
    desc: string;
    img: string;
}

const products: Product[] = [
    { id: 1, price: "$10.30", name: "T-shirts", desc: "T-shirts with multiple colors, for men", img: "/23.png" },
    { id: 2, price: "$10.30", name: "Winter Coat", desc: "Jeans shorts for men blue color", img: "/24.png" },
    { id: 3, price: "$12.50", name: "Blazer", desc: "Brown winter coat medium size", img: "/28.png" },
    { id: 4, price: "$34.00", name: "Wallet", desc: "Jeans bag for travel for men", img: "/25.png" },
    { id: 5, price: "$99.00", name: "Backpack", desc: "Leather wallet", img: "/26.png" },
    { id: 6, price: "$9.99", name: "Denim Shorts", desc: "Canon camera black, 100x zoom", img: "/6.png" },
    { id: 7, price: "$8.99", name: "Headset", desc: "Headset for gaming with mic", img: "/5.png" },
    { id: 8, price: "$10.30", name: "Blue Backpack", desc: "Smartwatch silver color modern", img: "/8.png" },
    { id: 9, price: "$10.30", name: "Clay Pot", desc: "Blue Coat for men ", img: "/27.png" },
    { id: 10, price: "$80.95", name: "Kettle", desc: "Electric Kettle", img: "/20.png" },
];

export default function RecommendedItems() {
    return (
        <div className="w-full py-4">
            <div className="text-xl md:text-2xl font-bold text-gray-900 mb-5 px-1">
                Recommended items
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group bg-white border border-gray-200 rounded-md p-3 md:p-4 flex flex-col transition-all duration-300 hover:shadow-md hover:border-blue-400 cursor-pointer"
                    >
                        <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-sm flex items-center justify-center">
                            <Image
                                src={product.img}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="font-semibold text-gray-900 text-base md:text-lg">
                                {product.price}
                            </p>
                            <p className="text-gray-400 text-sm leading-tight line-clamp-2 font-normal">
                                {product.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
