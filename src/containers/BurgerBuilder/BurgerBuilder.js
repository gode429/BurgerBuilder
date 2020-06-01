import React, {Component} from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES = {
    salad : 0.5,
    bacon :0.4,
    cheese : 1.3,
    meat : 0.7
}

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad : 0,
            bacon :0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 4,
        purchasable : false,
        purchasing : false
    }

    updatedPurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey];}).reduce((sum, el) =>{
            return sum + el; },0);
    this.setState({purchasable : sum >0})
    } 

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({ingredients : updatedIngredients , totalPrice : newPrice})
        this.updatedPurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <= 0)
        return;
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        this.setState({ingredients : updatedIngredients , totalPrice : newPrice})
        this.updatedPurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({purchasing : true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
    }
    purchaseContinueHandler = () => {
        alert('You are Awesome!!');
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo)
        disabledInfo[key] = disabledInfo[key] <=0 
        return(
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                    <OrderSummary ingredients = {this.state.ingredients}
                                  price = {this.state.totalPrice}
                                  purchaseCanceled = {this.purchaseCancelHandler}
                                  purchaseContinued = {this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls ingredientsAdded = {this.addIngredientHandler}
                               ingredientRemoved = {this.removeIngredientHandler}
                               disabled = {disabledInfo} 
                               purchasable = {this.state.purchasable}
                               purchasing = {this.purchaseHandler}
                               price = {this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;