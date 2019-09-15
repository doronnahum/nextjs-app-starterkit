import React, { Component } from 'react'
import { style } from '@material-ui/system';
import Board from './Board'

export default class Card extends Component {
    onDragStart(e) {
        const target = e.target
        console.log('onDragStart e', e);
        // debugger
        e.dataTransfer.setData('card_id', target.id)
        e.dataTransfer.setData('offsetLeft', target.offsetLeft)
        e.dataTransfer.setData('offsetTop', target.offsetTop)
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
                <Board id={`board_${id}`} className='inside'
                style={{
                    height: 150, width: 150,
                    backgroundColor: 'lightgreen'
                }}>
                    {children}
                </Board>
            </div >
        )
    }
}
