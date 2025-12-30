interface ActiveFiltersProps {
    activeFilters: string[];
    onRemoveFilter: (filter: string) => void;
    onClearAll: () => void;
}

export default function ActiveFilters({ activeFilters, onRemoveFilter, onClearAll }: ActiveFiltersProps) {
    if (activeFilters.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center gap-2 mb-4">
            {activeFilters.map((filter) => (
                <div key={filter} className="flex items-center gap-2 px-3 py-1 border border-blue-500 bg-white rounded-md text-sm text-gray-700 shadow-sm group cursor-pointer hover:bg-blue-50 transition-colors">
                    <span>{filter}</span>
                    <button
                        onClick={() => onRemoveFilter(filter)}
                        className="text-gray-400 group-hover:text-blue-600"
                    >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            ))}
            <button
                onClick={onClearAll}
                className="text-blue-600 text-sm font-medium hover:underline ml-2"
            >
                Clear all filter
            </button>
        </div>
    );
}
