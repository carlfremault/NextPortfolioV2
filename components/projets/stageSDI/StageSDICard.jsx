import ProjectCard from "../ProjectCard";
import StageSDIDialog from "./StageSDIDialog";

const StageSDICard = () => {
  return (
    <ProjectCard
      title="Création de site vitrine - Next.js"
      subtitle="Stage en milieu professionnel"
      image="/imgs/SDI.png"
      imageTitle="Site web Sport Data Intelligence"
      cardText="Pour mon stage de première année j’ai été accueilli par Sport Data
          Intelligence, une start-up basée à Annecy (74), du 24 mai au 2 juillet
          2021."
      dialog={StageSDIDialog}
    />
  );
};

export default StageSDICard;
