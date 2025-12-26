export default function ProductCard({
    title,
    discount,
}: {
    title: string;
    discount?: string;
}) {
    return (
        <div className="text-center">
            <div className="h-24 bg-[#f3f4f6] rounded mb-2" />
            <p className="text-sm">{title}</p>
            {discount && (
                <span className="text-xs text-[#dc2626] bg-[#fee2e2] px-2 py-0.5 rounded">
                    {discount}
                </span>
            )}
        </div>
    );
}
