import { logger } from 'src/services/logger'

export const ELEMENTS = [
    [{
        type: 'element',
        id: 1,
        title: 'aircon',
        shape: 'aircon',
        position: {
            x: 0,
            y: 50
        }
    },
    {
        type: 'element',
        id: 1,
        title: 'aircon',
        shape: 'aircon',
        position: {
            x: 0,
            y: 50
        }
    }],
    [{
        type: 'element',
        id: 2,
        title: 'lamp',
        shape: 'lamp',
        position: {
            x: 0,
            y: 130
        }
    },
    {
        type: 'element',
        id: 2,
        title: 'lamp',
        shape: 'lamp',
        position: {
            x: 0,
            y: 130
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
            y: 50
        }
    }, {
        id: 2,
        type: 'room',
        shape: 'circle',
        title: 'bathroom',
        position: {
            x: 100,
            y: 50
        }
    }],
    [{
        id: 3,
        type: 'room',
        shape: 'rectangle',
        title: 'teacher room',
        position: {
            x: 100,
            y: 100
        }
    }, {
        id: 3,
        type: 'room',
        shape: 'rectangle',
        title: 'teacher room',
        position: {
            x: 100,
            y: 100
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

}

