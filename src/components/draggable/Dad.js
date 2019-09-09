import React, { Component } from 'react'
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// const aircon = require('./aircon.jpg')
// const lamp = require('../../images/lamp.png')

export default class Dad extends Component {

    // renderIcon(shape) {
    //     debugger
    //     switch (shape) {
    //         case 'aircon':
    //             return <img src={aircon} style={{ width: 50, height: 50 }} alt='pic' />
    //             break;
    //         case 'lamp':
    //             // return <img src={require(lamp)} style={{ width: 50, height: 50 }} alt='pic' />
    //             break;

    //         default:
    //             break;
    //     }
    // }

    render() {
        const { style, handleStart, handleDrag,
            handleStop, deleteRoom, bin, position,
            defaultPosition, item, EditTitle } = this.props

        if (!item) return <div style={{ background: 'red', width: 50, height: 50 }}></div>;
        return (
            <Draggable
                // bounds='.floor'
                axis="both"
                handle=".handle"
                defaultPosition={defaultPosition}
                position={position}
                // positionOffset={positionOffset}
                grid={[1, 1]}
                scale={1}
                onStart={handleStart && handleStart}
                onDrag={handleDrag && handleDrag}
                onStop={handleStop && handleStop}
            // scale={1}
            >
                <div style={{ ...style }} >
                    <div className={`room-${item.shape} handle`}>
                        <div>
                            <div>
                                {/* {this.renderIcon(item.shape)} */}
                            </div>
                            <div style={{ fontSize: 24 }}>
                                {item.title}
                            </div>
                            <div>
                                {item.id}
                            </div>
                        </div>
                    </div>

                    {bin && <button onClick={deleteRoom} style={{ zIndex: 5, position: 'absolute', bottom: 0, left: 0, backgroundColor: 'red' }}>
                        <DeleteIcon fontSize='small' />
                    </button>}

                    {EditTitle && <button onClick={EditTitle} style={{ zIndex: 5, position: 'absolute', bottom: 0, right: 0, backgroundColor: 'green' }}>
                        <EditIcon fontSize='small' />
                    </button>}

                </div>
            </Draggable >
        )
    }
}