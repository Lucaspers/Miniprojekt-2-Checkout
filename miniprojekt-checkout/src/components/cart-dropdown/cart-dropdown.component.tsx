import React, { Component } from 'react';
import CustomButton from '../buttons/customButton';
import './cart-dropdown.style.scss';
import CartItem from './cart-item-component';


const cartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item' />
          <div>
          <CartItem />
          </div>
        <CustomButton>Go to CHECKOUT</CustomButton>
    </div>
)

export default cartDropdown;