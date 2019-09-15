import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'

const style = {
    height: '80px',
    width: '80px',
    position: 'absolute',
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    cursor: 'move',
}
const Element = ({ id, left, top, title, hideSourceOnDrag, children }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { title, id, left, top, type: ItemTypes.ELEMENT },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => ({
            getDropResult: monitor.getDropResult()
        })
    })

    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag} />
    }
    return (
        <div ref={drag} style={{ ...style, left, top }}>
            {children}
        </div>
    )
}
export default Element
