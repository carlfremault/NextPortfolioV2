import ProjectCard from "../ProjectCard";
import AlgosTriDialog from "./AlgosTriDialog";

const AlgosTriCard = () => {
  return (
    <ProjectCard
      title="Algorithmes de Tri - C#"
      subtitle="Projet Personnel - 31/12/2020"
      image="/imgs/InsertionThumb.png"
      imageTitle="Capture d'écran Tri par insertion"
      cardText="Une petite application console en C# qui permet de trier une liste d'entiers avec des différents algorithmes: tri par insertion, tri par sélection, tri à bulles."
      repoLink="https://github.com/carlfremault/AlgorithmesDeTri"
      dialog={AlgosTriDialog}
    />
  );
};

export default AlgosTriCard;
