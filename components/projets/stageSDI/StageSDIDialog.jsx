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
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";
import Link from "next/link";
import {
  cardTitleFR,
  cardTitleGB,
  cessationFR,
  cessationGB,
  dialogDateFR,
  dialogDateGB,
  dialogTextFR,
  dialogTextGB,
} from "./StageSDIText";
import DialogParagraph from "../../tools/DialogParagraph";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const StageSDIDialog = ({ handleClose, open }) => {
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
            <Image
              loader={myLoader}
              src="/imgs/SDI.png"
              width="1284px"
              height="742px"
              alt="Image of SDI website frontpage"
            />
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
              <Typography
                variant="subtitle1"
                align="justify"
                style={{ maxWidth: "800px" }}
              >
                {langFR ? cessationFR : cessationGB}
              </Typography>
            </Grid>
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="../../pdf/SDIRapportDeStage.pdf"
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
              <Link href="/sdi" passHref>
                <a target="_blank">
                  <Button
                    variant="outlined"
                    style={theme.contrastButton}
                    startIcon={<CameraAltIcon />}
                  >
                    {langFR ? "Galerie" : "Screenshots"}
                  </Button>
                </a>
              </Link>
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
                    href="https://nextjs.org/"
                    target="_blank"
                    alt="Next.js official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoNextJs.svg"
                      width="90px"
                      height="50px"
                      alt="NextJs Logo"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    alt="React official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoReact.png"
                      width="150px"
                      height="50px"
                      alt="React Logo"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    href="https://material-ui.com/"
                    target="_blank"
                    alt="Material-UI official website"
                    rel="noreferrer"
                  >
                    <Image
                      loader={myLoader}
                      src="/imgs/LogoMui.png"
                      width="82px"
                      height="82px"
                      alt="Material-UI Logo"
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
              {langFR ? "Expériences :" : "Experiences"}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="JavaScript, Next.js, React, Material-UI" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={langFR ? "Initiation à l’utilisation de Redux" : "Redux initiation"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={langFR ? "Méthode Agile, Daily Scrum Meetings, Storyboard, Kanban" : "Agile methodology, Daily Scrum Meetings, Storyboard, Kanban"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Gitflow" />
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

StageSDIDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default StageSDIDialog;
