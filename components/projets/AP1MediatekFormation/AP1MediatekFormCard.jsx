import { useContext } from "react";
import { LanguageContext } from "../../../pages/_app";
import ProjectCard from "../ProjectCard";
import AP1MediatekFormDialog from "./AP1MediatekFormDialog";
import { cardTitleFR, 
  cardTitleGB, 
  cardSubTitleFR, 
  cardSubTitleGB,
  cardImageTitleFR,
  cardImageTitleGB,
  cardTextFR,
  cardTextGB  
} from "./AP1MediatekFormationText";


const AP1MediatekFormCard = () => {
  const { langFR } = useContext(LanguageContext);

  return (
    <ProjectCard
      title={langFR ? cardTitleFR : cardTitleGB}
      subtitle={langFR ? cardSubTitleFR : cardSubTitleGB}
      image="/imgs/A1Bienvenue.png"
      imageTitle={langFR ? cardImageTitleFR : cardImageTitleGB}
      cardText={langFR ? cardTextFR : cardTextGB}
      repoLink="https://github.com/carlfremault/mediatekformation"
      dialog={AP1MediatekFormDialog}
    />
  );
};

export default AP1MediatekFormCard;
