import React, { Component } from 'react'
import Link from 'next/link'
import { Edit, ArrowForward, Delete } from '@material-ui/icons';
export default class Floor extends Component {
    render() {
        const { className, building, onClickEdit, onClickDelete } = this.props
        return (
            <div className={className}>
                <section className={className + '__name-and-edit'}>
                    <div className='buildings-container__building__name'>
                        {building.title}
                    </div>
                    <button onClick={onClickEdit}>
                        <Edit fontSize='large' />
                    </button>
                </section>
                <section>
                    <button onClick={onClickDelete}>
                        <Delete />
                    </button>
                    <Link href={{ pathname: '/floors', query: { buildingName: building.title } }}>
                        <ArrowForward />
                    </Link>
                </section>
            </div >
        )
    }
}
