import React, { Component } from 'react'
import produce from 'immer';

// import Dad from '../../components/Dad'
import Dad from 'src/components/draggable/Dad'
import Floor from 'src/components/draggable/Floor'
import 'src/styles/dad.scss'
import { logger } from 'src/services/logger'
// import connect from './connect';
// import Dialog from 'src/components/Dialog';
// trash-alt

class Home extends Component {
    state = {
        dragbleUpdateCounters: {

        },
        placedrooms: [],
        type: '',
        textValue: '',
        dialogOpen: false,
        elements: [
            [{
                type: 'element',
                id: 1,
                title: 'aircon',
                shape: 'aircon',
                position: {
                    x: 0,
                    y: 50
                }
            },
            {
                type: 'element',
                id: 1,
                title: 'aircon',
                shape: 'aircon',
                position: {
                    x: 0,
                    y: 50
                }
            }],
            [{
                type: 'element',
                id: 2,
                title: 'lamp',
                shape: 'lamp',
                position: {
                    x: 0,
                    y: 130
                }
            },
            {
                type: 'element',
                id: 2,
                title: 'lamp',
                shape: 'lamp',
                position: {
                    x: 0,
                    y: 130
                }
            }]
        ],
        rooms: [
            [{
                id: 1,
                type: 'room',
                shape: 'square',
                title: 'classroom',
                position: {
                    x: 100,
                    y: 0
                }
            },
            {
                id: 1,
                type: 'room',
                shape: 'square',
                title: 'classroom',
                position: {
                    x: 100,
                    y: 0
                }
            }
            ],
            [{
                id: 2,
                type: 'room',
                shape: 'circle',
                title: 'bathroom',
                position: {
                    x: 100,
                    y: 50
                }
            }, {
                id: 2,
                type: 'room',
                shape: 'circle',
                title: 'bathroom',
                position: {
                    x: 100,
                    y: 50
                }
            }],
            [{
                id: 3,
                type: 'room',
                shape: 'rectangle',
                title: 'teacher room',
                position: {
                    x: 100,
                    y: 100
                }
            }, {
                id: 3,
                type: 'room',
                shape: 'rectangle',
                title: 'teacher room',
                position: {
                    x: 100,
                    y: 100
                }
            }]]
    }

    componentDidMount() {
        try {
            const data = localStorage.getItem('data')
            if (!data) {
                this.setState({ placedrooms: [] })
                return
            }
            const _data = JSON.parse(data)
            this.setState({ placedrooms: _data })
        } catch (err) {
            console.log('err in componentDidMount', err);
        }

    }


    handleStart = (event, data, type) => {
        logger.info('start drag');
    }

    handleDrag = (event, data) => {
        // console.log('x', event.x);
        // console.log('clientX', event.clientX);
        // console.log('y', event.y);
        // console.log('clientY', event.clientY);

    }

    getUpdateDragbleUpdateCounters = (id) => {
        const { dragbleUpdateCounters } = this.state

        const _dragbleUpdateCounters = { ...dragbleUpdateCounters };
        _dragbleUpdateCounters[id] = (_dragbleUpdateCounters[id] || 0) + 1;
        return _dragbleUpdateCounters;
    }

    updateData(event, room, id, data) {
        const { shape, type } = room
        const { placedrooms } = this.state
        let arr = [...placedrooms]
        if (id) {
            // let selectedRoom = arr.find(room => room.id === id)
            const objIndex = arr.findIndex(obj => obj.id === id)

            arr[objIndex].position = {
                x: event.clientX - event.offsetX,
                y: event.clientY - event.offsetY,
            }

            this.setState({
                placedrooms: arr,
                dragbleUpdateCounters: this.getUpdateDragbleUpdateCounters(id)
            })
            localStorage.setItem('data', JSON.stringify(arr));
        } else {
            function uuidv4() {
                return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }
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
                placedrooms: arr
            });
            localStorage.setItem('data', JSON.stringify(arr));
        }

    }

    handleStop = (event, data, item, id) => {
        const { x, screenX, pageX, clientX } = event;

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
            this.updateData(event, item, id, data)
        } else if (item.type === 'element') {
            let elementsUsedArr = _elements.find((arr, i) => arr[0].shape === shape)
            elementsUsedArr.push(elementsUsedArr[0])
            this.setState({
                elements: _elements
            })
            this.updateData(event, item, id, data)
        }
    }

    deleteRoom = (e, id) => {
        const { placedrooms } = this.state
        let arr = [...placedrooms]
        const selectedRoom = arr.find(room => room.id === id)
        const selectedRoomIndex = placedrooms.indexOf(selectedRoom)
        debugger
        arr.splice(selectedRoomIndex, 1)
        this.setState({ placedrooms: arr })
        localStorage.setItem('data', JSON.stringify(arr));
    }

    renderToolbarRooms() {
        return this.state.rooms.map((room, i) => room.map((r, j) => <Dad key={j}
            room={r}
            position={r.position}
            style={{
                marginBottom: 5, background: 'black',
                position: 'absolute', top: r.position.y
            }}
            handleStart={(e, data) => this.handleStart(e, data, r.shape)}
            handleDrag={this.handleDrag}
            handleStop={(e, data) => this.handleStop(e, data, r)}
            onCopy={this.onCopy} />))
    }
    renderToolbarElements() {
        const { elements } = this.state
        return elements.map((arrOfSameElements, i) => arrOfSameElements.map((element, j) => <Dad key={j}
            room={element}
            position={element.position}
            style={{
                marginBottom: 5,
                position: 'absolute', top: element.position.y
            }}
            handleStart={(e, data) => this.handleStart(e, data, element.shape)}
            handleDrag={this.handleDrag}
            handleStop={(e, data) => this.handleStop(e, data, element)}
            onCopy={this.onCopy} />))
    }
    renderAllItems() {
        const { placedrooms } = this.state
        if (!placedrooms || !placedrooms.length) return null
        return placedrooms.map((room, i) => {
            const style = {
                position: 'absolute',
                left: room.position.x,
                top: room.position.y,
                border: '2px solid red',
                // zIndex: room.type === 'element' ? 50 : 0,
                // height: 60,
                backgroundColor: 'yellow'
            }
            const keyEndfix = this.state.dragbleUpdateCounters[room.id] || ''
            return <Dad key={room.id + keyEndfix}
                room={room}
                bin
                // position={room.position}
                style={style}
                // type={room.type}
                // className={`room-${room.shape}`}
                deleteRoom={(e) => this.deleteRoom(e, room.id)}
                handleStart={this.handleStart}
                handleDrag={this.handleDrag}
                handleStop={(x, y) => this.handleStop(x, y, room, room.id)}
            />
        })
    }
    //     transform: translate(23px, 0px);
    handleChange = (event) => {
        this.setState({ textValue: event.target.value });
    }
    openDialog = () => {
        this.setState({ dialogOpen: true })
    }
    closeDialog = () => {
        this.setState({ dialogOpen: false })
    }
    dialogOkClick = () => {
        const { type, position, textValue } = this.state

        this.closeDialog()
    }

    render() {
        const { placedrooms, dragbleUpdateCounters } = this.state
        console.log('placedrooms ', placedrooms);
        console.log('dragbleUpdateCounters', dragbleUpdateCounters);

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
                    dialogOpen={dialogOpen}
                    dialogOkClick={this.dialogOkClick}
                    openDialog={this.openDialog}
                    closeDialog={this.closeDialog}
                    textValue={textValue}
                    handleChange={this.handleChange} /> */}
            </div >
        )
    }
}

export default Home