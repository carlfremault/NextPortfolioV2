import ProjectCard from "../ProjectCard";
import NolarkDialog from "./NolarkDialog";

const NolarkCard = () => {
  return (
    <ProjectCard
      title="Analyse, mise en conformité, évolution et référencement (SEO) du site Nolark"
      subtitle="Réalisation en cours de formation - 27/11/2020"
      image="/imgs/Nolark.png"
      imageTitle="Capture d'écran du site Nolark"
      cardText="Analyse de la conformité au RGPD et droits d'auteur, évolution et corrections en HTML et CSS, Search Engine Optimization."
      repoLink="https://github.com/carlfremault/Nolark"
      dialog={NolarkDialog}
    />
  );
};

export default NolarkCard;
