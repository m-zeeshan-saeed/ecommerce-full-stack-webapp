import { headerData } from "../constants/data";
import Link from "next/link";


export default function MenuBar() {
    return (
        <div className="border-b border-gray-200 max-w-full mx-auto px-20 flex flex-wrap gap-6 bg-white space-y-6">
            <div className="w-full mx-auto sm:px-6 lg:px-2 py-3 flex items-center justify-between text-sm text-gray-900">


                <div className="flex items-center overflow-x-auto no-scrollbar whitespace-nowrap gap-2 md:gap-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    {headerData.map((item) => (

                        <Link key={item.title} href={item.href} className="flex items-center gap-1.5 font-semibold shrink-0 hover:text-blue-600 transition-colors">
                            <div>{item.title}</div>
                        </Link>

                    ))}
                </div>

                <div className="hidden sm:flex items-center gap-4 shrink-0 font-medium">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
                        <div>English, USD</div>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
                        <div>Ship to</div>
                        <div className="text-base">🇩🇪</div>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
