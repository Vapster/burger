import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients).map((ingredient)=>{
        return [...Array(props.ingredients[ingredient])].map((_, i)=>{
            return <BurgerIngredient type={ingredient} key={ingredient+String(i)}/>
        })
    }).reduce((arr, ele)=>{
        return arr.concat(ele)
    }, [])

    if(ingredients.length === 0){
        ingredients = <p>Insert Ingredients.</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger;