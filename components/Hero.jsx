import {
  Button,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Link from "next/link";

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
  button: {
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
    <section id="hero">
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
              <Button variant="outlined" className={classes.button}>
                Découvrez mes projets
              </Button>
            </Grid>
          </Grid>
          <Typography className={classes.credits}>
            Photo par{" "}
            <Link href="https://unsplash.com/@matthewhenry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              <a>Matthew Henry</a>
            </Link>{" "}
            sur{" "}
            <Link href="https://unsplash.com/s/photos/architecture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              <a>Unsplash</a>
            </Link>
          </Typography>
        </Container>
      </Container>
    </section>
  );
};

export default Hero;
