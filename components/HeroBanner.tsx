import Image from "next/image"

export default function HeroBanner() {
    return (
        <div className="flex h-full gap-x-3">
            <div className="w-full px-10 py-12 flex justify-between items-center relative">
                <div className="flex flex-col items-start z-10">
                    <p className="text-[28px] text-[#1c1c1c] mb-1 font-[inter]">Latest trending</p>
                    <h2 className="text-[32px] font-bold text-[#1c1c1c] font-[inter] mb-5">
                        Electronic items
                    </h2>
                    <button className="bg-white px-6 py-2.5 rounded-md shadow-sm text-sm font-medium text-[#1c1c1c] font-[inter] hover:bg-gray-50 transition-colors">
                        Learn more
                    </button>
                </div>
                    <Image
                        src="/Mask group.png"
                        alt="hero-banner"
                        width={665}
                        height={360}
                        className="absolute left-0 top-0 right-0 bottom-0 object-fill object-center w-full h-full"
                    />
            </div>
            <div className="space-y-3 flex flex-col min-w-[200px]">
                <div className="bg-[#e7f0ff] flex-1 p-4 rounded-[6px] text-sm flex flex-col justify-end items-center">
                    <p className="font-medium">Hi, user</p>
                    <p className="text-xs text-[#6b7280] mb-2">
                        let’s get started
                    </p>
                    <button className="bg-[#0d6efd] text-white w-full py-1.5 rounded text-xs">
                        Join now
                    </button>
                    <button className="border border-[#0d6efd] text-[#0d6efd] w-full mt-2 py-1.5 rounded text-xs">
                        Log in
                    </button>
                </div>

                <div className="bg-[#f2994a] text-white p-4 rounded-[6px] text-sm">
                    Get US $10 off with a new supplier
                </div>

                <div className="bg-[#7dc8c3] text-white p-4 rounded-[6px] text-sm">
                    Send quotes with supplier preferences
                </div>
            </div>
        </div>
    );
}
