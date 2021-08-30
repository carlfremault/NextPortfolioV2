import Apropos from "../components/apropos/Apropos";
import Hero from "../components/Hero";
import Navbar from "../components/navbar/Navbar";
import Projets from "../components/projets/Projets";
import VeilleInformatique from "../components/veilleInformatique/VeilleInformatique";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Apropos />
      <Projets />
      <VeilleInformatique />
    </>
  );
}
