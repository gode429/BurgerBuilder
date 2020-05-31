import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label : 'Salad', type : 'salad'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat', type : 'meat'}
];

const buildControls = (props) => (
        <div className = {classes.BuildControls}>
            <p><b>Current Price : {props.price.toFixed(2)}</b></p>
            {controls.map(ctrl =>{
                return <BuildControl  key = {ctrl.label}
                                      label = {ctrl.type} 
                                      added = {() => props.ingredientsAdded(ctrl.type)}
                                      removed = {() => props.ingredientRemoved(ctrl.type)} 
                                      disabled = {props.disabled[ctrl.type]} />

            })}
            <button className = {classes.OrderButton}
                     disabled = {!props.purchasable}
                     onClick = {props.purchasing}>ORDER NOW</button>
        </div>
);

export default buildControls;