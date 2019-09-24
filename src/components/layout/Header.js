import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withTranslation } from 'src/services/i18n'
const logo = 'static/images/Logo.png'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        height: '65px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function ButtonAppBar({ title, t }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.header} >
                    <Button color="inherit"><img src={logo} alt='logo' /></Button>

                    <Typography variant="h6" className={classes.title}>
                        UET
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withTranslation('common')(ButtonAppBar)
