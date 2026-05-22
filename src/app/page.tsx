import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Feature from "@/components/Feature";
import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Categories />
      <Feature />
      <BestSellers />
      <Footer />
      <FloatingButtons />
    </>
  );
}
