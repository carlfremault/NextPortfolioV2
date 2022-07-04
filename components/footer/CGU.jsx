import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { useTheme } from "@material-ui/styles";
import { useState } from "react";
import { LanguageContext } from "../../pages/_app";

const CGU = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const { langFR } = useContext(LanguageContext);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div data-testid="cgu">
      <Typography variant="body2" color="primary">
        <a href="#" onClick={handleOpen} data-testid="cguLink">
          {langFR ? "Conditions Générales d'Utilisation" : "Terms of use"}
        </a>
      </Typography>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle data-testid="cguDialogTitle">
        {langFR ? "Conditions Générales d'Utilisation" : "Terms of use"}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{langFR ? "En vigueur au 01/07/2022" : "Valid on 01/07/2022"}</Typography>
          <Typography gutterBottom align="justify">
            {langFR ? "Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site carlfremault.com les présentes mentions légales. La connexion et la navigation sur le site carlfremault.com par l'Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le site à la rubrique « Conditions Générales d'Utilisation »." 
            : 
            "In accordance with the Articles 6-III and 19 of the Law n°2004-575 of 21 June 2004 for the Confidence of the Online Economy (Loi pour la Confiance dans l'économie numérique, L.C.E.N.), the present terms of use are brought to the attention to all users of the site carlfremault.com. Connection to and navigation on the site by the User implies full and unreserved acceptance of the present terms of use. These are available on the website under the heading 'Terms of use'."}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {langFR ? "ARTICLE 1 : L'éditeur" : "1. The editor"}
          </Typography>
          <Typography gutterBottom align="justify">
            {langFR ? "L'édition et la direction de la publication du site carlfremault.com est assurée par Carl Fremault, domiciliée Immeuble Le Gebroulaz Apt 3 - 73440 Les Belleville, dont le numéro de téléphone est 06 09 45 40 93, et l'adresse e-mail carlfremault at yahoo dot com."
            :
            "The site carlfremault.com is edited and published by Carl Fremault, resident at Immeuble Le Gebroulaz Apt 3 - 73440 Les Belleville, with phone number 06 09 45 40 93 and email address carlfremault at yahoo dot com."}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {langFR ? "ARTICLE 2 : L'hébergeur" : "2. Hosting"}
          </Typography>
          <Typography gutterBottom align="justify">
            {langFR ? "L'hébergeur du site carlfremault.com est la Société Vercel - 1046 Kearny St - San Francisco, CA - USA."
            :
            "The site carlfremault.com is hosted by Vercel - 1046 Kearny St - San Francisco, CA - USA."}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {langFR ? "ARTICLE 3 : Accès au site" : "3. Website access"}
          </Typography>
          <Typography gutterBottom align="justify">
            {langFR ? "Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d'une nécessité de maintenance. En cas de modification, interruption ou suspension des services le site carlfremault.com ne saurait être tenu responsable."
            :
            "The site is accessible anywhere, 7/7 24/24 except in the event of force majeure, scheduled or unscheduled interruption, and which may result from a need for maintenance. In the event of modification, interruption or suspension of services the site carlfremault.com cannot be held responsible."}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {langFR ? "ARTICLE 4 : Collecte des données" : "4. Data collection"}
          </Typography>
          <Typography gutterBottom align="justify">
            {langFR ? "Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs."
            :
            "The site is exempt from declaration at the French Data Protection Authority (Commission Nationale Informatique et Libertés) as no user information is collected."}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {langFR ? "ARTICLE 5 : Cookies" : "5. Cookies"}
          </Typography>
          <Typography gutterBottom align="justify">
            {langFR ? "L'Utilisateur est informé que lors de ses visites sur le site, un cookie de tiers peut s'installer automatiquement sur son logiciel de navigation. En naviguant sur le site, il les accepte. Un cookie est un élément qui ne permet pas d'identifier l'Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L'Utilisateur pourra désactiver ce cookie par l'intermédiaire des paramètres figurant au sein de son logiciel de navigation. LE site carlfremault.com même n'utilise pas de cookies."
            :
            "The User is hereby informed that a third party cookie could automatically be installed on his browser while visiting the website. By visiting the site the User accepts this. A cookie is an element which does not allow the User's identification, but registers information relative to his visit. The User can deactivate this cookie in his browser settings. The website carlfremault.com does not use cookies."}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {langFR ? "ARTICLE 6 : Propriété intellectuelle" : "6. Intellectual Property"}
          </Typography>
          <Typography gutterBottom align="justify">
            {langFR ? "Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site carlfremault.com, sans autorisation de l'Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil."
            :
            "All use, reproduction, distribution, commercilization, modification of all or part of the website carlfremault.com without previous consent by the Editor is prohibited and could result in legal actions and proceedings as provided for in particular by the Intellectual Property Code and the Civil Code."}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={theme.contrastColor}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CGU;
