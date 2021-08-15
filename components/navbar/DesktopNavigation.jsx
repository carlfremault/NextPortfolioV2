import PropTypes from "prop-types";
import { Tab, Tabs } from "@material-ui/core";
import { useState } from "react";

const DesktopNavigation = ({ menu }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} centered>
      {menu.map((item) => (
        <Tab key={item.item} label={item.item} href={item.path} />
      ))}
    </Tabs>
  );
};

DesktopNavigation.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default DesktopNavigation;
