const MANDATORY = true
const NOT_MANDATORY = false
export const TYPES = {
    NUMERIC: 'NUMERIC',
    RANGE: 'RANGE',
    SELECT: 'SELECT',
    NOT_EDITABLE: 'NOT_EDITABLE',
}

function createRangeData(name, units, mandatory, type, min, max, ticks, location) {
    return { name, units, mandatory, type, min, max, ticks, location };
}
function createNumericData(name, units, mandatory, type, location) {
    return { name, units, mandatory, type, location };
}
function createSelectData(name, units, mandatory, type, data, location) {
    return { name, units, mandatory, type, data, location };
}

//create tables with more than one values
function createManyValuesData(name, units, mandatory, fields) {
    return { name, units, mandatory, fields };
}

export const mechanicalPropertiesData = [
    createRangeData('Number of CT (interconnected)', '# (interconnected cooling towers)', NOT_MANDATORY, TYPES.RANGE, 1, 10, 1, 'd8'),
    createRangeData('Number of Circulation Pumps', '#  (operational + standby) ', NOT_MANDATORY, TYPES.RANGE, 1, 20, 1, 'd9'),
    createRangeData('Total pumps flow rate capacity', 'm3/h', NOT_MANDATORY, TYPES.RANGE, 1, 50, 1, 'd10'),
    createNumericData('Actual cooling circulation flow rate', 'm3/h', NOT_MANDATORY, TYPES.NUMERIC, 'd11'),
    createNumericData('Available flowrate for UET units', 'm3/h', MANDATORY, TYPES.NOT_EDITABLE, 'd12'),
    createRangeData('Total Basin volume (with equation line)', 'm3', NOT_MANDATORY, TYPES.RANGE, 10, 200, 10, 'd13'),
    createNumericData('Pipe length from CT to H.Ex. (approx.)', 'meters', MANDATORY, TYPES.NUMERIC, 'd14'),
    createSelectData('type of fluid to be chilled', 'Water/Ammonia/Freon/Ethylene-glycol', MANDATORY, TYPES.SELECT, ['', 'Water', 'Ammonia', 'Freon', 'Ethylene-glycol'], 'd15'),
    createSelectData('Cooling Tower type', 'external heat exchanger/evaporator - condenser*/direct contact', MANDATORY, TYPES.SELECT, ['', 'external heat exchanger', 'evaporator - condenser*', 'direct contact'], 'd16'),
]
export const operationalPropertiesData = [
    createRangeData('CWR - Cooling Water Return temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 3, 'd21'),
    createRangeData('CWS - Cooling Water Supply temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 2, 'd22'),
    createNumericData('Temperature difference', 'oC', NOT_MANDATORY, TYPES.NOT_EDITABLE, 'd23'),
    createRangeData('Skin Temp. (highest in the system) ', 'oC', MANDATORY, TYPES.RANGE, 60, 100, 10, 'd24'),
    createRangeData('Days of week in operation', 'days per week', MANDATORY, TYPES.RANGE, 1, 7, 1, 'd25'),
    createRangeData('Hours/day in operation)', 'hours per day', MANDATORY, TYPES.RANGE, 1, 24, 1, 'd26'),
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
