import React, { useState, useEffect } from 'react'
import Building from 'src/components/Building';
import Dialog from 'src/components/Dialog';
import { AddCircle } from '@material-ui/icons';
import Router from 'next/router'

import './buildings.scss'

const BUILDINGS = [
    {
        id: 1,
        title: 'Building 1'
    },
    {
        id: 2,
        title: 'Building 2'
    },
    {
        id: 3,
        title: 'Building 3'
    }
]

const Floors = () => {
    const [buildings, setFloors] = useState(BUILDINGS)
    const [dialogIsOpen, setDialog] = useState(false)
    const [buildingTitle, changeBuildingTitle] = useState('')
    const [buildingIdChosen, chooseBuildingId] = useState('')
    const { schoolTitle } = Router.query

    const openDialog = () => setDialog(true)
    const closeDialog = () => setDialog(false)

    const onClickEdit = (buildingId) => {
        chooseBuildingId(buildingId)
        openDialog()
    }
    const deleteFloor = (buildingId) => {
        const _buildings = [...buildings]
        const chosenFloorIndex = _buildings.findIndex(building => building.id === buildingId)
        _buildings.splice(chosenFloorIndex, 1)
        setFloors(_buildings)
    }

    const OnOkDialog = () => {
        let _buildings = [...buildings]
        if (buildingIdChosen) { // rename excisted building
            let chosenFloor = _buildings.find(building => building.id === buildingIdChosen)
            if (buildingTitle) {
                chosenFloor.title = buildingTitle
            }
        } else { // create new building
            const newFloor = {
                id: Math.random(),
                title: buildingTitle
            }
            _buildings.push(newFloor)
        }
        setFloors(_buildings)
        closeDialog()
        changeBuildingTitle('')
        chooseBuildingId('')
    }

    const onClickAddFloor = () => {
        openDialog()
    }

    const renderFloors = () => {
        return buildings.map(building => <Building
            key={building.id}
            className='buildings-container__building'
            building={building}
            onClickEdit={() => onClickEdit(building.id)}
            onClickDelete={() => deleteFloor(building.id)}
        />
        )
    }

    return (
        <div className='buildings-container' >
            <h1>{schoolTitle}</h1>
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
                onChangeText={(e) => changeBuildingTitle(e.target.value)}
                buildingTitle={buildingTitle}
            />
        </div>
    )
}

export default Floors
