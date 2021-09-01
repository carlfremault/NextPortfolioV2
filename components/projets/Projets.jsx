import { Container } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import ProjectCards from "./ProjectCards";
import SectionTitle from "../tools/SectionTitle";

/**
 * 'Projets' section
 * SectionTitle and container ProjectCards for project cards
 */
const Projets = () => {
  const theme = useTheme();

  return (
    <section id="projets">
      <Container maxWidth={false} style={theme.lightBackgroundSection}>
        <SectionTitle title="Projets" />
        <ProjectCards />
      </Container>
    </section>
  );
};

export default Projets;
