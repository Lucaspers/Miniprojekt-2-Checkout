import React from 'react';
import ProductCard from './productCard';
import { Grid } from '@material-ui/core';
import Products, { Product } from '../../data/productList';

const Content = () => {
    const getProducts = (productObj: Product) => { 
    return (
       

            <Grid item xs={12} sm={6} md={4} key={productObj.id}>
                <ProductCard product={productObj} />
            </Grid>
            
            );
        };
        
    return (
        <Grid container spacing={1}>
           {Products.map(productObj => getProducts(productObj))}
        </Grid>
    );
};


export default Content;