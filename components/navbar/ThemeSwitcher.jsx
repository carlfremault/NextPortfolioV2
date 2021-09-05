import { Switch } from "@material-ui/core";
import { useContext } from "react";
import { ColorContext } from "../../pages/_app";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useContext(ColorContext);

  return (
    <div style={{ alignItems: "center", display: "flex", flexWrap: "wrap" }}>
      <Brightness4Icon color="primary" />
      <Switch checked={darkMode} onChange={toggleDarkMode} name="ThemeSwitch" />
    </div>
  );
};

export default ThemeSwitcher;
