import React, { Component } from 'react'
// import Dad from '../../components/Dad'
import Dad from 'src/components/draggable/Dad'
import Floor from 'src/components/draggable/Floor'
import 'src/styles/dad.scss'
import { logger } from 'src/services/logger'
// import connect from './connect';
// import Dialog from 'src/components/Dialog';
// trash-alt
const NEW_ELEMENT = 'NEW_ELEMENT'
const rooms = [
    {
        id: 1,
        type: 'square',
        position: {
            x: 100,
            y: 0
        }
    },
    {
        id: 2,
        type: 'circle',
        position: {
            x: 100,
            y: 50
        }
    },
    {
        id: 3,
        type: 'rectangle',
        position: {
            x: 100,
            y: 100
        }
    },
]


class Home extends Component {
    state = {
        placedrooms: [],
        createNewElement: false,
        type: '',
        position: { x: 0, y: 0 },
        textValue: '',
        dialogOpen: false
    }

    async componentDidMount() {
        const data = await localStorage.getItem('data')
        const _data = await JSON.parse(data)
        // this.setState({ placedrooms: _data.elements })
    }
    createNewElement() {
        return React.createElement('div', { style: { background: 'red', height: 30, width: 30 } })
    }

    handleStart = (event, data, type) => {
        console.log('------start----------');
        console.log('event', event);
        this.setState({
            createNewElement: true
        })
        logger.info('start drag');
    }

    handleDrag = (event, data) => {
        // console.log('clientX', event.clientX);
        // console.log('layerX', event.layerX);
        // console.log('pageX', event.pageX);

        // console.log('------dragging----------');
        // console.log('event', event);
        // console.log('event', event);
        console.log('data:', data);
        // console.log('-----------------------------');
    }

    updateData(obj) {
        const { placedrooms } = this.state
        let arr = [...placedrooms]
        // let _data = JSON.parse(localStorage.getItem('data'))
        // _data.elements.push(JSON.stringify(obj))
        // localStorage.setItem('data', JSON.stringify(_data));
        // console.log('updateData', JSON.parse(localStorage.getItem('data')));
        arr.push(obj)

        this.setState({ placedrooms: arr })
    }
    // onCopy(data, event) {
    //     console.log('------###copy----------');

    // }

    handleStop = (event, data, type, newRoom) => {
        console.log('------Stop----------');
        console.log('event', event);
        console.log('data', data);
        console.log('event.x - event.layerX', event.x - event.layerX);
        if (newRoom) {
            return
        }

        if (event.target.className === 'floor') {
            const obj = {
                "id": Math.random(),
                "title": 'textValue',
                "type": type,
                "position": {
                    "x": data.x,//200, // event.x - event.layerX,
                    "y": data.y, // event.y - event.layerY,
                },
                "size": {
                    "w": 58,
                    "h": 58
                },
                "reference_id": "4567",
                "parent_id": "1234"
            }
            this.setState({
                // createNewElement: false
            })
            this.updateData(obj)
            // this.openDialog()
        }
        // debugger

    }

    deleteRoom = (id) => {

        const { placedrooms } = this.state
        let arr = [...placedrooms]
        const selectedRoom = arr.find(room => room.id === id)
        const selectedRoomIndex = placedrooms.indexOf(selectedRoom)
        arr.splice(selectedRoomIndex, 1)

        this.setState({ placedrooms: arr })
    }

    renderToolbar() {
        return rooms.map((room, i) => <Dad key={i}
            position={room.position}
            style={{ marginBottom: 5, background: 'black' }}
            type={room.type}
            handleStart={(x, y) => this.handleStart(x, y, room.type)}
            handleDrag={this.handleDrag}
            handleStop={(x, y) => this.handleStop(x, y, room.type)}
            onCopy={this.onCopy} />)
    }

    rendeNewElements() {
        const { placedrooms } = this.state
        if (!placedrooms.length) return null

        return placedrooms.map((room, i) => {
            const style = {
                position: 'absolute',
                left: room.position.x,
                top: room.position.y,
                background: 'yellow',
                // zIndex: 30,
                // height: room.size.h,
                // width: room.size.w
            }
            // return <div className={`room-${room.type}`} style={style}></div>
            return <Dad style={style} key={room.id} type={room.type} className={`room-${room.type}`}
                // position={{ x: room.position.x, y: room.position.y }}
                deleteRoom={() => this.deleteRoom(room.id)}
                handleStart={this.handleStart}
                handleDrag={this.handleDrag}
                handleStop={(x, y) => this.handleStop(x, y, room.type, true)}
            />
        })
    }

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
        const { textValue, dialogOpen, placedrooms, createNewElement } = this.state
        console.log('placedrooms', placedrooms);

        return (
            <div className='draggable' style={{ position: 'relative' }}>
                <div className='draggable__toolbar'>
                    {/* {createNewElement && this.createNewElement()} */}
                    {this.renderToolbar()}
                </div>
                <Floor style={{ position: 'relative' }}>
                </Floor >
                {this.rendeNewElements()}
                {/* <Dialog
                    dialogOpen={dialogOpen}
                    dialogOkClick={this.dialogOkClick}
                    openDialog={this.openDialog}
                    closeDialog={this.closeDialog}
                    textValue={textValue}
                    handleChange={this.handleChange} /> */}
            </div>
        )
    }
}

export default Home