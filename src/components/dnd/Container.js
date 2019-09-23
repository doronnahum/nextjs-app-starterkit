import React, { useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Room from './Room'
import snapToGrid from './snapToGrid'
import Element from './Element'
import RoomDialog from 'src/components/RoomDialog';

// const styles = {
//     marginLeft: '500px',
//     width: 600,
//     height: 600,
//     border: '1px solid black',
// }

const Container = ({ hideSourceOnDrag }) => {
    const [boxesRendered, setBoxesRendered] = useState([])
    const [roomTitle, changeRoomTitle] = useState('')
    const [dialogIsOpen, setDialog] = useState(false)
    const [roomIdChosen, chooseRoomId] = useState('')

    const openDialog = () => setDialog(true)
    const closeDialog = () => setDialog(false)

    const boxes = [
        { id: 1, top: 40, left: 0, title: 'Drag me around' },
        { id: 2, top: 340, left: 0, title: 'Drag me too' },
        { id: 3, top: 640, left: 0, title: 'Drag me too' },
    ]

    const elements = [
        { id: 4, top: 40, left: 250, title: 'aircon' },
        { id: 5, top: 130, left: 250, title: 'lamp' },
        { id: 6, top: 220, left: 250, title: 'ssss' }
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

                // if (snapToGridAfterDrop) {
                ;[left, top] = snapToGrid(left, top)
            // }

            let room = {
                ...item,
                left,
                top,
                elements: []
            }
            if (room.toDuplicate) {
                createNewRoom(room)
                openDialog()

            } else {
                dropExistedRoom(room)
            }

            return undefined
        },
    })

    const OnOkDialog = () => {
        const _boxesRendered = [...boxesRendered]
        if (roomIdChosen) { // rename existed title room
            editRoom()
        } else { // create new room
            // createNewRoom()
            const lastElement = _boxesRendered[_boxesRendered.length - 1]
            if (roomTitle) {
                lastElement.title = roomTitle
            }
            setBoxesRendered(_boxesRendered)
        }
        changeRoomTitle('')
        closeDialog()
    }

    const onDropElement = (roomId, item) => {
        item.id = Math.random()
        const MAX_ELEMENTS_IN_ROOM = 6
        let _boxesRendered = [...boxesRendered]
        const roomToUpdate = _boxesRendered.find(room => room.id === roomId)
        if (roomToUpdate.elements.length === MAX_ELEMENTS_IN_ROOM) {
            alert('you can\'t places more than 6 elements in a room')
            return;
        }
        roomToUpdate.elements.push(item);
        setBoxesRendered(_boxesRendered)
        setInStorage(_boxesRendered)
    }

    const createNewRoom = (room) => {
        let _boxesRendered = [...boxesRendered]
        const newRoom = {
            ...room,
            id: Math.random(),
            title: roomTitle
        }
        _boxesRendered.push(newRoom)
        setBoxesRendered(_boxesRendered)
        setInStorage(_boxesRendered)
    }

    const dropExistedRoom = (roomToUpdate) => {
        let _boxesRendered = [...boxesRendered]
        let selectedRoom = _boxesRendered.find(room => room.id === roomToUpdate.id)
        selectedRoom.left = roomToUpdate.left
        selectedRoom.top = roomToUpdate.top
        setBoxesRendered(_boxesRendered)
        setInStorage(_boxesRendered)
    }



    // const moveBox = (obj) => {
    //     let _boxesRendered = [...boxesRendered]
    //     if (!obj.toDuplicate) { // remove room witch already placed
    //         const roomToUpdate = _boxesRendered.find(room => room.id === obj.id)
    //         roomToUpdate.left = obj.left
    //         roomToUpdate.top = obj.top
    //     } else { // create new room
    //         obj.id = Math.random()
    //         _boxesRendered.push(obj)
    //     }
    //     setBoxesRendered(_boxesRendered)
    //     setInStorage(_boxesRendered)
    // }

    const deleteRoom = (id) => {
        let _boxesRendered = [...boxesRendered]
        const indexOfRoom = _boxesRendered.findIndex(obj => obj.id === id)
        _boxesRendered.splice(indexOfRoom, 1)
        setBoxesRendered(_boxesRendered)
        setInStorage(_boxesRendered)
    }

    const onPressEditRoom = (id) => {
        openDialog()
        chooseRoomId(id)
    }

    const editRoom = () => {
        let _boxesRendered = [...boxesRendered]
        let roomToEdit = _boxesRendered.find(obj => obj.id === roomIdChosen)
        roomToEdit.title = roomTitle
        setBoxesRendered(_boxesRendered)
        setInStorage(_boxesRendered)
        chooseRoomId('')
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
        <div className='dnd-container'>
            <content className='tool-bar'>
                {boxes.map(box => {
                    const { left, top, title, id } = box
                    return (
                        <Room
                            key={id}
                            id={id}
                            left={left}
                            top={top}
                            hideSourceOnDrag={false}
                            toDuplicate
                            title={title}
                        />

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
                        >
                            {title}
                        </Element>
                    )
                })}
            </content>
            <content ref={drop} className='floor'
            // style={styles}
            >
                {boxesRendered.map(box => {
                    const { left, top, title, id, elements } = box
                    return (
                        <Room
                            key={id}
                            id={id}
                            left={left}
                            top={top}
                            hideSourceOnDrag={hideSourceOnDrag}
                            toDuplicate={false}
                            alsoDropabble
                            onDropElement={onDropElement}
                            elements={elements}
                            deleteRoom={deleteRoom}
                            editRoom={onPressEditRoom}
                            deleteElement={deleteElement}
                            title={title}
                        />
                    )
                })}
            </content>
            <button onClick={() => clearAll()} style={{ position: 'absolute', right: 50, top: 50, backgroundColor: 'lightblue' }}>
                <div>
                    clearAll
                </div>
            </button>
            <RoomDialog
                dialogIsOpen={dialogIsOpen}
                closeModal={closeDialog}
                onOkModalClick={OnOkDialog}
                onChangeText={(e) => changeRoomTitle(e.target.value)}
                textValue={roomTitle}
            />
        </div>
    )
}
export default Container
