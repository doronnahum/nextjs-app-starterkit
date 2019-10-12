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
                    <Table waterAnalysisTitle
                        headerCols={['Water Analysis', 'Units', 'Make up', 'Actual Circulation', 'Calculated Circulation']}
                        data={waterAnalysisData} />
                </div>
                <h1>Sizing</h1>

                <div className={className + '__section-2-sizing'}>
                    <Table
                        headerCols={['Thermodynamic Calculations', 'Value', 'Current', 'UET']}
                        data={thermodynamicCalculationsData}
                    />
                    <Table
                        headerCols={['Sizing Factors', 'Benchmark', 'Actual']}
                        data={sizingFactorsData}
                    />
                    <Table
                        headerCols={['Potential Water Saving', 'Value']}
                        data={potentialWaterSavingData}
                    />
                    <Table
                        data={sizingOfReactorsData}
                    />
                    <Table
                        headerCols={['Predictive Water Analysis', 'Units', 'Make up', 'UET Circulation']}
                        data={predictiveWaterAnalysisData}
                    />
                    <Table
                        headerCols={['Model Configuration', '# of Units', 'rounded up']}
                        data={modelConfigurationData}
                    />
                    <Table
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
                        <Table
                            headerCols={['Theoretical Energy Savings', 'Units', 'Value']}
                            data={theoreticalEnergySavingsData}
                        />
                        <Table
                            headerCols={['ROI Calculation', '', '$USD/Year']}
                            data={ROICalculationData}
                        />
                    </div>
                    <div>
                        <h2>Working Parameters</h2>
                        <Table
                            headerCols={['UET working parameters (estimated*)', 'Units', 'Value']}
                            data={UETWorkingParametersData}
                        />

                    </div>


                </div>
            </div >
        )
    }
}
export default connect(Tables)