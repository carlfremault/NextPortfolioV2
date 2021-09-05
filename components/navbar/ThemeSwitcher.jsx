import { Switch } from "@material-ui/core";
import { useContext } from "react";
import { ColorContext } from "../../pages/_app";

const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useContext(ColorContext);

  return (
    <Switch checked={darkMode} onChange={toggleDarkMode} name="ThemeSwitch" />
  );
};

export default ThemeSwitcher;
