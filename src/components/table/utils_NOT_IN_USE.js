const getCalculateNewValues = (key, value, tableValues) => {
    // const keys = [key]
    const newValues = Object.assign({}, tableValues, { [key]: value });
    // All if's here
    if (['d10', 'd11'].includes(key)) { // d12
        newValues['d12'] = newValues.d10 - newValues.d11
        // keys.push('d12');
    }
    if (['d21', 'd22'].includes(key)) { // d23
        newValues['d23'] = newValues.d21 - newValues.d22
        // keys.push('d23');
    }
    if (['e30', 'd32'].includes(key)) { // e32
        newValues['e32'] = tableValues.e30 * tableValues.d32
    }
    if (['e30', 'd32'].includes(key)) { // f32
        newValues['f32'] = tableValues.e30 * tableValues.d32
    }
    if (['f32', 'd32', 'd34'].includes(key)) { // f34
        newValues['f34'] = tableValues.f32 / tableValues.d32 * tableValues.d34
    }
    if ([tableValues.f32, tableValues.d32, tableValues.d35].includes(key)) { // f35
        newValues['f35'] = tableValues.f32 / tableValues.d32 * tableValues.d35
    }
    if ([tableValues.f32, tableValues.d32, tableValues.d36].includes(key)) { // f36
        newValues['f36'] = tableValues.f32 / tableValues.d32 * tableValues.d36
    }
    if ([tableValues.f32, tableValues.d32, tableValues.d37].includes(key)) { // f37
        newValues['f37'] = tableValues.f32 / tableValues.d32 * tableValues.d37
    }
    if ([tableValues.f32, tableValues.d32, tableValues.d38].includes(key)) { // f38
        newValues['f38'] = tableValues.f32 / tableValues.d32 * tableValues.d38
    }
    if ([tableValues.f32, tableValues.d32, tableValues.d39].includes(key)) { // f39
        newValues['f39'] = tableValues.f32 / tableValues.d32 * tableValues.d39
    }
    if ([tableValues.e30].includes(key)) { // d47
        newValues['d47'] = tableValues.e30
    }
    if ([tableValues.d49].includes(key)) { // d48
        newValues['d48'] = tableValues.d49 / 560 / 1000
    }
    if ([tableValues.e49].includes(key)) { // e48
        newValues['e48'] = tableValues.e49 / 560 / 1000
    }
    if ([tableValues.d11, tableValues.d23].includes(key)) { // d49 AND e49
        newValues['e49'] = tableValues.d11 * tableValues.d23 * 1000
    }
    if ([tableValues.d49].includes(key)) { // d50 
        newValues['d50'] = tableValues.d49 * 0.000330693393472
    }
    if ([tableValues.e49].includes(key)) { // e50
        newValues['e50'] = tableValues.e49 * 0.000330693393472
    }
    if ([tableValues.d48, tableValues.d52].includes(key)) { // d51
        newValues['d51'] = tableValues.d48 + tableValues.d52
    }
    if ([tableValues.e48, tableValues.e52].includes(key)) { // e51
        newValues['e51'] = tableValues.e48 + tableValues.e52
    }
    if ([tableValues.d48, tableValues.d47].includes(key)) { // d52
        newValues['d52'] = tableValues.d48 * (1 / tableValues.d47)
    }
    if ([tableValues.e48, tableValues.e47].includes(key)) { // e52
        newValues['e52'] = tableValues.e48 * (1 / tableValues.e47)
    }
    if ([tableValues.d52, tableValues.e52].includes(key)) { // c55
        newValues['c55'] = tableValues.d52 - tableValues.e52
    }
    if ([tableValues.d25, tableValues.d26, tableValues.d27].includes(key)) { // c56
        newValues['c56'] = tableValues.d25 * tableValues.d26 * tableValues.d27
    }
    if ([tableValues.c55, tableValues.c56].includes(key)) { // c57
        newValues['c57'] = tableValues.c55 * tableValues.c56
    }
    // end
    return newValues
}