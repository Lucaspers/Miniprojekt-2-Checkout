import React from 'react';
import { ProductConsumer } from "../../context/context";
import CardMedia from '@material-ui/core/CardMedia';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { makeStyles } from '@material-ui/core/styles';
import {Typography}  from "@material-ui/core";


const checkoutStyle = makeStyles((theme) => ({
  root: {
    position:"fixed",
    display:"flex",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  centerTitle: {
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
  },

  pic: {
    width:"50px",
    height: "50px",
  },

  containerBox: {
    display: "flex",
    flexDirection: "column",
  },

  cartSize: {
    display: "flex",
    width:"700px",
    height: "50px",
    padding: "30px",

  },
  cartDetail: {
    
    paddingRight: "100px",
  },
  
}));




export default function CartItem() {
  
  const classes = checkoutStyle();

  return (
    <ProductConsumer>
      {value => {
        const { cart, cartTotal,removeItem } = value;
   
        console.log(cart);
        return (
          <Typography>
          <div className={(classes.root, classes.centerTitle)}>
           
              {cart.map(item => {
                return (
                <div className={classes.containerBox} >
                  <div className={classes.cartSize}>
                                     
                      <div className={classes.cartDetail} >
                      <span>Product</span>                       
                      <CardMedia className={classes.pic}src={item.img}       
                      component="img"
                      alt="cart item"                                                     
                       />                    
                       </div>
                    
                      <div className={classes.cartDetail}>
                      <span>Title</span>
                      <h6 className="text-uppercase">{item.title}</h6>
                      </div>

                      <div className={classes.cartDetail}>
                        <span>Price</span>
                      <h6>
                        {item.price} Kr
                      </h6>
                      </div>

                      <div className={classes.cartDetail}> 
                        <span>Total Price</span>
                      <h6>
                        {item.count} * {item.price} : {item.total} kr
                      </h6>
                      </div>
                      
                      <div className={classes.cartDetail}><DeleteRoundedIcon  onClick={() => removeItem(item.id)} /> </div>                               
                     
                   
                    
                    </div> 
                  </div>
                );
              })}
            
            <h4 className="text-capitalize text-main">
              Cart total : {cartTotal}kr
            </h4>
            <div className="text-center my-5">
              
            </div>
            </div>
          
          </Typography>        
        );
      }}
    </ProductConsumer>
    
  );
 
}
