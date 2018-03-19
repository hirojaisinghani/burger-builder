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
      {controles.map(ctrl => (
        <BuildControl 
         key={ctrl.label} 
         label={ctrl.label} 
         added={() => props.ingredientsAdded(ctrl.type)}
         removed={() => props.ingredientsRemoved(ctrl.type)}
         disable={props.disabled[ctrl.type]}
         />
      ))} 
   </div> 
)
export default buildControls;