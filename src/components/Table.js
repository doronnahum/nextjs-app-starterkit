import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TYPES } from 'src/components/data'
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import { calculate } from 'src/components/data/tableUtils';

const useStyles = makeStyles(theme => ({
    root: {
        // width: '100%',
        // marginTop: theme.spacing(3),
        // overflowX: 'auto',
    },
    table: {
        // width: 600,
    },
    tableTitle: {
        fontSize: 20
    },
    TableCell: {

    }
}));

export default function SimpleTable(props) {
    const { tableTitle, data } = props
    const classes = useStyles();

    const [values, setValues] = React.useState({});
    console.log('values', values);

    const influencingValues = [values.d10, values.d11, values.d21, values.d22]

    useEffect(() => {
        updateReadOnlyValues()
    }, influencingValues)

    const updateReadOnlyValues = () => {
        if (values.d10 && values.d11) { // d12
            const res = values.d10 - values.d11
            setValues({ ...values, d12: res });
        }
        if (values.d21 && values.d22) { // d12
            const res = values.d21 - values.d22
            setValues({ ...values, d23: res });
        }
    }

    const handleInputChange = event => {
        setValues({ ...values, [event.target.id]: event.target.value })
    };

    const handleSelectChange = event => {
        setValues({ ...values, [event.target.id]: event.target.value });
    };

    const onChangeSlider = (event, val, location) => {
        setValues({ ...values, [location]: val });
    };

    function valuetext(value) {
        return `${value}`;
    }

    const getMarks = (row) => {
        if (!row) return [];
        let arr = []
        let i = row.min
        while (i <= row.max) {
            arr.push({ value: i })
            i += row.ticks
        }
        // if we want lables in the  edges of the slider
        // if (arr.length) { 
        //     debugger
        //     arr[0].label = row.min.toString()
        //     arr[arr.length - 1].label = row.max.toString()
        // }
        return arr
    }

    const renderValueType = (row) => {
        switch (row.type) {
            case TYPES.NUMERIC:
                return <Input
                    id={row.location}
                    label="Number"
                    value={values[row.location] || ''}
                    onChange={handleInputChange}
                    type="tel"
                    className={classes.textField}

                />
            case TYPES.RANGE:
                return <Slider
                    defaultValue={Math.floor((row.min + row.max) / 2)}
                    getAriaValueText={valuetext}
                    onChange={(e, val) => onChangeSlider(e, val, row.location)}
                    aria-labelledby="discrete-slider-always"
                    step={row.ticks}
                    min={row.min}
                    max={row.max}
                    marks={getMarks(row)}
                    valueLabelDisplay="on"
                />
            case TYPES.SELECT:
                return <Select
                    id={row.location}
                    native
                    value={values[row.location]}
                    onChange={handleSelectChange}
                // inputProps={{
                //     name: 'age',
                //     // id: 'age-native-simple',
                // }}
                >
                    {row.data.map((item, i) => {
                        return <option key={i} value={item}>{item}</option>
                    })}
                </Select>
            case TYPES.NOT_EDITABLE:
                return <Input
                    id={row.location}
                    value={values[row.location] || ''}
                    readOnly
                    className={classes.textField}
                />
            default:
                return row.type
        }
    }

    const renderTableData = () => {
        if (!data) return (
            <TableRow>
                <TableCell align="left" className={classes.TableCell}>
                    no data
                </TableCell>
            </TableRow>
        )
        return data.map(row => (
            <TableRow key={row.name}>
                <TableCell align="left" className={classes.TableCell}>
                    {row.name}
                </TableCell>
                <TableCell align="left">{row.value}</TableCell>
                <TableCell align="left">{renderValueType(row)}</TableCell>
            </TableRow>
        ))
    }
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableTitle} align="left">{tableTitle}</TableCell>
                        <TableCell align="left">Value</TableCell>
                        <TableCell align="left">Units</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderTableData()}
                </TableBody>
            </Table>
        </Paper>
    );
}
