import React, { Component } from 'react'
import Link from 'next/link'
import { Edit, ArrowForward, Delete } from '@material-ui/icons';
export default class Floor extends Component {
    render() {
        const { className, floor, onClickEdit, onClickDelete, numberOfFloor } = this.props
        return (
            <div className={className}>
                <section className={className + '__name-and-edit'}>
                    <div className='floors-container__floor__name'>
                        {numberOfFloor} {floor.title}
                    </div>
                    <button onClick={onClickEdit}>
                        <Edit fontSize='large' />
                    </button>
                </section>
                <section>
                    <button onClick={onClickDelete}>
                        <Delete />
                    </button>
                    <button>
                        <Link href={{ pathname: '/dnd', query: { name: floor.title } }}>
                            <ArrowForward />
                        </Link>
                    </button>
                </section>
            </div >
        )
    }
}
