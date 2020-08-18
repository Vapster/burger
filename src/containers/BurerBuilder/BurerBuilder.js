import React, { Component } from 'react';
import Aux from '../../hoc/auxilary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            bacon: 0,
            salad:0
        },
        totalPrice: 4
    }

    handleIncreaseIngredient = (ingredient) => {
        const ingredients = {...this.state.ingredients};
        if (ingredients[ingredient]){
            ingredients[ingredient] = ingredients[ingredient] + 1;
        }else{
            ingredients[ingredient] = 1;
        }
        const oldPrice = this.state.totalPrice;
        const priceIncrease = INGREDIENT_PRICES[ingredient];
        const updatedPrice = oldPrice + priceIncrease;
        this.setState({ingredients, totalPrice:updatedPrice});
    }

    handleDecreaseIngredient = (ingredient) => {
        const ingredients = {...this.state.ingredients};
        if (ingredients[ingredient]){
            ingredients[ingredient] = ingredients[ingredient] - 1;
            const oldPrice = this.state.totalPrice;
            const priceDecrease = INGREDIENT_PRICES[ingredient];
            const updatedPrice = oldPrice - priceDecrease;
            this.setState({ingredients, totalPrice: updatedPrice});
        }
    }
    
    render() {
        
        const disabledButtons = {...this.state.ingredients}

        Object.keys(disabledButtons).map((ingredient)=>{
            if(this.state.ingredients[ingredient]<=0){
                disabledButtons[ingredient] = true
            }else{
                disabledButtons[ingredient] = false
            }
            return null;
        })

        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BurgerControls price={this.state.totalPrice} disableOrderNow={this.state.totalPrice.toFixed(2)<=4} disabledButtons={disabledButtons} increaseIngredient={this.handleIncreaseIngredient} DecreaseIngredient={this.handleDecreaseIngredient} />
            </Aux>
        );
    }
}

export default BurgerBuilder;