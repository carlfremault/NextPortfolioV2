import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Link } from "react-scroll";

/**
 * Navbar for desktop navigation (960px and more)
 * @param {Array} menu - Array of objects, one for each menu item
 */
const DesktopNavigation = ({ menu }) => {
  const theme = useTheme();

  return (
    <>
      {menu.map((item) => (
        <Link
          to={item.path}
          spy={true}
          smooth={true}
          offset={item.offset}
          duration={500}
          key={item.item}
        >
          <Button>
            <Typography
              variant="subtitle1"
              color="primary"
              style={theme.desktopNavButton}
            >
              {item.item}
            </Typography>
          </Button>
        </Link>
      ))}
    </>
  );
};

DesktopNavigation.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default DesktopNavigation;
