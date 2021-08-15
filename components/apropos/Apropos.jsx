import { Container } from "@material-ui/core";
import Bio from "./Bio";
import Competences from "./Competences";

const Apropos = () => {
  return (
    <Container maxWidth={false}>
      <section id="apropos" style={{ scrollMarginTop: "4rem" }}>
        <Bio />
        <Competences />
      </section>
    </Container>
  );
};

export default Apropos;
