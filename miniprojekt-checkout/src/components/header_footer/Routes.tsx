
import React from 'react';
import HomePage from './../../pages/Home';
import AboutPage from './../../pages/About';
import CartPage from './../../pages/Cart';
import ProductsPage from './../../pages/ProductsPage';
import ContactPage from './../../pages/Contact';
import DefaultPage from './../../pages/Default';
import SingleProductPage from './../../pages/SingleProduct';


const Home: React.FC = () => {
  return (
    <h1>     
      <HomePage />
    </h1>
  );
};

const About: React.FC = () => {
  return (
    <h1>
      <AboutPage />
    </h1>
  );
};


const Products: React.FC = () => {
  return (    
    <h1>
      <ProductsPage />
    </h1>
  );
};


const Contact: React.FC = () => {
  return (    
    <h1>
      <ContactPage />
    </h1>
  );
};


const SingleProduct: React.FC = () => {
  return (
    <h1>
      <SingleProductPage />   
    </h1>
  );
};

const Cart: React.FC = () => {
  return (
    <h1>
       <CartPage />
    </h1>
  );
};


const Routes = [
  {
    id:1,
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    id:4,
    path: '/about',
    sidebarName: 'About',
    component: About
  },
  {
    id:2,
    path: '/products',
    sidebarName: 'Products',
    component: Products
  },
  {
    id:5,
    path: '/contact',
    sidebarName: 'Contact',
    component: Contact
  },
  {
    id:3,
    path: '/cart',
    sidebarName: 'Cart',
    component: Cart
  },
    
];

export default Routes;
