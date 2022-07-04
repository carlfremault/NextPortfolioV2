import {
    Grid,
    IconButton,
} from "@material-ui/core";
import LangSwitcher from "./LangSwitcher";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ThemeSwitcher from "./ThemeSwitcher";

const MobileNavbar = ({ drawerState, drawerToggle }) => {
    return (
        <Grid
            container
            alignItems="center"
            direction="row"
            justifyContent="center"
            spacing={4}
        >
            <Grid item>
                <IconButton color="primary" onClick={drawerToggle}>
                    {drawerState ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>
            </Grid>
            <Grid item>
                <LangSwitcher />
            </Grid>
            <Grid item>
                <ThemeSwitcher />
            </Grid>
        </Grid>
    )
}

export default MobileNavbar;