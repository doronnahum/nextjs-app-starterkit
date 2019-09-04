import React, { Component } from 'react'
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Dad extends Component {



    render() {
        const { style, type, handleStart, handleDrag, handleStop, deleteRoom, bin, position,
            onCopy, defaultPosition, positionOffset, left, top, room } = this.props
        return (

            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={defaultPosition}
                position={position}
                // positionOffset={positionOffset}
                grid={[5, 5]}
                scale={1}
                onStart={handleStart && handleStart}
                onDrag={handleDrag && handleDrag}
                onStop={handleStop && handleStop}
            // scale={1}
            >
                <div style={{ ...style }} >

                    <div className={`room-${room.shape} handle`}>
                        <div>
                            {room.title}
                            {room.id}
                        </div>
                        {bin && <button onClick={deleteRoom} style={{ zIndex: 5, position: 'absolute', bottom: 0 }}>
                            <DeleteIcon fontSize='small' />
                        </button>}

                        {/* <div className="handle">Drag from here</div> */}
                        {/* <div>This readme is really dragging on...</div> */}
                    </div>
                </div>
            </Draggable >
        )
    }
}