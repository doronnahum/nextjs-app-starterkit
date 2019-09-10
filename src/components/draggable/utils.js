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
    logger.info('dragging');
    // console.log('event', event);
    console.log('event.target.className', event.target.className);
    const floor_element = document.getElementById('floor_element')
    const { clientHeight, offsetTop } = floor_element
    const position = {
        x: event.clientX - event.offsetX,
        y: event.clientY - event.offsetY
    }
    if (position.y > (offsetTop) && position.y < (clientHeight + offsetTop)) {
        console.log('###--inside')
        this.setState({ isInside: true })
    } else {
        console.log('###--out')
        this.setState({ isInside: false })
    }
}

export function updateData(position, item, PLACED_ITEM, title) {
    // console.log(item);

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
        this.setState({
            placedItems: arr,
        });
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