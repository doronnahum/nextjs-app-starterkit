import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'

const contstyles = {
    width: '100%',
    height: '100%',
    border: '1px solid black',
    position: 'relative',
}
const Container = ({ hideSourceOnDrag }) => {
    const [elements, setElemetns] = useState([])
    const [, drop] = useDrop({
        accept: ItemTypes.ELEMENT,
        drop(item, monitor) {
            console.log('item in box', item);

            const delta = monitor.getDifferenceFromInitialOffset()
            const left = Math.round(item.left + delta.x)
            const top = Math.round(item.top + delta.y)
            // console.log('getDropResult', getDropResult);
            let obj={
              ...item,
              left,
              top
            }
            moveBox(obj)
            return undefined
        },
    })

    const moveBox = (obj) => {
      let _elements =[...elements] 
      _elements.push(obj) 
      setElemetns(_elements)
    }

    console.log(elements);
    return (
      
        <div ref={drop} style={contstyles}>
            {elements.map(item => {
              console.log(item);
              
                const { left, top, title } = item
                return (
                   <div style={{}}>
                        {title}
                   </div>
                )
            })}
        </div>
    )
}

const style = {
  height:'80px',
  width:'80px',
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
const Box = ({ id, left, top, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX },
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
    <div ref={drag} style={{ ...style, left, top }}>
      <Container/>
    </div>
  )
}
export default Box
