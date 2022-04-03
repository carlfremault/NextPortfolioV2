import ProjectCard from "../ProjectCard";
import APIRestDialog from "./APIRestDialog";

const APIRestCard = () => {
  return (
    <ProjectCard
      title="Développement d'un API REST - PHP"
      subtitle="Réalisation en cours de formation - 17/01/22"
      image="/imgs/APIRest.png"
      imageTitle="Capture d'écran Postman"
      cardText="Création d'un API REST et exploitation avec Postman ainsi qu'avec un simple client PHP."
      repoLink="https://github.com/carlfremault/APIRest"
      dialog={APIRestDialog}
    />
  );
};

export default APIRestCard;
