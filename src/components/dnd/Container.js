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
    const [boxes, setBoxes] = useState({
        a: { top: 20, left: 0, title: 'Drag me around' },
        b: { top: 120, left: 0, title: 'Drag me too' },
        c: { top: 220, left: 0, title: 'Drag me too' },
    })
    const [elements, seEelements] = useState([
        { id: 1, title: 'mzdan', top: 20, left: 200 },
        { id: 2, title: 'asas', top: 120, left: 200 },
        { id: 3, title: 'ssss', top: 220, left: 200 }
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

            moveBox(item.id, left, top, item.type)
            return undefined
        },
    })

    const moveBox = (id, left, top, type) => {
        console.log('type', type);

        if (type === 'BOX') {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { left, top },
                    },
                }),
            )
        } else {
            seEelements(
                update(elements, {
                    [id]: {
                        $merge: { left, top },
                    },
                }),
            )
        }
    }

    return (
        <div ref={drop} style={styles}>
            {Object.keys(boxes).map(key => {
                const { left, top, title } = boxes[key]
                return (
                    <Box
                        key={key}
                        id={key}
                        left={left}
                        top={top}
                        hideSourceOnDrag={hideSourceOnDrag}
                    >
                        {title}

                    </Box>
                )
            })}
            {elements.map((item, key) => {
                const { left, top, title ,id} = item
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
