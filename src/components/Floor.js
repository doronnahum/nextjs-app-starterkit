import React, { Component } from 'react'
import Link from 'next/link'
import { Edit, ArrowForward, Delete } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
export default class Floor extends Component {
    render() {
        const { className, floor, onClickEdit, onClickDelete } = this.props
        return (
            <div className={className}>
                <section className={className + '__name-and-edit'}>
                    <div className='floors-container__floor__name'>
                        {floor.title}
                    </div>
                    <button onClick={onClickEdit}>
                        <Edit fontSize='large' />
                    </button>
                </section>
                <section>
                    <button onClick={onClickDelete}>
                        <Delete />
                    </button>
                    <Link href={{ pathname: '/dnd', query: { name: floor.title } }}>
                        <ArrowForward />
                    </Link>
                </section>
            </div >
        )
    }
}
