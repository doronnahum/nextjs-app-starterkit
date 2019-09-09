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
        }
    },
    {
        type: 'element',
        id: 1,
        title: 'aircon',
        shape: 'aircon',
        position: {
            x: 100,
            y: 300
        }
    }],
    [{
        type: 'element',
        id: 2,
        title: 'lamp',
        shape: 'lamp',
        position: {
            x: 100,
            y: 350
        }
    },
    {
        type: 'element',
        id: 2,
        title: 'lamp',
        shape: 'lamp',
        position: {
            x: 100,
            y: 350
        }
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
        }
    },
    {
        id: 1,
        type: 'room',
        shape: 'square',
        title: 'classroom',
        position: {
            x: 100,
            y: 0
        }
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
        }
    }, {
        id: 2,
        type: 'room',
        shape: 'circle',
        title: 'bathroom',
        position: {
            x: 100,
            y: 100
        }
    }],
    [{
        id: 3,
        type: 'room',
        shape: 'rectangle',
        title: 'teacher room',
        position: {
            x: 100,
            y: 200
        }
    }, {
        id: 3,
        type: 'room',
        shape: 'rectangle',
        title: 'teacher room',
        position: {
            x: 100,
            y: 200
        }
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

}

export function updateData(position, item, PLACED_ITEM, title) {
    console.log(item);

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