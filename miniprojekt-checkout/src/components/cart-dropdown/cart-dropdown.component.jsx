import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import CustomButton from '../buttons/customButton';
import './cart-dropdown.style.scss';
import { withStyles } from '@material-ui/core/styles';
//import CartItem from '../cart-item/cart-item.component';

/* const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
 */



const cartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item' />
        <CustomButton>Go to CHECKOUT</CustomButton>
    </div>
)

export default cartDropdown;