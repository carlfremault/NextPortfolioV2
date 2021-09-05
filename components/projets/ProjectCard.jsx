import PropTypes from "prop-types";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

/**
 * Hardcoded Project Card
 * CardHeader with title and subtitle
 * CardMedia with image
 * CardContent with text
 * CardActions with buttons in grid
 *  - one button to github or website
 *  - one button for dialog window 'more info'
 * Custom Dialog component needs open={open} and handleClose={handleClose} props
 */

/**
 * Project Card component
 * @param {string} title - Title for CardHeader
 * @param {string} subtitle - Subtitle for CardHeader
 * @param {string} image - Path to image for CardMedia
 * @param {number} imageHeight - Image height in pixels
 * @param {string} imageTitle - Alt title for image
 * @param {string} cardText - Short introductory text
 * @param {string} repoLink - optional - link to GitHub repo
 * @param {string} siteLink - optional - link to website
 * @param {object} dialog - Dialog component linked to card
 */
const ProjectCard = ({
  title,
  subtitle,
  image,
  imageHeight,
  imageTitle,
  cardText,
  repoLink,
  siteLink,
  dialog,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DialogComponent = dialog;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "95%",
      }}
    >
      <CardHeader
        title={title}
        subheader={<Typography color="primary">{subtitle}</Typography>}
      />
      <CardMedia
        image={image}
        title={imageTitle}
        style={{ height: imageHeight }}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" align="justify">
          {cardText}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item>
            {repoLink ? (
              <a href={repoLink} target="_blank" rel="noreferrer">
                <Button
                  variant="outlined"
                  style={theme.primaryButton}
                  startIcon={<GitHubIcon />}
                >
                  GitHub repo
                </Button>
              </a>
            ) : (
              <a href={siteLink} target="_blank" rel="noreferrer">
                <Button
                  variant="outlined"
                  style={theme.primaryButton}
                  startIcon={<LinkIcon />}
                >
                  Visitez le site
                </Button>
              </a>
            )}
          </Grid>
          <Grid item>
            <a href="#" onClick={handleOpen}>
              <Button
                variant="outlined"
                style={theme.primaryButton}
                startIcon={<AddCircleOutlineIcon />}
              >
                Plus d&apos;infos
              </Button>
            </a>
          </Grid>
        </Grid>
      </CardActions>
      <DialogComponent open={open} handleClose={handleClose} />
    </div>
  );
};

ProjectCard.defaultProps = {
  repoLink: null,
  siteLink: null,
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  imageTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  repoLink: PropTypes.string,
  siteLink: PropTypes.string,
  dialog: PropTypes.object.isRequired,
};

export default ProjectCard;
