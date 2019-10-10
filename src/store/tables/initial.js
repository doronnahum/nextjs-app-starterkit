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
  predictiveWaterAnalysisData,
  sizingFactorsData,
  sizingOfReactorsData,
  modelConfigurationData,
  UETCirculationFlowrateData,
  theoreticalEnergySavingsData,
  ROICalculationData,
  UETWorkingParametersData
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
...predictiveWaterAnalysisData,
...sizingFactorsData,
...sizingOfReactorsData,
...modelConfigurationData,
...UETCirculationFlowrateData,
...theoreticalEnergySavingsData,
...ROICalculationData,
...UETWorkingParametersData
].forEach(item => {
  item.fields.forEach((field) => {
    defaultValues[field.location] = field.defaultValue
  })
  defaultValues['e30'] = 0 // Because its is not in the tables data, it is sepereted
});

// sizing Factors  //  The user shouldnt see this, there for it is only in the redux and not in the tables
defaultValues['j47'] = 50;
defaultValues['j48'] = 10;
defaultValues['j49'] = 20;
defaultValues['j50'] = 100;
defaultValues['j51'] = 50;
defaultValues['j52'] = 10;
defaultValues['j53'] = 50;
defaultValues['j54'] = 25;
defaultValues['j55'] = 1;

const initialState = {
  windowSize: {},
  tablesData: {
    data: defaultValues,
    loading: false,
    error: null
  },
};
export default initialState;
