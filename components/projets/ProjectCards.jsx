import { Card, Container, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import CardStageSDI from "./CardStageSDI";
import CardPPEMediaTek from "./CardPPEMediaTek";
import CardCalculatrice from "./CardCalculatrice";
import CardAlgosTri from "./CardAlgosTri";

/**
 * Grid container for hardcoded Project Cards
 */
const ProjectCards = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container justifyContent="space-evenly" alignItems="stretch">
        <Grid item component={Card} style={theme.projectCard}>
          <CardStageSDI />
        </Grid>
        <Grid item component={Card} style={theme.projectCard}>
          <CardPPEMediaTek />
        </Grid>
        <Grid item component={Card} style={theme.projectCard}>
          <CardCalculatrice />
        </Grid>
        <Grid item component={Card} style={theme.projectCard}>
          <CardAlgosTri />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectCards;
