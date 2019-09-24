import React, { Component } from 'react'
import Table from 'src/components/Table'
export default class Tables extends Component {
    render() {
        const { className } = this.props
        return (
            <div className={className}>
                <Table tableTitle={'Mechanical Properties'} />
                <Table tableTitle={'Water Origin'} />
                <Table tableTitle={'Operation Costs '} />
                <Table tableTitle={'Operational Properties'} />
                <Table tableTitle={'Enironmental Data '} />
                <Table tableTitle={'Water Analysis'} />
                <Table tableTitle={'Customer\'s problems and requests'} />
            </div>
        )
    }
}
