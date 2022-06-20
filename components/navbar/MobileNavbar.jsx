import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@material-ui/styles";
import {
    AppBar,
    Grid,
    Hidden,
    IconButton,
    Slide,
    Toolbar,
    useScrollTrigger,
} from "@material-ui/core";
import DesktopNavigation from "../navbar/DesktopNavigation";
import MobileNavigation from "../navbar/MobileNavigation";
import LangSwitcher from "./LangSwitcher";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ThemeSwitcher from "./ThemeSwitcher";
import Menu from "./Menu";

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