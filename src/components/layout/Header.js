import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withTranslation } from 'src/services/i18n'
const logo = '/static/images/uet-logo.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        top: 0,
        zIndex: 2,
        width: '100%'
    },
    header: {
        height: '65px',
        backgroundColor: '#09152B'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginRight: 100
    }
}));

function ButtonAppBar({ title, t }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.header} >
                    <Button color="inherit">
                        <img src={logo} alt='logo' style={{ height: 40 }} />
                    </Button>

                    <div className={classes.titleContainer}>
                        <Typography variant="h6" className={classes.title}>
                            START SIMULATOR HERE
                    </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default withTranslation('common')(ButtonAppBar)
