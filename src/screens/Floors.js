import React, { Component } from 'react'
import Link from 'next/link'
import EditIcon from '@material-ui/icons/Edit';
import './floors.scss'
const FLOORS = [
    {
        id: 1,
        name: 'Floor 1'
    },
    {
        id: 2,
        name: 'Floor 2'
    },
    {
        id: 3,
        name: 'Floor 3'
    }
]

export default class Floors extends Component {
    renderFloors() {
        return FLOORS.map(floor => <div key={floor.id} className='floors-container__floor'>
            <div className='floors-container__floor__name'>{floor.name}</div>
            <Link href={{ pathname: '/dad', query: { name: floor.name } }}>
                <EditIcon fontSize='large' />
            </Link>
        </div>)
    }
    render() {
        return (
            <div className='floors-container'>
                {this.renderFloors()}
            </div>
        )
    }
}
