import React from 'react';
import Button from '@material-ui/core/Button';
import { ProductConsumer } from "../../context/context";
import { Link } from "react-router-dom";

   
    
export default function FinishButton() {
  

    return (
      <ProductConsumer>
        {value => {
          const { cart, clearCart } = value;
     
          console.log(cart);
          return (
            
            
               <Button  onClick={() => {
                clearCart();
                alert('Thank You for Shopping with Us');
              }} variant="contained" color="secondary">
               Slutförköp <Link to="/Home"></Link>
                </Button>
               

               
                   
                
                   
          );
        }}
      </ProductConsumer>
      
    );
   
  }
  