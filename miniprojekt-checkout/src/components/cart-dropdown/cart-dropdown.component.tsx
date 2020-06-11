import React from 'react';
import CustomButton from '../buttons/customButton';
import './cart-dropdown.style.scss';
import CartItem from './cart-item-component';


const cartDropdown = () => (
    <div className='cart-dropdown'>
        <div />
          <div>
          <CartItem />
          </div>
        <CustomButton>Go to CHECKOUT</CustomButton>
    </div>
)

export default cartDropdown;