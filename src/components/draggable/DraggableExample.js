import React, { Component } from 'react'
// import produce from 'immer';
import Dad from 'src/components/draggable/Dad'
import Floor from 'src/components/draggable/Floor'
import 'src/styles/dad.scss'
import { logger } from 'src/services/logger'
import { ELEMENTS, ROOMS, uuidv4, handleStart, handleDrag } from './utils';
import Dialog from 'src/components/Dialog';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            dragbleUpdateCounters: {},
            placedItems: [],
            dialogIsOpen: false,
            elements: ELEMENTS,
            rooms: ROOMS
        }
        this.handleStart = handleStart.bind(this)
        this.handleDrag = handleDrag.bind(this)
    }

    componentDidMount() {
        try {
            const data = localStorage.getItem('data')
            if (!data) {
                this.setState({ placedItems: [] })
                return
            }
            const _data = JSON.parse(data)
            this.setState({ placedItems: _data })
        } catch (err) {
            console.log('err in componentDidMount', err);
        }
    }



    getUpdateDragbleUpdateCounters = (id) => {
        const { dragbleUpdateCounters } = this.state
        const _dragbleUpdateCounters = { ...dragbleUpdateCounters };
        _dragbleUpdateCounters[id] = (_dragbleUpdateCounters[id] || 0) + 1;
        return _dragbleUpdateCounters;
    }

    updateData = (event, room, id) => {
        const { shape, type } = room
        const { placedItems } = this.state
        let arr = [...placedItems]
        if (id) { // if the item has an id, that means that the item is placed, and we gonna update it.
            const objIndex = arr.findIndex(obj => obj.id === id)
            arr[objIndex].position = {
                x: event.clientX - event.offsetX,
                y: event.clientY - event.offsetY,
            }
            this.setState({
                placedItems: arr,
                dragbleUpdateCounters: this.getUpdateDragbleUpdateCounters(id)
            })
            localStorage.setItem('data', JSON.stringify(arr));
        } else { // creating a new item in the placedItems
            const obj = {
                id: uuidv4(),
                title: '',
                shape,
                type,
                position: {
                    x: event.clientX - event.offsetX,
                    y: event.clientY - event.offsetY,
                },
                size: {
                    w: 58,
                    h: 58
                },
                reference_id: '4567',
                parent_id: '1234'
            }
            arr.push(obj)
            this.setState({
                placedItems: arr
            });
            localStorage.setItem('data', JSON.stringify(arr));
        }
    }

    handleStop = (event, data, item, id) => {
        const { rooms, elements } = this.state
        const { shape } = item
        let _rooms = [...rooms]
        let _elements = [...elements]
        if (item.type === 'room') {
            let roomsUsedArr = _rooms.find((arr, i) => arr[0].shape === shape)
            roomsUsedArr.push(roomsUsedArr[0])
            this.setState({
                rooms: _rooms,
            })
        } else if (item.type === 'element') {
            let elementsUsedArr = _elements.find((arr, i) => arr[0].shape === shape)
            elementsUsedArr.push(elementsUsedArr[0])
            this.setState({
                elements: _elements
            })
        } else {
            alert('You are in handleStop function, The item doesnt have a type "room" or "element"!')
        }
        this.updateData(event, item, id)
    }


    deleteRoom = (e, id) => {
        const { placedItems } = this.state
        let arr = [...placedItems]
        const selectedRoomIndex = arr.findIndex(room => room.id === id)
        arr.splice(selectedRoomIndex, 1)
        this.setState({ placedItems: arr })
        localStorage.setItem('data', JSON.stringify(arr));
    }

    renderToolbarRooms() {
        return this.state.rooms.map((arrOfrooms, i) => arrOfrooms.map((room, j) => <Dad key={j}
            item={room}
            position={room.position}
            style={{
                marginBottom: 5, background: 'black',
                position: 'absolute', top: room.position.y, zIndex: 0
            }}
            handleStart={this.handleStart}
            handleDrag={this.handleDrag}
            handleStop={(e, data) => this.handleStop(e, data, room)}
        />
        ))
    }
    renderToolbarElements() {
        const { elements } = this.state
        return elements.map((arrOfSameElements) => arrOfSameElements.map((element, j) => <Dad key={j}
            item={element}
            position={element.position}
            style={{
                marginBottom: 5, zIndex: 1,
                position: 'absolute', top: element.position.y
            }}
            handleStart={this.handleStart}
            handleDrag={this.handleDrag}
            handleStop={(e, data) => this.handleStop(e, data, element)}
        />
        ))
    }
    renderAllItems() {
        const { placedItems } = this.state
        if (!placedItems || !placedItems.length) return null
        return placedItems.map((item, i) => {
            const style = {
                position: 'absolute',
                left: item.position.x,
                top: item.position.y,
                border: '2px solid red',
                zIndex: item.type === 'element' ? 1 : 0,
                backgroundColor: 'yellow'
            }
            const keyEndfix = this.state.dragbleUpdateCounters[item.id] || ''
            return <Dad key={item.id + keyEndfix}
                item={item}
                bin
                style={style}
                deleteRoom={(e) => this.deleteRoom(e, item.id)}
                handleStart={this.handleStart}
                handleDrag={this.handleDrag}
                handleStop={(x, y) => this.handleStop(x, y, item, item.id)}
            />
        })
    }
    handleChange = (event) => {
        this.setState({ textValue: event.target.value });
    }
    openDialog = () => {
        this.setState({ dialogIsOpen: true })
    }
    closeDialog = () => {
        this.setState({ dialogIsOpen: false })
    }
    dialogOkClick = () => {
        const { type, position, textValue } = this.state
        this.closeDialog()
    }

    render() {
        const { placedItems, dialogIsOpen } = this.state
        console.log('placedItems ', placedItems);
        return (
            <div className='draggable' >
                <div className='draggable__toolbar' style={{ position: 'relative' }}>
                    {this.renderToolbarRooms()}
                    {this.renderToolbarElements()}
                </div>
                {this.renderAllItems()}
                <Floor style={{}}>
                </Floor >
                {/* <Dialog
                    dialogIsOpen={dialogIsOpen}
                    openModal={this.openDialog}
                    closeModal={this.closeDialog}
                    onOkModalClick={this.dialogOkClick}
                    // textValue={textValue}
                    handleChange={this.handleChange} /> */}
            </div >
        )
    }
}

export default Home