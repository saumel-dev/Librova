import Banner from "@/Components/Shared/Banner";
import FeaturedBooks from "@/Components/Shared/FeaturedBooks";
import NewArrivalsBooks from "@/Components/Shared/NewArrivals";
import Image from "next/image";

export const metadata = {
  title: "LibRova | Home",
  description: "Borrow, lend, and discover your next favorite read. LibRova connects book lovers to share stories and build a sustainable local library",
};

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <NewArrivalsBooks></NewArrivalsBooks>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
}
