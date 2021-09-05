import { createContext, useEffect, useState } from "react";
import "../styles/globals.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import darkTheme from "../theme/darkTheme";
import lightTheme from "../theme/lightTheme";

export const ColorContext = createContext();

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const appliedTheme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorContext.Provider value={{ darkMode, toggleDarkMode }}>
        <ThemeProvider theme={{ ...appliedTheme }}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorContext.Provider>
    </>
  );
}

export default MyApp;
