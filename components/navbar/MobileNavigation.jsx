import PropTypes from "prop-types";
import { Drawer, Grid, List, Typography } from "@material-ui/core";
import { useContext } from "react";
import { useTheme } from "@material-ui/styles";
import { LanguageContext } from "../../pages/_app";
import { Link } from "react-scroll";

/**
 * Drawer for mobile navigation (below 960px)
 * @param {boolean} drawerOpen - Defines if Drawer is open or not
 * @param {array} menu - Array of objects, one for each menu item
 * @param {string} variant - Mui Drawer variant
 */
const MobileNavigation = ({ drawerOpen, menu, variant }) => {
  const theme = useTheme();
  const { langFR } = useContext(LanguageContext);

  return (
    <Drawer variant={variant} anchor="top" open={drawerOpen}>
      <List>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {menu.map((item) => (
            <Link
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              key={item.itemGB}
            >
              <Typography style={theme.mobileNavLink}>{langFR ? item.itemFR : item.itemGB}</Typography>
            </Link>
          ))}
        </Grid>
      </List>
    </Drawer>
  );
};

MobileNavigation.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  menu: PropTypes.array.isRequired,
  variant: PropTypes.string.isRequired,
};

export default MobileNavigation;
