import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Grid,
  Slide,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: { backgroundColor: "rgba(3, 12, 13, 0.5)" },
});

const menu = ["Accueil", "À Propos", "Projets", "Curriculum Vitae"];

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Navbar = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar className={classes.root}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Tabs value={value} onChange={handleChange} centered>
              {menu.map((el) => (
                <Tab key={el} label={el} />
              ))}
            </Tabs>
          </Grid>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
