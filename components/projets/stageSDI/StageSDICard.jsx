import ProjectCard from "../ProjectCard";
import StageSDIDialog from "./StageSDIDialog";

const StageSDICard = () => {
  return (
    <ProjectCard
      title="Création de site web vitrine - Next.js"
      subtitle="Stage en milieu professionnel"
      image="/imgs/SDI.png"
      imageTitle="Site web Sport Data Intelligence"
      imageHeight={200}
      cardText="Pour mon stage de première année j’ai été accueilli par Sport Data
          Intelligence, une start-up basée à Annecy (74), du 24 mai au 2 juillet
          2021."
      siteLink="https://sport-data-intelligence.com"
      dialog={StageSDIDialog}
    />
  );
};

export default StageSDICard;
