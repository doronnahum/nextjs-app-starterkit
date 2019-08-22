import React, { Component } from 'react'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./dad'),
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
