
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-white border-b border-gray-200 px-15">

            <div className="w-full mx-auto px-4 md:px-6 py-3 flex flex-col gap-y-4 md:flex-row md:items-center md:gap-x-6">


                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                        <div className="flex items-center text-[#0d6efd] font-bold text-2xl tracking-tight cursor-pointer">
                            <span className="p-1.5">
                                <Image src="/logo-symbol.svg" alt="" width={40} height={40} />
                            </span>
                            <span className="opacity-50 text-3xl">Brand</span>
                        </div>
                    </Link>
                    <div className="flex md:hidden gap-5 text-gray-500">
                        <div className="flex flex-col items-center"></div>
                        <div className="flex flex-col items-center relative">
                            <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-1 w-full order-last md:order-0">
                    <div className="flex w-full">
                        <input
                            className="flex-1 border-2 border-[#0d6efd] rounded-l-md px-4 py-2 text-sm text-gray-600 focus:outline-none"
                            placeholder="Search"
                        />
                        <div className="hidden lg:block border-y-2 border-[#0d6efd] px-3 bg-white">
                            <select className="h-full text-sm text-black bg-transparent border-none focus:outline-none cursor-pointer">
                                <option>All category</option>
                                <option>Electronics</option>
                                <option>Clothes</option>
                            </select>
                        </div>
                        <button className="bg-[#0d6efd] hover:bg-blue-700 transition-colors text-white px-6 rounded-r-md text-sm font-medium">
                            Search
                        </button>
                    </div>
                </div>


                <div className="hidden md:flex gap-5 lg:gap-7 text-gray-500 shrink-0">
                    {[
                        { label: 'Profile', icon: <img src="/profile.svg" /> },
                        {
                            label: 'Message', icon: <img src="/Vector.svg" />
                        },
                        { label: 'Orders', icon: <img src="/heart.svg" className="mb-1" /> },
                        { label: 'My cart', icon: <img src="/bucket.svg" />, count: 3 },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors">
                            <div className="relative text-xl">
                                {item.icon}
                                {item.count && (
                                    <div className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] px-1 min-w-[14px] h-[14px] rounded-full flex items-center justify-center">
                                        {item.count}
                                    </div>
                                )}
                            </div>
                            <div className="text-[11px] mt-1">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
