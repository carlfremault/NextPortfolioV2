import { Button, Container, Grid, Hidden, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Link from "next/link";

const Hero = () => {
  const theme = useTheme();

  return (
    <section id="hero">
      <Container style={theme.heroContainer} maxWidth={false}>
        <Container style={theme.opaqueLayer} maxWidth={false}>
          <Grid
            container
            style={theme.heroGrid}
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
              <Button variant="outlined" style={theme.heroButton}>
                Découvrez mes projets
              </Button>
            </Grid>
          </Grid>
          <Typography style={theme.credits}>
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
