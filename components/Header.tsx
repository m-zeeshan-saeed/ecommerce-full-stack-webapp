
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 px-15">

            <div className="w-full mx-auto px-4 md:px-6 py-3 flex flex-col gap-y-4 md:flex-row md:items-center md:gap-x-6">


                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center text-[#0d6efd] font-bold text-2xl tracking-tight cursor-pointer">
                        <div className="p-1.5">
                            <Image src="/logo-symbol.svg" alt="" width={30} height={30} />
                        </div>
                        <span>Brand</span>
                    </div>


                    <div className="flex md:hidden gap-5 text-gray-500">
                        <div className="flex flex-col items-center"><span className="text-xl">👤</span></div>
                        <div className="flex flex-col items-center relative">
                            <span className="text-xl">🛒</span>
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
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
                        { label: 'Profile', icon: '👤' },
                        {
                            label: 'Message', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                        },
                        { label: 'Orders', icon: '❤️' },
                        { label: 'My cart', icon: '🛒', count: 3 },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors">
                            <div className="relative text-xl">
                                {item.icon}
                                {item.count && (
                                    <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] px-1 min-w-[14px] h-[14px] rounded-full flex items-center justify-center">
                                        {item.count}
                                    </span>
                                )}
                            </div>
                            <span className="text-[11px] mt-1">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}
