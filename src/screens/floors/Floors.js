import React, { useState, useEffect } from 'react'
import Floor from 'src/components/Floor';
import FloorDialog from 'src/components/FloorDialog';
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
    const [floorTitle, changeFloorTitle] = useState('')
    const [buildingName, setBuildingName] = useState('')
    const [floorIdChosen, chooseFloorId] = useState('')
    const [floorNumber, setFloorNumber] = useState(1) // the default will be the numbers of floors + 1

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
        const selectedFloor = floors.find(floor => floor.id === floorId)
        setFloorNumber(selectedFloor.number)
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
            if (floorTitle) {
                chosenFloor.title = floorTitle
            }
            if (floorNumber) {
                chosenFloor.number = floorNumber
            }
        } else { // create new floor
            const newFloor = {
                id: Math.random(),
                title: floorTitle,
                number: floorNumber || _floors.length + 1
            }
            _floors.push(newFloor)
        }
        const floorsSortedByIndex = _floors.sort((a, b) => a.number - b.number)

        setFloors(floorsSortedByIndex)
        setFloorNumber(0)
        closeDialog()
        changeFloorTitle('')
        chooseFloorId('')
    }

    const onClickAddFloor = () => {
        setFloorNumber(floors.length + 1)
        openDialog()
    }
    const handleFloorNumberChange = (e) => {
        setFloorNumber(e.target.value)
    }

    const renderFloors = () => {
        return floors.map((floor, i) => {
            const numberOfFloor = i + 1
            return <Floor floorNumber={floor.number}
                key={floor.id}
                numberOfFloor={floor.number}
                className='floors-container__floor'
                floor={floor}
                onClickEdit={() => onClickEdit(floor.id, numberOfFloor)}
                onClickDelete={() => deleteFloor(floor.id)}
            />
        }
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
            <FloorDialog
                dialogIsOpen={dialogIsOpen}
                closeModal={closeDialog}
                onOkModalClick={OnOkDialog}
                onChangeText={(e) => changeFloorTitle(e.target.value)}
                floorTitle={floorTitle}
                floorNumber={floorNumber}
                handleFloorNumberChange={handleFloorNumberChange}
            />
        </div>
    )
}

export default Floors
