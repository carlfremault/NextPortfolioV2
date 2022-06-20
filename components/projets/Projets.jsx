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
    <section id="projects" data-testid="projets">
      <Container maxWidth={false} style={theme.lightBackgroundSection}>
        <SectionTitle title="Projets" />
        <ProjectCardContainer />
      </Container>
    </section >
  );
};

export default Projets;
