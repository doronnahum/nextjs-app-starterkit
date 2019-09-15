import React, { Component } from 'react'

export default class Card extends Component {
    onDragStart(e) {
        const target = e.target
        console.log('e', e);
        e.dataTransfer.setData('element_id', target.id)
        setTimeout(() => {
            // target.style.display = 'none'
            // debugger
        }, 0);

    }
    onDragOver(e) {
        e.stopPropagation()
        console.log('dragOver e', e);

    }

    render() {
        const { id, className, children, draggable } = this.props
        return (
            <div
                id={id}
                className={className}
                draggable={draggable}
                onDragStart={this.onDragStart}
                onDragOver={this.onDragOver}
            >
                {children}
            </div>
        )
    }
}
