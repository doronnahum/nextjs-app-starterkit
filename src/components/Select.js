import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function SimpleSelect({ floorNumber, handleFloorNumberChange }) {
    const classes = useStyles();
    // const [value, setValues] = React.useState('');

    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    // function handleChange(event) {
    //     setValues(oldValues => ({
    //         ...oldValues,
    //         [event.target.name]: event.target.value,
    //     }));
    // }

    const renderMenuItems = () => {
        const maxIndex = 20
        const arr = []
        let i = 1
        while (i <= maxIndex) {
            arr.push(i)
            i++
        }
        return arr.map((floorNumber) => {
            return <MenuItem key={floorNumber} value={floorNumber}>{floorNumber}</MenuItem>
        })
    }
    return (

        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Floor number</InputLabel>
            <Select
                value={floorNumber}
                onChange={handleFloorNumberChange}
            // inputProps={{
            //     name: 'age',
            //     id: 'age-simple',
            // }}
            >
                {renderMenuItems()}
            </Select>
        </FormControl>

    );
}