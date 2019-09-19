import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function FormDialog({ dialogIsOpen, closeModal, onOkModalClick, textValue }) {
    const [inputs, changeText] = useState({})

    const onChangeText = (e) => {
        console.log('e.target.id', e.target.id);

        changeText({ ...inputs, [e.target.id]: e.target.value })
    }
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            console.log('do validate');
            _onOkModalClick(inputs)

        }
    }
    const _onOkModalClick = (inputs) => {
        onOkModalClick(inputs)
        changeText({})
    }

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
                    value={inputs['schoolTitle']}
                    autoFocus
                    margin="dense"
                    id="schoolTitle"
                    label="Title"
                    type="text"
                    fullWidth
                    onKeyDown={onKeyDown}
                />
                <TextField
                    onChange={onChangeText}
                    value={inputs['city']}
                    margin="dense"
                    id="city"
                    label="City"
                    type="text"
                    fullWidth
                    onKeyDown={onKeyDown}
                />
                <TextField
                    onChange={onChangeText}
                    value={inputs['street']}
                    margin="dense"
                    id="street"
                    label="Street"
                    type="text"
                    fullWidth
                    onKeyDown={onKeyDown}

                />
                <TextField
                    onChange={onChangeText}
                    value={inputs['zipCode']}
                    margin="dense"
                    id="zipCode"
                    label="zipCode"
                    type="text"
                    fullWidth
                    onKeyDown={onKeyDown}
                />
                <TextField
                    onChange={onChangeText}
                    value={inputs['country']}
                    margin="dense"
                    id="country"
                    label="Country"
                    type="text"
                    fullWidth
                    onKeyDown={onKeyDown}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal} color="primary">
                    Cancel
            </Button>
                <Button onClick={() => _onOkModalClick(inputs)} color="primary">
                    Ok
             </Button>
            </DialogActions>
        </Dialog>

    );
}