import Apropos from "../components/apropos/Apropos";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Projets from "../components/projets/Projets";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Apropos />
      <Projets />
      <Footer />
    </>
  );
}
