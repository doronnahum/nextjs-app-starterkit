import { TYPES } from 'src/components/data'
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';

const handleInputChange = (event, updateTablesValues) => {
    updateTablesValues({ values: { [event.target.id]: event.target.value } })
};

const handleSelectChange = (event, updateTablesValues) => {
    updateTablesValues({ values: { [event.target.id]: event.target.value } })
};

const onChangeSlider = (event, val, location, updateTablesValues) => {
    updateTablesValues({ values: { [location]: val } })
};

function valuetext(value) {
    return `${value}`;
}

const getMarks = (row, ) => {
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

export const renderValueType = (row, updateTablesValues, tableValues, classes) => {
    switch (row.type) {
        case TYPES.NUMERIC:
            return <Input
                id={row.location}
                label="Number"
                value={tableValues[row.location] || ''}
                onChange={(e) => handleInputChange(e, updateTablesValues)}
                type="number"
                className={classes.textField}

            />
        case TYPES.RANGE:
            return <Slider
                defaultValue={Math.floor((row.min + row.max) / 2)}
                getAriaValueText={valuetext}
                onChange={(e, val) => onChangeSlider(e, val, row.location, updateTablesValues)}
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
                value={tableValues[row.location]}
                onChange={(e) => handleSelectChange(e, updateTablesValues)}
            >
                {row.data.map((item, i) => {
                    return <option key={i} value={item}>{item}</option>
                })}
            </Select>
        case TYPES.NOT_EDITABLE:
            return <Input
                id={row.location}
                value={tableValues[row.location] || ''}
                readOnly
                className={classes.textField}
            />
        default:
            return row.type
    }
}