import React, { Component } from 'react'
import Link from 'next/link'
import { Edit, ArrowForward, Delete } from '@material-ui/icons';
const logo = 'static/images/schoolLogo.png'

export default class Organization extends Component {
    render() {
        const { className, organization, onClickEdit, onClickDelete, onMouseEnter, onMouseLeave } = this.props
        return (
            <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <section className={className + '__name-and-edit'}>
                    <div className={className + 'organization__logo'}>
                        <img src={logo} style={{ width: 60, height: 60 }} alt='pic' />
                    </div>
                    <div className={className + 'organization__name'}>
                        {organization.title}
                    </div>
                    <button onClick={onClickEdit}>
                        <Edit fontSize='large' />
                    </button>
                </section>
                <section className={className + '__buttons'} >
                    <button onClick={onClickDelete}>
                        <Delete />
                    </button>
                    <button>
                        <Link href={{ pathname: '/buildings', query: { organizationTitle: organization.title } }}>
                            <ArrowForward fontSize='large' />
                        </Link>
                    </button>

                </section>
            </div >
        )
    }
}
