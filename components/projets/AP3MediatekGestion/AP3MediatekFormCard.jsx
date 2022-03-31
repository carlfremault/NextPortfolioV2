import ProjectCard from "../ProjectCard";
import AP3MediatekFormDialog from "./AP3MediatekFormDialog";

const AP3MediatekFormCard = () => {
  return (
    <ProjectCard
      title="Atelier 3 : Application de bureau Mediatek86 - C#, MySQL"
      subtitle="Atelier de professionnalisation BTS SIO - 17/03/2022"
      image="/imgs/A3Application.png"
      imageTitle="Application de bureau MediaTek86"
      cardText="Pour cet Atelier Professionnel j&apos;ai implémenté les évolutions demdandées pour l&apos;application de bureau de gestion du catalogue d&apos;une médiathèque : gestion de documents, d&apos;abonnements et de commandes. Lien avec base de données dans le cloud Azure."
      repoLink="https://github.com/carlfremault/Mediatek86"
      dialog={AP3MediatekFormDialog}
    />
  );
};

export default AP3MediatekFormCard;
