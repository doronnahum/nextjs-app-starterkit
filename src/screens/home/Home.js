import React, { Component } from 'react'
// import Dad from '../../components/Dad'
import Dad from 'src/components/Dad'
import Floor from 'src/components/Floor'
import 'src/styles/dad.scss'
import { logger } from 'src/services/logger'
import connect from './connect';
import Dialog from 'src/components/Dialog';
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
    // createNewElement() {
    //     return React.createElement('div', { style: { background: 'red', height: 30, width: 30 } })
    // }

    handleStart = (event, data, type) => {
        console.log('------start----------');
        console.log('event', event);
        console.log('----------------');

        this.setState({
            createNewElement: true
        })
        logger.info('start drag');
    }

    handleDrag = (event, data) => {
        // console.log('------dragging----------');
        // console.log('event', event);
        // console.log('event', event);
        // console.log('data:', data);
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
    onCopy(data, event) {
        console.log('------co!!!!!!!!!!!!!!!!!!!!!!!py----------');

    }

    handleStop = (event, data, type) => {
        console.log('------Stop----------');
        console.log('event', event);
        console.log('data', data);
        // debugger

        const obj = {
            "id": Math.random(),
            "title": 'textValue',
            "type": type,
            "position": {
                "x": event.x - event.layerX,
                "y": event.y - event.layerY
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

    deleteRoom = (id) => {

        const { placedrooms } = this.state
        let arr = [...placedrooms]
        const selectedRoom = arr.find(room => room.id === id)
        const selectedRoomIndex = placedrooms.indexOf(selectedRoom)
        arr.splice(selectedRoomIndex, 1)

        this.setState({ placedrooms: arr })
    }

    renderItems() {
        return rooms.map((room, i) => <Dad key={i}
            position={room.position}
            style={{ marginBottom: 5, background: 'black' }}
            type={room.type}
            handleStart={(x, y) => this.handleStart(x, y, room.type)}
            handleDrag={this.handleDrag}
            handleStop={(x, y) => this.handleStop(x, y, room.type)}
            onCopy={this.onCopy} />)
    }

    // rendeNewElements() {
    //     const { placedrooms } = this.state
    //     if (!placedrooms.length) return null

    //     return placedrooms.map((room, i) => {

    //         const style = { position: 'absolute', left: room.position.x, top: room.position.y, background: 'yellow' }
    //         return <div style={style}></div>
    //         return <NewDad key={room.id} type={room.type} className={`item-${room.type}`}
    //             deleteRoom={() => this.deleteRoom(room.id)}
    //             style={style}
    //             handleStart={this.handleStart}
    //             handleDrag={this.handleDrag}
    //             handleStop={(x, y) => this.handleStop(x, y, room.type)}
    //         />
    //     })
    // }

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
            <div className='drop-and-drag' style={{ position: 'relative' }}>
                <div className='drop-and-drag__elements'>
                    {/* {createNewElement && this.createNewElement()} */}
                    {this.renderItems()}
                </div>
                <div style={{}}>
                    <Floor >
                        {/* {this.rendeNewElements()} */}
                    </Floor >
                </div>
                <Dialog
                    dialogOpen={dialogOpen}
                    dialogOkClick={this.dialogOkClick}
                    openDialog={this.openDialog}
                    closeDialog={this.closeDialog}
                    textValue={textValue}
                    handleChange={this.handleChange} />
            </div>
        )
    }
}

export default connect(Home)