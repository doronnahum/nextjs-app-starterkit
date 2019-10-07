import { TYPES } from 'src/components/data'
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';

const getCalculateNewValues = (key, value, tableValues) => {
    const newValues = { ...tableValues, [key]: value }
    newValues['d12'] = newValues.d10 - newValues.d11
    newValues['d23'] = newValues.d21 - newValues.d22
    newValues['e32'] = newValues.e30 * newValues.d32
    newValues['f32'] = newValues.e30 * newValues.d32
    newValues['f34'] = newValues.f32 / newValues.d32 * newValues.d34
    newValues['f35'] = newValues.f32 / newValues.d32 * newValues.d35
    newValues['f36'] = newValues.f32 / newValues.d32 * newValues.d36
    newValues['f37'] = newValues.f32 / newValues.d32 * newValues.d37
    newValues['f38'] = newValues.f32 / newValues.d32 * newValues.d38
    newValues['f39'] = newValues.f32 / newValues.d32 * newValues.d39
    newValues['d47'] = newValues.e30
    newValues['d49'] = newValues.d11 * newValues.d23 * 1000
    newValues['d48'] = newValues.d49 / 560 / 1000
    newValues['e48'] = newValues.e49 / 560 / 1000
    newValues['e49'] = newValues.d11 * newValues.d23 * 1000
    newValues['d50'] = newValues.d49 * 0.000330693393472
    newValues['e50'] = newValues.e49 * 0.000330693393472
    newValues['d51'] = newValues.d48 + newValues.d52
    newValues['e51'] = newValues.e48 + newValues.e52
    newValues['d52'] = newValues.d48 * (1 / newValues.d47)
    newValues['e52'] = newValues.e48 * (1 / newValues.e47)
    newValues['c56'] = newValues.d25 * newValues.d26 * newValues.d27
    newValues['c57'] = newValues.c55 * newValues.c56
    newValues['c58'] = newValues.c55 / newValues.d52
    newValues['c59'] = newValues.c55 / newValues.d51
    newValues['d63'] = newValues.d32
    newValues['d64'] = newValues.d33
    newValues['d65'] = newValues.d34
    newValues['d66'] = newValues.d35
    newValues['d67'] = newValues.d36
    newValues['d68'] = newValues.d37
    newValues['d69'] = newValues.d38
    newValues['d70'] = newValues.d39
    newValues['e63'] = newValues.d63 * newValues.e47
    newValues['e65'] = newValues.d65 * newValues.e47 * 0.75
    newValues['e66'] = newValues.d66 * newValues.e47 * 0.65
    newValues['e67'] = newValues.d67 * newValues.e47
    newValues['e69'] = newValues.d69 * newValues.e47 * 0.985
    newValues['e70'] = newValues.d70 * newValues.e47
    // Sizing Factors
    newValues['l47'] = newValues.d38 > 15 ? newValues.j47 : 0
    newValues['l48'] = newValues.d34 > 250 ? newValues.j48 : 0
    newValues['l49'] = newValues.d34 > 300 ? newValues.j49 : 0
    newValues['l50'] = newValues.d15 === 'Ammonia' ? newValues.j50 + newValues.l47 + newValues.l48 + newValues.l49 + newValues.l51 + newValues.l52 + newValues.l53 : 0
    newValues['l51'] = newValues.d16 === 'Freon' ? newValues.j51 : 0
    newValues['l52'] = newValues.d14 > 100 ? newValues.j52 : 0
    newValues['l53'] = newValues.D16 === 'evaporator - condenser*' ? newValues.j53 : 0
    newValues['l54'] = newValues.d67 < 50 && newValues.e69 > 50 ? newValues.j54 : 0
    newValues['l55'] = newValues.d24 > 60 ? newValues.j55 : 0
    // sizingOfReactorsData
    const arrL47_To_L53 = [newValues.l47, newValues.l48, newValues.l49, newValues.l50, newValues.l51, newValues.l52, newValues.l53]
    console.log('arrL47_To_L53', arrL47_To_L53);

    newValues['l58'] = newValues.d23 < 7 ? (((0.0032 * (newValues.e49 / 3000)) * 4) * (1 + Math.max(arrL47_To_L53)) * (1 + newValues.l54) * (1 + newValues.l55)) : (0.8 * ((0.0032 * (newValues.e49 / 3000)) * 4)) * (1 + Math.max(arrL47_To_L53)) * (1 + newValues.l54) * (1 + newValues.l55)
    // Mo4del Configuration
    newValues['i62'] = newValues.i58 / 4
    newValues['i63'] = newValues.i58 / 8
    newValues['i64'] = newValues.i58 / 16
    newValues['j62'] = Math.ceil(newValues.i62)
    newValues['j63'] = Math.ceil(newValues.i63)
    newValues['j64'] = Math.ceil(newValues.i64)
    // UE4T circulation flow rate
    newValues['i68'] = newValues.j64 * 100
    newValues['i69'] = newValues.j64 * 150

    // // UE4TWorkingParameters ////// after submit
    // newValues['j79'] = newValues.j64 * 1.2
    // newValues['j80'] = newValues.j64 * (2.35 * 1.2) * (1 + 0.2)
    // // Th4eoretical Energy Savings 
    // newValues['d79'] = newValues.j14
    // newValues['d80'] = newValues.j16
    // newValues['d81'] = newValues.d80 * 0.2285 / 2.54
    // newValues['d82'] = ((newValues.d50 * (newValues.d79 * 0.284) * (newValues.d81 + 1) * newValues.c56) - ((newValues.d79 * 0.284) * newValues.c56 * newValues.d50)) * 0.75
    // // RO4I Calculation
    // newValues['d85'] = (newValues.j9 + newValues.j10) * newValues.c56 * newValues.c55
    // newValues['d86'] = newValues.d82
    // newValues['d87'] = newValues.j13
    // newValues['d88'] = (newValues.d49 / 33.33) * (1 + newValues.d81) / 20
    // newValues['d89'] = newValues.j17
    // newValues['d91'] = newValues.d85 + newValues.d86 + newValues.d87 + newValues.d88 + newValues.d89

    return newValues
}
export const handleInputChange = (e, updateTablesValues, tableValues) => {
    const field = e.target.id;
    const newValue = Number(e.target.value);
    const newValues = getCalculateNewValues(field, newValue, tableValues)
    updateTablesValues({ data: newValues })
};

const handleSelectChange = (e, updateTablesValues, tableValues) => {
    const field = e.target.id;
    const newValue = e.target.value;
    const newValues = getCalculateNewValues(field, newValue, tableValues)
    updateTablesValues({ data: newValues })
};

const onChangeSlider = (e, val, location, updateTablesValues, tableValues) => {
    const field = location;
    const newValue = val;
    const newValues = getCalculateNewValues(field, newValue, tableValues)
    updateTablesValues({ data: newValues })
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

export const renderValueType = (field, updateTablesValues, tableValues, classes, onBlur, onFocus) => {
    const type = field.type
    switch (type) {
        case TYPES.NUMERIC:
            return <Input
                id={field.location}
                placeholder={tableValues[field.location] === 0 ? '' : (tableValues[field.location]).toString()}
                label="Number"
                // value={tableValues[field.location] === 0 ? '' : tableValues[field.location]}
                onBlur={onBlur}
                onFocus={onFocus}
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
                marks={getMarks(field.data)} //slowdown everything
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
                // placeholder={isNaN(tableValues[field.location]) || tableValues[field.location] === 0 ? '' : tableValues[field.location]}
                value={isNaN(tableValues[field.location]) || tableValues[field.location] === 0 ? 0 : tableValues[field.location].toFixed(2)}
                readOnly
                className={classes.textFieldUNEditable}
            />
        default:
            return field.type
    }
}