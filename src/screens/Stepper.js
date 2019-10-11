import React, { Component } from 'react'
import Tables from 'src/components/tables/Tables'
import Stepper_ from 'src/components/stepper/Stepper'

const machine = '/static/images/machine.jpg'

export default class Stepper extends Component {
    render() {
        return (
            <div>
                <Stepper_ />
                <div className="cont" style={{ marginTop: '200px' }}>
                    <div style={{}}>
                        <Tables className='tables' />
                    </div>
                    <div style={{}}>
                        <img src={machine} style={{ height: 300 }} />
                        {/* <Tables className='tables' /> */}
                    </div>
                </div>
            </div >
        )
    }
}
