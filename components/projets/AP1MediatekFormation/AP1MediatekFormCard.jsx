import ProjectCard from "../ProjectCard";
import AP1MediatekFormDialog from "./AP1MediatekFormDialog";

const AP1MediatekFormCard = () => {
  return (
    <ProjectCard
      title="Application web Mediatek Formations - PHP, Symfony"
      subtitle="Atelier de professionnalisation - BTS SIO"
      image="/imgs/Personnel.png"
      imageTitle="Application web MediaTek86 Formations"
      cardText="Pour cet Atelier Professionnel j'ai fait les évolutions demdandées pour l'application web Mediatek Formations : gestion des niveaux des formations, implémentation d'un backoffice."
      repoLink="https://github.com/carlfremault/mediatekformation"
      dialog={AP1MediatekFormDialog}
    />
  );
};

export default AP1MediatekFormCard;
