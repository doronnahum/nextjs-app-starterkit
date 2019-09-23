import React, { useState, useEffect } from 'react'
import Organization from 'src/components/Organization';
import OrganizationDialog from 'src/components/OrganizationDialog';
import { AddCircle } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import './organizations.scss'
import { withTranslation } from 'src/services/i18n'

import Header from 'src/components/layout/Header'
const SCHOOLS = [
    {
        id: 1,
        title: 'Example'
    }
]

const Organizations = (props) => {
    const [organizations, setOrganization] = useState([])
    const [dialogIsOpen, setDialog] = useState(false)
    const [orgName, changeOrgName] = useState('')
    const [organizationIdChosen, chooseSchoolId] = useState('')
    const [hoveredItems, setHoveredItems] = useState([]);


    const openDialog = () => setDialog(true)
    const closeDialog = () => setDialog(false)

    const onClickEdit = (organizationId) => {
        chooseSchoolId(organizationId)
        openDialog()
    }
    const deleteSchool = (organizationId) => {
        const _organizations = [...organizations]
        const chosenSchoolIndex = _organizations.findIndex(organization => organization.id === organizationId)
        _organizations.splice(chosenSchoolIndex, 1)
        setOrganization(_organizations)
    }

    const OnOkDialog = (organizationInputs) => {
        const { orgName, city, street, zipCode, country } = organizationInputs
        let _organizations = [...organizations]
        if (organizationIdChosen) { // rename excisted organization
            let chosenSchool = _organizations.find(organization => organization.id === organizationIdChosen)
            if (orgName) {
                chosenSchool.title = orgName
            }
            if (city) {
                chosenSchool.city = city
            }
            if (street) {
                chosenSchool.street = street
            }
            if (zipCode) {
                chosenSchool.zipCode = zipCode
            }
            if (country) {
                chosenSchool.country = country
            }

        } else { // create new organization
            const newSchool = {
                id: Math.random(),
                title: orgName,
                city,
                street,
                zipCode,
                country
            }
            _organizations.push(newSchool)
        }
        setOrganization(_organizations)
        closeDialog()
        changeOrgName('')
        chooseSchoolId('')
    }

    const onClickAddSchool = () => {
        openDialog()
    }

    const onMouseEnterOrganization = (organizationId) => {
        const arr = [...hoveredItems]
        if (arr.includes(organizationId)) return;
        arr.push(organizationId)
        setHoveredItems(arr);
    }

    const onMouseLeaveOrganization = (organizationId) => {
        const arr = [...hoveredItems]
        const indexOfSchool = arr.indexOf(organizationId)
        arr.splice(indexOfSchool, 1)
        setHoveredItems(arr);
    }
    const renderToolTipTitle = (organization) => {
        let title = ''
        if (organization.street && organization.city) {
            title = `${organization.street} ${organization.city}`
        }
        return title
    }

    const renderOrganizations = () => {
        if (!organizations.length) return <div>{props.t('NO_ORGS')}</div>
        return organizations.map(organization => <Tooltip key={organization.id}
            open={hoveredItems.includes(organization.id)}
            title={renderToolTipTitle(organization)}
            placement="top">
            <Organization
                onMouseEnter={() => onMouseEnterOrganization(organization.id)}
                onMouseLeave={() => onMouseLeaveOrganization(organization.id)}
                className='organizations-container__organization'
                organization={organization}
                onClickEdit={() => onClickEdit(organization.id)}
                onClickDelete={() => deleteSchool(organization.id)}
            />
        </Tooltip>
        )
    }
    console.log('props', props);

    return (<div>
        <Header />
        <div className='organizations-container' >
            <h2>{props.t('ORGANIZATIONS_TITLE')}</h2>
            <button style={{
                display: 'flex',
                marginRight: 'auto',
                marginBottom: '2em'
            }}
                onClick={onClickAddSchool}>
                <AddCircle
                    style={{ fontSize: 50 }} />
            </button>
            {renderOrganizations()}
            <OrganizationDialog
                dialogIsOpen={dialogIsOpen}
                closeModal={closeDialog}
                onOkModalClick={OnOkDialog}
                onChangeText={(e) => changeOrgName(e.target.value)}
                orgName={orgName}
            />
        </div>
    </div>
    )
}

export default withTranslation('organizations')(Organizations)

