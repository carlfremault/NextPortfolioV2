import { Container } from "@material-ui/core";
import { useContext } from "react";
import { useTheme } from "@material-ui/styles";
import { LanguageContext } from "../../pages/_app";
import ProjectCardContainer from "./ProjectCardContainer";
import SectionTitle from "../tools/SectionTitle";

// merge 

/**
 * 'Projects' section
 * SectionTitle and container ProjectCards for project cards
 * Nothing needs to be changed in here when adding new projects
 */
const Projets = () => {
  const theme = useTheme();
  const { langFR } = useContext(LanguageContext);

  return (
    <section id="projects" data-testid="projets">
      <Container maxWidth={false} style={theme.lightBackgroundSection}>
        <SectionTitle title={langFR ? "Projets" : "Projects"} />
        <ProjectCardContainer />
      </Container>
    </section >
  );
};

export default Projets;
