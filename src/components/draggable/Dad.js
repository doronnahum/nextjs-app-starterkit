import React, { Component } from 'react'
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Dad extends Component {



    render() {
        const { style, handleStart, handleDrag,
            handleStop, deleteRoom, bin, position,
            defaultPosition, item } = this.props
        if (!item) return <div style={{ background: 'red', width: 50, height: 50 }}></div>;
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
                    <div className={`room-${item.shape} handle`}>
                        <div>
                            {item.title}
                            {item.id}
                        </div>
                    </div>
                    {bin && <button onClick={deleteRoom} style={{ zIndex: 5, position: 'absolute', bottom: 0, backgroundColor: 'red' }}>
                        <DeleteIcon fontSize='small' />
                    </button>}
                </div>
            </Draggable >
        )
    }
}