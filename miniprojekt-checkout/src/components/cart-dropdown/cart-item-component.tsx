import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import CustomButton from '../buttons/customButton';
//import './cart-item.styles.scss';
import { withStyles } from '@material-ui/core/styles';
import { ProductConsumer } from "../../context/context";
import { Link } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';

export default function CartItem() {
  return (
    <ProductConsumer>
      {value => {
        const { cart, cartTotal } = value;
        console.log(cart);
        return (
          <div>
            <ul>
              {cart.map(item => {
                 console.log(item);

                return (
                  <li key={item.id} className="cart-item mb-4">                   
                  <CardMedia src={item.img}       
                  component="img"
                  alt="cart item"                 
                  width='35'                  
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














