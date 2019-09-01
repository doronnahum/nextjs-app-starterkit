import React, { Component } from 'react'
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Dad extends Component {



    render() {
        const { style, type, handleStart, handleDrag, handleStop, deleteRoom, bin, position, onCopy,defPosition } = this.props
        return (

            <Draggable
                axis="both"
                handle=".handle"
                // defaultPosition={defPosition}
                position={position}
                grid={[5, 5]}
                scale={1}
                onStart={handleStart && handleStart}
                onDrag={handleDrag && handleDrag}
                onStop={handleStop && handleStop}
                onCopy={onCopy && onCopy}>
                <div style={style}>

                    {/* {bin && <button onClick={deleteRoom}>
                            <DeleteIcon fontSize='small' />
                        </button>} */}
                    <div className={`room-${type} handle`}>

                        {/* <div className="handle">Drag from here</div> */}
                        {/* <div>This readme is really dragging on...</div> */}
                    </div>
                </div>
            </Draggable>
        )
    }
}