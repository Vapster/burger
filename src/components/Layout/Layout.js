import React from 'react'
import Aux from '../../hoc/auxilary'
import classes from './Layout.module.css';

const Layout = (props) => {
    return(
        <Aux>
            <div>Toolbar, sidedrawer and backdrop</div>
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    )
}

export default Layout