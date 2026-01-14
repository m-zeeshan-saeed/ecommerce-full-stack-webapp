"use client";
import { headerData, languages } from "../constants/data";
import Link from "next/link";
import { useState } from "react";
import CountrySelect from "../components/countryselect/CountrySelect";
import CurrencySelect from "../components/currencyselect/CurrencySelect";


export default function MenuBar() {
    // const [country, setCountry] = useState('0'); // Removed as unused
    const [language, setLanguage] = useState(languages[0]);
    return (
        <div className="border-b border-gray-200 max-w-full mx-auto px-4 lg:px-20 flex flex-wrap gap-6 bg-white space-y-6">
            <div className="w-full mx-auto sm:px-6 lg:px-2 py-3 flex items-center justify-between text-sm text-gray-900">

                <div className="flex items-center overflow-x-auto no-scrollbar whitespace-nowrap gap-2 md:gap-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list shrink-0" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    {headerData.map((item) => (
                        <Link key={item.title} href={item.href} className="flex items-center gap-1.5 font-semibold shrink-0 hover:text-blue-600 transition-colors">
                            <div>{item.title}</div>
                        </Link>
                    ))}
                </div>


                <div className="hidden sm:flex items-center gap-4 shrink-0 font-medium">

                    <div className="hidden lg:flex items-center gap-2 px-3">
                        <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                            <div className="relative">
                                <CurrencySelect
                                    value={language}
                                    onChange={(e: { id: string; name: string; code: string; currency: string }) => {
                                        setLanguage(e);
                                    }}
                                    placeholder="Select Language & Currency"
                                />
                            </div>
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-2 px-3">
                        <span className="flex items-center gap-2 text-sm font-medium text-gray-700">Ship to
                            <div className="relative">
                                <CountrySelect
                                    onChange={(e: { id: string; name: string; code: string; flag: string }) => {
                                        // setCountry(e.id); // Removed as unused
                                        // Auto-select language based on country
                                        let langCode = 'EN';
                                        if (e.id === 'GE') langCode = 'DE';
                                        else if (e.id === 'FR') langCode = 'FR';
                                        else if (e.id === 'IT') langCode = 'IT';
                                        else if (e.id === 'CN') langCode = 'ZH';
                                        else if (e.id === 'AR') langCode = 'AR'; // Assuming AR country exists, if not it falls back to EN or custom logic
                                        else if (e.id === 'ES') langCode = 'ES';
                                        else if (e.id === 'PT') langCode = 'PT';
                                        else if (e.id === 'RU') langCode = 'RU';
                                        else if (e.id === 'TR') langCode = 'TR';
                                        else if (e.id === 'VN') langCode = 'VI';

                                        const selectedLang = languages.find(l => l.code === langCode);
                                        if (selectedLang) {
                                            setLanguage(selectedLang);
                                        }
                                    }}
                                />
                            </div>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
