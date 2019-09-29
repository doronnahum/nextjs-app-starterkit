import React, { Component } from 'react'
import Table from 'src/components/table/Table'
import TableDiffrent from 'src/components/table/TableDiffrent'
import {
    mechanicalPropertiesData,
    operationalPropertiesData,
    waterOriginData,
    operationCostsData,
    enironmentalData,
    customersProblemsAndRequestsData
} from 'src/components/data'

class Tables extends Component {
    render() {
        const { className } = this.props
        return (
            <div className={className}>
                <Table tableTitle={'Mechanical Properties'}
                    data={mechanicalPropertiesData} />
                <Table tableTitle={'Operational Properties'}
                    data={operationalPropertiesData} />
                <Table tableTitle={'Water Origin'}
                    data={waterOriginData} />
                <Table tableTitle={'Operation Costs'}
                    data={operationCostsData} />
                <TableDiffrent tableTitle={'Enironmental Data'}
                    data={enironmentalData} />
                <Table
                    // tableTitle={'Customer\'s problems and requests'}
                    data={customersProblemsAndRequestsData}
                    tableSubTitle={'Customer\'s problems and requests'}
                    headerTitles={['Option List', 'Mark if applicable']}
                />
                {/* <TableDiffrent tableTitle={'Water Analysis'}
                    data={waterAnalysisData} /> */}
                {/* <Table tableTitle={'Enironmental Data '} /> */}
                {/* <Table tableTitle={'Customer\'s problems and requests'} /> */}
            </div>
        )
    }
}
export default Tables