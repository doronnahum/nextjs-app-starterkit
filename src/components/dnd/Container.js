import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import Element from './Element'
import update from 'immutability-helper'
const styles = {
    width: 600,
    height: 600,
    border: '1px solid black',
    position: 'relative',
}
const Container = ({ hideSourceOnDrag }) => {

    // 
    const [boxes, setBoxes] = useState([
        { id: 1, top: 20, left: 0, title: 'Drag me around' },
        { id: 2, top: 180, left: 0, title: 'Drag me too' },
        { id: 3, top: 340, left: 0, title: 'Drag me too' },
    ])

    // Rooms 
    const [boxesRendered, setBoxesRendered] = useState([
    ])

    // Elements
    const [elements, setEelements] = useState([
        { id: 4, top: 20, left: 200, title: 'mzdan' },
        { id: 5, top: 120, left: 200, title: 'asas' },
        { id: 6, top: 220, left: 200, title: 'ssss' }
    ]
    )
    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            console.log('item', item);

            const delta = monitor.getDifferenceFromInitialOffset()
            const left = Math.round(item.left + delta.x)
            const top = Math.round(item.top + delta.y)
            // console.log('getDropResult', getDropResult);
            let obj = {
                ...item,
                left,
                top,
            }
            moveBox(obj)
            return undefined
        },
    })

    const onDropElement = (roomId, item) => {
        item.id = Math.random()
        let _boxesRendered = [...boxesRendered]
        const roomToUpdate = _boxesRendered.find(room => room.id === roomId)
        roomToUpdate.elements.push(item);
        setBoxesRendered(_boxesRendered)
    }
    const moveBox = (obj) => {
        let _boxesRendered = [...boxesRendered]
        if (!obj.duplicate) {
            const roomToUpdate = _boxesRendered.find(room => room.id === obj.id)
            roomToUpdate.left = obj.left
            roomToUpdate.top = obj.top
            setBoxesRendered(_boxesRendered)
        } else {
            obj.id = Math.random()
            obj.elements = [{ title: 'dsfsdf', id: 1321 }]
            _boxesRendered.push(obj)
            setBoxesRendered(_boxesRendered)
        }
    }
    const deleteRoom = (id) => {
        let _boxesRendered = [...boxesRendered]
        const indexOfRoom = _boxesRendered.findIndex(obj => obj.id === id)
        _boxesRendered.splice(indexOfRoom, 1)
        setBoxesRendered(_boxesRendered)
    }
    const deleteElement = (roomId, ElementId) => {
        let _boxesRendered = [...boxesRendered]
        const roomToDelete = _boxesRendered.find(obj => obj.id === roomId)
        const indexOfElement = roomToDelete.elements.findIndex(element => element.id === ElementId)
        roomToDelete.elements.splice(indexOfElement, 1)
        setBoxesRendered(_boxesRendered)
    }


    console.log('boxesRendered', boxesRendered);

    return (
        <div ref={drop} style={styles}>
            {boxes.map(box => {
                const { left, top, title, id } = box
                return (
                    <Box
                        key={id}
                        id={id}
                        left={left}
                        top={top}
                        hideSourceOnDrag={false}
                        duplicate
                    >
                        {title}

                    </Box>
                )
            })}
            {boxesRendered.map(box => {
                const { left, top, title, id, elements } = box
                return (
                    <Box
                        key={id}
                        id={id}
                        left={left}
                        top={top}
                        hideSourceOnDrag={hideSourceOnDrag}
                        duplicate={false}
                        onDropElement={onDropElement}
                        elements={elements}
                        deleteRoom={deleteRoom}
                        deleteElement={deleteElement}
                    >
                        {title}

                    </Box>
                )
            })}
            {elements.map((item, key) => {
                const { left, top, title, id } = item
                return (
                    <Element
                        key={id}
                        id={id}
                        left={left}
                        top={top}
                        title={title}
                    // hideSourceOnDrag={hideSourceOnDrag}
                    >
                        {title}

                    </Element>
                )
            })}
        </div>
    )
}
export default Container
