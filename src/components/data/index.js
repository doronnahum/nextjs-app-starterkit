const MANDATORY = true
const NOT_MANDATORY = false

const MANDA = true
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

//create tables with more than one values
function createRowData(name, units, fields) {
    fields.forEach(field => {
        if (!field.defaultValue) {
            field.defaultValue = getDefaultValue(field.type)
        }
    })
    return { name, units, fields };
}

export const mechanicalPropertiesData = [
    createRowData('Number of CT (interconnected)', '# (interconnected cooling towers)', [{ location: 'd8', type: TYPES.RANGE, data: { min: 0, max: 10, ticks: 1 }, isMandatory: NOT_MANDATORY }]),
    createRowData('Number of Circulation Pumps', '#  (operational + standby) ', [{ location: 'd9', type: TYPES.RANGE, data: { min: 0, max: 10, ticks: 1 }, isMandatory: NOT_MANDATORY }]),
    createRowData('Total pumps flow rate capacity', 'm3/h', [{ location: 'd10', type: TYPES.RANGE, data: { min: 0, max: 10000, ticks: 200 }, isMandatory: NOT_MANDATORY }]),
    createRowData('Actual cooling circulation flow rate', 'm3/h', [{ location: 'd11', type: TYPES.NUMERIC, isMandatory: NOT_MANDATORY }]),
    createRowData('Available flowrate for UET units', 'm3/h', [{ location: 'd12', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Total Basin volume (with equation line)', 'm3', [{ location: 'd13', type: TYPES.RANGE, data: { min: 0, max: 500, ticks: 1 }, isMandatory: NOT_MANDATORY }]),
    createRowData('Pipe length from CT to H.Ex. (approx.)', 'meters', [{ location: 'd14', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('type of fluid to be chilled', 'Water/Ammonia/Freon/Ethylene-glycol', [{ location: 'd15', type: TYPES.SELECT, data: ['', 'Water', 'Ammonia', 'Freon', 'Ethylene-glycol'], isMandatory: MANDATORY }]),
    createRowData('Cooling Tower type', 'external heat exchanger/evaporator - condenser*/direct contact', [{ location: 'd16', type: TYPES.SELECT, data: ['', 'external heat exchanger', 'evaporator - condenser*', 'direct contact'], isMandatory: MANDATORY }]),
]//
export const operationalPropertiesData = [
    createRowData('CWR - Cooling Water Return temperature', 'oC', [{ location: 'd21', type: TYPES.RANGE, data: { min: 0, max: 40, ticks: 3 }, isMandatory: MANDATORY }]),
    createRowData('CWS - Cooling Water Supply temperature', 'oC', [{ location: 'd22', type: TYPES.RANGE, data: { min: 0, max: 40, ticks: 2 }, isMandatory: MANDATORY }]),
    createRowData('Temperature difference', 'oC', [{ location: 'd23', type: TYPES.NOT_EDITABLE }]),
    createRowData('Skin Temp. (highest in the system) ', 'oC', [{ location: 'd24', type: TYPES.RANGE, data: { min: 0, max: 100, ticks: 10 }, isMandatory: MANDATORY }]),
    createRowData('Days of week in operation', 'days per week', [{ location: 'd25', type: TYPES.RANGE, data: { min: 0, max: 7, ticks: 1 }, isMandatory: MANDATORY }]),
    createRowData('Hours/day in operation)', 'hours per day', [{ location: 'd26', type: TYPES.RANGE, data: { min: 0, max: 24, ticks: 1 }, isMandatory: MANDATORY }]),
    createRowData('# weeks in operation', 'weeks per year', [{ location: 'd27', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
]

export const waterOriginData = [
    createRowData('Water Source', 'Public/Well/River/Reuse', [{ location: 'j8', type: TYPES.SELECT, data: ['', 'Public', 'Well', 'River', 'Reuse'], isMandatory: MANDATORY }]),
    createRowData('Water Cost', '$USD / m3', [{ location: 'j9', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('Drain Cost', '$USD / m3', [{ location: 'j10', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
]
export const operationCostsData = [
    createRowData('Chemical costs', '$USD/year', [{ location: 'j13', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('Elecrtricity Cost', '$USD/kWH', [{ location: 'j14', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('# plant stoppages due to blockages', '#/year', [{ location: 'j15', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('Thickness of scaling in heat exhanger', 'mm', [{ location: 'j16', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('Cost of  cleaning of heat exchanger', '$USD/year', [{ location: 'j17', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
]
export const enironmentalData = [
    createRowData('Discharge limitations', 'Chlorides (ppm)', [{ location: 'j20', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('Discharge limitations', 'Sulfates (ppm)', [{ location: 'j21', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('Discharge limitations', 'pH', [{ location: 'j22', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('Discharge limitations', 'Chlorine (ppm)', [{ location: 'j23', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('Water Source', 'Yes/No', [{ location: 'j24', type: TYPES.SELECT, data: ['', 'Yes', 'No'], isMandatory: MANDATORY }]),
    createRowData('Water Source', 'Yes/No', [{ location: 'j25', type: TYPES.SELECT, data: ['', 'Yes', 'No'], isMandatory: MANDATORY }]),
]
export const customersProblemsAndRequestsData = [
    createRowData('Water Conservation', null, [{ location: 'i29', type: TYPES.SELECT, data: ['', 'Yes', 'No'], isMandatory: MANDATORY }]),
    createRowData('Energy Savings', null, [{ location: 'i30', type: TYPES.SELECT, data: ['', 'Yes', 'No'], isMandatory: MANDATORY }]),
    createRowData('Bio-contamination problems', null, [{ location: 'i31', type: TYPES.SELECT, data: ['', 'Yes', 'No'], isMandatory: MANDATORY }]),
    createRowData('Scale Precipitation problems', null, [{ location: 'i32', type: TYPES.SELECT, data: ['', 'Yes', 'No'], isMandatory: MANDATORY }]),
    createRowData('Silica Related Problems', null, [{ location: 'i33', type: TYPES.SELECT, data: ['', 'Yes', 'No'], isMandatory: MANDATORY }]),
    createRowData('Chemical Elimination', null, [{ location: 'i34', type: TYPES.SELECT, data: ['', 'Yes', 'No'], isMandatory: MANDATORY }]),
]


export const waterAnalysisData = [
    createRowData('Conductivity', 'µS/cm', [{ location: 'd32', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'e32', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'f32', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('pH', 'Units', [{ location: 'd33', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'e33', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'f33', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY, defaultValue: 9 }]),
    createRowData('Total Hardness', 'ppm as CaCO3', [{ location: 'd34', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'e34', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'f34', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Carbonate Hardness', 'ppm as CaCO3', [{ location: 'd35', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'e35', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'f35', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Chlorides', 'ppm', [{ location: 'd36', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'e36', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'f36', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Iron', 'ppm', [{ location: 'd37', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'e37', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'f37', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Silica', 'ppm', [{ location: 'd38', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'e38', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'f38', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Sulphate', 'ppm', [{ location: 'd39', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'e39', type: TYPES.NUMERIC, isMandatory: MANDATORY }, { location: 'f39', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]
export const thermodynamicCalculationsData = [
    createRowData('UET treatment cycles of concentration', '#', [{ location: 'd47', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e47', type: TYPES.NUMERIC, isMandatory: MANDATORY }]),
    createRowData('Evaporation Rate', 'm3/h', [{ location: 'd48', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e48', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Condenser capacity', 'Kcal/hour', [{ location: 'd49', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e49', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Tons of refrigeration', 'TR', [{ location: 'd50', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e50', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Make up flow rate', 'm3/h', [{ location: 'd51', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e51', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Blowdown flow rate', 'm3/h', [{ location: 'd52', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e52', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]
export const potentialWaterSavingData = [
    createRowData('Calculated Water Saving (m3/h)', null, [{ location: 'c55', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Annual Hourly Operation(h/year)', null, [{ location: 'c56', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('*Annual Water Saving  (m3/year)', null, [{ location: 'c57', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('% of water saving from blowdown', null, [{ location: 'c58', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('% of water saving from make up', null, [{ location: 'c59', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]
export const predictiveWaterAnalysisData = [
    createRowData('Conductivity', 'µS/cm', [{ location: 'd63', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e63', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('pH', 'Units', [{ location: 'd64', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e64', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY, defaultValue: 9 }]),
    createRowData('Total Hardness', 'ppm as CaCO3', [{ location: 'd65', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e65', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Carbonate Hardness', 'ppm as CaCO3', [{ location: 'd66', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e66', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Chlorides', 'ppm', [{ location: 'd67', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e67', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Iron', 'ppm', [{ location: 'd68', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e68', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY, defaultValue: 9 }]),
    createRowData('Silica', 'ppm', [{ location: 'd69', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e69', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Sulphate', 'ppm', [{ location: 'd70', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'e70', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]
export const sizingFactorsData = [
    createRowData('Silica Factor', '>15', [{ location: 'l47', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Hardness Factor', '>250', [{ location: 'l48', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Ammonia Factor', '>300', [{ location: 'l49', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Freon Factor', 'Ammonia', [{ location: 'l50', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('pPipe Length Factor', 'Freon', [{ location: 'l51', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Pipe Length Factor', '>100', [{ location: 'l52', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Evaporator - condenser Factor', 'Evaporator - condenser', [{ location: 'l53', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('High Silica and low chlorides', 'Cl<50 & Si>50', [{ location: 'l54', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Skin Temp.', '>60', [{ location: 'l55', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]

export const sizingOfReactorsData = [
    createRowData('Sizing (# of Reactors)', null, [{ location: 'i58', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]

export const modelConfigurationData = [
    createRowData('1X4', null, [{ location: 'i62', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'j62', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('2X4', null, [{ location: 'i63', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'j63', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('4X4', null, [{ location: 'i64', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }, { location: 'j64', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]
export const UETCirculationFlowrateData = [
    createRowData('minimum flow rate', null, [{ location: 'i68', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('maximum flow rate', null, [{ location: 'i69', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]

// Savings Calculation

export const theoreticalEnergySavingsData = [
    createRowData('Electricity Cost', '$USD/kWH', [{ location: 'd79', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Scale Deposit Thickness', 'mm', [{ location: 'd80', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Efficiency Loss', '%', [{ location: 'd81', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Total Theoretical Energy Savings', '$USD/Year', [{ location: 'd82', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]
export const ROICalculationData = [
    createRowData('Potential Water Savings', '$USD/Year', [{ location: 'd85', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Potential Energy Savings', '$USD/Year', [{ location: 'd86', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Chemical Savings', '$USD/Year', [{ location: 'd87', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Equipment Life efficiency savings', '$USD/Year', [{ location: 'd88', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Costs for cleaning heat exhanger', '$USD/Year', [{ location: 'd89', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Total Potential Savings ', '$USD/Year', [{ location: 'd91', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]
export const UETWorkingParametersData = [
    createRowData('Approx. Electricity Consumption', 'kWH', [{ location: 'j79', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
    createRowData('Approx. Footprint area (inc. service)', 'm2', [{ location: 'j80', type: TYPES.NOT_EDITABLE, isMandatory: MANDATORY }]),
]
