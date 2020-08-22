import React, { Component } from 'react'
import Aux from '../../hoc/auxilary'
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state = {
        sideDrawer: false
    }

    toggleSideDrawer = () => {
        const sideDrawer = !this.state.sideDrawer
        this.setState({sideDrawer})
    }

    render(){
        
        return(
            <Aux>
                <Toolbar toggleSideDrawer={this.toggleSideDrawer} />
                <SideDrawer open={this.state.sideDrawer} clicked={this.toggleSideDrawer} />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout