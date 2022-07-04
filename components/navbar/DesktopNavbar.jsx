import { Grid } from "@material-ui/core";
import DesktopNavigation from "../navbar/DesktopNavigation";
import LangSwitcher from "./LangSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const DesktopNavbar = ({ desktopMenu }) => {
    return (
        <Grid
            container
            alignItems="center"
            direction="row"
            justifyContent="center"
        >
            <Grid item xs={4}>                
            </Grid>
            <Grid
                item
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                xs={4}
            >
                <DesktopNavigation menu={desktopMenu} />
            </Grid>
            <Grid
                item
                container
                alignItems="right"
                direction="row"
                justifyContent="flex-end"
                spacing={5}
                xs={4}
            >
                <Grid item>
                    <LangSwitcher />
                </Grid>
                <Grid item>
                    <ThemeSwitcher />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DesktopNavbar;