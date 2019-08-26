import React, { Component } from 'react'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import 'src/styles/dad.scss'

const ELEMENTS = [
    {
        id: 1,
        title: 'classroom',
        type: 'square',
        width: 50,
        height: 50
    },
    {
        id: 2,
        title: 'kitchen',
        type: 'circle',
        width: 50,
        height: 50
    },
    {
        id: 3,
        title: 'bathroom',
        type: 'rectangle',
        width: 150,
        height: 50
    },
]
export default class Example extends Component {
    state = {
        items: [],
        isDraggableElement: false
    }
    onDragStart = (x) => {
        console.log('start');
        console.log('x', x);

    }
    onDropItem = (event) => {
        const { isDraggableElement } = this.state
        console.log('onDropItem');
        console.log('event', event);
        event.srcElement.style.visibility = 'hidden';
        // offsetHeight
        // offsetLeft
        // this.setState({ isDraggableElement: true })
    }


    dropData(event) {
        console.log('event', event);


    }
    onDragEnter(data) {
        console.log('onDragEnter');

    }
    onDragLeave(data) {
        console.log('onDragLeave');
        console.log('data', data);

    }

    onHit = (event) => {
        const { items, isDraggableElement } = this.state
        console.log('onHit');
        console.log('event', event);
        const newItem = {
            ...event.dragData,
            age: event.dragData.age,
            height: event.dragData.height,
            id: event.dragData.id,
            title: event.dragData.title,
            type: event.dragData.type,
            width: event.dragData.width,
            x: event.x,
            y: event.y
        }
        // if (!event.dragData.movableItem) {
        //     debugger
        this.setState({ items: [...items, newItem] })
        // event.containerElem.style.visibility = 'hidden';
        // }

    }
    renderItems() {
        const { items, isDraggableElement } = this.state
        return items.map((item, i) => {
            return <DragDropContainer targetKey="foo" key={i}
                dragData={{ ...item, movableItem: true }}
                onDragStart={this.onDragStart}
                onDrop={this.onDropItem}
            >
                <div className={`item-${item.type}`}
                    style={{ background: 'yellow', position: 'absolute', top: item.y - item.height, left: item.x - item.width }}>
                    {item.title}
                </div>
            </DragDropContainer>
        })
        // <div key={i} style={{ background: 'yellow', width: 50, height: 50, position: 'absolute', top: item.y, left: item.x }}>{item.name}</div>)
    }
    renderElements() {
        return ELEMENTS.map((ELEMENT) => <DragDropContainer targetKey="foo" dragClone key={ELEMENT.type}
            dragData={{ ...ELEMENT }}
        // onDragStart={this.onDragStart}
        >
            <div className={`item-${ELEMENT.type}`} style={{ background: 'yellow' }}>{ELEMENT.title}</div>
        </DragDropContainer>)
    }

    render() {
        const { items } = this.state
        console.log('items&&&&&&&&&&&&', items);

        return (
            <div>
                {ELEMENTS.map((ELEMENT) => <DragDropContainer targetKey="foo" dragClone key={ELEMENT.type}
                    dragData={{ ...ELEMENT }}
                // onDragStart={this.onDragStart}
                >
                    <div className={`item-${ELEMENT.type}`} style={{ background: 'yellow' }}>{ELEMENT.title}</div>
                </DragDropContainer>
                )}
                <DropTarget targetKey="foo"
                    dropData={{ name: 'wzazaaaaaaa' }}
                    onDragEnter={this.onDragEnter}
                    onDragLeave={this.onDragLeave}
                    onHit={this.onHit}

                >
                    <div style={{ background: 'blue', height: 400 }}>
                        {this.renderItems()}
                        {/* I'm a valid drop target for the object above since we both have the same targetKey! */}
                    </div>
                </DropTarget >
            </div >
        )
    }
}

