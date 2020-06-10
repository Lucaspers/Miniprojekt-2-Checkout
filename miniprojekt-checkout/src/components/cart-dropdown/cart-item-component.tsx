import React, { Component } from 'react';
//import './cart-item.styles.scss';
import { ProductConsumer } from "../../context/context";
import CardMedia from '@material-ui/core/CardMedia';

export default function CartItem() {
  return (
    <ProductConsumer>
      {value => {
        const { cart, cartTotal } = value;
        console.log(cart);
        return (
          <div>
            <ul className="cart-items">
              {cart.map(item => {
                 console.log(item);
                return (
                  <li key={item.id} >                   
                  <CardMedia src={item.img}       
                  component="img"
                  alt="cart item"                                                     
                />                    
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize" >
                        amount : {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart total : ${cartTotal}
            </h4>
            <div className="text-center my-5">
              
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}














