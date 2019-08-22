import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({ textValue, handleChange, dialogOpen, closeDialog, openDialog, dialogOkClick }) {
  const [open, setOpen] = React.useState(false);

  // function handleClickOpen() {
  //   setOpen(true);
  // }

  // function handleClose() {
  //   setOpen(false);
  // }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={openDialog}>
        Open form dialog
      </Button>
      <Dialog open={dialogOpen} onClose={closeDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please set a title for this room
          </DialogContentText>
          <TextField value={textValue} onChange={handleChange}
            autoFocus
            margin="dense"
            id="title"
            label="title"
            // type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={dialogOkClick} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}