import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useState } from "react";

const CGU = () => {
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
    <Typography variant="body2" color="primary">
      <a href="#" onClick={handleOpen} id="cgu">
        Conditions Générales d&apos;Utilisation
      </a>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Conditions Générales d&apos;Utilisation
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>En vigueur au 15/11/2020</Typography>
          <Typography gutterBottom align="justify">
            Conformément aux dispositions des Articles 6-III et 19 de la Loi
            n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie
            numérique, dite L.C.E.N., il est porté à la connaissance des
            Utilisateurs du site carlfremault.com les présentes mentions
            légales. La connexion et la navigation sur le site carlfremault.com
            par l&apos;Utilisateur implique acceptation intégrale et sans
            réserve des présentes mentions légales. Ces dernières sont
            accessibles sur le site à la rubrique « Conditions Générales
            d&apos;Utilisation ».
          </Typography>
          <Typography variant="h6" gutterBottom>
            ARTICLE 1 : L&apos;éditeur
          </Typography>
          <Typography gutterBottom align="justify">
            L&apos;édition et la direction de la publication du site
            carlfremault.com est assurée par Carl Fremault, domiciliée Immeuble
            Le Gebroulaz Apt 3 - 73440 Les Belleville, dont le numéro de
            téléphone est 06 09 45 40 93, et l&apos;adresse e-mail carlfremault
            at yahoo dot com.
          </Typography>
          <Typography variant="h6" gutterBottom>
            ARTICLE 2 : L&apos;hébergeur
          </Typography>
          <Typography gutterBottom align="justify">
            L&apos;hébergeur du site carlfremault.com est la Société Bluehost -
            Endurance International Group, dont le siège social est situé au 10
            Corporate drive - Suite #300 - Burlington, MA 01803 - USA.
          </Typography>
          <Typography variant="h6" gutterBottom>
            ARTICLE 3 : Accès au site
          </Typography>
          <Typography gutterBottom align="justify">
            Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de
            force majeure, interruption programmée ou non et pouvant découlant
            d&apos;une nécessité de maintenance. En cas de modification,
            interruption ou suspension des services le site carlfremault.com ne
            saurait être tenu responsable.
          </Typography>
          <Typography variant="h6" gutterBottom>
            ARTICLE 4 : Collecte des données
          </Typography>
          <Typography gutterBottom align="justify">
            Le site est exempté de déclaration à la Commission Nationale
            Informatique et Libertés (CNIL) dans la mesure où il ne collecte
            aucune donnée concernant les utilisateurs.
          </Typography>
          <Typography variant="h6" gutterBottom>
            ARTICLE 5 : Cookies
          </Typography>
          <Typography gutterBottom align="justify">
            L&apos;Utilisateur est informé que lors de ses visites sur le site,
            un cookie peut s&apos;installer automatiquement sur son logiciel de
            navigation. En naviguant sur le site, il les accepte. Un cookie est
            un élément qui ne permet pas d&apos;identifier l&apos;Utilisateur
            mais sert à enregistrer des informations relatives à la navigation
            de celui-ci sur le site Internet. L&apos;Utilisateur pourra
            désactiver ce cookie par l&apos;intermédiaire des paramètres
            figurant au sein de son logiciel de navigation.
          </Typography>
          <Typography variant="h6" gutterBottom>
            ARTICLE 6 : Propriété intellectuelle
          </Typography>
          <Typography gutterBottom align="justify">
            Toute utilisation, reproduction, diffusion, commercialisation,
            modification de toute ou partie du site carlfremault.com, sans
            autorisation de l&apos;Editeur est prohibée et pourra entraînée des
            actions et poursuites judiciaires telles que notamment prévues par
            le Code de la propriété intellectuelle et le Code civil.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={theme.cguButton}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </Typography>
  );
};

export default CGU;
