import React from 'react';
import { ProductConsumer } from "../../context/context";
import CardMedia from '@material-ui/core/CardMedia';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';



export default function CartItem() {
  
  return (
    <ProductConsumer>
      {value => {
        const { cart, cartTotal,removeItem, id, title, price, count, total, image } = value;
   
        console.log(cart);
        return (
          <div>
            <ul className="cart-items">
              {cart.map(item => {
                 console.log(item);
                return (
                  <li key={item.id} className="itemContainer">  
                  
                  <div className="deleteContainer">                                 
                    <DeleteRoundedIcon className="deleteIcon" onClick={() => removeItem(item.id)} /> 
                  </div>
                 
                  <div className="infoItem">                       
                  <CardMedia src={item.img}       
                  component="img"
                  alt="cart item"                                                     
                />                    
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize" >
                    
                      Total : = {item.count} * {item.price} : {item.total} kr
                      </h6>
                    </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              Cart total : {cartTotal}kr
            </h4>
            <div className="text-center my-5">
              
            </div>
          </div>          
        );
      }}
    </ProductConsumer>
    
  );
 
}














