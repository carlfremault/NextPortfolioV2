import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import AlgosTriCard from "./algosTri/AlgosTriCard";
import AP1MediatekFormCard from "./AP1MediatekFormation/AP1MediatekFormCard";
import AP3MediatekFormCard from "./AP3MediatekGestion/AP3MediatekFormCard";
import CalculatriceCard from "./calculatrice/CalculatriceCard";
import CalculsCard from "./Calculs/CalculsCard";
import DenombrementsCard from "./Denombrements/DenombrementsCard";
import PortfolioCard from "./portfolioNext/PortfolioCard";
import PPEMediaTekCard from "./PPEMediaTek/PPEMediaTekCard";
import StageFaibrikCard from "./stageFaibrik/StageFaibrikCard";
import StageSDICard from "./stageSDI/StageSDICard";
import SubTitle from "../tools/SubTitle";

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
      <Grid item style={theme.projectCard} id="AP1">
        <AP1MediatekFormCard />
      </Grid>
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
      <Grid item style={theme.projectCard}>
        <DenombrementsCard />
      </Grid>
      <Grid item style={theme.projectCard}>
        <CalculsCard />
      </Grid>
    </Grid>
  );
};

export default ProjectCardContainer;
