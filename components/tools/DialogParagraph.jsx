import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const DialogParagraph = ({ paragraphText }) => {
    return (
        <Typography
            variant="body1"
            align="justify"
            style={{ margin: "1rem 0" }}
        >
            {paragraphText}
        </Typography>
    )
}

DialogParagraph.propTypes = {
    paragraphText: PropTypes.string.isRequired,
};

export default DialogParagraph;