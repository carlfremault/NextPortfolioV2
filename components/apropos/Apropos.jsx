import { Container } from "@material-ui/core";
import { useContext } from "react";
import { LanguageContext } from "../../pages/_app";
import SectionTitle from "../tools/SectionTitle";
import AproposLinks from "./AproposLinks";
import Bio from "./Bio";
import Competences from "./Competences";


/**
 * 'A propos' section
 * Page title + insertion of Bio, AproposLinks and Competences components
 */
const Apropos = () => {
  const { langFR } = useContext(LanguageContext);
  
  return (
    <section id="about" data-testid="apropos">
      <Container maxWidth={false}>
        <SectionTitle title= {langFR ? "À propos" : "About"} />
        <Bio />
        <AproposLinks />
        <Competences />
      </Container>
    </section>
  );
};

export default Apropos;
