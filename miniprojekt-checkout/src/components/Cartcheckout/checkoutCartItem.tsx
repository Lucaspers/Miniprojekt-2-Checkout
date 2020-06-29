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
    marginTop: "80px",
    
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
    marginTop: "20px"

  },
  cartDetail: {
    
    paddingRight: "30px",
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
          <h1>Dina Varor</h1>
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
                        <span>Total</span>
                      <h6>
                         {item.total} kr
                      </h6>
                      </div>
                      
                      <div className={classes.cartDetail}><DeleteRoundedIcon  onClick={() => removeItem(item.id)} /> </div>                               
                     
                   
                    
                    </div> 
                  </div>
                );
              })}
            
            <h4  className={classes.cartSize}>
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
