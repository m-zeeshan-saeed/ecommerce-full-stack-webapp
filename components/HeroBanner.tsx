export default function HeroBanner() {
    return (
        <div className="flex h-full gap-x-3">
            <div className="w-full bg-[#bee8d5] p-8 flex justify-between">
                <div>
                    <p className="text-sm text-gray-700">Latest trending</p>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Electronic items
                    </h2>
                    <button className="mt-4 bg-white px-4 py-2 rounded shadow text-sm text-black">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="space-y-3 flex flex-col min-w-[200px]">
                <div className="bg-[#e7f0ff] flex-1 p-4 rounded-[6px] text-sm">
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
