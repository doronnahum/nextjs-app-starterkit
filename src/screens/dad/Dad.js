import React, { Component } from 'react'
import DaD from 'src/components/trys/dad-smooth/DaD'
import DraggableExample from 'src/components/trys/draggable/DraggableExample'
import Header from 'src/components/layout/Header'
import Router from 'next/router'
import DoronExample from 'src/components/trys/doron/Main'
// import 'src/styles/dad.scss'

class Dad extends Component {

    render() {
        const { name } = Router.query
        console.log('name from the screen', name);
        return <div className='dad-Screen'>
            <Header title={'חשמל הברק'} />
            {/* <DaD /> */}
            <DoronExample />
            {/* <DraggableExample /> */}
        </div >

    }
}



export default Dad