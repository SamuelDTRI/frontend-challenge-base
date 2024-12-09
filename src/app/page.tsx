import Navbar from "@/components/NavBar";
import Banner from "@/components/Banner";
import MainLayout from "@/components/MainLayout";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Banner />
      <MainLayout />
    </div>
  );
}
