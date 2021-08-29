import { Card, Container, Grid, makeStyles } from "@material-ui/core";
import CardStageSDI from "./CardStageSDI";
import CardPPEMediaTek from "./CardPPEMediaTek";
import CardCalculatrice from "./CardCalculatrice";
import CardAlgosTri from "./CardAlgosTri";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#052026",
    boxShadow: "none",
    width: "350px",
    minHeight: "550px",
    position: "relative",
    marginTop: "3rem",
  },
});

/**
 * Grid container for hardcoded Project Cards
 */
const ProjectCards = () => {
  const classes = useStyles();

  return (
    <Container
      style={{
        marginTop: "2rem",
        marginBottom: "4rem",
      }}
    >
      <Grid container justifyContent="space-evenly" alignItems="stretch">
        <Grid
          item
          component={Card}
          classes={{ root: classes.card }}
          raised={true}
        >
          <CardStageSDI />
        </Grid>
        <Grid
          item
          component={Card}
          classes={{ root: classes.card }}
          raised={true}
        >
          <CardPPEMediaTek />
        </Grid>
        <Grid
          item
          component={Card}
          classes={{ root: classes.card }}
          raised={true}
        >
          <CardCalculatrice />
        </Grid>
        <Grid
          item
          component={Card}
          classes={{ root: classes.card }}
          raised={true}
        >
          <CardAlgosTri />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectCards;
