import React, { Component } from 'react'

export default class Floor extends Component {
    render() {
        const { children } = this.props
        return (
            <div className='floor'>
                {children}
            </div>
        )
    }
}
