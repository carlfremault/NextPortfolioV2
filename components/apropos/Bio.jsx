import { Container, Typography } from "@material-ui/core";

/**
 * Hardcoded bio
 */
const Bio = () => {
  return (
    <Container data-testid="bio">
      <Container maxWidth="md">
        <Typography variant="body1" align="justify" gutterBottom>
          Ma passion pour l&apos;informatique a commencé vers mes 10 ans quand
          j&apos;ai eu un IBM PC 5150 d&apos;occasion en cadeau. Après
          l&apos;obtention de l&apos;équivalent du BAC en Belgique, option
          Mathématiques & Sciences, j&apos;ai intégré mon premier emploi en tant
          que ingénieur de maintenance en informatique, chez Systemat en
          Belgique, où j&apos;étais en sous-traitance chez un de nos clients
          pour administrer son réseau informatique.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Au bout de quelques années, une soif d&apos;aventure, et une envie de
          réaliser un rêve d&apos;enfance, m&apos;ont poussé à déménager dans
          les Alpes où j&apos;ai travaillé pendant 19 ans dans le secteur du
          tourisme.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          L&apos;arrivée de la pandémie, avec ses périodes de confinement, a non
          seulement réveillé en moi l&apos;envie de voir de nouveaux horizons,
          j&apos;ai également saisi l&apos;opportunité pour me lancer dans une
          reconversion professionnelle. Actuellement je me retrouve en deuxième
          année d&apos;un BTS Services Informatiques aux Organisations, option
          Solutions Logicielles et Applications Métier, au CNED.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Effectivement, depuis mes premières incursions sur le World Wide Web à
          la fin des années 90, j&apos;ai toujours été fasciné par cette
          technologie aux possibilités infinies. L&apos;arrivée du Cloud
          Computing, et particulièrement le SaaS, permet de complètement
          repenser nos modes de travail, et de vie.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          J&apos;aimerais beaucoup participer à cette (r)évolution, ainsi je me
          prépare, avec les cours du CNED, mais aussi sur Udemy, Exercism,
          Codewars, etc., pour une nouvelle carrière dans le développement web.
        </Typography>
      </Container>
    </Container>
  );
};

export default Bio;
