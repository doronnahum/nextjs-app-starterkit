import React, { Component } from 'react'
import Home from '../src/screens/home/Home'

const DATA = {
    "container": {
        "w": 1920,
        "h": 1080
    },
    "elements": []
}
export default class home extends Component {
    componentDidMount() {
        localStorage.setItem('data', JSON.stringify(DATA));
    }
    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}
