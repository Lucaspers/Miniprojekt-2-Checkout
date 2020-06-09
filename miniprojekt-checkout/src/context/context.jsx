import React, { Component } from 'react';
import items from '../data/productList';

const ProductContext = React.createContext();

// Provider
// Consumer
class ProductProvider extends Component {
    state = {            
      cart: [],
      cartItems: 0,
      cartSubTotal: 0,
      cartTax: 0,
      carTotal: 0,     
      allProdducts:[],
      storeProducts: [],
      price: 0,          
    };

componentDidMount() {
    //from contentful items
    
    this.setProducts(items);
}

// set products
setProducts = products => {
    let storeProducts = products.map(item => {
        const {id} = item.id;
        const img = item.img.url;
        const product = { id, ...item, img };
        return product
});
    console.log(storeProducts)

    // all products
    let allProdducts = storeProducts.filter(item => item.id != -1);
    this.setState({       
        allProdducts,
        storeProducts,       
    });
};

    render () {
        return (
        <ProductContext.Provider 
        value={{
            ...this.state,                      
        }}> 

        {this.props.children}
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };