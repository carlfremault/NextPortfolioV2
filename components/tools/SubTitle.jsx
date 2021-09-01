import PropTypes from "prop-types";
import { Container, Typography } from "@material-ui/core";

const SubTitle = ({ title }) => {
  return (
    <Container
      style={{
        marginTop: "3rem",
        marginBottom: "2rem",
      }}
    >
      <Typography variant="h3" color="primary" align="center">
        {title}
      </Typography>
    </Container>
  );
};

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SubTitle;
