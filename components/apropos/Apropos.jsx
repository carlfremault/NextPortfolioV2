import { Container } from "@material-ui/core";
import Bio from "./Bio";
import Competences from "./Competences";

const Apropos = () => {
  return (
    <section id="apropos">
      <Container maxWidth={false}>
        <Bio />
        <Competences />
      </Container>
    </section>
  );
};

export default Apropos;
