const deals = [
  { title: "Smart watches", discount: "-25%" },
  { title: "Laptops", discount: "-15%" },
  { title: "GoPro cameras", discount: "-40%" },
  { title: "Headphones", discount: "-25%" },
  { title: "Canon cameras", discount: "-25%" },
];

export default function DealsOffers() {
  return (
    <section className="bg-white rounded-card p-4 grid grid-cols-1 lg:grid-cols-6 gap-4">
      {/* Left info */}
      <div className="lg:col-span-1">
        <h3 className="font-semibold text-sm">Deals and offers</h3>
        <p className="text-xs text-textMuted mb-3">Hygiene equipments</p>

        <div className="flex gap-2">
          {["04", "13", "34", "56"].map((v, i) => (
            <div
              key={i}
              className="bg-gray-100 text-center px-2 py-1 rounded"
            >
              <p className="text-sm font-semibold">{v}</p>
              <p className="text-[10px] text-textMuted">
                {["Days", "Hour", "Min", "Sec"][i]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      {deals.map((item) => (
        <div
          key={item.title}
          className="border border-border rounded-card p-3 text-center"
        >
          <div className="h-24 bg-gray-100 mb-3 rounded" />
          <p className="text-sm">{item.title}</p>
          <div className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
            {item.discount}
          </div>
        </div>
      ))}
    </section>
  );
}
