import { Button, Container, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import SectionTitle from "../components/tools/SectionTitle";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Dossier = () => {
    const theme = useTheme();

    return (
        <>
            <Navbar />
            <Container maxWidth={false} style={theme.lightBackgroundSection}>
                <SectionTitle title="Dossier épreuves E4 et E5" />
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item style={{ textAlign: "center" }}>
                        <a
                            href="/downloads/E4_FREMAULT_CARL_YVES_2022.zip"
                            rel="noreferrer"
                            download
                        >
                            <Button
                                variant="outlined"
                                style={theme.contrastButton}
                                startIcon={<DownloadForOfflineIcon />}
                            >
                                Dossier E4
                            </Button>
                        </a>
                        <a
                            href="/downloads/E5_FREMAULT_CARL_YVES_2022.zip"
                            rel="noreferrer"
                            download
                        >
                            <Button
                                variant="outlined"
                                style={theme.contrastButton}
                                startIcon={<DownloadForOfflineIcon />}
                            >
                                Dossier E5
                            </Button>
                        </a>
                    </Grid>
                </Grid>

            </Container>
            <Footer />
        </>
    );
};

export default Dossier;
