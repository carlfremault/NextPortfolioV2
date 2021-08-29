import { Button, Container, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FaceIcon from "@material-ui/icons/Face";

/**
 * Horizontal grid with link buttons
 */
const AproposLinks = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
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
              style={theme.aproposButton}
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
              style={theme.aproposButton}
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
              style={theme.aproposButton}
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
