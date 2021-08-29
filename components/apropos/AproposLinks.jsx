import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
  button: {
    borderColor: theme.palette.text.primary,
    fontFamily: "Roboto",
    fontWeight: 400,
    textTransform: "none",
    // top: "1.5rem",
    margin: "2rem 2rem",
  },
}));

const AproposLinks = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="sm"
      //   style={{
      //     marginTop: "4rem",
      //     marginBottom: "6rem",
      //   }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
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
        <Grid item>
          <a
            href="../../CVCarlFremault072021Web.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              className={classes.button}
              startIcon={<FaceIcon />}
            >
              CV (PDF)
            </Button>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AproposLinks;
