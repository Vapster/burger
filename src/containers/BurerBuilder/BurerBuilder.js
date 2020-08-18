import React, { Component } from 'react';
import Aux from '../../hoc/auxilary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredient: {}
    }
    
    render() { 
        return (
            <Aux>
                <Burger/>
                <div>Build controler</div>
            </Aux>
        );
    }
}
 
export default BurgerBuilder;