import PortfolioDialog from "./PortfolioDialog";
import ProjectCard from "../ProjectCard";
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
} from "./PortfolioText";

const PortfolioCard = () => {
  const { langFR } = useContext(LanguageContext);

  return (
    <ProjectCard
      title={langFR ? cardTitleFR : cardTitleGB}
      subtitle={langFR ? cardSubTitleFR : cardSubTitleGB}
      image="/imgs/Portfolio.png"
      imageTitle={langFR ? cardImageTitleFR : cardImageTitleGB}
      cardText={langFR ? cardTextFR : cardTextGB}
      repoLink="https://github.com/carlfremault/NextPortfolioV2"
      dialog={PortfolioDialog}
    />
  );
};

export default PortfolioCard;
