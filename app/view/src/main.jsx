const React = require("react");
const ReactDOM = require("react-dom");
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Settings from '@material-ui/icons/Settings';
import Drawer from '@material-ui/core/Drawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import TimeTable from './timetable.jsx';
import Memo from './memo.jsx';
import DrawerItem from './draweritem.jsx';
import ScoreCalculator from './scorecalculator.jsx';

const styles = theme => ({
  menubutton: {
    marginLeft: '-1%',
    marginRight: '1.5%',
  },
  title: {
    flexGrow: 1,
  },
  settingicons: {
    marginRight: -10,
  },
  accounticons: {
    marginRight: -20,
  },
});

function Main(props) {
  const { classes } = props;
  const SignInLink = props => <Link to="/signin/" {...props} />

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [nowMainRender, setNowMainRender] = useState("timetable");

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <div>
    <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton onClick={toggleDrawer} color="inherit" className={classes.menubutton}>
            <MenuIcon />
          </IconButton>
          <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
            <DrawerItem />
          </Drawer>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Jirung World
          </Typography>
          {isLoggedIn ?
            <div>
              <IconButton color="inherit" className={classes.settingicons}>
                <Settings className={classes.settings} />
              </IconButton>
              <IconButton color="inherit" className={classes.accounticons}>
                <AccountCircle />
              </IconButton>
            </div>
            : <Button component={SignInLink} color="inherit">Sign In</Button> }
        </Toolbar>
      </AppBar>
      {nowMainRender === "timetable" ? <TimeTable /> :
      nowMainRender === "scorecalculator" ? <ScoreCalculator /> :
    <div></div>}
      <Memo />
    </div>
  );
}

export default withStyles(styles)(Main);
