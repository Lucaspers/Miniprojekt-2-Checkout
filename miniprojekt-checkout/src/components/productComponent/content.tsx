import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from './productCard';
import { ProductConsumer } from "../../context/context";


const Content = () => {
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

export default Content; 
