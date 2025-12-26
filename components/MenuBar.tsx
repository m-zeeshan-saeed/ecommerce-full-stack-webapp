export default function MenuBar() {
    return (
        <div className="bg-white border-b border-[#e5e7eb]">
            <div className="max-w-auto mx-auto px-25 py-2 flex justify-between text-sm text-black">
                <div className="flex gap-5">
                    <span className="font-medium">☰ All category</span>
                    <span>Hot offers</span>
                    <span>Gift boxes</span>
                    <span>Projects</span>
                    <span>Menu item</span>
                    <span>Help</span>
                </div>
                <div className="flex gap-4 text-black">
                    <span>English, USD</span>
                    <span>Ship to 🇩🇪</span>
                </div>
            </div>
        </div>
    );
}
