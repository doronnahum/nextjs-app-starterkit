import React, { Component } from 'react'

import { Draggable, Droppable } from 'react-drag-and-drop'


class Demo extends React.Component {

    state = {
        draggable: [{ yolo: 'drag' }, { yolo: 'us' }, { yolo: 'plz' }],
        droppedItems: [],
        hovering: false
    }

    onDragEnter() {
        this.setState({ hovering: true })
    }
    onDragLeave() {
        this.setState({ hovering: false })
    }
    onDrop(e) {
        console.log('e', e);
        const { droppedItems } = this.state
        let arr = [...droppedItems]
        arr.push({ yolo: e.yolo })
        this.setState({ droppedItems: arr, hovering: false, })
    }
    renderDropItems() {
        const { droppedItems } = this.state
        return droppedItems.map(item => <Draggable type="yolo"
            data={item.yolo}
            style={{ background: 'blue', height: 50, width: 50, marginBottom: 10 }}>{item.yolo} </Draggable>)
    }

    renderElements() {
        return this.state.draggable.map((item, index) => {
            return (
                <Draggable type="yolo" data={item.yolo}>
                    <div key={index} style={{ background: 'blue', height: 50, width: 50, marginRight: 10 }}>
                        {item.yolo}
                    </div>
                </Draggable>
            )
        })
    }
    render() {
        const { droppedItems } = this.state
        console.log('droppedItems', droppedItems);


        let droppableStyle = {
            background: 'orange',
            height: '200px',
            width: 400
        }
        if (this.state.hovering) droppableStyle.backgroundColor = 'pink'
        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>{this.renderElements()}</div>
                <div style={{ border: '1px solid red', width: '200px', height: '200px', position: 'relative' }}>
                    <span style={{ position: 'absolute', float: 'left' }}>Drop here...</span>
                    <Droppable
                        types={['yolo']}
                        style={droppableStyle}
                        onDrop={this.onDrop.bind(this)}
                        onDragEnter={this.onDragEnter.bind(this)}
                        onDragLeave={this.onDragLeave.bind(this)}>
                        <div style={{ textAlign: 'center', lineHeight: '100px', background: 'orange', height: 400, width: 400, display: 'flex', flexDirection: 'row' }}>
                            {this.renderDropItems()}
                        </div>
                    </Droppable>
                </div>
                {/* <div style={{ border: '1px solid red', width: '200px', height: '200px', position: 'relative' }}>
                    <span style={{ position: 'absolute', float: 'left' }}>But not here...</span>
                    <Droppable
                        enabled={false}
                        style={{ height: '200px' }}
                        types={['yolo']}
                        onDrop={this.onDrop.bind(this)}>
                        <div style={{ textAlign: 'center', lineHeight: '100px' }}>{this.state.dropped}</div>
                    </Droppable>
                </div> */}
            </div>
        )
    }

}

export default Demo