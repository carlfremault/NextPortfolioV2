import { Button, Container, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import SectionTitle from "../components/tools/SectionTitle";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import ReactPlayer from "react-player/lazy";

const E4 = () => {
    const theme = useTheme();

    return (
        <>
            <Navbar />
            <Container maxWidth={false} style={theme.lightBackgroundSection}>
                <SectionTitle title="Préparation à l'épreuve E4"/>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item style={{ textAlign: "center" }}>
                        <a
                            href="/pdf/TableauSynthese.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button
                                variant="outlined"
                                style={theme.contrastButton}
                                startIcon={<PictureAsPdfIcon />}
                            >
                                Tableau de synthèse
                            </Button>
                        </a>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    style={{ margin: "2rem 0" }}
                >
                    <ReactPlayer
                        url="../../video/PresentationE4.mkv"
                        controls
                        config={{
                            file: {
                                attributes: {
                                    controlsList: "nodownload",
                                },
                            },
                        }}
                    />
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default E4;
