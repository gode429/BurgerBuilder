import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css';
const logo = (prps) => (
    <div className = {classes.Logo}>
        <img src = {burgerLogo} alt = "MyBurger"></img>
    </div>
);

export default logo;