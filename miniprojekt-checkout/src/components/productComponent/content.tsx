import React from 'react';
import { Grid } from '@material-ui/core';
import Products from '../../data/productList';
import ProductCard from './productCard';
import { ProductConsumer } from "../../context/context";

const Content = () => {
    const getProducts = (productObj: any) => { 
          return (      
  <ProductConsumer>
            {value => {
              const { allProdducts } = value;
              return allProdducts.map(product => (
                <Grid item xs={12} sm={6} md={4}>
                  <ProductCard key={product.id} product={product} />
                </Grid>
              ));
            }}
          </ProductConsumer>            
            );
        };        
    return (
        <Grid container spacing={4}>
           {Products.map(productObj => getProducts(productObj))}
        </Grid>
    );
};

export default Content; 
