import React, { Component } from 'react'
import Table from 'src/components/table/Table'
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
    predictiveWaterAnalysis
} from 'src/components/data'

class Tables extends Component {
    render() {
        const { className } = this.props
        return (
            <div className={className}>

                <div className={className + '__section-1'}>
                    <Table
                        headerCols={['Mechanical Properties', 'Units', 'value']}
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
                        headerCols={['Potential Water Saving', 'Value']}
                        data={potentialWaterSavingData}
                    />
                    <Table
                        headerCols={['Predictive Water Analysis', 'Units', 'Make up', 'UET Circulation']}
                        data={predictiveWaterAnalysis}
                    />

                </div>
            </div >
        )
    }
}
export default Tables