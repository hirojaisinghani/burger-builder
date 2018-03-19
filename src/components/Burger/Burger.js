import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(igkeys => {
    return [...Array(props.ingredients[igkeys])].map((__, i) => {
      return <BurgerIngredient key={igkeys+i} type={igkeys} />
    });
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  console.log(transformedIngredients);
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>  
  );

}
export default burger;