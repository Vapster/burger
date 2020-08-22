import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../assets/images/burger-logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from '../../../assets/images/menu.png';

const toolbar = (props) => {
    return(
        <React.Fragment>
            <header className={classes.Toolbar}>
                <img className={classes.Menu} onClick={props.toggleSideDrawer} src={Hamburger} alt="Menu"/>
                <div className={classes.logoContainer}>
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default toolbar;