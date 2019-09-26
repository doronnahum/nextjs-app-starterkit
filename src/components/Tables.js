import React, { Component } from 'react'
import Table from 'src/components/Table'
import { mechanicalPropertiesData, operationalPropertiesData } from 'src/components/data'
export default class Tables extends Component {
    render() {
        const { className } = this.props
        return (
            <div className={className}>
                <Table tableTitle={'Mechanical Properties'}
                    data={mechanicalPropertiesData} />
                <Table tableTitle={'Operational Properties'}
                    data={operationalPropertiesData} />
                {/* <Table tableTitle={'Operation Costs '} />
                <Table tableTitle={'Water Origin'} />
                <Table tableTitle={'Enironmental Data '} />
                <Table tableTitle={'Water Analysis'} />
                <Table tableTitle={'Customer\'s problems and requests'} /> */}
            </div>
        )
    }
}
