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
  credits: {
    position: "absolute",
    bottom: 5,
    right: 10,
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
            <Typography variant="h4" component="h2">
              Carl Fremault
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" component="h1">
              Étudiant développeur
            </Typography>
          </Grid>
          <Hidden only={["xs"]}>
            <Grid item>
              <Typography variant="subtitle1" component="h2">
                2ième année BTS SIO - Solutions Logicielles et Applications
                Métier
              </Typography>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item>
              <Typography variant="subtitle1" component="h2">
                2ième année BTS SIO
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="h2">
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
        <Typography className={classes.credits}>
          Photo by{" "}
          <a href="https://unsplash.com/@matthewhenry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Matthew Henry
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/architecture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </Typography>
      </Container>
    </Container>
  );
};

export default Hero;
