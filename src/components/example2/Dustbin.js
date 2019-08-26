import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
    return 'darkgreen'
  } else if (canDrop) {
    return 'darkkhaki'
  } else {
    return '#222'
  }
}
const Dustbin = ({ allowedDropEffect }) => {
  const [droppedItems, setDroppedItems] = useState([])
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (data, event) => {
      droppedItems.push({ id: Math.random(), name: data.name })
      setDroppedItems(droppedItems)
      return {
        name: `${allowedDropEffect} Dustbin`,
        allowedDropEffect,
      }
    }
    ,
    collect: monitor => {
      console.log('bin monitor', monitor);

      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }
    },
  })
  const isActive = canDrop && isOver
  const backgroundColor = selectBackgroundColor(isActive, canDrop)
  console.log('droppedItems', droppedItems);

  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {`Works with ${allowedDropEffect} drop effect`}
      <br />
      <br />
      {isActive ? 'Release to drop' : 'Drag a box here'}
      {droppedItems.map(item => <div>{item.name}</div>)}
    </div>
  )
}
export default Dustbin
