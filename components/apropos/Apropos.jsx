import { Container } from "@material-ui/core";
import SectionTitle from "../tools/SectionTitle";
import AproposLinks from "./AproposLinks";
import Bio from "./Bio";
import Competences from "./Competences";

/**
 * 'A propos' section
 * Page title + insertion of Bio, AproposLinks and Competences components
 */
const Apropos = () => {
  return (
    <section id="about" data-testid="apropos">
      <Container maxWidth={false}>
        <SectionTitle title="À propos" />
        <Bio />
        <AproposLinks />
        <Competences />
      </Container>
    </section>
  );
};

export default Apropos;
