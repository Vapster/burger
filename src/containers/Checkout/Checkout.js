import React, {Component} from 'react';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ConatactData'

class Checkout extends Component{

    state={
        ingredients:{
            salad: 1,
            bacon: 1
        }
    }

    checkoutHandler = () => {
        this.props.history.replace(this.props.match.path + '/contact-data')
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    constructor(props){
        super(props)
        if (this.props.location.state){
            this.state.ingredients = this.props.location.state.ingredients
        }
    }

    render(){
        return(
        <div>
            <CheckoutSummary ingredients={this.state.ingredients}
            checkout = {this.checkoutHandler}
            checkoutCancel = {this.checkoutCancelHandler}
            />
            <Route path={this.props.match.path + '/contact-data'} component={ContactData}></Route>
        </div>)
    }
}

export default Checkout