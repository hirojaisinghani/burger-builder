
import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const ordersummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
      .map((igkey)=> {
        return <li key={igkey}> <span>{igkey}</span>: {props.ingredients[igkey]} </li>;
      })

return (
  <Aux>
      <h3>Your Order</h3>
      <p> Delecious Burger with following ingredinets</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed( 2 )}</strong></p>
      <p>Continue to Checkout?</p>
      <Button buttonType='Danger' clicked={props.purchasingCancelHandler}>Cancel</Button>
      <Button buttonType='Success' clicked={props.purchasingContinueHandler}>Continue</Button>

  </Aux>
);

}
export default ordersummary;