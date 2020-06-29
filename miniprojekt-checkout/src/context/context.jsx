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
      cartTotal: 0,
      tax: 0,
      storeProducts: [],
      singleProduct: {},
      loading: true
      
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
        loading: false
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
   
      
      let cartItems = 0;
    
      this.state.cart.forEach(item => {
      
        cartItems += item.count;
      });

    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
       cartItems,
       subTotal,
       tax,
       total
     
    };
  };




  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartItems: totals.cartItems,
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total,
          
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };



  //shippment

  postNord = () => {
    const totals = this.getTotals();
    this.setState({
          
      cartTotal: totals.total +45   
    });

  };

  dHL = () => {
    const totals = this.getTotals();
    this.setState({
          
      cartTotal: totals.total +80   
    });
  };
  
  exPress = () => {
    const totals = this.getTotals();
    this.setState({
          
      cartTotal: totals.total +120   
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
    console.log(id);
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
          clearCart: this.clearCart,           
          syncStorage: this.syncStorage,
          addTotals: this.addTotals,
          getTotals: this.getTotals,
          postNord: this.postNord,
          dHL: this.dHL,
          exPress: this.exPress,
          setSingleProduct: this.setSingleProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
