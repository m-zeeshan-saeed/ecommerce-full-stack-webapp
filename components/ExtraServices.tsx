
import Image from 'next/image';

const services = [
    { title: "Source from Industry Hubs", img: "/Mask group 1png.png", icon: "🔍" },
    { title: "Customize Your Products", img: "/Mask group 2.png", icon: "📦" },
    { title: "Fast, reliable shipping by ocean or air", img: "/Mask group 3.png", icon: "✈️" },
    { title: "Product monitoring and inspection", img: "/Mask group 4.png", icon: "🛡️" },
];

const regions = [
    { name: "Arabic Emirates", shop: "shopname.ae", flag: "🇦🇪" },
    { name: "Australia", shop: "shopname.ae", flag: "🇦🇺" },
    { name: "United States", shop: "shopname.ae", flag: "🇺🇸" },
    { name: "Russia", shop: "shopname.ru", flag: "🇷🇺" },
    { name: "Italy", shop: "shopname.it", flag: "🇮🇹" },
    { name: "Denmark", shop: "denmark.com.dk", flag: "🇩🇰" },
    { name: "France", shop: "shopname.com.fr", flag: "🇫🇷" },
    { name: "Japan", shop: "shopname.jp", flag: "🇯🇵" },
    { name: "China", shop: "shopname.ae", flag: "🇨🇳" },
    { name: "Great Britain", shop: "shopname.co.uk", flag: "🇬🇧" },
];

export default function ExtraServices() {
    return (
        <div className="w-full mx-auto  space-y-12">

            <div>
                <div className="text-2xl font-bold text-gray-900 mb-6">Our extra services</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, i) => (
                        <div key={i} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                            <div className="relative h-32 w-full">
                                <div className="absolute inset-0 bg-black/40" />
                                <Image src={service.img} alt={service.title} fill className="object-cover" />

                                <div className="absolute right-4 -bottom-5 z-20 w-10 h-10 bg-[#D1E7FF] border-2 border-white rounded-full flex items-center justify-center text-lg shadow-sm">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-5 pt-7">
                                <div className="text-gray-900 font-medium leading-snug max-w-[150px]">
                                    {service.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <div className="text-2xl font-bold text-gray-900 mb-6">Suppliers by region</div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-8">
                    {regions.map((region, i) => (
                        <div key={i} className="flex items-center gap-3 group cursor-pointer">
                            <div className="text-2xl">{region.flag}</div>
                            <div>
                                <div className="text-sm text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                                    {region.name}
                                </div>
                                <div className="text-[11px] text-gray-400">
                                    {region.shop}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
