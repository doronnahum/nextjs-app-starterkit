import React, { Component } from 'react'
import 'src/styles/dad.scss'
import Example from 'src/components/example3/Example'


class Dad extends Component {
    render() {
        return <div style={{ background: 'red' }}>
            <Example />

        </div >

    }
}



export default Dad