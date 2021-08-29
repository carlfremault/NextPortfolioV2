import { Container, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import ProjectCards from "./ProjectCards";

/**
 * 'Projets' section
 * Section title and container ProjectCards for project cards
 */
const Projets = () => {
  const theme = useTheme();

  return (
    <section id="projets">
      <Container maxWidth={false} style={theme.projectsSection}>
        <Container
          style={{
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h1" color="primary" align="center">
            Projets
          </Typography>
        </Container>
        <ProjectCards />
      </Container>
    </section>
  );
};

export default Projets;
