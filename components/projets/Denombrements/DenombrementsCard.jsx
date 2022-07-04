import ProjectCard from "../ProjectCard";
import DenombrementsDialog from "./DenombrementsDialog";
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
} from "./DenombrementsText";

const DenombrementsCard = () => {
  const { langFR } = useContext(LanguageContext);

  return (
    <ProjectCard
      title={langFR ? cardTitleFR : cardTitleGB}
      subtitle={langFR ? cardSubTitleFR : cardSubTitleGB}
      image="/imgs/Denombrements.png"
      imageTitle={langFR ? cardImageTitleFR : cardImageTitleGB}
      cardText={langFR ? cardTextFR : cardTextGB}
      repoLink="https://github.com/carlfremault/Denombrements"
      dialog={DenombrementsDialog}
    />
  );
};

export default DenombrementsCard;
