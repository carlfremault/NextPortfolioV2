import {
  Button,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    background: `url(/imgs/matthew-henry-VviFtDJakYk-unsplash.jpg) no-repeat top/cover`,
    height: "100vh",
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
    zIndex: -2,
  },
  opaqueLayer: {
    backgroundColor: "rgba(5, 32, 38, 0.7)",
    height: "100vh",
    // paddingLeft: 0,
    // paddingRight: 0,
    // width: "100vw",
    zIndex: -1,
  },
  heroGrid: {
    height: "100vh",
  },
  heroButton: {
    fontFamily: "Roboto",
    fontWeight: 400,
    top: "1.5rem",
    borderColor: theme.palette.text.primary,
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Container className={classes.heroContainer} maxWidth={false}>
      <Container className={classes.opaqueLayer} maxWidth={false}>
        <Grid
          container
          className={classes.heroGrid}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" style={{ paddingBottom: "0.2rem" }}>
              Carl Fremault
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2">Étudiant développeur</Typography>
          </Grid>
          <Hidden only={["xs"]}>
            <Grid item>
              <Typography variant="subtitle1">
                2ième année BTS SIO - Solutions Logicielles et Applications
                Métier
              </Typography>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item>
              <Typography variant="subtitle1">2ième année BTS SIO</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Solutions Logicielles et Applications Métier
              </Typography>
            </Grid>
          </Hidden>
          <Grid item>
            <Button variant="outlined" className={classes.heroButton}>
              Découvrez mes projets
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Hero;
