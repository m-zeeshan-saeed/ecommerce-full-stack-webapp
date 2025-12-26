import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white border-b border-[#e5e7eb]">
            <div className="max-w-auto mx-auto px-25 py-3 flex items-center gap-4">
                <div className="flex items-center gap-1 text-[#0d6efd] font-semibold text-xl">
                    <Image src="logo-symbol.svg" alt="" width={30} height={30} />
                    Brand
                </div>

                <div className="flex flex-1 gap-2">
                    <input
                        className="w-full border border-[#0d6efd] rounded px-3 py-2 text-sm text-[#6b7280]"
                        placeholder="Search"
                    />
                    <select className="border border-[#0d6efd] rounded px-3 text-sm text-black">
                        <option>All category</option>
                    </select>
                    <button className="bg-[#0d6efd] text-white px-5 rounded text-sm ">
                        Search
                    </button>
                </div>

                <div className="hidden md:flex gap-6 text-xs text-[#6b7280]">
                    <span>Profile</span>
                    <span>Message</span>
                    <span>Orders</span>
                    <span>My cart</span>
                </div>
            </div>
        </header>
    );
}
