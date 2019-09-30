import React, { Component } from 'react'
import Table from 'src/components/table/Table'
import {
    mechanicalPropertiesData,
    operationalPropertiesData,
    waterOriginData,
    operationCostsData,
    enironmentalData,
    waterAnalysisData,
    customersProblemsAndRequestsData
} from 'src/components/data'

class Tables extends Component {
    render() {
        const { className } = this.props
        return (
            <div className={className}>
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
        )
    }
}
export default Tables