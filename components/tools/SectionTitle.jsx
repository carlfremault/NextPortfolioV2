import PropTypes from "prop-types";
import { Container, Typography } from "@material-ui/core";

/**
 * Section title with appropriate spacing
 * @param {string} title
 */
const SectionTitle = ({ title }) => {
  return (
    <Container
      style={{
        marginTop: "4rem",
        marginBottom: "3rem",
      }}
    >
      <Typography variant="h1" color="primary" align="center">
        {title}
      </Typography>
    </Container>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
