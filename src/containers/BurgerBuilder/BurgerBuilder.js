import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    purchasable: false,
    purchasing: false,
  };
  updatePurchasableState (ingredients) {
    
    const sum = Object.keys(ingredients)
    .map((igkey)=>{
      return ingredients[igkey]
    }).reduce((sum, ele)=>{
        return sum + ele;
    },0);
    this.setState({
      purchasable: sum > 0
    });
  }
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
    this.updatePurchasableState(updatedIngredients);

    


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
    this.updatePurchasableState(updatedIngredients);
    
  }
  purchasingHandler = () => {
    this.setState({
      purchasing: true
    })
  } 
  purchasingCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  } 
  purchasingContinueHandler = () => {
    alert('Purchase continue');
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
        <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
          <OrderSummary 
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          purchasingContinueHandler={this.purchasingContinueHandler}
          purchasingCancelHandler={this.purchasingCancelHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
        ingredientsAdded={this.addIngredientHandler}
        ingredientsRemoved={this.removeIngredientHandler}
        disabled={disableInfo}
        price={this.state.totalPrice}
        purchasable={this.state.purchasable}
        ordered={this.purchasingHandler}
         />
      </Aux>
    );
  }
};
export default BurgerBuilder;