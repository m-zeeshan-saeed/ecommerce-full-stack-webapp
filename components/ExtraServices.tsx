
import Image from 'next/image';

const services = [
    {
        title: "Source from Industry Hubs", img: "/Mask group 1png.png", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-black">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
        </svg>
    },
    {
        title: "Customize Your Products", img: "/Mask group 2.png", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
    },
    {
        title: "Fast, reliable shipping by ocean or air", img: "/Mask group 3.png", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-airplane text-black" viewBox="0 0 16 16">
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
        </svg>
    },
    {
        title: "Product monitoring and inspection", img: "/Mask group 4.png", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-shield text-black" viewBox="0 0 16 16">
            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
        </svg>
    },
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
