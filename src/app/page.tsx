import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Studio from "@/components/Studio";
import Marquee from "@/components/Marquee";
import StylesGallery from "@/components/StylesGallery";
import Gallery from "@/components/Gallery";
import PricingTerms from "@/components/PricingTerms";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Studio />
        <Marquee />
        <StylesGallery />
        <Gallery />
        <PricingTerms />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
