import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { useDrop } from 'react-dnd'
import { Delete } from '@material-ui/icons';

const contstyles = {
  width: '100%',
  height: '70px',
  border: '1px solid black',
  // position: 'relative',
}
const BoxDropArea = ({ hideSourceOnDrag, onDropElement, elements = [], roomId, deleteElement }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop(item, monitor) {
      onDropElement && onDropElement(roomId, item)
      return undefined
    },
  })

  return (
    <div ref={drop} style={contstyles}>
      {elements.map(item => {
        const { left, top, title, id } = item
        return (
          <div key={id} style={{}}>
            {deleteElement && <button onClick={() => deleteElement(roomId, id)} style={{}}>
              <Delete fontSize='small' />
            </button>}
            {title}
          </div>
        )
      })}
    </div>
  )
}

const boxStyle = {
  height: '120px',
  width: '120px',
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'orange',
  // padding: '0.5rem 1rem',
  cursor: 'move',
}
const Box = ({ id, left, top, hideSourceOnDrag, title, toDuplicate, alsoDropabble, source,
  elements, onDropElement, deleteRoom, deleteElement }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX, toDuplicate, source, title },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div ref={drag} style={{ ...boxStyle, left, top }}>
      {title}
      {alsoDropabble && <BoxDropArea
        elements={elements}
        deleteElement={deleteElement}
        onDropElement={onDropElement}
        roomId={id} />}

      {deleteRoom && <button onClick={() => deleteRoom(id)} style={{ position: 'absolute', bottom: 0 }}>
        <Delete />
      </button>}
    </div>
  )
}
export default Box
