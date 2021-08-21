import { Container } from "@material-ui/core";
import AproposLinks from "./AproposLinks";
import Bio from "./Bio";
import Competences from "./Competences";

const Apropos = () => {
  return (
    <section id="apropos">
      <Container maxWidth={false}>
        <Bio />
        <AproposLinks />
        <Competences />
      </Container>
    </section>
  );
};

export default Apropos;
