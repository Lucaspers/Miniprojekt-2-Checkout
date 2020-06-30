import React from 'react';
import { ReactComponent as ShoppingIcon} from './shopping-bag.svg';
import './cart-icon.styles.scss';
import { ProductConsumer } from '../../context/context'

export default function CartIcon() {
         return (
        <ProductConsumer>
        {value => {
    
        const { cartItems } = value;

        return (
        <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> { cartItems } </span>
        </div>
        )   
        }}
        </ProductConsumer>
        );
}

