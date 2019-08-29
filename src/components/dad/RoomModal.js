import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Switch from 'src/components/Switch';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    return {
        top: 10,
        left: 10,
        // transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const renderElements = (elements) => {
    return elements.map(element => {
        return <div style={{ display: 'flex', flex: 'row' }}>
            <div key={element.id}>{element.name}</div>
            <Switch />
        </div>
    })
}
export default function SimpleModal({ room }) {
    if (!room) return 'no room!'
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open room
           </button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>{room.title}</h2>

                    {renderElements(room.elements)}
                </div>
            </Modal>
        </div>
    );
}