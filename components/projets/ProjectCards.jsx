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
    <Container
      style={{
        marginTop: "2rem",
        marginBottom: "4rem",
      }}
    >
      <Grid container justifyContent="space-evenly" alignItems="stretch">
        <Grid item component={Card} style={theme.projectCard} raised={true}>
          <CardStageSDI />
        </Grid>
        <Grid item component={Card} style={theme.projectCard} raised={true}>
          <CardPPEMediaTek />
        </Grid>
        <Grid item component={Card} style={theme.projectCard} raised={true}>
          <CardCalculatrice />
        </Grid>
        <Grid item component={Card} style={theme.projectCard} raised={true}>
          <CardAlgosTri />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectCards;
