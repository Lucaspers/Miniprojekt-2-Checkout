import React, { Component } from 'react';
import items from '../data/productList';

const ProductContext = React.createContext();

// Provider
// Consumer
class ProductProvider extends Component {
    state = {   
      allProdducts:[],     
      price: 0,    
      cart: [],
      cartItems: 0,          
      carTotal: 0,
      storeProducts: []
    };

componentDidMount() {
    //from contentful items
    
    this.setProducts(items);
}

// get totals
getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;   
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
 
    subTotal = parseFloat(subTotal.toFixed(0));   
    let total = subTotal;
    total = parseFloat(total.toFixed(0));
    return {
      cartItems,
      subTotal,      
      total
    };
  };

// set products
setProducts = products => {
    let storeProducts = products.map(item => {
        const {id} = item.id;       
        const img =  item.img;
        const product = { id, ...item, img };
        return product
});

    // all products
    let allProdducts = storeProducts;    
    this.setState(
      {
        storeProducts,     
        allProdducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),        
      },
      () => {
        this.addTotals();
      }
    );
  };

  // get cart from local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  // get product from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  // get totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;   
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(0));        
    let total = subTotal;
    total = parseFloat(total.toFixed(0));
    return {
      cartItems,
      subTotal,         
      total
    };
  };
  //add totals
  
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,     
      cartTotal: totals.total    
    });
  };
  // sync storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  //add to cart
  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      console.log(tempItem.total);
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
        this.syncStorage();
       
      }
    );
  };
   
  //  cart functionality
 
   
  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,         
          addToCart: this.addToCart,         
          clearCart: this.clearCart,           
          syncStorage: this.syncStorage,
          addTotals: this.addTotals,
          getTotals: this.getTotals,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
