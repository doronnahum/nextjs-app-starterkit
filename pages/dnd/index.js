import React, { Component } from 'react'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./dnd'),
    { ssr: false })
export default class dnd extends Component {
    render() {
        return (
            <DynamicComponent />
        )
    }
}


