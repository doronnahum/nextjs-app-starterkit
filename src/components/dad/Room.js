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
                    style={{ width: room.width, height: room.height, background: dragEnterRoom === room.id ? 'red' : 'orange' }}>
                    <button onClick={onClickDeleteRoom}>
                        <Delete />
                    </button>

                    {room.title
                        ? <div>
                            {room.title}

                            <Container
                                groupName="2"
                                style={{ width: 100, height: 100, background: 'red' }}
                                onDragEnter={onDragEnterRoom}
                                onDragLeave={onDragLeaveRoom}
                                dropPlaceholder
                                shouldAcceptDrop={shouldAcceptDrop}
                                getChildPayload={i => room.items[i]}
                                onDrop={onDropElementInRoom}
                            >
                                {children}

                            </Container>
                        </div>
                        : < form onSubmit={onSubmitName} >
                            <input style={{ width: 80 }}
                                id={room.id}
                                onChange={handleTextChange}
                                value={textValue} />
                            <input type="submit" />
                        </form>
                    }

                </div>
            </Draggable>
        )
    }
}
