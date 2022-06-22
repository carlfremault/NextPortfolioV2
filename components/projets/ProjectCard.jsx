import PropTypes from "prop-types";
import { Button, Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import { useTheme } from "@material-ui/styles";
import { useState } from "react";
import { LanguageContext } from "../../pages/_app";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

/**
 * Project Card component
 * @param {string} title - Title for CardHeader
 * @param {string} subtitle - Subtitle for CardHeader
 * @param {string} image - Path to image for CardMedia
 * @param {string} imageTitle - Alt title for image
 * @param {string} cardText - Short introductory text
 * @param {string} repoLink - optional - link to GitHub repo
 * @param {string} siteLink - optional - link to website
 * @param {function} dialog - Dialog component linked to card
 */
const ProjectCard = ({
  title,
  subtitle,
  image,
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

  const { langFR } = useContext(LanguageContext);

  return (
    <Grid container direction="row">
      <Grid
        item
        xs={12}
        md={3}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ padding: "1rem" }}
      >
        <Image
          loader={myLoader}
          width="270px"
          height="156px"
          src={image}
          alt={imageTitle}
        />
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: "1.5rem" }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" color="primary">
          {subtitle}
        </Typography>
        <Typography variant="body1" align="justify">
          {cardText}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        style={{ padding: "1rem" }}
      >
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noreferrer">
            <Button
              variant="outlined"
              style={theme.primaryButton}
              startIcon={<GitHubIcon />}
            >
              GitHub repo
            </Button>
          </a>
        )}
        {siteLink && (
          <a
            href={siteLink}
            target="_blank"
            rel="noreferrer"
            data-testid="projectCardSiteLink"
          >
            <Button
              variant="outlined"
              style={theme.primaryButton}
              startIcon={<LinkIcon />}
            >
              Visitez le site
            </Button>
          </a>
        )}
        <a href="#" onClick={handleOpen} data-testid="projectCardMoreInfo">
          <Button
            variant="outlined"
            style={theme.primaryButton}
            startIcon={<AddCircleOutlineIcon />}
          >
            {langFR ? "Plus d'infos" : "Details"}
          </Button>
        </a>
        <DialogComponent open={open} handleClose={handleClose} />
      </Grid>
    </Grid>
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
  imageTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  repoLink: PropTypes.string,
  siteLink: PropTypes.string,
  dialog: PropTypes.func.isRequired,
};

export default ProjectCard;
