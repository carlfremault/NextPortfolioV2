import PropTypes from "prop-types";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { useTheme } from "@material-ui/styles";
import { LanguageContext } from "../../../pages/_app";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";
import StageFaibrikGallery from "./StageFaibrikGallery";
import {
  cardTitleFR,
  cardTitleGB,
  dialogDateFR,
  dialogDateGB,
  dialogTextFR,
  dialogTextGB,
} from "./StageFaibrikText";
import DialogParagraph from "../../tools/DialogParagraph";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const StageFaibrikDialog = ({ handleClose, open }) => {
  const theme = useTheme();
  const { langFR } = useContext(LanguageContext);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: theme.dialog,
        }}
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle>
          {langFR ? cardTitleFR : cardTitleGB}
        </DialogTitle>
        <DialogContent dividers data-testid="dialogContent">
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <StageFaibrikGallery />
          </Container>
          {!langFR &&
            <Container maxWidth="md">
              <Typography
                variant="subtitle1"
                align="center"
                style={{ margin: "1rem 0" }}
              >
                As this internship was a part of my (French) training program, all documents are in French.
              </Typography>
            </Container>
          }
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="../../pdf/faibrikRapportDeStage.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  {langFR ? "Rapport de stage" : "Internship report"}
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container
            maxWidth="sm"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" gutterBottom>
                  Technologies
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <a
                    href="https://nodejs.org/"
                    target="_blank"
                    alt="Node.js official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoNode.png"
                      width="90px"
                      height="50px"
                      alt="NextJs Logo"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://docs.microsoft.com/en-us/microsoftteams/platform/"
                    target="_blank"
                    alt="MS Teams developper documentation"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoTeams.png"
                      width="150px"
                      height="90px"
                      alt="React Logo"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              {langFR ? dialogDateFR : dialogDateGB}
            </Typography>
            {langFR ?
              dialogTextFR.map(el => <DialogParagraph paragraphText={el} />)
              :
              dialogTextGB.map(el => <DialogParagraph paragraphText={el} />)
            }
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0 0 0" }}
            >
              {langFR? "Expériences :" : "Experiences"}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Node.js" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Microsoft Azure" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Microsoft Bot Framework SDK, Microsoft Azure Bot Service" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Microsoft Adaptive Cards" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="MongoDB" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={langFR ? "Méthode Agile, Daily Scrum Meetings, Trello, Gitlab": "Agile methodology, Daily Scrum Meetings, Trello, Gitlab"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Ngrok, Postman, Auth0, RabbitMQ" />
              </ListItem>
            </List>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            style={theme.contrastColor}
            data-testid="projectCardCloseDialog"
          >
            {langFR ? 'Fermer' : 'Close'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

StageFaibrikDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default StageFaibrikDialog;
