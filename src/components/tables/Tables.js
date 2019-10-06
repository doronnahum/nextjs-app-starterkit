import React, { Component } from 'react'
import Table from 'src/components/table/Table'
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
    predictiveWaterAnalysis,
    sizingFactorsData,
    sizingOfReactorsData,
    modelConfigurationData,
    UETCirculationFlowrateData,
    theoreticalEnergySavingsData,
    ROICalculationData,
    UETWorkingParameters
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
                    <Table
                        headerCols={['Mechanical Properties1', 'Units', 'value']}
                        data={mechanicalPropertiesData} />
                    <Table
                        headerCols={['Operational Properties', 'Units', 'value']}
                        data={operationalPropertiesData} />
                    <Table
                        headerCols={['Water Origin', 'Units', 'value']}
                        data={waterOriginData} />
                    <Table
                        headerCols={['Operation Costs ', 'Units', 'value']}
                        data={operationCostsData} />
                    <Table
                        headerCols={['Enironmental Data', 'Units', 'value']}
                        data={enironmentalData} />
                    <Table
                        tableTitle={'Customer\'s problems and requests'}
                        headerCols={['Option List', 'Mark if applicable']}
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
                        headerCols={['Sizing Factors', 'Benchmark', 'Factor', 'Actual']}
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
                        data={predictiveWaterAnalysis}
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
                            data={UETWorkingParameters}
                        />

                    </div>


                </div>
            </div >
        )
    }
}
export default connect(Tables)