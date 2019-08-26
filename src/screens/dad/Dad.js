import React, { Component } from 'react'
import 'src/styles/dad.scss'
import Example from 'src/components/example4/Example'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

class Dad extends Component {
    render() {
        return <div style={{ background: 'red' }}>
            {/* <DndProvider backend={HTML5Backend}> */}
                <Example />
            {/* </DndProvider> */}
        </div >

    }
}



export default Dad