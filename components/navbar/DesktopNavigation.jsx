import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-scroll";

const DesktopNavigation = ({ menu }) => {
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
              style={{
                margin: "0 2rem 0 2rem",
                color: "primary",
              }}
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
