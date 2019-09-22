import React, { useState, useEffect } from 'react'
import School from 'src/components/School';
import SchoolDialog from 'src/components/SchoolDialog';
import { AddCircle } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import './schools.scss'

const SCHOOLS = [
    {
        id: 1,
        title: 'Example'
    }
]

const Schools = () => {
    const [schools, setSchool] = useState(SCHOOLS)
    const [dialogIsOpen, setDialog] = useState(false)
    const [textValue, changeTitle] = useState('')
    const [schoolIdChosen, chooseSchoolId] = useState('')
    const [hoveredItems, setHoveredItems] = useState([]);


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

    const OnOkDialog = (schoolInputs) => {
        console.log('schoolInputs', schoolInputs);

        const { schoolTitle, city, street, zipCode, country } = schoolInputs
        let _schools = [...schools]
        if (schoolIdChosen) { // rename excisted school
            let chosenSchool = _schools.find(school => school.id === schoolIdChosen)
            if (schoolTitle) {
                chosenSchool.title = schoolTitle
            }
            if (city) {
                chosenSchool.city = city
            }
            if (schoolTitle) {
                chosenSchool.street = street
            }
            if (schoolTitle) {
                chosenSchool.zipCode = zipCode
            }
            if (schoolTitle) {
                chosenSchool.country = country
            }

        } else { // create new school
            const newSchool = {
                id: Math.random(),
                title: schoolTitle,
                city,
                street,
                zipCode,
                country
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

    const onMouseEnterSchool = (schoolId) => {
        const arr = [...hoveredItems]
        if (arr.includes(schoolId)) return;
        arr.push(schoolId)
        setHoveredItems(arr);
    }

    const onMouseLeaveSchool = (schoolId) => {
        const arr = [...hoveredItems]
        const indexOfSchool = arr.indexOf(schoolId)
        arr.splice(indexOfSchool, 1)
        setHoveredItems(arr);
    }
    const renderToolTipTitle = (school) => {
        let title = ''
        if (school.street && school.city) {
            title = `${school.street} ${school.city}`
        }
        return title
    }

    const renderSchool = () => {
        return schools.map(school => <Tooltip key={school.id}
            open={hoveredItems.includes(school.id)}
            title={renderToolTipTitle(school)}
            placement="top">
            <School
                onMouseEnter={() => onMouseEnterSchool(school.id)}
                onMouseLeave={() => onMouseLeaveSchool(school.id)}
                className='schools-container__school'
                school={school}
                onClickEdit={() => onClickEdit(school.id)}
                onClickDelete={() => deleteSchool(school.id)}
            />
        </Tooltip>
        )
    }
    console.log('schools', schools);

    return (
        <div className='schools-container' >
            <h2>Schools</h2>
            <button style={{ display: 'flex', marginLeft: 'auto', marginBottom: '2em' }}
                onClick={onClickAddSchool}>
                <AddCircle
                    style={{ fontSize: 50 }} />
            </button>
            {renderSchool()}
            <SchoolDialog
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
