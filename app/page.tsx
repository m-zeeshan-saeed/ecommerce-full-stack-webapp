import Header from "@/components/Header";
import CategorySidebar from "@/components/CategorySidebar";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import MenuBar from "@/components/MenuBar";

export default function Home() {
  return (
    <>
      <Header />
      <MenuBar />

      <main className="max-w-auto mx-auto px-25 py-6 flex flex-wrap gap-6 bg-[#f3f4f6]">
        <div className="flex-1 w-full flex gap-3 bg-[#ffffff] border border-gray-300 p-5 rounded-[6px]">
          <span className="w-full max-w-[250px]">
            <CategorySidebar />
          </span>
          <span className="w-full">
            <HeroBanner />
          </span>
        </div>

        <div className="w-full space-y-6">

          <section className="bg-white rounded-[10px] p-4">
            <h3 className="font-semibold mb-4">
              Deals and offers
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <ProductCard title="Smart watches" discount="-25%" />
              <ProductCard title="Laptops" discount="-15%" />
              <ProductCard title="GoPro cameras" discount="-40%" />
              <ProductCard title="Headphones" discount="-25%" />
              <ProductCard title="Canon cameras" discount="-25%" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
