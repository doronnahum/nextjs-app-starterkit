import { logger } from 'src/services/logger'

export const ELEMENTS = [
    [{
        type: 'element',
        id: 1,
        title: 'aircon',
        shape: 'aircon',
        position: {
            x: 100,
            y: 300
        },
        width: 100,
        height: 50
    },
    {
        type: 'element',
        id: 1,
        title: 'aircon',
        shape: 'aircon',
        position: {
            x: 100,
            y: 300
        },
        width: 100,
        height: 50
    }],
    [{
        type: 'element',
        id: 2,
        title: 'lamp',
        shape: 'lamp',
        position: {
            x: 100,
            y: 350
        },
        width: 100,
        height: 50
    },
    {
        type: 'element',
        id: 2,
        title: 'lamp',
        shape: 'lamp',
        position: {
            x: 100,
            y: 350
        },
        width: 100,
        height: 50
    }]
]

export const ROOMS = [
    [{
        id: 1,
        type: 'room',
        shape: 'square',
        title: 'classroom',
        position: {
            x: 100,
            y: 0
        },
        width: 150,
        height: 150
    },
    {
        id: 1,
        type: 'room',
        shape: 'square',
        title: 'classroom',
        position: {
            x: 100,
            y: 0
        },
        width: 150,
        height: 150
    }
    ],
    [{
        id: 2,
        type: 'room',
        shape: 'circle',
        title: 'bathroom',
        position: {
            x: 100,
            y: 100
        },
        width: 150,
        height: 150
    }, {
        id: 2,
        type: 'room',
        shape: 'circle',
        title: 'bathroom',
        position: {
            x: 100,
            y: 100
        },
        width: 150,
        height: 150
    }],
    [{
        id: 3,
        type: 'room',
        shape: 'rectangle',
        title: 'teacher room',
        position: {
            x: 100,
            y: 200
        },
        width: 200,
        height: 150
    }, {
        id: 3,
        type: 'room',
        shape: 'rectangle',
        title: 'teacher room',
        position: {
            x: 100,
            y: 200
        },
        width: 200,
        height: 150
    }]]

// create an id
export function uuidv4() {
    return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}



export function handleStart(event, data) {
    logger.info('start drag');
}

export function handleDrag(event, data) {

    const { clientX, offsetX, clientY, offsetY, srcElement } = event
    const floor_element = document.getElementById('floor_element')
    const { clientWidth, clientHeight, offsetTop, offsetLeft } = floor_element;
    let positionX = clientX - offsetX; // position of the item we place
    let positionY = clientY - offsetY; // position of the item we place
    const elementHeight = srcElement.clientHeight // height of the item we place
    const elementWidth = srcElement.clientWidth // width of the item we place
    const insideArea = positionY < clientHeight + offsetTop - elementHeight
        && positionY > offsetTop
        && positionX > offsetLeft
        && positionX < clientWidth + offsetLeft - elementWidth
    if (insideArea) {
        this.setState({ isInside: true })
    } else {
        this.setState({ isInside: false })
    }

}

export function updateData(position, item, PLACED_ITEM, title) {
    const { placedItems } = this.state
    const { shape, type } = item
    let arr = [...placedItems]
    if (PLACED_ITEM) { // item is placed, and we gonna update it.
        const objIndex = arr.findIndex(obj => obj.id === item.id)
        if (position) {
            arr[objIndex].position = position
        }
        if (title) {
            arr[objIndex].title = title
        }
        this.setState({
            placedItems: arr,
            dragbleUpdateCounters: this.getUpdateDragbleUpdateCounters(item.id)
        })
        localStorage.setItem('data', JSON.stringify(arr));
    } else { // creating a new item in the placedItems
        const obj = {
            id: uuidv4(),
            title,
            shape,
            type,
            position: {
                x: position.x,
                y: position.y
            },
            size: {
                w: 58,
                h: 58
            },
            reference_id: '4567',
            parent_id: '1234',
            // zIndex: item.zIndex
        }
        arr.push(obj)
        this.setState({ placedItems: arr });
        localStorage.setItem('data', JSON.stringify(arr));
    }
}

export function deleteRoom(e, id) {
    const { placedItems } = this.state
    let arr = [...placedItems]
    const selectedRoomIndex = arr.findIndex(room => room.id === id)
    arr.splice(selectedRoomIndex, 1)
    this.setState({ placedItems: arr })
    localStorage.setItem('data', JSON.stringify(arr));
}

export function getUpdateDragbleUpdateCounters(id) {
    const { dragbleUpdateCounters } = this.state
    const _dragbleUpdateCounters = { ...dragbleUpdateCounters };
    _dragbleUpdateCounters[id] = (_dragbleUpdateCounters[id] || 0) + 1;
    return _dragbleUpdateCounters;
}

export function getElementPosition({ clientX, offsetX, clientY, offsetY, srcElement }) {
    const floor_element = document.getElementById('floor_element')
    const { clientWidth, clientHeight, offsetTop, offsetLeft } = floor_element;
    let positionX = clientX - offsetX; // position of the item we place
    let positionY = clientY - offsetY; // position of the item we place
    const elementHeight = srcElement.clientHeight // height of the item we place
    const elementWidth = srcElement.clientWidth // width of the item we place
    // console.log({ clientWidth, clientHeight, offsetTop, offsetLeft, elementHeight, elementWidth });
    if (positionY < offsetTop) { // if we drop item above the area
        positionY = offsetTop
    }
    if (positionY > clientHeight + offsetTop - elementHeight) { // if we drop item under the area
        positionY = clientHeight + offsetTop - elementHeight
    }
    if (positionX < offsetLeft) { // if we drop item left to the area  
        positionX = offsetLeft
    }
    if (positionX > clientWidth + offsetLeft - elementWidth) { // if we drop item right to the area 
        positionX = clientWidth + offsetLeft - elementWidth
    }
    const position = {
        x: positionX,
        y: positionY
    }
    return position
}

export function clearAll() {
    this.setState({ placedItems: [] })
    localStorage.removeItem('data');
}