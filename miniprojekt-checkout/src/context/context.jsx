import React, { Component } from 'react';
import items from '../data/productList';

const ProductContext = React.createContext();

// Provider
// Consumer
class ProductProvider extends Component {
    state = {   
      allProdducts:[],
      storeProducts: [],
      price: 0,    
      cart: [],
      cartItems: 0,     
      cartTax: 0,
      carTotal: 0
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

console.log(storeProducts)

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
  // set single product
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
  };

 
  //  cart functionality
 
  
  // removeItem
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

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
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
