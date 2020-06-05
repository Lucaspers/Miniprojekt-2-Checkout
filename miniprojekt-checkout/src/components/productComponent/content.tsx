import React from 'react';
import ProductCard from './productCard';
import { Grid } from '@material-ui/core';
import Products from '../../data/productList';

const Content = () => {
    const getProducts = (productObj: any) => { 
    return (
       

            <Grid item xs={12} sm={6} md={4}>
                <ProductCard {...productObj} />
            </Grid>
            
            );
        };
        
    return (
        <Grid container spacing={4}>
           {Products.map(productObj => getProducts(productObj))}
        </Grid>
    );
};


export default Content;