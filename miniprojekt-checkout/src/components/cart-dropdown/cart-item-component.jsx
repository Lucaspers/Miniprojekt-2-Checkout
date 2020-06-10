import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import CustomButton from '../buttons/customButton';
//import './cart-item.styles.scss';
import { withStyles } from '@material-ui/core/styles';
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export default function CartItem() {
  return (
    <ProductConsumer>
      {value => {
        const { cart, cartTotal } = value;
        return (
          <div>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img
                      width="35"
                      src={`../${item.image}`}
                      // src={item.image}
                      alt="cart item"
                    />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
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














