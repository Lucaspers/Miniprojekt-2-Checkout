import React from 'react';
import {ProductConsumer} from '../../context'
import Product from '../../data/productList'

export default function Featured() {
    return (
    <ProductConsumer>
        {value => {
            const {featuredProduct} = value;

            return featuredProduct.map(product => (
               <Product key= {product.id} product= {product} />
               
               ))
               
        }}
    </ProductConsumer>       
       )
}