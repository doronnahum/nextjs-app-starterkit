import React, { Component } from 'react'
import Table from 'src/components/table/Table'
import TableToInputs from 'src/components/table/TableToInputs'
import connect from './connect'
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

class Tables extends Component {

    calculateSavings = () => {
        this.props.actions.calculateSavings()
    }

    render() {
        const { className } = this.props
        return (
            <div className={className}>

                <div className={className + '__section-1'}>
                    <TableToInputs tableTitleBig='Mechanical Properties'
                        data={mechanicalPropertiesData} />
                    <TableToInputs tableTitleBig='Operational Properties'
                        data={operationalPropertiesData} />
                    <TableToInputs tableTitleBig='Water Origin'
                        data={waterOriginData} />
                    <TableToInputs tableTitleBig='Operation Costs'
                        data={operationCostsData} />
                    <TableToInputs tableTitleBig='Enironmental Data'
                        data={enironmentalData} />
                    <TableToInputs
                        tableTitleBig={'Customer\'s problems and requests'}
                        data={customersProblemsAndRequestsData}
                    />
                    <TableToInputs waterAnalysisTitle
                        headerCols={['Water Analysis', 'Make up', 'Actual Circulation', 'Calculated Circulation']}
                        data={waterAnalysisData} />
                </div>
                <h1>Sizing</h1>

                <div className={className + '__section-2-sizing'}>
                    <TableToInputs tableTitleBig='Thermodynamic Calculations'
                        headerCols={['Thermodynamic Calculations', 'Current', 'UET']}
                        data={thermodynamicCalculationsData}
                    />
                    <TableToInputs tableTitleBig='Sizing Factors'
                        headerCols={['Sizing Factors', 'Benchmark', 'Actual']}
                        data={sizingFactorsData}
                        marks
                    />
                    <TableToInputs tableTitleBig='Potential Water Saving'
                        headerCols={['Potential Water Saving', 'Value']}
                        data={potentialWaterSavingData}
                    />
                    <TableToInputs
                        data={sizingOfReactorsData}
                    />
                    <TableToInputs tableTitleBig='Predictive Water Analysis'
                        headerCols={['Predictive Water Analysis', 'Make up', 'UET Circulation']}
                        data={predictiveWaterAnalysisData}
                    />
                    <TableToInputs tableTitleBig='Model Configuration'
                        headerCols={['Model Configuration', '# of Units', 'rounded up']}
                        data={modelConfigurationData}
                    />
                    <TableToInputs tableTitleBig='UET circulation flow rate'
                        headerCols={['UET circulation flow rate', 'm3/h']}
                        data={UETCirculationFlowrateData}
                    />
                </div>
                <button onClick={this.calculateSavings}
                    style={{ padding: '10px 15px', backgroundColor: 'lightgreen', borderRadius: '50%', marginTop: 20 }}>
                    <h1>calculate</h1>
                </button>
                <h1>Savings Calculation</h1>
                <h3>note: this Savings calculation is a theoretical tool and might change from different places </h3>
                <div className={className + '__section-3-savings-calculation'}>
                    <div>
                        <TableToInputs tableTitleBig='Theoretical Energy Savings'
                            data={theoreticalEnergySavingsData}
                        />
                        <TableToInputs tableTitleBig='ROI Calculation'
                            // headerCols={['ROI Calculation', '', '$USD/Year']}
                            data={ROICalculationData}
                        />
                    </div>
                    <div>
                        {/* <h2>Working Parameters</h2> */}
                        <TableToInputs tableTitleBig='UET working parameters (estimated*)'
                            // headerCols={['UET working parameters (estimated*)', 'Units', 'Value']}
                            data={UETWorkingParametersData}
                        />

                    </div>


                </div>
            </div >
        )
    }
}
export default connect(Tables)