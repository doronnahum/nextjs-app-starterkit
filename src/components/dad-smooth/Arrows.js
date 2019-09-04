
import React, { Component } from 'react'
import { ExpandLess, ExpandMore } from '@material-ui/icons';

export default class Arrows extends Component {
    render() {
        const { onClickUp, onClickDown, className } = this.props
        return (
            <div className={className}>
                <button onClick={onClickUp}>
                    <ExpandMore />
                </button>
                <button onClick={onClickDown}>
                    <ExpandLess />
                </button>
            </div>
        )
    }
}
