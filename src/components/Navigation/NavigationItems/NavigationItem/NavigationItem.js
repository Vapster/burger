import React from 'react';
import classes from './NavigationItem.module.css'

const navigationItem = (props) => {
    return(
        <li><a href={props.href} className={ props.active ? classes.active : null}>{props.children}</a></li>
    )
}

export default navigationItem;