import ProjectCard from "../ProjectCard";
import StageFaibrikDialog from "./StageFaibrikDialog";

const StageFaibrikCard = () => {
  return (
    <ProjectCard
      title="Développement d'un bot Microsoft Teams - Node.js"
      subtitle="Stage en milieu professionnel - 15/11 au 31/12/2021"
      image="/imgs/faibrikAbout.png"
      imageTitle="Microsoft Teams bot alerte"
      cardText="Pour mon stage de deuxième année j’ai intégré l'équipe de fAIBRIK, start-up basée à Annecy (74), du 15 novembre au 31 décembre
          2021."
      dialog={StageFaibrikDialog}
    />
  );
};

export default StageFaibrikCard;
