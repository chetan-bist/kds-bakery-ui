import Header from "@/components/header";
import Hero from "@/components/hero";
import Explore from "@/components/explore";
import CustomCakes from "@/components/custom-cakes";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Explore />
      <CustomCakes/>
      <Footer/>
    </main>
  );
}
