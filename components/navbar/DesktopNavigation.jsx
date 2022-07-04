import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import { useTheme } from "@material-ui/styles";
import { LanguageContext } from "../../pages/_app";
import { Link } from "react-scroll";

/**
 * Navbar for desktop navigation (960px and more)
 * @param {Array} menu - Array of objects, one for each menu item
 */
const DesktopNavigation = ({ menu }) => {
  const theme = useTheme();
  const { langFR } = useContext(LanguageContext);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      wrap="nowrap"
    >
      {menu.map((item) => (
        <Grid
          item
          key={item.itemGB}
        >
          <Link
            to={item.path}
            spy={true}
            smooth={true}
            offset={item.offset}
            duration={500}
          >
            <Button>
              <Typography
                variant="subtitle1"
                color="primary"
                style={theme.desktopNavButton}
              >
                {langFR ? item.itemFR : item.itemGB}
              </Typography>
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

DesktopNavigation.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default DesktopNavigation;
