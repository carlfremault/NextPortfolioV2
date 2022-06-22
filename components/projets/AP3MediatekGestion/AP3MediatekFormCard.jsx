import { useContext } from "react";
import { LanguageContext } from "../../../pages/_app";
import ProjectCard from "../ProjectCard";
import AP3MediatekFormDialog from "./AP3MediatekFormDialog";
import { cardTitleFR, 
  cardTitleGB, 
  cardSubTitleFR, 
  cardSubTitleGB,
  cardImageTitleFR,
  cardImageTitleGB,
  cardTextFR,
  cardTextGB  
} from "./AP3MediatekGestionText";

const AP3MediatekFormCard = () => {
  const { langFR } = useContext(LanguageContext);

  return (
    <ProjectCard
      title={langFR ? cardTitleFR : cardTitleGB}
      subtitle={langFR ? cardSubTitleFR : cardSubTitleGB}
      image="/imgs/A3Application.png"
      imageTitle={langFR ? cardImageTitleFR : cardImageTitleGB}
      cardText={langFR ? cardTextFR : cardTextGB}
      repoLink="https://github.com/carlfremault/Mediatek86"
      dialog={AP3MediatekFormDialog}
    />
  );
};

export default AP3MediatekFormCard;
