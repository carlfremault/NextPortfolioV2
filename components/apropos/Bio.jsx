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
          j&apos;ai eu un IBM PC 5150 d&apos;occasion en cadeau. Quelques années
          plus tard j&apos;ai intégré mon premier emploi en tant que ingénieur
          de maintenance en informatique, chez Systemat en Belgique. La moitié
          du temps j&apos;étais en sous-traitance chez un de nos clients pour
          administrer son réseau, l&apos;autre moitié j&apos;intervenais chez
          des clients professionnels pour dépanner et installer serveurs,
          ordinateurs de bureau, ordinateurs portables et imprimantes.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Toujours à la recherche de nouveaux défis et horizons, j&apos;ai
          déménagé ensuite dans les Alpes où j&apos;ai travaillé pendant 19 ans
          dans les secteurs de l&apos;hôtellerie et du tourisme. Riche en
          expériences, cet intermezzo m&apos;a appris que, si on est prêt à
          faire des efforts et quelques sacrifices, il est tout à fait possible
          de réaliser ses rêves.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Cette constatation, puis l&apos;arrivée de la pandémie avec ses
          périodes de confinement et de chômage partiel, m&apos;ont convaincu
          qu&apos;il était temps de réaliser un autre de mes rêves et de me
          reconvertir en tant que développeur informatique.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Actuellement je suis en deuxième année d&apos;un BTS Services
          informatiques aux Organisations, option Solutions Logicielles et
          Applications Métier. À côté de cette formation au CNED je fais
          également des cours en ligne sur Udemy (C#, JavaScript, React) et je
          m&apos;entraîne sur Exercism et Codewars.
        </Typography>
      </Container>
    </Container>
  );
};

export default Bio;
