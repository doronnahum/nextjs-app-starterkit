import React, { Component } from 'react'
import Link from 'next/link'
import { Edit, ArrowForward, Delete } from '@material-ui/icons';
const logo = 'static/images/schoolLogo.png'

export default class Floor extends Component {
    render() {
        const { className, school, onClickEdit, onClickDelete, onMouseEnter, onMouseLeave } = this.props
        return (
            <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <section className={className + '__name-and-edit'}>
                    <div className='schools-container__school__logo'>
                        <img src={logo} style={{ width: 60, height: 60 }} alt='pic' />
                    </div>
                    <div className='schools-container__school__name'>
                        {school.title}
                    </div>
                    <button onClick={onClickEdit}>
                        <Edit fontSize='large' />
                    </button>
                </section>
                <section className={className + '__buttons'} >
                    <button onClick={onClickDelete}>
                        <Delete />
                    </button>
                    <Link href={{ pathname: '/buildings', query: { schoolTitle: school.title } }}>
                        <ArrowForward fontSize='large' />
                    </Link>
                </section>
            </div >
        )
    }
}
