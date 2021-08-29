import { Container, Typography } from "@material-ui/core";
import AproposLinks from "./AproposLinks";
import Bio from "./Bio";
import Competences from "./Competences";

/**
 * 'A propos' section
 * Page title + insertion of Bio, AproposLinks and Competences components
 */
const Apropos = () => {
  return (
    <section id="apropos">
      <Container maxWidth={false}>
        <Container
          style={{
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          <Typography
            variant="h1"
            color="primary"
            align="center"
            style={{ marginBottom: "2rem" }}
          >
            À propos
          </Typography>
        </Container>
        <Bio />
        <AproposLinks />
        <Competences />
      </Container>
    </section>
  );
};

export default Apropos;
