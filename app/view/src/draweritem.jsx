const React = require("react");
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TimeTableIcon from '@material-ui/icons/EventNote';
import ChartIcon from '@material-ui/icons/InsertChart';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  drawer: {
    width: 250,
  },
});

function DrawerItem(props) {
  const { classes } = props;

  const ScoreCalculatorLink = props => <Link to="/scorecalculator/" {...props} />

  return (
    <div className={classes.drawer}>
    <CssBaseline />
      <List>
        <Divider />
        <ListItem button={true}>
          <ListItemIcon>
            <TimeTableIcon />
          </ListItemIcon>
          <ListItemText primary="시간표" />
        </ListItem>
        <Divider />
        <ListItem button={true} component={ScoreCalculatorLink}>
          <ListItemIcon>
            <ChartIcon />
          </ListItemIcon>
          <ListItemText primary="학점 계산기" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

export default withStyles(styles)(DrawerItem);
