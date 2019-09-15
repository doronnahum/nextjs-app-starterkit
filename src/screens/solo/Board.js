import React, { Component } from 'react'

export default class Board extends Component {
    onDrop(e) {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id')
        const element_id = e.dataTransfer.getData('element_id')
        const item = document.getElementById(card_id || element_id);
        item.style.display = 'block'
        debugger
        if (card_id) {
            const offsetLeft = e.dataTransfer.getData('offsetLeft')
            const offsetTop = e.dataTransfer.getData('offsetTop')

            item.style.position = 'absolute'
            console.log('e.clientX - offsetLeft', e.clientX - offsetLeft);

            item.style.left = `${e.clientX - offsetLeft}px`
            item.style.top = `${e.clientY - offsetTop}px`
            if (e.currentTarget.className !== 'board') {
                return
            }
        }
        // debugger
        e.target.appendChild(item)

    }

    dragOver(e) {
        e.preventDefault();


    }
    render() {
        const { id, className, children, style } = this.props
        return (
            <div
                id={id}
                style={style}
                className={className}
                onDrop={this.onDrop}
                onDragOver={this.dragOver}
            >
                {children}
            </div>
        )
    }
}
