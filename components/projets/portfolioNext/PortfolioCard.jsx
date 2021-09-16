import PortfolioDialog from "./PortfolioDialog";
import ProjectCard from "../ProjectCard";

const PortfolioCard = () => {
  return (
    <ProjectCard
      title="Création de site web portfolio - Next.js"
      subtitle="Projet Personnel"
      image="/imgs/Portfolio.png"
      imageTitle="Portfolio Carl Fremault"
      imageHeight={200}
      cardText="A l'issue de mon stage, où j'ai pu mieux me familiariser
          avec Next.js / React et Material-UI, j'ai décidé de
          refaire mon vieux portfolio Wordpress."
      repoLink="https://github.com/carlfremault/nextjsPortfolio"
      dialog={PortfolioDialog}
    />
  );
};

export default PortfolioCard;
