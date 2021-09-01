import { Container, Typography } from "@material-ui/core";
import Forums from "./Forums";
import Newsletters from "./Newsletters";
import SectionTitle from "../tools/SectionTitle";

/**
 * 'Veille Informatique' section
 * Introduction and contains Newletters and Forums components
 */
const VeilleInformatique = () => {
  return (
    <section id="veilleinfo">
      <Container maxWidth={false}>
        <SectionTitle title="Veille Informatique" />
        <Container>
          <Container maxWidth="md">
            <Typography variant="body1" align="justify" gutterBottom>
              Le sujet que j&apos;ai choisi pour ma veille informatique est
              l&apos;écosystème JavaScript. Les technologies du cloud computing
              sont en forte croissance ces dernières années, notamment les
              applications &quot;SaaS&quot;. Les nouveaux modes de travail
              émergents, tel que le télétravail, gagnent en importance. Avoir
              accès à distance aux données ainsi qu&apos;aux applications de son
              entreprise devient un enjeu important. En adoptant ces
              technologies une entreprise gagne en efficacité et peut réduire et
              mieux maitriser son budget. ........
            </Typography>
            <Typography variant="body1" align="justify" gutterBottom>
              Le JavaScript ainsi que ses librairies et frameworks sont
              indéniablement le poid lourd en ce qui concerne le développement
              d&apos;applications web. Comme j&apos;envisage de me profiler en
              tant que développeur front end le choix semble logique.
            </Typography>
          </Container>
        </Container>
        <Newsletters />
        <Forums />
      </Container>
    </section>
  );
};

export default VeilleInformatique;
