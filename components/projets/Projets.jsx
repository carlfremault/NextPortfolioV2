import { Container } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import ProjectCardContainer from "./ProjectCardContainer";
import SectionTitle from "../tools/SectionTitle";

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
        <ProjectCardContainer />
      </Container>
    </section >
  );
};

export default Projets;
