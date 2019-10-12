import {
    mechanicalPropertiesData,
    operationalPropertiesData,
    waterOriginData,
    operationCostsData,
    enironmentalData,
    customersProblemsAndRequestsData,
    waterAnalysisData,
    thermodynamicCalculationsData,
    // potentialWaterSavingData,
    // predictiveWaterAnalysisData,
    // sizingFactorsData,
    // sizingOfReactorsData,
    // modelConfigurationData,
    // UETCirculationFlowrateData,
    // theoreticalEnergySavingsData,
    // ROICalculationData,
    // UETWorkingParametersData,
} from 'src/components/data/index.js'

export const areTableMandatoryFieldsFilled = (fields, tableIndex, tablesData, skipped, setSkipped, setActiveStep) => {
    const filled = fields.every(field => tablesData[field])
    let _skipped = [...skipped]
    if (filled) {
        setActiveStep(tableIndex + 1)
        const index = _skipped.indexOf(tableIndex)
        if (index > -1) {
            _skipped.splice(index, 1)
            setSkipped(_skipped)
        }
    } else {
        if (!_skipped.includes(tableIndex)) {
            _skipped.push(tableIndex)
            setSkipped(_skipped)
        }

    }
}

const tablesMandatoryFields = {}

// find the mandatory fields and push them to the object 'tablesMandatoryFields'
//**
//  * 
//  * @param {array} data 
//  * @param {string} name 
//  */
const setMandatorydata = (data, name) => {
    data.forEach(row => row.fields.forEach(field => {
        if (field.isMandatory) {
            if (tablesMandatoryFields[name]) {
                tablesMandatoryFields[name].push(field.location)
            } else {
                tablesMandatoryFields[name] = []
                tablesMandatoryFields[name].push(field.location)

            }
        }
    }))
}

// list of tables to find the mandatory fields in each tables
setMandatorydata(mechanicalPropertiesData, 'mechanicalProperties')
setMandatorydata(operationalPropertiesData, 'operationalProperties')
setMandatorydata(waterOriginData, 'waterOrigin')
setMandatorydata(operationCostsData, 'operationCosts')
setMandatorydata(enironmentalData, 'enironmental')
setMandatorydata(customersProblemsAndRequestsData, 'customersProblemsAndRequests')
setMandatorydata(waterAnalysisData, 'waterAnalysis')
setMandatorydata(thermodynamicCalculationsData, 'thermodynamicCalculations')


export const updateStepper = (tablesData, skipped, setSkipped, setActiveStep) => {
    Object.values(tablesMandatoryFields).forEach((fields, dataIndex) => {
        areTableMandatoryFieldsFilled(fields, dataIndex, tablesData, skipped, setSkipped, setActiveStep)
    })
}
