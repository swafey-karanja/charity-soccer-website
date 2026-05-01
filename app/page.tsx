import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";
import Schedule from "@/components/Schedule";
import Charities from "@/components/Charities";
import Teams from "@/components/Teams";
import About from "@/components/About";
import Venue from "@/components/Venue";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Charities />
        <Venue />
        <About />
        <Schedule />
        <Teams />
      </main>
      <Footer />
    </>
  );
}
