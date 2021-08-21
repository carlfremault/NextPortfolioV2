import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Grid,
  Hidden,
  IconButton,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import DesktopNavigation from "../navbar/DesktopNavigation";
import MobileNavigation from "../navbar/MobileNavigation";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

const useStyles = makeStyles({
  root: { backgroundColor: "rgba(3, 12, 13, 0.8)" },
});

const menu = [
  {
    item: "Accueil",
    path: "hero",
    offset: 0,
  },
  {
    item: "À Propos",
    path: "apropos",
    offset: -60,
  },
  {
    item: "Projets",
    path: "#",
  },
  {
    item: "Veille Informatique",
    path: "#",
  },
  {
    item: "CV",
    path: "#",
  },
];

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Navbar = (props) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpenDrawer(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <div ref={node}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Hidden smDown>
                  <DesktopNavigation menu={menu} />
                </Hidden>
                <Hidden mdUp>
                  <IconButton color="primary" onClick={toggleDrawer}>
                    {openDrawer ? <MenuOpenIcon /> : <MenuIcon />}
                  </IconButton>
                </Hidden>
              </Grid>
            </Toolbar>
          </div>
        </AppBar>
      </HideOnScroll>
      <MobileNavigation
        drawerOpen={openDrawer}
        variant="persistent"
        menu={menu}
      />
    </>
  );
};

export default Navbar;
