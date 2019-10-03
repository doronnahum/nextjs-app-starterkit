import {
  mechanicalPropertiesData,
  operationalPropertiesData,
  waterOriginData,
  operationCostsData,
  enironmentalData,
  waterAnalysisData,
  customersProblemsAndRequestsData,
  thermodynamicCalculationsData,
  potentialWaterSavingData,
  predictiveWaterAnalysis,
  sizingFactorsData,
  sizingOfReactorsData,
  modelConfigurationData,
  UETCirculationFlowrateData,
  theoreticalEnergySavingsData,
  ROICalculationData,
  UETWorkingParameters
} from 'src/components/data'
const defaultValues = {};

[...mechanicalPropertiesData,
...operationalPropertiesData,
...waterOriginData,
...operationCostsData,
...enironmentalData,
...waterAnalysisData,
...customersProblemsAndRequestsData,
...thermodynamicCalculationsData,
...potentialWaterSavingData,
...predictiveWaterAnalysis,
...sizingFactorsData,
...sizingOfReactorsData,
...modelConfigurationData,
...UETCirculationFlowrateData,
...theoreticalEnergySavingsData,
...ROICalculationData,
...UETWorkingParameters
].forEach(item => {
  item.fields.forEach((field) => {
    defaultValues[field.location] = field.defaultValue
  })
})
const initialState = {
  windowSize: {},
  tablesData: {
    data: defaultValues,
    loading: false,
    error: null
  },
};
export default initialState;
