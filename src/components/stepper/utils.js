import {
    mechanicalPropertiesData,
    operationalPropertiesData,
    waterOriginData,
    operationCostsData,
    enironmentalData,
    customersProblemsAndRequestsData,
    waterAnalysisData,
    thermodynamicCalculationsData,
    potentialWaterSavingData,
    predictiveWaterAnalysisData,
    sizingFactorsData,
    sizingOfReactorsData,
    modelConfigurationData,
    UETCirculationFlowrateData,
    theoreticalEnergySavingsData,
    ROICalculationData,
    UETWorkingParametersData,
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

export const updateStepper = (tablesData, skipped, setSkipped, setActiveStep) => {
    const mechanicalPropertiesMandatory = {
        index: 0,
        fields: mechanicalPropertiesData.filter(row => row.fields.some(field => field.isMandatory)).map(row => row.fields.map(field => field.location)).map(row => row[0]),
    }
    const operationalPropertiesMandatory = {
        index: 1,
        fields: operationalPropertiesData.filter(row => row.fields.some(field => field.isMandatory)).map(row => row.fields.map(field => field.location)).map(row => row[0]),
    }
    const waterOrigin = {
        index: 2,
        fields: waterOriginData.filter(row => row.fields.some(field => field.isMandatory)).map(row => row.fields.map(field => field.location)).map(row => row[0]),
    }
    const operationCosts = {
        index: 3,
        fields: operationCostsData.filter(row => row.fields.some(field => field.isMandatory)).map(row => row.fields.map(field => field.location)).map(row => row[0]),
    }
    const enironmental = {
        index: 4,
        fields: enironmentalData.filter(row => row.fields.some(field => field.isMandatory)).map(row => row.fields.map(field => field.location)).map(row => row[0]),
    }
    const customersProblemsAndRequests = {
        index: 5,
        fields: customersProblemsAndRequestsData.filter(row => row.fields.some(field => field.isMandatory)).map(row => row.fields.map(field => field.location)).map(row => row[0]),
    }
    const waterAnalysis = {
        index: 6,
        fields: waterAnalysisData.filter(row => row.fields.some(field => field.isMandatory)).map(row => row.fields.map(field => field.location)).map(row => row[0]),
    }
    const thermodynamicCalculations = {
        index: 7,
        fields: thermodynamicCalculationsData.filter(row => row.fields.some(field => field.isMandatory)).map(row => row.fields.map(field => field.location)).map(row => row[0]),
    }
    const arr = [
        mechanicalPropertiesMandatory,
        operationalPropertiesMandatory,
        waterOrigin,
        operationCosts,
        enironmental,
        customersProblemsAndRequests,
        waterAnalysis,
        thermodynamicCalculations,
    ]
    arr.forEach((data) => {
        areTableMandatoryFieldsFilled(data.fields, data.index, tablesData, skipped, setSkipped, setActiveStep)
    })

}