import React, { useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import snapToGrid from './snapToGrid'
import Element from './Element'
const styles = {
    marginLeft: '500px',
    width: 600,
    height: 600,
    border: '1px solid black',
}
const Container = ({ hideSourceOnDrag, snapToGridAfterDrop, snapToGridWhileDragging }) => {
    const [boxesRendered, setBoxesRendered] = useState([])

    const boxes = [
        { id: 1, top: 20, left: 0, title: 'Drag me around' },
        { id: 2, top: 180, left: 0, title: 'Drag me too' },
        { id: 3, top: 340, left: 0, title: 'Drag me too' },
    ]
    const elements = [
        { id: 4, top: 20, left: 200, title: 'mzdan' },
        { id: 5, top: 120, left: 200, title: 'asas' },
        { id: 6, top: 220, left: 200, title: 'ssss' }
    ]

    const setInStorage = (data) => {
        localStorage.setItem('data', JSON.stringify(data));
    }
    const getFromStorage = () => {
        const data = JSON.parse(localStorage.getItem('data'))
        setBoxesRendered(data || [])
    }

    const clearAll = () => {
        localStorage.removeItem('data');
        setBoxesRendered([])

    }


    useEffect(
        () => {
            getFromStorage()
        }, []
    )


    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            console.log('item', item);

            const delta = monitor.getDifferenceFromInitialOffset()
            let left = Math.round(item.left + delta.x)
            let top = Math.round(item.top + delta.y)


            if (snapToGridAfterDrop) {
                ;[left, top] = snapToGrid(left, top)
            }

            let obj = {
                ...item,
                left,
                top,
                elements: []
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
        setInStorage(_boxesRendered)
    }
    const moveBox = (obj) => {
        let _boxesRendered = [...boxesRendered]
        if (!obj.duplicate) {
            const roomToUpdate = _boxesRendered.find(room => room.id === obj.id)
            roomToUpdate.left = obj.left
            roomToUpdate.top = obj.top
        } else {
            obj.id = Math.random()
            _boxesRendered.push(obj)
        }
        setBoxesRendered(_boxesRendered)
        setInStorage(_boxesRendered)
    }
    const deleteRoom = (id) => {
        let _boxesRendered = [...boxesRendered]
        const indexOfRoom = _boxesRendered.findIndex(obj => obj.id === id)
        _boxesRendered.splice(indexOfRoom, 1)
        setBoxesRendered(_boxesRendered)
        setInStorage(_boxesRendered)
    }
    const deleteElement = (roomId, ElementId) => {
        let _boxesRendered = [...boxesRendered]
        const roomToDelete = _boxesRendered.find(obj => obj.id === roomId)
        const indexOfElement = roomToDelete.elements.findIndex(element => element.id === ElementId)
        roomToDelete.elements.splice(indexOfElement, 1)
        setBoxesRendered(_boxesRendered)
        setInStorage(_boxesRendered)
    }

    console.log('boxesRendered', boxesRendered);

    return (
        <div style={{ backgroundColor: 'red' }}>
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
                        snapToGridWhileDragging={snapToGridWhileDragging}

                    >
                        {title}

                    </Box>
                )
            })}
            {elements.map((item) => {
                const { left, top, title, id } = item
                return (
                    <Element
                        key={id}
                        id={id}
                        left={left}
                        top={top}
                        title={title}
                        snapToGridWhileDragging={snapToGridWhileDragging}

                    // hideSourceOnDrag={hideSourceOnDrag}
                    >
                        {title}

                    </Element>
                )
            })}
            <div ref={drop} style={styles}>
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
            </div>
            <button onClick={() => clearAll()}>
                <div>
                    clearAll
          </div>
            </button>
        </div>
    )
}
export default Container
