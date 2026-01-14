import { categories } from "../constants/data";
import Link from "next/link";




export default function CategorySidebar() {
    return (
        <div className="w-full">
            <ul className="flex lg:flex-col flex-row gap-1 lg:gap-0 overflow-x-auto no-scrollbar py-2 lg:py-0">
                {categories.map((items) => (
                    <li
                        key={items.category}
                        className={`
                            py-2.5 px-4 text-sm transition-all duration-200 cursor-pointer whitespace-nowrap
                            border border-gray-200 lg:border-none rounded-md lg:rounded-lg
                            hover:bg-blue-100 lg:hover:bg-[#E5F1FF] text-black font-base hover:font-semibold
                            focus:bg-   blue-100 lg:focus:bg-[#E5F1FF] focus:font-semibold
                        `}
                    >
                        <Link href={items.href}>{items.category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
