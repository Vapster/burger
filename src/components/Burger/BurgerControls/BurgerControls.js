import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import classes from './BurgerControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'}
]

const BurgerControls = (props) => {

    return (<div className={classes.BuildControls}>
        <div>Current price: <strong>{props.price.toFixed(2)}</strong></div>
        {controls.map((ele)=>{
            return <BurgerControl disable={props.disabledButtons[ele.type]} label={ele.label} key={ele.label} ingredient={ele.type} increaseIngredient={props.increaseIngredient} DecreaseIngredient={props.DecreaseIngredient}/>
        })}
        <button className={classes.OrderButton} onClick={props.orderNowClicked} disabled={props.disableOrderNow}>ORDER NOW</button>
    </div>)
}

export default BurgerControls;