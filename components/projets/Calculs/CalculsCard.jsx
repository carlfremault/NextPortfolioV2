import ProjectCard from "../ProjectCard";
import CalculsDialog from "./CalculsDialog";
import { useContext } from "react";
import { LanguageContext } from "../../../pages/_app";
import {
  cardTitleFR,
  cardTitleGB,
  cardSubTitleFR,
  cardSubTitleGB,
  cardImageTitleFR,
  cardImageTitleGB,
  cardTextFR,
  cardTextGB
} from "./CalculsText";

const CalculsCard = () => {
  const { langFR } = useContext(LanguageContext);
  
  return (
    <ProjectCard
      title={langFR ? cardTitleFR : cardTitleGB}
      subtitle={langFR ? cardSubTitleFR : cardSubTitleGB}
      image="/imgs/Calculs.png"
      imageTitle={langFR ? cardImageTitleFR : cardImageTitleGB}
      cardText={langFR ? cardTextFR : cardTextGB}
      repoLink="https://github.com/carlfremault/Calculs"
      dialog={CalculsDialog}
    />
  );
};

export default CalculsCard;
