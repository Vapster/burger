import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return(
        <ul className={classes.Ul}>
            <NavigationItem href="/" active>Burger Builder</NavigationItem>
            <NavigationItem href="/">Check Out</NavigationItem>
            <NavigationItem href="/">Nothing</NavigationItem>
        </ul>
    )
}

export default NavigationItems;