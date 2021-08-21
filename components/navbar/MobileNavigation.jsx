import PropTypes from "prop-types";
import { Drawer, Grid, List, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: theme.palette.secondary.main,
  },
  links: {
    color: "white",
    margin: "1rem 0 1rem 0",
  },
}));

const MobileNavigation = ({ drawerOpen, menu, variant }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant={variant}
      anchor="top"
      open={drawerOpen}
      classes={{ paper: classes.paper }}
    >
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
              key={item.item}
            >
              <Typography className={classes.links}>{item.item}</Typography>
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
