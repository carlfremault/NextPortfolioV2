import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@material-ui/styles";
import {
  AppBar,
  Hidden,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import DesktopNavbar from "./DesktopNavbar";
import Menu from "./Menu";
import MobileNavbar from "./MobileNavbar";
import MobileNavigation from "../navbar/MobileNavigation";

// Navigation items
const menu = Menu();

// Functionality for navbar disappearing when scrolling down, reappearing when scrolling up
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

/**
 * Navbar component displays 'classic' navbar at page top for desktop navigation (960px and more),
 * and Drawer for Mobile navigation (below 960px)
 * Navigation items handled with 'menu' array of objects
 * Navbar disappears when scrolling down, reappears when scrolling up
 */
const Navbar = (props) => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const node = useRef();

  // A click outside of the toolbar sets drawer to 'closed'
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
        <AppBar style={theme.appbar}>
          <div ref={node}>
            <Toolbar>
              <Hidden smDown>
                <DesktopNavbar desktopMenu={menu} />
              </Hidden>
              <Hidden mdUp>
                <MobileNavbar drawerState={openDrawer} drawerToggle={toggleDrawer} />
              </Hidden>
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
