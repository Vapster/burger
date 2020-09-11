import React from 'react';
import Burger from '../../../components/Burger/Burger'
import Button from '../../../components/UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = (props) => {
    return (
        <div className={classes.summary}>
            <h1 className={classes.items}>We hope it tastes great!!!</h1>
            <Burger ingredients = {props.ingredients}/>
            <div>
                <Button cls="Danger" click={props.checkoutCancel}>Cancel</Button>
                <Button cls="Success" click={props.checkout}>Continue</Button>
            </div>
        </div>
    )
}

export default CheckoutSummary