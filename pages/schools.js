import React, { Component } from 'react'
import Schools from 'src/screens/schools/Schools'
import Header from 'src/components/layout/Header'
export default class BuildingsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Schools />
            </div>
        )
    }
}
