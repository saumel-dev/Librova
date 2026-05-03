import Banner from "@/Components/Shared/Banner";
import FeaturedBooks from "@/Components/Shared/FeaturedBooks";
import Footer from "@/Components/Shared/Footer";
import NewArrivalsBooks from "@/Components/Shared/NewArrivals";
import ReviewPage from "@/Components/Shared/Review";
import Stats from "@/Components/Shared/Stats";
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
      <Stats></Stats>
      <ReviewPage></ReviewPage>
      <Footer></Footer>
    </div>
  );
}
