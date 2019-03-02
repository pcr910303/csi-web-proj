const React = require("react");
import { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    margin: 'auto',
    width: 400,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  textfield: {
    width: 300,
  },
  button: {
    marginTop: theme.spacing.unit * 1.5,
  }
});

function SignUp(props) {
  const { classes } = props;

  const inputitems = [
    ["이름", 0], ["학번", 1], ["ID", 2], ["비밀번호", 3]
  ];

  const [inputInfo, setInputInfo] = useState(["", "", "", ""]);

  return (
    <div>
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <IconButton>
            <AccountCircle />
          </IconButton>
          <Typography variant="h6">Sign Up</Typography>
          {inputitems.map(item => (
            <TextField
              label={item[0]}
              key={item[0]}
              margin="dense"
              variant="outlined"
              required={true}
              onChange={e => { inputInfo[item[1]] = e.target.value; }}
              className={classes.textfield}
            />
          ))}
          <Button variant="contained" color="primary" className={classes.button}>Submit</Button>
        </Paper>
      </main>
    </div>
  );
}

export default withStyles(styles)(SignUp);
