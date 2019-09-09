import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function FormDialog({ dialogIsOpen, closeModal, onOkModalClick, onChangeText, textValue }) {
    return (
        <Dialog open={dialogIsOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">set a title</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {/* To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. */}
                </DialogContentText>
                <TextField
                    onChange={onChangeText}
                    value={textValue}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            console.log('do validate');
                            onOkModalClick()
                            closeModal()
                        }
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal} color="primary">
                    Cancel
          </Button>
                <Button onClick={onOkModalClick} color="primary">
                    Ok
          </Button>
            </DialogActions>
        </Dialog>

    );
}