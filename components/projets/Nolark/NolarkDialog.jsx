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
import { useTheme } from "@material-ui/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import CheckIcon from "@material-ui/icons/Check";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const DenombrementsDialog = ({ handleClose, open }) => {
  const theme = useTheme();

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
        <DialogTitle>Analyse, mise en conformité, évolution et référencement (SEO) du site Nolark</DialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Image
              loader={myLoader}
              src="/imgs/Nolark.png"
              width="838px"
              height="485px"
              alt="Capture d'écran du site Nolark"
            />
          </Container>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item style={{ textAlign: "center" }}>
              <a
                href="https://github.com/carlfremault/Nolark"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<GitHubIcon />}
                >
                  GitHub repo
                </Button>
              </a>
              <a
                href="/pdf/CompteRenduNolark.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  style={theme.contrastButton}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Compte rendu de l&apos;analyse
                </Button>
              </a>
            </Grid>
          </Grid>
          <Container maxWidth="md">
            <Typography variant="h6" style={{ margin: "2rem 0" }}>
              27 novembre 2020
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "1rem 0" }}
            >
              Pour cette activité nous avons commencé par l&apos;analyse du site Nolark pour vérifier la conformité aux législations : RGPD, droit d&apos;auteur du contenu multimédia, nom de domaine.
              <Typography
                variant="body1"
                align="justify"
                style={{ margin: "1rem 0" }}
              >
              </Typography>
              Après installation des outils &apos;habituels&apos; (JDK Java, IDE Netbeans, Wampserver) nous avons installé le site web ainsi que sa base de données en local afin de corriger quelques dysfonctionnements dans le code HTML relevés par le validateur HTML du W3C.
              <Typography
                variant="body1"
                align="justify"
                style={{ margin: "1rem 0" }}
              >
              </Typography>
              Ensuite nous avons apporté des améliorations pour la page des CGU en appliquant des règles CSS, et nous avons ajouté une page avec un simulateur de test d&apos;alcoolémie, en faisant un prototype avec Pencil, et en respectant la charte graphique du site. Nous avons fait les corrections nécessaires dans un script JavaScript pour interagir avec le nouveau formulaire.
              <Typography
                variant="body1"
                align="justify"
                style={{ margin: "1rem 0" }}
              >
              </Typography>
              Pour optimiser les résultats des moteurs de recherche (SEO) nous avons implémenté un fichier &apos;sitemap.xml&apos; et corrigé le fichier &apos;robots.txt&apos; pour signaler ce nouveau sitemap et pour autoriser les robots à scanner le site. Nous avons également ajouté des balises &apos;strong&apos; pour signaler le contenu du site aux robots et implémenté l&apos;utilisation de balises HTML sémantiques.
              <Typography
                variant="body1"
                align="justify"
                style={{ margin: "1rem 0" }}
              >
              </Typography>
              Pour finir, nous avons mis le site &apos;en ligne&apos; sur une machine virtuelle serveur Linux.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              style={{ margin: "4rem 0 1rem" }}
            >
              Les compétences officielles couvertes par cet exercice sont les suivantes :
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon style={{ transform: "translate(10px)" }}>
                  <CheckIcon color="secondary" />
                </ListItemIcon>
                <ListItemText>Développer la présence en lignde de l&apos;organisation</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Participer à la valorisation de l&apos;image de l&apos;organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Référencer les services en ligne de l&apos;organisation et mesurer leur visibilité</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText inset>- Participer à l&apos;évolution d&apos;un site Web exploitant les données de l&apos;organisation</ListItemText>
              </ListItem>
            </List>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={theme.contrastColor}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

DenombrementsDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default DenombrementsDialog;
