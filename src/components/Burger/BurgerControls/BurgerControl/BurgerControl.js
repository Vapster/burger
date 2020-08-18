import React from 'react';
import classes from './BurgerControl.module.css';

const BurgerControl = (props) => {
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={() => {props.DecreaseIngredient(props.ingredient)}} disabled={props.disable}>less</button>
            <button className={classes.More} onClick={() => {props.increaseIngredient(props.ingredient)}}>more</button>
        </div>
    )
}

export default BurgerControl;