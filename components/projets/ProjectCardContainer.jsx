import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import StageFaibrikCard from "./stageFaibrik/StageFaibrikCard";
import StageSDICard from "./stageSDI/StageSDICard";
import PPEMediaTekCard from "./PPEMediaTek/PPEMediaTekCard";
import CalculatriceCard from "./calculatrice/CalculatriceCard";
import AlgosTriCard from "./algosTri/AlgosTriCard";
import PortfolioCard from "./portfolioNext/PortfolioCard";
import SubTitle from "../tools/SubTitle";
// import AP1MediatekFormCard from "./AP1MediatekFormation/AP1MediatekFormCard";
import AP3MediatekFormCard from "./AP3MediatekGestion/AP3MediatekFormCard";

/**
 * Grid container for ProjectCards
 * When adding a new ProjectCard it needs to be inserted in a new Grid item
 */
const ProjectCardContainer = () => {
  const theme = useTheme();

  return (
    <Grid container direction="column" alignItems="center">
      <SubTitle title = "Projets professionnels" />
      <Grid item style={theme.projectCard} id="AP3">
        <AP3MediatekFormCard />
      </Grid>
      {/* <Grid item style={theme.projectCard}>
        <AP1MediatekFormCard />
      </Grid> */}
      <Grid item style={theme.projectCard}>
        <StageFaibrikCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <StageSDICard />
      </Grid>
      <SubTitle title = "Projets scolaires et personnels" />
      <Grid item style={theme.projectCard}>
        <PortfolioCard />
      </Grid>      
      <Grid item style={theme.projectCard}>
        <PPEMediaTekCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <CalculatriceCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <AlgosTriCard />
      </Grid>
    </Grid>
  );
};

export default ProjectCardContainer;
