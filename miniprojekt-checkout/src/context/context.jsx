import React, { Component } from 'react';
import items from '../data/productList';

const ProductContext = React.createContext();

// Provider
// Consumer
class ProductProvider extends Component{
state ={   
    cartOpen:false,
    cartItems: 11,
    cart: [],
    cartItems:0,
    cartSubTotal:0,
    cartText:0,
    cartTotal:0,
    storeProducts:[],
    filturedProducts:[],
    featuredProducts:[],
    singleProduct:{},
    loading:true
};


componentDidMount () {
    // from contentful items


    this.setProducts(items);
}

// set products

setProducts = (products) => {
    let storeProducts = products.map(item => {
        const id = item.id;
        const img = item.img
        const product = { id, ...item, img };
        return product
    });

    //console.log(storeProducts)

    // featured products

    let featuredProducts = storeProducts.filter(item => item.featured === 'true');
    this.setState({
        storeProducts,
        filteredProducts:storeProducts,
        featuredProducts,
        cart:this.getStorageCart(),
        singleProduct:this.getStorageProduct(),
        loading:false

    });
};

// get cart from storage
    getStorageCart = () => {
        return []
    };
// get product from local storage
    getStorageProduct = () => {
        return []
    };
// get totals
    getTotals = ()=> {};

// add totals
    addTotals = ()=> {};

// sync storage
syncStorage = ()=> {

}

// add to cart
addToCart = (id) => {
    //console.log(`add to cart ${id}`);
}

// set single product
setSingleProduct = (id) => {
    //console.log(`set single product cart ${id}`);
}

// handle Cart
handleCart = () =>{
    this.setState({cartOpen:!this.state.sidebarOpen})
}

// Close Cart

closeCart = () =>{
    this.setState({cartOpen:false})
}

// Open Cart

openCart = () =>{
    this.setState({cartOpen:true})
}


// render handleCart TOGGLE
    render () {
        return (
        <ProductContext.Provider 
        value={{
            ...this.state,
            handleCart: this.handleCart,
            openCart: this.openCart,
            closeCart: this.closeCart,
            addTocart:this.addToCart,
            setSingleProduct:this.setSingleProduct
        }}> 

        {this.props.children}
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };