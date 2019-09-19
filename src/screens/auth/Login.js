import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Router from 'next/router'

export default class Login extends Component {

    onLogin() {
        Router.push({ pathname: '/schools' })
    }

    render() {
        return (<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: 200 }}>

            <h1>Login</h1>
            <form noValidate autoComplete="off">
                <div>
                    <TextField
                        id="filled-email-input"
                        label="Email"
                        // className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        // className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div onClick={this.onLogin}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: 'lightblue',
                            borderRadius: '30%',
                            paddingTop: 15, paddingBottom: 15,
                            paddingLeft: 25, paddingRight: 25,

                        }}>
                        <div style={{ fontSize: 24, fontWeight: 'bold' }}>Login</div>
                    </div>
                </div>
            </form>
        </div>

        )
    }
}
