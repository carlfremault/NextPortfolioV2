import "../styles/globals.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
