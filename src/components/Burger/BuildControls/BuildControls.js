import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controles = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
      <p><strong>{props.price.toFixed(2)}</strong></p>
      {controles.map(ctrl => (
        <BuildControl 
         key={ctrl.label} 
         label={ctrl.label} 
         added={() => props.ingredientsAdded(ctrl.type)}
         removed={() => props.ingredientsRemoved(ctrl.type)}
         disable={props.disabled[ctrl.type]}
         />
      ))} 
      <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
   </div> 
)
export default buildControls;