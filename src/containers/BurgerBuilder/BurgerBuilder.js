import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
  salad: 0.4,
  bacon: 0.3,
  cheese: 0.6,
  meat: 1.4,
}

class BurgerBuilder extends Component {
  state = {
    ingredients : {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
       ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    


  }
  removeIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0 ) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
       ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    
  }

  render () {
    const disableInfo = {
      ...this.state.ingredients
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key]<=0;
    }
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
        ingredientsAdded={this.addIngredientHandler}
        ingredientsRemoved={this.removeIngredientHandler}
        disabled={disableInfo}
         />
      </Aux>
    );
  }
};
export default BurgerBuilder;