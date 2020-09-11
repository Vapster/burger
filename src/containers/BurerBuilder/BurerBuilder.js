import React, { Component } from 'react';
import Aux from '../../hoc/auxilary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';
import axiosInstance from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        showSummary: false,
        loading: false,
        error: false
    }

    componentDidMount(){
        axiosInstance.get("/ingredients.json")
        .then((res) => {
            if (res) {
                this.setState({ingredients: res.data})
            }
            else{
                return Promise.reject()
            }            
        })
        .catch(error => {
            this.setState({error: true})
        })
    }

    handleToggleShowSummary = () => {
        let showS = ~this.state.showSummary
        this.setState({showSummary: showS})
    }

    handleCheckOut = () => {

        this.setState({loading: true})

        const data = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customeer: {
                name: 'Varshil Patel',
                email: 'varshilpatel1498@gmail.com',
                address: {
                    number: '1478',
                    street: 'dontKnow st east',
                    state: 'newOne',
                    zipcode: '234567'
                }
            },
            deliveryMethod: 'fastest'
        };
        
        axiosInstance.post('/orders.json', data)
        .then((res) => {
            this.setState({loading: false, showSummary: false})
            this.props.history.push({
                pathname: "/checkout",
                state: {
                    ingredients:this.state.ingredients
                }
            })
        })
        .catch((error)=>{
            this.setState({loading: false, showSummary: false})
        })
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

        let orderSummary = <BurgerSummary totalPrice={this.state.totalPrice} onCheckOut={this.handleCheckOut} onCancel={this.handleToggleShowSummary} ingredients={this.state.ingredients} />

        if (this.state.loading){
            orderSummary = <Spinner/>
        }

        let spinMainError = <Spinner/>
        if (this.state.error){
            spinMainError = <p>Unable to load ingredients.</p>
        }

        return (
            this.state.ingredients ? <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BurgerControls orderNowClicked={this.handleToggleShowSummary} price={this.state.totalPrice} disableOrderNow={this.state.totalPrice.toFixed(2)<=4} disabledButtons={disabledButtons} increaseIngredient={this.handleIncreaseIngredient} DecreaseIngredient={this.handleDecreaseIngredient} />
                <Modal onclickBackdrow={this.handleToggleShowSummary} show={this.state.showSummary}>
                    {orderSummary}
                </Modal>
            </Aux> : spinMainError
        );
    }
}

export default withErrorHandler(BurgerBuilder, axiosInstance);