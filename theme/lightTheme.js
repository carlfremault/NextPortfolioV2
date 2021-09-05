import { createTheme } from "@material-ui/core";
import lightColors from "./lightColors";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: lightColors.primary,
    },
    secondary: {
      main: lightColors.secondary,
    },
    background: {
      default: lightColors.defaultBackground,
      paper: lightColors.paperBackground,
    },
    text: {
      primary: lightColors.contrast,
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
    borderColor: lightColors.contrast,
    fontFamily: "Roboto",
    fontWeight: 400,
    margin: "1rem 0",
    minWidth: "150px",
    textTransform: "none",
  },
  primaryButton: {
    borderColor: lightColors.primary,
    color: lightColors.primary,
    fontFamily: "Roboto",
    fontWeight: 400,
    margin: "0.2rem 0",
    textTransform: "none",
  },
  desktopNavButton: {
    color: lightColors.primary,
    margin: "0 2rem 0 2rem",
    textTransform: "capitalize",
  },
  contrastColor: {
    color: lightColors.contrast,
  },
  // Custom cards
  competenceCard: {
    backgroundColor: lightColors.defaultBackground,
    boxShadow: "none",
    width: "250px",
  },
  projectCard: {
    backgroundColor: lightColors.defaultBackground,
    boxShadow: "none",
    marginBottom: "2rem",
    minHeight: "550px",
    position: "relative",
    width: "350px",
  },
  // Dialog
  dialog: {
    backgroundColor: lightColors.paperBackground,
    color: lightColors.contrast,
  },
  // Sections
  lightBackgroundSection: {
    backgroundColor: lightColors.lightBackground,
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
  },
  footer: {
    backgroundColor: lightColors.footerBackground,
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
    background: lightColors.heroImage,
    height: "100vh",
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
    zIndex: -2,
  },
  opaqueLayer: {
    backgroundColor: lightColors.opaqueLayerHero,
    height: "100vh",
    zIndex: -1,
  },
  heroButton: {
    borderColor: lightColors.contrast,
    fontFamily: "Roboto",
    fontWeight: 400,
    top: "1.5rem",
  },
  heroLink: {
    color: lightColors.primary,
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
    color: lightColors.contrast,
    margin: "2rem 0 2rem 0",
  },
  appbar: {
    backgroundColor: lightColors.navbarBackgroundOpaque,
  },
});

lightTheme.typography.h1 = {
  fontWeight: 300,
  [lightTheme.breakpoints.only("xs")]: {
    fontSize: "1.75rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "2.75rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "3.75rem",
  },
};
lightTheme.typography.h2 = {
  fontFamily: "'STIX Two Text', serif",
  fontWeight: 300,
  [lightTheme.breakpoints.only("xs")]: {
    fontSize: "1.75rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "2.75rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "3.75rem",
  },
};
lightTheme.typography.h3 = {
  fontWeight: 300,
  [lightTheme.breakpoints.only("xs")]: {
    fontSize: "1.7rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.9rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "2.4rem",
  },
};
lightTheme.typography.h4 = {
  fontWeight: 300,
  [lightTheme.breakpoints.only("xs")]: {
    fontSize: "1.5rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "2.125rem",
  },
};
lightTheme.typography.h5 = {
  fontWeight: 300,
  [lightTheme.breakpoints.only("xs")]: {
    fontSize: "1.2rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.4rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "1.9rem",
  },
};

export default lightTheme;
