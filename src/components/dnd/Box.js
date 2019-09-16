import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'
import { Delete } from '@material-ui/icons';

const contstyles = {
    width: '100%',
    height: '100%',
    border: '1px solid black',
    position: 'relative',
}
const BoxDropArea = ({ hideSourceOnDrag, onDropElement, elements=[], roomId }) => {
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
                const { left, top, title ,id} = item
                return (
                   <div key={id} style={{}}>
                        {title} 
                   </div>
                )
            })}
        </div>
    )
}

const boxStyle = {
  height:'80px',
  width:'80px',
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
const Box = ({ id, left, top, hideSourceOnDrag, children,duplicate, source, elements, onDropElement,deleteRoom}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id,left, top, type: ItemTypes.BOX ,duplicate, source},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    end:(item,monitor)=>({
      getDropResult : monitor.getDropResult()
    })
  })
  
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div ref={drag} style={{ ...boxStyle, left, top }}>
     {deleteRoom&& <button onClick={()=>deleteRoom(id)}>
      <Delete/>
      </button>}
      <BoxDropArea 
        elements={elements}
        onDropElement={onDropElement}
        roomId={id}/>
    </div>
  )
}
export default Box
