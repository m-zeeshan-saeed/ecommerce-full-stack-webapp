
import Image from 'next/image';
import CountDown from '../components/countdowntimer/CountDown';


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

      <div className="w-full bg-white border border-gray-300 rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">


        <CountDown />

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
