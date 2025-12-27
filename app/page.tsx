import Header from "@/components/Header";
import CategorySidebar from "@/components/CategorySidebar";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import MenuBar from "@/components/MenuBar";
import DealsOffers from "@/components/DealsOffers";
import CategoryGrid from "@/components/CategoryGrid";

export default function Home() {
  return (
    <>
      <Header />
      <MenuBar />

      <main className="max-w-auto mx-auto px-25 py-6 flex flex-wrap gap-6 bg-[#f3f4f6] space-y-6">
        <div className="flex-1 w-full flex lg:flex-row flex-col gap-3 bg-[#ffffff] border border-gray-300 p-5 rounded-[6px]">
          <div className="lg:w-[250px] min-w-[250px] md:w-full w-full">
            <CategorySidebar />
          </div>
          <div className="w-full">
            <HeroBanner />
          </div>
        </div>
        <DealsOffers />
        <CategoryGrid title="Deals and offers" subtitle="Hygiene equipments" items={[
          { title: "Smart watches", price: "-25%" },
          { title: "Laptops", price: "-15%" },
          { title: "GoPro cameras", price: "-40%" },
          { title: "Headphones", price: "-25%" },
          { title: "Canon cameras", price: "-25%" },
        ]} />

      </main>
    </>
  );
}
