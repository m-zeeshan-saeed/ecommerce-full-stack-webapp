"use client"
import { useState, useRef, useEffect } from "react"
import { languages } from "../../constants/data"

interface CurrencySelectProps {
    onChange: (language: { id: string, name: string, code: string, currency: string }) => void;
    value?: { id: string, name: string, code: string, currency: string };
    placeholder?: string;
    className?: string;
}

export default function CurrencySelect({ onChange, value, className }: CurrencySelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [internalSelected, setInternalSelected] = useState(languages[0]);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selected = value || internalSelected;

    const filtered = languages.filter(l =>
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.currency.toLowerCase().includes(searchTerm.toLowerCase())
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

    const handleSelect = (item: typeof languages[0]) => {
        setInternalSelected(item);
        if (onChange) onChange(item);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
            >
                <span>{selected.name}, {selected.currency}</span>
                <svg
                    className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                    {/* Search Bar - Optional for languages/currency if list is long, but good to have */}
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
                                    <span className="truncate">{item.name}, {item.currency}</span>
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
