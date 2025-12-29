import Image from "next/image";

export default function HeroBanner() {
    return (
        <div className="flex flex-col lg:flex-row h-full gap-3 p-4 lg:p-0">

            <div className="relative flex-1 min-h-[260px] lg:min-h-[380px] px-6 py-10 lg:px-10 lg:py-12 flex items-center overflow-hidden rounded-md border border-gray-200 lg:border-none">
                <div className="flex flex-col items-start z-10">
                    <div className="text-xl lg:text-[28px] text-[#1c1c1c] mb-1 font-[inter]">
                        Latest trending
                    </div>
                    <div className="text-2xl lg:text-[32px] font-bold text-[#1c1c1c] font-[inter] mb-5">
                        Electronic items
                    </div>
                    <button className="bg-white px-6 py-2.5 rounded-md shadow-sm text-sm font-medium text-[#1c1c1c] font-[inter] hover:bg-gray-100 active:scale-95 transition-all">
                        Learn more
                    </button>
                </div>


                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Mask group.png"
                        alt="hero-banner"
                        fill
                        priority
                        className="object-cover lg:object-fill"
                    />
                </div>
            </div>


            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-[250px] shrink-0">

                <div className="bg-[#e3f0ff] flex-1 p-4 rounded-md flex flex-col items-center text-center ">
                    <div className="flex items-center gap-3 lg:flex-col lg:gap-0 mb-3">
                        <div className="w-10 h-10 bg-[#c3d9f8] rounded-full flex items-center justify-center text-gray-500">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                        </div>
                        <div>
                            <div className="font-medium text-[#1c1c1c]">Hi, user</div>
                            <div className="text-xs text-[#6b7280]">let’s get started</div>
                        </div>
                    </div>
                    <button className="bg-[#0d6efd] hover:bg-blue-700 transition-colors text-white w-full py-2 rounded-md text-sm font-medium">
                        Join now
                    </button>
                    <button className="bg-white border border-gray-200 text-[#0d6efd] hover:bg-gray-50 transition-colors w-full mt-2 py-2 rounded-md text-sm font-medium">
                        Log in
                    </button>
                </div>

                {/* Promo Cards: Side-by-side on tablet, stacked on desktop/mobile */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-1">
                    <div className="bg-[#f38332] text-white p-4 rounded-md text-sm flex-1 lg:h-24 flex items-center">
                        <div className="max-w-[150px]">Get US $10 off with a new supplier</div>
                    </div>

                    <div className="bg-[#55bdc3] text-white p-4 rounded-md text-sm flex-1 lg:h-24 flex items-center">
                        <div className="max-w-[150px]">Send quotes with supplier preferences</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
