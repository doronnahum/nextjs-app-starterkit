import React, { useState, useCallback } from 'react'
import Container from './Container'
export default function DragAroundNaive() {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
  const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false)
  const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
    hideSourceOnDrag,
  ])
  const handleSnapToGridAfterDropChange = useCallback(() => {
    setSnapToGridAfterDrop(!snapToGridAfterDrop)
  }, [snapToGridAfterDrop])


  return (
    <div>
      <Container
        hideSourceOnDrag={hideSourceOnDrag}
        // snapToGridAfterDrop={snapToGridAfterDrop}
      />
      <p>
        <label htmlFor="hideSourceOnDrag">
          <input
            id="hideSourceOnDrag"
            type="checkbox"
            checked={hideSourceOnDrag}
            onChange={toggle}
          />
          <small>Hide the source item while dragging</small>
        </label>
      </p>
      {/* <label htmlFor="snapToGridAfterDrop">
        <input
          id="snapToGridAfterDrop"
          type="checkbox"
          checked={snapToGridAfterDrop}
          onChange={handleSnapToGridAfterDropChange}
        />
        <small>Snap to grid after drop</small>
      </label> */}


    </div>
  )
}
