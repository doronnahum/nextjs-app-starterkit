import React, { Component } from 'react'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./dad_NOT_IN_USE'),
{ ssr: false })

export default class dad extends Component {
    render() {
        return (
            <div>
                <DynamicComponent />
            </div>
        )
    }
}
