import React, { Component } from 'react'
import Stepper_ from 'src/components/stepper/Stepper'
import Tables from 'src/components/tables/Tables'
import 'src/screens/home/homeStyle.scss'
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
                    <div style={{ backgroundColor: 'red', }}>
                        <img src={machine} style={{ height: 300 }} />
                        {/* <Tables className='tables' /> */}
                    </div>
                </div>
            </div >
        )
    }
}
