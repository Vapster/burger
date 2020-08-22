import React from 'react';
import Logo from '../../../assets/images/burger-logo.png'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

    let sideDrawerClasses = [classes.SideDrawer]

    if(props.open){
        sideDrawerClasses.push(classes.open)
    }else{
        sideDrawerClasses.push(classes.close)
    }

    return(
        <React.Fragment>
        <Backdrop show={props.open} clicked={props.clicked} />
        <div className={sideDrawerClasses.join(" ")}>
            <img className={classes.Logo} src={Logo} alt="Logo"></img>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </React.Fragment>
    )
}

export default sideDrawer;