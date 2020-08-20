import React from 'react';
import Logo from '../../../assets/images/burger-logo.png'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './SideDrawer.module.css';

const sideDrawer = () => {
    return(
        <div className={classes.SideDrawer}>
            <img style={{height:"11%"}} src={Logo} alt="Logo"></img>
            <nav>
                <NavigationItem />
            </nav>
        </div>
    )
}

export default sideDrawer;