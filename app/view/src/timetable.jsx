const React = require("react");

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
 paper: {
   marginTop: theme.spacing.unit * 8,
   width: '55%',
   overflowX: 'auto',
 },
 table: {
   tableLayout: 'fixed',
   width: '100%',
 },
 tablecell: {
   //align: 'left',
   border: '1px solid',
   borderCollapse: 'collapse',
 },
});

function TimeTable(props) {
  const { classes } = props;

  const headcell = [
    "", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  ];

  return (
    <div>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {headcell.map(cell => (
                <TableCell align="justify" key={cell} className={classes.tablecell} onClick={e => console.log(cell)}>{cell}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>우와개발너무재밌다</TableCell>
              <TableCell>우와개발너무짜증나</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(TimeTable);
