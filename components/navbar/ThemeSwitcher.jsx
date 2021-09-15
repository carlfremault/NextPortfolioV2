import { Switch } from "@material-ui/core";
import { useContext } from "react";
import { ColorContext } from "../../pages/_app";
import Brightness4Icon from "@material-ui/icons/Brightness4";

/**
 * Button allowing to switch between dark and light theme
 */
const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useContext(ColorContext);

  return (
    <div style={{ alignItems: "center", display: "flex", flexWrap: "wrap" }}>
      <Brightness4Icon color="primary" />
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        name="ThemeSwitch"
        aria-label="Button to change website color theme"
        data-testid="themeSwitcher"
      />
    </div>
  );
};

export default ThemeSwitcher;
