import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  button: {
    borderColor: theme.palette.text.primary,
    fontFamily: "Roboto",
    fontWeight: 400,
    textTransform: "none",
    top: "1.5rem",
  },
}));

const Bio = () => {
  const classes = useStyles();

  return (
    <Container
      style={{
        marginTop: "4rem",
        marginBottom: "6rem",
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
      <Container maxWidth="md">
        <Typography
          variant="body1"
          align="justify"
          style={{ marginBottom: "1rem" }}
        >
          Ma passion pour l&apos;informatique a commencé vers mes 10 ans quand
          j&apos;ai eu un IBM PC 5150 d&apos;occasion en cadeau. Quelques années
          plus tard j&apos;ai intégré mon premier emploi en tant que ingénieur
          de maintenance en informatique, chez Systemat en Belgique. La moitié
          du temps j&apos;étais en sous-traitance chez un de nos clients pour
          administrer son réseau, l&apos;autre moitié j&apos;intervenais chez
          des clients professionnels pour dépanner et installer serveurs,
          ordinateurs de bureau, ordinateurs portables et imprimantes.
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          style={{ marginBottom: "1rem" }}
        >
          Toujours à la recherche de nouveaux défis et horizons, j&apos;ai
          déménagé ensuite dans les Alpes où j&apos;ai travaillé pendant 19 ans
          dans les secteurs de l&apos;hôtellerie et du tourisme. Riche en
          expériences, cet intermezzo, m&apos;a appris que, si on est prêt à
          faire des efforts et quelques sacrifices, il est tout à fait possible
          de réaliser ses rêves.
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          style={{ marginBottom: "1rem" }}
        >
          Cette constatation, puis l&apos;arrivée de la pandémie avec ses
          périodes de confinement et de chômage partiel, m&apos;ont convaincu
          qu&apos;il était temps de réaliser un autre de mes rêves et de me
          reconvertir en tant que développeur informatique.
        </Typography>
        <Typography
          variant="body1"
          align="justify"
          style={{ marginBottom: "1rem" }}
        >
          Actuellement je suis en deuxième année d&apos;un BTS Services
          informatiques aux Organisations, option Solutions Logicielles et
          Applications Métier. À côté de cette formation au CNED je fais
          également des cours en ligne sur Udemy (C#, JavaScript, React) et je
          m&apos;entraîne sur Exercism et Codewars.
        </Typography>
      </Container>
      <Container maxWidth="sm">
        <Grid container justifyContent="space-around">
          <Grid item>
            <a
              href="https://www.linkedin.com/in/carl-fremault/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outlined"
                className={classes.button}
                startIcon={<LinkedInIcon />}
              >
                LinkedIn
              </Button>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://github.com/carlfremault"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outlined"
                className={classes.button}
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Bio;
