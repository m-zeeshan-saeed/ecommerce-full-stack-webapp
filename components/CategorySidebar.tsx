


const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
];

export default function CategorySidebar() {
    return (
        <nav className="w-full">
            <ul className="flex lg:flex-col flex-row gap-1 lg:gap-0 overflow-x-auto no-scrollbar py-2 lg:py-0">
                {categories.map((category, index) => (
                    <li
                        key={category}
                        className={`
                            py-2.5 px-4 text-sm transition-all duration-200 cursor-pointer whitespace-nowrap
                            border border-gray-200 lg:border-none rounded-md lg:rounded-lg
                            ${index === 0
                                ? "bg-blue-100 lg:bg-[#E5F1FF] text-blue-700 lg:text-black font-semibold"
                                : "text-gray-600 hover:bg-gray-100 hover:text-black"
                            }
                        `}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
