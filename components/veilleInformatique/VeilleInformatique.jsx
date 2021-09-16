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
    <section id="veilleinfo" data-testid="veilleInformatique">
      <Container maxWidth={false}>
        <SectionTitle title="Veille Informatique" />
        <Container>
          <Container maxWidth="md">
            <Typography variant="body1" align="justify" gutterBottom>
              Le sujet que j&apos;ai choisi pour ma veille informatique est
              l&apos;écosystème JavaScript, avec, pour l&apos;instant, une
              attention particulière pour la librairie React.
            </Typography>
            <Typography variant="body1" align="justify" gutterBottom>
              Comme j&apos;envisage une carrière dans le développement web, ce
              choix me semble logique. Ces dernières années, JavaScript
              s&apos;est imposé comme technologie dominante en tout ce qui
              concerne le développement web front-end, tout en étant un choix
              tout à fait valable pour le back-end aussi. C&apos;est une
              technologie qui est bien établie, avec beaucoup de ressources
              disponibles sur le web, et qui est très vivante, avec de nouveaux
              frameworks et librairies qui apparaissent régulièrement.
            </Typography>
            <Typography variant="body1" align="justify" gutterBottom>
              Concrètement j&apos;ai choisi d&apos;effectuer cette veille sur
              deux axes :{" "}
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
