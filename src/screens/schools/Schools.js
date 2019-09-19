import React, { useState, useEffect } from 'react'
import School from 'src/components/School';
import Dialog from 'src/components/Dialog';
import { AddCircle } from '@material-ui/icons';
import './schools.scss'

const SCHOOLS = [
    {
        id: 1,
        title: 'School 1'
    },
    {
        id: 2,
        title: 'School 2'
    },
    {
        id: 3,
        title: 'School 3'
    }
]

const Schools = () => {
    const [schools, setSchool] = useState(SCHOOLS)
    const [dialogIsOpen, setDialog] = useState(false)
    const [textValue, changeTitle] = useState('')
    const [schoolIdChosen, chooseSchoolId] = useState('')


    const openDialog = () => setDialog(true)
    const closeDialog = () => setDialog(false)

    const onClickEdit = (schoolId) => {
        chooseSchoolId(schoolId)
        openDialog()
    }
    const deleteSchool = (schoolId) => {
        const _schools = [...schools]
        const chosenSchoolIndex = _schools.findIndex(school => school.id === schoolId)
        _schools.splice(chosenSchoolIndex, 1)
        setSchool(_schools)
    }

    const OnOkDialog = () => {
        let _schools = [...schools]
        if (schoolIdChosen) { // rename excisted school
            let chosenSchool = _schools.find(school => school.id === schoolIdChosen)
            chosenSchool.title = textValue
        } else { // create new school
            const newSchool = {
                id: Math.random(),
                title: textValue
            }
            _schools.push(newSchool)
        }
        setSchool(_schools)
        closeDialog()
        changeTitle('')
        chooseSchoolId('')
    }

    const onClickAddSchool = () => {
        openDialog()
    }

    const renderSchool = () => {
        return schools.map(school => <School
            key={school.id}
            className='schools-container__school'
            school={school}
            onClickEdit={() => onClickEdit(school.id)}
            onClickDelete={() => deleteSchool(school.id)}
        />
        )
    }

    return (
        <div className='schools-container' >
            <h2>Schools</h2>
            <button style={{ display: 'flex', marginLeft: 'auto', marginBottom: '2em' }}
                onClick={onClickAddSchool}>
                <AddCircle
                    style={{ fontSize: 50 }} />
            </button>
            {renderSchool()}
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

export default Schools
