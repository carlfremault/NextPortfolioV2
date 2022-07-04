import { Switch } from "@material-ui/core";
import { useContext } from "react";
import { LanguageContext } from "../../pages/_app";
import { FR, GB } from 'country-flag-icons/react/3x2'

/**
 * Button allowing to switch between dark and light theme
 */
const LangSwitcher = () => {
  const { langFR, toggleLanguage } = useContext(LanguageContext);

  return (
    <div style={{alignItems: "center", display: "flex"}}>
      <GB style={{width: '20px'}}/>
        <Switch
          checked={langFR}
          onChange={toggleLanguage}
          name="LangSwitch"
          data-testid="langSwitcher"
        />
        <FR style={{width: '20px'}}/>
    </div>
  );
};

export default LangSwitcher;
