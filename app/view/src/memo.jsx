const React = require("react");
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  dialog: {

  },
  card: {
    paddingLeft: '6%',
    paddingRight: '6%',
  },
  select: {
    label: "기한 설정설정",
  },
  switch: {

  },
  collapse: {

  },
  datepicker: {
  },
  input: {
  },
  exitbutton: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  privacyboundselect: {
  }
});

function Memo(props) {
  const { classes } = props;

  const [open, setOpen] = useState(true);
  const [isDateUsed, setIsDateUsed] = useState(false);
  const [written, setWritten] = useState("");
  const [privacyBound, setPrivacyBound] = useState("private");

  let defaultDate = new Date();
  defaultDate.setHours(23);
  defaultDate.setMinutes(59);
  const [selectedDate, setSelectedDate] = useState(defaultDate);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleSelectedDate = date => (
    setSelectedDate(date)
  );

  function submit() {

  }

  return (
    <div>
      <Button onClick={handleOpen}>메모 쓰기</Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        className={classes.dialog}
      >
        <DialogTitle>메모 추가</DialogTitle>
        <DialogContent>
          <Card className={classes.card}>
            <FormControlLabel
              control={<Switch
                          checked={isDateUsed}
                          onChange={e => { setIsDateUsed(e.target.checked); }}
                          className={classes.switch}/>}
              label="기한 설정"
              labelPlacement="start"
              className={classes.select}
            />
            <Collapse in={isDateUsed} timeout="auto" className={classes.collapse}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  label="날짜"
                  margin="normal"
                  value={selectedDate}
                  onChange={handleSelectedDate}
                  className={classes.datepicker}
                />
                <TimePicker
                  label="시간"
                  margin="normal"
                  value={selectedDate}
                  onChange={handleSelectedDate}
                />
              </MuiPickersUtilsProvider>
            </Collapse>
            <Input
              placeholder="내용 입력"
              multiline={true}
              fullWidth
              onChange={e => { setWritten(e.target.value); }}
              className={classes.input}
            />
            <FormControlLabel
              control={<Select
                          value={privacyBound}
                          onChange={e => setPrivacyBound(e.target.value)}>
                        <MenuItem value="private">Private</MenuItem>
                        <MenuItem value="public">Public</MenuItem>
                        </Select>}
              label="공개 범위 설정"
              labelPlacement="start"
            />
            <div className={classes.exitbutton}>
              <Button color="primary" onClick={handleClose}>Cancel</Button>
              <Button color="primary" onClick={submit}>Ok</Button>
            </div>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(Memo);
