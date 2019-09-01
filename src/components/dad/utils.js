export const ROOMS = [
    {
        type: 'room',
        name: 'classroom',
        shape: 'square',
        width: 200,
        height: 200,
        elements: []
    },
    {
        type: 'room',
        name: 'kitchen',
        shape: 'circle',
        width: 200,
        height: 200,
        elements: []
    },
    {
        type: 'room',
        name: 'bathroom',
        shape: 'rectangle',
        width: 300,
        height: 100,
        elements: []
    }
]
export const ELEMENTS = [
    {
        type: 'element',
        name: 'aircon',
        shape: 'square',
        width: 50,
        height: 50,
    },
    {
        type: 'element',
        name: 'lamp',
        shape: 'circle',
        width: 50,
        height: 50,
    }
]

export function makeGrid() {
    const GRID_DEFAULT_VALUE = 2
    const rowsFromStorage = JSON.parse(localStorage.getItem('rows'))
    console.log('rowsFromStorage', rowsFromStorage);

    const grid = GRID_DEFAULT_VALUE
    let i = 1

    let rowsDefault = []
    if (!rowsFromStorage) {
        while (i <= grid) {
            rowsDefault.push(Array())
            i++
        }
    }
    this.setState({
        rows: rowsFromStorage || rowsDefault
    })
}

export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
    const result = [...arr];
    let itemToAdd = { ...payload };
    itemToAdd.id = Math.random()
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }
    // debugger
    return result;
};

export function onClickUp(rows) {
    let arr = [...rows]
    arr.push(Array())
    this.setState({ rows: arr })
}

export function onClickDown(rows) {
    let arr = [...rows]
    arr.pop()
    this.setState({ rows: arr })
}


export function onDragEnter() {
    this.setState({ dragEnterGrid: true })
}

export function onDragLeave() {
    this.setState({ dragEnterGrid: false })
}