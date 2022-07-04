import { useContext } from "react";
import { LanguageContext } from "../../../pages/_app";
import ProjectCard from "../ProjectCard";
import StageFaibrikDialog from "./StageFaibrikDialog";
import {
  cardTitleFR,
  cardTitleGB,
  cardSubTitleFR,
  cardSubTitleGB,
  cardImageTitleFR,
  cardImageTitleGB,
  cardTextFR,
  cardTextGB
} from "./StageFaibrikText";

const StageFaibrikCard = () => {
  const { langFR } = useContext(LanguageContext);
  
  return (
    <ProjectCard
      title={langFR ? cardTitleFR : cardTitleGB}
      subtitle={langFR ? cardSubTitleFR : cardSubTitleGB}
      image="/imgs/faibrikAbout.png"
      imageTitle={langFR ? cardImageTitleFR : cardImageTitleGB}
      cardText={langFR ? cardTextFR : cardTextGB}
      dialog={StageFaibrikDialog}
    />
  );
};

export default StageFaibrikCard;
