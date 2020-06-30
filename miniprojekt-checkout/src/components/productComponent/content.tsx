import React from 'react';
import { Grid } from '@material-ui/core';
import Products from '../../data/productList';
import ProductCard from './productCard';
import { ProductConsumer } from "../../context/context";


const Content = () => {
    const getProducts = (product: any) => { 
    
          return (   
            <Grid container spacing={4}>
   
  <ProductConsumer>
            {value => {
              const { allProdducts } = value;
              return allProdducts.map(product => (
                <Grid item xs={12} md={4}>
                  <ProductCard product={product} />
                </Grid>
              ));
            }}
          </ProductConsumer>    
          </Grid>        
            );
          
        };        
    /* return (
      <div>
        <Grid container spacing={4}>
           {Products.map(product => getProducts(product))}
        </Grid>
        </div>
    ); */
};

export default Content; 
