import React, { useState, useEffect } from 'react'
import Floor from 'src/components/Floor';
import Dialog from 'src/components/Dialog';
import { AddCircle } from '@material-ui/icons';
import Router from 'next/router'
import './floors.scss'
const FLOORS = [
    {
        id: 1,
        title: 'Floor 1'
    },
    {
        id: 2,
        title: 'Floor 2'
    },
    {
        id: 3,
        title: 'Floor 3'
    }
]

const Floors = () => {
    const [floors, setFloors] = useState(FLOORS)
    const [dialogIsOpen, setDialog] = useState(false)
    const [textValue, changeTitle] = useState('')
    const [buildingName, setBuildingName] = useState('')

    useEffect(
        () => {
            const { buildingName } = Router.query || {}
            setBuildingName(buildingName)
        }, []
    )

    const openDialog = () => setDialog(true)
    const closeDialog = () => setDialog(false)

    const onClickEdit = (floorId) => {
        chooseFloorId(floorId)
        openDialog()
    }
    const deleteFloor = (floorId) => {
        const _floors = [...floors]
        const chosenFloorIndex = _floors.findIndex(floor => floor.id === floorId)
        _floors.splice(chosenFloorIndex, 1)
        setFloors(_floors)
    }

    const OnOkDialog = () => {
        let _floors = [...floors]
        if (floorIdChosen) { // rename excisted floor
            let chosenFloor = _floors.find(floor => floor.id === floorIdChosen)
            chosenFloor.title = textValue
        } else { // create new floor
            const newFloor = {
                id: Math.random(),
                title: textValue
            }
            _floors.push(newFloor)
        }
        setFloors(_floors)
        closeDialog()
        changeTitle('')
        chooseFloorId('')
    }

    const onClickAddFloor = () => {
        openDialog()
    }

    const renderFloors = () => {
        return floors.map(floor => <Floor
            key={floor.id}
            className='floors-container__floor'
            floor={floor}
            onClickEdit={() => onClickEdit(floor.id)}
            onClickDelete={() => deleteFloor(floor.id)}
        />
        )
    }

    return (
        <div className='floors-container' >
            <h1>{buildingName}</h1>
            <h2>Floors</h2>
            <button style={{ display: 'flex', marginLeft: 'auto', marginBottom: '2em' }}
                onClick={onClickAddFloor}>
                <AddCircle
                    style={{ fontSize: 50 }} />
            </button>
            {renderFloors()}
            <Dialog
                dialogIsOpen={dialogIsOpen}
                closeModal={closeDialog}
                onOkModalClick={OnOkDialog}
                onChangeText={(e) => changeTitle(e.target.value)}
                textValue={textValue}
            />
        </div>
    )
}

export default Floors
