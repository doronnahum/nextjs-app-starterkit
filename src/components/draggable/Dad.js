import React, { Component } from 'react'
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const aircon = 'static/images/aircon.png'
const lamp = 'static/images/lamp.png'
export default class Dad extends Component {

    renderIcon(shape) {
        switch (shape) {
            case 'aircon':
                return <img src={aircon} style={{ width: 50, height: 50 }} alt='pic' />
            case 'lamp':
                return <img src={lamp} style={{ width: 50, height: 50 }} alt='pic' />
            default:
                break;
        }
    }

    render() {
        const { style, handleStart, handleDrag,
            handleStop, deleteRoom, position,
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
                    <div className={`item item-${item.shape} handle`} >
                        <div style={{ pointerEvents: 'none' }}>
                            <div style={{ fontSize: 24 }}>
                                {item.title}
                            </div>
                            <div>
                                {this.renderIcon(item.shape)}
                            </div>
                            {/* <div>
                                {item.id}
                            </div> */}
                        </div>
                    </div>

                    {deleteRoom && <button onClick={deleteRoom} style={{ zIndex: 5, position: 'absolute', bottom: 0, left: 0 }}>
                        <DeleteIcon fontSize='small' />
                    </button>}

                    {EditTitle && <button onClick={EditTitle} style={{ zIndex: 5, position: 'absolute', bottom: 0, right: 0 }}>
                        <EditIcon fontSize='small' />
                    </button>}

                </div>
            </Draggable >
        )
    }
}