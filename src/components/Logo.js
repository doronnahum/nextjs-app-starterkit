import React from 'react'
const logo = '/static/images/uet-logo.png'

export default function Logo(props) {
    const { logoContainerStyle } = props
    return (
        <div style={logoContainerStyle}>
            <img src={logo} alt="logo" style={{ width: 200 }} />
        </div>
    )
}
