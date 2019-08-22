import React from 'react'
import Dustbin from './Dustbin.js'
import Box from './Box'
export default function Container() {
  return (
    <div className='drop-and-drag'>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Box name="Glass" />
        <Box name="Banana" />
        <Box name="Paper" />
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
    </div>
  )
}
