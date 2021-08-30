import { Container, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

/**
 * Footer component, contains contact info and General Conditions of Use link
 */
const Footer = () => {
  const theme = useTheme();

  return (
    <Container maxWidth={false} style={theme.footer}>
      <Container maxWidth="70vw">
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          style={{ margin: "3rem 0" }}
        >
          <Grid
            item
            xs={12}
            md={3}
            style={{
              textAlign: "center",
              margin: "1rem 0",
            }}
          >
            <Typography variant="body2" color="primary">
              &copy; 2021 Carl Fremault
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              textAlign: "center",
              margin: "1rem 0",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <MailOutlineIcon color="primary" />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="primary">
                  carlfremault (at) yahoo (dot) com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              textAlign: "center",
              margin: "1rem 0",
            }}
          >
            <Typography variant="body2" color="primary">
              Conditions Générales d&apos;Utilisation
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Footer;
