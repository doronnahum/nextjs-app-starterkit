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

//create tables with more than one values
function createRowData(name, units, mandatory, fields) {
    fields.forEach(field => {
        field.defaultValue = getDefaultValue(field.type)
    })
    return { name, units, mandatory, fields };
}

export const mechanicalPropertiesData = [
    createRowData('Number of CT (interconnected)', '# (interconnected cooling towers)', MANDATORY, [{ location: 'd8', type: TYPES.RANGE, data: { min: 0, max: 10, ticks: 1 } }]),
    createRowData('Number of Circulation Pumps', '#  (operational + standby) ', NOT_MANDATORY, [{ location: 'd9', type: TYPES.RANGE, data: { min: 0, max: 10, ticks: 1 } }]),
    createRowData('Total pumps flow rate capacity', 'm3/h', NOT_MANDATORY, [{ location: 'd10', type: TYPES.RANGE, data: { min: 0, max: 50, ticks: 1 } }]),
    createRowData('Actual cooling circulation flow rate', 'm3/h', NOT_MANDATORY, [{ location: 'd11', type: TYPES.NUMERIC }]),
    createRowData('Available flowrate for UET units', 'm3/h', MANDATORY, [{ location: 'd12', type: TYPES.NOT_EDITABLE }]),
    createRowData('Total Basin volume (with equation line)', 'm3', NOT_MANDATORY, [{ location: 'd13', type: TYPES.RANGE, data: { min: 0, max: 10, ticks: 1 } }]),
    createRowData('Pipe length from CT to H.Ex. (approx.)', 'meters', MANDATORY, [{ location: 'd14', type: TYPES.NUMERIC }]),
    createRowData('type of fluid to be chilled', 'Water/Ammonia/Freon/Ethylene-glycol', MANDATORY, [{ location: 'd15', type: TYPES.SELECT, data: ['', 'Water', 'Ammonia', 'Freon', 'Ethylene-glycol'] }]),
    createRowData('Cooling Tower type', 'external heat exchanger/evaporator - condenser*/direct contact', MANDATORY, [{ location: 'd16', type: TYPES.SELECT, data: ['', 'external heat exchanger', 'evaporator - condenser*', 'direct contact'] }]),
]//
export const operationalPropertiesData = [
    createRowData('CWR - Cooling Water Return temperature', 'oC', MANDATORY, [{ location: 'd21', type: TYPES.RANGE, data: { min: 0, max: 40, ticks: 3 } }]),
    createRowData('CWS - Cooling Water Supply temperature', 'oC', MANDATORY, [{ location: 'd22', type: TYPES.RANGE, data: { min: 0, max: 40, ticks: 2 } }]),
    createRowData('Temperature difference', 'oC', NOT_MANDATORY, [{ location: 'd23', type: TYPES.NOT_EDITABLE }]),
    createRowData('Skin Temp. (highest in the system) ', 'oC', MANDATORY, [{ location: 'd24', type: TYPES.RANGE, data: { min: 0, max: 100, ticks: 10 } }]),
    createRowData('Days of week in operation', 'days per week', MANDATORY, [{ location: 'd25', type: TYPES.RANGE, data: { min: 0, max: 7, ticks: 1 } }]),
    createRowData('Hours/day in operation)', 'hours per day', MANDATORY, [{ location: 'd26', type: TYPES.RANGE, data: { min: 0, max: 24, ticks: 1 } }]),
    createRowData('# weeks in operation', 'weeks per year', MANDATORY, [{ location: 'd27', type: TYPES.NOT_EDITABLE }]),
]

export const waterOriginData = [
    createRowData('Water Source', 'Public/Well/River/Reuse', MANDATORY, [{ location: 'j8', type: TYPES.SELECT, data: ['', 'Public', 'Well', 'River', 'Reuse'] }]),
    createRowData('Water Cost', '$USD / m3', MANDATORY, [{ location: 'j9', type: TYPES.NUMERIC }]),
    createRowData('Drain Cost', '$USD / m3', MANDATORY, [{ location: 'j10', type: TYPES.NUMERIC }]),
]
export const operationCostsData = [
    createRowData('Chemical costs', '$USD/year', MANDATORY, [{ location: 'j13', type: TYPES.NUMERIC }]),
    createRowData('Elecrtricity Cost', '$USD/kWH', MANDATORY, [{ location: 'j14', type: TYPES.NUMERIC }]),
    createRowData('# plant stoppages due to blockages', '#/year', MANDATORY, [{ location: 'j15', type: TYPES.NUMERIC }]),
    createRowData('Thickness of scaling in heat exhanger', 'mm', MANDATORY, [{ location: 'j16', type: TYPES.NUMERIC }]),
    createRowData('Cost of  cleaning of heat exchanger', '$USD/year', MANDATORY, [{ location: 'j17', type: TYPES.NUMERIC }]),
]
export const enironmentalData = [
    createRowData('Discharge limitations', 'Chlorides (ppm)', MANDATORY, [{ location: 'j20', type: TYPES.NUMERIC }]),
    createRowData('Discharge limitations', 'Sulfates (ppm)', MANDATORY, [{ location: 'j21', type: TYPES.NUMERIC }]),
    createRowData('Discharge limitations', 'pH', MANDATORY, [{ location: 'j22', type: TYPES.NUMERIC }]),
    createRowData('Discharge limitations', 'Chlorine (ppm)', MANDATORY, [{ location: 'j23', type: TYPES.NUMERIC }]),
    createRowData('Water Source', 'Yes/No', MANDATORY, [{ location: 'j24', type: TYPES.SELECT, data: ['', 'Yes', 'No'] }]),
    createRowData('Water Source', 'Yes/No', MANDATORY, [{ location: 'j25', type: TYPES.SELECT, data: ['', 'Yes', 'No'] }]),
]
export const customersProblemsAndRequestsData = [
    createRowData('Water Conservation', null, MANDATORY, [{ location: 'i29', type: TYPES.SELECT, data: ['', 'Yes', 'No'] }]),
    createRowData('Energy Savings', null, MANDATORY, [{ location: 'i30', type: TYPES.SELECT, data: ['', 'Yes', 'No'] }]),
    createRowData('Bio-contamination problems', null, MANDATORY, [{ location: 'i31', type: TYPES.SELECT, data: ['', 'Yes', 'No'] }]),
    createRowData('Scale Precipitation problems', null, MANDATORY, [{ location: 'i32', type: TYPES.SELECT, data: ['', 'Yes', 'No'] }]),
    createRowData('Silica Related Problems', null, MANDATORY, [{ location: 'i33', type: TYPES.SELECT, data: ['', 'Yes', 'No'] }]),
    createRowData('Chemical Elimination', null, MANDATORY, [{ location: 'i34', type: TYPES.SELECT, data: ['', 'Yes', 'No'] }]),
]


export const waterAnalysisData = [
    createRowData('Conductivity', 'µS/cm', MANDATORY, [{ location: 'd32', type: TYPES.NUMERIC }, { location: 'e32', type: TYPES.NOT_EDITABLE }, { location: 'f32', type: TYPES.NOT_EDITABLE }]),
    createRowData('pH', 'Units', MANDATORY, [{ location: 'd33', type: TYPES.NUMERIC }, { location: 'e33', type: TYPES.NUMERIC }, { location: 'f33', type: TYPES.NOT_EDITABLE }]),
    createRowData('Total Hardness', 'ppm as CaCO3', MANDATORY, [{ location: 'd34', type: TYPES.NUMERIC }, { location: 'e34', type: TYPES.NUMERIC }, { location: 'f34', type: TYPES.NOT_EDITABLE }]),
    createRowData('Carbonate Hardness', 'ppm as CaCO3', MANDATORY, [{ location: 'd35', type: TYPES.NUMERIC }, { location: 'e35', type: TYPES.NUMERIC }, { location: 'f35', type: TYPES.NOT_EDITABLE }]),
    createRowData('Chlorides', 'ppm', MANDATORY, [{ location: 'd36', type: TYPES.NUMERIC }, { location: 'e36', type: TYPES.NUMERIC }, { location: 'f36', type: TYPES.NOT_EDITABLE }]),
    createRowData('Iron', 'ppm', MANDATORY, [{ location: 'd37', type: TYPES.NUMERIC }, { location: 'e37', type: TYPES.NUMERIC }, { location: 'f37', type: TYPES.NOT_EDITABLE }]),
    createRowData('Silica', 'ppm', MANDATORY, [{ location: 'd38', type: TYPES.NUMERIC }, { location: 'e38', type: TYPES.NUMERIC }, { location: 'f38', type: TYPES.NOT_EDITABLE }]),
    createRowData('Sulphate', 'ppm', MANDATORY, [{ location: 'd39', type: TYPES.NUMERIC }, { location: 'e39', type: TYPES.NUMERIC }, { location: 'f39', type: TYPES.NOT_EDITABLE }]),
]
export const thermodynamicCalculationsData = [
    createRowData('UET treatment cycles of concentration', '#', MANDATORY, [{ location: 'd47', type: TYPES.NOT_EDITABLE }, { location: 'e47', type: TYPES.NUMERIC }]),
    createRowData('Evaporation Rate', 'm3/h', MANDATORY, [{ location: 'd48', type: TYPES.NOT_EDITABLE }, { location: 'e48', type: TYPES.NOT_EDITABLE }]),
    createRowData('Condenser capacity', 'Kcal/hour', MANDATORY, [{ location: 'd49', type: TYPES.NOT_EDITABLE }, { location: 'e49', type: TYPES.NOT_EDITABLE }]),
    createRowData('Tons of refrigeration', 'TR', MANDATORY, [{ location: 'd50', type: TYPES.NOT_EDITABLE }, { location: 'e50', type: TYPES.NOT_EDITABLE }]),
    createRowData('Make up flow rate', 'm3/h', MANDATORY, [{ location: 'd51', type: TYPES.NOT_EDITABLE }, { location: 'e51', type: TYPES.NOT_EDITABLE }]),
    createRowData('Blowdown flow rate', 'm3/h', MANDATORY, [{ location: 'd52', type: TYPES.NOT_EDITABLE }, { location: 'e52', type: TYPES.NOT_EDITABLE }]),
]
export const potentialWaterSavingData = [
    createRowData('Calculated Water Saving (m3/h)', null, MANDATORY, [{ location: 'c55', type: TYPES.NOT_EDITABLE }]),
    createRowData('Annual Hourly Operation(h/year)', null, MANDATORY, [{ location: 'c56', type: TYPES.NOT_EDITABLE }]),
    createRowData('*Annual Water Saving  (m3/year)', null, MANDATORY, [{ location: 'c57', type: TYPES.NOT_EDITABLE }]),
    createRowData('% of water saving from blowdown', null, MANDATORY, [{ location: 'c58', type: TYPES.NOT_EDITABLE }]),
    createRowData('% of water saving from make up', null, MANDATORY, [{ location: 'c59', type: TYPES.NOT_EDITABLE }]),
]
export const predictiveWaterAnalysis = [
    createRowData('Conductivity', 'µS/cm', MANDATORY, [{ location: 'd63', type: TYPES.NOT_EDITABLE }, { location: 'e63', type: TYPES.NOT_EDITABLE }]),
    createRowData('pH', 'Units', MANDATORY, [{ location: 'd64', type: TYPES.NOT_EDITABLE }, { location: 'e64', type: TYPES.NOT_EDITABLE }]),
    createRowData('Total Hardness', 'ppm as CaCO3', MANDATORY, [{ location: 'd65', type: TYPES.NOT_EDITABLE }, { location: 'e65', type: TYPES.NOT_EDITABLE }]),
    createRowData('Carbonate Hardness', 'ppm as CaCO3', MANDATORY, [{ location: 'd66', type: TYPES.NOT_EDITABLE }, { location: 'e66', type: TYPES.NOT_EDITABLE }]),
    createRowData('Chlorides', 'ppm', MANDATORY, [{ location: 'd67', type: TYPES.NOT_EDITABLE }, { location: 'e67', type: TYPES.NOT_EDITABLE }]),
    createRowData('Iron', 'ppm', MANDATORY, [{ location: 'd68', type: TYPES.NOT_EDITABLE }, { location: 'e68', type: TYPES.NOT_EDITABLE }]),
    createRowData('Silica', 'ppm', MANDATORY, [{ location: 'd69', type: TYPES.NOT_EDITABLE }, { location: 'e69', type: TYPES.NOT_EDITABLE }]),
    createRowData('Sulphate', 'ppm', MANDATORY, [{ location: 'd70', type: TYPES.NOT_EDITABLE }, { location: 'e70', type: TYPES.NOT_EDITABLE }]),
]
export const sizingFactorsData = [
    createRowData('Silica Factor', '>15', MANDATORY, [{ location: 'j47', type: TYPES.NOT_EDITABLE }, { location: 'l47', type: TYPES.NOT_EDITABLE }]),
    createRowData('Hardness Factor', '>250', MANDATORY, [{ location: 'j48', type: TYPES.NOT_EDITABLE }, { location: 'l48', type: TYPES.NOT_EDITABLE }]),
    createRowData('Ammonia Factor', '>300', MANDATORY, [{ location: 'j49', type: TYPES.NOT_EDITABLE }, { location: 'l49', type: TYPES.NOT_EDITABLE }]),
    createRowData('Freon Factor', 'Ammonia', MANDATORY, [{ location: 'j50', type: TYPES.NOT_EDITABLE }, { location: 'l50', type: TYPES.NOT_EDITABLE }]),
    createRowData('pPipe Length Factor', 'Freon', MANDATORY, [{ location: 'j51', type: TYPES.NOT_EDITABLE }, { location: 'l51', type: TYPES.NOT_EDITABLE }]),
    createRowData('Pipe Length Factor', '>100', MANDATORY, [{ location: 'j52', type: TYPES.NOT_EDITABLE }, { location: 'l52', type: TYPES.NOT_EDITABLE }]),
    createRowData('Evaporator - condenser Factor', 'Evaporator - condenser', MANDATORY, [{ location: 'j53', type: TYPES.NOT_EDITABLE }, { location: 'l53', type: TYPES.NOT_EDITABLE }]),
    createRowData('High Silica and low chlorides', 'Cl<50 & Si>50', MANDATORY, [{ location: 'j54', type: TYPES.NOT_EDITABLE }, { location: 'l54', type: TYPES.NOT_EDITABLE }]),
    createRowData('Skin Temp.', '>60', MANDATORY, [{ location: 'j55', type: TYPES.NOT_EDITABLE }, { location: 'l55', type: TYPES.NOT_EDITABLE }]),
]

export const sizingOfReactorsData = [
    createRowData('Sizing (# of Reactors)', null, MANDATORY, [{ location: 'i58', type: TYPES.NOT_EDITABLE }]),
]

export const modelConfigurationData = [
    createRowData('1X4', null, MANDATORY, [{ location: 'i62', type: TYPES.NOT_EDITABLE }, { location: 'j62', type: TYPES.NOT_EDITABLE }]),
    createRowData('2X4', null, MANDATORY, [{ location: 'i63', type: TYPES.NOT_EDITABLE }, { location: 'j63', type: TYPES.NOT_EDITABLE }]),
    createRowData('4X4', null, MANDATORY, [{ location: 'i64', type: TYPES.NOT_EDITABLE }, { location: 'j64', type: TYPES.NOT_EDITABLE }]),
]
export const UETCirculationFlowrateData = [
    createRowData('minimum flow rate', null, MANDATORY, [{ location: 'i68', type: TYPES.NOT_EDITABLE }]),
    createRowData('maximum flow rate', null, MANDATORY, [{ location: 'i69', type: TYPES.NOT_EDITABLE }]),
]

// Savings Calculation

export const theoreticalEnergySavingsData = [
    createRowData('Electricity Cost', '$USD/kWH', MANDATORY, [{ location: 'd79', type: TYPES.NOT_EDITABLE }]),
    createRowData('Scale Deposit Thickness', 'mm', MANDATORY, [{ location: 'd80', type: TYPES.NOT_EDITABLE }]),
    createRowData('Efficiency Loss', '%', MANDATORY, [{ location: 'd81', type: TYPES.NOT_EDITABLE }]),
    createRowData('Total Theoretical Energy Savings', '$USD/Year', MANDATORY, [{ location: 'd82', type: TYPES.NOT_EDITABLE }]),
]
export const ROICalculationData = [
    createRowData('Potential Water Savings', '$USD/Year', MANDATORY, [{ location: 'd85', type: TYPES.NOT_EDITABLE }]),
    createRowData('Potential Energy Savings', '$USD/Year', MANDATORY, [{ location: 'd86', type: TYPES.NOT_EDITABLE }]),
    createRowData('Chemical Savings', '$USD/Year', MANDATORY, [{ location: 'd87', type: TYPES.NOT_EDITABLE }]),
    createRowData('Equipment Life efficiency savings', '$USD/Year', MANDATORY, [{ location: 'd88', type: TYPES.NOT_EDITABLE }]),
    createRowData('Costs for cleaning heat exhanger', '$USD/Year', MANDATORY, [{ location: 'd89', type: TYPES.NOT_EDITABLE }]),
    createRowData('Total Potential Savings ', '$USD/Year', MANDATORY, [{ location: 'd91', type: TYPES.NOT_EDITABLE }]),
]
export const UETWorkingParameters = [
    createRowData('Approx. Electricity Consumption', 'kWH', MANDATORY, [{ location: 'j79', type: TYPES.NOT_EDITABLE }]),
    createRowData('Approx. Footprint area (inc. service)', 'm2', MANDATORY, [{ location: 'j80', type: TYPES.NOT_EDITABLE }]),
]
