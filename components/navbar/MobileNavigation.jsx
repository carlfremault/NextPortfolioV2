import PropTypes from "prop-types";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

const MobileNavigation = ({ drawerOpen, menu, variant }) => {
  return (
    <Drawer variant={variant} anchor="top" open={drawerOpen}>
      <List>
        {menu.map((item) => (
          <ListItem button key={item.item} href={item.path}>
            <ListItemText primary={item.item} />
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
