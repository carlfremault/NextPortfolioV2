import { createTheme } from "@material-ui/core";

const theme = createTheme({
  // Overrides default theme
  palette: {
    primary: {
      main: "#0896A6",
    },
    secondary: {
      main: "#406E73",
    },
    background: {
      default: "#052026",
      paper: "#406E73",
    },
    text: {
      primary: "#D9D9D9",
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
  aproposButton: {
    borderColor: "#D9D9D9",
    fontFamily: "Roboto",
    fontWeight: 400,
    textTransform: "none",
    margin: "2rem 2rem",
    minWidth: "150px",
  },
  primaryButton: {
    borderColor: "#0896A6",
    color: "#0896A6",
    fontFamily: "Roboto",
    fontWeight: 400,
    textTransform: "none",
  },
  desktopNavButton: {
    margin: "0 2rem 0 2rem",
    color: "primary",
    textTransform: "capitalize",
  },
  heroButton: {
    fontFamily: "Roboto",
    fontWeight: 400,
    top: "1.5rem",
    borderColor: "#D9D9D9",
  },
  // Custom cards
  competenceCard: {
    backgroundColor: "#052026",
    boxShadow: "none",
    width: "250px",
  },
  projectCard: {
    backgroundColor: "#052026",
    boxShadow: "none",
    width: "350px",
    minHeight: "550px",
    position: "relative",
    marginTop: "3rem",
  },
  // Sections
  projectsSection: {
    backgroundColor: "#1E3C40",
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
  },
  // Hero
  heroContainer: {
    background: `url(/imgs/matthew-henry-VviFtDJakYk-unsplash.jpg) no-repeat top/cover`,
    height: "100vh",
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
    zIndex: -2,
  },
  opaqueLayer: {
    backgroundColor: "rgba(5, 32, 38, 0.7)",
    height: "100vh",
    zIndex: -1,
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
    color: "#D9D9D9",
    margin: "2rem 0 2rem 0",
  },
  appbar: {
    backgroundColor: "rgba(3, 12, 13, 0.8)",
  },
});

theme.typography.h1 = {
  fontWeight: 300,
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.75rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.75rem",
  },
};
theme.typography.h2 = {
  fontFamily: "'STIX Two Text', serif",
  fontWeight: 300,
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.75rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.75rem",
  },
};
theme.typography.h3 = {
  fontWeight: 300,
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.4rem",
  },
};
theme.typography.h4 = {
  fontWeight: 300,
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.125rem",
  },
};
theme.typography.h5 = {
  fontWeight: 300,
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.9rem",
  },
};

export default theme;
