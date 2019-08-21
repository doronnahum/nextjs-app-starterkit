import React, { Component } from 'react'
import Draggable from 'react-draggable';
export default class Dad extends Component {



    render() {
        const { style, type, handleStart, handleDrag, handleStop } = this.props
        return (
            <div style={style}>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    onStart={(event, data) => handleStart(event, data, type)}
                    onDrag={(event, data) => handleDrag(event, data, type)}
                    onStop={(event, data) => handleStop(event, data, type)}>
                    <div className={`item-${type} handle`}>
                        {/* <div className="handle">Drag from here</div> */}
                        {/* <div>This readme is really dragging on...</div> */}
                    </div>
                </Draggable>
            </div>
        )
    }
}
