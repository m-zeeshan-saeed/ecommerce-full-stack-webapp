
import CategorySidebar from "@/components/CategorySidebar";
import HeroBanner from "@/components/HeroBanner";
import DealsOffers from "@/components/DealsOffers";
import CategoryGrid from "@/components/CategoryGrid";
import ElectronicCategory from "@/components/ElectronicCategory";
import InquirySection from "@/components/InquirySection";
import RecommendedItems from "@/components/RecommendedItems";
import ExtraServices from "@/components/ExtraServices";
import Newsletter from "@/components/Newsletter";


export default function Home() {
  return (
    <>


      <div className="max-w-auto mx-auto px-20 py-6 flex flex-wrap gap-6 bg-[#f3f4f6] space-y-6">
        <div className="flex-1 w-full flex lg:flex-row flex-col gap-3 bg-[#ffffff] border border-gray-300 p-5 rounded-[6px]">
          <div className="lg:w-[250px] min-w-[250px] md:w-full w-full">
            <CategorySidebar />
          </div>
          <div className="w-full">
            <HeroBanner />
          </div>
        </div>
        <DealsOffers />
        <CategoryGrid />
        <ElectronicCategory />
        <InquirySection />
        <RecommendedItems />
        <ExtraServices />


      </div>
      <Newsletter />

    </>
  );
}
