"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { countries } from "../../constants/data"

interface CountrySelectProps {
    onChange: (country: { id: string, name: string, code: string, flag: string }) => void;
    className?: string;
}

export default function CountrySelect({ onChange, className }: CountrySelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(countries[0]); // Default to first country
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filtered = countries.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (item: typeof countries[0]) => {
        setSelected(item);
        if (onChange) onChange(item);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
            >
                <div className="relative w-5 h-3.5 border border-gray-200 rounded-sm overflow-hidden">
                    <Image
                        src={selected.flag}
                        alt={selected.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <span>{selected.code}</span>
                <svg
                    className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                    {/* Search Bar */}
                    <div className="p-2 border-b border-gray-100">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded outline-none focus:border-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            autoFocus
                        />
                    </div>

                    {/* List */}
                    <div className="max-h-60 overflow-y-auto">
                        {filtered.length > 0 ? (
                            filtered.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleSelect(item)}
                                    className={`flex items-center gap-3 px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 ${selected.id === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                                >
                                    <div className="relative w-5 h-3.5 border border-gray-200 shrink-0">
                                        <Image src={item.flag} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <span className="truncate">{item.name}</span>
                                </div>
                            ))
                        ) : (
                            <div className="p-3 text-center text-xs text-gray-400">No results</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
