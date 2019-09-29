const MANDATORY = true
const NOT_MANDATORY = false
export const TYPES = {
    NUMERIC: 'NUMERIC',
    RANGE: 'RANGE',
    SELECT: 'SELECT',
    NOT_EDITABLE: 'NOT_EDITABLE',

}

function createRangeData(name, value, mandatory, type, min, max, ticks, location) {
    return { name, value, mandatory, type, min, max, ticks, location };
}
function createNumericData(name, value, mandatory, type, location) {
    return { name, value, mandatory, type, location };
}
function createSelectData(name, value, mandatory, type, data, location) {
    return { name, value, mandatory, type, data, location };
}
function createSelectDataWithoutValue(name, value, mandatory, type, data, location) {
    return { name, mandatory, type, data, location };
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
    createSelectDataWithoutValue('Water Conservation', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i29'),
    createSelectDataWithoutValue('Energy Savings', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i30'),
    createSelectDataWithoutValue('Bio-contamination problems', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i31'),
    createSelectDataWithoutValue('Scale Precipitation problems', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i32'),
    createSelectDataWithoutValue('Silica Related Problems', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i33'),
    createSelectDataWithoutValue('Chemical Elimination', 'Yes/No', MANDATORY, TYPES.SELECT, ['', 'Yes', 'No'], 'i34'),
]

export const waterAnalysisData = [
    createRangeData('CWR - Cooling Water Return temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 3, 'd21'),
    createRangeData('CWS - Cooling Water Supply temperature', 'oC', MANDATORY, TYPES.RANGE, 25, 40, 2, 'd22'),
    createRangeData('Temperature difference', 'oC', NOT_MANDATORY, TYPES.NOT_EDITABLE, 'd23'),
    createRangeData('Skin Temp. (highest in the system) ', 'oC', MANDATORY, TYPES.RANGE, 60, 100, 10, 'd24'),
    createRangeData('Days of week in operation', 'days per week', MANDATORY, TYPES.RANGE, 1, 7, 1, 'd25'),
    createRangeData('Hours/day in operation)', 'hours per day', MANDATORY, TYPES.RANGE, 1, 24, 1, 'd26'),
    createRangeData('# weeks in operation', 'weeks per year', MANDATORY, TYPES.NUMERIC, 'd27'),
]
