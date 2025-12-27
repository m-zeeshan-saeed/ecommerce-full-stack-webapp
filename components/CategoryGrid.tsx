interface Item {
  title: string;
  price: string;
}

export default function CategoryGrid({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: Item[];
}) {
  return (
    <section className="bg-white rounded-card grid grid-cols-1 lg:grid-cols-6 overflow-hidden">
      {/* Left promo */}
      <div className="lg:col-span-1 bg-gray-100 p-5 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-xs text-textMuted">{subtitle}</p>
        </div>
        <button className="bg-white text-sm px-4 py-1.5 rounded shadow w-fit">
          Source now
        </button>
      </div>

      {/* Product grid */}
      <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="border border-border p-4"
          >
            <p className="text-sm">{item.title}</p>
            <p className="text-xs text-textMuted">{item.price}</p>
            <div className="h-20 bg-gray-100 mt-2 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}
