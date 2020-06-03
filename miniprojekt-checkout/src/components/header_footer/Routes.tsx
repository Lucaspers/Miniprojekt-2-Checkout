
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

const Cart: React.FC = () => {
  return (
    <h1>
      <CartPage />
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

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/produc',
    sidebarName: 'Products',
    component: Products
  },
  {
    path: '/cart',
    sidebarName: 'Cart',
    component: Cart
  },
  {
    path: '/about',
    sidebarName: 'About Us',
    component: About
  },
  {
    path: '/contact',
    sidebarName: 'Contact Us',
    component: Contact
  },
];

export default Routes;
