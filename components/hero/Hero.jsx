import { Button, Container, Grid, Hidden, Typography } from "@material-ui/core";
import { useContext } from "react";
import { useTheme } from "@material-ui/styles";
import { ColorContext, LanguageContext } from "../../pages/_app";
import { Link } from "react-scroll";

/**
 * Hero component including link to projects section
 */
const Hero = () => {
  const theme = useTheme();
  const { darkMode } = useContext(ColorContext);
  const { langFR } = useContext(LanguageContext);

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
                {langFR ? 'Développeur web' : 'Web developer'}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="h2">
                JavaScript, React, Node.js, ...
              </Typography>
            </Grid>
            <Grid item>
              <Link
                to={"projets"}
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                <Button variant="outlined" style={theme.heroButton}>
                  {langFR ? 'Découvrez mes projets' : 'Discover my projects'}
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Typography style={theme.credits}>
            {langFR ? 'Photo par ' : 'Photo by '}
            {darkMode ? (
              <a
                href="https://unsplash.com/@matthewhenry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                style={theme.heroLink}
                rel="noreferrer"
              >
                Matthew Henry
              </a>
            ) : (
              <a
                href="https://unsplash.com/@adriel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                style={theme.heroLink}
                rel="noreferrer"
              >
                Adriel Kloppenburg
              </a>
            )}
            {langFR ? ' sur ' : ' on '}
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
