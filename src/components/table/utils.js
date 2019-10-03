import { TYPES } from 'src/components/data'
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';

const getCalculateNewValues = (key, value, tableValues) => {
    const newValues = Object.assign({}, tableValues, { [key]: value });
    newValues['d12'] = newValues.d10 - newValues.d11
    newValues['d23'] = newValues.d21 - newValues.d22
    newValues['e32'] = tableValues.e30 * tableValues.d32
    newValues['f32'] = tableValues.e30 * tableValues.d32
    newValues['f34'] = tableValues.f32 / tableValues.d32 * tableValues.d34
    newValues['f35'] = tableValues.f32 / tableValues.d32 * tableValues.d35
    newValues['f36'] = tableValues.f32 / tableValues.d32 * tableValues.d36
    newValues['f37'] = tableValues.f32 / tableValues.d32 * tableValues.d37
    newValues['f38'] = tableValues.f32 / tableValues.d32 * tableValues.d38
    newValues['f39'] = tableValues.f32 / tableValues.d32 * tableValues.d39
    newValues['d47'] = tableValues.e30
    newValues['d48'] = tableValues.d49 / 560 / 1000
    newValues['e48'] = tableValues.e49 / 560 / 1000
    newValues['e49'] = tableValues.d11 * tableValues.d23 * 1000
    newValues['d50'] = tableValues.d49 * 0.000330693393472
    newValues['e50'] = tableValues.e49 * 0.000330693393472
    newValues['d51'] = tableValues.d48 + tableValues.d52
    newValues['e51'] = tableValues.e48 + tableValues.e52
    newValues['d52'] = tableValues.d48 * (1 / tableValues.d47)
    newValues['e52'] = tableValues.e48 * (1 / tableValues.e47)
    newValues['c56'] = tableValues.d25 * tableValues.d26 * tableValues.d27
    newValues['c57'] = tableValues.c55 * tableValues.c56
    newValues['c58'] = tableValues.c55 / tableValues.d52
    newValues['c59'] = tableValues.c55 / tableValues.d51
    newValues['d63'] = tableValues.d32
    newValues['d64'] = tableValues.d33
    newValues['d65'] = tableValues.d34
    newValues['d66'] = tableValues.d35
    newValues['d67'] = tableValues.d36
    newValues['d68'] = tableValues.d37
    newValues['d69'] = tableValues.d38
    newValues['d70'] = tableValues.d39
    newValues['e63'] = tableValues.d63 * tableValues.e47
    newValues['e65'] = tableValues.d65 * tableValues.e47 * 0.75
    newValues['e66'] = tableValues.d66 * tableValues.e47 * 0.65
    newValues['e67'] = tableValues.d67 * tableValues.e47
    newValues['e69'] = tableValues.d69 * tableValues.e47 * 0.985
    newValues['e70'] = tableValues.d70 * tableValues.e47
    // Model Configuration
    newValues['i62'] = tableValues.i58 / 4
    newValues['i63'] = tableValues.i58 / 8
    newValues['i64'] = tableValues.i58 / 16
    newValues['j62'] = Math.ceil(tableValues.i62)
    newValues['j63'] = Math.ceil(tableValues.i63)
    newValues['j64'] = Math.ceil(tableValues.i64)
    // UET circulation flow rate
    newValues['i68'] = tableValues.j64 * 100
    newValues['i69'] = tableValues.j64 * 150
    // UETWorkingParameters
    newValues['j79'] = tableValues.j64 * 1.2
    newValues['j80'] = tableValues.j64 * (2.35 * 1.2) * (1 + 0.2)
    // Theoretical Energy Savings 
    newValues['d79'] = tableValues.j14
    newValues['d80'] = tableValues.j16
    newValues['d81'] = `${tableValues.d80 * 0.2285 / 2.54}%`
    newValues['d82'] = ((tableValues.d50 * (tableValues.d79 * 0.284) * (tableValues.d81 + 1) * tableValues.c56) - ((tableValues.d79 * 0.284) * tableValues.c56 * tableValues.d50)) * 0.75
    // ROI Calculation
    newValues['d85'] = (tableValues.j9 + tableValues.j10) * tableValues.c56 * tableValues.c55
    newValues['d86'] = tableValues.d82
    newValues['d87'] = tableValues.j13
    newValues['d88'] = (tableValues.d49 / 33.33) * (1 + tableValues.d81) / 20
    newValues['d89'] = tableValues.j17
    newValues['d91'] = tableValues.d85 + tableValues.d86 + tableValues.d87 + tableValues.d88 + tableValues.d89

    return newValues
}

export const handleInputChange = (event, updateTablesValues, tableValues) => {
    const field = event.target.id;
    const newValue = Number(event.target.value);
    const newValues = getCalculateNewValues(field, newValue, tableValues)
    // debugger
    updateTablesValues({ values: newValues })
};

const handleSelectChange = (event, updateTablesValues, tableValues) => {
    const field = event.target.id;
    const newValue = event.target.value;
    const newValues = getCalculateNewValues(field, newValue, tableValues)
    updateTablesValues({ values: newValues })
};

const onChangeSlider = (event, val, location, updateTablesValues, tableValues) => {
    const field = location;
    const newValue = val;
    const newValues = getCalculateNewValues(field, newValue, tableValues)
    updateTablesValues({ values: newValues })
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
    if (arr.length) {
        arr[0].label = row.min.toString()
        arr[arr.length - 1].label = row.max.toString()
    }
    return arr
}

export const renderValueType = (field, updateTablesValues, tableValues, classes) => {
    const type = field.type
    switch (type) {
        case TYPES.NUMERIC:
            return <Input
                id={field.location}
                label="Number"
                value={tableValues[field.location] === 0 ? '' : tableValues[field.location]}
                onChange={(e) => handleInputChange(e, updateTablesValues, tableValues)}
                type="number"
                className={classes.textField}
            />
        case TYPES.RANGE:
            return <Slider
                defaultValue={tableValues[field.location]}//Math.floor((field.min + field.max) / 2)
                getAriaValueText={valuetext}
                onChange={(e, val) => onChangeSlider(e, val, field.location, updateTablesValues, tableValues)}
                aria-labelledby="discrete-slider-always"
                step={field.data.ticks}
                min={field.data.min}
                max={field.data.max}
                marks={getMarks(field.data)}
                valueLabelDisplay="on"
            />
        case TYPES.SELECT:
            return <Select
                id={field.location}
                native
                value={tableValues[field.location]}
                onChange={(e) => handleSelectChange(e, updateTablesValues, tableValues)}
            >
                {field.data.map((item, i) => {
                    return <option key={i} value={item}>{item}</option>
                })}
            </Select>
        case TYPES.NOT_EDITABLE:
            return <Input
                id={field.location}
                value={isNaN(tableValues[field.location]) || tableValues[field.location] === 0 ? '' : tableValues[field.location]}
                readOnly
                className={classes.textFieldUNEditable}
            />
        default:
            return field.type
    }
}