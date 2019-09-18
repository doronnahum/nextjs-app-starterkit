import React, { Component } from 'react'
// import produce from 'immer';
import Dad from 'src/components/trys/draggable/Dad'
import Floor from 'src/components/trys/draggable/Floor'
import 'src/styles/dad.scss'
import {
    ELEMENTS, ROOMS, handleStart, handleDrag, updateData, deleteRoom,
    getUpdateDragbleUpdateCounters, getElementPosition, clearAll,
    editTitle, openDialog, closeDialog, setTitle,
    dialogOkClick, onChangeText
} from './utils';
import Dialog from 'src/components/Dialog';
import { PLACED_ITEM } from 'src/enums'
class Home extends Component {
    constructor() {
        super();
        this.state = {
            dragbleUpdateCounters: {},
            droppedItems: [],
            elements: ELEMENTS,
            rooms: ROOMS,
            textValue: '',
            dialogIsOpen: false,
            isItemHovered: false
        }
        this.handleStart = handleStart.bind(this)
        this.handleDrag = handleDrag.bind(this)
        this.updateData = updateData.bind(this)
        this.deleteRoom = deleteRoom.bind(this)
        this.clearAll = clearAll.bind(this)
        this.getUpdateDragbleUpdateCounters = getUpdateDragbleUpdateCounters.bind(this)
        this.editTitle = editTitle.bind(this)
        this.openDialog = openDialog.bind(this)
        this.closeDialog = closeDialog.bind(this)
        this.setTitle = setTitle.bind(this)
        this.dialogOkClick = dialogOkClick.bind(this)
        this.onChangeText = onChangeText.bind(this)
    }

    componentDidMount() {
        console.log('window', window);
        const { width, height } = window.screen
        console.log({
            width,
            height
        });


        try {
            const data = localStorage.getItem('data')
            if (!data) {
                this.setState({ droppedItems: [] })
                return
            }
            const _data = JSON.parse(data)
            this.setState({ droppedItems: _data })
        } catch (err) {
            console.log('err in componentDidMount', err);
        }
    }

    dropItem = (event, item, isItemPlaced) => {
        const { clientX, offsetX, clientY, offsetY, srcElement } = event
        const position = getElementPosition({ clientX, offsetX, clientY, offsetY, srcElement })
        const { rooms, elements } = this.state
        let _rooms = [...rooms]
        let _elements = [...elements]
        if (item.type === 'room') {
            let roomsUsedArr = _rooms.find((arr, i) => arr[0].shape === item.shape)
            roomsUsedArr.push(roomsUsedArr[0])
            this.setState({
                rooms: _rooms,
            })
        } else if (item.type === 'element') {
            let elementsUsedArr = _elements.find((arr, i) => arr[0].shape === item.shape)
            elementsUsedArr.push(elementsUsedArr[0])
            this.setState({
                elements: _elements
            })
        } else {
            alert('You are in handleStop function, The item doesnt have a type "room" or "element"!')
        }

        this.updateData(position, item, isItemPlaced)
        if (!isItemPlaced) { // we want the modal to open only when we drag element from the tool bar
            this.openDialog()
        }
        this.setState({ isItemHovered: false })
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
            handleStop={(e) => this.dropItem(e, room)}
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
            handleStop={(e) => this.dropItem(e, element)}
        />
        ))
    }


    renderAllItems() {
        const { droppedItems } = this.state
        if (!droppedItems || !droppedItems.length) return null
        return droppedItems.map((item, i) => {
            const style = {
                position: 'absolute',
                left: item.position.x,
                top: item.position.y,
                // border: '2px solid red',
                zIndex: item.type === 'element' ? 1 : 0,
                // backgroundColor: 'yellow'
            }
            const keyEndfix = this.state.dragbleUpdateCounters[item.id] || ''
            return <Dad key={item.id + keyEndfix}
                item={item}
                EditTitle={() => this.editTitle(item)
                }
                style={style}
                deleteRoom={(e) => this.deleteRoom(e, item.id)}
                handleStart={this.handleStart}
                handleDrag={this.handleDrag}
                handleStop={(e) => this.dropItem(e, item, PLACED_ITEM)}
            />
        })
    }

    render() {
        const { dialogIsOpen, textValue, isItemHovered } = this.state
        return (
            <div className='draggable'>
                <button className='clear-button' onClick={() => this.clearAll()}>
                    Clear all
                </button>
                <div className='draggable__toolbar' >
                    <div style={{ position: 'relative' }}>
                        {this.renderToolbarRooms()}
                    </div>
                    <div style={{ position: 'relative' }}>
                        {this.renderToolbarElements()}
                    </div>
                </div>
                <Floor style={{
                    background: isItemHovered ? '#ff18b0' : '#ffa4e0',
                    // height: 292,
                    // width: 600,
                    // position: 'relative'
                }}>
                    {this.renderAllItems()}
                </Floor >
                <Dialog
                    dialogIsOpen={dialogIsOpen}
                    openModal={this.openDialog}
                    closeModal={this.closeDialog}
                    onOkModalClick={this.dialogOkClick}
                    onChangeText={this.onChangeText}
                    textValue={textValue} />
            </div >
        )
    }
}

export default Home