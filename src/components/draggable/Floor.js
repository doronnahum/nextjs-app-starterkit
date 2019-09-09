import React, { Component } from 'react'

export default class Floor extends Component {
    render() {
        const { children, style } = this.props
        return (
            <div className='floor' style={style}>
                <div style={{ background: 'green', width: 80, heigth: 80, position: 'absolute', left: 50, top: 50 }}>
                </div>
                {children}
            </div>
        )
    }
}