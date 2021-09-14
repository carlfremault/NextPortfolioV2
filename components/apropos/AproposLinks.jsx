import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FaceIcon from "@material-ui/icons/Face";
import EmailIcon from "@material-ui/icons/Email";

/**
 * Horizontal grid with link buttons
 */
const AproposLinks = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "3rem", marginBottom: "4rem" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        <Grid item style={{ textAlign: "center" }}>
          <a
            href="https://www.linkedin.com/in/carl-fremault/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              style={theme.contrastButton}
              startIcon={<LinkedInIcon />}
              data-testid="aproposLinkedInButton"
            >
              LinkedIn
            </Button>
          </a>
        </Grid>
        <Grid item style={{ textAlign: "center" }}>
          <a
            href="https://github.com/carlfremault"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              style={theme.contrastButton}
              startIcon={<GitHubIcon />}
              data-testid="aproposGitHubButton"
            >
              GitHub
            </Button>
          </a>
        </Grid>
        <Grid item style={{ textAlign: "center" }}>
          <a href="../../pdf/CVCarlFremault092021Web.pdf" target="_blank">
            <Button
              variant="outlined"
              style={theme.contrastButton}
              startIcon={<FaceIcon />}
              data-testid="aproposCVButton"
            >
              CV (PDF)
            </Button>
          </a>
        </Grid>
        <Grid item style={{ textAlign: "center" }}>
          <a href="#" onClick={handleOpen}>
            <Button
              variant="outlined"
              style={theme.contrastButton}
              startIcon={<EmailIcon />}
              data-testid="aproposContactButton"
            >
              Contact
            </Button>
          </a>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: theme.dialog,
        }}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle>Contact</DialogTitle>
        <DialogContent dividers>
          <Typography
            variant="body1"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            Vous pouvez me contacter par email :
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            carlfremault (at) yahoo (dot) com
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={theme.contrastColor}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AproposLinks;
