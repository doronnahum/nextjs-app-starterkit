import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd';
import { Delete } from '@material-ui/icons';

export default class Room extends Component {
    render() {
        const { room, onDragEnterRoom, onDragLeaveRoom, dragEnterRoom, onDropElementInRoom, shouldAcceptDrop,
            handleTextChange, onSubmitName, onClickDeleteRoom, textValue,
            children } = this.props
        return (
            <Draggable
                style={{ width: room.width, height: room.height }}>
                <div className={`room room-${room.shape}`}
                    style={{ width: room.width, height: room.height, background: dragEnterRoom === room.id ? 'black' : 'orange' }}>

                    {room.title
                        ? <div>
                            <div>{room.title}</div>
                            <Container
                                groupName="2"
                                style={{ height: 100, background: 'red', width: room.width - 20 }}
                                onDragEnter={onDragEnterRoom}
                                onDragLeave={onDragLeaveRoom}
                                dropPlaceholder
                                shouldAcceptDrop={shouldAcceptDrop}
                                getChildPayload={i => room.items[i]}
                                onDrop={onDropElementInRoom}
                            >
                                {/* <div> */}
                                {children}
                                {/* </div> */}

                            </Container>
                        </div>
                        : < form onSubmit={onSubmitName} >
                            <h3>Set A Title</h3>
                            <input style={{ width: 80 }}
                                id={room.id}
                                onChange={handleTextChange}
                                value={textValue} />
                            <input type="submit" value='set' />
                        </form>
                    }
                    <button onClick={onClickDeleteRoom} style={{ position: 'absolute', bottom: 10 }}>
                        <Delete />
                    </button>
                </div>
            </Draggable>
        )
    }
}
