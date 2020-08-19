import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../assets/images/burger-logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return(
        <React.Fragment>
            <header className={classes.Toolbar}>
                <div>MENU</div>
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