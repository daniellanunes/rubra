import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Sketches from "@/components/Sketches";
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
        <Story />
        <About />
        <Marquee />
        <Sketches />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
