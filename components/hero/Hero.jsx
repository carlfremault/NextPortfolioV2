import { Button, Container, Grid, Hidden, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Link } from "react-scroll";

/**
 * Hero component including link to projects section
 */
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
              <Link
                to={"projets"}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Button variant="outlined" style={theme.heroButton}>
                  Découvrez mes projets
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Typography style={theme.credits}>
            Photo par{" "}
            <a
              href="https://unsplash.com/@matthewhenry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              style={theme.heroLink}
              rel="noreferrer"
            >
              Matthew Henry
            </a>{" "}
            sur{" "}
            <a
              href="https://unsplash.com/s/photos/architecture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              style={theme.heroLink}
              rel="noreferrer"
            >
              Unsplash
            </a>
          </Typography>
        </Container>
      </Container>
    </section>
  );
};

export default Hero;
