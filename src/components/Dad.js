import React, { Component } from 'react'
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Dad extends Component {



    render() {
        const { style, type, handleStart, handleDrag, handleStop, deleteRoom, bin, position } = this.props
        return (
            <div>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={position}
                    // position={position}
                    grid={[5, 5]}
                    scale={1}
                    onStart={handleStart && handleStart}
                    onDrag={handleDrag && handleDrag}
                    onStop={handleStop && handleStop}>
                    <div style={style}>

                        {/* {bin && <button onClick={deleteRoom}>
                            <DeleteIcon fontSize='small' />
                        </button>} */}
                        <div className={`item-${type} handle`}>

                            {/* <div className="handle">Drag from here</div> */}
                            {/* <div>This readme is really dragging on...</div> */}
                        </div>
                    </div>
                </Draggable>
            </div>
        )
    }
}
