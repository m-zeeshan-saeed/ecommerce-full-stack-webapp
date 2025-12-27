
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

export default function Sidebar() {
    return (
        <aside className="bg-white rounded-[10px] text-base text-black w-full">
            <ul className="flex lg:flex-col flex-row overflow-x-auto lg:px-0 px-2 w-full gap-2">
                {categories.map((c, i) => (
                    <li
                        key={c}
                        className={`py-2.5 px-3 whitespace-nowrap rounded cursor-pointer ${i === 0
                            ? "bg-blue-50 text-black font-medium"
                            : "text-gray-600 hover:text-black hover:font-medium"
                            }`}
                    >
                        {c}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
