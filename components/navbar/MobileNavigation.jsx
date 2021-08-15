import PropTypes from "prop-types";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import Link from "next/link";

const linktext = {
  color: "#0896A6",
};

const MobileNavigation = ({ drawerOpen, menu, variant }) => {
  return (
    <Drawer variant={variant} anchor="top" open={drawerOpen}>
      <List>
        {menu.map((item) => (
          <ListItem button key={item.item}>
            <Link href={item.path} passHref>
              <ListItemText
                primary={item.item}
                primaryTypographyProps={{ style: linktext }}
              />
            </Link>
          </ListItem>
        ))}
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
