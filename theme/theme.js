import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0896A6",
    },
    secondary: {
      main: "#0889A6",
    },
    background: {
      default: "#052026",
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
});

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

theme.typography.h4 = {
  fontWeight: 300,
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.125rem",
  },
};

export default theme;
