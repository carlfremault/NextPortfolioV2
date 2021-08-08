import { Box, Container, Typography } from "@material-ui/core";

const Apropos = () => {
  return (
    <Container maxWidth={false}>
      <Typography
        variant="h1"
        color="primary"
        align="center"
        style={{ margin: "4rem 0 2rem 0" }}
        id="apropos"
      >
        À propos
      </Typography>
      <Container maxWidth="md">
        <Box m={2}>
          <Typography variant="body1" align="justify">
            Ma passion pour l&apos;informatique a commencé vers mes 10 ans quand
            j&apos;ai eu un IBM PC 5150 d&apos;occasion en cadeau. Comme la
            carte graphique CGA n&apos;était pas incluse je n&apos;avais pas
            accès aux jeux vidéo que jouaient mes amis, du coup je
            &apos;jouais&apos; avec WordPerfect, Lotus 123, et la programmation
            en MS Basic.
          </Typography>
        </Box>
        <Box m={2}>
          <Typography variant="body1" align="justify">
            Quelques années (et quelques générations de processeurs) plus tard
            j&apos;ai intégré mon premier emploi en tant que ingénieur de
            maintenance en informatique, chez Systemat en Belgique. La moitié du
            temps j&apos;étais en sous-traitance chez un de nos clients pour
            administrer son réseau, l&apos;autre moitié j&apos;intervenais chez
            des clients professionnels pour dépanner et installer serveurs,
            ordinateurs de bureau, ordinateurs portables et imprimantes.
          </Typography>
        </Box>
        <Box m={2}>
          <Typography variant="body1" align="justify">
            Une envie de voir de nouveaux horizons m&apos;a amené à déménager
            dans les Alpes où j&apos;ai travaillé pendant 19 ans dans les
            secteurs de l&apos;hôtellerie et du tourisme. Riche en expériences,
            cet intermezzo, qui a duré plus longtemps que prévu, m&apos;a appris
            que, si on est prêt à faire des efforts et quelques sacrifices, il
            est tout à fait possible de réaliser ses rêves.
          </Typography>
        </Box>
        <Box m={2}>
          <Typography variant="body1" align="justify">
            Cette constatation, puis l&apos;arrivée de la pandémie avec ses
            périodes de confinement et de chômage partiel, m&apos;ont convaincu
            qu&apos;il était temps de réaliser un autre de mes rêves et de me
            reconvertir en tant que développeur informatique.
          </Typography>
        </Box>
        <Box m={2}>
          <Typography variant="body1" align="justify">
            Actuellement je suis en deuxième année d&apos;un BTS Services
            informatiques aux Organisations, option Solutions Logicielles et
            Applications Métier. À côté de cette formation au CNED je fais
            également des cours en ligne sur Udemy (C#, JavaScript, React) et je
            m&apos;entraîne sur Exercism et Codewars (JavaScript).
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default Apropos;
