import React, { useState } from 'react';
import CustomButton from '../buttons/customButton';
import './cart-dropdown.style.scss';
import CartItem from './cart-item-component';
import { Link } from "react-router-dom";

const cartDropdown = () => (
    <div className='cart-dropdown'>
        <div />
          <div>
          <CartItem />
          </div>                  
        <CustomButton> 
          <Link to="/Checkout" className="main-link" style={{ textDecoration: 'none',color: 'black' }} >
               CHECKOUT
          </Link>
        </CustomButton>
</div>   

)
export default cartDropdown;