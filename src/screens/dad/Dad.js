import React, { Component } from 'react'
import DaD from 'src/components/dad-smooth/DaD'
import DraggableExample from 'src/components/draggable/DraggableExample'
import Header from 'src/components/layout/Header'
import 'src/styles/dad.scss'

class Dad extends Component {
    render() {
        return <div className='dad-Screen'>
            {/* <Header /> */}
            {/* <DaD /> */}
            
            {/* // yossi way */}
            <DraggableExample />
        </div >

    }
}



export default Dad