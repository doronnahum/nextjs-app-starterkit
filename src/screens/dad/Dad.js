import React, { Component } from 'react'
import DaD from 'src/components/dad/DaD'
import Header from 'src/components/layout/Header'
import 'src/styles/dad.scss'

class Dad extends Component {
    render() {
        return <div className='dad-Screen'>
            <Header />
            <DaD />
        </div >

    }
}



export default Dad