import ProjectCard from "../ProjectCard";
import PPEMediaTekDialog from "./PPEMediaTekDialog";
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
} from "./PPEMediaTekText";

const PPEMediaTekCard = () => {
  const { langFR } = useContext(LanguageContext);

  return (
    <ProjectCard
      title={langFR ? cardTitleFR : cardTitleGB}
      subtitle={langFR ? cardSubTitleFR : cardSubTitleGB}
      image="/imgs/Personnel.png"
      imageTitle={langFR ? cardImageTitleFR : cardImageTitleGB}
      cardText={langFR ? cardTextFR : cardTextGB}
      repoLink="https://github.com/carlfremault/CNED_Atelier2_MediaTek86"
      dialog={PPEMediaTekDialog}
    />
  );
};

export default PPEMediaTekCard;
