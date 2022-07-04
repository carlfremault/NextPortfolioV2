import PropTypes from "prop-types";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const DialogList = ({ listItems, theme }) => {
    return (
        <List>
            {listItems.map((item, index) => (
                <ListItem key={index}>
                    <ListItemIcon>
                        <ArrowRightIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText>
                        {item.linkRef && <a
                            href={item.linkRef}
                            target="_blank"
                            rel="noreferrer"
                            style={theme.heroLink}
                        >
                            {item.linkText}
                        </a>}
                        {item.linkRef && " "}
                        {item.text}
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    )
}

DialogList.propTypes = {
    listItems: PropTypes.array.isRequired,
};

export default DialogList;