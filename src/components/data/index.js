const MANDATORY = true
const NOT_MANDATORY = false
export const TYPES = {
    NUMERIC: 'NUMERIC',
    RANGE: 'RANGE',
    SELECT: 'SELECT',
    NOT_EDITABLE: 'NOT_EDITABLE',
}

function getDefaultValue(type) {
    let defaultValue = 0
    if (type === TYPES.SELECT) {
        defaultValue = ''
    }
    return defaultValue
}
function createRangeData(name, units, mandatory, type, min, max, ticks, location) {
    const defaultValue = getDefaultValue(type)
    return { name, units, mandatory, type, min, max, ticks, location, defaultValue };
}
function createNumericData(name, units, mandatory, type, location) {
    const defaultValue = getDefaultValue(type)
    return { name, units, mandatory, type, location, defaultValue };
}
function createSelectData(name, units, mandatory, type, data, location) {
    const defaultValue = getDefaultValue(type)
    return { name, units, mandatory, type, data, location, defaultValue };
}

//create tables with more than one values
function createManyValuesData(name, units, mandatory, fields) {
    fields.forEach(field => {
        field.defaultValue = getDefaultValue(field.type)
    })
    return { name, units, mandatory, fields };
}

export const mechanicalPropertiesData = [
    createManyValuesData('Number of CT (interconnected)', '# (interconnected cooling towers)', MANDATORY, [{ location: 'd8', type: TYPES.RANGE, data: { min: 0, max: 10, ticks: 1 } }]),
    createManyValuesData('Number of Circulation Pumps', '#  (operational + standby) ', NOT_MANDATORY, [{ location: 'd9', type: TYPES.RANGE, data: { min: 0, max: 10, ticks: 1 } }]),
    createManyValuesData('Total pumps flow rate capacity', 'm3/h', NOT_MANDATORY, [{ location: 'd10', type: TYPES.RANGE, data: { min: 0, max: 50, ticks: 1 } }]),
    createManyValuesData('Actual cooling circulation flow rate', 'm3/h', NOT_MANDATORY, [{ location: 'd11', type: TYPES.NUMERIC }]),
    createManyValuesData('Available flowrate for UET units', 'm3/h', MANDATORY, [{ location: 'd12', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Total Basin volume (with equation line)', 'm3', NOT_MANDATORY, [{ location: 'd13', type: TYPES.RANGE, data: { min: 0, max: 10, ticks: 1 } }]),
    createManyValuesData('Pipe length from CT to H.Ex. (approx.)', 'meters', MANDATORY, [{ location: 'd14', type: TYPES.NUMERIC }]),
    createManyValuesData('type of fluid to be chilled', 'Water/Ammonia/Freon/Ethylene-glycol', MANDATORY, [{ location: 'd15', type: TYPES.SELECT, data: ['', 'Water', 'Ammonia', 'Freon', 'Ethylene-glycol'] }]),
    createManyValuesData('Cooling Tower type', 'external heat exchanger/evaporator - condenser*/direct contact', MANDATORY, [{ location: 'd16', type: TYPES.SELECT, data: ['', 'external heat exchanger', 'evaporator - condenser*', 'direct contact'] }]),
]//
export const operationalPropertiesData = [
    createRangeData('CWR - Cooling Water Return temperature', 'oC', MANDATORY, TYPES.RANGE, 0, 40, 3, 'd21'),
    createRangeData('CWS - Cooling Water Supply temperature', 'oC', MANDATORY, TYPES.RANGE, 0, 40, 2, 'd22'),
    createNumericData('Temperature difference', 'oC', NOT_MANDATORY, TYPES.NOT_EDITABLE, 'd23'),
    createRangeData('Skin Temp. (highest in the system) ', 'oC', MANDATORY, TYPES.RANGE, 0, 100, 10, 'd24'),
    createRangeData('Days of week in operation', 'days per week', MANDATORY, TYPES.RANGE, 0, 7, 1, 'd25'),
    createRangeData('Hours/day in operation)', 'hours per day', MANDATORY, TYPES.RANGE, 0, 24, 1, 'd26'),
    createNumericData('# weeks in operation', 'weeks per year', MANDATORY, TYPES.NUMERIC, 'd27'),
]

export const waterOriginData = [
    createSelectData('Water Source', 'Public/Well/River/Reuse', MANDATORY, TYPES.SELECT, ['', 'Public', 'Well', 'River', 'Reuse'], 'j8'),
    createNumericData('Water Cost', '$USD / m3', MANDATORY, TYPES.NUMERIC, 'j9'),
    createNumericData('Drain Cost', '$USD / m3', MANDATORY, TYPES.NUMERIC, 'j10'),
]
export const operationCostsData = [
    createNumericData('Chemical costs', '$USD/year', MANDATORY, TYPES.NUMERIC, 'j13'),
    createNumericData('Elecrtricity Cost', '$USD/kWH', MANDATORY, TYPES.NUMERIC, 'j14'),
    createNumericData('# plant stoppages due to blockages', '#/year', MANDATORY, TYPES.NUMERIC, 'j15'),
    createNumericData('Thickness of scaling in heat exhanger', 'mm', MANDATORY, TYPES.NUMERIC, 'j16'),
    createNumericData('Cost of  cleaning of heat exchanger', '$USD/year', MANDATORY, TYPES.NUMERIC, 'j17'),
]
export const enironmentalData = [
    createNumericData('Discharge limitations', 'Chlorides (ppm)', MANDATORY, TYPES.NUMERIC, 'j20'),
    createNumericData('Discharge limitations', 'Sulfates (ppm)', MANDATORY, TYPES.NUMERIC, 'j21'),
    createNumericData('Discharge limitations', 'pH', MANDATORY, TYPES.NUMERIC, 'j22'),
    createNumericData('Discharge limitations', 'Chlorine (ppm)', MANDATORY, TYPES.NUMERIC, 'j23'),
    createSelectData('Water Source', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'j24'),
    createSelectData('Water Source', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'j25'),
]
export const customersProblemsAndRequestsData = [
    createSelectData('Water Conservation', null, MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i29'),
    createSelectData('Energy Savings', null, MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i30'),
    createSelectData('Bio-contamination problems', null, MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i31'),
    createSelectData('Scale Precipitation problems', null, MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i32'),
    createSelectData('Silica Related Problems', null, MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i33'),
    createSelectData('Chemical Elimination', null, MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i34'),
]


export const waterAnalysisData = [
    createManyValuesData('Conductivity', 'µS/cm', MANDATORY, [{ location: 'd32', type: TYPES.NUMERIC }, { location: 'e32', type: TYPES.NOT_EDITABLE }, { location: 'f32', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('pH', 'Units', MANDATORY, [{ location: 'd33', type: TYPES.NUMERIC }, { location: 'e33', type: TYPES.NUMERIC }, { location: 'f33', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Total Hardness', 'ppm as CaCO3', MANDATORY, [{ location: 'd34', type: TYPES.NUMERIC }, { location: 'e34', type: TYPES.NUMERIC }, { location: 'f34', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Carbonate Hardness', 'ppm as CaCO3', MANDATORY, [{ location: 'd35', type: TYPES.NUMERIC }, { location: 'e35', type: TYPES.NUMERIC }, { location: 'f35', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Chlorides', 'ppm', MANDATORY, [{ location: 'd36', type: TYPES.NUMERIC }, { location: 'e36', type: TYPES.NUMERIC }, { location: 'f36', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Iron', 'ppm', MANDATORY, [{ location: 'd37', type: TYPES.NUMERIC }, { location: 'e37', type: TYPES.NUMERIC }, { location: 'f37', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Silica', 'ppm', MANDATORY, [{ location: 'd38', type: TYPES.NUMERIC }, { location: 'e38', type: TYPES.NUMERIC }, { location: 'f38', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Sulphate', 'ppm', MANDATORY, [{ location: 'd39', type: TYPES.NUMERIC }, { location: 'e39', type: TYPES.NUMERIC }, { location: 'f39', type: TYPES.NOT_EDITABLE }]),
]
export const thermodynamicCalculationsData = [
    createManyValuesData('UET treatment cycles of concentration', '#', MANDATORY, [{ location: 'd47', type: TYPES.NOT_EDITABLE }, { location: 'e47', type: TYPES.NUMERIC }]),
    createManyValuesData('Evaporation Rate', 'm3/h', MANDATORY, [{ location: 'd48', type: TYPES.NOT_EDITABLE }, { location: 'e48', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Condenser capacity', 'Kcal/hour', MANDATORY, [{ location: 'd49', type: TYPES.NOT_EDITABLE }, { location: 'e49', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Tons of refrigeration', 'TR', MANDATORY, [{ location: 'd50', type: TYPES.NOT_EDITABLE }, { location: 'e50', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Make up flow rate', 'm3/h', MANDATORY, [{ location: 'd51', type: TYPES.NOT_EDITABLE }, { location: 'e51', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Blowdown flow rate', 'm3/h', MANDATORY, [{ location: 'd52', type: TYPES.NOT_EDITABLE }, { location: 'e52', type: TYPES.NOT_EDITABLE }]),
]
export const potentialWaterSavingData = [
    createManyValuesData('Calculated Water Saving (m3/h)', null, MANDATORY, [{ location: 'c55', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Annual Hourly Operation(h/year)', null, MANDATORY, [{ location: 'c56', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('*Annual Water Saving  (m3/year)', null, MANDATORY, [{ location: 'c57', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('% of water saving from blowdown', null, MANDATORY, [{ location: 'c58', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('% of water saving from make up', null, MANDATORY, [{ location: 'c59', type: TYPES.NOT_EDITABLE }]),
]
export const predictiveWaterAnalysis = [
    createManyValuesData('Conductivity', 'µS/cm', MANDATORY, [{ location: 'd63', type: TYPES.NOT_EDITABLE }, { location: 'e63', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('pH', 'Units', MANDATORY, [{ location: 'd64', type: TYPES.NOT_EDITABLE }, { location: 'e64', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Total Hardness', 'ppm as CaCO3', MANDATORY, [{ location: 'd65', type: TYPES.NOT_EDITABLE }, { location: 'e65', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Carbonate Hardness', 'ppm as CaCO3', MANDATORY, [{ location: 'd66', type: TYPES.NOT_EDITABLE }, { location: 'e66', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Chlorides', 'ppm', MANDATORY, [{ location: 'd67', type: TYPES.NOT_EDITABLE }, { location: 'e67', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Iron', 'ppm', MANDATORY, [{ location: 'd68', type: TYPES.NOT_EDITABLE }, { location: 'e68', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Silica', 'ppm', MANDATORY, [{ location: 'd69', type: TYPES.NOT_EDITABLE }, { location: 'e69', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Sulphate', 'ppm', MANDATORY, [{ location: 'd70', type: TYPES.NOT_EDITABLE }, { location: 'e70', type: TYPES.NOT_EDITABLE }]),
]
export const sizingFactorsData = [
    createManyValuesData('Silica Factor', '>15', MANDATORY, [{ location: 'j47', type: TYPES.NOT_EDITABLE }, { location: 'l47', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Hardness Factor', '>250', MANDATORY, [{ location: 'j48', type: TYPES.NOT_EDITABLE }, { location: 'l48', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Ammonia Factor', '>300', MANDATORY, [{ location: 'j49', type: TYPES.NOT_EDITABLE }, { location: 'l49', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Freon Factor', 'Ammonia', MANDATORY, [{ location: 'j50', type: TYPES.NOT_EDITABLE }, { location: 'l50', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('pPipe Length Factor', 'Freon', MANDATORY, [{ location: 'j51', type: TYPES.NOT_EDITABLE }, { location: 'l51', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Pipe Length Factor', '>100', MANDATORY, [{ location: 'j52', type: TYPES.NOT_EDITABLE }, { location: 'l52', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Evaporator - condenser Factor', 'Evaporator - condenser', MANDATORY, [{ location: 'j53', type: TYPES.NOT_EDITABLE }, { location: 'l53', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('High Silica and low chlorides', 'Cl<50 & Si>50', MANDATORY, [{ location: 'j54', type: TYPES.NOT_EDITABLE }, { location: 'l54', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Skin Temp.', '>60', MANDATORY, [{ location: 'j55', type: TYPES.NOT_EDITABLE }, { location: 'l55', type: TYPES.NOT_EDITABLE }]),
]

export const sizingOfReactorsData = [
    createManyValuesData('Sizing (# of Reactors)', null, MANDATORY, [{ location: 'i58', type: TYPES.NOT_EDITABLE }]),
]

export const modelConfigurationData = [
    createManyValuesData('1X4', null, MANDATORY, [{ location: 'i62', type: TYPES.NOT_EDITABLE }, { location: 'j62', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('2X4', null, MANDATORY, [{ location: 'i63', type: TYPES.NOT_EDITABLE }, { location: 'j63', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('4X4', null, MANDATORY, [{ location: 'i64', type: TYPES.NOT_EDITABLE }, { location: 'j64', type: TYPES.NOT_EDITABLE }]),
]
export const UETCirculationFlowrateData = [
    createManyValuesData('minimum flow rate', null, MANDATORY, [{ location: 'i68', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('maximum flow rate', null, MANDATORY, [{ location: 'i69', type: TYPES.NOT_EDITABLE }]),
]

// Savings Calculation

export const theoreticalEnergySavingsData = [
    createManyValuesData('Electricity Cost', '$USD/kWH', MANDATORY, [{ location: 'd79', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Scale Deposit Thickness', 'mm', MANDATORY, [{ location: 'd80', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Efficiency Loss', '%', MANDATORY, [{ location: 'd81', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Total Theoretical Energy Savings', '$USD/Year', MANDATORY, [{ location: 'd82', type: TYPES.NOT_EDITABLE }]),
]
export const ROICalculationData = [
    createManyValuesData('Potential Water Savings', '$USD/Year', MANDATORY, [{ location: 'd85', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Potential Energy Savings', '$USD/Year', MANDATORY, [{ location: 'd86', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Chemical Savings', '$USD/Year', MANDATORY, [{ location: 'd87', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Equipment Life efficiency savings', '$USD/Year', MANDATORY, [{ location: 'd88', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Costs for cleaning heat exhanger', '$USD/Year', MANDATORY, [{ location: 'd89', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Total Potential Savings ', '$USD/Year', MANDATORY, [{ location: 'd91', type: TYPES.NOT_EDITABLE }]),
]
export const UETWorkingParameters = [
    createManyValuesData('Approx. Electricity Consumption', 'kWH', MANDATORY, [{ location: 'j79', type: TYPES.NOT_EDITABLE }]),
    createManyValuesData('Approx. Footprint area (inc. service)', 'm2', MANDATORY, [{ location: 'j80', type: TYPES.NOT_EDITABLE }]),
]
