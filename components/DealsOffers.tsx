
import Image from 'next/image';


interface Deal {
  title: string;
  discount: string;
  img: string;
}


const deals: Deal[] = [
  {
    title: "Smart watches",
    discount: "-25%",
    img: "/8.png"
  },
  {
    title: "Laptops",
    discount: "-15%",
    img: "/7.png"

  },
  {
    title: "GoPro cameras",
    discount: "-40%",
    img: "/6.png"

  },
  {
    title: "Headphones",
    discount: "-25%",
    img: "/5.png"


  },
  {
    title: "Smartphones",
    discount: "-25%",
    img: "/3.png"

  },
];

const DealsOffers = () => {
  return (
    <div className="w-full">

      <div className="w-full bg-white border border-gray-300 rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">


        <div className="p-5 flex flex-col   min-h-[160px]">
          <div>
            <div className=" font-extrabold text-lg text-gray-900 leading-tight">Deals and offers</div>
            <div className="text-gray-500 text-lg mt-1">Hygiene equipments</div>
          </div>


          <div className="flex gap-1.5 mt-4">
            {[
              { val: "04", label: "Days" },
              { val: "13", label: "Hour" },
              { val: "34", label: "Min" },
              { val: "56", label: "Sec" }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-700  text-white text-center w-11 h-12 rounded flex flex-col justify-center"
              >
                <div className="font-bold  text-sm leading-none mb-1px">{item.val}</div>
                <div className="text-[10px]  text-gray-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {deals.map((item, index) => (
          <div
            key={index}
            className="group relative  p-4 flex flex-col lg:flex-col items-center justify-between hover:bg-gray-50  transition-colors cursor-pointer"
          >

            <div className="relative w-28 h-28 mb-3 flex items-center justify-center">
              <Image
                src={
                  item.img
                }
                alt={item.title}
                width={100}
                height={100}
                className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"

              />
            </div>

            <div className="text-gray-800 group-hover:text-blue-600  font-medium text-sm text-center mb-2">
              {item.title}
            </div>

            <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
              {item.discount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOffers;
