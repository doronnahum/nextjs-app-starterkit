import React from 'react'
import {   } from 'react-dnd'
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
const Dustbin = () => {
  const [{ canDrop, isOver, getItem, didDrop, getDropResult, getSourceClientOffset }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      getItem: monitor.getItem(),
      didDrop: monitor.didDrop(),
      getDropResult: monitor.getDropResult(),
      getSourceClientOffset: monitor.getSourceClientOffset(),
    }),
  })
  let arr = []
  console.log('getItem', getItem);
  console.log('didDrop', didDrop);
  console.log('getDropResult!!', getDropResult);
  console.log('getSourceClientOffset!!', getSourceClientOffset);
  if (didDrop) {
    arr.push(getItem)
  }
  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
      <div style={{ width: 30, height: 30, backgroundColor: 'lightgreen' }} />
      <div style={{ backgroundColor: 'lightgreen' }} >
        {arr.map(item => item.name)}
      </div>
    </div>
  )
}
export default Dustbin
