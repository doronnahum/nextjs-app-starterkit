

export const ELEMENTS = [
    {
        room: 'classroom',
        type: 'square',
        width: 200,
        height: 200
    },
    {
        room: 'kitchen',
        type: 'circle',
        width: 200,
        height: 200
    },
    {
        room: 'bathroom',
        type: 'rectangle',
        width: 300,
        height: 100
    }
]

export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
    const result = [...arr];
    let itemToAdd = payload;
    // itemToAdd.id = Math.random()
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }
    return result;
};
