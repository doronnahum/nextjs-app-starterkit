import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';

const groupStyle = {
    marginLeft: '50px',
    // flex: 1,


}
const ELEMENTS = [
    {
        id: 1,
        title: 'classroom',
        type: 'square',
        width: 100,
        height: 100
    },
    {
        id: 2,
        title: 'kitchen',
        type: 'circle',
        width: 100,
        height: 100
    },
    {
        id: 3,
        title: 'bathroom',
        type: 'rectangle',
        width: 200,
        height: 100
    }
]

class Copy extends Component {
    constructor() {
        super();

        this.state = {
            items: [],
            rows: [[]],
            rooms: [],
            dragEnter: false
        }
    }

    componentDidMount() {
        this.makeGrid()
    }

    makeGrid() {
        const GRID = 6
        let arr = []
        let i = 1
        while (i <= GRID) {
            arr.push(Array())
            i++
        }
        this.setState({ rows: arr })
    }

    onDragEnter = (x, y) => {
        console.log('x', x);
        console.log('y', y);
        this.setState({ dragEnter: true })
    }
    onDragLeave = (x, y) => {
        console.log('x', x);
        console.log('y', y);
        this.setState({ dragEnter: false })
    }

    render() {
        const { items, rooms, dragEnter, rows } = this.state
        // console.log('items', items);
        // console.log('rooms', rooms);
        console.log('rows', rows);
        if (!rows.length) {
            return <div>empty for now....</div>
        }
        return (
            <div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '50px', marginRight: '50px' }}>
                <div style={groupStyle}>
                    <Container
                        // orientation='horizontal'
                        groupName="1"
                        behaviour="copy"
                        getChildPayload={i => ELEMENTS[i]}
                        onDrop={e => {
                            this.setState({ items: applyDrag(this.state.items, e) })
                        }}
                    >
                        {
                            ELEMENTS.map((item, i) => {
                                return (
                                    <Draggable key={i} style={{ width: item.width, height: item.height }}>
                                        <div className={`item-${item.type}`} style={{ width: item.width, height: item.height }}>
                                            {item.title}
                                        </div>
                                    </Draggable>
                                );
                            })
                        }
                    </Container>
                </div>
                <div style={{ ...groupStyle, background: dragEnter ? 'black' : 'blue' }}>
                    {rows.map((row, j) => {
                        // console.log('this.state.rows[j]', rows[j]);
                        return <Container
                            key={j}
                            orientation='horizontal'
                            style={{ width: 600, height: 100, background: 'brown' }}
                            groupName="1"
                            getChildPayload={i => this.state.rows[j][i]}
                            dropPlaceholder
                            onDragEnter={this.onDragEnter}
                            onDragLeave={this.onDragLeave}
                            removeOnDropOut
                            onDrop={e => {
                                let arr = [...rows]
                                arr[j] = applyDrag(this.state.rows[j], e)
                                this.setState({ rows: arr })
                            }}>
                            {

                                this.state.rows[j] && this.state.rows[j].map((item, i) => {
                                    // console.log('item', item);

                                    return (
                                        <Draggable key={i}
                                            style={{ width: item.width, height: item.height }}>
                                            <div className={`item-${item.type}`} style={{ width: item.width, height: item.height }}>
                                                {item.title}
                                            </div>
                                        </Draggable>
                                    );
                                })
                            }

                        </Container>
                    })}
                    {/* 
                    <Container orientation='horizontal' style={{ height: 100, minWidth: 100 }}
                        groupName="1"
                        getChildPayload={i => this.state.rooms[i]}
                        dropPlaceholder
                        onDragEnter={this.onDragEnter}
                        onDragLeave={this.onDragLeave}
                        removeOnDropOut
                        onDrop={e => this.setState({ rooms: applyDrag(this.state.rooms, e) })}>
                        {
                            this.state.rooms.map((item, i) => {

                                return (
                                    <Draggable key={i}
                                        style={{ width: item.width, height: item.height }}>
                                        <div className={`item-${item.type}`} style={{ width: item.width, height: item.height }}>
                                            {item.title}
                                        </div>
                                    </Draggable>
                                );
                            })
                        }

                    </Container>
                    <Container orientation='horizontal' style={{ height: 100, minWidth: 100 }}
                        groupName="1"
                        getChildPayload={i => this.state.rooms[i]}
                        dropPlaceholder
                        onDragEnter={this.onDragEnter}
                        onDragLeave={this.onDragLeave}
                        removeOnDropOut
                        onDrop={e => this.setState({ rooms: applyDrag(this.state.rooms, e) })}>
                        {
                            this.state.rooms.map((item, i) => {

                                return (
                                    <Draggable key={i}
                                        style={{ width: item.width, height: item.height }}>
                                        <div className={`item-${item.type}`} style={{ width: item.width, height: item.height }}>
                                            {item.title}
                                        </div>
                                    </Draggable>
                                );
                            })
                        }

                    </Container> */}
                </div>
                {/* <div style={groupStyle}>
                    <Container groupName="1" getChildPayload={i => this.state.items3[i]} onDrop={e => this.setState({ items3: applyDrag(this.state.items3, e) })}>
                        {
                            this.state.items.map(item => {
                                return (
                                    <Draggable key={item.id}>
                                        <div className="draggable-item">
                                            {item.title}
                                        </div>
                                    </Draggable>
                                );
                            })
                        }
                    </Container>
                </div> */}
            </div>
        );
    }
}

Copy.propTypes = {

};

export default Copy;