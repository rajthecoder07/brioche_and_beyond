import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <Story />
      <Testimonials />
      <Visit />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
