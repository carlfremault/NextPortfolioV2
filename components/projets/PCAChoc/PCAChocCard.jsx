import ProjectCard from "../ProjectCard";
import PCAChocDialog from "./PCAChocDialog";
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
} from "./PCAChocText";

const PCAChocCard = () => {
  const { langFR } = useContext(LanguageContext);

  return (
    <ProjectCard
      title={langFR ? cardTitleFR : cardTitleGB}
      subtitle={langFR ? cardSubTitleFR : cardSubTitleGB}
      image="/imgs/PCAChoc.png"
      imageTitle={langFR ? cardImageTitleFR : cardImageTitleGB}
      cardText={langFR ? cardTextFR : cardTextGB}
      dialog={PCAChocDialog}
    />
  );
};

export default PCAChocCard;
