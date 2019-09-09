import React, { Component } from 'react'
// import produce from 'immer';
import Dad from 'src/components/draggable/Dad'
import Floor from 'src/components/draggable/Floor'
import 'src/styles/dad.scss'
import { logger } from 'src/services/logger'
import { ELEMENTS, ROOMS, uuidv4, handleStart, handleDrag, updateData, deleteRoom, getUpdateDragbleUpdateCounters } from './utils';
import Dialog from 'src/components/Dialog';
import { PLACED_ITEM } from 'src/enums'
import Router from 'next/router'
import { ClearAll } from '@material-ui/icons';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            dragbleUpdateCounters: {},
            placedItems: [],
            dialogIsOpen: false,
            elements: ELEMENTS,
            rooms: ROOMS,
            textValue: '',
        }
        this.handleStart = handleStart.bind(this)
        this.handleDrag = handleDrag.bind(this)
        this.updateData = updateData.bind(this)
        this.deleteRoom = deleteRoom.bind(this)
        this.getUpdateDragbleUpdateCounters = getUpdateDragbleUpdateCounters.bind(this)
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

    handleStop = (event, data, item, isItemPlaced) => {
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

        const position = {
            x: event.clientX - event.offsetX,
            y: event.clientY - event.offsetY
        }
        this.setState({
            dataToUpdate: {
                position,
                item
            }
        })
        this.updateData(position, item, isItemPlaced)
        if (!isItemPlaced) { // we want the modal to open only when we drag element fot the first time
            this.openDialog()
        }
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
                EditTitle={() => {
                    this.setState({ itemIdToEdit: item.id })
                    this.openDialog()
                }
                }
                style={style}
                deleteRoom={(e) => this.deleteRoom(e, item.id)}
                handleStart={this.handleStart}
                handleDrag={this.handleDrag}
                handleStop={(x, y) => this.handleStop(x, y, item, PLACED_ITEM)}
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
    setTitle = (title, id) => {
        const { placedItems } = this.state
        let arr = [...placedItems]
        if (id) { // witch means the item is alreadyt exist
            const indexOfItem = arr.findIndex(item => item.id === id)
            arr[indexOfItem].title = title
        } else { // when creating the item
            arr[arr.length - 1].title = title
        }
        this.setState({ placedItems: arr })
    }

    dialogOkClick = () => {
        const { textValue, itemIdToEdit } = this.state
        const title = textValue
        this.setTitle(title, itemIdToEdit)
        this.setState({ textValue: '', itemIdToEdit: '' })
        this.closeDialog()
    }
    onChangeText = (e) => {
        const textValue = e.target.value
        this.setState({ textValue })
    }
    clearAll() {
        this.setState({ placedItems: [] })
        localStorage.removeItem('data');

    }
    render() {
        const { placedItems, dialogIsOpen, textValue } = this.state
        const { name } = Router.query
        console.log('name', name);
        console.log('placedItems ', placedItems);
        return (
            <div className='draggable' >
                <button className='clear-button' onClick={() => this.clearAll()}>
                    Clear all
                </button>
                <div className='draggable__toolbar' style={{ position: 'relative' }}>
                    {this.renderToolbarRooms()}
                    {this.renderToolbarElements()}
                </div>
                {this.renderAllItems()}
                <Floor style={{}}>
                </Floor >
                <Dialog
                    dialogIsOpen={dialogIsOpen}
                    openModal={this.openDialog}
                    closeModal={this.closeDialog}
                    onOkModalClick={this.dialogOkClick}
                    onChangeText={this.onChangeText}
                    textValue={textValue}
                    handleChange={this.handleChange} />
            </div >
        )
    }
}

export default Home