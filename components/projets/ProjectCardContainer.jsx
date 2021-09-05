import { Card, Container, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import StageSDICard from "./stageSDI/StageSDICard";
import PPEMediaTekCard from "./PPEMediaTek/PPEMediaTekCard";
import CalculatriceCard from "./calculatrice/CalculatriceCard";
import AlgosTriCard from "./algosTri/AlgosTriCard";
import PortfolioCard from "./portfolioNext/PortfolioCard";

/**
 * Grid container for hardcoded Project Cards
 * When adding a new Project Card it needs to be inserted in a new Grid item
 */
const ProjectCardContainer = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container justifyContent="space-evenly" alignItems="stretch">
        <Grid item component={Card} style={theme.projectCard}>
          <PortfolioCard />
        </Grid>
        <Grid item component={Card} style={theme.projectCard}>
          <StageSDICard />
        </Grid>
        <Grid item component={Card} style={theme.projectCard}>
          <PPEMediaTekCard />
        </Grid>
        <Grid item component={Card} style={theme.projectCard}>
          <CalculatriceCard />
        </Grid>
        <Grid item component={Card} style={theme.projectCard}>
          <AlgosTriCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectCardContainer;
