import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from 'src/components/Select';
import Switch from 'src/components/Switch';


export default function FormDialog({ dialogIsOpen, closeModal, onOkModalClick, onChangeText, buildingTitle, room }) {

    // const renderElements = (elements) => {
    //     return elements.map(element => {
    //         return <div style={{ display: 'flex', flex: 'row' }}>
    //             <div key={element.id}>{element.name}</div>
    //             <Switch />
    //         </div>
    //     })
    // }

    return (
        <Dialog open={dialogIsOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">set a title</DialogTitle>
            <DialogContent>
                {/* <DialogContentText> */}
                {/* To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. */}
                {/* </DialogContentText> */}
                <TextField
                    onChange={onChangeText}
                    value={buildingTitle}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault()
                            console.log('do validate');
                            onOkModalClick()
                        }
                    }}
                />
                {/* {renderElements(room.elements)} */}
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