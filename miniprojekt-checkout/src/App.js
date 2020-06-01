import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import HomePage from './pages/Home.tsx';
import AboutPage from './pages/About.tsx';
import CartPage from './pages/Cart.tsx';
import CheckoutPage from './pages/Checkout.tsx';
import ContactPage from './pages/Contact.tsx';
import DefaultPage from './pages/Default.tsx';
import SingleProductPage from './pages/SingleProduct.tsx';


function App() {
  return (
    <div>
      <switch>
     <Route exact path='/' component={HomePage} />
     <Route  path='/About' component={AboutPage} />
     <Route  path='/Cart' component={CartPage} />
     <Route  path='/Checkout' component={CheckoutPage} />
     <Route  path='/Contact' component={ContactPage} />
     <Route  path='/About' component={DefaultPage} />
     <Route  path='/Single' component={SingleProductPage} />     
     </switch>
    </div>
  );
}

export default App;
