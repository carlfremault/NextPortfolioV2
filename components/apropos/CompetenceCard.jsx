import PropTypes from "prop-types";
import { useTheme } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

/**
 * Card for Competences component
 * @param {string} title - Card header
 * @param {array} items - Array of strings for list entries
 */
const CompetenceCard = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Grid
      item
      component={Card}
      style={theme.competenceCard}
      raised={false}
      data-testid="competenceCard"
    >
      <CardContent>
        <Typography variant="h5" color="secondary" align="center">
          {title}
        </Typography>
        <List>
          {items.map((item) => (
            <ListItem key={item}>
              <ListItemIcon style={{ transform: "translate(10px)" }}>
                <CheckIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Grid>
  );
};

CompetenceCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
export default CompetenceCard;
