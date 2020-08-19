import React from 'react';
import Aux from '../../../hoc/auxilary';
import Button from '../../UI/Button/Button'

const BurgerSummary = (props) => {
    const summary = Object.keys(props.ingredients).map((ingredient)=>{
        return <li key={ingredient} style={{textTransform:"capitalize"}} >{ingredient}: {props.ingredients[ingredient]}</li>
    })

    return (
        <Aux>
            <div>A delicious burger with following ingredients:</div>
            <ul>
                {summary}
            </ul>
            <div><strong>Total Sum:&nbsp;{props.totalPrice.toFixed(2)}</strong></div>
            <p>Continue to checkout?</p>
            <Button cls="Danger" click={props.onCancel}>Cancel</Button>
            <Button cls="Success" click={props.onCheckOut}>Check Out</Button>
        </Aux>
    )

}

export default BurgerSummary;