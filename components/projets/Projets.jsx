import { Button, Container, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import ProjectCardContainer from "./ProjectCardContainer";
import SectionTitle from "../tools/SectionTitle";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

/**
 * 'Projets' section
 * SectionTitle and container ProjectCards for project cards
 * Nothing needs to be changed in here when adding new projects
 */
const Projets = () => {
  const theme = useTheme();

  return (
    <section id="projets" data-testid="projets">
      <Container maxWidth={false} style={theme.lightBackgroundSection}>
        <SectionTitle title="Projets" />
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item style={{ textAlign: "center" }}>
          <a
            href="/pdf/TableauSynthese.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              style={theme.contrastButton}
              startIcon={<PictureAsPdfIcon />}
            >
              Tableau de synthèse
            </Button>
          </a>
        </Grid>
      </Grid>
      <ProjectCardContainer />
    </Container>
    </section >
  );
};

export default Projets;
