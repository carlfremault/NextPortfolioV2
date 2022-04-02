import ProjectCard from "../ProjectCard";
import AP1MediatekFormDialog from "./AP1MediatekFormDialog";

const AP1MediatekFormCard = () => {
  return (
    <ProjectCard
      title="Atelier 1 : Application web Mediatek Formations - PHP, Symfony, MySQL"
      subtitle="Atelier de professionnalisation BTS SIO - 30/03/2022"
      image="/imgs/A1Bienvenue.png"
      imageTitle="Application web MediaTek86 Formations"
      cardText="Pour cet Atelier Professionnel j'ai fait les évolutions demdandées pour l'application web Mediatek Formations : gestion des niveaux des formations, implémentation d'un backoffice."
      repoLink="https://github.com/carlfremault/mediatekformation"
      dialog={AP1MediatekFormDialog}
    />
  );
};

export default AP1MediatekFormCard;
