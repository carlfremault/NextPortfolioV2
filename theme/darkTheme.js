import { createTheme } from "@material-ui/core";
import darkColors from "./darkColors";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: darkColors.primary,
    },
    secondary: {
      main: darkColors.secondary,
    },
    background: {
      default: darkColors.defaultBackground,
      paper: darkColors.paperBackground,
    },
    text: {
      primary: darkColors.contrast,
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    subtitle1: {
      fontWeight: 300,
    },
  },
  // Custom buttons
  contrastButton: {
    borderColor: darkColors.contrast,
    fontFamily: "Roboto",
    fontWeight: 400,
    margin: "1rem 0",
    minWidth: "150px",
    textTransform: "none",
  },
  primaryButton: {
    borderColor: darkColors.primary,
    color: darkColors.primary,
    fontFamily: "Roboto",
    fontWeight: 400,
    margin: "0.2rem 0",
    textTransform: "none",
  },
  desktopNavButton: {
    color: darkColors.primary,
    margin: "0 2rem 0 2rem",
    textTransform: "capitalize",
  },
  contrastColor: {
    color: darkColors.contrast,
  },
  // Custom cards
  competenceCard: {
    backgroundColor: darkColors.defaultBackground,
    boxShadow: "none",
    width: "250px",
  },
  projectCard: {
    backgroundColor: darkColors.defaultBackground,
    boxShadow: "none",
    marginBottom: "2rem",
    minHeight: "550px",
    position: "relative",
    width: "350px",
  },
  // Dialog
  dialog: {
    backgroundColor: darkColors.paperBackground,
    color: darkColors.contrast,
  },
  // Sections
  lightBackgroundSection: {
    backgroundColor: darkColors.lightBackground,
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
  },
  footer: {
    backgroundColor: darkColors.darkBackground,
    minHeight: "15vh",
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
  },
  footerContainer: {
    maxWidth: "95vw",
  },
  // Hero
  heroContainer: {
    background: darkColors.heroImage,
    height: "100vh",
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
    zIndex: -2,
  },
  opaqueLayer: {
    backgroundColor: darkColors.opaqueLayerHero,
    height: "100vh",
    zIndex: -1,
  },
  heroButton: {
    borderColor: darkColors.contrast,
    fontFamily: "Roboto",
    fontWeight: 400,
    top: "1.5rem",
  },
  heroLink: {
    color: darkColors.primary,
  },
  heroGrid: {
    height: "100vh",
  },
  credits: {
    position: "absolute",
    bottom: 5,
    right: 10,
  },
  // Other
  mobileNavLink: {
    color: darkColors.contrast,
    margin: "2rem 0 2rem 0",
  },
  appbar: {
    backgroundColor: darkColors.darkBackgroundOpaque,
  },
});

darkTheme.typography.h1 = {
  fontWeight: 300,
  [darkTheme.breakpoints.only("xs")]: {
    fontSize: "1.75rem",
  },
  [darkTheme.breakpoints.up("sm")]: {
    fontSize: "2.75rem",
  },
  [darkTheme.breakpoints.up("lg")]: {
    fontSize: "3.75rem",
  },
};
darkTheme.typography.h2 = {
  fontFamily: "'STIX Two Text', serif",
  fontWeight: 300,
  [darkTheme.breakpoints.only("xs")]: {
    fontSize: "1.75rem",
  },
  [darkTheme.breakpoints.up("sm")]: {
    fontSize: "2.75rem",
  },
  [darkTheme.breakpoints.up("lg")]: {
    fontSize: "3.75rem",
  },
};
darkTheme.typography.h3 = {
  fontWeight: 300,
  [darkTheme.breakpoints.only("xs")]: {
    fontSize: "1.7rem",
  },
  [darkTheme.breakpoints.up("sm")]: {
    fontSize: "1.9rem",
  },
  [darkTheme.breakpoints.up("lg")]: {
    fontSize: "2.4rem",
  },
};
darkTheme.typography.h4 = {
  fontWeight: 300,
  [darkTheme.breakpoints.only("xs")]: {
    fontSize: "1.5rem",
  },
  [darkTheme.breakpoints.up("sm")]: {
    fontSize: "2.125rem",
  },
};
darkTheme.typography.h5 = {
  fontWeight: 300,
  [darkTheme.breakpoints.only("xs")]: {
    fontSize: "1.2rem",
  },
  [darkTheme.breakpoints.up("sm")]: {
    fontSize: "1.4rem",
  },
  [darkTheme.breakpoints.up("lg")]: {
    fontSize: "1.9rem",
  },
};

export default darkTheme;
