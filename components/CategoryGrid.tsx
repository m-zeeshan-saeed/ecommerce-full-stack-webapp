
import Image from 'next/image';

interface CategoryItem {
  title: string;
  price: string;
  img: string;
}

const items: CategoryItem[] = [
  { title: "Soft Beds", price: "USD 19", img: "/9.png" },
  { title: "Sofa & chairs", price: "USD 19", img: "/10.png" },
  { title: "Kitchen dishes", price: "USD 19", img: "/11.png" },
  { title: "Smart Lamps", price: "USD 19", img: "/12.png" },
  { title: "Kitchen mixers", price: "USD 100", img: "/13.png" },
  { title: "Coffee makers", price: "USD 39", img: "/14.png" },
  { title: "Home appliance", price: "USD 19", img: "/15.png" },
  { title: "Decorative items", price: "USD 10", img: "/16.png" },
];

const CategoryGrid = () => {
  return (
    <div className="w-full mx-auto ">
      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">


        <div className="relative w-full md:w-[280px] min-h-[200px] md:min-h-full overflow-hidden">
          <Image
            src="/image 92.png"
            alt="Home and outdoor banner"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="relative z-10 p-5 h-full flex flex-col items-start bg-black/5">
            <div className="text-xl font-bold text-gray-900 mb-4 max-w-[120px]">
              Home and outdoor
            </div>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold text-sm shadow-sm hover:bg-gray-100 active:scale-95 transition-all">
              Source now
            </button>
          </div>
        </div>


        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x divide-y divide-gray-200 border-l border-gray-200">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-4 flex flex-col justify-between hover:bg-blue-50/30 hover:shadow-inner transition-all duration-300 h-32 md:h-40 cursor-pointer"
            >
              <div className="flex justify-between items-start gap-2 h-full">
                <div className="flex flex-col h-full justify-between pb-2">
                  <div>
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </div>
                    <div className="mt-1">
                      <div className="text-[12px] text-gray-400 block">From</div>
                      <div className="text-[12px] text-gray-400 block font-medium group-hover:text-gray-600">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </div>


                <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 self-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain mix-blend-multiply group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
